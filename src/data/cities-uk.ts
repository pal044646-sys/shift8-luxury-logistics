import type { CityInfo } from "./types";

// SHIFT8 home territory — Uttarakhand cities served directly from Haridwar HQ.

export const UK_CITIES: CityInfo[] = [
  {
    slug: "haridwar",
    name: "Haridwar",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Haridwar is our home base — the SHIFT8 crew knows every colony, gali, and highway exit from Har Ki Pauri to Bahadrabad.",
    areas: [
      "Jwalapur",
      "Bhupatwala",
      "Kankhal",
      "Bahadrabad",
      "Sidcul",
      "Ranipur",
      "Shivalik Nagar",
      "BHEL",
    ],
    notes: [
      "As the home city, Haridwar gets our largest, most experienced crews and nearest dispatch.",
      "SIDCUL Haridwar industrial moves are handled with plant-aware packing and access coordination.",
      "Local Haridwar moves are often completed fully within a single day, including surveys.",
    ],
    routes: [],
    faqs: [
      {
        q: "Why is SHIFT8 strongest in Haridwar?",
        a: "Haridwar is our headquarters — crews, vehicles and packing materials are based here, so local moves get the most experienced teams and the fastest turnaround in all of Uttarakhand.",
      },
      {
        q: "Can you move within Haridwar the same day?",
        a: "Yes. Most local Haridwar shifts — survey through to delivery — happen within the same day for small and medium loads.",
      },
      {
        q: "Do you handle SIDCUL and BHEL Haridwar moves?",
        a: "Yes — industrial and township relocations are a regular part of our Haridwar work, with plant-aware packing and access coordination.",
      },
    ],
  },
  {
    slug: "roorkee",
    name: "Roorkee",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Serving Roorkee residents, IIT Roorkee staff, and cantonment families with quick, careful household relocation.",
    areas: ["Civil Lines", "Solani Puram", "IIT Campus", "Ganeshpur", "Manglaur Road"],
    notes: [
      "IIT Roorkee campus moves have their own entry norms, coordinated with the institute before move day.",
      "Cantonment and railway-quarter relocations are regular Roorkee work.",
      "Roorkee sits on the Haridwar–Delhi highway, making intercity moves seamless.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can you manage a move inside the IIT Roorkee campus?",
        a: "Yes. We coordinate campus entry with the institute in advance and handle the shift exactly like any other Roorkee job.",
      },
      {
        q: "How quickly can you move within Roorkee?",
        a: "Most local Roorkee moves are surveyed and completed within a day for standard loads.",
      },
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "From ashram lanes to Tapovan apartments, we handle Rishikesh moves with equal care for antiques and everyday goods.",
    areas: ["Tapovan", "Muni Ki Reti", "Shivpuri", "Nepali Farm", "Lakshman Jhula"],
    notes: [
      "Tapovan's narrow approach roads need careful vehicle planning; crews hand-carry where needed.",
      "Ashram and retreat relocations are handled with care for delicate, sentimental goods.",
      "Rishikesh–Haridwar is a short hop, often loaded and delivered the same day.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can your truck reach Tapovan in Rishikesh?",
        a: "We plan access for Tapovan's narrow roads in advance and use trolleys or hand-carrying where the truck can't pull up to the door.",
      },
      {
        q: "Is Rishikesh to Haridwar a same-day route?",
        a: "Yes — the 30-odd kilometre hop is regularly loaded and delivered within a single day.",
      },
    ],
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Doon Valley moves — hill-road experienced drivers, careful crews, and clear pricing across every Dehradun locality.",
    areas: ["Rajpur Road", "Sahastradhara", "Clement Town", "Vasant Vihar", "GMS Road", "ISBT"],
    notes: [
      "Hill-road driving experience matters in Dehradun's sloped eastern sectors; our drivers are trained for it.",
      "Society intimation norms in Vasant Vihar and Clement Town are handled before move day.",
      "Dehradun acts as the staging point for Mussoorie and hill-station deliveries.",
    ],
    routes: [],
    faqs: [
      {
        q: "Is moving in Dehradun different because of the hills?",
        a: "The city's slopes need experienced drivers and careful vehicle loading. Our crews are used to Doon's roads and secure loads against shifts on inclines.",
      },
      {
        q: "Can you move between Dehradun and Haridwar the same day?",
        a: "Yes — the Rishikesh-road run between the two cities is a regular, single-day route.",
      },
    ],
  },
  {
    slug: "kotdwar",
    name: "Kotdwar",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro: "Kotdwar to anywhere in India — small-town origin, big-city standards.",
    areas: ["Bhabar", "Jhanda Chowk", "Kaudia", "Sigaddi"],
    notes: [
      "Kotdwar is the gateway to Garhwal, giving us steady long-distance dispatch work.",
      "Local moves are quick — most complete within a day.",
      "Access to hill-district routes is factored into vehicle planning.",
    ],
    routes: [],
    faqs: [
      {
        q: "Do you move households out of Kotdwar to big cities?",
        a: "Yes — Kotdwar to Delhi and other metros is regular dispatch work, run on dedicated vehicles with tracking.",
      },
      {
        q: "How fast is a local Kotdwar move?",
        a: "Most local shifts complete within the same day, including the survey.",
      },
    ],
  },
  {
    slug: "rudrapur",
    name: "Rudrapur",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Industrial-belt Rudrapur moves — factory transfers, SIDCUL households, and cross-city shifts.",
    areas: ["SIDCUL", "Awas Vikas", "Kichha Road", "Metropolis Mall Area"],
    notes: [
      "Rudrapur's SIDCUL industrial zone has frequent factory-transfer work with plant-aware packing.",
      "Employee-family shifts between Rudrapur and metros are regular dispatch jobs.",
      "Interstate moves out of Rudrapur are handled with permit and documentation management.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can you move a factory or plant employee's household from Rudrapur?",
        a: "Yes — industrial and employee relocations are a core part of our Rudrapur work, with careful staging and scheduling.",
      },
      {
        q: "How fast is a local Rudrapur move?",
        a: "Most local shifts complete within a day for standard loads.",
      },
    ],
  },
  {
    slug: "haldwani",
    name: "Haldwani",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro: "Kumaon's gateway city — Haldwani homes and shops move with SHIFT8 to any Indian metro.",
    areas: ["Kathgodam", "Kaladhungi Road", "Rampur Road", "Nainital Road"],
    notes: [
      "Kathgodam's railhead makes Haldwani a natural staging point for long-distance moves.",
      "Hill-bound road access on Nainital Road needs experienced drivers.",
      "Monsoon planning adds buffer to hill-route delivery windows.",
    ],
    routes: [],
    faqs: [
      {
        q: "Do you move households from Haldwani to metros?",
        a: "Yes — Haldwani to Delhi and other cities runs on dedicated vehicles with GPS tracking and optional insurance.",
      },
      {
        q: "How quickly can you move within Haldwani?",
        a: "Most local Haldwani moves are surveyed and completed within a day for standard loads.",
      },
    ],
  },
  {
    slug: "kashipur",
    name: "Kashipur",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Kashipur relocation — industrial, residential, and long-distance moves handled end to end.",
    areas: ["Ramnagar Road", "Jaspur Road", "Dhakia"],
    notes: [
      "Kashipur's small-industry belt drives steady business and family relocations.",
      "Long-distance moves are routed for smooth, steady highway transit.",
      "Local moves complete quickly with our nearest dispatch.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can you handle both business and household moves in Kashipur?",
        a: "Yes — we relocate homes, shops and small industrial units across Kashipur and beyond.",
      },
      {
        q: "Do you offer long-distance moves out of Kashipur?",
        a: "Yes — to Delhi and other metros, run on dedicated GPS-tracked vehicles.",
      },
    ],
  },
  {
    slug: "mussoorie",
    name: "Mussoorie",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Hill-station moves demand experienced drivers and compact carriers — exactly what SHIFT8 sends to Mussoorie.",
    areas: ["Landour", "Library Bazaar", "Kempty", "Barlowganj"],
    notes: [
      "Serpentine hill roads require compact vehicles and veteran hill drivers.",
      "Narrow bazaars near Library are handled with careful staging and hand-carrying.",
      "Landour and Barlowganj deliveries are planned with weather buffers.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can your trucks manage Mussoorie's hill roads?",
        a: "Yes. We dispatch compact, hill-suitable vehicles with experienced hill drivers, and hand-carry where roads get tight.",
      },
      {
        q: "Do you move goods between Mussoorie and Dehradun?",
        a: "Yes — the hill-station run is a regular route, planned with weather and traffic buffers.",
      },
    ],
  },
  {
    slug: "laksar",
    name: "Laksar",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Laksar and surrounding villages — doorstep pickup, transparent pricing, on-time delivery.",
    areas: ["Laksar Town", "Jagjeetpur", "Iqbalpur Road"],
    notes: [
      "Railway-colony and village moves are regular Laksar work.",
      "Doorstep pickup extends to surrounding villages and farmhouses.",
      "Laksar sits on the Haridwar–Delhi line, keeping intercity moves simple.",
    ],
    routes: [],
    faqs: [
      {
        q: "Do you pick up from villages around Laksar?",
        a: "Yes — doorstep pickup and delivery extend to surrounding villages and settlements.",
      },
      {
        q: "Can you arrange Laksar to Delhi moves?",
        a: "Yes — Laksar's position on the Haridwar route keeps intercity transit straightforward.",
      },
    ],
  },
  {
    slug: "jwalapur",
    name: "Jwalapur",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Jwalapur is minutes from our Haridwar hub — expect same-day survey and next-day loading.",
    areas: ["Jwalapur Chowk", "Kassavan", "Peeli Kothi"],
    notes: [
      "Jwalapur's market-area lanes are handled with quick, local-knowledge crews.",
      "Proximity to the hub means near-instant dispatch.",
      "Same-day survey and next-day loading are standard here.",
    ],
    routes: [],
    faqs: [
      {
        q: "How fast can you move within Jwalapur?",
        a: "Very fast — the Haridwar hub is minutes away, so same-day survey and next-day loading are standard.",
      },
      {
        q: "Do you serve Jwalapur market and Peeli Kothi?",
        a: "Yes, all of Jwalapur — including Chowk, Kassavan and Peeli Kothi.",
      },
    ],
  },
  {
    slug: "bhupatwala",
    name: "Bhupatwala",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro:
      "Bhupatwala moves along the Ganga corridor — dharamshala, apartment, and villa relocations.",
    areas: ["Bhupatwala Market", "Sapt Sarovar Road"],
    notes: [
      "Ganga-corridor apartments and villas are regular Bhupatwala work.",
      "Sapt Sarovar Road access is well-suited to standard moving vehicles.",
      "Hub proximity keeps survey-to-delivery tight.",
    ],
    routes: [],
    faqs: [
      {
        q: "Do you handle villa and dharamshala moves in Bhupatwala?",
        a: "Yes — apartments, villas and dharamshala premises are all part of our regular Bhupatwala work.",
      },
      {
        q: "Is survey and moving fast near Bhupatwala?",
        a: "Yes — our Haridwar hub is close by, so timelines stay tight.",
      },
    ],
  },
  {
    slug: "bahadrabad",
    name: "Bahadrabad",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro: "Bahadrabad industrial and residential moves, including SIDCUL Haridwar transfers.",
    areas: ["Bahadrabad Chowk", "Salempur", "Pathri"],
    notes: [
      "Industrial transfers tied to SIDCUL Haridwar are regular work.",
      "Residential moves between Bahadrabad and the city core run daily.",
      "Hub proximity allows responsive scheduling.",
    ],
    routes: [],
    faqs: [
      {
        q: "Do you handle SIDCUL-related moves from Bahadrabad?",
        a: "Yes — industrial transfers involving SIDCUL Haridwar are a core part of our Bahadrabad work.",
      },
      {
        q: "How responsive is moving in Bahadrabad?",
        a: "Very — the Haridwar hub is minutes away, so scheduling is fast and flexible.",
      },
    ],
  },
  {
    slug: "sidcul-haridwar",
    name: "SIDCUL Haridwar",
    region: "Uttarakhand",
    state: "Uttarakhand",
    isNational: false,
    intro: "SIDCUL factory employee transfers, plant asset relocation, and staff housing moves.",
    areas: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5"],
    notes: [
      "Industrial estate relocations need plant-aware packing and staging.",
      "Employee household transfers across SIDCUL sectors are regular work.",
      "Heavy and sensitive items handled with the right equipment and care.",
    ],
    routes: [],
    faqs: [
      {
        q: "Can you relocate factory assets within SIDCUL Haridwar?",
        a: "Yes — we move plant, machinery, fixtures and staff housing within the industrial estate with proper equipment and care.",
      },
      {
        q: "Do you handle employee household transfers in SIDCUL?",
        a: "Yes — staff housing relocations across the sectors are a regular part of our industrial work.",
      },
    ],
  },
];
