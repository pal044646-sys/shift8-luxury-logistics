import {
  CalendarCheck,
  ClipboardList,
  PackageCheck,
  Truck,
  Home,
  CheckCircle2,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    icon: CalendarCheck,
    label: "Step 01",
    title: "Book Your Move",
    desc: "Share your relocation details, preferred date and destination through a quick enquiry.",
    accent: "Enquiry",
  },
  {
    icon: ClipboardList,
    label: "Step 02",
    title: "Free Survey & Quote",
    desc: "Our move manager visits or video-surveys your inventory and prepares a transparent quote.",
    accent: "Planning",
  },
  {
    icon: PackageCheck,
    label: "Step 03",
    title: "Professional Packing",
    desc: "Trained packers use multi-layer materials — bubble wrap, corrugated sheets, wooden crates.",
    accent: "Packing Day",
  },
  {
    icon: Truck,
    label: "Step 04",
    title: "Safe Transportation",
    desc: "GPS-enabled fleet with trained drivers — your goods move under live tracking & insurance.",
    accent: "On The Road",
  },
  {
    icon: Home,
    label: "Step 05",
    title: "Unloading & Placement",
    desc: "We unload, unpack and place every item exactly where you want it in your new home.",
    accent: "Doorstep",
  },
  {
    icon: CheckCircle2,
    label: "Step 06",
    title: "Move Completed",
    desc: "Final walkthrough, signed delivery confirmation and post-move support — stress-free.",
    accent: "Handover",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 border-y border-gold/10 bg-navy-deep/40 overflow-hidden">
      {/* ambient gold glows */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The SHIFT8 Journey"
          title={<>Your Move, Step By Step</>}
          subtitle="A precision-engineered 6-stage process — from the moment you call us, to the moment your last box is placed."
        />

        {/* Desktop timeline rail */}
        <div className="relative">
          {/* central vertical spine on mobile / horizontal flow on desktop */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[88px] h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.78 0.13 85 / 0.55) 10%, oklch(0.78 0.13 85 / 0.55) 90%, transparent 100%)",
            }}
            aria-hidden
          />
          {/* animated truck running across the rail */}
          <div
            className="hidden lg:block absolute top-[72px] left-0 text-gold animate-[truckMove_14s_linear_infinite]"
            aria-hidden
          >
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full blur-md opacity-70"
                style={{ background: "var(--gradient-gold)" }}
              />
              <div
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-navy-deep"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <Truck size={18} />
              </div>
            </div>
          </div>

          {/* vertical rail on mobile */}
          <div
            className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, oklch(0.78 0.13 85 / 0.55) 8%, oklch(0.78 0.13 85 / 0.55) 92%, transparent 100%)",
            }}
            aria-hidden
          />

          <ol className="grid gap-8 lg:gap-6 lg:grid-cols-6 relative">
            {steps.map(({ icon: Icon, label, title, desc, accent }, idx) => (
              <li
                key={title}
                className="group relative pl-16 lg:pl-0 lg:pt-32"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* numbered orb on the rail */}
                <div className="absolute lg:left-1/2 lg:-translate-x-1/2 left-0 top-0 lg:top-[64px] z-10">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-90 transition-opacity"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center text-navy-deep font-display font-bold text-base ring-[3px] ring-[var(--navy-deep)] transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* card */}
                <div className="glass-card rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.45)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
                      {label}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      {accent}
                    </span>
                  </div>

                  <div className="gold-border rounded-lg w-11 h-11 flex items-center justify-center text-gold mb-3">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-display text-lg lg:text-xl text-foreground mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>

                  {/* progress chip */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-[3px] flex-1 rounded-full bg-gold/15 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${((idx + 1) / steps.length) * 100}%`,
                          background: "var(--gradient-gold)",
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-gold/70 font-mono">
                      {String(Math.round(((idx + 1) / steps.length) * 100)).padStart(2, "0")}%
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card rounded-2xl p-5 sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-1">Ready when you are</p>
            <p className="font-display text-lg sm:text-xl text-foreground">
              Start your move in under 60 seconds.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Book Free Survey
          </a>
        </div>
      </div>

      <style>{`
        @keyframes truckMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw - 6rem)); }
        }
      `}</style>
    </section>
  );
}
