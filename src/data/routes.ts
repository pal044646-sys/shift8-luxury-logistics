import type { DestinationInfo, NationalRouteInfo } from "./types";

// Intercity route pages. Only high-demand routes SHIFT8 genuinely serves are
// listed — no bulk/duplicate route generation.

export const ROUTES: NationalRouteInfo[] = [
  {
    slug: "delhi-to-mumbai",
    from: "Delhi",
    to: "Mumbai",
    km: 1400,
    time: "2 days",
    intro:
      "Delhi to Mumbai is one of India's busiest relocation corridors, moving families, working professionals and businesses between the capital and the financial capital. SHIFT8 runs this route on dedicated, GPS-tracked vehicles with door-to-door delivery at both ends.",
    tips: [
      "Start loading early so the truck clears Delhi's ring roads before peak traffic.",
      "Mumbai-side society entry is smoother when your intimation is arranged a day before delivery.",
      "Plan a 24–48 hour buffer for the long highway stretch and driver rest stops.",
    ],
    included: [
      "Free on-site or video survey with a written, itemised quote",
      "Professional room-by-room packing with 5-ply cartons and bubble wrap",
      "Furniture disassembly at pickup, reassembly at delivery",
      "Dedicated GPS-tracked vehicle for the full journey",
      "Transit insurance available on request",
      "Doorstep pickup in Delhi, doorstep delivery in Mumbai",
    ],
    faqs: [
      {
        q: "How long does a Delhi to Mumbai move take?",
        a: "Typically 2 days in transit plus loading and delivery time. We share a committed delivery window in your written quotation.",
      },
      {
        q: "Do you use shared trucks on this route?",
        a: "No — Delhi to Mumbai moves run on a dedicated vehicle for your load alone, so there are no reloading delays or mixed goods.",
      },
      {
        q: "Is insurance available for a long haul like this?",
        a: "Yes. Transit insurance is available on request for all long-distance routes and is recommended for this corridor.",
      },
    ],
  },
  {
    slug: "delhi-to-bengaluru",
    from: "Delhi",
    to: "Bengaluru",
    km: 2120,
    time: "3–4 days",
    intro:
      "Delhi to Bengaluru spans the length of the country, and it's a route professionals relocate on constantly. SHIFT8 manages the full corridor — packing, transit, and Bengaluru-side society coordination — with GPS tracking throughout.",
    tips: [
      "Book 7–10 days ahead; long-haul slots fill quickly around month-end.",
      "Confirm your Bengaluru society's move-in window before the truck departs.",
      "Keep a personal essentials bag with you rather than in the vehicle.",
    ],
    included: [
      "Free survey and itemised quotation",
      "Full packing, loading, transit and unloading by a trained crew",
      "Dedicated vehicle with live GPS updates through 3–4 days of transit",
      "Transit insurance available on request",
      "Door-to-door pickup and delivery coordination in both cities",
    ],
    faqs: [
      {
        q: "Can you handle a Delhi to Bengaluru full-house move?",
        a: "Yes — from 1 BHK flats to full houses and office equipment, dedicated vehicles are sized to your load.",
      },
      {
        q: "What is the typical timeline?",
        a: "Transit runs around 3–4 days across the ~2,100 km route, with loading and delivery days added on either side.",
      },
      {
        q: "How do you plan for Bengaluru traffic on delivery?",
        a: "Delivery is scheduled for a morning window to avoid the city's rush-hour corridors.",
      },
    ],
  },
  {
    slug: "delhi-to-hyderabad",
    from: "Delhi",
    to: "Hyderabad",
    km: 1410,
    time: "1.5–2 days",
    intro:
      "Delhi to Hyderabad carries tech professionals, families and office equipment along one of India's fastest-growing corridors. SHIFT8 runs it on dedicated vehicles with clear milestones and Hyderabad-side handover coordination.",
    tips: [
      "Hyderabad tech-corridor addresses (HITEC City, Gachibowli) have strict move windows — share yours when booking.",
      "An overnight transit is typical, so daytime delivery is usually achievable.",
      "Confirm gated-community passes with your society before arrival day.",
    ],
    included: [
      "Itemised quotation after a free survey",
      "Professional packing, loading and unloading",
      "Dedicated GPS-tracked transit vehicle",
      "Transit insurance available on request",
      "Doorstep coordination in both Hyderabad and Delhi",
    ],
    faqs: [
      {
        q: "Is this a same-weekend move?",
        a: "Usually yes — with an overnight transit, many Delhi to Hyderabad moves can be picked up and delivered within 2–3 days.",
      },
      {
        q: "Do you handle office equipment on this route?",
        a: "Yes — workstations, servers and network gear are packed IT-safe and moved with asset inventory.",
      },
      {
        q: "What happens if there's a delay en route?",
        a: "Our move manager keeps you updated and we rework delivery slots promptly — no surprises.",
      },
    ],
  },
  {
    slug: "delhi-to-pune",
    from: "Delhi",
    to: "Pune",
    km: 1430,
    time: "1.5–2 days",
    intro:
      "Delhi to Pune connects the capital with one of India's biggest IT hubs. Whether it's a family relocating or an office shifting to Hinjewadi, SHIFT8 runs the route end-to-end with tracking and insurance options.",
    tips: [
      "Pune's Hinjewadi and Kharadi towers prefer intimation and lift-booking in advance.",
      "Schedule delivery for a morning window to avoid toll-corridor congestion.",
      "For corporate moves, after-hours or weekend slots protect business continuity.",
    ],
    included: [
      "Free survey and transparent quotation",
      "Room-by-room packing and unpacking",
      "Dedicated GPS-tracked vehicle",
      "Transit insurance available on request",
      "Door-to-door coordination across both cities",
    ],
    faqs: [
      {
        q: "How long is the Delhi to Pune transit?",
        a: "Around one and a half to two days, plus loading and delivery on either side.",
      },
      {
        q: "Can you move a Hinjewadi office from Delhi?",
        a: "Yes — IT-safe packing for workstations and servers, with after-hours delivery options.",
      },
      {
        q: "Is transit insurance worth it on this route?",
        a: "For a move this distance, yes — it's recommended and available on request for a small percentage of declared value.",
      },
    ],
  },
  {
    slug: "mumbai-to-pune",
    from: "Mumbai",
    to: "Pune",
    km: 150,
    time: "1 day",
    intro:
      "Mumbai to Pune is a short, high-frequency corridor connecting two of Maharashtra's biggest job markets. SHIFT8 moves flats and offices between the two cities, often within a single day.",
    tips: [
      "The expressway keeps transit to a few hours — same-day moves are the norm.",
      "Pack light, fast-dispatched loads move same-day; full houses are scheduled within 24–48 hours.",
      "Both cities' society norms are handled before the truck arrives.",
    ],
    included: [
      "Quick survey and same-day quotation",
      "Professional packing, loading and unloading",
      "Dedicated vehicle for the expressway run",
      "Delivery-at-door coordination at both ends",
    ],
    faqs: [
      {
        q: "Can you move Mumbai to Pune in one day?",
        a: "Yes — for standard loads the expressway run completes within a day, survey to delivery.",
      },
      {
        q: "Do you handle shifting within both cities on the same job?",
        a: "Yes — pickup in Mumbai and delivery in Pune are coordinated by the same move manager.",
      },
      {
        q: "Is this route cheaper than long-haul?",
        a: "Yes — the short distance keeps transit simple and pricing well below a cross-country move.",
      },
    ],
  },
  {
    slug: "mumbai-to-ahmedabad",
    from: "Mumbai",
    to: "Ahmedabad",
    km: 525,
    time: "1 day",
    intro:
      "Mumbai to Ahmedabad is a steady corridor for business and family relocations along the western highway. SHIFT8 runs it door-to-door with same-week scheduling.",
    tips: [
      "An early loading start gets you past Surat before the afternoon truck swell.",
      "Ahmedabad's SG Highway towers handle society passes easily when intimation is sent ahead.",
      "A single-day run is achievable for most household loads.",
    ],
    included: [
      "Free survey and itemised quotation",
      "Full packing, loading, transit and unloading",
      "Dedicated GPS-tracked vehicle",
      "Transit insurance available on request",
      "Doorstep coordination at both ends",
    ],
    faqs: [
      {
        q: "Is Mumbai to Ahmedabad a single-day move?",
        a: "For full-house loads we schedule same-day or next-day delivery on the ~525 km highway run; small loads can go same-day.",
      },
      {
        q: "Do you move businesses on this corridor?",
        a: "Yes — shops, offices and small industrial units move between the two cities regularly.",
      },
      {
        q: "How is pricing decided?",
        a: "After a free survey, you get a written itemised quote — no hidden loading or unloading charges.",
      },
    ],
  },
  {
    slug: "bengaluru-to-hyderabad",
    from: "Bengaluru",
    to: "Hyderabad",
    km: 570,
    time: "1 day",
    intro:
      "Bengaluru to Hyderabad is one of South India's busiest tech corridors. SHIFT8 arranges smooth moves between the two cities with same-week scheduling and GPS-tracked transit.",
    tips: [
      "Morning loading avoids Bengaluru's peak outflow traffic.",
      "An overnight buffer makes delivery windows flexible on the ~570 km run.",
      "Gated-community passes in both cities are confirmed in advance.",
    ],
    included: [
      "Free survey and written quotation",
      "Professional packing and unloading",
      "Dedicated GPS-tracked vehicle",
      "Transit insurance available on request",
    ],
    faqs: [
      {
        q: "Can a Bengaluru to Hyderabad move be done in a day?",
        a: "For an early-morning load, delivery the same evening or next morning is typical on this corridor.",
      },
      {
        q: "Is it a common route for single professionals?",
        a: "Yes — apartments and single-bedroom loads move frequently between the two tech cities.",
      },
      {
        q: "Do you handle office moves here too?",
        a: "Yes — including IT offices moving between Bengaluru and Hyderabad tech parks.",
      },
    ],
  },
  {
    slug: "bengaluru-to-chennai",
    from: "Bengaluru",
    to: "Chennai",
    km: 350,
    time: "1 day",
    intro:
      "Bengaluru to Chennai keeps up a steady flow of family and professional moves along the NH corridor. SHIFT8 runs this route with efficient single-day scheduling.",
    tips: [
      "Loading early keeps the truck ahead of both cities' peak traffic.",
      "Chennai's coastal humidity is handled with moisture-safe packing.",
      "Most standard loads deliver within the day or the next morning.",
    ],
    included: [
      "Quick survey and same-day quotation",
      "Moisture-safe professional packing",
      "Dedicated vehicle for the short corridor",
      "Door-to-door coordination at both ends",
    ],
    faqs: [
      {
        q: "Is Bengaluru to Chennai a one-day move?",
        a: "Yes — the ~350 km run with early loading typically delivers same-day or next-morning.",
      },
      {
        q: "How do you protect goods for Chennai's humidity?",
        a: "Electronics and fabrics get sealed, moisture-resistant packing before transit.",
      },
      {
        q: "Can you move a small apartment load on this route?",
        a: "Yes — apartment and small-load moves are the most common on this corridor.",
      },
    ],
  },
  {
    slug: "pune-to-bengaluru",
    from: "Pune",
    to: "Bengaluru",
    km: 840,
    time: "1–1.5 days",
    intro:
      "Pune to Bengaluru is a favourite for IT professionals moving between the two tech hubs. SHIFT8 arranges dedicated-vehicle moves with tracking and coordination at both ends.",
    tips: [
      "Book 5–7 days ahead for month-end dates.",
      "Morning departure keeps the run smooth through Karnataka's highways.",
      "Bengaluru-side society move-in windows are confirmed before dispatch.",
    ],
    included: [
      "Free survey and itemised quotation",
      "Professional packing, loading, transit and unloading",
      "Dedicated GPS-tracked vehicle",
      "Transit insurance available on request",
      "Doorstep coordination in both cities",
    ],
    faqs: [
      {
        q: "How long does Pune to Bengaluru take?",
        a: "About one to one and a half days of transit on the ~840 km route, plus loading and delivery time.",
      },
      {
        q: "Is this route popular for 1 BHK or 2 BHK moves?",
        a: "Very — most loads on this corridor are apartments and small flats.",
      },
      {
        q: "Do you coordinate Bengaluru society norms?",
        a: "Yes — intimation, passes and lift bookings are confirmed before the truck arrives.",
      },
    ],
  },
  {
    slug: "delhi-to-jaipur",
    from: "Delhi",
    to: "Jaipur",
    km: 280,
    time: "1 day",
    intro:
      "Delhi to Jaipur is a routine, single-day corridor for families moving between the capital and the Pink City. SHIFT8 runs it fast, with door-to-door delivery.",
    tips: [
      "Same-day loading and delivery is standard on this route.",
      "Walled-city Jaipur addresses may need hand-carry planning for narrow lanes.",
      "An early start keeps the truck clear of Delhi morning traffic.",
    ],
    included: [
      "Same-day friendly scheduling",
      "Professional packing, loading and unloading",
      "Dedicated vehicle for the highway run",
      "Door-to-door coordination at both ends",
    ],
    faqs: [
      {
        q: "Is Delhi to Jaipur a same-day move?",
        a: "Yes — the ~280 km run is routinely loaded and delivered in a single day.",
      },
      {
        q: "Can you handle old Jaipur city homes?",
        a: "Yes — we plan vehicle access and hand-carry through narrow lanes where needed.",
      },
      {
        q: "Do you move single items like bikes or sofas on this route?",
        a: "Yes — single-item transport is available, with professional crating and wrapping.",
      },
    ],
  },
  {
    slug: "delhi-to-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    km: 245,
    time: "1 day",
    intro:
      "Delhi to Chandigarh is a fast, frequent corridor serving the tricity's families, government staff and professionals. SHIFT8 delivers door-to-door on the same day.",
    tips: [
      "The route stays quick — most loads deliver same-day.",
      "Tricity moves across Chandigarh, Mohali and Panchkula are all covered.",
      "Early loading keeps deliveries crisp and on time.",
    ],
    included: [
      "Same-day scheduling",
      "Professional packing and unloading",
      "Dedicated vehicle for the short highway run",
      "Doorstep coordination across all three tricity cities",
    ],
    faqs: [
      {
        q: "How fast is a Delhi to Chandigarh move?",
        a: "Most loads load and deliver within the same day on this ~245 km route.",
      },
      {
        q: "Do you deliver to Mohali and Panchkula too?",
        a: "Yes — the whole tricity is covered with the same dedicated vehicle and crew.",
      },
      {
        q: "Is it suitable for office moves?",
        a: "Yes — small and mid-size office moves also run same-day on this corridor.",
      },
    ],
  },
  {
    slug: "delhi-to-kolkata",
    from: "Delhi",
    to: "Kolkata",
    km: 1530,
    time: "2–3 days",
    intro:
      "Delhi to Kolkata joins two of India's biggest cities across a long eastward haul. SHIFT8 runs this route on dedicated vehicles with staged milestones and Kolkata-side coordination.",
    tips: [
      "Budget 2–3 days of transit with driver rest stops accounted for.",
      "Kolkata's narrow inner-city lanes may need hand-carry planning.",
      "Confirm your Salt Lake or New Town society's move-in rules beforehand.",
    ],
    included: [
      "Free survey and written, itemised quote",
      "Full packing, loading, transit and unloading",
      "Dedicated GPS-tracked vehicle for the eastward route",
      "Transit insurance available on request",
      "Door-to-door coordination at both ends",
    ],
    faqs: [
      {
        q: "How long does Delhi to Kolkata take?",
        a: "Around 2–3 days in transit for the ~1,530 km route, plus loading and delivery days.",
      },
      {
        q: "Are there long inland connections you handle?",
        a: "Yes — the Delhi-Kolkata corridor also covers intermediate cities and towns along the route.",
      },
      {
        q: "Is insurance recommended here?",
        a: "For a haul this long, transit insurance on the declared value is strongly recommended.",
      },
    ],
  },
];

// Haridwar-origin routes — SHIFT8's flagship dispatch corridor.
export const DESTINATIONS: DestinationInfo[] = [
  {
    slug: "delhi",
    name: "Delhi",
    km: 220,
    hours: "5–6 hrs",
    intro:
      "Our most-run route — daily-departure Haridwar to Delhi movers with door pickup and door delivery.",
  },
  {
    slug: "noida",
    name: "Noida",
    km: 240,
    hours: "5–7 hrs",
    intro:
      "Noida sectors, tower flats, and gated societies — pass entries, service lifts, everything managed.",
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    km: 260,
    hours: "6–7 hrs",
    intro: "DLF, Sohna Road, Golf Course Road — high-rise-experienced crews at both ends.",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    km: 470,
    hours: "9–11 hrs",
    intro: "Pink City relocations — overnight departure, next-day delivery at your Jaipur address.",
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    km: 240,
    hours: "5–6 hrs",
    intro: "Sector-wise Chandigarh moves plus Panchkula and Mohali coverage.",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    km: 540,
    hours: "10–12 hrs",
    intro: "Haridwar to Lucknow shifting — Gomti Nagar, Hazratganj, and every colony in between.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    km: 1650,
    hours: "36–48 hrs",
    intro: "Long-haul Mumbai moves with GPS-tracked containers and insured transit.",
  },
  {
    slug: "pune",
    name: "Pune",
    km: 1560,
    hours: "34–46 hrs",
    intro:
      "Pune shifting from Haridwar — IT-park transfers, family relocation, storage-in-transit available.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    km: 2100,
    hours: "3–4 days",
    intro: "Bangalore relocation with dedicated vehicles — no shared load, no delays.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    km: 1650,
    hours: "40–52 hrs",
    intro:
      "Hyderabad shifting with careful packing for electronics, servers, and modular furniture.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    km: 2350,
    hours: "4–5 days",
    intro: "Chennai long-distance moves — sealed containers, transit insurance, GPS updates.",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    km: 1550,
    hours: "36–48 hrs",
    intro: "Kolkata relocation from Haridwar with narrow-lane experienced last-mile crews.",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    km: 1200,
    hours: "26–34 hrs",
    intro: "Ahmedabad shifting — apartment or bungalow, small load or full house.",
  },
  {
    slug: "indore",
    name: "Indore",
    km: 900,
    hours: "20–26 hrs",
    intro: "Indore relocation with careful handling of glass, marble, and modular kitchens.",
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    km: 850,
    hours: "18–24 hrs",
    intro: "Bhopal moves via NH — steady schedules, transparent quotes.",
  },
  {
    slug: "patna",
    name: "Patna",
    km: 1050,
    hours: "22–30 hrs",
    intro: "Haridwar to Patna packers and movers — end-to-end for families and professionals.",
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    km: 55,
    hours: "1.5–2 hrs",
    intro: "Same-day Haridwar to Dehradun shifting available on most weekdays.",
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    km: 25,
    hours: "45 min",
    intro: "Short-hop Haridwar to Rishikesh moves — often loaded and delivered in a single day.",
  },
  {
    slug: "roorkee",
    name: "Roorkee",
    km: 30,
    hours: "45 min",
    intro: "Roorkee moves — same crew, same day, same care.",
  },
];
