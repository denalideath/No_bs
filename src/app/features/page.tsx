import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Info } from "lucide-react";
import {
  CustomerMock,
  FollowUpsMock,
  LeadsMock,
  PipelineMock,
  ReportsMock,
  TodayMock,
} from "@/components/product/mocks";
import { CtaBand, HeroActions, PageHero } from "@/components/sections";
import { CheckList, Container, Eyebrow, TextLink, cn } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features: the everyday jobs, made easier",
  description:
    "Catch every lead, track every quote, follow up on time and keep every customer's history in one place. A simple CRM built for service businesses.",
};

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
};

const features: Feature[] = [
  {
    id: "today",
    eyebrow: "Every morning",
    title: "Know who to call today.",
    body: "Open the CRM and the day is already sorted: overdue follow-ups first, then quotes to chase, then new leads. Tick them off as you go.",
    points: [
      "A short list, in the order it matters",
      "Overdue items can't hide",
      "Each person sees their own list",
    ],
    visual: <TodayMock />,
  },
  {
    id: "leads",
    eyebrow: "When the phone rings",
    title: "Catch every lead, wherever it comes from.",
    body: "Website forms, emails, referrals and phone calls all land in one inbox. Assign a lead to someone in a tap, and it won't be forgotten.",
    points: [
      "Website form leads arrive automatically",
      "Log a phone call in seconds",
      "See which lead sources actually pay off",
    ],
    visual: <LeadsMock />,
  },
  {
    id: "pipeline",
    eyebrow: "Quotes and jobs",
    title: "See every quote at a glance.",
    body: "Your quotes and jobs, laid out by stage, in your own words. See what's waiting, what it's worth, and what's gone quiet for too long.",
    points: [
      "Stages named the way you talk",
      "Totals for each stage",
      "Quiet quotes flagged automatically",
    ],
    visual: <PipelineMock />,
  },
  {
    id: "follow-ups",
    eyebrow: "Staying in touch",
    title: "Follow-ups that don't rely on memory.",
    body: "Set a reminder in two taps, or let the CRM add one for you: a nudge when a quote's been quiet a week, or a yearly reminder for past customers.",
    points: [
      "Automatic nudges on quiet quotes",
      "Yearly and seasonal reminders",
      "Ready-to-send message templates",
    ],
    visual: <FollowUpsMock />,
  },
  {
    id: "customers",
    eyebrow: "Every customer",
    title: "The whole customer story in one place.",
    body: "Calls, quotes, photos, emails and notes on one timeline. Anyone on your team can pick up where the last person left off.",
    points: [
      "Full history on one screen",
      "Photos and files on the record, not someone's phone",
      "The next step is always visible",
    ],
    visual: <CustomerMock />,
  },
  {
    id: "reports",
    eyebrow: "How it's going",
    title: "Simple numbers you'll actually check.",
    body: "How many leads came in, how many quotes went out, what you won and where your best work comes from. No spreadsheet required.",
    points: ["Leads, quotes and wins by month", "Where your leads come from", "Export to a spreadsheet any time"],
    visual: <ReportsMock />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="The everyday jobs, made easier."
        intro="Not a tour of settings. Just the things you and your team do every day, and how the CRM makes each one easier."
      >
        <HeroActions location="features-hero" />
      </PageHero>

      <nav aria-label="Features on this page" className="sticky top-16 z-30 border-b border-line bg-cream/95">
        <Container>
          <ul className="scrollbar-none -mx-4 flex gap-1 overflow-x-auto px-4 py-2.5 sm:mx-0 sm:px-0">
            {features.map((f) => (
              <li key={f.id}>
                <a
                  href={`#${f.id}`}
                  className="inline-flex rounded-full px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-ink-soft hover:bg-ink/5 hover:text-ink"
                >
                  {f.title.replace(/\.$/, "")}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {features.map((f, i) => (
        <section
          key={f.id}
          id={f.id}
          aria-labelledby={`${f.id}-heading`}
          className={cn("scroll-mt-28 py-16 sm:py-24", i % 2 === 1 ? "bg-sand" : "bg-cream")}
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <Eyebrow className="mb-3">{f.eyebrow}</Eyebrow>
                <h2 id={`${f.id}-heading`} className="text-3xl leading-tight font-bold text-ink sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{f.body}</p>
                <CheckList className="mt-6" items={f.points} />
              </div>
              <div className="min-w-0">{f.visual}</div>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line bg-white py-14">
        <Container>
          <div className="flex flex-col gap-5 rounded-2xl bg-cream p-6 sm:flex-row sm:items-start sm:p-8">
            <Info aria-hidden className="size-6 shrink-0 text-sky-ink" />
            <div>
              <h2 className="text-xl font-bold text-ink">What it isn&apos;t (and why that&apos;s fine)</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
                We focus on customers, leads, quotes and follow-ups, and do them well. For crew
                dispatch, invoicing and payments, we connect to the tools you already use rather than
                asking you to replace them.
              </p>
              <div className="mt-4">
                <TextLink href="/integrations">See what we connect to</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand location="features-cta" title="See these screens with your business in them." />
    </>
  );
}
