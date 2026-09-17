import type { CityInfo } from "./types";

// Major metro city relocation pages. SHIFT8 is Haridwar-headquartered and
// coordinates moves involving these cities end-to-end (either direction).

export const METRO_CITIES: CityInfo[] = [
  {
    slug: "delhi",
    name: "Delhi",
    region: "NCR",
    state: "Delhi",
    isNational: true,
    intro:
      "Delhi is where most of India's relocations begin or end. From high-rise apartments in Dwarka and Rohini to gated societies across South Delhi, SHIFT8 arranges house shifting, office moves and intercity relocations involving the national capital — coordinated end-to-end from our Haridwar hub.",
    areas: [
      "Dwarka",
      "Rohini",
      "Saket",
      "Vasant Kunj",
      "Mayur Vihar",
      "Lajpat Nagar",
      "Pitampura",
      "Janakpuri",
      "Karol Bagh",
      "Punjabi Bagh",
    ],
    notes: [
      "Most Delhi residential societies require prior written approval and a fixed time window for moves — we handle the paperwork guidance so your loading slot is cleared before the truck arrives.",
      "High-rise towers commonly restrict goods to service lifts; our crews coordinate lift bookings with the society office in advance.",
      "Many Delhi societies limit truck entry to specific hours. We plan loading and delivery around these windows to avoid wait charges.",
      "For outstation vehicles, interstate permit and fuel checks are managed so your load moves without surprises at toll plazas.",
    ],
    routes: [
      "delhi-to-mumbai",
      "delhi-to-bengaluru",
      "delhi-to-hyderabad",
      "delhi-to-pune",
      "delhi-to-jaipur",
      "delhi-to-chandigarh",
      "delhi-to-kolkata",
    ],
    faqs: [
      {
        q: "Do you arrange moves involving Delhi even though SHIFT8 is based in Haridwar?",
        a: "Yes. SHIFT8 coordinates relocations to, from and within Delhi through our Haridwar operations, with trained crews at both ends and a dedicated move manager assigned to your job.",
      },
      {
        q: "What do Delhi societies usually ask for when you move?",
        a: "Most societies ask for prior intimation, a resident's authorization, and a fixed time slot for goods movement. Our team confirms these rules in advance and carries the documents needed for smooth entry.",
      },
      {
        q: "Can you move within Delhi on the same day?",
        a: "Yes — local Delhi shifts are typically surveyed and moved within a day or two. Intercity moves such as Delhi to Mumbai or Delhi to Bengaluru run on dedicated GPS-tracked vehicles.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    region: "NCR",
    state: "Uttar Pradesh",
    isNational: true,
    intro:
      "Noida's high-rise towers and tech corridors keep a steady stream of flat-to-flat and city-to-city moves. SHIFT8 arranges packers and movers in Noida for apartments, offices and families relocating anywhere in India.",
    areas: [
      "Sector 18",
      "Sector 62",
      "Sector 137",
      "Sector 150",
      "Alpha 1",
      "Noida Extension",
      "Gaur City",
      "Sector 79",
      "Greater Noida West",
    ],
    notes: [
      "Most Noida apartment towers restrict goods movement to service lifts and require a society pass — the pass is confirmed before we start loading.",
      "Many towers have fixed 'moving hours' on weekends; truck entry and parking are pre-arranged with the society office.",
      "For moves out of UP, inter-state formalities for the vehicle are looked after so nothing holds up at the border.",
    ],
    routes: ["delhi-to-mumbai"],
    faqs: [
      {
        q: "I live in a Noida high-rise. How do you handle the service lift and society permissions?",
        a: "We contact the society office in advance, confirm the goods-moving policy, book the service lift slot, and arrive with all the paperwork your security gate asks for.",
      },
      {
        q: "Can you move my 2 BHK flat in Noida to another city?",
        a: "Yes. Noida to Mumbai, Bangalore, Hyderabad and other metros run on dedicated GPS-tracked vehicles with transit insurance available on request.",
      },
      {
        q: "What does a local Noida shift include?",
        a: "A free survey, itemised quote, professional packing, furniture disassembly and reassembly, loading, transport, and placement at your new flat — with transparent pricing.",
      },
    ],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    region: "NCR",
    state: "Haryana",
    isNational: true,
    intro:
      "From DLF Phases to Golf Course Road's signature towers, Gurugram runs on smooth relocations for homes and its booming corporate sector. SHIFT8 arranges packers and movers in Gurugram for both.",
    areas: [
      "DLF Phases",
      "Golf Course Road",
      "Sohna Road",
      "Sector 56",
      "Sector 90",
      "Udyog Vihar",
      "Manesar",
      "MG Road",
      "Palam Vihar",
    ],
    notes: [
      "Signature Gurugram societies run strict move-management systems — approvals, window slots and lift booking are coordinated before move day.",
      "Cyber City and Udyog Vihar office moves are handled after hours or over weekends to protect business continuity.",
      "Several Golf Course Road towers have weight and time restrictions for goods in passenger lifts; we plan equipment and packing around them.",
    ],
    routes: ["delhi-to-mumbai"],
    faqs: [
      {
        q: "Do Gurugram societies really require move approvals?",
        a: "Many of the newer signature towers do — they run formal move-management systems. We handle the intimation, approvals and window slots on your behalf.",
      },
      {
        q: "Can you relocate our office within Gurugram over a weekend?",
        a: "Yes. Weeknight and weekend office moves are our standard mode for corporate clients to avoid downtime and keep Monday morning normal.",
      },
      {
        q: "What is the best time to move within Gurugram?",
        a: "Early-morning slots avoid MG Road and Sohna Road congestion. We schedule loading so the truck is out of peak traffic and your shift completes on time.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    state: "Maharashtra",
    isNational: true,
    intro:
      "Mumbai moves are a city of dense streets, society rules and well-timed logistics. SHIFT8 arranges packers and movers in Mumbai — apartments, offices and full-house shifts, including long-haul moves to and from the city.",
    areas: [
      "Andheri",
      "Bandra",
      "Powai",
      "Juhu",
      "Dadar",
      "Worli",
      "Borivali",
      "Thane",
      "Navi Mumbai",
      "Malad",
    ],
    notes: [
      "Many Mumbai housing societies require a move intimation, an NOC for furniture and goods entry, and fixed time slots — we confirm these before the truck arrives.",
      "Narrow lanes and parking pressure mean careful route planning; our crews are used to Mumbai-street loading without blocking traffic.",
      "Rain-season moves (June–September) are planned with extra waterproofing and flexible delivery windows.",
    ],
    routes: ["delhi-to-mumbai", "mumbai-to-pune", "mumbai-to-ahmedabad"],
    faqs: [
      {
        q: "What do Mumbai buildings ask for when you move in?",
        a: "Typically an identity check at the gate, intimation at the society office, and in many cases a small move-in NOC. We guide you through what your specific building requires.",
      },
      {
        q: "Can you move house in Mumbai during the monsoon?",
        a: "Yes. We wrap goods against moisture, plan loading around rain windows, and use covered vehicles to keep cartons dry throughout the move.",
      },
      {
        q: "Do you arrange Mumbai to Delhi or other cities?",
        a: "Yes. Long-haul routes from Mumbai — to Delhi, Pune, Ahmedabad and others — run on dedicated vehicles with GPS tracking and optional transit insurance.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Maharashtra",
    state: "Maharashtra",
    isNational: true,
    intro:
      "Pune's IT corridors — Hinjewadi, Kharadi and Magarpatta — are behind some of the city's most time-sensitive relocations. SHIFT8 arranges packers and movers in Pune for homes, flats and offices.",
    areas: [
      "Hinjewadi",
      "Kharadi",
      "Baner",
      "Aundh",
      "Wakad",
      "Hadapsar",
      "Viman Nagar",
      "Magarpatta",
      "Kothrud",
    ],
    notes: [
      "New Pune housing projects commonly gate goods movement to service lifts and require society intimation — cleared in advance.",
      "Hinjewadi and Kharadi corporate moves are scheduled around office hours to avoid disrupting IT teams.",
      "Moving between Pune districts can cross toll-barrier bottlenecks; routes are picked to keep transit smooth and on schedule.",
    ],
    routes: ["delhi-to-pune", "mumbai-to-pune", "pune-to-bengaluru"],
    faqs: [
      {
        q: "Do Pune apartment societies let you move anytime?",
        a: "Most new projects prefer intimation and booking of the service lift in advance. We coordinate this, so your move day starts on time.",
      },
      {
        q: "Can you shift my office in Hinjewadi after work hours?",
        a: "Yes — after-hours and weekend office moves are our standard for IT clients so your teams keep working while we pack and shift.",
      },
      {
        q: "Is Pune to Bangalore a common route for you?",
        a: "Yes. The Pune–Bangalore corridor is one of the busiest tech shifts, and we run it on dedicated vehicles with tracking and optional insurance.",
      },
    ],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    state: "Karnataka",
    isNational: true,
    intro:
      "From Whitefield to Electronic City, Bengaluru's IT corridors keep a constant churn of flat and office moves. SHIFT8 arranges packers and movers in Bengaluru with an eye on the city's famous traffic and strict society rules.",
    areas: [
      "Whitefield",
      "Electronic City",
      "Koramangala",
      "Indiranagar",
      "HSR Layout",
      "Marathahalli",
      "Jayanagar",
      "Bannerghatta Road",
      "Bellandur",
    ],
    notes: [
      "Bengaluru traffic rewards an early start — loading is scheduled in morning windows to beat the jam and keep the truck moving.",
      "Gated communities and apartment complexes often run fixed time slots for moves and goods-lift bookings, handled in advance.",
      "IT-corridor relocations in Whitefield and Electronic City are timed around office hours and shift-change traffic.",
      "Post-monsoon road conditions are accounted for in transit planning for long-distance moves.",
    ],
    routes: [
      "delhi-to-bengaluru",
      "bengaluru-to-hyderabad",
      "bengaluru-to-chennai",
      "pune-to-bengaluru",
    ],
    faqs: [
      {
        q: "How do you deal with Bengaluru traffic during a move?",
        a: "We load early-morning and route around the worst congestion corridors, which keeps your goods moving and your delivery on schedule.",
      },
      {
        q: "Do gated communities in Bengaluru restrict move timings?",
        a: "Several do — they fix windows for goods movement and often require a pass. We confirm these with your community office before move day.",
      },
      {
        q: "Can you relocate from Bengaluru to another metro?",
        a: "Yes. Bengaluru to Delhi, Hyderabad, Chennai and other cities are regular routes, run on dedicated GPS-tracked vehicles with optional transit insurance.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    state: "Telangana",
    isNational: true,
    intro:
      "Hyderabad's HITEC City and Gachibowli belt keeps tech employees and families moving through its gated communities. SHIFT8 arranges packers and movers in Hyderabad for flats, villas and offices.",
    areas: [
      "Gachibowli",
      "Madhapur",
      "HITEC City",
      "Jubilee Hills",
      "Kukatpally",
      "Kondapur",
      "Miyapur",
      "Secunderabad",
    ],
    notes: [
      "Hyderabad's newer gated communities run move-intimation and lift-booking systems, coordinated with the security desk in advance.",
      "Tech-corridor relocations are planned to avoid office-hour traffic on the ORR and NH turning points.",
      "Long-distance moves out of Hyderabad are routed for smooth interstate transit with fuel and permit formalities handled.",
    ],
    routes: ["delhi-to-hyderabad", "bengaluru-to-hyderabad"],
    faqs: [
      {
        q: "Do Hyderabad societies require notice before a move?",
        a: "Most gated communities do — a move intimation and pass are commonly needed. We handle this communication so your loading day runs smoothly.",
      },
      {
        q: "What is the best time to move in Hyderabad?",
        a: "Morning slots avoid the HITEC City and Gachibowli rush, keeping the truck clear of traffic and your delivery on time.",
      },
      {
        q: "Can you arrange Hyderabad to Bangalore or Delhi moves?",
        a: "Yes. Hyderabad to Bengaluru, Delhi and other metros run regularly on dedicated vehicles with GPS tracking and optional insurance.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    state: "Tamil Nadu",
    isNational: true,
    intro:
      "From T Nagar to OMR's tech stretch, Chennai moves blend dense city logistics with coastal climate care. SHIFT8 arranges packers and movers in Chennai for homes and offices, near or far.",
    areas: ["T Nagar", "Adyar", "Anna Nagar", "Velachery", "OMR", "Porur", "ECR", "Mylapore"],
    notes: [
      "Chennai's humid coastal climate needs moisture-safe packing; electronic items are wrapped and sealed against humidity during transit.",
      "The November–December monsoon window is factored into delivery timelines, with flexible scheduling for heavy-rain days.",
      "Many Chennai apartment complexes require society intimation and a fixed slot for goods movement.",
    ],
    routes: ["bengaluru-to-chennai"],
    faqs: [
      {
        q: "Do Chennai apartment complexes restrict move timings?",
        a: "Many do, especially during the monsoon. We confirm the complex's policy in advance and schedule your move within its permitted windows.",
      },
      {
        q: "How do you protect furniture from coastal humidity?",
        a: "We use sealed, moisture-resistant packing and wrap electronics and wood furniture carefully so humidity doesn't cause damage in transit.",
      },
      {
        q: "Can you move from Chennai to another city?",
        a: "Yes — we arrange moves to Bengaluru, Delhi and other metros on dedicated vehicles with GPS tracking and optional transit insurance.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    region: "West Bengal",
    state: "West Bengal",
    isNational: true,
    intro:
      "Kolkata's mix of planned townships like Salt Lake and New Town with narrow central-city lanes needs flexible moving crews. SHIFT8 arranges packers and movers in Kolkata for both.",
    areas: [
      "Salt Lake",
      "New Town",
      "Ballygunge",
      "Behala",
      "Garia",
      "Howrah",
      "Barrackpore",
      "Dum Dum",
    ],
    notes: [
      "Central Kolkata's narrow lanes demand compact route planning and careful parking — our drivers are used to tight urban entry points.",
      "Salt Lake and New Town's high-rises run society intimation and lift-booking systems, handled before move day.",
      "Festival-season traffic is factored in so your move isn't stuck behind processions and rush crowding.",
    ],
    routes: ["delhi-to-kolkata"],
    faqs: [
      {
        q: "Can your truck reach my house on a narrow Kolkata lane?",
        a: "Yes. We plan the vehicle access and parking in advance, and use trolleys and careful hand-carrying where a truck can't pull right up to the door.",
      },
      {
        q: "Do Salt Lake and New Town societies need prior intimation?",
        a: "Most do. We confirm the complex's move policy, book the lift slot and carry the paperwork your security desk requires.",
      },
      {
        q: "Do you handle long-distance moves out of Kolkata?",
        a: "Yes, including Kolkata to Delhi and other metros on dedicated GPS-tracked vehicles with optional transit insurance.",
      },
    ],
  },
];
