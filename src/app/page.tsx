import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarX2,
  Check,
  ClipboardList,
  DatabaseZap,
  FileWarning,
  GraduationCap,
  Handshake,
  LifeBuoy,
  PhoneMissed,
  Plug,
  Shapes,
  SlidersHorizontal,
  UserRound,
  X,
} from "lucide-react";
import { HeroVisual } from "@/components/product/hero-visual";
import {
  CustomerView,
  FollowUpsView,
  PipelineView,
  TodayView,
} from "@/components/product/mocks";
import { AppFrame } from "@/components/product/app-frame";
import { ProductTour } from "@/components/product/product-tour";
import { CtaBand, HeroActions, WeekTimeline } from "@/components/sections";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  IconBadge,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { industries } from "@/content/industries";
import { site } from "@/content/site";

const problems = [
  {
    icon: PhoneMissed,
    title: "Leads fall through the cracks",
    body: "A call comes in while you're up a ladder. The voicemail gets buried, and by Friday they've hired someone else.",
  },
  {
    icon: CalendarX2,
    title: "Follow-ups get missed",
    body: "You sent the quote. You meant to check in. Three weeks later, nobody has, and the job's gone cold.",
  },
  {
    icon: FileWarning,
    title: "Customer info is everywhere",
    body: "Notes in your phone, history in a spreadsheet, the last invoice in your email. Finding anything means calling the office.",
  },
];

const deliverables = [
  {
    icon: ClipboardList,
    title: "A simple CRM",
    body: "Leads, customers, quotes, follow-ups and your day's priorities in one place, on your phone or computer.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set up the way you work",
    body: "Your stages, your job types, the details you track. We shape it around how you already sell and schedule.",
  },
  {
    icon: Plug,
    title: "Your tools, connected",
    body: "Email, calendar, accounting and website forms from our supported list, connected and tested for you.",
  },
  {
    icon: DatabaseZap,
    title: "Your data, moved over",
    body: "From spreadsheets, another CRM or your phone's contacts. Cleaned up, de-duplicated and checked with you.",
  },
  {
    icon: GraduationCap,
    title: "Your team, trained",
    body: "Live sessions for you and your crew, using your real customers. Not a video library and a good-luck email.",
  },
  {
    icon: LifeBuoy,
    title: "A person after launch",
    body: "The same launch lead checks in through your first weeks. After that, support from people who know your setup.",
  },
];

const notYourJob = [
  {
    alone: "Configure every setting yourself",
    withUs: "We build it with you in a working session",
  },
  {
    alone: "Clean up a messy import on your own",
    withUs: "We clean, match and move your data",
  },
  {
    alone: "Figure out integrations from scratch",
    withUs: "We connect and test your supported tools",
  },
  {
    alone: "Train your team from help articles",
    withUs: "We train your team live, on your own data",
  },
  {
    alone: "Wonder who to call when something breaks",
    withUs: "You have a named person and a phone number",
  },
];

const commitments = [
  {
    icon: UserRound,
    title: "A named launch lead",
    body: "One person runs your setup from the first call to launch day, and you have their direct line.",
  },
  {
    icon: Handshake,
    title: "Support from people",
    body: `Call us ${site.supportHours}. Same-day call-backs for anything stopping your team from working.`,
  },
  {
    icon: BadgeDollarSign,
    title: "Pricing on the page",
    body: "What you pay each month and what setup costs are on our pricing page. No need to ask sales for the basics.",
    link: { href: "/pricing", label: "See pricing" },
  },
  {
    icon: Shapes,
    title: "Honest about limits",
    body: "Some things can't be moved from old systems, like automations. We'll tell you what before you commit.",
    link: { href: "/switching", label: "What moves, what doesn't" },
  },
];

export default function Home() {
  return (
    <>
      {/* 1. First screen */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
        />
        <Container className="relative grid items-center gap-10 pt-12 pb-10 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:pt-20 lg:pb-16">
          <div>
            <Eyebrow className="mb-4">For roofing, plumbing, HVAC, cleaning and other service businesses</Eyebrow>
            <h1 className="text-[2.6rem] leading-[1.04] font-bold text-ink sm:text-6xl">
              Finally, a CRM that works the way you do.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Simple, affordable customer management—with your data moved over, your
              existing tools connected, and your team trained. We help you get up and
              running in as little as one week.
            </p>
            <div className="mt-8">
              <HeroActions location="home-hero" />
            </div>
            <ul className="mt-8 grid gap-2.5 text-ink-soft sm:grid-cols-3 sm:gap-4">
              {["Your data moved for you", "Your tools connected", "Your team trained"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.95rem] font-medium">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-pine-100 text-pine-700">
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <HeroVisual />
        </Container>
        <div className="relative border-t border-line bg-white/70">
          <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="shrink-0 text-sm font-semibold text-muted">Set up for your trade:</p>
            <ul className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="inline-flex rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft hover:border-brand-200 hover:text-brand-700"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="inline-flex rounded-full px-3.5 py-1.5 text-sm font-semibold text-brand-700 hover:underline"
                >
                  + other trades
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </section>

      {/* 2. Problems we solve */}
      <Section tone="sand" labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Sound familiar?"
          title="You're great at the work. The paperwork is another story."
          intro="Most service businesses don't lose jobs because of the work. They lose them in the gaps between the call, the quote and the follow-up."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <Card key={p.title}>
              <IconBadge>
                <p.icon aria-hidden />
              </IconBadge>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-lg text-ink">
          <strong className="font-semibold">A CRM fixes all three, once it&apos;s set up.</strong>{" "}
          <span className="text-ink-soft">
            Setting it up is the part most owners never get around to. That&apos;s the part we do with you.
          </span>
        </p>
      </Section>

      {/* 3. What you actually get */}
      <Section labelledBy="get-heading">
        <SectionHeading
          id="get-heading"
          eyebrow="What you actually get"
          title="The software, and the setup done with you."
          intro="Everything you need to stay on top of customers. Nothing you'll never use."
        />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <div key={d.title} className="flex gap-4">
              <IconBadge tone="pine" className="shrink-0">
                <d.icon aria-hidden />
              </IconBadge>
              <div>
                <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <TextLink href="/features" track="home-get:features">
            See what the CRM does day to day
          </TextLink>
        </div>
      </Section>

      {/* How we stand apart */}
      <Section tone="white" labelledBy="apart-heading" className="border-y border-line">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            id="apart-heading"
            eyebrow="How we're different"
            title="All the CRM you need. None of the setup headaches."
            intro="Most CRM websites tell you what the software can do. We think it matters just as much what you won't have to do."
          />
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-2 bg-sand text-sm font-semibold">
              <p className="px-4 py-3 text-muted sm:px-5">On your own with most CRMs</p>
              <p className="border-l border-line px-4 py-3 text-ink sm:px-5">With {site.name}</p>
            </div>
            <ul className="divide-y divide-line">
              {notYourJob.map((row) => (
                <li key={row.alone} className="grid grid-cols-2">
                  <p className="flex gap-2.5 px-4 py-4 text-muted sm:px-5">
                    <X aria-hidden className="mt-0.5 size-4 shrink-0 text-muted/70" />
                    <span>{row.alone}</span>
                  </p>
                  <p className="flex gap-2.5 border-l border-line bg-pine-50/40 px-4 py-4 font-medium text-ink sm:px-5">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-pine-600" strokeWidth={3} />
                    <span>{row.withUs}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. How the first week works */}
      <Section tone="sand" id="first-week" labelledBy="week-heading">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="week-heading"
            eyebrow="Your first week"
            title="From first call to up and running in about seven days."
            intro="About four hours of your time across the week. We do the rest, and you always know what's happening next."
          />
          <ButtonLink href="/how-it-works" variant="secondary" track="home-week:how-it-works" arrow>
            The full day-by-day plan
          </ButtonLink>
        </div>
        <WeekTimeline className="mt-14" />
        <p className="mt-12 max-w-3xl rounded-xl bg-white/70 px-5 py-4 text-ink-soft">
          <strong className="font-semibold text-ink">One week is our target for eligible businesses:</strong>{" "}
          mostly one data source, tools on our supported list, and a team that can make time for training.
          If yours needs longer, we&apos;ll give you a dated plan before you sign.
        </p>
      </Section>

      {/* 5. A look at the product */}
      <Section labelledBy="product-heading">
        <SectionHeading
          id="product-heading"
          eyebrow="A look inside"
          title="Simple enough to use from the truck."
          intro="Four screens do most of the work. Here's what each one is for."
        />
        <div className="mt-12">
          <ProductTour
            tabs={[
              {
                id: "today",
                label: "Today",
                title: "Know exactly who to call first",
                body: "Open it in the morning and see overdue follow-ups, quotes to chase and new leads, in the order that matters.",
                points: ["Overdue items first", "New leads flagged", "Tick off as you go"],
                panel: (
                  <AppFrame active="today" label="Product preview: the Today screen with prioritized tasks.">
                    <TodayView />
                  </AppFrame>
                ),
              },
              {
                id: "opportunities",
                label: "Quotes & jobs",
                title: "Every quote and job, at a glance",
                body: "See every open quote by stage, what it's worth and how long it's been waiting. Drag a card when things move.",
                points: ["Your stage names", "Totals per stage", "Stale quotes flagged"],
                panel: (
                  <AppFrame active="pipeline" label="Product preview: a pipeline board of quotes and jobs by stage.">
                    <PipelineView />
                  </AppFrame>
                ),
              },
              {
                id: "customers",
                label: "Customers",
                title: "The whole customer story in one place",
                body: "Calls, quotes, photos, emails and notes on one timeline, so anyone on your team can pick up where the last person left off.",
                points: ["Full history", "Photos and files", "Next step always visible"],
                panel: (
                  <AppFrame active="customers" label="Product preview: a customer record with activity timeline.">
                    <CustomerView />
                  </AppFrame>
                ),
              },
              {
                id: "follow-ups",
                label: "Follow-ups",
                title: "Follow-ups that don't depend on memory",
                body: "Set a reminder in two taps, or let the CRM add them for you, like a check-in when a quote's been quiet for a week.",
                points: ["Automatic nudges", "Yearly reminders", "Message templates"],
                panel: (
                  <AppFrame active="follow-ups" label="Product preview: follow-ups grouped by overdue, today and coming up.">
                    <FollowUpsView />
                  </AppFrame>
                ),
              },
            ]}
          />
        </div>
        <p className="mt-8 text-sm text-muted">Product previews shown with sample data.</p>
      </Section>

      {/* 6. Proof and reassurance */}
      <Section tone="white" labelledBy="proof-heading" className="border-t border-line">
        <SectionHeading
          id="proof-heading"
          eyebrow="What we'll stand behind"
          title="Promises we're willing to put in writing."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-cream p-6">
              <IconBadge tone="ink">
                <c.icon aria-hidden />
              </IconBadge>
              <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{c.body}</p>
              {c.link ? (
                <Link
                  href={c.link.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-700 hover:underline"
                >
                  {c.link.label}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl bg-sand p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-ink">Customer stories, as they happen.</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
              We&apos;re launching with a small group of pilot businesses. Their stories will go
              here—real names, real numbers, shared with their permission. We&apos;d rather show you
              nothing than show you something made up.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/customer-stories" variant="secondary" track="home-proof:stories">
              How we&apos;ll report them
            </ButtonLink>
            <ButtonLink href="/book-a-demo?path=new" track="home-proof:pilot">
              Ask about the pilot
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 7. A simple next step */}
      <CtaBand location="home-cta" />
    </>
  );
}
