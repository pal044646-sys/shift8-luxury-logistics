import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitEnquiry } from "@/lib/tracking.functions";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Get a Free Moving Quote — SHIFT8 Movers & Packers" },
      {
        name: "description",
        content:
          "Get a free, no-obligation moving quote from SHIFT8 — packers and movers across India. House shifting, office relocation and intercity moving.",
      },
      { property: "og:title", content: "Get a Free Moving Quote — SHIFT8" },
      {
        property: "og:description",
        content: "Quick enquiry form — free moving quote across India.",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Get a Free Moving Quote — SHIFT8" },
      { name: "twitter:description", content: "Quick enquiry form — instant quote." },
    ],
  }),
  component: EnquiryPage,
});

const SERVICES = [
  "House Shifting",
  "Office Relocation",
  "Commercial Relocation",
  "Intercity Moving",
  "Car Transport",
  "Bike Transport",
  "Storage",
  "Packing Only",
  "Other",
];

function EnquiryPage() {
  const send = useServerFn(submitEnquiry);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    from_location: "",
    to_location: "",
    move_date: "",
    message: "",
  });

  function upd<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await send({ data: form });
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <p className="font-display tracking-[0.25em] text-xs sm:text-sm text-red/90 uppercase mb-3">
              Free Quote · 5-Minute Response
            </p>
            <h1 className="font-display text-3xl sm:text-5xl text-foreground mb-3">
              Get Your <span className="text-red">Custom Quote</span>
            </h1>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Fill this quick form — our team will call you back to confirm the best price and
              schedule for your move anywhere in India.
            </p>
          </div>

          {done ? (
            <div className="card-surface rounded-2xl p-10 text-center hairline-border">
              <CheckCircle2 className="text-red mx-auto mb-4" size={56} />
              <h2 className="font-display text-2xl mb-2 text-foreground">Thank You!</h2>
              <p className="text-foreground/80 mb-6">
                Your enquiry has been submitted. Our team will contact you shortly to confirm your
                moving quote.
              </p>
              <a
                href="tel:8439973125"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white"
                style={{ background: "var(--cta-bg)" }}
              >
                Call Us Now: 8439973125
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-surface rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full Name *"
                  required
                  value={form.name}
                  onChange={(v) => upd("name", v)}
                />
                <Field
                  label="Phone *"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => upd("phone", v)}
                />
              </div>
              <Field
                label="Email (optional)"
                type="email"
                value={form.email}
                onChange={(v) => upd("email", v)}
              />
              <div>
                <label className="block text-sm text-foreground/70 mb-1.5">Service Type</label>
                <select
                  value={form.service_type}
                  onChange={(e) => upd("service_type", e.target.value)}
                  className="w-full bg-transparent border border-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-red"
                >
                  <option value="" className="bg-white">
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="From (City/Area)"
                  value={form.from_location}
                  onChange={(v) => upd("from_location", v)}
                />
                <Field
                  label="To (City/Area)"
                  value={form.to_location}
                  onChange={(v) => upd("to_location", v)}
                />
              </div>
              <Field
                label="Preferred Move Date"
                type="date"
                value={form.move_date}
                onChange={(v) => upd("move_date", v)}
              />
              <div>
                <label className="block text-sm text-foreground/70 mb-1.5">
                  Message / Special Requests
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => upd("message", e.target.value)}
                  maxLength={1000}
                  className="w-full bg-transparent border border-foreground/20 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-red"
                  placeholder="Extra items, floor number, special handling requirements..."
                />
              </div>

              {error && <p className="text-destructive-foreground text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white disabled:opacity-60"
                style={{ background: "var(--cta-bg)", boxShadow: "var(--cta-shadow)" }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Enquiry <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-xs text-foreground/50 text-center">
                Ya direct call karein:{" "}
                <a href="tel:8439973125" className="text-red">
                  8439973125
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-foreground/70 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={200}
        className="w-full bg-transparent border border-foreground/20 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-red"
      />
    </div>
  );
}
