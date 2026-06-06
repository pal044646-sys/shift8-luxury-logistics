import { PackageCheck, BadgeIndianRupee, MapPin, DoorOpen, Headphones, Zap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reasons = [
  { icon: PackageCheck, title: "Premium Packing", desc: "Multi-layer protection on every item." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden charges. Ever." },
  { icon: MapPin, title: "Live GPS Tracking", desc: "Watch your move in real time." },
  { icon: DoorOpen, title: "Door-to-Door", desc: "We lift, load, transport, unload, arrange." },
  { icon: Headphones, title: "Dedicated Support", desc: "A move manager assigned to you." },
  { icon: Zap, title: "Fast Delivery", desc: "Committed timelines, honored." },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Why Choose SHIFT8" title={<>Crafted For Trust</>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 glass-card rounded-2xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl gold-border flex items-center justify-center text-gold">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">{title}</h3>
                <p className="text-sm text-foreground/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
