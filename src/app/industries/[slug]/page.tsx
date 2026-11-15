import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CircleAlert, Wrench } from "lucide-react";
import { PipelineMock } from "@/components/product/mocks";
import { CtaBand, HeroActions, PageHero, WeekTimeline } from "@/components/sections";
import { CheckList, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { getIndustry, industries } from "@/content/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `CRM for ${industry.name}`,
    description: `${industry.headline} ${industry.intro}`,
  };
}

/** Shown for a moment during client navigation while the page content streams in. */
function IndustryFallback() {
  return (
    <section aria-busy="true" className="border-b border-line bg-cream">
      <Container className="animate-pulse py-14 sm:py-20">
        <div className="h-4 w-40 rounded bg-sand-deep" />
        <div className="mt-5 h-12 max-w-xl rounded-lg bg-sand-deep" />
        <div className="mt-3 h-12 max-w-md rounded-lg bg-sand-deep" />
        <div className="mt-6 h-5 max-w-2xl rounded bg-sand" />
        <div className="mt-2 h-5 max-w-xl rounded bg-sand" />
      </Container>
    </section>
  );
}

export default function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  return (
    <Suspense fallback={<IndustryFallback />}>
      <IndustryContent params={params} />
    </Suspense>
  );
}

async function IndustryContent({ params }: Pick<PageProps<"/industries/[slug]">, "params">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow={`CRM for ${industry.trade}`}
        title={industry.headline}
        intro={industry.intro}
      >
        <HeroActions location={`industry-${industry.slug}-hero`} />
      </PageHero>

      <Section tone="sand" labelledBy="pains-heading">
        <SectionHeading
          id="pains-heading"
          eyebrow="Sound familiar?"
          title={`What we hear from ${industry.trade}.`}
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {industry.pains.map((p) => (
            <li key={p.title} className="rounded-2xl bg-white p-6 shadow-card">
              <CircleAlert aria-hidden className="size-6 text-brand-600" />
              <h3 className="mt-4 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="pipeline-heading">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <SectionHeading
            id="pipeline-heading"
            eyebrow="Your pipeline, in your words"
            title={`Set up the way ${industry.trade} actually work.`}
            intro="Here's a typical starting point. On your discovery call we'll rename, add or remove stages until it matches how your business runs."
          />
          <div className="min-w-0">
            <PipelineMock columns={industry.pipeline} business={industry.business} />
            <p className="mt-3 text-sm text-muted">Product preview with sample data.</p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="setup-heading" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="setup-heading"
              eyebrow="What we set up for you"
              title={`Ready for ${industry.name.toLowerCase()} work from day one.`}
            />
            <div className="mt-8 rounded-2xl bg-cream p-6">
              <p className="flex items-center gap-2 font-semibold text-ink">
                <Wrench aria-hidden className="size-5 text-brand-700" />
                Where {industry.trade} usually move from
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {industry.commonSources.map((s) => (
                  <li key={s} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <TextLink href="/switching">How we move your data</TextLink>
              </div>
            </div>
          </div>
          <CheckList items={industry.setup} className="lg:pt-12" />
        </div>
      </Section>

      <Section tone="sand" labelledBy="week-heading">
        <SectionHeading
          id="week-heading"
          eyebrow="Your first week"
          title="Up and running in as little as seven days."
        />
        <WeekTimeline className="mt-12" />
        <div className="mt-10">
          <TextLink href="/how-it-works">See the full day-by-day plan</TextLink>
        </div>
      </Section>

      <CtaBand
        location={`industry-${industry.slug}-cta`}
        title={`See your ${industry.name.toLowerCase()} business in the CRM.`}
      />
    </>
  );
}
