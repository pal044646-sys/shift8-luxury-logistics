import { createFileRoute, Link } from "@tanstack/react-router";
import { ROUTES, DESTINATIONS, SITE, HOME_FAQS } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, Route as RouteIcon, MapPin, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/routes/")({
  head: () => {
    const url = `${SITE.domain}/routes`;
    const title = "Intercity Packers and Movers Routes in India | SHIFT8";
    const description =
      "Compare intercity moving routes across India — Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata and more. Dedicated GPS-tracked vehicles, door-to-door delivery.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE.domain },
              { name: "Intercity Routes", url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: ROUTES.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Packers and Movers ${r.from} to ${r.to}`,
              url: `${SITE.domain}/routes/${r.slug}`,
            })),
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS)) },
      ],
    };
  },
  component: RoutesIndex,
});

function RoutesIndex() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 sm:pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-foreground/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Routes</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Intercity Packers &amp; Movers Routes
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            Dedicated, GPS-tracked moving vehicles on every major Indian corridor — with
            door-to-door pickup and delivery, transparent pricing, and transit insurance on request.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone size={18} /> Get Free Quote
            </a>
            <a
              href={SITE.waLink}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-gold"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            Popular Intercity Routes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROUTES.map((r) => (
              <Link
                key={r.slug}
                to="/routes/$route"
                params={{ route: r.slug }}
                className="group glass-card rounded-2xl p-6 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 text-gold">
                    <RouteIcon size={16} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-foreground/60">
                    <Clock size={13} /> {r.time}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold mb-1">
                  {r.from} to {r.to}
                </h3>
                <p className="text-xs text-foreground/55 mb-3">
                  ~{r.km.toLocaleString("en-IN")} km · door-to-door
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-gold">
                  Route details{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-3">
            Moving From Haridwar?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-3xl">
            Every move out of our Haridwar hub is booked end to end — packing, loading, tracked
            transit, and doorstep delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.slug}
                to="/haridwar-to/$destination"
                params={{ destination: d.slug }}
                className="group glass-card rounded-2xl px-5 py-3 hover:border-gold/50 transition"
              >
                <span className="inline-flex items-center gap-2 font-display text-sm text-foreground group-hover:text-gold">
                  <MapPin size={14} className="text-gold" /> Haridwar to {d.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
