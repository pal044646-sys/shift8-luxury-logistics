// Central SEO data for SHIFT8 — cities, routes, services, FAQs, blog posts.

export const SITE = {
  name: "SHIFT8 Movers & Packers",
  brand: "SHIFT8",
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
};

export type Slug = string;

export interface CityInfo {
  slug: Slug;
  name: string;
  region: string;
  intro: string;
  areas: string[];
}

export const CITIES: CityInfo[] = [
  { slug: "haridwar", name: "Haridwar", region: "Uttarakhand", intro: "Haridwar is our home base — the SHIFT8 crew knows every colony, gali, and highway exit from Har Ki Pauri to Bahadrabad.", areas: ["Jwalapur", "Bhupatwala", "Kankhal", "Bahadrabad", "Sidcul", "Ranipur", "Shivalik Nagar", "BHEL"] },
  { slug: "roorkee", name: "Roorkee", region: "Uttarakhand", intro: "Serving Roorkee residents, IIT Roorkee staff, and cantonment families with quick, careful household relocation.", areas: ["Civil Lines", "Solani Puram", "IIT Campus", "Ganeshpur", "Manglaur Road"] },
  { slug: "rishikesh", name: "Rishikesh", region: "Uttarakhand", intro: "From ashram lanes to Tapovan apartments, we handle Rishikesh moves with equal care for antiques and everyday goods.", areas: ["Tapovan", "Muni Ki Reti", "Shivpuri", "Nepali Farm", "Lakshman Jhula"] },
  { slug: "dehradun", name: "Dehradun", region: "Uttarakhand", intro: "Doon Valley moves — hill-road experienced drivers, careful crews, and clear pricing across every Dehradun locality.", areas: ["Rajpur Road", "Sahastradhara", "Clement Town", "Vasant Vihar", "GMS Road", "ISBT"] },
  { slug: "kotdwar", name: "Kotdwar", region: "Uttarakhand", intro: "Kotdwar to anywhere in India — small-town origin, big-city standards.", areas: ["Bhabar", "Jhanda Chowk", "Kaudia", "Sigaddi"] },
  { slug: "rudrapur", name: "Rudrapur", region: "Uttarakhand", intro: "Industrial-belt Rudrapur moves — factory transfers, SIDCUL households, and cross-city shifts.", areas: ["SIDCUL", "Awas Vikas", "Kichha Road", "Metropolis Mall Area"] },
  { slug: "haldwani", name: "Haldwani", region: "Uttarakhand", intro: "Kumaon's gateway city — Haldwani homes and shops move with SHIFT8 to any Indian metro.", areas: ["Kathgodam", "Kaladhungi Road", "Rampur Road", "Nainital Road"] },
  { slug: "kashipur", name: "Kashipur", region: "Uttarakhand", intro: "Kashipur relocation — industrial, residential, and long-distance moves handled end to end.", areas: ["Ramnagar Road", "Jaspur Road", "Dhakia"] },
  { slug: "mussoorie", name: "Mussoorie", region: "Uttarakhand", intro: "Hill-station moves demand experienced drivers and compact carriers — exactly what SHIFT8 sends to Mussoorie.", areas: ["Landour", "Library Bazaar", "Kempty", "Barlowganj"] },
  { slug: "laksar", name: "Laksar", region: "Uttarakhand", intro: "Laksar and surrounding villages — doorstep pickup, transparent pricing, on-time delivery.", areas: ["Laksar Town", "Jagjeetpur", "Iqbalpur Road"] },
  { slug: "jwalapur", name: "Jwalapur", region: "Uttarakhand", intro: "Jwalapur is minutes from our Haridwar hub — expect same-day survey and next-day loading.", areas: ["Jwalapur Chowk", "Kassavan", "Peeli Kothi"] },
  { slug: "bhupatwala", name: "Bhupatwala", region: "Uttarakhand", intro: "Bhupatwala moves along the Ganga corridor — dharamshala, apartment, and villa relocations.", areas: ["Bhupatwala Market", "Sapt Sarovar Road"] },
  { slug: "bahadrabad", name: "Bahadrabad", region: "Uttarakhand", intro: "Bahadrabad industrial and residential moves, including SIDCUL Haridwar transfers.", areas: ["Bahadrabad Chowk", "Salempur", "Pathri"] },
  { slug: "sidcul-haridwar", name: "SIDCUL Haridwar", region: "Uttarakhand", intro: "SIDCUL factory employee transfers, plant asset relocation, and staff housing moves.", areas: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5"] },
];

export interface DestinationInfo {
  slug: Slug;
  name: string;
  km: number;
  hours: string;
  intro: string;
}

export const DESTINATIONS: DestinationInfo[] = [
  { slug: "delhi", name: "Delhi", km: 220, hours: "5–6 hrs", intro: "Our most-run route — daily-departure Haridwar to Delhi movers with door pickup and door delivery." },
  { slug: "noida", name: "Noida", km: 240, hours: "5–7 hrs", intro: "Noida sectors, tower flats, and gated societies — pass entries, service lifts, everything managed." },
  { slug: "gurgaon", name: "Gurgaon", km: 260, hours: "6–7 hrs", intro: "DLF, Sohna Road, Golf Course Road — high-rise-experienced crews at both ends." },
  { slug: "jaipur", name: "Jaipur", km: 470, hours: "9–11 hrs", intro: "Pink City relocations — overnight departure, next-day delivery at your Jaipur address." },
  { slug: "chandigarh", name: "Chandigarh", km: 240, hours: "5–6 hrs", intro: "Sector-wise Chandigarh moves plus Panchkula and Mohali coverage." },
  { slug: "lucknow", name: "Lucknow", km: 540, hours: "10–12 hrs", intro: "Haridwar to Lucknow shifting — Gomti Nagar, Hazratganj, and every colony in between." },
  { slug: "mumbai", name: "Mumbai", km: 1650, hours: "36–48 hrs", intro: "Long-haul Mumbai moves with GPS-tracked containers and insured transit." },
  { slug: "pune", name: "Pune", km: 1560, hours: "34–46 hrs", intro: "Pune shifting from Haridwar — IT-park transfers, family relocation, storage-in-transit available." },
  { slug: "bangalore", name: "Bangalore", km: 2100, hours: "3–4 days", intro: "Bangalore relocation with dedicated vehicles — no shared load, no delays." },
  { slug: "hyderabad", name: "Hyderabad", km: 1650, hours: "40–52 hrs", intro: "Hyderabad shifting with careful packing for electronics, servers, and modular furniture." },
  { slug: "chennai", name: "Chennai", km: 2350, hours: "4–5 days", intro: "Chennai long-distance moves — sealed containers, transit insurance, GPS updates." },
  { slug: "kolkata", name: "Kolkata", km: 1550, hours: "36–48 hrs", intro: "Kolkata relocation from Haridwar with narrow-lane experienced last-mile crews." },
  { slug: "ahmedabad", name: "Ahmedabad", km: 1200, hours: "26–34 hrs", intro: "Ahmedabad shifting — apartment or bungalow, small load or full house." },
  { slug: "indore", name: "Indore", km: 900, hours: "20–26 hrs", intro: "Indore relocation with careful handling of glass, marble, and modular kitchens." },
  { slug: "bhopal", name: "Bhopal", km: 850, hours: "18–24 hrs", intro: "Bhopal moves via NH — steady schedules, transparent quotes." },
  { slug: "patna", name: "Patna", km: 1050, hours: "22–30 hrs", intro: "Haridwar to Patna packers and movers — end-to-end for families and professionals." },
  { slug: "dehradun", name: "Dehradun", km: 55, hours: "1.5–2 hrs", intro: "Same-day Haridwar to Dehradun shifting available on most weekdays." },
  { slug: "rishikesh", name: "Rishikesh", km: 25, hours: "45 min", intro: "Short-hop Haridwar to Rishikesh moves — often loaded and delivered in a single day." },
  { slug: "roorkee", name: "Roorkee", km: 30, hours: "45 min", intro: "Roorkee moves — same crew, same day, same care." },
];

export interface ServiceInfo {
  slug: Slug;
  name: string;
  h1: string;
  short: string;
  bullets: string[];
  process: string[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "house-shifting",
    name: "House Shifting",
    h1: "House Shifting Services in Haridwar",
    short: "End-to-end household relocation — packing, loading, transport, unloading, and rearranging your home.",
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
  },
  {
    slug: "office-relocation",
    name: "Office Relocation",
    h1: "Office Relocation Services in Haridwar",
    short: "Minimum downtime commercial moves — workstations, servers, files, and modular partitions handled by experienced crews.",
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
  },
  {
    slug: "car-transportation",
    name: "Car Transportation",
    h1: "Car Transportation Services from Haridwar",
    short: "Enclosed and open car carriers with door-to-door delivery across India — insured, GPS-tracked, and photograph-verified.",
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
  },
  {
    slug: "bike-transportation",
    name: "Bike Transportation",
    h1: "Bike Transportation Services from Haridwar",
    short: "Safe two-wheeler transit across India with professional crating, foam padding, and transit insurance.",
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
  },
  {
    slug: "packing-services",
    name: "Packing Services",
    h1: "Professional Packing Services in Haridwar",
    short: "Standalone packing service — we bring materials, do the work, you take the transport yourself if you prefer.",
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
  },
  {
    slug: "warehouse-storage",
    name: "Warehouse & Storage",
    h1: "Warehouse & Storage Services in Haridwar",
    short: "Secure, dry, monitored warehousing for household goods and business inventory — from a week to a year.",
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
  },
  {
    slug: "loading-unloading",
    name: "Loading & Unloading",
    h1: "Loading & Unloading Services in Haridwar",
    short: "Labour-only service for customers who arrange their own truck — trained crew for lifting, stairs, and careful placement.",
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
  },
  {
    slug: "commercial-relocation",
    name: "Commercial Relocation",
    h1: "Commercial & Industrial Relocation from Haridwar",
    short: "Factory, workshop, and warehouse relocation with heavy-lifting equipment and coordinated logistics.",
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
  },
];

export interface FAQ { q: string; a: string; }

export const HOME_FAQS: FAQ[] = [
  { q: "Which are the best packers and movers in Haridwar?", a: "SHIFT8 is among Haridwar's most trusted movers and packers, offering transparent pricing, GPS-tracked vehicles, trained crews, and end-to-end house and office relocation across Uttarakhand and India." },
  { q: "How much do packers and movers cost in Haridwar?", a: "Local Haridwar moves typically start from ₹3,500 for a 1 BHK. Intercity shifting (e.g. Haridwar to Delhi) starts around ₹8,000–₹15,000 depending on load and floor. Long-distance moves are quoted after a free survey — never estimated by phone alone." },
  { q: "Do you offer same-day shifting in Haridwar?", a: "Yes. For small loads and inside-city moves in Haridwar, Roorkee, Rishikesh, and nearby areas, we frequently complete surveys, packing, and delivery on the same day." },
  { q: "Are my belongings insured during transit?", a: "Transit insurance is available on request for all interstate and long-distance moves. We recommend it for high-value households and any move above 300 km." },
  { q: "How early should I book my move?", a: "For weekend or month-end moves, 5–7 days in advance is ideal. For weekday local moves we can often accommodate next-day bookings. Long-distance moves are best booked 7–10 days ahead." },
  { q: "Do you charge for the survey and quotation?", a: "No. Site or video surveys and detailed written quotations are completely free. Our quotes are itemised and there are no hidden charges." },
  { q: "Can you move a single item — one bike, one sofa, one fridge?", a: "Yes. We handle single-item transport regularly, including bikes, cars, refrigerators, LEDs, and one-piece furniture, with proper packing and doorstep delivery." },
  { q: "Which cities do you cover from Haridwar?", a: "We serve Haridwar, Roorkee, Rishikesh, Dehradun, Kotdwar, Rudrapur, Haldwani, Kashipur, Mussoorie, and dispatch pan-India — Delhi, Noida, Gurgaon, Jaipur, Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata, and every major Indian city." },
  { q: "Do you provide packing material?", a: "Yes. All packing materials — 5-ply cartons, bubble wrap, stretch film, foam sheets, wardrobe boxes — are included in our standard house-shifting quote." },
  { q: "Can I track my shipment?", a: "Yes. All SHIFT8 vehicles are GPS-enabled. You get a live tracking link and status updates from loading to delivery." },
  { q: "Do you offer storage / warehousing?", a: "Yes. We offer clean, secure, pest-controlled warehouse storage in Haridwar from one week to twelve months. Ideal for gap periods between moves." },
  { q: "Are your movers verified and trained?", a: "Every SHIFT8 crew member is background-verified, uniformed, and trained on packing standards, furniture handling, and customer conduct." },
  { q: "Do you handle office and factory relocation?", a: "Yes. We handle office relocation, commercial shifting, and industrial machinery moves, including weekend and after-hours schedules to minimise business downtime." },
  { q: "What if something is damaged during the move?", a: "For insured moves, damages are settled through the transit insurance policy. For non-insured moves, SHIFT8 offers a fair-value compensation policy for goods damaged due to crew handling." },
  { q: "How do I get a quote from SHIFT8?", a: "Call +91 8439973125, WhatsApp us, or use the Get Quote button. Our team responds within 15 minutes during business hours." },
];

export interface BlogPost {
  slug: Slug;
  title: string;
  description: string;
  date: string;
  minutes: number;
  body: string[]; // paragraphs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "packers-and-movers-haridwar-complete-guide",
    title: "Packers and Movers in Haridwar: The 2026 Complete Guide",
    description: "Everything you need to plan a stress-free move in Haridwar — pricing, timelines, packing, verification, and red flags to avoid.",
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
    description: "A week-by-week checklist to plan a smooth house shifting in Haridwar or from Haridwar to any Indian city.",
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
    slug: "how-to-choose-packers-and-movers",
    title: "How to Choose Packers and Movers: 7 Questions That Reveal the Truth",
    description: "Seven questions to ask before you book any packers and movers company in Haridwar, Uttarakhand, or anywhere in India.",
    date: "2026-01-29",
    minutes: 6,
    body: [
      "Every mover sounds professional on the phone. These seven questions cut through the sales pitch.",
      "1. Can I visit your office? A local address in Haridwar with a real signboard is a green flag. A WhatsApp-only operation is a red flag.",
      "2. Will you do a physical or video survey before quoting? A firm 'yes' means the quote will be accurate. A shrug means costs will change on move day.",
      "3. What is your GST number? A registered mover files GST and gives a proper invoice. Cash-only operators dodge accountability.",
      "4. Are your vehicles owned or hired? Owned vehicles mean controlled scheduling. Fully hired fleets often delay pickups.",
      "5. Can I speak to a customer from last month? Confident movers will connect you with a recent client without hesitation.",
      "6. What insurance do you offer? Transit insurance should be optional and priced clearly — not bundled invisibly.",
      "7. What happens if there is damage? A clear damage policy — insurance claim or fair-value compensation — separates real movers from fly-by-night operators.",
      "At SHIFT8 we answer all seven without hesitation. Call +91 8439973125 or WhatsApp us and try it.",
    ],
  },
  {
    slug: "haridwar-to-delhi-moving-guide",
    title: "Haridwar to Delhi Moving Guide: Cost, Time, and Tips",
    description: "How much does Haridwar to Delhi packers and movers cost? Timelines, routes, and what to expect for a smooth relocation.",
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
    title: "10 Packing Mistakes That Cost You Money on Move Day",
    description: "Common packing mistakes Haridwar households make — and how to avoid every one of them.",
    date: "2026-02-12",
    minutes: 5,
    body: [
      "Most 'moving damage' isn't caused by the truck. It's caused by weak packing. Here are the ten mistakes we see most often — and the fixes.",
      "1. Overloading big cartons. Anything above 20 kg in a single carton risks a bottom-blowout. Rule: books in small cartons, clothes in big ones.",
      "2. Skipping bubble wrap on kitchenware. One unwrapped ceramic bowl can shatter and destroy the rest of the carton's contents.",
      "3. Not labelling cartons. Unlabelled cartons end up in the wrong room at destination — and often stay there for weeks.",
      "4. Packing liquids upright next to books. If a bottle leaks, your books are gone. Pack liquids separately in a sealed plastic tub.",
      "5. Forgetting to defrost the fridge. Water pools inside during transit and can damage the compressor.",
      "6. Losing screws and small parts during furniture disassembly. Tape a small ziplock bag to the item itself.",
      "7. Not photographing electronics before packing. If a screen is scratched at delivery, photos are your only proof.",
      "8. Packing valuables in the truck. Jewellery, cash, and original documents ride with you — always.",
      "9. Under-declaring value for insurance. If insured value is half the real value, claims settle at half the loss.",
      "10. Cheaping out on packing. Saving ₹1,500 on materials to lose ₹15,000 on a broken TV is a bad trade.",
      "A professional Haridwar mover like SHIFT8 handles all of this by default — but even if you self-pack, avoid these ten and your move will go smoother.",
    ],
  },
];

export const NAV_SERVICES = SERVICES.slice(0, 6);
