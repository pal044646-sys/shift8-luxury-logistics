import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getBookingByTrackingCode } from "@/lib/tracking.functions";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Truck, MapPin, CheckCircle2, Package, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Track Your Move — SHIFT8 Movers & Packers" },
      { name: "description", content: "Live tracking for your SHIFT8 shipment. Enter your tracking code to see current status and location." },
      { property: "og:title", content: "Track Your Move — SHIFT8" },
      { property: "og:description", content: "Live tracking for your SHIFT8 shipment." },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Track Your Move — SHIFT8" },
      { name: "twitter:description", content: "Live tracking for your SHIFT8 shipment." },
    ],
  }),
  component: TrackPage,
});

const STEPS = [
  { key: "pending", label: "Booking Confirmed", icon: CheckCircle2 },
  { key: "picked_up", label: "Picked Up", icon: Package },
  { key: "packed", label: "Packed & Loaded", icon: Package },
  { key: "in_transit", label: "In Transit", icon: Truck },
  { key: "out_for_delivery", label: "Out for Delivery", icon: Truck },
  { key: "delivered", label: "Delivered", icon: CheckCircle2 },
];

function statusIndex(status: string) {
  const i = STEPS.findIndex((s) => s.key === status);
  return i < 0 ? 0 : i;
}

function TrackPage() {
  const fetchBooking = useServerFn(getBookingByTrackingCode);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<any>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setError(null);
    setBooking(null);
    try {
      const res = await fetchBooking({ data: { code: code.trim() } });
      if (!res.booking) setError("No booking found for this tracking code. Please check and try again.");
      else setBooking(res.booking);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const currentStep = booking ? statusIndex(booking.status) : -1;

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="font-display tracking-[0.25em] text-xs sm:text-sm text-gold/90 uppercase mb-3">
              Live Order Tracking
            </p>
            <h1 className="font-display text-3xl sm:text-5xl text-foreground mb-3">
              Track Your <span className="text-gold-gradient">Move</span>
            </h1>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Enter your tracking code below to see the real-time status of your shipment.
            </p>
          </div>

          <form onSubmit={onSubmit} className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="e.g. SH8-12345"
              className="flex-1 bg-transparent border border-gold/30 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold uppercase tracking-wider"
              maxLength={60}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-navy-deep disabled:opacity-60"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              {loading ? "Searching..." : (<>Track <ArrowRight size={18} /></>)}
            </button>
          </form>

          {error && (
            <div className="mt-6 glass-card rounded-2xl p-6 border border-destructive/40 text-center">
              <p className="text-destructive-foreground">{error}</p>
            </div>
          )}

          {booking && (
            <div className="mt-10 space-y-6">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold/80">Tracking Code</p>
                    <p className="font-display text-2xl text-gold-gradient">{booking.tracking_code}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-foreground/60">Status</p>
                    <p className="font-semibold text-gold capitalize">{booking.status.replaceAll("_", " ")}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-foreground/50 text-xs uppercase">Customer</p>
                    <p className="text-foreground">{booking.customer_name}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase">Service</p>
                    <p className="text-foreground">{booking.service_type}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase">From</p>
                    <p className="text-foreground">{booking.from_city}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50 text-xs uppercase">To</p>
                    <p className="text-foreground">{booking.to_city}</p>
                  </div>
                </div>

                {booking.current_location_text && (
                  <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20">
                    <MapPin className="text-gold shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold/80">Current Location</p>
                      <p className="text-foreground">{booking.current_location_text}</p>
                    </div>
                  </div>
                )}
                {booking.estimated_delivery && (
                  <div className="mt-3 flex items-center gap-3 text-sm text-foreground/70">
                    <Clock size={16} className="text-gold" />
                    Estimated delivery: <span className="text-foreground">{booking.estimated_delivery}</span>
                  </div>
                )}
              </div>

              {/* Progress Timeline */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <p className="font-display text-xl mb-6">Journey Progress</p>
                <div className="space-y-4">
                  {STEPS.map((step, i) => {
                    const done = i <= currentStep;
                    const active = i === currentStep;
                    const Icon = step.icon;
                    return (
                      <div key={step.key} className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                            done ? "bg-gold text-navy-deep border-gold" : "bg-transparent text-foreground/40 border-foreground/20"
                          } ${active ? "ring-4 ring-gold/30" : ""}`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <p className={done ? "text-foreground font-semibold" : "text-foreground/50"}>{step.label}</p>
                          {active && (
                            <p className="text-xs text-gold/80">In progress</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {booking.status === "delivered" && (
                <div className="glass-card rounded-2xl p-6 text-center gold-border">
                  <p className="text-foreground mb-3">Delivered successfully! 🎉 How was your experience?</p>
                  <Link
                    to="/feedback/$code"
                    params={{ code: booking.tracking_code }}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-navy-deep"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Leave Feedback <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
