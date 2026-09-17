import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ROUTES, SITE } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, CheckCircle2, MapPin, Clock, Truck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/routes/$route")({
  loader: ({ params }) => {
    const route = ROUTES.find((r) => r.slug === params.route);
    if (!route) throw notFound();
    return { route };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Route not found — SHIFT8" }, { name: "robots", content: "noindex" }],
      };
    }
    const r = loaderData.route;
    const url = `${SITE.domain}/routes/${params.route}`;
    const title = `Packers and Movers from ${r.from} to ${r.to} | SHIFT8`;
    const description = `${r.from} to ${r.to} packers and movers — ${r.km.toLocaleString("en-IN")} km, ${r.time}. Dedicated GPS-tracked vehicle, door-to-door delivery, transit insurance on request.`;
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
              { name: "Routes", url: `${SITE.domain}/routes` },
              { name: `${r.from} to ${r.to}`, url },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Packers and Movers from ${r.from} to ${r.to}`,
            description,
            provider: { "@id": `${SITE.domain}/#business` },
            areaServed: "India",
            url,
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(r.faqs)) },
      ],
    };
  },
  component: RoutePage,
});

function RoutePage() {
  const { route } = Route.useLoaderData();
  const otherRoutes = ROUTES.filter((r) => r.slug !== route.slug);
  const fromCity = route.from.toLowerCase();
  const toCity = route.to.toLowerCase();

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
            <Link to="/routes" className="hover:text-gold">
              Routes
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">
              {route.from} to {route.to}
            </span>
          </nav>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <MapPin size={14} className="text-gold" /> ~{route.km.toLocaleString("en-IN")} km
            </span>
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <Clock size={14} className="text-gold" /> {route.time} transit
            </span>
            <span className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5">
              <Truck size={14} className="text-gold" /> Dedicated vehicle
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Packers &amp; Movers from {route.from} to {route.to}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">{route.intro}</p>
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
              <MessageCircle size={18} /> WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            What's Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {route.included.map((item) => (
              <div key={item} className="glass-card rounded-xl p-4 flex gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            Tips for Moving on the {route.from} to {route.to} Route
          </h2>
          <ol className="space-y-3">
            {route.tips.map((tip, i) => (
              <li key={tip} className="flex gap-3 text-foreground/85">
                <span className="shrink-0 w-7 h-7 rounded-full gold-border text-gold text-sm flex items-center justify-center font-semibold">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            Related Moving Pages
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/packers-and-movers/$city"
              params={{ city: fromCity }}
              className="inline-flex items-center gap-1.5 rounded-xl gold-border px-4 py-2 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
            >
              <MapPin size={14} className="text-gold" /> Packers &amp; Movers {route.from}
            </Link>
            <Link
              to="/packers-and-movers/$city"
              params={{ city: toCity }}
              className="inline-flex items-center gap-1.5 rounded-xl gold-border px-4 py-2 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
            >
              <MapPin size={14} className="text-gold" /> Packers &amp; Movers {route.to}
            </Link>
            {otherRoutes.slice(0, 6).map((r) => (
              <Link
                key={r.slug}
                to="/routes/$route"
                params={{ route: r.slug }}
                className="inline-flex items-center gap-1.5 rounded-xl gold-border px-4 py-2 text-sm text-foreground/85 hover:bg-gold/10 hover:text-gold transition"
              >
                <ArrowRight size={14} className="text-gold" /> {r.from} to {r.to}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={route.faqs} />
      <CTASection />
      <Footer />
    </main>
  );
}
