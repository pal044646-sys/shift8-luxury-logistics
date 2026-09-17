import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DESTINATIONS, SITE, HOME_FAQS, cityForDestination } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, ArrowRight, Clock, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/haridwar-to/$destination")({
  loader: ({ params }) => {
    const dest = DESTINATIONS.find((d) => d.slug === params.destination);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Route not found — SHIFT8" }, { name: "robots", content: "noindex" }],
      };
    }
    const d = loaderData.dest;
    const url = `${SITE.domain}/haridwar-to/${params.destination}`;
    const title = `Haridwar to ${d.name} Packers and Movers — SHIFT8`;
    const description = `Trusted Haridwar to ${d.name} movers and packers. ${d.km} km, ${d.hours} transit. Door-to-door shifting, GPS tracking, transit insurance. Free quote.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE.domain },
              { name: `Haridwar to ${d.name}`, url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd(
              `Haridwar to ${d.name} Packers and Movers`,
              description,
              params.destination,
            ),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS)) },
      ],
    };
  },
  component: RoutePage,
});

function RoutePage() {
  const { dest } = Route.useLoaderData();
  const city = cityForDestination(dest.slug);
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
            <span className="text-gold">Haridwar to {dest.name}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Haridwar to {dest.name} Packers &amp; Movers
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <MapPin size={14} className="text-gold" /> ~{dest.km} km
            </span>
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <Clock size={14} className="text-gold" /> {dest.hours} transit
            </span>
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <ArrowRight size={14} className="text-gold" /> Door to Door
            </span>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            {dest.intro} SHIFT8 handles Haridwar to {dest.name} shifting end to end — packing,
            loading, GPS-tracked transit, unloading, and rearrangement at your new address.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone size={18} /> Call {SITE.phone}
            </a>
            <a
              href={SITE.waLink}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-gold"
            >
              <MessageCircle size={18} /> WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            What's Included in Your Haridwar to {dest.name} Move
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Free on-site or video survey with a written, itemised quote",
              "Professional room-by-room packing with 5-ply cartons and bubble wrap",
              "Furniture disassembly at pickup, reassembly at delivery",
              "Loading, transit, and unloading by trained SHIFT8 crew",
              `GPS-tracked vehicle throughout the ${dest.hours} journey`,
              "Transit insurance available on request",
              "Doorstep pickup in Haridwar, doorstep delivery in " + dest.name,
              "Transparent pricing — zero hidden charges, no move-day surprises",
            ].map((item) => (
              <div key={item} className="glass-card rounded-xl p-4 flex gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {city && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
              More About Moving to {dest.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/packers-and-movers/$city"
                params={{ city: city.slug }}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-gold hover:bg-gold/10 transition"
              >
                <MapPin size={18} /> Packers &amp; Movers in {city.name}
              </Link>
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-foreground/85 hover:bg-gold/10 transition"
              >
                <ArrowRight size={18} /> Explore intercity routes
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
