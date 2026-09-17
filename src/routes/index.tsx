import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/data/seo";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Packers and Movers Across India | SHIFT8 Movers & Packers";
    const description =
      "SHIFT8 — Packers and Movers Across India. Safe, affordable and reliable house shifting, office relocation, packing, loading, car and bike transportation services across India. Head office: Haridwar.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "packers and movers india, packers and movers across india, best packers and movers, house shifting services india, office relocation india, intercity moving india, car transport india, bike transport india, haridwar to delhi packers and movers",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${SITE.domain}/` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) },
        { type: "application/ld+json", children: JSON.stringify(websiteJsonLd()) },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <HowItWorks />
      <Reviews />
      <CTASection />
      <Footer />
    </main>
  );
}
