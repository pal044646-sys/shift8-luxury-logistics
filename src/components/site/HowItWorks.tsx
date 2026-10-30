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
    <section className="relative py-24 sm:py-32 border-y border-border bg-offwhite/70 overflow-hidden">
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
            className="absolute left-8 right-8 top-[68px] h-[2px] rounded-full bg-foreground/15"
            aria-hidden
          />
          {/* moving truck */}
          <div
            className="absolute top-[48px] left-0 right-0 px-8 pointer-events-none"
            aria-hidden
          >
            <div className="relative h-10">
              <div className="absolute top-0 left-0 right-0 animate-[truckRail_18s_ease-in-out_infinite]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red shadow-lift">
                  <Truck size={18} />
                </div>
              </div>
            </div>
          </div>

          <ol className="grid grid-cols-6 gap-5">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <li key={title} className="relative flex flex-col items-center">
                {/* number orb on rail */}
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-sm ring-4 ring-offwhite bg-red mb-6">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* card */}
                <div className="w-full card-surface rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lift">
                  <div className="mx-auto hairline-border rounded-xl w-11 h-11 flex items-center justify-center text-red bg-card mb-3">
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
            className="absolute left-7 top-2 bottom-2 w-[2px] rounded-full bg-foreground/15"
            aria-hidden
          />
          {/* moving truck (vertical) */}
          <div
            className="absolute left-[10px] top-0 animate-[truckRailY_18s_ease-in-out_infinite]"
            aria-hidden
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-red">
              <Truck size={16} />
            </div>
          </div>

          <ol className="space-y-4">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <li key={title} className="relative pl-20">
                {/* number orb */}
                <div className="absolute left-0 top-3 w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-sm ring-4 ring-offwhite bg-red z-10">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="card-surface rounded-2xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Icon size={16} className="text-red shrink-0" />
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

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 card-surface rounded-2xl p-5 sm:p-6">
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-red font-semibold mb-1">
              Ready when you are
            </p>
            <p className="font-display text-lg sm:text-xl text-foreground">
              Start your move in under 60 seconds.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold bg-primary text-primary-foreground hover:bg-ink-soft transition-colors whitespace-nowrap"
          >
            Book Free Survey
          </a>
        </div>
      </div>

      <style>{`
        @keyframes truckRail {
          0% { transform: translateX(0%); opacity: 0; }
          5% { opacity: 1; }
          45% { transform: translateX(calc(100% - 2.5rem)); opacity: 1; }
          55% { transform: translateX(calc(100% - 2.5rem)); opacity: 1; }
          95% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(0%); opacity: 0; }
        }
        @keyframes truckRailY {
          0% { transform: translateY(0); opacity: 0; }
          5% { opacity: 1; }
          45% { transform: translateY(calc(100vh + 200px)); opacity: 1; }
          55% { transform: translateY(calc(100vh + 200px)); opacity: 1; }
          95% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
