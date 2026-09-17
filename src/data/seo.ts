import type {
  FAQ,
  ServiceInfo,
  Slug,
  BlogPost,
  CityInfo,
  NationalRouteInfo,
  DestinationInfo,
} from "./types";
import { METRO_CITIES } from "./cities-metro";
import { REGIONAL_CITIES } from "./cities-regional";
import { UK_CITIES } from "./cities-uk";
import { ROUTES, DESTINATIONS } from "./routes";

export type { FAQ, ServiceInfo, Slug, BlogPost, CityInfo, NationalRouteInfo, DestinationInfo };
export { ROUTES, DESTINATIONS };

export const CITIES: CityInfo[] = [...METRO_CITIES, ...REGIONAL_CITIES, ...UK_CITIES];

export const SITE = {
  name: "SHIFT8 Movers & Packers",
  brand: "SHIFT8",
  tagline: "आपका सामान हमारी ज़िम्मेदारी",
  domain: "https://shift8.in",
  phone: "+91 8439973125",
  phoneRaw: "+918439973125",
  waLink: "https://wa.me/918439973125",
  email: "info@shift8.in",
  addressLocality: "Haridwar",
  addressRegion: "Uttarakhand",
  addressCountry: "IN",
  postalCode: "249401",
  streetAddress: "Haridwar, Uttarakhand",
  geo: { lat: 29.9457, lng: 78.1642 },
  description:
    "India's premium movers & packers. Home shifting, office relocation and moving services across India, coordinated from our Haridwar hub.",
};

/** Maps a city slug to its Haridwar-origin route slug where one exists. */
const CITY_TO_HARIDWAR_SLUG: Record<string, string> = {
  delhi: "delhi",
  noida: "noida",
  gurugram: "gurgaon",
  mumbai: "mumbai",
  pune: "pune",
  bengaluru: "bangalore",
  hyderabad: "hyderabad",
  chennai: "chennai",
  kolkata: "kolkata",
  ahmedabad: "ahmedabad",
  jaipur: "jaipur",
  lucknow: "lucknow",
  chandigarh: "chandigarh",
  indore: "indore",
  bhopal: "bhopal",
  patna: "patna",
  dehradun: "dehradun",
  rishikesh: "rishikesh",
  roorkee: "roorkee",
};

export interface RouteLink {
  label: string;
  href: string;
}

/** Routes genuinely connected to a city — national intercity routes plus the Haridwar-origin route. */
export function cityRelatedRoutes(city: CityInfo): RouteLink[] {
  const links: RouteLink[] = [];
  const name = city.name.toLowerCase();
  for (const r of ROUTES) {
    if (r.from.toLowerCase() === name)
      links.push({ label: `Movers from ${r.from} to ${r.to}`, href: `/routes/${r.slug}` });
    else if (r.to.toLowerCase() === name)
      links.push({ label: `Movers from ${r.from} to ${r.to}`, href: `/routes/${r.slug}` });
  }
  const destSlug = CITY_TO_HARIDWAR_SLUG[city.slug];
  const dest = destSlug ? DESTINATIONS.find((d) => d.slug === destSlug) : undefined;
  if (dest)
    links.unshift({ label: `Haridwar to ${city.name} movers`, href: `/haridwar-to/${destSlug}` });
  return links;
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "house-shifting",
    name: "House Shifting",
    h1: "House Shifting Services in India",
    short:
      "End-to-end household relocation — packing, loading, transport, unloading, and rearranging your home.",
    bullets: [
      "Room-by-room professional packing with bubble wrap, corrugated sheets, and 5-ply cartons",
      "Trained crew of 4–8 for lifting, disassembly, and reassembly of furniture",
      "GPS-tracked vehicles, transit insurance available on request",
      "Doorstep pickup and doorstep placement — you don't lift a single carton",
    ],
    process: [
      "Free on-site or video survey",
      "Transparent, itemised quotation with no hidden charges",
      "Scheduled packing on your chosen date",
      "Loading with padded blankets and edge protection",
      "Safe transit with live status updates",
      "Unloading, unpacking, and furniture reassembly",
    ],
    whoFor: [
      "Families shifting within the same city",
      "Homeowners relocating to another city or state",
      "First-time movers who want full packing support",
      "Anyone who wants a fixed, itemised price before move day",
    ],
    included: [
      "Packing materials — 5-ply cartons, bubble wrap, stretch film, foam sheets",
      "Furniture disassembly and reassembly",
      "Loading, transit, unloading and placement",
      "GPS tracking and live status updates",
      "Transit insurance available on request",
    ],
    faqs: [
      {
        q: "How much does house shifting cost in India?",
        a: "It depends on load size, distance, floor and packing level. Local moves often start around ₹3,500–₹6,000 for a 1 BHK, while intercity moves are quoted after a free survey — never estimated over the phone alone.",
      },
      {
        q: "Do you pack everything for me?",
        a: "Yes. Our standard house-shifting service covers room-by-room packing with premium materials, furniture disassembly, loading, transport, unloading and rearrangement.",
      },
      {
        q: "Do you offer same-day shifting?",
        a: "For small loads and intra-city moves, same-day survey-to-delivery is frequently possible. Intercity moves are scheduled with a committed delivery window.",
      },
    ],
    related: ["packing-services", "office-relocation", "intercity-moving"],
  },
  {
    slug: "office-relocation",
    name: "Office Relocation",
    h1: "Office Relocation Services in India",
    short:
      "Minimum downtime commercial moves — workstations, servers, files, and modular partitions handled by experienced crews.",
    bullets: [
      "Weekend and after-hours moves to protect business continuity",
      "IT-safe packing for CPUs, monitors, servers, and network gear",
      "Asset tagging and inventory sheet handed over at delivery",
      "Insurance and MSA-friendly documentation available",
    ],
    process: [
      "Pre-move survey and floor plan review",
      "Colour-coded labels per department and desk",
      "Systematic dismantling of workstations and partitions",
      "Transit in dedicated (non-shared) vehicles",
      "Reassembly at new office — plug-and-play by Monday",
    ],
    whoFor: [
      "Startups and SMEs moving to a bigger office",
      "Corporate branches relocating within a city",
      "Companies shifting offices across cities",
      "Businesses that cannot afford a day of downtime",
    ],
    included: [
      "Weekend and after-hours scheduling",
      "IT-safe packing and asset inventory",
      "Dedicated vehicles",
      "Workstation and partition reassembly",
      "Disposal/relocation documentation support",
    ],
    faqs: [
      {
        q: "Can you move our office over a weekend?",
        a: "Yes — weekend and after-hours moves are our standard practice for offices so your team returns to a fully set-up workplace on Monday.",
      },
      {
        q: "How do you protect servers and network equipment?",
        a: "Electronics are packed anti-static and bubble-wrapped into labelled crates, moved separately where needed, and handed over with an asset inventory.",
      },
      {
        q: "Do you relocate offices between cities?",
        a: "Yes — corporate moves between metros run on dedicated vehicles with IT-safe packing and coordination at both ends.",
      },
    ],
    related: ["commercial-relocation", "warehouse-storage", "intercity-moving"],
  },
  {
    slug: "intercity-moving",
    name: "Intercity Moving",
    h1: "Intercity Packers and Movers Across India",
    short:
      "City-to-city relocation with dedicated, GPS-tracked vehicles — packing, long-distance transit, and door-to-door delivery anywhere in India.",
    bullets: [
      "Dedicated vehicles — no shared loads, no reloading delays",
      "Live GPS tracking with milestone updates throughout transit",
      "Transit insurance available on all intercity routes",
      "Doorstep pickup and doorstep delivery in both cities",
      "Experienced long-haul drivers with documented rest planning",
    ],
    process: [
      "Free survey and itemised intercity quotation",
      "Professional packing built for long-distance transit",
      "Loading and secure bracing inside the vehicle",
      "GPS-tracked transit with status updates",
      "Unloading, unpacking and placement at destination",
    ],
    whoFor: [
      "Families relocating to another city",
      "Professionals moving for a new job",
      "Students or couples moving rented apartments",
      "Businesses shifting offices or warehouses across cities",
    ],
    included: [
      "Full packing, loading, transit and unloading",
      "Dedicated GPS-tracked vehicle",
      "Furniture disassembly and reassembly",
      "Transit insurance on request",
      "Coordination of society entry at both ends",
    ],
    faqs: [
      {
        q: "Do intercity moves use dedicated trucks?",
        a: "Yes — your goods travel alone on a dedicated vehicle, so there are no shared-load delays or mixing of goods.",
      },
      {
        q: "How do you track long-distance moves?",
        a: "Every intercity vehicle is GPS-enabled. You receive a live link and milestone updates from loading to delivery.",
      },
      {
        q: "How far in advance should I book an intercity move?",
        a: "For month-end and weekend slots, book 7–10 days ahead. Mid-month weekday moves can often be arranged within a few days.",
      },
    ],
    related: ["house-shifting", "office-relocation", "car-transportation"],
  },
  {
    slug: "packing-services",
    name: "Packing Services",
    h1: "Professional Packing Services in India",
    short:
      "Standalone packing service — we bring materials, do the work, you take the transport yourself if you prefer.",
    bullets: [
      "5-ply corrugated cartons, bubble wrap, stretch film, foam sheets",
      "Fragile-safe packing for glass, crockery, electronics, artwork",
      "Wardrobe cartons for hangable clothes",
      "Labeled and inventoried cartons for easy unpacking",
    ],
    process: [
      "Home survey and material estimate",
      "Room-by-room packing on-site",
      "Fragile items double-boxed and marked",
      "Inventory sheet handover",
    ],
    whoFor: [
      "Self-movers who arrange their own truck",
      "Anyone shipping goods via courier or transport",
      "Customers who want materials plus professional labour",
      "Collection pieces and fragile items needing specialist wrapping",
    ],
    included: [
      "All packing materials",
      "Professional packing crew",
      "Fragile double-boxing and marking",
      "Inventory sheet",
    ],
    faqs: [
      {
        q: "Can I book packing only and arrange my own vehicle?",
        a: "Yes — packing-only is a standalone service. We pack, label and inventory your goods, and you handle the transport.",
      },
      {
        q: "What packing materials do you provide?",
        a: "5-ply cartons, bubble wrap, stretch film, foam sheets, wardrobe cartons and corner/edge protection for furniture.",
      },
      {
        q: "Do you pack single fragile items?",
        a: "Yes — TVs, mirrors, artwork and appliances can be packed individually, double-boxed and marked fragile.",
      },
    ],
    related: ["house-shifting", "loading-unloading"],
  },
  {
    slug: "car-transportation",
    name: "Car Transportation",
    h1: "Car Transportation Services Across India",
    short:
      "Enclosed and open car carriers with door-to-door delivery across India — insured, GPS-tracked, and photograph-verified.",
    bullets: [
      "Single-car and multi-car carriers, both open and enclosed",
      "Pre-loading and pre-delivery condition photos",
      "Fuel drained to safe levels for interstate transport",
      "Insurance-in-transit available on request",
    ],
    process: [
      "Vehicle inspection and condition report",
      "Loading on car carrier with wheel straps",
      "Real-time GPS tracking through transit",
      "Delivery inspection and signed handover",
    ],
    whoFor: [
      "Anyone relocating with a car to another city",
      "Students and professionals moving across states",
      "Dealers and fleets shipping multiple vehicles",
      "Second-car owners using their own relocation logistics",
    ],
    included: [
      "Open or enclosed carrier",
      "Condition photos before and after",
      "GPS tracking through transit",
      "Insurance-in-transit on request",
      "Documentation for interstate movement",
    ],
    faqs: [
      {
        q: "Is car transport door-to-door?",
        a: "Yes — we pick up your car from your address and deliver it to your new address, with condition photos recorded at both stages.",
      },
      {
        q: "Open or enclosed carrier — which should I choose?",
        a: "Enclosed carriers give maximum protection for premium vehicles; open carriers are the more common, cost-effective choice for standard cars. We quote both.",
      },
      {
        q: "Do you deliver cars on the same route as household goods?",
        a: "Cars travel on specialised carriers, separately from household loads, for safety and compliance.",
      },
    ],
    related: ["bike-transportation", "intercity-moving"],
  },
  {
    slug: "bike-transportation",
    name: "Bike Transportation",
    h1: "Bike Transportation Services Across India",
    short:
      "Safe two-wheeler transit across India with professional crating, foam padding, and transit insurance.",
    bullets: [
      "Wooden crating or heavy-duty polythene wrap based on route length",
      "Fuel drained and battery terminals disconnected for safety",
      "Door pickup and door delivery — no need to visit a transport nagar",
      "Insurance-in-transit and full documentation",
    ],
    process: [
      "Bike inspection and condition photos",
      "Draining fuel, disconnecting battery, packing",
      "Loading with straps and edge protection",
      "GPS-tracked transit and doorstep handover",
    ],
    whoFor: [
      "Bike owners relocating between cities",
      "People transporting a single two-wheeler to a family member",
      "Enthusiasts moving premium or vintage bikes",
      "Anyone avoiding the hassle of transport nagars",
    ],
    included: [
      "Crating or multi-layer wrap",
      "Condition photos pre and post transit",
      "Door pickup and door delivery",
      "Insurance-in-transit on request",
    ],
    faqs: [
      {
        q: "How long does bike transport between cities take?",
        a: "Timelines depend on distance — short corridors take a couple of days, while cross-country routes can take a week. You get a committed window.",
      },
      {
        q: "Is my bike safe from scratches?",
        a: "Yes — fuel is drained, the battery is disconnected, and the bike is crated or multi-layer wrapped with edge protection before loading.",
      },
      {
        q: "Do you pick up from my home?",
        a: "Yes — doorstep pickup and delivery are standard, so you never have to go to a transport terminal.",
      },
    ],
    related: ["car-transportation", "intercity-moving"],
  },
  {
    slug: "warehouse-storage",
    name: "Warehouse & Storage",
    h1: "Warehouse & Storage Services in India",
    short:
      "Secure, dry, monitored warehousing for household goods and business inventory — from a week to a year.",
    bullets: [
      "Clean, pest-controlled warehouse with 24×7 security",
      "Palletised storage for household goods",
      "Flexible short-term (1 week) and long-term (12+ months) plans",
      "Retrieval within 24 hours of request",
    ],
    process: [
      "Inventory intake with photos and tags",
      "Palletised, wrapped, and stored",
      "Monthly reports available on request",
      "Delivery back to any address you specify",
    ],
    whoFor: [
      "Families with a gap between two homes",
      "Businesses storing inventory between seasons",
      "People downsizing who need space, not disposal",
      "Anyone moving abroad who needs long-term storage",
    ],
    included: [
      "Clean, monitored warehouse space",
      "Palletised, wrapped storage",
      "24×7 security",
      "Retrieval and re-delivery on request",
      "Optional monthly condition reports",
    ],
    faqs: [
      {
        q: "How long can I store my goods?",
        a: "Plans run from one week to twelve months or more — short-term and long-term both work, with transparent per-month pricing.",
      },
      {
        q: "Is the warehouse secure?",
        a: "Yes — a clean, pest-controlled facility with 24×7 security, palletised and wrapped storage for every item.",
      },
      {
        q: "How quickly can I get my goods back?",
        a: "Retrieval is executed within 24 hours of your request, and delivery back to any address you specify.",
      },
    ],
    related: ["house-shifting", "office-relocation"],
  },
  {
    slug: "loading-unloading",
    name: "Loading & Unloading",
    h1: "Loading & Unloading Services in India",
    short:
      "Labour-only service for customers who arrange their own truck — trained crew for lifting, stairs, and careful placement.",
    bullets: [
      "Trained crew (2–8 workers) available hourly or per-shift",
      "Furniture disassembly and reassembly included",
      "Padded blankets, tie-down ropes, and hand tools provided",
      "Same-day and emergency availability in Haridwar",
    ],
    process: [
      "Book crew size and time slot",
      "Crew arrives with tools and padding",
      "Load with care into your vehicle",
      "Unload and place at destination",
    ],
    whoFor: [
      "Customers who own or hire their own truck",
      "People who pack themselves but need lifting help",
      "Furniture and appliance moves without a full service",
      "Emergency or same-day labour needs",
    ],
    included: [
      "Trained labour crew",
      "Padded blankets, ropes and hand tools",
      "Furniture disassembly and reassembly",
      "Careful placement at destination",
    ],
    faqs: [
      {
        q: "Does labour-only move include packing?",
        a: "No — this service covers trained labour for loading, unloading and placement. Packing is available as a separate service.",
      },
      {
        q: "Can I get labour for a few hours only?",
        a: "Yes — crews can be booked hourly or per-shift based on your load and timeline.",
      },
      {
        q: "Where is loading & unloading available?",
        a: "It's available in Haridwar and our Uttarakhand operating area, with same-day and emergency bookings.",
      },
    ],
    related: ["packing-services", "house-shifting"],
  },
  {
    slug: "commercial-relocation",
    name: "Commercial Relocation",
    h1: "Commercial & Industrial Relocation Across India",
    short:
      "Factory, workshop, and warehouse relocation with heavy-lifting equipment and coordinated logistics.",
    bullets: [
      "Machinery packing, skidding, and crating",
      "Cranes, forklifts, and hydraulic trolleys",
      "Multi-vehicle convoys with route planning",
      "Full documentation and insurance coordination",
    ],
    process: [
      "Site survey and lifting plan",
      "Machinery dismantling and crating",
      "Loading with cranes / forklifts",
      "Convoy transit with GPS monitoring",
      "Reassembly and commissioning at new site",
    ],
    whoFor: [
      "Factories relocating plant and machinery",
      "Warehouses moving inventory and racking",
      "Workshops shifting equipment between premises",
      "Businesses moving across cities or states",
    ],
    included: [
      "Heavy-lifting equipment as required",
      "Machinery packing, crating and skidding",
      "Multi-vehicle logistics and route planning",
      "Documentation and insurance coordination",
    ],
    faqs: [
      {
        q: "Can you move heavy machinery?",
        a: "Yes — with cranes, forklifts and hydraulic trolleys as required, plus skidding and crating for delicate plant equipment.",
      },
      {
        q: "Do you plan multi-vehicle moves?",
        a: "Yes — larger relocations run as coordinated convoys with route planning and GPS monitoring for every vehicle.",
      },
      {
        q: "Is industrial relocation available across cities?",
        a: "Yes — commercial and industrial moves are arranged across India with documentation and insurance coordination.",
      },
    ],
    related: ["office-relocation", "warehouse-storage", "intercity-moving"],
  },
];

export const NAV_SERVICES = SERVICES.slice(0, 6);

export const HOME_FAQS: FAQ[] = [
  {
    q: "Which are the best packers and movers in India?",
    a: "SHIFT8 is a fast-growing national mover and packer, offering transparent pricing, GPS-tracked vehicles, trained crews, and end-to-end house and office relocation across India from our Haridwar hub.",
  },
  {
    q: "How much do packers and movers cost in India?",
    a: "Intra-city moves typically start from about ₹3,500 for a 1 BHK. Intercity shifting depends on distance and load — quotes are always given after a free survey, and our quotations are itemised with no hidden charges.",
  },
  {
    q: "Do you offer same-day shifting?",
    a: "For small loads and intra-city moves, yes — surveys, packing and delivery are frequently completed on the same day. Intercity moves are booked with a committed delivery window.",
  },
  {
    q: "Are my belongings insured during transit?",
    a: "Transit insurance is available on request for all interstate and long-distance moves. We recommend it for high-value households and any move above 300 km.",
  },
  {
    q: "How early should I book my move?",
    a: "For weekend or month-end moves, 5–7 days in advance is ideal. Long-distance and metro-to-metro moves are best booked 7–10 days ahead.",
  },
  {
    q: "Do you charge for the survey and quotation?",
    a: "No. Site or video surveys and detailed written quotations are completely free. Our quotes are itemised and there are no hidden charges.",
  },
  {
    q: "Can you move a single item — one bike, one sofa, one fridge?",
    a: "Yes. We handle single-item transport regularly, including bikes, cars, refrigerators, LEDs, and one-piece furniture, with proper packing and doorstep delivery.",
  },
  {
    q: "Which cities do you cover across India?",
    a: "We operate from Haridwar and arrange moves to, from and within metro cities like Delhi, Noida, Gurugram, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow and Chandigarh — plus every major Indian city.",
  },
  {
    q: "Do you provide packing material?",
    a: "Yes. All packing materials — 5-ply cartons, bubble wrap, stretch film, foam sheets, wardrobe boxes — are included in our standard house-shifting quote.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes. All SHIFT8 vehicles are GPS-enabled. You get a live tracking link and status updates from loading to delivery.",
  },
  {
    q: "Do you offer storage / warehousing?",
    a: "Yes. We offer clean, secure, pest-controlled warehouse storage from one week to twelve months — ideal for gap periods between moves.",
  },
  {
    q: "Are your movers verified and trained?",
    a: "Every SHIFT8 crew member is background-verified, uniformed, and trained on packing standards, furniture handling, and customer conduct.",
  },
  {
    q: "Do you handle office and factory relocation?",
    a: "Yes. We handle office relocation, commercial shifting, and industrial machinery moves, including weekend and after-hours schedules to minimise business downtime.",
  },
  {
    q: "What if something is damaged during the move?",
    a: "For insured moves, damages are settled through the transit insurance policy. For non-insured moves, SHIFT8 offers a fair-value compensation policy for goods damaged due to crew handling.",
  },
  {
    q: "How do I get a quote from SHIFT8?",
    a: "Call +91 8439973125, WhatsApp us, or use the Get Free Quote form. Our team responds within 15 minutes during business hours.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-packers-and-movers",
    title: "How to Choose Packers and Movers in India: A Practical Checklist",
    description:
      "A practical, India-wide checklist to verify packers and movers before you book — registration, surveys, insurance, and red flags.",
    date: "2026-03-05",
    minutes: 7,
    body: [
      "Every mover sounds professional on a phone call. The difference between a smooth relocation and a stressful one is usually decided before you book — in how thoroughly you verify the company. Here's a practical checklist that works anywhere in India, from Delhi to Bengaluru.",
      "1. Verify the business. Ask for a GST number, a physical office address (not just a mobile number), and current vehicle registration details. Legitimate pan-India movers are happy to share these.",
      "2. Insist on a survey before a final price. Any company quoting a fixed price over the phone, sight unseen, is either padding the price or will add charges on move day. Trusted movers quote after an on-site or video survey.",
      "3. Ask what packing materials are used. Minimum standard: 5-ply corrugated cartons, bubble wrap, stretch film and foam sheets, with double-boxing for fragile items. If the answer is vague, move on.",
      "4. Check for tracking. Vehicle GPS tracking with a link you can open is now standard — treat its absence as a red flag for long-distance moves.",
      "5. Discuss insurance openly. Transit insurance should be optional, priced clearly and based on declared value — not bundled secretly into the quote.",
      "6. Read the terms before paying. Get an itemised quotation, an inventory list, a committed delivery window, and payment terms in writing.",
      "7. Watch for fake reviews and too-good-to-be-true ratings. A few dozen detailed reviews from varied cities and dates are better evidence than a 5.0 rating with ten reviews.",
      "SHIFT8 answers all of these checks — call +91 8439973125 or WhatsApp us and test us before you move.",
    ],
  },
  {
    slug: "how-much-does-home-shifting-cost-in-india",
    title: "How Much Does Home Shifting Cost in India in 2026?",
    description:
      "Local and intercity home shifting costs explained — what drives pricing, how to compare quotes, and where hidden charges hide.",
    date: "2026-03-18",
    minutes: 6,
    body: [
      "Asking 'how much does shifting cost' is like asking 'how much is a house' — the honest answer starts with what you're moving, from where, to where. This guide explains the factors that actually drive packers and movers pricing in India.",
      "The biggest factors: load size, distance, floor and lift access, packing depth, and the number of crew-days. A 1 BHK local shift in a mid-size city commonly starts around ₹3,500–₹6,000. Within the same city, 2 BHK moves typically run ₹6,000–₹12,000 depending on floors and access.",
      "Intercity moves scale with distance. Short runs of 200–300 km might land in the ₹10,000–₹18,000 range for a 2 BHK. Metro-to-metro corridors such as Delhi to Mumbai, Bengaluru or Hyderabad run higher because of fuel, driver rest days and longer transit — always quoted individually.",
      "Packing level matters more than people expect. Full packing service includes materials and labour; many quotes surprise customers by separating 'packing cost' from 'transport cost'. Ask for the breakdown line by line.",
      "Where hidden charges hide: floor/stairs surcharges, service-lift restrictions, long-carry parking distances, toll and permit charges, and 'unforeseen' items. A written, itemised quotation removes all of them.",
      "Insurance is separate and optional: roughly a small percentage of declared value, worth taking on any move above 300 km.",
      "The rule that saves the most money: let a professional count your items. A free survey gives you a fixed figure, and a fixed figure is worth more than a cheap guess.",
    ],
  },
  {
    slug: "intercity-moving-guide",
    title: "Intercity Moving Guide: What to Expect When Shifting Between Indian Cities",
    description:
      "A complete guide to intercity relocation in India — timelines, dedicated vehicles, insurance, and how to prepare your new address.",
    date: "2026-04-02",
    minutes: 6,
    body: [
      "Moving between cities is a different discipline from a local shift. There's a longer transit window, more paperwork, and more planning around your destination's access rules. This guide maps what an intercity move in India should look like.",
      "Book with a buffer. Metro-to-metro and month-end dates fill fast — 7–10 days of lead time is a safe rule. For the transit itself, expect a committed window rather than a to-the-minute ETA, because highways and weather are variable.",
      "Ask for a dedicated vehicle. Some operators consolidate multiple customers' goods on one truck to cut costs. A dedicated vehicle means your goods are loaded once, travel alone, and unload only at your destination.",
      "Tracking should be non-negotiable. Insist on a GPS link you can open yourself, plus milestone updates at pickup, dispatch, and delivery readiness.",
      "Prepare both ends of the move. At the pickup, confirm parking and lift access. At the destination, check your new society's move-in rules, service-lift booking, and any timed gate windows — most metro societies have them.",
      "Insurance for distance. Anything over 300 km is worth covering with transit insurance on the declared value of your goods.",
      "Pack a personal bag. Documents, jewellery, chargers and a few days of clothes travel with you — never in the truck.",
      "Finally, keep the written quote, inventory and driver contact together. A calm, documented intercity move is the single biggest factor in a smooth transition.",
    ],
  },
  {
    slug: "how-to-transport-a-car-in-india",
    title: "How to Transport a Car in India: A Complete Guide",
    description:
      "Open vs enclosed carriers, condition reports, documents, and insurance — everything to know before shipping your car to another city.",
    date: "2026-04-16",
    minutes: 5,
    body: [
      "Moving to a new city usually means deciding what to do with the car. Driving it on a 2,000 km route costs time, fuel and wear; selling it loses value. Car carriers solve this — here's what the process looks like in India.",
      "Choose the carrier type. Open carriers are the common, cost-effective choice on busy routes. Enclosed carriers give maximum protection for premium, vintage or luxury cars. Ask for both quotes and decide based on your car's value.",
      "The condition report is your safeguard. A professional transporter photographs the car (exterior panels, wheels, odometer, fuel level) before loading and again before delivery. Never skip this step.",
      "Documents you'll need: the original RC, an NOC copy where required, and the driver's licence of the person handing over the keys. The transporter handles movement permits and fuel-drain formalities.",
      "Insurance-in-transit: while the transporter's third-party cover is mandatory, comprehensive insurance for your car's full declared value during transit is available on request and worth taking on long routes.",
      "At delivery, inspect before you sign. Check the photographs against the car, note any discrepancies on the handover sheet, and only then release the keys.",
      "At SHIFT8, car transport is door-to-door with pre- and post-transit photos, GPS tracking and optional insurance — call +91 8439973125 for a quote.",
    ],
  },
  {
    slug: "how-to-pack-household-items-before-a-move",
    title: "How to Pack Household Items Before a Move: Room-by-Room Guide",
    description:
      "A room-by-room packing system that keeps your move organised — what to pack first, what to protect, and what to leave for the crew.",
    date: "2026-05-06",
    minutes: 6,
    body: [
      "Good packing is a system, not an event. Follow this room-by-room order and your household will arrive faster, with less breakage and far less chaos at unpacking.",
      "Start one week out with the less-used rooms — store rooms, study, guest bedroom. Anything you haven't touched in a year is a candidate for donation or disposal; every extra carton costs weight and time.",
      "Kitchen comes second. Pack crockery wrapped individually in bubble wrap, upright in small cartons (never stacked), with heavy pans at the bottom of strong boxes. Liquids go in a sealed plastic bin, separate from anything absorbent.",
      "Bedrooms, then. Clothes travel faster in wardrobe cartons (hangable on a rail) for a shift, or folded in vacuum bags for long intercity hauls. Bedding and linen protect soft items and can line fragile cartons.",
      "Electronics and valuables ride last and separately. Photograph each TV and appliance before wrapping — that photo is your proof if a scratch shows up. Jewellery, cash, documents and chargers go in a personal bag that travels with you.",
      "The rules that prevent breakage: never overload cartons above 20 kg, always tape seam lines, label every carton with room and fragility, and take screws from disassembled furniture in a ziplock taped to the item.",
      "When professional packers are doing the job, you still keep this system — you decide what goes where, and the crew executes it with proper materials. That combination is what makes a move genuinely stress-free.",
    ],
  },
  {
    slug: "packers-and-movers-haridwar-complete-guide",
    title: "Packers and Movers in Haridwar: The 2026 Complete Guide",
    description:
      "Everything you need to plan a stress-free move in Haridwar — pricing, timelines, packing, verification, and red flags to avoid.",
    date: "2026-01-15",
    minutes: 9,
    body: [
      "If you're planning a move in Haridwar — whether within Jwalapur, from Bhupatwala to Roorkee, or all the way to Delhi — the difference between a smooth day and a stressful week is choosing the right packers and movers. This guide walks through everything a Haridwar resident should verify before booking.",
      "Start with pricing transparency. A trustworthy Haridwar mover will send an itemised, written quotation after a free survey — either on-site or over a video call. Beware of phone-only quotes: any company that commits to a final price without seeing your goods is either padding costs or planning to add charges on move day.",
      "Typical Haridwar move pricing (2026): a 1 BHK local shift starts around ₹3,500–₹6,000. A 2 BHK within Haridwar runs ₹6,000–₹10,000. Haridwar to Delhi for a 2 BHK is usually ₹12,000–₹22,000 depending on floor, load, and packing level.",
      "Verify the company. Ask for GST number, physical office address in Haridwar, vehicle registration, and driver identification. SHIFT8 makes all of these available on request.",
      "Time your booking. For weekend or month-end moves, book 5–7 days in advance. For weekdays in the middle of the month, next-day booking is often possible. Monsoon months (July–August) can add a day to interstate transit, so factor in a buffer.",
      "Packing matters more than the truck. Ask what materials will be used: 5-ply corrugated cartons, bubble wrap, stretch film, and foam sheets are the minimum. For fragile items, insist on double-boxing.",
      "Insurance is worth it for anything above 300 km. Transit insurance costs a small percentage of the declared value and covers accidents, theft, and handling damage. SHIFT8 offers transit insurance on request for every interstate move.",
      "Finally: get everything in writing. Quote, inventory list, expected delivery window, and payment terms. A reliable mover will happily put it all on paper.",
    ],
  },
  {
    slug: "house-shifting-checklist-haridwar",
    title: "House Shifting Checklist for Haridwar Residents",
    description:
      "A week-by-week checklist to plan a smooth house shifting in Haridwar or from Haridwar to any Indian city.",
    date: "2026-01-22",
    minutes: 7,
    body: [
      "A house move has roughly 40 small tasks, and forgetting any of them turns move day into a scramble. Here's a practical, Haridwar-tested checklist.",
      "Two weeks before: get 2–3 written quotations, choose your mover, and lock the date. Notify your landlord and society office. Start collecting empty cartons for non-fragile items.",
      "One week before: sort and declutter. Anything you haven't used in a year — donate, sell, or discard. Every extra carton costs money and time. Update your address on Aadhaar, driving licence, banks, insurance, and delivery apps.",
      "Three days before: pack a personal essentials bag — clothes for 3 days, chargers, medicines, important documents, and jewellery. This bag travels with you, not with the truck.",
      "One day before: defrost the refrigerator, empty the water purifier, disconnect the gas cylinder, and label every carton with room name and fragility.",
      "Move day: be present during loading, do a final walkthrough of every room and cupboard, and sign the inventory sheet only after verifying it.",
      "At destination: unlock the door before the truck arrives, direct the crew to place cartons in their labelled rooms, unpack essentials first, and inspect for any damage in the presence of the crew.",
      "Following this checklist won't remove every hiccup — but it will remove the ones that ruin move day.",
    ],
  },
  {
    slug: "haridwar-to-delhi-moving-guide",
    title: "Haridwar to Delhi Moving Guide: Cost, Time, and Tips",
    description:
      "How much does Haridwar to Delhi packers and movers cost? Timelines, routes, and what to expect for a smooth relocation.",
    date: "2026-02-05",
    minutes: 6,
    body: [
      "Haridwar to Delhi is our most-run route, and for good reason: it's a five-to-six-hour highway drive on NH-334 and NH-9, and most shifts complete in a single day of loading and delivery.",
      "Typical cost (2026): 1 BHK ₹8,000–₹14,000. 2 BHK ₹12,000–₹22,000. 3 BHK ₹18,000–₹32,000. Full-house with vehicles ₹35,000+. Prices vary with floor, elevator availability, and packing depth.",
      "Timeline: for morning loading in Haridwar, most deliveries happen the same evening or by the following morning in Delhi.",
      "Route: NH-334 → NH-9 via Muzaffarnagar and Meerut. In monsoon or Kanwar Yatra season we route via Roorkee-Saharanpur for smoother transit.",
      "Delhi-side tips: check your society's move-in policy, service-lift booking, and drop-off timing. Many Delhi societies allow moves only between 9 AM and 6 PM, and some require prior written approval.",
      "SHIFT8 handles both ends — Haridwar pickup and Delhi delivery — with the same crew where possible. Get a free quote today.",
    ],
  },
  {
    slug: "packing-mistakes-to-avoid",
    title: "Packing Mistakes to Avoid During a House Shift",
    description:
      "Nine packing mistakes that cause breakage, delays and extra costs during a house shift — and how to avoid them.",
    date: "2026-02-12",
    minutes: 6,
    body: [
      "Most move-day breakage isn't bad luck — it's bad packing. These nine mistakes cause the majority of damage, delays, and surprise costs we see on relocation jobs.",
      "1. Overloading cartons. A box heavier than about 20 kg will be dropped, not carried. Use smaller cartons for books, tools, and crockery.",
      "2. Skipping bottom reinforcement. Tape the seam line of every carton in an X before loading. A collapsing box ripples damage through the whole stack.",
      "3. Mixing heavy and fragile items. Pans on top of glassware is a one-way ticket to broken plates. Weight goes at the bottom, always.",
      "4. Leaving cushions ‘as is’ on sofas. Sofas move best wrapped with breathable covers — dampness is the enemy, and plastic traps moisture on long hauls.",
      "5. Packing liquids loose. Shampoo, oils, and detergents leak under pressure. Group them in sealed plastic bins, wrapped and away from fabric.",
      "6. Forgetting disassembly hardware. Screws, brackets and Allen keys vanish easily. Put them in a ziplock bag and tape it to the furniture itself.",
      "7. Packing electronics ‘lightly’. TVs and monitors need to be in cartons with foam corner protection — a blanket wrap alone does not protect a screen.",
      "8. Not labelling cartons. Unlabelled boxes become 'the place everything is'. Label each carton with room and fragility, and mark an 'open first' box.",
      "9. Keeping valuables and documents in the truck. Cash, jewellery, chargers and documents travel with you — never with the goods.",
      "You don't have to master all of this yourself — professional packing is exactly what SHIFT8 does. But if you're packing alone, avoid these nine and your move will be smoother.",
    ],
  },
];

export function cityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** Returns the city page that corresponds to a Haridwar-origin destination route, if one exists. */
export function cityForDestination(destSlug: string): CityInfo | undefined {
  const entry = Object.entries(CITY_TO_HARIDWAR_SLUG).find(([, v]) => v === destSlug);
  if (!entry) return undefined;
  return CITIES.find((c) => c.slug === entry[0]);
}

export function routeBySlug(slug: string): NationalRouteInfo | undefined {
  return ROUTES.find((r) => r.slug === slug);
}

export function nationalCityCount(): number {
  return CITIES.filter((c) => c.isNational).length;
}
