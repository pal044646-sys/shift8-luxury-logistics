import { Home, Building2, Package, Bike, Warehouse, Car } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const services = [
  { icon: Home, title: "House Shifting", desc: "Stress-free home relocation with expert packing & care." },
  { icon: Building2, title: "Office Relocation", desc: "Minimum downtime, maximum efficiency for your business." },
  { icon: Package, title: "Packing & Unpacking", desc: "Premium materials & trained crew for every fragile item." },
  { icon: Car, title: "Car Transportation", desc: "Enclosed carriers with door-to-door delivery." },
  { icon: Bike, title: "Bike Transportation", desc: "Safe two-wheeler transit across India." },
  { icon: Warehouse, title: "Warehouse & Storage", desc: "Secure, climate-controlled storage on demand." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title={<>Your Move, Our Mission</>}
          subtitle="From a single apartment to a multi-floor office, SHIFT8 delivers white-glove relocation tailored to your scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group glass-card rounded-2xl p-7 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Icon className="text-navy-deep" size={26} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{desc}</p>
              <div className="mt-5 h-px w-12 bg-gold/40 group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
