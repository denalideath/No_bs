import type { Metadata } from "next";
import { AlertTriangle, ArrowRight, FileSpreadsheet, Repeat2, Smartphone } from "lucide-react";
import { CtaBand, Faq, PageHero } from "@/components/sections";
import {
  ButtonLink,
  Card,
  CheckList,
  IconBadge,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { migrationLimits, migrationSources, migrationSteps, whatMoves } from "@/content/migration";

export const metadata: Metadata = {
  title: "Switching & migration: we move your data with you",
  description:
    "Moving from spreadsheets, paper or another CRM? We clean up your data, move it over and check it with you before you go live. Here's what moves, and what doesn't.",
};

const sourceIcons = {
  spreadsheets: FileSpreadsheet,
  crm: Repeat2,
  phone: Smartphone,
} as const;

const faqs = [
  {
    q: "Do I have to cancel my old CRM first?",
    a: "No, and we'd recommend you don't. Keep it until you're comfortable. Most people keep read-only access for a month or two, just in case.",
  },
  {
    q: "Could I lose data in the move?",
    a: "We work from a copy, never your original. You check a sample before the full import, and we spot-check together after it. Your old system stays untouched.",
  },
  {
    q: "How long does migration take?",
    a: "For most businesses with one main data source, two days of our time inside your launch week. Bigger or messier moves get a dated plan before you sign.",
  },
  {
    q: "My data is a mess. Is that a problem?",
    a: "No. Duplicates, inconsistent phone numbers and half-filled columns are normal. Cleaning them up is part of the job. If it's a much bigger cleanup than usual, we'll quote it up front.",
  },
  {
    q: "Who can see my data during the move?",
    // VERIFY BEFORE LAUNCH: replace with your actual data-handling and security practices.
    a: "Only the people working on your launch. We'll walk you through exactly how your data is handled, stored and cleaned up on your first call, before you share anything.",
  },
];

export default function SwitchingPage() {
  return (
    <>
      <PageHero
        eyebrow="Switching & migration"
        title="Moving your data is the scary part. So we do it with you."
        intro="Whether you're coming from spreadsheets, paper or another CRM, we clean up your data, move it over and check it with you before anything goes live."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book-a-demo?path=switching" size="lg" track="switching-hero:assessment" arrow>
            Get a switching assessment
          </ButtonLink>
          <ButtonLink href="#limits" size="lg" variant="secondary">
            What doesn&apos;t move
          </ButtonLink>
        </div>
      </PageHero>

      <Section labelledBy="from-heading">
        <SectionHeading id="from-heading" eyebrow="Wherever you're starting" title="Coming from…" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {migrationSources.map((s) => {
            const Icon = sourceIcons[s.id as keyof typeof sourceIcons];
            return (
              <Card key={s.id}>
                <IconBadge>
                  <Icon aria-hidden />
                </IconBadge>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="white" labelledBy="moves-heading" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            id="moves-heading"
            eyebrow="What comes with you"
            title="Your customers, your quotes, your history."
            intro="Here's what we move as part of your launch package."
          />
          <CheckList items={whatMoves} />
        </div>
      </Section>

      <Section tone="sand" labelledBy="steps-heading">
        <SectionHeading
          id="steps-heading"
          eyebrow="How the move works"
          title="Five careful steps. You check it before it's final."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {migrationSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl bg-white p-5 shadow-card">
              <span className="font-display text-sm font-bold text-brand-700">Step {i + 1}</span>
              <h3 className="mt-1 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.body}</p>
              {i < migrationSteps.length - 1 ? (
                <ArrowRight
                  aria-hidden
                  className="absolute top-1/2 -right-3.5 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-sand p-0.5 text-muted lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-ink-soft">
          Your old system stays exactly as it is the whole time. We work from a copy.
        </p>
      </Section>

      <Section id="limits" labelledBy="limits-heading" className="scroll-mt-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              id="limits-heading"
              eyebrow="Honest limits"
              title="What doesn't come across, and what we do instead."
              intro="Every CRM switch has limits. We'd rather you hear them from us now than discover them later."
            />
          </div>
          <ul className="space-y-4">
            {migrationLimits.map((l) => (
              <li key={l.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
                <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0 text-amber-ink" />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{l.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{l.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink" labelledBy="assessment-heading">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <SectionHeading
            id="assessment-heading"
            invert
            eyebrow="Unhappy with your current CRM?"
            title="Get a CRM switching assessment."
            intro="We'll look at your current setup with you and tell you exactly what moves, what doesn't, how long it takes and what it costs. Free, and you're under no obligation."
          />
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
            <CheckList
              invert
              items={[
                "What your current plan lets you export",
                "Which fields, files and history can move",
                "What we'd rebuild instead of copy",
                "A dated plan and a fixed price",
              ]}
            />
            <ButtonLink
              href="/book-a-demo?path=switching"
              variant="inverse"
              size="lg"
              className="mt-6 w-full"
              track="switching-assessment:cta"
            >
              Book my assessment
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading id="faq-heading" eyebrow="Questions" title="Common questions about switching." />
            <div className="mt-6">
              <TextLink href="/pricing#setup">What the launch package includes</TextLink>
            </div>
          </div>
          <Faq items={faqs} />
        </div>
      </Section>

      <CtaBand location="switching-cta" />
    </>
  );
}
