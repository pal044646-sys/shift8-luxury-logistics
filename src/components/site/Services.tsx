import { Home, Building2, Package, Bike, Warehouse, Car, Truck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { NAV_SERVICES } from "@/data/seo";

const icons: Record<string, typeof Home> = {
  "house-shifting": Home,
  "office-relocation": Building2,
  "intercity-moving": Truck,
  "packing-services": Package,
  "car-transportation": Car,
  "bike-transportation": Bike,
  "warehouse-storage": Warehouse,
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title={<>Moving India, One Shift at a Time</>}
          subtitle="From a single apartment to a multi-floor office, SHIFT8 delivers premium relocation across every major Indian city."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {NAV_SERVICES.map((s) => {
            const Icon = icons[s.slug] ?? Truck;
            return (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="group card-surface rounded-2xl p-7 hover:border-foreground/25 hover:shadow-lift transition-all duration-500 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red text-white mb-5 transition-transform group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {s.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{s.short}</p>
                <div className="mt-5 h-px w-12 bg-red/40 group-hover:w-full group-hover:bg-red transition-all duration-500" />
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-ink-soft transition-colors"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
