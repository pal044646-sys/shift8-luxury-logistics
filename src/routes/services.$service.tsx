import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, SITE, HOME_FAQS } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.service);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — SHIFT8" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.svc;
    const url = `${SITE.domain}/services/${params.service}`;
    const title = `${s.name} in Haridwar — SHIFT8 Movers & Packers`;
    const description = `${s.short} Trusted ${s.name.toLowerCase()} across Haridwar, Uttarakhand and pan-India by SHIFT8. Free quote, transparent pricing.`;
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
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", url: SITE.domain },
          { name: s.name, url },
        ])) },
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd(s.name, description, params.service)) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS.slice(0, 8))) },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { svc } = Route.useLoaderData();
  return (
    <main>
      <Navbar />
      <section className="pt-28 sm:pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-foreground/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{svc.name}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            {svc.h1}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">{svc.short}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep" style={{ background: "var(--gradient-gold)" }}>
              <Phone size={18} /> Get Free Quote
            </a>
            <a href={SITE.waLink} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-gold">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl text-gold-gradient font-bold mb-5">What You Get</h2>
            <ul className="space-y-3">
              {svc.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-gold-gradient font-bold mb-5">Our Process</h2>
            <ol className="space-y-3">
              {svc.process.map((step, i) => (
                <li key={step} className="flex gap-3 text-foreground/85">
                  <span className="shrink-0 w-7 h-7 rounded-full gold-border text-gold text-sm flex items-center justify-center font-semibold">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
