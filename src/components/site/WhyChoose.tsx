import { PackageCheck, DoorOpen, Headphones, Zap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reasons = [
  {
    icon: PackageCheck,
    title: "Premium Packing",
    desc: "High-quality packing materials and expert handling to ensure maximum protection for your belongings.",
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Service",
    desc: "We handle everything from pickup to final placement — lifting, loading, transport, unloading, and arrangement.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "A dedicated move manager is assigned to assist you throughout the entire relocation process.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Reliable transportation with committed delivery timelines and timely status updates.",
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why SHIFT8"
          title={<>Crafted For Trust</>}
          subtitle="Four pillars that make every SHIFT8 move a premium, worry-free experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_25px_60px_-25px_rgba(212,175,55,0.45)]"
            >
              <div
                className="mb-5 w-14 h-14 rounded-xl flex items-center justify-center text-navy-deep transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <Icon size={24} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
