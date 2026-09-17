import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, CheckCircle2, ArrowRight, Users } from "lucide-react";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.service);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — SHIFT8" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.svc;
    const url = `${SITE.domain}/services/${params.service}`;
    const title = `${s.h1} | SHIFT8`;
    const description = `${s.short} Doorstep pickup and delivery across India. Free written quote, GPS tracking, transparent pricing.`;
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
              { name: "Services", url: `${SITE.domain}/services` },
              { name: s.name, url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceJsonLd(s.name, description, params.service)),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(s.faqs)) },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { svc } = Route.useLoaderData();
  const related = SERVICES.filter((s) => svc.related.includes(s.slug));

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
            <Link to="/services" className="hover:text-gold">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{svc.name}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            {svc.h1}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">{svc.short}</p>
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl text-gold-gradient font-bold mb-5">
              What You Get
            </h2>
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
                  <span className="shrink-0 w-7 h-7 rounded-full gold-border text-gold text-sm flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {svc.whoFor.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-3xl text-gold-gradient font-bold mb-5 flex items-center gap-2">
                <Users size={26} /> Who It's For
              </h2>
              <ul className="space-y-3">
                {svc.whoFor.map((w) => (
                  <li key={w} className="flex gap-3 text-foreground/85">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-gold-gradient font-bold mb-5">
                What's Included
              </h2>
              <ul className="space-y-3">
                {svc.included.map((inc) => (
                  <li key={inc} className="flex gap-3 text-foreground/85">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/services/$service"
                  params={{ service: r.slug }}
                  className="inline-flex items-center gap-1.5 rounded-xl gold-border px-4 py-2 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
                >
                  {r.name} <ArrowRight size={14} />
                </Link>
              ))}
              <Link
                to="/routes"
                className="inline-flex items-center gap-1.5 rounded-xl gold-border px-4 py-2 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
              >
                Intercity Routes <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ faqs={svc.faqs} />
      <CTASection />
      <Footer />
    </main>
  );
}
