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
    label: "Step 1",
    title: "Book Your Move",
    desc: "Share your relocation details, preferred moving date, and destination.",
  },
  {
    icon: ClipboardList,
    label: "Step 2",
    title: "Free Survey & Planning",
    desc: "Our team evaluates your requirements and prepares a customized moving plan.",
  },
  {
    icon: PackageCheck,
    label: "Step 3",
    title: "Professional Packing",
    desc: "Experienced movers carefully pack all household, office, or commercial items using quality materials.",
  },
  {
    icon: Truck,
    label: "Step 4",
    title: "Safe Transportation",
    desc: "Your belongings are transported securely using well-maintained vehicles and professional handling.",
  },
  {
    icon: Home,
    label: "Step 5",
    title: "Unloading & Placement",
    desc: "Upon arrival, items are unloaded carefully and placed according to your instructions.",
  },
  {
    icon: CheckCircle2,
    label: "Step 6",
    title: "Move Successfully Completed",
    desc: "Final verification is completed to ensure everything has been delivered safely and correctly.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 border-y border-gold/10 bg-navy-deep/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title={<>Simple. Transparent. Reliable.</>}
          subtitle="A six-step process engineered for safety, speed, and total peace of mind."
        />

        <div className="relative">
          {/* connector line on desktop */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-7 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.78 0.13 85 / 0.5) 15%, oklch(0.78 0.13 85 / 0.5) 85%, transparent 100%)",
            }}
            aria-hidden
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, label, title, desc }, idx) => (
              <li
                key={title}
                className="group relative glass-card rounded-2xl p-6 pt-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_25px_60px_-25px_rgba(212,175,55,0.4)]"
              >
                {/* numbered orb */}
                <div className="absolute -top-7 left-6">
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center text-navy-deep font-display font-bold text-lg ring-4 ring-[var(--navy-deep)] transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                  >
                    {idx + 1}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="gold-border rounded-lg w-10 h-10 flex items-center justify-center text-gold">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold/80">
                    {label}
                  </span>
                </div>

                <h3 className="font-display text-xl text-foreground mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>

                {/* arrow connector (desktop, not on last col of each row) */}
                <div
                  className={`hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-gold/60 ${
                    (idx + 1) % 3 === 0 ? "lg:hidden" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
