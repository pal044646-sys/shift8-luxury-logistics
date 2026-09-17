import { Link } from "@tanstack/react-router";
import { CITIES, ROUTES } from "@/data/seo";
import { SectionTitle } from "./SectionTitle";
import { MapPin, Route as RouteIcon, ArrowRight } from "lucide-react";

const nationalCities = CITIES.filter((c) => c.isNational);

export function CityLinks() {
  return (
    <section id="coverage" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Service Coverage"
          title={<>Packers &amp; Movers Across India</>}
          subtitle="Nationwide relocation from Delhi to Bengaluru, Mumbai to Kolkata — with dedicated, GPS-tracked vehicles on every intercity route."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-gold" size={20} />
              <h3 className="font-display text-xl text-gold-gradient font-semibold">
                Cities We Serve
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {nationalCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/packers-and-movers/$city"
                    params={{ city: c.slug }}
                    className="inline-block gold-border rounded-full px-4 py-1.5 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
                  >
                    Packers &amp; Movers {c.name}
                  </Link>
                </li>
              ))}
              <li className="w-full mt-3">
                <Link
                  to="/packers-and-movers"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline"
                >
                  Browse all cities <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <RouteIcon className="text-gold" size={20} />
              <h3 className="font-display text-xl text-gold-gradient font-semibold">
                Popular Intercity Routes
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {ROUTES.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/routes/$route"
                    params={{ route: r.slug }}
                    className="inline-block gold-border rounded-full px-4 py-1.5 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
                  >
                    {r.from} to {r.to}
                  </Link>
                </li>
              ))}
              <li className="w-full mt-3">
                <Link
                  to="/routes"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline"
                >
                  View all routes <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
