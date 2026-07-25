import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

async function assertAdmin(supabase: any, userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin only");
}

const bookingSchema = z.object({
  tracking_code: z.string().trim().min(3).max(60),
  customer_name: z.string().trim().min(2).max(80),
  customer_phone: z.string().trim().min(7).max(20),
  customer_email: z.string().trim().email().max(120).optional().or(z.literal("")),
  from_city: z.string().trim().min(1).max(80),
  to_city: z.string().trim().min(1).max(80),
  service_type: z.string().trim().min(1).max(80),
  status: z.enum(["pending", "picked_up", "packed", "in_transit", "out_for_delivery", "delivered", "cancelled"]).default("pending"),
  current_location_text: z.string().trim().max(200).optional().or(z.literal("")),
  current_location_lat: z.number().optional().nullable(),
  current_location_lng: z.number().optional().nullable(),
  estimated_delivery: z.string().trim().optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const listBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { bookings: data ?? [] };
  });

export const createBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => bookingSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const payload = {
      tracking_code: data.tracking_code.toUpperCase(),
      customer_name: data.customer_name,
      customer_phone: data.customer_phone,
      customer_email: data.customer_email || null,
      from_city: data.from_city,
      to_city: data.to_city,
      service_type: data.service_type,
      status: data.status,
      current_location_text: data.current_location_text || null,
      current_location_lat: data.current_location_lat ?? null,
      current_location_lng: data.current_location_lng ?? null,
      estimated_delivery: data.estimated_delivery || null,
      notes: data.notes || null,
    };
    const { data: row, error } = await context.supabase.from("bookings").insert(payload).select().single();
    if (error) throw new Error(error.message);
    return { booking: row };
  });

const updateSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["pending", "picked_up", "packed", "in_transit", "out_for_delivery", "delivered", "cancelled"]).optional(),
  current_location_text: z.string().trim().max(200).optional(),
  current_location_lat: z.number().optional().nullable(),
  current_location_lng: z.number().optional().nullable(),
  estimated_delivery: z.string().trim().optional(),
  notes: z.string().trim().max(1000).optional(),
});

export const updateBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => updateSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { id, ...updates } = data;
    const patch: any = { ...updates };
    if (patch.status === "delivered") patch.delivered_at = new Date().toISOString();
    const { error } = await context.supabase.from("bookings").update(patch).eq("id", id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("bookings").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listEnquiries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { enquiries: data ?? [] };
  });

export const updateEnquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string; status: string }) =>
    z.object({ id: z.string().uuid(), status: z.string().trim().max(30) }).parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("enquiries").update({ status: data.status }).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listFeedback = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return { feedback: data ?? [] };
  });

// Bootstrap the first admin: any signed-in user can call this ONLY if no admin exists yet.
export const bootstrapFirstAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error: cErr } = await supabaseAdmin
      .from("user_roles")
      .select("*", { count: "exact", head: true })
      .eq("role", "admin");
    if (cErr) throw new Error(cErr.message);
    if ((count ?? 0) > 0) throw new Error("Admin already configured. Contact support.");
    const { error } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: context.userId, role: "admin" }, { onConflict: "user_id,role" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (error) return { isAdmin: false };
    return { isAdmin: !!data };
  });
