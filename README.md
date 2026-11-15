# NO BS: CRM website

Marketing site for NO BS, an approachable CRM for service businesses, built
from the November 2026 website strategy. **Next.js 16** (App Router, Cache
Components), **Tailwind CSS v4**, TypeScript.

> The brand name is set once in `src/content/site.ts` and used everywhere.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (every page is prerendered as static HTML)
npm run lint
```

Copy `.env.example` to `.env.local` and fill in:

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots.txt |
| `DEMO_REQUEST_WEBHOOK_URL` | Where demo requests are POSTed as JSON (Zapier, Make, Slack, your CRM…). If unset, requests are only logged on the server. |
| `NEXT_PUBLIC_SCHEDULER_URL` | Optional Cal.com / Calendly link shown after a request is submitted |

## Pages

| Route | Job |
| --- | --- |
| `/` | Explain the offer and earn a demo (the 7-part homepage flow) |
| `/how-it-works` | The day-by-day, seven-day launch plan |
| `/features` | Everyday jobs the CRM makes easier |
| `/integrations` | Supported, in-progress and **not yet supported** tools |
| `/switching` | Migration process and honest limits |
| `/industries`, `/industries/[slug]` | Roofing, plumbing, HVAC, cleaning |
| `/pricing` | Monthly plans plus what the launch package includes and excludes |
| `/customer-stories` | Honest "coming soon" state until real, permitted stories exist |
| `/book-a-demo` | Booking form with the three conversion paths (`?path=new\|switching\|comparing`) |

## Where to edit things

All copy that's likely to change lives in `src/content/`:

- `site.ts`: brand name, phone, nav, CTA wording, the three conversion paths
- `launch-plan.ts`: the seven-day plan and eligibility rules
- `industries.ts`: industry pages (add an entry to add a page)
- `integrations.ts`: integrations list and statuses
- `migration.ts`: what moves, how, and what doesn't
- `pricing.ts`: plans, launch packages, exclusions
- `stories.ts`: customer stories (empty until you have real ones)

Product previews (`src/components/product/`) are built in code with sample data
rather than screenshots, so they stay sharp at every size. Swap in real
screenshots when the product UI is final.

## Analytics

`src/lib/analytics.ts` pushes events onto `window.dataLayer`, so Google Tag
Manager, Segment, PostHog and similar tools can pick them up:

- `cta_click`: any element with a `data-track` attribute (all main CTAs have one)
- `demo_path_selected`, `demo_form_started`, `demo_form_submitted`

Add your analytics tag in `src/app/layout.tsx`.

## Before launch checklist

The strategy says to prove things before promising them. These are
**placeholders** that need confirming:

- [ ] Final logo and phone number (`site.ts`, `logo.tsx`, `icon.svg`)
- [ ] Pricing, launch-package fees and limits (`pricing.ts`). Test they cover real onboarding costs.
- [ ] Integration list and statuses (`integrations.ts`)
- [ ] Migration scope, sources and limits (`migration.ts`)
- [ ] The seven-day timings and "about four hours of your time" (`launch-plan.ts`, homepage, How it works), confirmed by pilots
- [ ] Support hours and commitments ("same-day call-backs", "replies the same day")
- [ ] Data-handling answer on `/switching` (marked `VERIFY BEFORE LAUNCH`)
- [ ] "Free, no obligation" switching assessment and pilot program terms
- [ ] Customer stories, added only with written permission
- [ ] A privacy policy page, linked from the footer and the booking form
