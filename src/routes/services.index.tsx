import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, SITE, HOME_FAQS } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => {
    const url = `${SITE.domain}/services`;
    const title = "Packers and Movers Services in India | SHIFT8";
    const description =
      "Explore SHIFT8's moving services in India — house shifting, office relocation, intercity moving, car & bike transport, packing, storage and loading services.";
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
              { name: "Services", url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: `${SITE.domain}/services/${s.slug}`,
            })),
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS)) },
      ],
    };
  },
  component: ServicesIndex,
});

function ServicesIndex() {
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
            <span className="text-gold">Services</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Packers &amp; Movers Services in India
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            SHIFT8 offers complete relocation services across India — from household shifting and
            office relocation to intercity moving, vehicle transport, packing, and secure storage.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="group glass-card rounded-2xl p-7 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
              >
                <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-gold mb-2">
                  {s.name}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{s.short}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-gold">
                  Learn more{" "}
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

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
