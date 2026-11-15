import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, CheckList, Section, SectionHeading } from "@/components/ui";
import { stories, storyPromises, type Story } from "@/content/stories";

export const metadata: Metadata = {
  title: "Customer stories",
  description:
    "Real stories from service businesses, published with their permission, including how long launch really took and what changed.",
};

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <p className="text-sm font-semibold text-brand-700">
        {story.industry} · {story.location}
      </p>
      <h3 className="mt-1 text-2xl font-bold text-ink">{story.business}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{story.summary}</p>
      <blockquote className="mt-6 border-l-4 border-brand-200 pl-4">
        <Quote aria-hidden className="size-5 text-brand-600" />
        <p className="mt-2 font-display text-lg leading-snug text-ink">{story.quote}</p>
        <footer className="mt-3 text-sm text-muted">
          {story.person}, {story.role}
        </footer>
      </blockquote>
      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6 sm:grid-cols-3">
        <div>
          <dt className="text-sm text-muted">Days to launch</dt>
          <dd className="font-display text-2xl font-bold text-ink">{story.daysToLaunch}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Moved from</dt>
          <dd className="font-semibold text-ink">{story.movedFrom}</dd>
        </div>
        {story.results.map((r) => (
          <div key={r.label}>
            <dt className="text-sm text-muted">{r.label}</dt>
            <dd className="font-display text-2xl font-bold text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function CustomerStoriesPage() {
  const hasStories = stories.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Customer stories"
        title="Real stories, published as they happen."
        intro="We're launching with a small group of pilot businesses. Their experiences will go here, with their names and permission, including what went well and what didn't."
      />

      {hasStories ? (
        <Section labelledBy="stories-heading">
          <h2 id="stories-heading" className="sr-only">
            Stories
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {stories.map((s) => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        </Section>
      ) : (
        <Section labelledBy="soon-heading">
          <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-line-strong bg-white/70 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">In progress</p>
            <h2 id="soon-heading" className="mt-2 text-3xl font-bold text-ink">
              Our first stories are being written now.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              We could have filled this page with polished quotes. We&apos;d rather wait until
              our pilot customers have real results to share, and their permission to share them.
            </p>
          </div>
        </Section>
      )}

      <Section tone="white" labelledBy="promise-heading" className="border-y border-line">
        <SectionHeading
          id="promise-heading"
          eyebrow="Our reporting promise"
          title="What every story will include."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {storyPromises.map((p, i) => (
            <li key={p.title} className="rounded-2xl bg-cream p-6">
              <span className="font-display text-sm font-bold text-brand-700">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand" labelledBy="pilot-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="pilot-heading"
            eyebrow="Pilot program"
            title="Want to be one of the first?"
            intro="We're taking on a small number of service businesses as pilot customers. You'd get the full launch, and a direct line to the people building the product."
          />
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <CheckList
              items={[
                "The full seven-day launch, with a named launch lead",
                "Your feedback shapes what we build next",
                "Share your story only if, and how, you want to",
              ]}
            />
            <ButtonLink href="/book-a-demo?path=new" className="mt-6 w-full" size="lg" track="stories:pilot">
              Ask about the pilot
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand location="stories-cta" />
    </>
  );
}
