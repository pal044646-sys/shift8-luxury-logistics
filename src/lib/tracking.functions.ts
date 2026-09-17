import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function serverClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`)
          h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const getBookingByTrackingCode = createServerFn({ method: "GET" })
  .inputValidator((d: { code: string }) =>
    z.object({ code: z.string().trim().min(3).max(60) }).parse(d),
  )
  .handler(async ({ data }) => {
    const sb = serverClient();
    const { data: booking, error } = await sb
      .from("bookings")
      .select(
        "id, tracking_code, customer_name, from_city, to_city, service_type, status, current_location_text, current_location_lat, current_location_lng, estimated_delivery, created_at, updated_at, delivered_at",
      )
      .eq("tracking_code", data.code.toUpperCase())
      .maybeSingle();
    if (error) throw new Error(error.message);
    return { booking };
  });

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  service_type: z.string().trim().max(80).optional().or(z.literal("")),
  from_location: z.string().trim().max(120).optional().or(z.literal("")),
  to_location: z.string().trim().max(120).optional().or(z.literal("")),
  move_date: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => enquirySchema.parse(d))
  .handler(async ({ data }) => {
    const sb = serverClient();
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service_type: data.service_type || null,
      from_location: data.from_location || null,
      to_location: data.to_location || null,
      move_date: data.move_date || null,
      message: data.message || null,
    };
    const { error } = await sb.from("enquiries").insert(payload);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

const feedbackSchema = z.object({
  tracking_code: z.string().trim().min(3).max(60).optional().or(z.literal("")),
  customer_name: z.string().trim().max(80).optional().or(z.literal("")),
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitFeedback = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => feedbackSchema.parse(d))
  .handler(async ({ data }) => {
    const sb = serverClient();
    let booking_id: string | null = null;
    if (data.tracking_code) {
      const { data: b } = await sb
        .from("bookings")
        .select("id")
        .eq("tracking_code", data.tracking_code.toUpperCase())
        .maybeSingle();
      booking_id = b?.id ?? null;
    }
    const { error } = await sb.from("feedback").insert({
      booking_id,
      tracking_code: data.tracking_code ? data.tracking_code.toUpperCase() : null,
      customer_name: data.customer_name || null,
      rating: data.rating,
      comment: data.comment || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getRecentFeedback = createServerFn({ method: "GET" }).handler(async () => {
  const sb = serverClient();
  const { data, error } = await sb
    .from("feedback")
    .select("id, customer_name, rating, comment, created_at")
    .order("created_at", { ascending: false })
    .limit(20);
  if (error) throw new Error(error.message);
  return { feedback: data ?? [] };
});
