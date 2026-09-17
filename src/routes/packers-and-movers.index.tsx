import { createFileRoute, Link } from "@tanstack/react-router";
import { CITIES, SITE, HOME_FAQS } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/packers-and-movers/")({
  head: () => {
    const url = `${SITE.domain}/packers-and-movers`;
    const title = "Packers and Movers in Indian Cities | SHIFT8";
    const description =
      "SHIFT8 provides professional packers and movers services across India — Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata and more. Get a free moving quote.";
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
              { name: "Packers and Movers in Indian Cities", url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: CITIES.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Packers and Movers in ${c.name}`,
              url: `${SITE.domain}/packers-and-movers/${c.slug}`,
            })),
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS)) },
      ],
    };
  },
  component: CitiesIndex,
});

const nationalCities = CITIES.filter((c) => c.isNational);
const ukCities = CITIES.filter((c) => !c.isNational);

function CitiesIndex() {
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
            <span className="text-gold">Cities</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Packers &amp; Movers in Indian Cities
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            SHIFT8 coordinates pan-India moves from our Haridwar hub — serving metro cities like
            Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Chennai and Kolkata, plus our home region
            across Uttarakhand.
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
            Major Cities Across India
          </h2>
          <div className="flex flex-wrap gap-3">
            {nationalCities.map((c) => (
              <Link
                key={c.slug}
                to="/packers-and-movers/$city"
                params={{ city: c.slug }}
                className="group glass-card rounded-2xl px-5 py-3.5 hover:border-gold/50 transition"
              >
                <span className="inline-flex items-center gap-2 font-display text-base text-foreground group-hover:text-gold">
                  <MapPin size={15} className="text-gold" /> {c.name}
                </span>
                <span className="block text-xs text-foreground/60 mt-1">
                  Packers &amp; Movers {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-3">
            Our Home Region: Uttarakhand
          </h2>
          <p className="text-foreground/70 mb-6 max-w-3xl">
            Based in Haridwar, SHIFT8 provides doorstep moving across Uttarakhand — Haridwar,
            Roorkee, Rishikesh, Dehradun and surrounding towns.
          </p>
          <div className="flex flex-wrap gap-3">
            {ukCities.map((c) => (
              <Link
                key={c.slug}
                to="/packers-and-movers/$city"
                params={{ city: c.slug }}
                className="group glass-card rounded-2xl px-5 py-3.5 hover:border-gold/50 transition"
              >
                <span className="inline-flex items-center gap-2 font-display text-base text-foreground group-hover:text-gold">
                  <MapPin size={15} className="text-gold" /> {c.name}
                </span>
                <span className="block text-xs text-foreground/60 mt-1">
                  Packers &amp; Movers {c.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground/65 max-w-3xl">
            Moving from Haridwar to another city? See our{" "}
            <Link to="/routes" className="text-gold hover:underline">
              intercity routes
            </Link>{" "}
            and{" "}
            <Link
              to="/haridwar-to/$destination"
              params={{ destination: "delhi" }}
              className="text-gold hover:underline"
            >
              Haridwar to Delhi
            </Link>{" "}
            movers or any{" "}
            <Link
              to="/haridwar-to/$destination"
              params={{ destination: "gurgaon" }}
              className="text-gold hover:underline"
            >
              NCR destination
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
