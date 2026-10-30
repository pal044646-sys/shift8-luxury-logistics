import { Link } from "@tanstack/react-router";
import { CITIES, ROUTES } from "@/data/seo";
import { SectionTitle } from "./SectionTitle";
import { MapPin, Route as RouteIcon } from "lucide-react";

const ROUTE_PREVIEW_COUNT = 10;

export function CityLinks() {
  const previewRoutes = ROUTES.slice(0, ROUTE_PREVIEW_COUNT);
  return (
    <section id="coverage" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Service Coverage"
          title={<>Packers &amp; Movers Across India</>}
          subtitle="Serving major cities and intercity routes nationwide — Delhi NCR, Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata and more. Our operations base is Haridwar, Uttarakhand."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-red" size={20} />
              <h3 className="font-display text-xl text-foreground font-semibold">
                Cities We Serve
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/packers-and-movers/$city"
                    params={{ city: c.slug }}
                    className="inline-block hairline-border rounded-full px-4 py-1.5 text-sm text-foreground/85 hover:bg-red/10 hover:text-red transition"
                  >
                    Packers &amp; Movers {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <RouteIcon className="text-red" size={20} />
              <h3 className="font-display text-xl text-foreground font-semibold">
                Popular Intercity Routes
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {previewRoutes.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/routes/$route"
                    params={{ route: r.slug }}
                    className="inline-block hairline-border rounded-full px-4 py-1.5 text-sm text-foreground/85 hover:bg-red/10 hover:text-red transition"
                  >
                    {r.from} to {r.to}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-foreground/60">
              Don&apos;t see your route? We arrange city-to-city relocation across
              India — <Link to="/enquiry" className="text-red hover:underline">request a quote</Link> with your pickup and destination cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
