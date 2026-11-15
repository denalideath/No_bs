import type { PipelineColumn } from "@/components/product/mocks";

/**
 * Industry pages. Add a new trade by adding an entry here; the page,
 * sitemap and footer pick it up automatically.
 */
export type Industry = {
  slug: string;
  name: string;
  trade: string; // "roofers", "plumbers"…
  business: string; // sample business name shown in the product preview
  card: string;
  headline: string;
  intro: string;
  pains: { title: string; body: string }[];
  pipeline: PipelineColumn[];
  setup: string[];
  commonSources: string[];
};

export const industries: Industry[] = [
  {
    slug: "roofing",
    name: "Roofing",
    trade: "roofers",
    business: "Whitfield Roofing",
    card: "Keep storm-season leads, inspections and insurance estimates moving.",
    headline: "A CRM for roofers that keeps every estimate moving.",
    intro:
      "Storm season brings fifty calls in a week. Insurance jobs take weeks to close. Keep every lead, inspection and estimate in one place, and know exactly who to call next.",
    pains: [
      {
        title: "Storm-season calls go unanswered",
        body: "When the phones light up, some callers never hear back, and they hire whoever does call.",
      },
      {
        title: "Estimates stall on insurance",
        body: "Quotes sit waiting on adjusters, and nobody's tracking which ones need a nudge.",
      },
      {
        title: "Photos live on three phones",
        body: "Inspection photos and measurements are scattered across the crew's camera rolls.",
      },
    ],
    pipeline: [
      {
        name: "New lead",
        cards: [
          { title: "Marcus Lee", sub: "Storm damage", flag: { tone: "sky", label: "2h ago" } },
          { title: "Hannah Brooks", sub: "Missing shingles" },
        ],
      },
      {
        name: "Inspection booked",
        cards: [{ title: "Patel residence", sub: "Thu 9:00am", flag: { tone: "amber", label: "Thu" } }],
      },
      {
        name: "Estimate sent",
        cards: [
          { title: "1428 Oak St", sub: "Full re-roof", value: "$14,800", flag: { tone: "brand", label: "8 days" } },
          { title: "Gomez family", sub: "Skylight + flashing", value: "$3,100" },
        ],
      },
      {
        name: "Insurance review",
        cards: [{ title: "Cedar Grove Church", sub: "Claim #4471", value: "$38,500" }],
      },
      {
        name: "Signed",
        cards: [{ title: "Elm Court HOA", sub: "Gutters, 6 units", value: "$9,200", flag: { tone: "pine", label: "Won" } }],
      },
    ],
    setup: [
      "Insurance fields on every job: carrier, claim number, adjuster",
      "Inspection photos stored on the customer, not on someone's phone",
      "A nudge when any estimate is more than 7 days old",
      "Lead sources tagged: storm canvass, referral, website, door knocking",
    ],
    commonSources: ["Spreadsheets", "Paper estimate pads", "Roofing-specific CRMs", "General CRMs"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    trade: "plumbers",
    business: "Brightwater Plumbing",
    card: "Separate emergency calls from quoted jobs, and remember every customer.",
    headline: "A CRM for plumbers that remembers every customer, so you don't have to.",
    intro:
      "Emergency calls, quoted jobs and repeat customers all need different handling. Keep them straight, follow up on every quote, and know a customer's history before you knock on the door.",
    pains: [
      {
        title: "Emergencies bury the quotes",
        body: "A burst pipe takes the afternoon, and the water heater quote you meant to chase goes cold.",
      },
      {
        title: "No history at the door",
        body: "Your tech arrives without knowing what was done last time, or what was recommended.",
      },
      {
        title: "Repeat work slips away",
        body: "Nobody reminds the customer whose water heater is twelve years old. A competitor does.",
      },
    ],
    pipeline: [
      {
        name: "New call",
        cards: [
          { title: "R. Alvarez", sub: "No hot water", flag: { tone: "brand", label: "Urgent" } },
          { title: "Sunset Bakery", sub: "Slow drains" },
        ],
      },
      {
        name: "Quote sent",
        cards: [
          { title: "Kim residence", sub: "Water heater swap", value: "$2,450", flag: { tone: "amber", label: "5 days" } },
          { title: "14 Birch Ln", sub: "Repipe, upstairs bath", value: "$6,900" },
        ],
      },
      {
        name: "Approved",
        cards: [{ title: "Ortiz family", sub: "Sump pump", value: "$1,280" }],
      },
      {
        name: "Done",
        cards: [{ title: "Lakeside Dental", sub: "Backflow test", value: "$340", flag: { tone: "pine", label: "Paid" } }],
      },
      {
        name: "Follow-up",
        cards: [{ title: "Kowalski home", sub: "Ask for a review", flag: { tone: "sky", label: "Today" } }],
      },
    ],
    setup: [
      "Separate pipelines for emergency calls and quoted projects",
      "Property details: water heater age, pipe type, shut-off location",
      "Reminders for water heater replacements and annual checks",
      "A follow-up task to ask for a review after every completed job",
    ],
    commonSources: ["Spreadsheets", "Your phone's contacts", "Invoicing software exports", "General CRMs"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    trade: "HVAC companies",
    business: "Northpoint Heating & Air",
    card: "Turn one-time repairs into maintenance customers who come back every year.",
    headline: "A CRM for HVAC companies that turns one-time repairs into yearly customers.",
    intro:
      "The repair pays today. The maintenance plan and the replacement pay for years. Track equipment, send tune-up reminders on time, and follow up on every replacement quote.",
    pains: [
      {
        title: "Tune-up reminders go out late, or never",
        body: "Spring and fall come around, and the reminder list is a spreadsheet nobody opened.",
      },
      {
        title: "Equipment details get lost",
        body: "Model numbers, install dates and filter sizes live on paper in the van.",
      },
      {
        title: "Replacement quotes go quiet",
        body: "A $9,000 system quote deserves more than one follow-up. It rarely gets one.",
      },
    ],
    pipeline: [
      {
        name: "New lead",
        cards: [{ title: "D. Fischer", sub: "AC not cooling", flag: { tone: "brand", label: "Urgent" } }],
      },
      {
        name: "Site visit",
        cards: [{ title: "Morales home", sub: "Furnace, 18 yrs old", flag: { tone: "amber", label: "Fri" } }],
      },
      {
        name: "Quote sent",
        cards: [
          { title: "22 Willow Way", sub: "Heat pump install", value: "$11,400", flag: { tone: "brand", label: "9 days" } },
          { title: "Greenfield Office", sub: "Rooftop unit", value: "$18,750" },
        ],
      },
      {
        name: "Installed",
        cards: [{ title: "Chen residence", sub: "Mini-split, 3 zones", value: "$7,900", flag: { tone: "pine", label: "Won" } }],
      },
      {
        name: "Maintenance plan",
        cards: [{ title: "48 active plans", sub: "12 due for spring tune-up", flag: { tone: "sky", label: "April" } }],
      },
    ],
    setup: [
      "Equipment on every customer: model, serial, install date, filter size",
      "Automatic spring and fall tune-up reminders",
      "Maintenance plan renewals tracked, with a heads-up before they lapse",
      "Replacement quote follow-ups at 3, 7 and 14 days",
    ],
    commonSources: ["Spreadsheets", "Service-agreement lists", "Field-service software exports", "General CRMs"],
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    trade: "cleaning businesses",
    business: "Fresh Start Cleaning Co.",
    card: "Win more walk-through quotes, and keep recurring clients happy.",
    headline: "A CRM for cleaning businesses that keeps recurring clients happy and new quotes moving.",
    intro:
      "Your best clients book every week. Your growth comes from walk-throughs that turn into contracts. Keep client preferences in one place and follow up on every quote you give.",
    pains: [
      {
        title: "Walk-through quotes go cold",
        body: "You spend an hour on site, send a price, and never hear back, because nobody followed up.",
      },
      {
        title: "Client details are scattered",
        body: "Access notes, pets, preferences and special requests live in texts between you and one cleaner.",
      },
      {
        title: "Clients drift away quietly",
        body: "A regular cancels a couple of visits, then disappears. Nobody noticed in time to ask why.",
      },
    ],
    pipeline: [
      {
        name: "New inquiry",
        cards: [
          { title: "Ashford Law Office", sub: "Nightly office clean", flag: { tone: "sky", label: "New" } },
          { title: "M. Robinson", sub: "Move-out clean" },
        ],
      },
      {
        name: "Walk-through",
        cards: [{ title: "Pine St Dental", sub: "Wed 4:30pm", flag: { tone: "amber", label: "Wed" } }],
      },
      {
        name: "Quote sent",
        cards: [
          { title: "Harbor View Condos", sub: "Common areas, weekly", value: "$1,850/mo", flag: { tone: "brand", label: "6 days" } },
          { title: "J. Okafor", sub: "Biweekly home clean", value: "$340/mo" },
        ],
      },
      {
        name: "Trial clean",
        cards: [{ title: "Greene family", sub: "Deep clean Sat" }],
      },
      {
        name: "Recurring client",
        cards: [{ title: "Lopez residence", sub: "Weekly · Tuesdays", value: "$560/mo", flag: { tone: "pine", label: "Active" } }],
      },
    ],
    setup: [
      "Recurring client details: frequency, access notes, pets, preferences",
      "Separate pipelines for residential and commercial work",
      "Follow-ups 2 and 7 days after every walk-through quote",
      "A check-in reminder when a regular client skips two visits",
    ],
    commonSources: ["Spreadsheets", "Booking app exports", "Your phone's contacts", "General CRMs"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const otherTrades = [
  "Landscaping",
  "Electrical",
  "Pest control",
  "Painting",
  "Garage doors",
  "Pool service",
  "Handyman",
  "Restoration",
];
