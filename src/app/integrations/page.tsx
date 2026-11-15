import type { Metadata } from "next";
import { CheckCircle2, CircleDashed, CircleSlash, MessageSquareText } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, CheckList, Section, SectionHeading, cn } from "@/components/ui";
import {
  integrations,
  lastReviewed,
  statusMeta,
  type IntegrationStatus,
} from "@/content/integrations";

export const metadata: Metadata = {
  title: "Integrations: what we connect, and what we don't yet",
  description:
    "The tools we connect for you during setup, the ones on the way, and the ones we don't support yet. No surprises after you sign.",
};

const order: IntegrationStatus[] = ["supported", "in-progress", "not-yet"];

const statusStyle: Record<
  IntegrationStatus,
  { icon: typeof CheckCircle2; badge: string; iconClass: string }
> = {
  supported: {
    icon: CheckCircle2,
    badge: "bg-pine-50 text-pine-700",
    iconClass: "text-pine-600",
  },
  "in-progress": {
    icon: CircleDashed,
    badge: "bg-amber-soft text-amber-ink",
    iconClass: "text-amber-ink",
  },
  "not-yet": {
    icon: CircleSlash,
    badge: "bg-sand text-ink-soft",
    iconClass: "text-muted",
  },
};

function initials(name: string) {
  return name
    .replace(/[^A-Za-z& ]/g, "")
    .split(/\s+/)
    .filter((w) => w && w !== "&")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Works with the tools you already use."
        intro="Here's what we connect today, what's on the way, and what we don't support yet, so there are no surprises after you sign."
      >
        <div className="flex flex-wrap gap-2">
          {order.map((status) => {
            const Icon = statusStyle[status].icon;
            const count = integrations.filter((i) => i.status === status).length;
            return (
              <a
                key={status}
                href={`#${status}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
                  statusStyle[status].badge,
                )}
              >
                <Icon aria-hidden className="size-4" />
                {statusMeta[status].heading} ({count})
              </a>
            );
          })}
        </div>
      </PageHero>

      <Section tone="white" labelledBy="supported-means" className="border-b border-line">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="supported-means"
            eyebrow="What “supported” means"
            title="We connect it. We test it. We fix it if it breaks."
          />
          <CheckList
            items={[
              "Connected for you during your launch week, not left as homework",
              "Tested with real leads, emails and events before you go live",
              "Covered by our support team after launch",
              "You approve access through each tool's own sign-in. We never ask for passwords.",
            ]}
          />
        </div>
      </Section>

      {order.map((status) => {
        const meta = statusMeta[status];
        const style = statusStyle[status];
        const items = integrations.filter((i) => i.status === status);
        return (
          <section
            key={status}
            id={status}
            aria-labelledby={`${status}-heading`}
            className={cn("scroll-mt-20 py-14 sm:py-20", status === "in-progress" ? "bg-sand" : "bg-cream")}
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-3">
                <style.icon aria-hidden className={cn("mt-1.5 size-6 shrink-0", style.iconClass)} />
                <div className="max-w-2xl">
                  <h2 id={`${status}-heading`} className="text-3xl font-bold text-ink">
                    {meta.heading}
                  </h2>
                  <p className="mt-2 text-lg text-ink-soft">{meta.description}</p>
                </div>
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className={cn(
                      "flex flex-col rounded-2xl border border-line p-5",
                      status === "not-yet" ? "bg-white/60" : "bg-white shadow-card",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-white"
                      >
                        {initials(item.name)}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg leading-tight font-bold text-ink">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted">{item.category}</p>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-ink-soft">{item.what}</p>
                    <span
                      className={cn(
                        "mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                        style.badge,
                      )}
                    >
                      <style.icon aria-hidden className="size-3.5" />
                      {meta.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <Section tone="white" labelledBy="missing-heading" className="border-t border-line">
        <div className="flex flex-col gap-6 rounded-2xl bg-cream p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-4">
            <MessageSquareText aria-hidden className="mt-1 size-7 shrink-0 text-brand-700" />
            <div className="max-w-2xl">
              <h2 id="missing-heading" className="text-2xl font-bold text-ink">
                Don&apos;t see a tool you rely on?
              </h2>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Ask us on your call. You&apos;ll get a straight answer: yes, a workaround, or not
                yet. We&apos;d rather lose the sale than have you find out after launch.
              </p>
              <p className="mt-3 text-sm text-muted">List last reviewed: {lastReviewed}.</p>
            </div>
          </div>
          <ButtonLink href="/book-a-demo?path=comparing" track="integrations:ask" className="shrink-0">
            Ask about your tools
          </ButtonLink>
        </div>
      </Section>

      <CtaBand location="integrations-cta" />
    </>
  );
}
