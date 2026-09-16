// Central SEO data for SHIFT8 — national (all-India) positioning.
// Cities, intercity routes, services, FAQs and blog posts.

export const SITE = {
  name: "SHIFT8 Movers & Packers",
  brand: "SHIFT8",
  domain: "https://shift8.in",
  phone: "+91 8439973125",
  phoneRaw: "+918439973125",
  waLink: "https://wa.me/918439973125",
  email: "info@shift8.in",
  // Registered office / operations base. Service coverage is India-wide.
  addressLocality: "Haridwar",
  addressRegion: "Uttarakhand",
  addressCountry: "IN",
  postalCode: "249401",
  streetAddress: "Haridwar, Uttarakhand",
  geo: { lat: 29.9457, lng: 78.1642 },
};

export type Slug = string;

/* ------------------------------------------------------------------ */
/* SERVICES — national service pages                                   */
/* ------------------------------------------------------------------ */

export interface ServiceInfo {
  slug: Slug;
  name: string;
  h1: string;
  short: string;
  forWho: string[];
  bullets: string[];
  process: string[];
  faqs: FAQ[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "home-shifting",
    name: "Home Shifting",
    h1: "Home Shifting Services Across India",
    short:
      "Complete household relocation — packing, loading, transport, unloading and furniture reassembly, for local moves inside a city and for long-distance moves between Indian cities.",
    forWho: [
      "Families moving a 1 BHK, 2 BHK, 3 BHK or independent house",
      "Working professionals relocating for a job transfer",
      "Tenants moving between rented flats in the same city",
      "Anyone who wants packing material and labour handled by one team",
    ],
    bullets: [
      "Room-by-room packing with corrugated cartons, bubble wrap and stretch film",
      "Furniture disassembly before loading and reassembly after delivery",
      "Dedicated vehicle sized to your load — no forced sharing on request",
      "Doorstep pickup and doorstep placement, including stairs and lifts",
      "Transit insurance arranged on request for long-distance moves",
    ],
    process: [
      "Share pickup city, destination city, moving date and rough load size",
      "Free survey — on-site where our crew operates, video call elsewhere",
      "Written, itemised quotation with inclusions listed",
      "Packing on your confirmed date, with an inventory list",
      "Loading, transit with status updates, and unloading",
      "Unpacking of essentials and furniture reassembly at the new home",
    ],
    faqs: [
      { q: "Do you handle both local and intercity home shifting?", a: "Yes. Inside-city moves and long-distance moves between Indian cities are both handled end to end, including packing, transport and reassembly." },
      { q: "What does a home shifting quote depend on?", a: "Load volume, distance, floor and lift availability, packing depth, and whether vehicles or storage are included. That is why we survey before quoting instead of giving a fixed phone price." },
      { q: "Can I pack some things myself?", a: "Yes. Many customers pack clothes and books themselves and ask us to pack only fragile items, kitchenware and electronics. The quote is adjusted accordingly." },
    ],
  },
  {
    slug: "office-shifting",
    name: "Office Shifting",
    h1: "Office Shifting and Commercial Relocation Services in India",
    short:
      "Office and commercial relocation planned around your working hours — workstations, IT equipment, files, storage units and modular partitions moved with an asset list at both ends.",
    forWho: [
      "Startups and offices moving to a larger or better-located workspace",
      "Companies consolidating branches or shifting between cities",
      "Coworking members moving into a private office",
      "Retail and clinic setups relocating fixtures and inventory",
    ],
    bullets: [
      "Weekend and after-hours scheduling to reduce business downtime",
      "Separate careful packing for CPUs, monitors, networking gear and servers",
      "Department-wise labelling so desks are rebuilt in the right place",
      "Inventory / asset sheet shared at pickup and verified at delivery",
      "GST invoice and documentation for company accounting",
    ],
    process: [
      "Pre-move survey of the current and new premises",
      "Move plan with sequence, timings and labelling scheme",
      "Dismantling of workstations, partitions and storage units",
      "Transport in a dedicated vehicle, tracked through transit",
      "Reassembly and placement per the new floor plan",
      "Handover against the inventory sheet",
    ],
    faqs: [
      { q: "Can the office move happen over a weekend?", a: "Yes. Most office moves are scheduled on a weekend or overnight so that teams can work normally on the next business day." },
      { q: "Do you provide a GST invoice?", a: "Yes. Commercial moves are billed with a proper invoice and supporting documentation for your accounts team." },
      { q: "Who reassembles the workstations?", a: "The same crew that dismantles them. Fasteners and small parts are bagged and labelled per desk so nothing is missing at reassembly." },
    ],
  },
  {
    slug: "packing-and-moving",
    name: "Packing and Moving",
    h1: "Packing and Moving Services in India",
    short:
      "Professional packing with proper materials, with or without transport — useful when you want expert packing for fragile goods and are flexible about who carries the load.",
    forWho: [
      "Households with a lot of glassware, crockery, art or electronics",
      "Customers who have arranged their own vehicle but need packing",
      "Anyone moving an office cabin, a single room or a partial load",
      "People short on time before a move date",
    ],
    bullets: [
      "Multi-ply cartons, bubble wrap, foam sheets, stretch film and tape",
      "Double-boxing and corner protection for fragile items",
      "Wardrobe cartons so hanging clothes travel without creasing",
      "Numbered, labelled cartons with a matching inventory list",
      "Unpacking service available at the destination on request",
    ],
    process: [
      "Survey to estimate material and crew requirement",
      "Material delivered to your address on the packing date",
      "Room-by-room packing, fragile items handled separately",
      "Labelling and inventory list handover",
      "Transport by SHIFT8 or by the vehicle you have arranged",
    ],
    faqs: [
      { q: "Can I book packing only, without transport?", a: "Yes. Packing-only is a standard booking. You get materials, crew and an inventory list, and you arrange the vehicle." },
      { q: "What material is used for fragile items?", a: "Bubble wrap plus foam sheet inside a multi-ply carton, with cushioning fill and a fragile mark. Very delicate items are double-boxed." },
    ],
  },
  {
    slug: "intercity-moving",
    name: "Intercity Moving",
    h1: "Intercity Packers and Movers — City to City Relocation",
    short:
      "Long-distance relocation between Indian cities, with a single team responsible from pickup to delivery and status updates while your goods are in transit.",
    forWho: [
      "Job transfers between metros",
      "Families relocating to a different state",
      "Students and bachelors moving with a partial load",
      "Anyone shifting a home plus a car or two-wheeler together",
    ],
    bullets: [
      "One point of contact for pickup city and destination city",
      "Dedicated vehicle options for long routes, so goods are not reloaded",
      "Estimated transit window shared in writing before booking",
      "Vehicle transport can be combined with the household load",
      "Short-term storage at either end if possession dates do not match",
    ],
    process: [
      "Share both cities, moving date and load details",
      "Survey and written quote with the transit window",
      "Packing and loading at the pickup address",
      "Transit with status updates on the route",
      "Delivery, unloading and reassembly at the destination address",
    ],
    faqs: [
      { q: "How long does an intercity move take?", a: "It depends on distance and route. Short routes are often same-day or next-day; cross-country routes typically take a few days. The estimated window is given in writing before booking." },
      { q: "Can my car move along with my household goods?", a: "Yes. Vehicles travel on a carrier and can be scheduled to arrive close to your household delivery date." },
    ],
  },
  {
    slug: "car-transportation",
    name: "Car Transportation",
    h1: "Car Transportation Services Across India",
    short:
      "Car shifting on open and enclosed carriers between Indian cities, with a condition report and photographs at loading and delivery.",
    forWho: [
      "People relocating to another city with their own car",
      "Buyers and sellers of a car in a different city",
      "Families moving more than one vehicle",
    ],
    bullets: [
      "Open and enclosed carrier options depending on route and budget",
      "Condition report with photographs before loading",
      "Fuel kept at a safe level for transport",
      "Wheel straps and chocks instead of loose tying",
      "Transit insurance arranged on request",
    ],
    process: [
      "Share pickup city, destination city and vehicle model",
      "Inspection and condition report at pickup",
      "Loading on the carrier and securing the vehicle",
      "Status updates during transit",
      "Delivery inspection and signed handover",
    ],
    faqs: [
      { q: "Is the car driven or carried?", a: "Carried on a car carrier. Vehicles are not driven long distance, so no additional running is added to your odometer." },
      { q: "Can I keep household items inside the car?", a: "No. Carriers are not permitted to transport loose goods inside vehicles. Household items travel in the moving vehicle instead." },
    ],
  },
  {
    slug: "bike-transportation",
    name: "Bike Transportation",
    h1: "Bike and Two-Wheeler Transportation in India",
    short:
      "Two-wheeler transport between Indian cities with protective wrapping or crating, doorstep pickup and doorstep delivery.",
    forWho: [
      "Students and professionals moving city with a bike or scooter",
      "Anyone who bought or sold a two-wheeler in another city",
      "Households moving a bike along with household goods",
    ],
    bullets: [
      "Wrapping or wooden crating chosen by route length",
      "Fuel drained and battery terminals handled before loading",
      "Doorstep pickup and delivery — no transport-nagar visits",
      "Condition photographs at both ends",
      "Transit insurance arranged on request",
    ],
    process: [
      "Share pickup and destination address and vehicle details",
      "Inspection, photographs and packing at pickup",
      "Loading with straps and edge protection",
      "Transit with status updates",
      "Doorstep delivery and handover check",
    ],
    faqs: [
      { q: "What documents are needed to transport a bike?", a: "A copy of the registration certificate and a photo ID of the owner. If the sender is not the owner, an authorisation note is required." },
      { q: "Will the fuel be drained?", a: "Yes, to a safe minimum. This is a transport safety requirement for two-wheelers." },
    ],
  },
  {
    slug: "storage",
    name: "Storage and Warehousing",
    h1: "Storage and Warehousing for Household and Business Goods",
    short:
      "Short-term and long-term storage for household goods and business inventory when your new premises are not ready — with an inventory record for everything stored.",
    forWho: [
      "Customers with a gap between move-out and move-in dates",
      "People going abroad or on a long assignment",
      "Businesses holding inventory or office furniture between premises",
    ],
    bullets: [
      "Dry, secured, pest-controlled space",
      "Photographed inventory intake with item tags",
      "Wrapped and stacked storage, not loose dumping",
      "Weekly to yearly durations",
      "Delivery from storage to any address you specify",
    ],
    process: [
      "Share the volume and the storage duration you expect",
      "Packing and pickup from your address",
      "Inventory intake with photographs and tags",
      "Storage with periodic checks",
      "Retrieval and delivery on your notice",
    ],
    faqs: [
      { q: "What is the minimum storage duration?", a: "Storage can be booked from as little as one week, and extended monthly as needed." },
      { q: "Can I take out only a few items?", a: "Yes. Because the intake is inventoried and tagged, partial retrieval is possible with advance notice." },
    ],
  },
  {
    slug: "loading-and-unloading",
    name: "Loading and Unloading",
    h1: "Loading and Unloading Labour Services",
    short:
      "Trained crew for lifting, stairs, careful placement and furniture handling, for customers who have already arranged a vehicle.",
    forWho: [
      "Customers who booked a truck or tempo themselves",
      "People moving within the same building or society",
      "Shops and offices receiving or dispatching bulk goods",
    ],
    bullets: [
      "Crew of 2 to 8 depending on load and floors",
      "Furniture disassembly and reassembly included",
      "Padded blankets, ropes and hand tools brought by the crew",
      "Careful stair and lift handling",
      "Hourly or per-shift booking",
    ],
    process: [
      "Tell us crew size, address, floor and time slot",
      "Crew arrives with padding and tools",
      "Careful loading into your vehicle",
      "Unloading and placement at the destination",
    ],
    faqs: [
      { q: "Do you provide packing material for this service?", a: "Packing material is not included by default, but can be added to the booking if you need cartons and wrap." },
      { q: "Can I book crew for just a few hours?", a: "Yes. Loading and unloading is billed hourly or per shift based on crew size." },
    ],
  },
];

export const SERVICE_REDIRECTS: Record<string, string> = {
  "house-shifting": "home-shifting",
  "office-relocation": "office-shifting",
  "packing-services": "packing-and-moving",
  "warehouse-storage": "storage",
  "loading-unloading": "loading-and-unloading",
  "commercial-relocation": "office-shifting",
};

/* ------------------------------------------------------------------ */
/* CITIES                                                              */
/* ------------------------------------------------------------------ */

export interface CityInfo {
  slug: Slug;
  name: string;
  region: string;
  intro: string;
  demand: string;
  areas: string[];
  needs: string[];
  routes: Slug[];
}

export const CITIES: CityInfo[] = [
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi NCR",
    intro:
      "Delhi moves are shaped by narrow colony lanes, high-rise societies with fixed shifting windows and heavy weekday traffic. SHIFT8 plans Delhi jobs around society timing rules and works out vehicle access before the crew arrives, so loading is not held up at the gate.",
    demand:
      "Most Delhi enquiries are rented-flat shifts inside the city, moves out to NCR suburbs, and long-distance relocation to western and southern metros.",
    areas: ["Dwarka", "Rohini", "Saket", "Lajpat Nagar", "Mayur Vihar", "Janakpuri", "Karol Bagh", "Vasant Kunj"],
    needs: [
      "Society move-in / move-out permission and service-lift booking",
      "Vehicle size that can enter narrow colony streets",
      "Timing that avoids peak traffic restrictions for goods vehicles",
    ],
    routes: ["delhi-to-mumbai", "delhi-to-bangalore", "delhi-to-pune", "delhi-to-hyderabad", "delhi-to-jaipur", "delhi-to-chandigarh", "delhi-to-lucknow", "delhi-to-ahmedabad", "delhi-to-kolkata"],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    intro:
      "Mumbai relocation is mostly a vertical problem: small lifts, tight staircases, society NOC formalities and limited parking near the building. SHIFT8 surveys lift dimensions and access first, then decides carton sizes and whether furniture must be dismantled to travel down.",
    demand:
      "Common Mumbai requirements are 1 BHK and 2 BHK flat shifts within the city, moves to Pune and Thane, and outbound relocation to Delhi NCR and Bengaluru.",
    areas: ["Andheri", "Borivali", "Powai", "Thane", "Chembur", "Dadar", "Malad", "Navi Mumbai"],
    needs: [
      "Society NOC and shifting-hour rules before the move date",
      "Lift measurement so wardrobes and sofas are dismantled if needed",
      "Compact vehicle placement where building parking is limited",
    ],
    routes: ["mumbai-to-pune", "mumbai-to-bangalore", "mumbai-to-delhi", "mumbai-to-ahmedabad", "mumbai-to-hyderabad"],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Maharashtra",
    intro:
      "Pune sees constant movement between IT corridors and residential townships, often at short notice around joining dates. SHIFT8 handles Pune moves with township gate formalities in mind and can hold goods briefly when the new flat handover slips by a few days.",
    demand:
      "Typical Pune moves are Hinjewadi and Kharadi corridor flat shifts, student and bachelor partial loads, and Pune–Mumbai or Pune–Hyderabad relocation.",
    areas: ["Hinjewadi", "Kharadi", "Wakad", "Baner", "Viman Nagar", "Kothrud", "Hadapsar", "Pimpri-Chinchwad"],
    needs: [
      "Short-notice booking around joining and possession dates",
      "Partial-load options for bachelors and students",
      "Township entry passes and lift slot booking",
    ],
    routes: ["mumbai-to-pune", "pune-to-hyderabad", "delhi-to-pune", "pune-to-bangalore"],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    region: "Karnataka",
    intro:
      "Bengaluru moves are dominated by apartment living and job transfers, with traffic that makes timing more important than distance. SHIFT8 schedules Bengaluru loading early in the day and confirms apartment shifting windows in advance so the crew is not turned away.",
    demand:
      "Frequent requirements are inside-city apartment shifts, inbound relocation from Delhi NCR and Mumbai, and moves onward to Hyderabad and Chennai.",
    areas: ["Whitefield", "Electronic City", "Koramangala", "HSR Layout", "Indiranagar", "Marathahalli", "Hebbal", "Yelahanka"],
    needs: [
      "Apartment association shifting timings and lift booking",
      "Early-morning loading to avoid traffic delays",
      "Careful handling of large TVs and work-from-home setups",
    ],
    routes: ["delhi-to-bangalore", "mumbai-to-bangalore", "bangalore-to-hyderabad", "bangalore-to-chennai", "pune-to-bangalore"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    intro:
      "Hyderabad relocation ranges from gated communities in the western IT belt to older parts of the city with narrow approaches. SHIFT8 plans the vehicle and crew size for Hyderabad by access, not just by load, so a big truck is never sent where a smaller one is required.",
    demand:
      "Common Hyderabad moves are Gachibowli and Kondapur area flat shifts, office relocation within the IT belt, and long-distance moves to Delhi NCR and Bengaluru.",
    areas: ["Gachibowli", "Kondapur", "Madhapur", "Kukatpally", "Banjara Hills", "Uppal", "Miyapur", "LB Nagar"],
    needs: [
      "Gated community entry approval and shifting slots",
      "Access-appropriate vehicle for older neighbourhoods",
      "Office moves scheduled outside working hours",
    ],
    routes: ["delhi-to-hyderabad", "bangalore-to-hyderabad", "pune-to-hyderabad", "hyderabad-to-chennai", "mumbai-to-hyderabad"],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    intro:
      "Ahmedabad moves are usually straightforward on access but heavy on volume, with larger flats and independent houses than most metros. SHIFT8 quotes Ahmedabad jobs on measured volume so a full-house load is not squeezed into an undersized vehicle.",
    demand:
      "Regular Ahmedabad requirements are full-house shifts within the city, business and warehouse relocation, and moves to Mumbai, Pune and Delhi NCR.",
    areas: ["Satellite", "Bopal", "Vastrapur", "Maninagar", "Chandkheda", "SG Highway", "Naranpura", "Gandhinagar"],
    needs: [
      "Larger vehicle capacity for full-house and bungalow loads",
      "Careful packing for glass, marble and modular kitchen parts",
      "Business and warehouse stock relocation with an inventory list",
    ],
    routes: ["mumbai-to-ahmedabad", "delhi-to-ahmedabad", "ahmedabad-to-bangalore"],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "Rajasthan",
    intro:
      "Jaipur combines walled-city addresses with wide newer colonies, so the same city needs two very different approaches. SHIFT8 checks the pickup lane width for old-city Jaipur addresses and plans a shuttle vehicle where a full-size truck cannot reach the door.",
    demand:
      "Typical Jaipur moves are colony-to-colony household shifts, Jaipur–Delhi NCR relocation, and outbound moves to Mumbai and Bengaluru.",
    areas: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura", "C-Scheme", "Sanganer", "Tonk Road"],
    needs: [
      "Shuttle loading where the lane is too narrow for a large truck",
      "Extra protection for glass and decorative items",
      "Same-week slots around month-end demand",
    ],
    routes: ["delhi-to-jaipur", "jaipur-to-mumbai", "haridwar-to-jaipur"],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    region: "Uttar Pradesh",
    intro:
      "Lucknow relocation spans new township apartments and long-settled family homes with decades of accumulated goods. SHIFT8 spends more survey time on Lucknow full-house moves, because carton count — not distance — is what usually decides the vehicle and crew.",
    demand:
      "Common Lucknow requirements are Gomti Nagar area flat shifts, family house relocation, and moves to Delhi NCR and Bengaluru.",
    areas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Alambagh", "Jankipuram", "Chinhat"],
    needs: [
      "Full-house surveys where goods have accumulated for years",
      "Furniture dismantling for older, heavier wooden pieces",
      "Written quotes for long-distance transfers",
    ],
    routes: ["delhi-to-lucknow", "haridwar-to-lucknow", "lucknow-to-bangalore"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    region: "Chandigarh Tricity",
    intro:
      "Chandigarh's sector layout makes access easy, and moves here often extend across the tricity into Mohali and Panchkula. SHIFT8 treats tricity jobs as one service area so a pickup in one sector and a delivery in Mohali does not become two bookings.",
    demand:
      "Frequent Chandigarh moves are sector-to-sector household shifts, tricity relocation, and moves towards Delhi NCR and Uttarakhand.",
    areas: ["Sector 8", "Sector 22", "Sector 35", "Sector 44", "Mohali", "Panchkula", "Zirakpur"],
    needs: [
      "Single booking covering Chandigarh, Mohali and Panchkula",
      "Same-day slots for short tricity moves",
      "Careful handling for glass-top and modular furniture",
    ],
    routes: ["delhi-to-chandigarh", "haridwar-to-chandigarh", "chandigarh-to-bangalore"],
  },
  {
    slug: "noida",
    name: "Noida",
    region: "Delhi NCR",
    intro:
      "Noida and Greater Noida are high-rise territory, where gate passes, service lifts and society shifting hours decide how fast a move finishes. SHIFT8 collects the society's requirements before the move date so paperwork is ready when the vehicle reaches the gate.",
    demand:
      "Most Noida enquiries are sector high-rise flat shifts, office moves within Noida's commercial sectors, and long-distance relocation to southern metros.",
    areas: ["Sector 62", "Sector 76", "Sector 137", "Noida Extension", "Greater Noida", "Sector 18", "Sector 50"],
    needs: [
      "Society gate pass and service-lift reservation",
      "Move completion within permitted society hours",
      "Office shifting scheduled over a weekend",
    ],
    routes: ["noida-to-bangalore", "delhi-to-mumbai", "haridwar-to-noida"],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    region: "Delhi NCR",
    intro:
      "Gurgaon moves are usually condominium moves, with strict security procedures and lift slots booked hours in advance. SHIFT8 coordinates with the facility team so loading and unloading fit the approved window and the crew clears security without delay.",
    demand:
      "Typical Gurgaon requirements are condominium flat shifts, corporate employee relocation, and moves to Mumbai, Bengaluru and Pune.",
    areas: ["DLF Phase 1-5", "Sohna Road", "Golf Course Road", "Sector 56", "Sector 82", "Manesar", "New Gurgaon"],
    needs: [
      "Facility approval, gate entry and lift slot coordination",
      "Corporate relocation documentation and invoicing",
      "Protective covering for lift walls and corridors",
    ],
    routes: ["gurgaon-to-mumbai", "delhi-to-bangalore", "haridwar-to-gurgaon"],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    region: "West Bengal",
    intro:
      "Kolkata has some of the tightest last-mile access of any Indian metro, with narrow lanes and older buildings without lifts. SHIFT8 plans Kolkata jobs with a smaller shuttle vehicle and a larger crew for stair carrying, rather than assuming a truck can reach the door.",
    demand:
      "Common Kolkata moves are old-building household shifts, apartment relocation in newer areas, and long-distance moves to Delhi NCR and Bengaluru.",
    areas: ["Salt Lake", "New Town", "Behala", "Ballygunge", "Howrah", "Tollygunge", "Dumdum"],
    needs: [
      "Shuttle vehicle for narrow-lane pickups",
      "Larger crew where there is no lift",
      "Weather-safe wrapping during monsoon months",
    ],
    routes: ["delhi-to-kolkata", "kolkata-to-bangalore", "haridwar-to-kolkata"],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    intro:
      "Chennai moves need humidity and rain planning as much as packing skill, especially between June and December. SHIFT8 uses moisture-resistant wrapping for Chennai loads and schedules loading around rain windows where the forecast is poor.",
    demand:
      "Regular Chennai requirements are OMR corridor apartment shifts, inbound relocation from Bengaluru and Hyderabad, and outbound moves to Delhi NCR.",
    areas: ["OMR", "Velachery", "Adyar", "Anna Nagar", "Porur", "Tambaram", "Perungudi"],
    needs: [
      "Moisture-resistant wrapping for humid and rainy conditions",
      "Apartment lift booking and association permissions",
      "Careful electronics packing for long southbound routes",
    ],
    routes: ["bangalore-to-chennai", "hyderabad-to-chennai", "haridwar-to-chennai"],
  },
  {
    slug: "indore",
    name: "Indore",
    region: "Madhya Pradesh",
    intro:
      "Indore is a common relay point for central India moves, and local shifts here often involve independent houses with terrace-level rooms. SHIFT8 plans Indore crews for stair work and quotes on actual volume after seeing the house.",
    demand:
      "Frequent Indore moves are inside-city household shifts, shop and business relocation, and moves to Mumbai, Pune and Delhi NCR.",
    areas: ["Vijay Nagar", "Palasia", "Bhawarkuan", "Rau", "Sudama Nagar", "Nipania"],
    needs: [
      "Stair-heavy loading in independent houses",
      "Shop and business stock relocation with an inventory",
      "Combined household plus two-wheeler bookings",
    ],
    routes: ["indore-to-mumbai", "delhi-to-ahmedabad", "haridwar-to-indore"],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    region: "Madhya Pradesh",
    intro:
      "Bhopal moves are a mix of colony houses and newer apartment projects spread across a wide city, so travel time inside Bhopal itself matters. SHIFT8 books a realistic loading window for Bhopal jobs instead of promising back-to-back same-day slots.",
    demand:
      "Common Bhopal requirements are household shifts within the city, government transfer relocation, and moves to Delhi NCR, Indore and Mumbai.",
    areas: ["Arera Colony", "Kolar Road", "Ayodhya Bypass", "Hoshangabad Road", "Bairagarh"],
    needs: [
      "Transfer-related moves with documentation for reimbursement",
      "Realistic loading windows across a spread-out city",
      "Packing for long central-India transit",
    ],
    routes: ["haridwar-to-bhopal", "indore-to-mumbai", "delhi-to-mumbai"],
  },
  {
    slug: "patna",
    name: "Patna",
    region: "Bihar",
    intro:
      "Patna relocation often involves multi-storey buildings without service lifts and congested approach roads. SHIFT8 sizes the crew for stair carrying on Patna moves and confirms where the vehicle can legally stand before the loading date.",
    demand:
      "Typical Patna moves are family household shifts, student and job-related relocation to Delhi NCR and Bengaluru, and inbound moves from northern cities.",
    areas: ["Kankarbagh", "Boring Road", "Rajendra Nagar", "Danapur", "Bailey Road", "Patliputra"],
    needs: [
      "Extra crew where buildings have no service lift",
      "Confirmed vehicle standing space on congested roads",
      "Partial-load options for students and single movers",
    ],
    routes: ["haridwar-to-patna", "delhi-to-kolkata", "patna-to-bangalore"],
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    region: "Uttarakhand",
    intro:
      "Haridwar is where SHIFT8 started and where our own crew and vehicles are based, so local surveys here are usually same-day. Haridwar moves also need pilgrimage-season planning, since city routes get restricted during peak yatra weeks.",
    demand:
      "Common Haridwar requirements are inside-city household shifts, SIDCUL employee transfers, and outbound relocation to Delhi NCR and metros further south.",
    areas: ["Jwalapur", "Bhupatwala", "Kankhal", "Bahadrabad", "SIDCUL", "Ranipur", "Shivalik Nagar", "Laksar"],
    needs: [
      "Route planning around pilgrimage-season restrictions",
      "Same-day survey and next-day loading for local moves",
      "Industrial and staff-transfer moves from the SIDCUL belt",
    ],
    routes: ["haridwar-to-delhi", "haridwar-to-dehradun", "haridwar-to-mumbai", "haridwar-to-bangalore", "haridwar-to-noida", "haridwar-to-gurgaon", "haridwar-to-jaipur", "haridwar-to-chandigarh"],
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    region: "Uttarakhand",
    intro:
      "Dehradun moves involve hill approaches on the city's upper roads, where vehicle size and driver experience matter more than in plains cities. SHIFT8 assigns hill-road experienced drivers to Dehradun jobs and uses smaller carriers for hillside addresses.",
    demand:
      "Regular Dehradun requirements are household shifts within Doon Valley, school and college staff relocation, and moves to Delhi NCR and other metros.",
    areas: ["Rajpur Road", "Sahastradhara", "Clement Town", "Vasant Vihar", "GMS Road", "Prem Nagar"],
    needs: [
      "Hill-road experienced drivers and smaller carriers",
      "Careful descent handling for heavy furniture",
      "Short-notice slots for nearby Uttarakhand routes",
    ],
    routes: ["haridwar-to-dehradun", "haridwar-to-delhi", "delhi-to-chandigarh"],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    region: "Uttarakhand",
    intro:
      "Rishikesh addresses range from riverside guesthouses to hillside apartments, many reached by lanes too narrow for a full-size truck. SHIFT8 plans Rishikesh moves with a shuttle-and-transfer approach so goods are not dragged an unreasonable distance by hand.",
    demand:
      "Common Rishikesh moves are guesthouse and apartment shifts, short moves to Haridwar and Dehradun, and outbound relocation to Delhi NCR.",
    areas: ["Tapovan", "Muni Ki Reti", "Shivpuri", "Lakshman Jhula", "Nepali Farm"],
    needs: [
      "Shuttle transfer where lanes are too narrow",
      "Careful packing for wooden and decorative items",
      "Same-day short-hop moves within Uttarakhand",
    ],
    routes: ["haridwar-to-rishikesh", "haridwar-to-delhi", "haridwar-to-dehradun"],
  },
  {
    slug: "roorkee",
    name: "Roorkee",
    region: "Uttarakhand",
    intro:
      "Roorkee moves frequently involve institutional and cantonment housing, where entry approval is needed before a vehicle can come in. SHIFT8 arranges Roorkee campus and cantonment entry ahead of the move date so loading starts on time.",
    demand:
      "Typical Roorkee requirements are campus and cantonment household shifts, student moves, and relocation to Delhi NCR and other metros.",
    areas: ["Civil Lines", "Solani Puram", "IIT Roorkee Campus", "Ganeshpur", "Manglaur Road"],
    needs: [
      "Campus and cantonment entry approval in advance",
      "Partial-load options for students and researchers",
      "Book-heavy loads packed in small, strong cartons",
    ],
    routes: ["haridwar-to-roorkee", "haridwar-to-delhi", "haridwar-to-chandigarh"],
  },
  {
    slug: "rudrapur",
    name: "Rudrapur",
    region: "Uttarakhand",
    intro:
      "Rudrapur sits in an industrial belt, so household moves here are often tied to factory postings and shift timings. SHIFT8 schedules Rudrapur moves around plant shift changes and can coordinate multiple staff relocations together.",
    demand:
      "Common Rudrapur moves are SIDCUL staff household shifts, factory and workshop relocation, and outbound moves to Delhi NCR and Uttarakhand cities.",
    areas: ["SIDCUL", "Awas Vikas", "Kichha Road", "Transport Nagar"],
    needs: [
      "Scheduling around industrial shift timings",
      "Multiple staff relocations coordinated together",
      "Machinery and equipment handled with proper crating",
    ],
    routes: ["haridwar-to-delhi", "haridwar-to-lucknow", "delhi-to-lucknow"],
  },
  {
    slug: "haldwani",
    name: "Haldwani",
    region: "Uttarakhand",
    intro:
      "Haldwani is the gateway for Kumaon moves, and many jobs continue up into the hills from here. SHIFT8 uses Haldwani as a transfer point for hill deliveries, moving goods into a smaller carrier where the final road demands it.",
    demand:
      "Typical Haldwani requirements are household shifts within the city, hill-bound deliveries towards Nainital and beyond, and moves to Delhi NCR.",
    areas: ["Kathgodam", "Rampur Road", "Kaladhungi Road", "Nainital Road", "Mukhani"],
    needs: [
      "Transfer to a smaller carrier for hill deliveries",
      "Weather-aware scheduling in the monsoon",
      "Shop and business stock relocation",
    ],
    routes: ["haridwar-to-delhi", "haridwar-to-lucknow", "delhi-to-lucknow"],
  },
];

// Older thin hyper-local URLs now consolidate into their parent city page.
export const CITY_REDIRECTS: Record<string, string> = {
  jwalapur: "haridwar",
  bhupatwala: "haridwar",
  bahadrabad: "haridwar",
  laksar: "haridwar",
  "sidcul-haridwar": "haridwar",
  kotdwar: "dehradun",
  kashipur: "haldwani",
  mussoorie: "dehradun",
};

/* ------------------------------------------------------------------ */
/* ROUTES — curated intercity pairs                                    */
/* ------------------------------------------------------------------ */

export interface RouteInfo {
  slug: Slug;
  from: string;
  to: string;
  fromSlug: Slug;
  toSlug: Slug;
  km: number;
  hours: string;
  intro: string;
  notes: string[];
}

const R = (
  fromSlug: string,
  from: string,
  toSlug: string,
  to: string,
  km: number,
  hours: string,
  intro: string,
  notes: string[],
): RouteInfo => ({ slug: `${fromSlug}-to-${toSlug}`, from, to, fromSlug, toSlug, km, hours, intro, notes });

export const ROUTES: RouteInfo[] = [
  R("delhi", "Delhi", "mumbai", "Mumbai", 1400, "2–3 days", "One of the busiest household routes in India. The distance is manageable, but the delivery end usually decides the plan: Mumbai buildings need lift measurements, society permission and a parking spot before unloading can begin.", ["Society NOC and shifting hours confirmed at the Mumbai end", "Furniture dismantled if the lift cannot take it", "Dedicated vehicle option so goods are not reloaded en route"]),
  R("delhi", "Delhi", "bangalore", "Bangalore", 2150, "3–4 days", "A long southbound run where packing quality matters more than speed. Goods stay loaded for several days, so cartons are stacked to carry weight and fragile items are cushioned for continuous road vibration.", ["Vibration-safe packing for electronics and glass", "Apartment shifting slot booked at the Bengaluru end", "Status updates through the multi-day transit"]),
  R("delhi", "Delhi", "pune", "Pune", 1450, "2–3 days", "Common for job transfers into Pune's IT corridors. Delivery dates often depend on flat handover, so a short storage buffer at either end is worth planning before booking.", ["Storage buffer if the Pune flat is not ready", "Township entry pass arranged before delivery", "Partial-load option for smaller households"]),
  R("delhi", "Delhi", "hyderabad", "Hyderabad", 1550, "2–3 days", "A steady route with a straightforward highway run. Most of the planning goes into the Hyderabad delivery address, since gated communities and older neighbourhoods need very different vehicle sizes.", ["Access checked before choosing vehicle size", "Gated community approval taken in advance", "Combined household plus vehicle transport available"]),
  R("delhi", "Delhi", "jaipur", "Jaipur", 280, "1 day", "A short, same-day-capable route. Loading in the morning usually means delivery the same evening, provided both addresses allow vehicle access at the planned time.", ["Same-day delivery possible with morning loading", "Shuttle loading for narrow old-city Jaipur lanes", "Popular for partial loads and single-room moves"]),
  R("delhi", "Delhi", "chandigarh", "Chandigarh", 250, "1 day", "A comfortable one-day route covering the whole tricity. Chandigarh, Mohali and Panchkula deliveries are handled in one booking rather than treated as separate jobs.", ["Same-day loading and delivery in most cases", "Tricity delivery covered in a single booking", "Good route for combined household and two-wheeler moves"]),
  R("delhi", "Delhi", "lucknow", "Lucknow", 550, "1–2 days", "A frequently run route for family relocations. Lucknow loads tend to be volume-heavy, so a proper survey before quoting avoids a second trip.", ["Volume survey before quoting the vehicle", "Overnight transit with next-day delivery", "Older wooden furniture dismantled and padded"]),
  R("delhi", "Delhi", "ahmedabad", "Ahmedabad", 950, "1–2 days", "A well-connected route where load volume, not distance, decides the cost. Ahmedabad addresses generally allow good vehicle access, which keeps unloading efficient.", ["Larger vehicle capacity for full-house loads", "Glass and marble items double-protected", "Business and stock relocation supported"]),
  R("delhi", "Delhi", "kolkata", "Kolkata", 1500, "2–3 days", "The delivery end defines this route. Many Kolkata addresses need a smaller shuttle vehicle and stair carrying, so crew size is planned from the building details, not the distance.", ["Shuttle vehicle for narrow Kolkata lanes", "Extra crew where there is no lift", "Monsoon-safe wrapping when relevant"]),
  R("mumbai", "Mumbai", "pune", "Pune", 150, "1 day", "A short route that is almost always completed in a single day. The real work is at both ends: Mumbai lift constraints at pickup and township formalities at delivery.", ["Same-day loading and delivery", "Lift measurement at the Mumbai end", "Frequently booked for 1 BHK and 2 BHK flats"]),
  R("mumbai", "Mumbai", "bangalore", "Bangalore", 980, "2 days", "A steady southbound corridor for job relocations. Both ends are apartment-heavy, so lift slots and society timings are confirmed before the move date at pickup and delivery.", ["Society permissions arranged at both ends", "Dedicated vehicle for door-to-door delivery", "Vehicle transport can be added to the booking"]),
  R("mumbai", "Mumbai", "delhi", "Delhi", 1400, "2–3 days", "The northbound leg of India's busiest household corridor. Pickup planning in Mumbai — lift size, parking, society hours — usually takes longer than the transit itself.", ["Mumbai society NOC and parking arranged first", "Delhi society move-in timing confirmed", "Written transit window given before booking"]),
  R("mumbai", "Mumbai", "ahmedabad", "Ahmedabad", 530, "1–2 days", "A quick, frequently used corridor. Good highway access at both ends means most loads are delivered the next day after loading.", ["Next-day delivery in most cases", "Suited to both partial and full-house loads", "Business stock and office moves supported"]),
  R("mumbai", "Mumbai", "hyderabad", "Hyderabad", 710, "1–2 days", "A practical overnight route. Packing focuses on vibration protection for electronics, since the run is done in one continuous stretch.", ["Overnight transit, next-day delivery", "Vibration-safe electronics packing", "Access-appropriate vehicle at the Hyderabad end"]),
  R("bangalore", "Bangalore", "hyderabad", "Hyderabad", 570, "1 day", "A short inter-metro route often completed within a day. Both cities have strict apartment and community shifting windows, so timing is agreed before loading.", ["Single-day loading and delivery possible", "Shifting windows agreed at both ends", "Common for bachelor and partial loads"]),
  R("bangalore", "Bangalore", "chennai", "Chennai", 350, "1 day", "A comfortable same-day route. Chennai humidity makes wrapping choice important, particularly for wooden furniture and mattresses.", ["Same-day delivery with morning loading", "Moisture-resistant wrapping for Chennai", "Good route for single-item and partial loads"]),
  R("pune", "Pune", "hyderabad", "Hyderabad", 560, "1 day", "A direct route used heavily for IT relocations. Most loads move overnight and are delivered the next morning if delivery access is confirmed.", ["Overnight transit option", "Township and community approvals handled", "Household plus two-wheeler combinations common"]),
  R("pune", "Pune", "bangalore", "Bangalore", 840, "1–2 days", "A steady southbound route for job transfers. Both ends are apartment-dominated, so lift and slot booking are part of the plan.", ["Lift and slot booking at both ends", "Dedicated vehicle for door-to-door service", "Short storage buffer available if dates shift"]),
  R("hyderabad", "Hyderabad", "chennai", "Chennai", 630, "1–2 days", "A regular southern corridor. Rain-season scheduling matters at the Chennai end, so loading dates are planned with the forecast in mind.", ["Rain-aware scheduling for Chennai delivery", "Moisture-resistant packing", "Apartment permissions confirmed in advance"]),
  R("noida", "Noida", "bangalore", "Bangalore", 2150, "3–4 days", "A long-haul route between two high-rise-heavy cities. Gate passes and service-lift bookings at both ends decide how smoothly loading and unloading go.", ["Gate pass and lift slot at both ends", "Packing built for multi-day transit", "Regular status updates during the run"]),
  R("gurgaon", "Gurgaon", "mumbai", "Mumbai", 1420, "2–3 days", "Common for corporate relocations. Condominium security procedures in Gurgaon and lift limitations in Mumbai are both settled before the move date.", ["Facility approval and security clearance in Gurgaon", "Lift measurement and NOC in Mumbai", "Corporate invoicing and documentation available"]),
  R("indore", "Indore", "mumbai", "Mumbai", 590, "1–2 days", "A well-used central India route. Indore pickups are often stair-heavy, so crew size is set from the house layout rather than the load alone.", ["Extra crew for stair-heavy Indore pickups", "Next-day delivery in most cases", "Shop and business stock relocation supported"]),
  R("jaipur", "Jaipur", "mumbai", "Mumbai", 1170, "2 days", "A steady westbound route. Fragile decorative goods are common on this route, so packing is planned with extra cushioning.", ["Extra cushioning for decorative and glass items", "Mumbai society formalities arranged before delivery", "Dedicated vehicle option available"]),
  R("ahmedabad", "Ahmedabad", "bangalore", "Bangalore", 1490, "2–3 days", "A long route where loads are usually large. Careful stacking matters because goods stay in the vehicle for several days.", ["Load-bearing stacking for multi-day transit", "Bengaluru apartment slot booked in advance", "Vehicle transport can be combined"]),
  R("lucknow", "Lucknow", "bangalore", "Bangalore", 1900, "3–4 days", "A long southbound relocation route. Volume surveys at the Lucknow end prevent an undersized vehicle being sent for a full-house load.", ["Volume survey before vehicle allocation", "Packing designed for continuous road vibration", "Status updates through the multi-day run"]),
  R("chandigarh", "Chandigarh", "bangalore", "Bangalore", 2380, "3–4 days", "One of the longest domestic household routes we run. Packing standards and stacking discipline decide the outcome more than the vehicle itself.", ["Reinforced packing for long transit", "Tricity pickup covered in one booking", "Written transit window before booking"]),
  R("kolkata", "Kolkata", "bangalore", "Bangalore", 1870, "3–4 days", "A long eastern-to-southern route. Kolkata pickups often need a shuttle vehicle and stair crew before goods reach the main truck.", ["Shuttle pickup from narrow Kolkata lanes", "Stair-carrying crew where no lift exists", "Multi-day transit packing standards"]),
  R("patna", "Patna", "bangalore", "Bangalore", 2000, "3–4 days", "Used mostly for education and job relocations. Partial loads are common, and shared-vehicle options can reduce cost on this route.", ["Partial-load and shared-vehicle options", "Extra crew for lift-less Patna buildings", "Packing built for a multi-day run"]),

  // Uttarakhand-origin routes (Haridwar operations base)
  R("haridwar", "Haridwar", "delhi", "Delhi", 220, "1 day", "Our most frequently run route. Morning loading in Haridwar usually means the same-evening or next-morning delivery in Delhi, subject to society timings at the delivery end.", ["Same-day or next-morning delivery", "Delhi society move-in window confirmed", "Own crew and vehicles at the Haridwar end"]),
  R("haridwar", "Haridwar", "dehradun", "Dehradun", 55, "Same day", "A short Doon Valley run that is almost always completed in one day, including packing, loading and placement at the new address.", ["Single-day packing, loading and delivery", "Hill-road experienced driver where needed", "Good route for small and partial loads"]),
  R("haridwar", "Haridwar", "rishikesh", "Rishikesh", 25, "Same day", "The shortest route we run regularly. The only real constraint is lane access in Rishikesh, which sometimes needs a smaller shuttle vehicle.", ["Same-day completion", "Shuttle vehicle for narrow Rishikesh lanes", "Suited to single-room and guesthouse moves"]),
  R("haridwar", "Haridwar", "roorkee", "Roorkee", 30, "Same day", "A short local route completed in a single day. Campus and cantonment deliveries need entry approval arranged before the move.", ["Same-day loading and delivery", "Campus and cantonment entry arranged in advance", "Common for student and staff moves"]),
  R("haridwar", "Haridwar", "noida", "Noida", 240, "1 day", "A one-day route into NCR high-rises. Society gate passes and lift slots at the Noida end are arranged before the vehicle leaves Haridwar.", ["Gate pass and service-lift slot pre-arranged", "Same-day or next-morning delivery", "Move completed within society hours"]),
  R("haridwar", "Haridwar", "gurgaon", "Gurgaon", 260, "1 day", "A standard NCR route. Condominium security and lift bookings in Gurgaon are the main scheduling factor.", ["Facility approval and lift booking in Gurgaon", "One-day transit", "Lift and corridor protection during unloading"]),
  R("haridwar", "Haridwar", "chandigarh", "Chandigarh", 240, "1 day", "A single-day route covering the whole tricity. Deliveries to Mohali or Panchkula are included in the same booking.", ["Same-day delivery in most cases", "Tricity delivery in one booking", "Suited to household and two-wheeler combinations"]),
  R("haridwar", "Haridwar", "jaipur", "Jaipur", 470, "1–2 days", "An overnight route with next-day delivery. Old-city Jaipur addresses may need shuttle loading from a nearby standing point.", ["Overnight transit, next-day delivery", "Shuttle delivery for narrow Jaipur lanes", "Extra protection for fragile items"]),
  R("haridwar", "Haridwar", "lucknow", "Lucknow", 540, "1–2 days", "A steady route into UP. Lucknow loads are often volume-heavy, so a survey before quoting avoids vehicle shortfall.", ["Volume survey before quoting", "Overnight transit with next-day delivery", "Heavier wooden furniture dismantled and padded"]),
  R("haridwar", "Haridwar", "mumbai", "Mumbai", 1650, "2–3 days", "A long-haul route where the delivery end takes most of the planning: Mumbai lift dimensions, society NOC and parking are settled before loading.", ["Mumbai society NOC and lift check before delivery", "Dedicated vehicle option for door-to-door transit", "Written transit window before booking"]),
  R("haridwar", "Haridwar", "pune", "Pune", 1560, "2–3 days", "A long route for job relocations. A short storage buffer is often useful when the Pune flat handover date is uncertain.", ["Storage buffer if the Pune flat is delayed", "Township entry pass arranged before delivery", "Packing designed for multi-day transit"]),
  R("haridwar", "Haridwar", "bangalore", "Bangalore", 2100, "3–4 days", "One of our longest routes. Goods stay loaded for days, so stacking and cushioning standards matter more than raw speed.", ["Reinforced packing for a multi-day run", "Bengaluru apartment slot booked in advance", "Status updates through transit"]),
  R("haridwar", "Haridwar", "hyderabad", "Hyderabad", 1650, "2–3 days", "A long southbound route. Vehicle size for the Hyderabad delivery is decided from the address access, not from the load alone.", ["Access-based vehicle selection at delivery", "Gated community approvals arranged", "Vibration-safe electronics packing"]),
  R("haridwar", "Haridwar", "chennai", "Chennai", 2350, "4–5 days", "Our longest regularly run route. Humidity protection at the Chennai end is built into the packing plan.", ["Moisture-resistant wrapping for Chennai", "Reinforced stacking for very long transit", "Apartment permissions confirmed before delivery"]),
  R("haridwar", "Haridwar", "kolkata", "Kolkata", 1550, "2–3 days", "A long eastern route. Kolkata's narrow lanes and lift-less buildings mean a shuttle vehicle and larger crew at delivery.", ["Shuttle delivery for narrow lanes", "Extra crew where there is no lift", "Monsoon-safe wrapping when relevant"]),
  R("haridwar", "Haridwar", "ahmedabad", "Ahmedabad", 1200, "2 days", "A steady westbound route. Loads are often large, so vehicle capacity is confirmed after a proper survey.", ["Capacity confirmed after survey", "Glass and marble items double-protected", "Business stock relocation supported"]),
  R("haridwar", "Haridwar", "indore", "Indore", 900, "1–2 days", "A central India route with good highway access. Indore deliveries in independent houses often need extra crew for stairs.", ["Extra crew for stair-heavy Indore addresses", "Next-day or second-day delivery", "Household plus two-wheeler combinations"]),
  R("haridwar", "Haridwar", "bhopal", "Bhopal", 850, "1–2 days", "A straightforward highway route. Bhopal's spread-out layout means a realistic delivery window rather than an exact hour.", ["Realistic delivery window across a spread-out city", "Packing for long central-India transit", "Transfer documentation on request"]),
  R("haridwar", "Haridwar", "patna", "Patna", 1050, "2 days", "A regular eastern route. Patna buildings frequently lack service lifts, so crew size is planned for stair carrying.", ["Extra crew for lift-less buildings", "Confirmed vehicle standing space at delivery", "Partial-load options available"]),
];

// Legacy /haridwar-to/<dest> URLs map onto the curated /routes/<pair> pages.
export const HARIDWAR_ROUTE_MAP: Record<string, string> = ROUTES.filter(
  (r) => r.fromSlug === "haridwar",
).reduce((acc, r) => ({ ...acc, [r.toSlug]: r.slug }), {} as Record<string, string>);

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export interface FAQ { q: string; a: string; }

export const HOME_FAQS: FAQ[] = [
  { q: "Which cities does SHIFT8 cover?", a: "SHIFT8 arranges home shifting, office shifting and packing and moving across India, including Delhi NCR, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Indore and Uttarakhand cities such as Haridwar, Dehradun and Roorkee. Our own crew and vehicles are based in Uttarakhand; elsewhere we work with a vetted partner network under one point of contact." },
  { q: "How is a moving quote calculated?", a: "By load volume, distance between the two cities, floor and lift access at both ends, packing depth, and any add-ons such as vehicle transport or storage. We survey — on site or over video — before giving a written, itemised quote." },
  { q: "Do you handle intercity moves as well as local moves?", a: "Yes. Both are core services: shifting within a city, and long-distance relocation between Indian cities with a single team responsible from pickup to delivery." },
  { q: "Can I get a quote without an on-site visit?", a: "Yes. A video survey works well for most households. We look at each room, list the goods, and send a written quote based on what we have actually seen." },
  { q: "Is transit insurance available?", a: "Transit insurance can be arranged on request. We recommend it for long-distance moves and for households with high-value electronics or furniture." },
  { q: "What packing material do you use?", a: "Multi-ply corrugated cartons, bubble wrap, foam sheets, stretch film and tape, with double-boxing for fragile items and wardrobe cartons for hanging clothes." },
  { q: "Can you move a car or bike along with household goods?", a: "Yes. Vehicles travel on a carrier and can be scheduled to arrive close to your household delivery date." },
  { q: "What if my new home is not ready on the delivery date?", a: "Short-term storage can be arranged, with a photographed inventory of everything stored and delivery to your address once you are ready." },
  { q: "How early should I book a move?", a: "For month-end and weekend dates, a week's notice is advisable. Mid-week local moves can often be arranged at shorter notice. Long-distance moves are easier to plan with 7 to 10 days." },
  { q: "How do I request a moving quote?", a: "Use the enquiry form with your pickup city, destination city and moving date, or call and WhatsApp us on +91 8439973125. Sharing photos or a video of your rooms speeds up the quote." },
  { q: "Do you provide an invoice for company reimbursement?", a: "Yes. Household and commercial moves can be billed with a proper invoice and supporting documents for employer reimbursement or company accounts." },
  { q: "What happens if something is damaged?", a: "For insured moves, claims are settled through the transit insurance policy. For non-insured moves, damage caused by our crew's handling is compensated on a fair-value basis after verification." },
];

export function cityFaqs(city: CityInfo): FAQ[] {
  return [
    {
      q: `Does SHIFT8 provide packers and movers services in ${city.name}?`,
      a: `Yes. SHIFT8 arranges home shifting, office shifting, packing and moving, and vehicle transport for ${city.name}, covering areas such as ${city.areas.slice(0, 4).join(", ")}, along with long-distance moves to and from other Indian cities.`,
    },
    {
      q: `What does a move in ${city.name} usually involve?`,
      a: `${city.demand} On top of the packing itself, ${city.name} moves typically need ${city.needs[0].toLowerCase()}.`,
    },
    {
      q: `How is the price for a ${city.name} move decided?`,
      a: `After a survey. Volume, floor and lift access, packing depth and distance decide the figure, so we give a written itemised quote instead of a fixed price over the phone.`,
    },
    {
      q: `Can I book a ${city.name} move at short notice?`,
      a: `Often yes for local moves, depending on crew availability on your date. Month-end and weekend dates fill up first, so it is worth sending your enquiry as soon as your date is fixed.`,
    },
  ];
}

export function routeFaqs(route: RouteInfo): FAQ[] {
  return [
    {
      q: `How long does a ${route.from} to ${route.to} move take?`,
      a: `The transit itself is usually ${route.hours} for roughly ${route.km} km. Packing and loading day is separate, and the exact delivery window is confirmed in writing before booking.`,
    },
    {
      q: `What is included in a ${route.from} to ${route.to} relocation?`,
      a: `Packing with proper material, furniture dismantling, loading, transport, unloading and reassembly at the destination address. Vehicle transport, storage and transit insurance can be added.`,
    },
    {
      q: `Do you deliver door to door on this route?`,
      a: `Yes. Pickup is from your ${route.from} address and delivery is to your ${route.to} address. Where building access does not allow a large vehicle, a smaller shuttle vehicle is used for the last stretch.`,
    },
  ];
}

/* ------------------------------------------------------------------ */
/* BLOG                                                                */
/* ------------------------------------------------------------------ */

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
    slug: "how-to-choose-packers-and-movers-in-india",
    title: "How to Choose Packers and Movers in India: 8 Questions That Matter",
    description: "Practical checks before you book any packers and movers company in India — surveys, quotes, GST, insurance and damage policy.",
    date: "2026-01-29",
    minutes: 7,
    body: [
      "Every moving company sounds professional on a phone call. These eight questions separate a company that will actually turn up with the right vehicle and crew from one that will renegotiate on move day.",
      "1. Will you survey before quoting? A serious mover asks for an on-site or video survey. Anyone who commits to a final price without seeing your goods is guessing, and the gap will appear as extra charges on move day.",
      "2. Is the quote itemised? Packing material, labour, transport, loading and unloading, and any storage or insurance should be listed separately. A single lump-sum figure hides what has been left out.",
      "3. What is your GST number, and will I get an invoice? A registered company issues a proper invoice — which also matters if your employer reimburses relocation costs.",
      "4. Who exactly will handle the destination end? On intercity moves this is the question that decides your experience. Ask whether the same company is responsible at both ends and who your single point of contact is.",
      "5. What material will be used? Multi-ply cartons, bubble wrap, foam sheets and stretch film are the baseline. Ask specifically how fragile items will be packed — double-boxing is the expected answer.",
      "6. What insurance is available, and what does it cost? Transit insurance should be optional, clearly priced, and based on a declared value. Under-declaring value to save a little means claims settle low.",
      "7. What is the damage policy if I don't take insurance? A clear answer — a defined compensation basis after verification — is a good sign. A vague one is not.",
      "8. What is the written transit window? Long-distance moves take days, not hours. A company that gives you a realistic window in writing is more trustworthy than one promising an exact delivery hour.",
      "If a company answers all eight without hesitation, you are dealing with an organised operation. If it dodges the survey and the invoice questions, keep looking.",
    ],
  },
  {
    slug: "home-shifting-cost-in-india",
    title: "What Decides Your Home Shifting Cost in India",
    description: "The real factors behind a home shifting quote in India — volume, distance, floors, packing depth and add-ons — and how to compare quotes fairly.",
    date: "2026-02-05",
    minutes: 6,
    body: [
      "There is no single price for shifting a 2 BHK in India, and any company quoting one before seeing your goods is not quoting — it is bidding for a phone call. Here is what actually drives the number.",
      "Volume, not weight. Moving vehicles are filled by space. Fifty light cartons can cost more than a few heavy items, because they occupy the vehicle. This is why the survey counts rooms and items rather than asking for a weight.",
      "Distance and route type. A short intercity run may finish in a day, while a cross-country move keeps a vehicle and crew committed for several days. Long routes also need stronger packing, because goods stay loaded and vibrate for longer.",
      "Floor and access at both ends. A ground-floor pickup with a service lift at delivery is a very different job from a third-floor walk-up at both ends. Lift dimensions matter too: if a wardrobe cannot enter the lift, it has to be dismantled or carried.",
      "Packing depth. Full professional packing costs more than packing only fragile items while you handle clothes and books yourself. Both are valid choices — just make sure the quote states which one you are buying.",
      "Vehicle sharing. A dedicated vehicle goes directly to your destination. A shared load costs less but takes longer and involves handling at transfer points. Neither is wrong; the price difference should be explained.",
      "Add-ons. Car or bike transport, storage between dates, unpacking service and transit insurance each change the figure. Ask for them as separate lines so you can decide individually.",
      "How to compare quotes fairly: put them side by side and check volume assumed, vehicle type, packing depth, insurance, and what is explicitly excluded. The cheapest quote is often the one that assumed the smallest load.",
      "Send your pickup city, destination city, moving date and a short video of each room, and you will get a written itemised quote you can actually compare.",
    ],
  },
  {
    slug: "intercity-moving-guide-india",
    title: "Intercity Moving Guide: Shifting Between Indian Cities",
    description: "How to plan a city-to-city move in India — timelines, transit windows, documentation, vehicle options and what to do at each end.",
    date: "2026-02-12",
    minutes: 7,
    body: [
      "An intercity move is not a longer local move. Goods stay loaded for days, two sets of building rules apply, and your own travel dates rarely line up perfectly with the vehicle. Planning for that is most of the job.",
      "Start with the two dates that matter: the last day you have access to the current home, and the first day you have access to the new one. If there is a gap, plan storage now rather than improvising later.",
      "Get the transit window in writing. Short routes are often next-day. Routes of 1,500 km and above are typically two to three days, and the longest domestic routes take three to five. Anyone promising an exact hour on a multi-day route is guessing.",
      "Decide dedicated or shared vehicle. A dedicated vehicle goes point to point and is faster and safer for fragile loads. A shared load is cheaper but involves transfer handling and a wider delivery window.",
      "Sort out building permissions at both ends before the move date. Many societies allow shifting only in fixed hours, require written approval, and need a service lift booked in advance. This is the single most common cause of delay we see.",
      "Pack for the road, not the room. Long transit means continuous vibration. Cartons should be stacked so lower ones can carry weight, fragile goods double-boxed, and electronics cushioned rather than just wrapped.",
      "Keep documents and valuables with you. Original property papers, jewellery, cash, medicines and laptops travel with you, never in the vehicle. Take photos of electronics before packing.",
      "Plan your vehicles. A car or bike can move on a carrier alongside your household goods; ask for the RC copy requirement in advance so the pickup is not delayed.",
      "At delivery, verify against the inventory list before signing, and inspect fragile items in front of the crew. Raising an issue on the spot is far simpler than raising it a week later.",
      "Do these seven things and an intercity move becomes routine logistics instead of a stressful week.",
    ],
  },
  {
    slug: "house-shifting-checklist",
    title: "House Shifting Checklist: A Week-by-Week Plan",
    description: "A practical week-by-week house shifting checklist for Indian households — what to do two weeks, one week, and one day before moving.",
    date: "2026-01-22",
    minutes: 7,
    body: [
      "A house move has around forty small tasks. Missing any of them turns move day into a scramble. This checklist is ordered by when each task should happen.",
      "Two weeks before: get two or three written, itemised quotations and choose your mover. Confirm the date. Inform your landlord and society office, and ask for the shifting-hours rule and lift booking process in writing.",
      "One week before: declutter. Anything unused for a year should be donated, sold or discarded — every extra carton costs money and vehicle space. Start updating your address for banks, insurance, Aadhaar and delivery apps.",
      "Four days before: plan your building access at both ends. Service lift slot, gate entry, and where the vehicle can stand. If a large vehicle cannot reach the door, agree on a shuttle arrangement now.",
      "Three days before: pack a personal bag — three days of clothes, chargers, medicines, original documents and jewellery. This bag travels with you, not in the vehicle.",
      "Two days before: photograph your electronics and any furniture with existing marks. If a scratch is disputed later, photos settle it.",
      "One day before: defrost the fridge, empty the water purifier, disconnect the gas cylinder, and confirm arrival time with your mover. Label anything you packed yourself with the room name and whether it is fragile.",
      "Move day: be present through loading, walk through every room and cupboard before the vehicle leaves, and sign the inventory sheet only after checking it.",
      "At the new home: open up before the vehicle arrives, direct cartons to their labelled rooms, unpack essentials first, and inspect fragile items with the crew still present.",
      "This will not remove every hiccup, but it removes the ones that ruin move day.",
    ],
  },
  {
    slug: "how-to-pack-household-items-safely",
    title: "How to Pack Household Items Safely: 10 Mistakes to Avoid",
    description: "The most common packing mistakes Indian households make before a move, and the simple fix for each one.",
    date: "2026-02-19",
    minutes: 6,
    body: [
      "Most moving damage is not caused by the vehicle. It is caused by weak packing. Here are the ten mistakes we see most often, with the fix for each.",
      "1. Overloading large cartons. Anything over about 20 kg risks the bottom giving way. Books go in small cartons, clothes and linen in large ones.",
      "2. Skipping wrap on kitchenware. One unwrapped ceramic bowl can break and take the rest of the carton with it. Wrap individually, then fill the gaps.",
      "3. Not labelling. Unlabelled cartons end up in the wrong room, and often stay unopened for weeks. Write the room name and mark fragile items clearly.",
      "4. Packing liquids next to paper. If a bottle leaks, your books and documents are gone. Liquids go in a sealed plastic tub of their own.",
      "5. Forgetting to defrost the fridge. Water pools inside during transit and can reach the compressor. Defrost and dry it a day ahead.",
      "6. Losing furniture fittings. Screws and brackets go in a labelled zip bag taped to the item itself, not into one shared box.",
      "7. Not photographing electronics. Photos before packing are your only proof if a screen is scratched at delivery.",
      "8. Putting valuables in the vehicle. Jewellery, cash and original documents always travel with you.",
      "9. Under-declaring insured value. If declared value is half the real value, a claim settles at half the loss.",
      "10. Economising on material. Saving a little on cartons and wrap to risk a television is a poor trade.",
      "If a professional crew is packing for you, all of this is handled by default. If you are self-packing part of the load, avoiding these ten will make a visible difference.",
    ],
  },
  {
    slug: "documents-required-for-moving-in-india",
    title: "Documents You Need When Moving Home in India",
    description: "A clear list of documents and formalities to arrange when relocating within India — for the move itself, your vehicles, and your new address.",
    date: "2026-02-26",
    minutes: 5,
    body: [
      "A domestic move within India needs less paperwork than people expect, but the few documents that matter tend to be needed at short notice. Here is the practical list.",
      "For the move itself: your written quotation, the inventory list, and the invoice. If your employer reimburses relocation, check in advance whether they need a GST invoice in the company's name.",
      "For building access: many societies require a written move-in or move-out permission, a copy of the rent agreement or possession letter, and ID copies for the crew. Ask your society office a week ahead.",
      "For transporting a car or bike: a copy of the registration certificate and the owner's photo ID. If the person handing over the vehicle is not the registered owner, an authorisation note is needed.",
      "For insurance: a declared value list for the goods you want covered. Be realistic — the declared value is what a claim is settled against.",
      "For your new address: update Aadhaar, bank accounts, insurance policies, gas connection, and vehicle registration address as applicable. Utility connections at the new home are usually faster to arrange before you move in than after.",
      "Keep all of this in one folder that travels with you — never in a carton. It is the folder you will need on the day the vehicle arrives.",
    ],
  },
];

export const NAV_SERVICES = SERVICES.slice(0, 6);
