/**
 * Pricing.
 *
 * VERIFY BEFORE LAUNCH: every number here is a placeholder. The strategy asks
 * us to test whether pricing covers real onboarding and support costs first.
 */
export type Plan = {
  id: string;
  name: string;
  for: string;
  monthly: string;
  monthlyNote: string;
  setup: string;
  setupNote: string;
  users: string;
  highlight?: boolean;
  includes: string[];
  launch: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    for: "Owner-operators and small crews",
    monthly: "$49",
    monthlyNote: "per month, for the whole business",
    setup: "$299",
    setupNote: "one-time launch package",
    users: "Up to 3 users",
    includes: [
      "Leads, customers, quotes and follow-ups",
      "One pipeline, set up in your words",
      "Email and calendar connected",
      "Works on your phone and computer",
      "Email support from people, not bots",
    ],
    launch: [
      "A named launch lead",
      "Move up to 2,500 records from one source",
      "Connect up to 2 supported tools",
      "One live training session",
      "14 days of launch check-ins",
    ],
    cta: "Start with Starter",
  },
  {
    id: "team",
    name: "Team",
    for: "Growing crews with an office",
    monthly: "$129",
    monthlyNote: "per month, for the whole business",
    setup: "$599",
    setupNote: "one-time launch package",
    users: "Up to 10 users",
    highlight: true,
    includes: [
      "Everything in Starter",
      "Multiple pipelines (e.g. repairs and replacements)",
      "Custom fields and automatic reminders",
      "All supported integrations",
      "Phone support, same-day call-backs",
    ],
    launch: [
      "A named launch lead",
      "Move up to 10,000 records from one source",
      "Connect up to 5 supported tools",
      "Two live training sessions (owner + team)",
      "30 days of launch check-ins",
    ],
    cta: "Start with Team",
  },
  {
    id: "growing",
    name: "Multi-crew",
    for: "Larger teams or more complex moves",
    monthly: "Let's talk",
    monthlyNote: "priced to your team size",
    setup: "Quoted",
    setupNote: "fixed price, agreed up front",
    users: "11+ users",
    includes: [
      "Everything in Team",
      "Several locations or divisions",
      "Moves from more than one old system",
      "Priority support line",
    ],
    launch: [
      "A named launch lead",
      "A written, dated launch plan before you sign",
      "Training for each crew or location",
      "60 days of launch check-ins",
    ],
    cta: "Talk to us",
  },
];

export const setupNotIncluded = [
  {
    title: "Moving data from a second or third system",
    detail: "Quoted as a fixed price before you sign. No surprise invoices.",
  },
  {
    title: "Heavy data cleanup",
    detail:
      "We remove duplicates and fix formatting as standard. Rebuilding years of messy records by hand is quoted separately.",
  },
  {
    title: "Tools that aren't on our supported list",
    detail:
      "We'll tell you on the first call whether there's a workaround (often via Zapier) or not.",
  },
  {
    title: "On-site training",
    detail: "All training is live over video. In-person visits can be arranged at cost.",
  },
];

export const pricingPromises = [
  "Month-to-month. No annual contract required.",
  "Export all of your data, any time, in plain spreadsheets.",
  "The launch package price is fixed before you start.",
];
