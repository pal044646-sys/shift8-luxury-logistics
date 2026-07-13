import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CITIES, SITE, SERVICES, HOME_FAQS } from "@/data/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Gauge, Handshake } from "lucide-react";

export const Route = createFileRoute("/packers-and-movers/$city")({
  loader: ({ params }) => {
    const city = CITIES.find((c) => c.slug === params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "City not found — SHIFT8" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.city;
    const url = `${SITE.domain}/packers-and-movers/${params.city}`;
    const title = `Packers and Movers ${c.name} — SHIFT8 | Trusted, Affordable, GPS-Tracked`;
    const description = `Professional packers and movers in ${c.name}, ${c.region}. House shifting, office relocation, car & bike transport with transparent pricing. Free quote from SHIFT8.`;
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
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", url: SITE.domain },
          { name: `Packers and Movers ${c.name}`, url },
        ])) },
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd(
          `Packers and Movers in ${c.name}`, description, params.city,
        )) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(HOME_FAQS.slice(0, 8))) },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  return (
    <main className="relative">
      <Navbar />
      <section className="pt-28 sm:pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-foreground/60 mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Packers &amp; Movers {city.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 gold-border rounded-full px-4 py-1.5 text-xs text-gold mb-6">
            <MapPin size={14} /> Serving {city.name}, {city.region}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6 leading-tight">
            Packers and Movers in {city.name}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            {city.intro} SHIFT8 offers safe, fast, and reliable relocation for households, offices, and vehicles — with transparent pricing and no hidden charges.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-navy-deep" style={{ background: "var(--gradient-gold)" }}>
              <Phone size={18} /> Call {SITE.phone}
            </a>
            <a href={SITE.waLink} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold glass-card text-gold">
              <MessageCircle size={18} /> WhatsApp Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, title: "Safe", desc: "5-ply cartons, bubble wrap, trained crew, transit insurance available." },
            { icon: Gauge, title: "Fast", desc: `Same-day and next-day slots for local ${city.name} moves.` },
            { icon: Handshake, title: "Reliable", desc: "Written quotes, on-time crews, GPS-tracked delivery." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <Icon className="text-gold mb-3" size={26} />
              <h3 className="font-display text-xl text-gold mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-6">
            Services We Offer in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="group glass-card rounded-2xl p-6 hover:border-gold/50 transition"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-gold transition">{s.name} in {city.name}</h3>
                    <p className="text-sm text-foreground/65 mt-1">{s.short}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {city.areas.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl text-gold-gradient font-bold mb-4">
              Areas We Cover in {city.name}
            </h2>
            <p className="text-foreground/70 mb-5">
              SHIFT8 crews reach every corner of {city.name} — including{" "}
              {city.areas.join(", ")}. Doorstep pickup, doorstep delivery.
            </p>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient font-bold mb-4">
            Why {city.name} Chooses SHIFT8
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3"><CheckCircle2 className="text-gold shrink-0 mt-1" size={18} /> Free on-site or video survey — written, itemised quotation, zero hidden charges.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold shrink-0 mt-1" size={18} /> Background-verified, uniformed crews trained on packing and furniture handling.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold shrink-0 mt-1" size={18} /> GPS-tracked vehicles with live location sharing throughout transit.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold shrink-0 mt-1" size={18} /> Transit insurance available for all interstate and long-distance moves.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold shrink-0 mt-1" size={18} /> Same-day and emergency shifting available within {city.name}.</li>
          </ul>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
