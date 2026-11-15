/**
 * Minimal, vendor-neutral analytics.
 *
 * Every event is pushed onto `window.dataLayer`, which Google Tag Manager,
 * Segment, PostHog and most other tools can read. Wire your tool of choice in
 * once and the site's events flow through without code changes.
 *
 * Events the strategy asks us to measure:
 *   cta_click              – any element with a data-track attribute
 *   demo_path_selected     – visitor picks New / Switching / Comparing
 *   demo_form_started      – first interaction with the booking form
 *   demo_form_submitted    – booking request accepted by the server
 */
export type AnalyticsEvent =
  | "cta_click"
  | "demo_path_selected"
  | "demo_form_started"
  | "demo_form_submitted";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...props, path: window.location.pathname });
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, props);
  }
}
