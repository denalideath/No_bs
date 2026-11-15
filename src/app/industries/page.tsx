import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { Section, SectionHeading } from "@/components/ui";
import { industries, otherTrades } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries: a CRM for roofing, plumbing, HVAC and cleaning",
  description:
    "A CRM set up for the way your trade works, with your stages, your job details and your busy seasons.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for businesses that do the work on site."
        intro="Every trade sells and schedules a little differently. We set up your CRM with the stages, details and reminders your kind of work needs."
      />

      <Section labelledBy="trades-heading">
        <h2 id="trades-heading" className="sr-only">
          Trades we set up for
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 sm:p-8"
              >
                <p className="text-sm font-semibold text-brand-700">For {industry.trade}</p>
                <h3 className="mt-1 text-3xl font-bold text-ink">{industry.name}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{industry.card}</p>
                <div className="mt-6 flex flex-wrap gap-1.5" aria-label="Example stages">
                  {industry.pipeline.map((stage) => (
                    <span
                      key={stage.name}
                      className="rounded-full bg-sand px-2.5 py-1 text-xs font-semibold text-ink-soft"
                    >
                      {stage.name}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-brand-700">
                  See the {industry.name.toLowerCase()} setup
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="other-heading" className="border-t border-line">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="other-heading"
            eyebrow="Don't see your trade?"
            title="If you quote a job and do it on site, we can probably help."
            intro="The same setup works for many other service businesses. Tell us how yours runs and we'll show you."
          />
          <ul className="flex flex-wrap gap-2">
            {otherTrades.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-cream px-4 py-2 font-semibold text-ink-soft"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand location="industries-cta" />
    </>
  );
}
