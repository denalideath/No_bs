/**
 * Site-wide settings. Change the brand name, contact details and CTA wording here.
 */
export const site = {
  name: "NO BS",
  descriptor: "CRM for service businesses",
  description:
    "Simple, affordable customer management for service businesses—with your data moved over, your existing tools connected, and your team trained. Get up and running in as little as one week.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // 555-01xx numbers are reserved for fiction. Replace with the real support line.
  phone: "(555) 010-0142",
  supportHours: "Mon–Fri, 7am–6pm",
  supportLine: "All the CRM you need. None of the setup headaches.",
  copyrightYear: 2026,
} as const;

export const ctas = {
  primary: { label: "See Your CRM Come to Life", href: "/book-a-demo" },
  secondary: { label: "See How It Works", href: "/how-it-works" },
} as const;

export const mainNav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Switching", href: "/switching" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Getting started",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Switching & migration", href: "/switching" },
      { label: "Book a demo", href: "/book-a-demo" },
    ],
  },
  {
    heading: "Who it's for",
    links: [
      { label: "Roofing", href: "/industries/roofing" },
      { label: "Plumbing", href: "/industries/plumbing" },
      { label: "HVAC", href: "/industries/hvac" },
      { label: "Cleaning", href: "/industries/cleaning" },
      { label: "Customer stories", href: "/customer-stories" },
    ],
  },
] as const;

/**
 * The three conversion paths from the strategy. Each one leads to the same
 * short discovery conversation, but the form and follow-up are tailored.
 */
export const conversionPaths = [
  {
    id: "new",
    audience: "New to CRM",
    situation: "We run on spreadsheets, paper, texts and memory.",
    offer: "See your first CRM built around your business.",
    cta: "Show me my CRM",
  },
  {
    id: "switching",
    audience: "Unhappy with your current CRM",
    situation: "We have a CRM. It just isn't working for us.",
    offer: "Get a CRM switching assessment.",
    cta: "Get my assessment",
  },
  {
    id: "comparing",
    audience: "Comparing options",
    situation: "We're weighing up a few CRMs right now.",
    offer: "See what your first week looks like.",
    cta: "Show me week one",
  },
] as const;

export type ConversionPathId = (typeof conversionPaths)[number]["id"];

export function isConversionPathId(value: unknown): value is ConversionPathId {
  return conversionPaths.some((p) => p.id === value);
}
