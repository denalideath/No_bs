import type { Metadata } from "next";
import { Clock, MessageCircle, PhoneCall, UserRound } from "lucide-react";
import { CtaBand, Faq, HeroActions, PageHero } from "@/components/sections";
import { CheckList, IconBadge, Section, SectionHeading, TextLink, cn } from "@/components/ui";
import { launchEligibility, launchSteps } from "@/content/launch-plan";

export const metadata: Metadata = {
  title: "How it works: your first week",
  description:
    "Exactly what happens in your first seven days: discovery, setup, data migration, connections, training and launch, with a named person running it.",
};

const launchLeadDuties = [
  "Runs your discovery call and writes your launch plan",
  "Builds your setup and moves your data",
  "Trains you and your team",
  "Checks in every day through your first week live",
];

const afterLaunch = [
  {
    when: "Week 2",
    title: "Daily check-ins",
    body: "Your launch lead checks in each day. Small changes, like a new stage or field, get made the same day.",
  },
  {
    when: "Day 30",
    title: "30-day review",
    body: "We look at what your team actually uses, tune your reminders and stages, and train anyone new.",
  },
  {
    when: "Ongoing",
    title: "Support from people",
    body: "Call or email a person who can see your setup. No ticket numbers, no chatbot loops.",
  },
];

const faqs = [
  {
    q: "What if we can't go live in a week?",
    a: "Then we tell you before you sign, not after. Businesses with several data sources, lots of custom needs or a bigger team usually launch in two to three weeks. You'll get a dated plan either way.",
  },
  {
    q: "Do I need to stop using my old system during the week?",
    a: "No. Keep working as normal. We move a final copy of your data just before launch, so nothing gets lost in between.",
  },
  {
    q: "What do I need to prepare?",
    a: "Very little. Have access to wherever your customer list lives today, and a rough idea of the steps a job goes through. We'll handle the rest on the first call.",
  },
  {
    q: "Do you need my passwords?",
    a: "No. When we connect your tools, you approve access yourself through each tool's normal sign-in screen. We never ask for passwords.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "You call your launch lead during your first weeks, and our support line after that. A person answers, and they can see your setup.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Live in as little as a week, with a person beside you the whole way."
        intro="Here's exactly what happens in your first seven days, who does what, and how much of your time it really takes."
      >
        <HeroActions location="how-hero" />
      </PageHero>

      {/* Launch lead */}
      <Section tone="white" labelledBy="lead-heading" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="lead-heading"
            eyebrow="One person, start to finish"
            title="Meet your launch lead."
            intro="You won't be passed between a salesperson, an onboarding team and a support queue. One named person runs your launch and you'll have their direct line."
          />
          <div className="rounded-2xl border border-line bg-cream p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <IconBadge tone="pine" className="size-14 rounded-full">
                <UserRound aria-hidden />
              </IconBadge>
              <div>
                <p className="font-display text-lg font-bold text-ink">Your launch lead</p>
                <p className="text-ink-soft">Your one point of contact from day 1</p>
              </div>
            </div>
            <CheckList className="mt-6" items={launchLeadDuties} />
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
                <PhoneCall aria-hidden className="size-4 text-pine-600" /> Direct phone line
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
                <MessageCircle aria-hidden className="size-4 text-pine-600" /> Replies the same day
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Day by day */}
      <Section labelledBy="days-heading">
        <SectionHeading
          id="days-heading"
          eyebrow="Day by day"
          title="What happens, and what we need from you."
          intro="About four hours of your time across the whole week. Most of it is two calls and a training session."
        />
        <ol className="mt-14 space-y-5">
          {launchSteps.map((step, i) => (
            <li
              key={step.id}
              id={step.id}
              className="grid scroll-mt-24 gap-6 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[220px_1fr_1fr]"
            >
              <div>
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full font-display text-lg font-bold",
                    i === launchSteps.length - 1 ? "bg-brand-600 text-white" : "bg-ink text-white",
                  )}
                >
                  {i + 1}
                </span>
                <p className="mt-4 text-sm font-semibold text-brand-700">{step.day}</p>
                <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-sm font-medium text-ink-soft">
                  <Clock aria-hidden className="size-3.5" />
                  Your time: {step.yourTime}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-muted uppercase">We do</p>
                <CheckList className="mt-3" items={step.weDo} />
              </div>
              <div className="rounded-xl bg-cream p-5">
                <p className="text-sm font-semibold tracking-wide text-muted uppercase">You do</p>
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {step.youDo.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Eligibility */}
      <Section tone="sand" labelledBy="eligible-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            id="eligible-heading"
            eyebrow="Being straight with you"
            title="Who can go live in a week?"
            intro="Seven days is our target, not a guarantee for everyone. Here's what makes it realistic."
          />
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <CheckList items={launchEligibility} />
            <p className="mt-6 border-t border-line pt-5 leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">Not quite you?</strong> That&apos;s fine.
              Businesses with several data sources or bigger teams usually launch in two to three
              weeks. You&apos;ll get a written, dated plan before you commit.
            </p>
          </div>
        </div>
      </Section>

      {/* After launch */}
      <Section tone="white" labelledBy="after-heading">
        <SectionHeading
          id="after-heading"
          eyebrow="After launch"
          title="We don't disappear on day eight."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {afterLaunch.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-cream p-6">
              <p className="text-sm font-semibold text-brand-700">{item.when}</p>
              <h3 className="mt-1 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <TextLink href="/switching">How we move your data safely</TextLink>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Common questions about the first week." />
          <Faq items={faqs} />
        </div>
      </Section>

      <CtaBand location="how-cta" title="See what your first week would look like." />
    </>
  );
}
