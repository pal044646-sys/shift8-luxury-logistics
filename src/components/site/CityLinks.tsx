import { Link } from "@tanstack/react-router";
import { CITIES, DESTINATIONS } from "@/data/seo";
import { SectionTitle } from "./SectionTitle";
import { MapPin, Route as RouteIcon } from "lucide-react";

export function CityLinks() {
  return (
    <section id="coverage" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Service Coverage"
          title={<>Packers &amp; Movers Across Uttarakhand &amp; India</>}
          subtitle="Serving Haridwar, Roorkee, Rishikesh, Dehradun and dispatching pan-India — Delhi, Mumbai, Bangalore, and every major city."
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
              {CITIES.map((c) => (
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
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <RouteIcon className="text-gold" size={20} />
              <h3 className="font-display text-xl text-gold-gradient font-semibold">
                Popular Routes from Haridwar
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/haridwar-to/$destination"
                    params={{ destination: d.slug }}
                    className="inline-block gold-border rounded-full px-4 py-1.5 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
                  >
                    Haridwar to {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
