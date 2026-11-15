/**
 * The seven-day launch plan. Used on the homepage (short form) and on the
 * How it works page (full form).
 *
 * VERIFY BEFORE LAUNCH: timings and owner hours are working assumptions until
 * pilots confirm them (see "What we need to prove" in the strategy).
 */
export type LaunchStep = {
  id: string;
  day: string;
  title: string;
  summary: string;
  weDo: string[];
  youDo: string[];
  yourTime: string;
};

export const launchSteps: LaunchStep[] = [
  {
    id: "discovery",
    day: "Day 1",
    title: "Discovery",
    summary:
      "A one-hour call about how you win and run jobs. We map your stages, your team and the tools you use.",
    weDo: [
      "Walk through how a lead becomes a paying job in your business",
      "List the tools you want connected and the data you want moved",
      "Agree a written launch plan, with dates, before anything is built",
    ],
    youDo: ["Join the call", "Share a sample of your current spreadsheet or CRM export"],
    yourTime: "About 1 hour",
  },
  {
    id: "setup",
    day: "Day 2",
    title: "Setup",
    summary:
      "We build your CRM: your pipeline stages, the fields you care about, job types and user accounts.",
    weDo: [
      "Set up your stages in your words (\"Estimate sent\", not \"Opportunity stage 3\")",
      "Add the custom fields you need, like claim numbers or equipment details",
      "Create logins for your team, with the right access for each person",
    ],
    youDo: ["Nothing. We'll send you a link to look around if you'd like to."],
    yourTime: "Optional",
  },
  {
    id: "migration",
    day: "Days 3–4",
    title: "Migration",
    summary:
      "We clean and move your customers, open quotes and history. You check a sample before anything goes live.",
    weDo: [
      "Remove duplicates and tidy up names, phone numbers and addresses",
      "Match your old columns to the new fields",
      "Import a test batch, then the full set once you've approved it",
    ],
    youDo: ["Spend 20 minutes checking a sample of your customers looks right"],
    yourTime: "About 20 minutes",
  },
  {
    id: "connections",
    day: "Day 5",
    title: "Connections",
    summary:
      "We connect your email, calendar, accounting and lead forms from our supported list, then test each one.",
    weDo: [
      "Connect each supported tool from your launch plan",
      "Send test leads, emails and calendar events to prove it works",
      "Write down anything that couldn't be connected, and the workaround",
    ],
    youDo: ["Approve access to your accounts when we ask (we never need your passwords)"],
    yourTime: "About 15 minutes",
  },
  {
    id: "training",
    day: "Day 6",
    title: "Training",
    summary:
      "Two short live sessions, one for you and one for your team, using your real customers instead of a demo account.",
    weDo: [
      "Owner session: your Today screen, your pipeline, simple reports",
      "Team session: adding leads, logging calls, follow-ups on the phone",
      "Leave you with a one-page cheat sheet made for your setup",
    ],
    youDo: ["Get your team in a room (or on a call) for about 45 minutes"],
    yourTime: "About 1.5 hours",
  },
  {
    id: "launch",
    day: "Day 7",
    title: "Launch",
    summary:
      "You go live. Your launch lead checks in every day for the first week and is a direct call away.",
    weDo: [
      "Final check that everything is connected and imported",
      "Daily check-ins through your first week live",
      "A 30-day review to tune stages, fields and reminders",
    ],
    youDo: ["Start using it. Tell us what feels clunky, and we'll fix it."],
    yourTime: "Your normal day",
  },
];

export const launchEligibility = [
  "Your customer data is mostly in one place, like a spreadsheet or one other CRM",
  "The tools you want connected are on our supported list",
  "Your team can make time for one 45-minute training session",
  "Someone can check a sample of the imported data within a day",
];
