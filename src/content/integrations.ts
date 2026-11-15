/**
 * Integrations list.
 *
 * VERIFY BEFORE LAUNCH: this is a draft. The strategy requires publishing a
 * clear list of what is and isn't supported, so keep it accurate and update
 * `lastReviewed` whenever it changes.
 */
export type IntegrationStatus = "supported" | "in-progress" | "not-yet";

export type Integration = {
  name: string;
  category: string;
  status: IntegrationStatus;
  what: string;
};

export const lastReviewed = "November 2026";

export const statusMeta: Record<
  IntegrationStatus,
  { label: string; heading: string; description: string }
> = {
  supported: {
    label: "Supported",
    heading: "Supported today",
    description: "We connect these for you during launch, test them, and support them after.",
  },
  "in-progress": {
    label: "In progress",
    heading: "On the way",
    description:
      "Being built now. We'll tell you a realistic date on your call, and won't count on it in your launch plan.",
  },
  "not-yet": {
    label: "Not yet",
    heading: "Not supported yet",
    description:
      "We can't connect these today. If one is essential to you, we'd rather say so now than after you sign.",
  },
};

export const integrations: Integration[] = [
  // Supported
  {
    name: "Gmail & Google Calendar",
    category: "Email & calendar",
    status: "supported",
    what: "Emails with customers show up on their record. Appointments sync both ways.",
  },
  {
    name: "Outlook & Microsoft 365",
    category: "Email & calendar",
    status: "supported",
    what: "Same as Gmail: customer emails logged automatically, calendar kept in sync.",
  },
  {
    name: "QuickBooks Online",
    category: "Accounting",
    status: "supported",
    what: "Customers stay matched. Won jobs can create a draft invoice.",
  },
  {
    name: "Website contact forms",
    category: "Lead capture",
    status: "supported",
    what: "New form submissions arrive as leads, with where they came from.",
  },
  {
    name: "Google Sheets & Excel",
    category: "Import & export",
    status: "supported",
    what: "Bring data in during setup, and export everything whenever you like.",
  },
  {
    name: "Zapier",
    category: "Automation",
    status: "supported",
    what: "Connect to thousands of other apps for simple one-way updates.",
  },
  // In progress
  {
    name: "Xero",
    category: "Accounting",
    status: "in-progress",
    what: "Customer matching and draft invoices, like QuickBooks Online.",
  },
  {
    name: "Stripe & Square",
    category: "Payments",
    status: "in-progress",
    what: "See paid and unpaid invoices on the customer record.",
  },
  {
    name: "Facebook Lead Ads",
    category: "Lead capture",
    status: "in-progress",
    what: "Leads from Facebook and Instagram ads arrive straight in your inbox.",
  },
  {
    name: "Mailchimp",
    category: "Marketing",
    status: "in-progress",
    what: "Keep your mailing list in step with your customer list.",
  },
  // Not yet
  {
    name: "QuickBooks Desktop",
    category: "Accounting",
    status: "not-yet",
    what: "No direct connection. We can import a one-time export during setup.",
  },
  {
    name: "Phone systems & call tracking",
    category: "Phone",
    status: "not-yet",
    what: "Calls aren't logged automatically yet. Your team logs them in two taps.",
  },
  {
    name: "Field-service dispatch tools",
    category: "Scheduling",
    status: "not-yet",
    what: "No two-way sync with dispatch or routing software yet.",
  },
];
