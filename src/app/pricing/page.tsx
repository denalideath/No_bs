import type { Metadata } from "next";
import { Check, Minus, ShieldCheck } from "lucide-react";
import { CtaBand, Faq, PageHero } from "@/components/sections";
import { ButtonLink, Section, SectionHeading, cn } from "@/components/ui";
import { plans, pricingPromises, setupNotIncluded } from "@/content/pricing";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing: simple monthly plans, setup included in plain sight",
  description:
    "Clear monthly pricing for service businesses, plus a fixed one-time launch package that covers setup, data migration, connections and training.",
};

const faqs = [
  {
    q: "Why is there a setup fee?",
    a: "Because real people do real work in your launch week: building your setup, cleaning and moving your data, connecting your tools and training your team. We'd rather charge for that openly than hide it in a higher monthly price.",
  },
  {
    q: "Is there a contract?",
    a: "No. Plans are month-to-month. If it isn't working for you, you can leave and take all of your data with you.",
  },
  {
    q: "What if my move is more complicated than the package covers?",
    a: "We'll tell you on the first call and give you a fixed price in writing before you commit. No surprise invoices.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Move up or down any time. Changes apply from your next billing date.",
  },
  {
    q: "Is support extra?",
    a: `No. Support from people is included in every plan. Call us ${site.supportHours}.`,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing, with setup in plain sight."
        intro="One monthly price for your whole business, and a fixed one-time launch package that pays for the people who set it up with you."
      />

      <section aria-labelledby="plans-heading" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="plans-heading" className="sr-only">
            Plans
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.id}
                aria-labelledby={`${plan.id}-name`}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-white p-6 sm:p-8",
                  plan.highlight ? "border-brand-600 shadow-float ring-1 ring-brand-600" : "border-line shadow-card",
                )}
              >
                {plan.highlight ? (
                  <p className="absolute -top-3.5 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase sm:left-8">
                    Most popular
                  </p>
                ) : null}
                <h3 id={`${plan.id}-name`} className="text-2xl font-bold text-ink">
                  {plan.name}
                </h3>
                <p className="mt-1 text-ink-soft">{plan.for}</p>

                <div className="mt-6">
                  <p className="font-display text-5xl font-bold tracking-tight text-ink">{plan.monthly}</p>
                  <p className="mt-1 text-sm text-muted">{plan.monthlyNote}</p>
                </div>
                <div className="mt-4 rounded-xl bg-cream px-4 py-3">
                  <p className="font-semibold text-ink">
                    {plan.setup}{" "}
                    <span className="font-normal text-ink-soft">{plan.setupNote}</span>
                  </p>
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">{plan.users}</p>

                <ButtonLink
                  href="/book-a-demo"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="mt-6 w-full"
                  track={`pricing:${plan.id}`}
                >
                  {plan.cta}
                </ButtonLink>

                <div className="mt-8 border-t border-line pt-6">
                  <p className="text-sm font-semibold tracking-wide text-muted uppercase">The CRM</p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-ink-soft">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-pine-600" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold tracking-wide text-muted uppercase">Your launch</p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.launch.map((item) => (
                      <li key={item} className="flex gap-2.5 text-ink-soft">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-pine-600" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            {pricingPromises.map((p) => (
              <li key={p} className="flex items-center gap-2 font-medium text-ink-soft">
                <ShieldCheck aria-hidden className="size-5 shrink-0 text-pine-600" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted">Prices in USD. Taxes may apply.</p>
        </div>
      </section>

      <Section id="setup" tone="white" labelledBy="setup-heading" className="scroll-mt-16 border-y border-line">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="setup-heading"
              eyebrow="The launch package"
              title="What your setup fee pays for."
              intro="Every plan includes a named launch lead who does this work with you in your first week."
            />
            <ul className="mt-8 space-y-4">
              {[
                ["Discovery", "A one-hour call to map how you win and run jobs, and a written launch plan."],
                ["Setup", "Your stages, fields, job types and user accounts, built for you."],
                ["Migration", "Your data cleaned, de-duplicated and moved from one source, checked with you."],
                ["Connections", "Your supported tools connected and tested."],
                ["Training", "Live sessions for you and your team, on your own data."],
                ["Launch support", "Daily check-ins in your first week live, then a 30-day review."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-pine-600" strokeWidth={3} />
                  <p className="text-ink-soft">
                    <strong className="font-semibold text-ink">{title}.</strong> {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-cream p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-ink">What isn&apos;t included</h3>
            <p className="mt-2 text-ink-soft">
              If you need any of these, we&apos;ll quote a fixed price before you commit.
            </p>
            <ul className="mt-6 space-y-5">
              {setupNotIncluded.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Minus aria-hidden className="mt-1 size-5 shrink-0 text-muted" strokeWidth={3} />
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-ink-soft">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Pricing questions, answered plainly." />
          <Faq items={faqs} />
        </div>
      </Section>

      <CtaBand
        location="pricing-cta"
        title="Get an exact price for your business."
        intro="Book a 30-minute working session. We'll look at your data and tools and tell you exactly which plan fits and what your launch will cost."
      />
    </>
  );
}
