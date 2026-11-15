import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Compass, Repeat2, Sprout } from "lucide-react";
import { ButtonLink, Container, Eyebrow, cn } from "@/components/ui";
import { conversionPaths, ctas, site } from "@/content/site";
import { launchSteps } from "@/content/launch-plan";

/* -------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <Container className="relative py-14 sm:py-20">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]" : undefined}>
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            <h1 className="text-4xl leading-[1.08] font-bold text-ink sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">{intro}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function HeroActions({ location }: { location: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonLink href={ctas.primary.href} size="lg" track={`${location}:primary`} arrow>
        {ctas.primary.label}
      </ButtonLink>
      <ButtonLink
        href={ctas.secondary.href}
        size="lg"
        variant="secondary"
        track={`${location}:secondary`}
      >
        {ctas.secondary.label}
      </ButtonLink>
    </div>
  );
}

/* --------------------------------------------------------- Week timeline */

export function WeekTimeline({ className }: { className?: string }) {
  return (
    <ol
      className={cn(
        "relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute top-[22px] right-[8%] left-[8%] hidden h-0.5 bg-[repeating-linear-gradient(to_right,var(--color-line-strong)_0_6px,transparent_6px_12px)] lg:block"
      />
      {launchSteps.map((step, i) => {
        const last = i === launchSteps.length - 1;
        return (
          <li key={step.id} className="relative flex gap-4 lg:flex-col lg:gap-0">
            <span
              className={cn(
                "relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 font-display text-base font-bold",
                last
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-line-strong bg-white text-ink",
              )}
            >
              {i + 1}
            </span>
            <div className="lg:mt-4">
              <p className="text-sm font-semibold text-brand-700">{step.day}</p>
              <h3 className="mt-0.5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{step.summary}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ------------------------------------------------------ Conversion paths */

const pathIcons = { new: Sprout, switching: Repeat2, comparing: Compass } as const;

export function ConversionPaths({
  location,
  invert = false,
}: {
  location: string;
  invert?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {conversionPaths.map((path) => {
        const Icon = pathIcons[path.id];
        return (
          <Link
            key={path.id}
            href={`/book-a-demo?path=${path.id}`}
            data-track={`${location}:path-${path.id}`}
            className={cn(
              "group flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-0.5",
              invert
                ? "border-white/15 bg-white/5 hover:border-white/35 hover:bg-white/10"
                : "border-line bg-white shadow-card hover:border-brand-200",
            )}
          >
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-lg",
                invert ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700",
              )}
            >
              <Icon aria-hidden className="size-5" />
            </span>
            <p
              className={cn(
                "mt-5 text-sm font-semibold",
                invert ? "text-white/65" : "text-muted",
              )}
            >
              {path.audience}
            </p>
            <p className={cn("mt-1 italic", invert ? "text-white/80" : "text-ink-soft")}>
              &ldquo;{path.situation}&rdquo;
            </p>
            <p
              className={cn(
                "mt-4 font-display text-xl leading-snug font-bold",
                invert ? "text-white" : "text-ink",
              )}
            >
              {path.offer}
            </p>
            <span
              className={cn(
                "mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold",
                invert ? "text-brand-200" : "text-brand-700",
              )}
            >
              {path.cta}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- CTA band */

export function CtaBand({
  title = "See how your business would look in it.",
  intro = "Book a 30-minute working session. Tell us how you run things, and we'll show you the CRM set up your way, with a straight answer on timeline and price.",
  location,
}: {
  title?: string;
  intro?: string;
  location: string;
}) {
  return (
    <section className="bg-ink py-16 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow className="mb-3 text-brand-200">Your next step</Eyebrow>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/75">{intro}</p>
        </div>
        <div className="mt-10">
          <ConversionPaths location={location} invert />
        </div>
        <p className="mt-8 text-white/65">
          Rather talk now? Call{" "}
          <a
            className="font-semibold text-white underline underline-offset-4"
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          >
            {site.phone}
          </a>
          . A person picks up.
        </p>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------------- FAQ */

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-ink">
            {item.q}
            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="-mt-1 pb-5 leading-relaxed text-ink-soft">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/* ----------------------------------------------------- Draft content note */

/**
 * A small, honest note used where the strategy says a claim must be proven
 * before it's made (integrations, migration scope, pricing).
 */
export function HonestNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-dashed border-line-strong bg-white/60 p-5 sm:p-6">
      <p className="font-display font-bold text-ink">{title}</p>
      <div className="mt-1.5 leading-relaxed text-ink-soft">{children}</div>
    </aside>
  );
}
