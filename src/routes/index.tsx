import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonial } from "@/components/site/Testimonial";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHIFT8 Movers & Packers — Haridwar's Premium Moving Partner" },
      {
        name: "description",
        content:
          "Safe. Fast. Reliable. Premium house shifting, office relocation, packing & interstate moving services in Haridwar by SHIFT8.",
      },
      { property: "og:title", content: "SHIFT8 Movers & Packers — Premium Moving in Haridwar" },
      { property: "og:description", content: "White-glove relocation services. Get your free quote today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustStrip />
      <WhyChoose />
      <Services />
      <Testimonial />
      <CTASection />
      <Footer />
    </main>
  );
}
