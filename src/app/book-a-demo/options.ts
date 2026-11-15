/** Shared between the booking form (client) and its server action. */
export const industryOptions = [
  "Roofing",
  "Plumbing",
  "HVAC",
  "Cleaning",
  "Landscaping",
  "Electrical",
  "Other",
] as const;

export const teamSizeOptions = ["Just me", "2–5", "6–10", "11–25", "26+"] as const;

export const currentSystemOptions = [
  { value: "spreadsheets", label: "Spreadsheets" },
  { value: "paper", label: "Paper, texts or memory" },
  { value: "crm", label: "Another CRM" },
  { value: "mix", label: "A mix of everything" },
] as const;

export type DemoField =
  | "path"
  | "name"
  | "business"
  | "email"
  | "phone"
  | "industry"
  | "teamSize"
  | "currentSystem"
  | "currentCrm"
  | "headache";

export type DemoFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: Partial<Record<DemoField, string>>;
  values?: Partial<Record<DemoField, string>>;
  firstName?: string;
};
