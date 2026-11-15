"use server";

import { isConversionPathId } from "@/content/site";
import {
  currentSystemOptions,
  industryOptions,
  teamSizeOptions,
  type DemoField,
  type DemoFormState,
} from "./options";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(formData: FormData, key: string, max = 200) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Handles a demo request.
 *
 * Delivery: if DEMO_REQUEST_WEBHOOK_URL is set, the request is POSTed there as
 * JSON (works with Zapier, Make, Slack workflows, HubSpot, your own CRM…).
 * Otherwise it's logged on the server so nothing is silently lost in dev.
 */
export async function requestDemo(
  _prev: DemoFormState,
  formData: FormData,
): Promise<DemoFormState> {
  // Honeypot: real people never see or fill this field.
  if (str(formData, "company_website")) {
    return { status: "success", firstName: "there" };
  }

  const values: Record<DemoField, string> = {
    path: str(formData, "path", 20),
    name: str(formData, "name", 100),
    business: str(formData, "business", 120),
    email: str(formData, "email", 160),
    phone: str(formData, "phone", 40),
    industry: str(formData, "industry", 40),
    teamSize: str(formData, "teamSize", 20),
    currentSystem: str(formData, "currentSystem", 20),
    currentCrm: str(formData, "currentCrm", 80),
    headache: str(formData, "headache", 1000),
  };

  const errors: Partial<Record<DemoField, string>> = {};
  if (!isConversionPathId(values.path)) errors.path = "Pick the option closest to where you are.";
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!values.business) errors.business = "Please tell us your business name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter an email address we can reach you at.";
  if (values.phone && values.phone.replace(/\D/g, "").length < 7)
    errors.phone = "That phone number looks too short.";
  if (!(industryOptions as readonly string[]).includes(values.industry))
    errors.industry = "Please choose your trade.";
  if (!(teamSizeOptions as readonly string[]).includes(values.teamSize))
    errors.teamSize = "Please choose your team size.";
  if (!currentSystemOptions.some((o) => o.value === values.currentSystem))
    errors.currentSystem = "Please choose where your customer info lives today.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "A few details need another look.",
      errors,
      values,
    };
  }

  const payload = {
    ...values,
    submittedAt: new Date().toISOString(),
    source: "website:book-a-demo",
  };

  const webhook = process.env.DEMO_REQUEST_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[book-a-demo] delivery failed", err);
      return {
        status: "error",
        message:
          "Something went wrong on our end and your request didn't go through. Please try again, or give us a call.",
        values,
      };
    }
  } else {
    console.info("[book-a-demo] new request (set DEMO_REQUEST_WEBHOOK_URL to deliver it)", payload);
  }

  return { status: "success", firstName: values.name.split(/\s+/)[0] };
}
