/**
 * Switching & migration content.
 *
 * VERIFY BEFORE LAUNCH: the strategy asks us to define the included migration
 * scope and publish supported sources. Keep these lists honest.
 */
export const migrationSources = [
  {
    id: "spreadsheets",
    title: "Spreadsheets and paper",
    body: "Excel, Google Sheets, a CSV someone made years ago, or a box of job folders. Messy is fine. That's what we're here for.",
  },
  {
    id: "crm",
    title: "Another CRM",
    body: "If your current CRM can export to a spreadsheet, we can almost always move it. We'll check what your plan allows before you commit.",
  },
  {
    id: "phone",
    title: "Your phone and inbox",
    body: "Contacts on your phone, customers buried in email threads. We'll help you pull them together into one clean list.",
  },
];

export const whatMoves = [
  "Customers and contacts, with phone numbers, emails and addresses",
  "Open quotes and jobs, with their stage and value",
  "Notes and job history, where your old system exports them",
  "Upcoming follow-ups and tasks",
  "Tags and categories, mapped to your new setup",
  "Files and photos, where your old system lets them be exported",
];

export const migrationSteps = [
  {
    title: "Export",
    body: "We show you exactly how to export from your old system, or do it with you on a call.",
  },
  {
    title: "Clean",
    body: "We remove duplicates and fix formatting on names, phone numbers and addresses.",
  },
  {
    title: "Map",
    body: "We match your old columns to the new fields, so nothing ends up in the wrong place.",
  },
  {
    title: "Test",
    body: "We import a sample batch. You spend 20 minutes checking it looks right.",
  },
  {
    title: "Move",
    body: "We import everything, spot-check it together, and you go live.",
  },
];

export const migrationLimits = [
  {
    title: "Automations and workflows",
    body: "These can't be copied between systems. We rebuild the ones that matter to you during setup.",
  },
  {
    title: "Email threads stored inside your old CRM",
    body: "Many CRMs don't export them. We bring what the export includes. Your connected inbox picks up everything from launch day.",
  },
  {
    title: "Reports and dashboards",
    body: "These are rebuilt, not copied. We start with the handful of numbers you actually check.",
  },
  {
    title: "Anything your old provider won't export",
    body: "Some tools limit exports by plan. We check this in your switching assessment, before you commit.",
  },
];
