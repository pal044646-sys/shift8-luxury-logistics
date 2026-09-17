import { SITE, HOME_FAQS, SERVICES, type FAQ } from "@/data/seo";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE.domain}/#business`,
    name: SITE.name,
    alternateName: "SHIFT8 Packers and Movers Across India",
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.domain}/og-image.png`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      postalCode: SITE.postalCode,
      addressCountry: SITE.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      "India",
      "Delhi",
      "Delhi NCR",
      "Mumbai",
      "Pune",
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
      "Chandigarh",
      "Haridwar",
      "Dehradun",
      "Rishikesh",
      "Roorkee",
      "Uttarakhand",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Relocation Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: s.name, url: `${SITE.domain}/services/${s.slug}` },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    publisher: { "@id": `${SITE.domain}/#business` },
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE.domain}/#business` },
    areaServed: { "@type": "Country", name: "India" },
    url: `${SITE.domain}/services/${slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export const HOME_FAQ_LD = () => faqJsonLd(HOME_FAQS);
