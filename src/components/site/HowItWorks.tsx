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
  { icon: CalendarCheck, title: "Book Your Move", desc: "Share your move details in under a minute." },
  { icon: ClipboardList, title: "Free Survey", desc: "We assess and share a transparent quote." },
  { icon: PackageCheck, title: "Pro Packing", desc: "Multi-layer packing by trained experts." },
  { icon: Truck, title: "Safe Transport", desc: "GPS-tracked, insured fleet on the road." },
  { icon: Home, title: "Unload & Place", desc: "Items placed exactly where you want." },
  { icon: CheckCircle2, title: "Move Done", desc: "Final check and stress-free handover." },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 border-y border-gold/10 bg-navy-deep/40 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The SHIFT8 Journey"
          title={<>Your Move, Step By Step</>}
          subtitle="A precision-engineered 6-stage process — simple, transparent, reliable."
        />

        {/* ====== DESKTOP: horizontal rail with traveling truck ====== */}
        <div className="relative hidden lg:block pt-10">
          {/* rail */}
          <div
            className="absolute left-8 right-8 top-[68px] h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.13 85 / 0.5) 0%, oklch(0.78 0.13 85 / 0.5) 100%)",
            }}
            aria-hidden
          />
          {/* moving truck */}
          <div
            className="absolute top-[48px] left-0 right-0 px-8 pointer-events-none"
            aria-hidden
          >
            <div className="relative h-10">
              <div className="absolute top-0 left-0 right-0 animate-[truckRail_18s_ease-in-out_infinite]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-navy-deep"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  <Truck size={18} />
                </div>
              </div>
            </div>
          </div>

          <ol className="grid grid-cols-6 gap-5">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <li key={title} className="relative flex flex-col items-center">
                {/* number orb on rail */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-navy-deep font-display font-bold text-sm ring-[4px] ring-[var(--navy-deep)] mb-6"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* card */}
                <div className="w-full glass-card rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.45)]">
                  <div className="mx-auto gold-border rounded-xl w-11 h-11 flex items-center justify-center text-gold mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-sans font-semibold text-[15px] text-foreground mb-1.5 leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="text-xs text-foreground/65 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ====== MOBILE / TABLET: vertical rail with traveling truck ====== */}
        <div className="relative lg:hidden">
          {/* vertical rail */}
          <div
            className="absolute left-7 top-2 bottom-2 w-[2px] rounded-full"
            style={{ background: "oklch(0.78 0.13 85 / 0.4)" }}
            aria-hidden
          />
          {/* moving truck (vertical) */}
          <div
            className="absolute left-[10px] top-0 animate-[truckRailY_18s_ease-in-out_infinite]"
            aria-hidden
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-navy-deep"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <Truck size={16} />
            </div>
          </div>

          <ol className="space-y-4">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <li key={title} className="relative pl-20">
                {/* number orb */}
                <div
                  className="absolute left-0 top-3 w-14 h-14 rounded-full flex items-center justify-center text-navy-deep font-display font-bold text-sm ring-[4px] ring-[var(--navy-deep)] z-10"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Icon size={16} className="text-gold shrink-0" />
                    <h3 className="font-sans font-semibold text-base text-foreground leading-tight">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed pl-[26px]">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card rounded-2xl p-5 sm:p-6">
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-1">Ready when you are</p>
            <p className="font-display text-lg sm:text-xl text-foreground">
              Start your move in under 60 seconds.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Book Free Survey
          </a>
        </div>
      </div>

      <style>{`
        @keyframes truckRail {
          0% { transform: translateX(-20px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes truckRailY {
          0% { transform: translateY(-20px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(calc(100% + 600px)); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
