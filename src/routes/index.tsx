import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { GPSTracking } from "@/components/site/GPSTracking";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Gallery } from "@/components/site/Gallery";
import { Testimonial } from "@/components/site/Testimonial";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHIFT8 Movers & Packers — India's Premium Moving Partner" },
      {
        name: "description",
        content:
          "Premium house shifting, office relocation, GPS-enabled transport, and trusted packing services across India by SHIFT8.",
      },
      { property: "og:title", content: "SHIFT8 Movers & Packers — India's Premium Moving Partner" },
      {
        property: "og:description",
        content: "Real moves, live GPS tracking, transparent process, and premium support from SHIFT8.",
      },
      { property: "og:url", content: "https://shift8-luxury-logistics.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://shift8-luxury-logistics.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <GPSTracking />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Gallery />
      <Testimonial />
      <CTASection />
      <Footer />
    </main>
  );
}
