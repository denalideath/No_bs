/**
 * UI previews built with sample data. All names, addresses and amounts are
 * fictional. Every preview is aria-hidden inside AppFrame, which supplies a
 * text description for screen readers.
 */
import {
  CalendarClock,
  Camera,
  Check,
  FileText,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Repeat,
  UserPlus,
} from "lucide-react";
import { cn } from "@/components/ui";
import { AppFrame } from "@/components/product/app-frame";

type ChipTone = "brand" | "pine" | "amber" | "sky" | "neutral";

const chipTones: Record<ChipTone, string> = {
  brand: "bg-brand-50 text-brand-700",
  pine: "bg-pine-50 text-pine-700",
  amber: "bg-amber-soft text-amber-ink",
  sky: "bg-sky-soft text-sky-ink",
  neutral: "bg-sand text-ink-soft",
};

function Chip({ tone = "neutral", children }: { tone?: ChipTone; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold",
        chipTones[tone],
      )}
    >
      {children}
    </span>
  );
}

function ViewHeader({
  kicker,
  title,
  action = "New",
}: {
  kicker?: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-3 border-b border-line px-4 py-3">
      <div className="min-w-0">
        {kicker ? <p className="text-[11px] text-muted">{kicker}</p> : null}
        <p className="truncate font-display text-[15px] font-bold">{title}</p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-brand-600 px-2.5 py-1 text-[11px] font-semibold text-white">
        <Plus className="size-3" />
        {action}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ Today */

const todayTasks = [
  {
    done: false,
    title: "Call back Marcus Lee",
    meta: "New lead · Website form · 2h ago",
    chip: { tone: "sky" as const, label: "New lead" },
    icon: Phone,
  },
  {
    done: false,
    title: "Chase quote: 1428 Oak St re-roof",
    meta: "Sent 8 days ago · $14,800",
    chip: { tone: "brand" as const, label: "Overdue" },
    icon: FileText,
  },
  {
    done: false,
    title: "Confirm inspection: Patel residence",
    meta: "Tomorrow · 9:00am",
    chip: { tone: "amber" as const, label: "Today" },
    icon: CalendarClock,
  },
  {
    done: true,
    title: "Thank-you text: Rivera gutter repair",
    meta: "Done by Sam · 8:42am",
    chip: { tone: "pine" as const, label: "Done" },
    icon: MessageSquare,
  },
];

export function TodayView() {
  return (
    <>
      <ViewHeader kicker="Tuesday, March 10" title="Good morning, Dana" />
      <div className="grid grid-cols-3 gap-2 border-b border-line px-4 py-3">
        {[
          { n: "3", l: "Overdue follow-ups" },
          { n: "5", l: "Quotes to chase" },
          { n: "2", l: "New leads" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-line bg-[#fbfaf7] px-2.5 py-2">
            <p className="font-display text-lg leading-none font-bold">{s.n}</p>
            <p className="mt-1 text-[10.5px] leading-tight text-muted">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pt-3 pb-4">
        <p className="mb-2 text-[11px] font-semibold tracking-wide text-muted uppercase">
          Do these first
        </p>
        <ul className="space-y-1.5">
          {todayTasks.map((t) => (
            <li
              key={t.title}
              className={cn(
                "flex items-center gap-2.5 rounded-lg border border-line px-2.5 py-2",
                t.done && "bg-[#fbfaf7]",
              )}
            >
              <span
                className={cn(
                  "flex size-4 shrink-0 items-center justify-center rounded border",
                  t.done ? "border-pine-500 bg-pine-500 text-white" : "border-line-strong",
                )}
              >
                {t.done ? <Check className="size-3" strokeWidth={3} /> : null}
              </span>
              <t.icon className="size-3.5 shrink-0 text-muted" />
              <div className="min-w-0 flex-1">
                <p className={cn("truncate font-semibold", t.done && "text-muted line-through")}>
                  {t.title}
                </p>
                <p className="truncate text-[11px] text-muted">{t.meta}</p>
              </div>
              <Chip tone={t.chip.tone}>{t.chip.label}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function TodayMock({ className }: { className?: string }) {
  return (
    <AppFrame
      active="today"
      className={className}
      label="Product preview: the Today screen lists overdue follow-ups, quotes to chase and new leads, in the order to tackle them."
    >
      <TodayView />
    </AppFrame>
  );
}

/* --------------------------------------------------------------- Pipeline */

export type PipelineColumn = {
  name: string;
  cards: { title: string; sub: string; value?: string; flag?: { tone: ChipTone; label: string } }[];
};

export const defaultPipeline: PipelineColumn[] = [
  {
    name: "New lead",
    cards: [
      { title: "Marcus Lee", sub: "Leak over garage", flag: { tone: "sky", label: "2h ago" } },
      { title: "Hannah Brooks", sub: "Storm damage check" },
    ],
  },
  {
    name: "Quote sent",
    cards: [
      {
        title: "1428 Oak St",
        sub: "Full re-roof",
        value: "$14,800",
        flag: { tone: "brand", label: "8 days" },
      },
      { title: "Patel residence", sub: "Gutter replacement", value: "$2,350" },
      { title: "Lakeview Dental", sub: "Flat roof coating", value: "$9,600" },
    ],
  },
  {
    name: "Follow-up",
    cards: [
      {
        title: "Gomez family",
        sub: "Skylight + flashing",
        value: "$3,100",
        flag: { tone: "amber", label: "Call Thu" },
      },
    ],
  },
  {
    name: "Won",
    cards: [
      { title: "Rivera home", sub: "Gutter repair", value: "$890", flag: { tone: "pine", label: "Won" } },
      { title: "Elm Court HOA", sub: "Annual inspection", value: "$4,200", flag: { tone: "pine", label: "Won" } },
    ],
  },
];

function sumValues(cards: PipelineColumn["cards"]) {
  const total = cards.reduce((acc, c) => acc + Number((c.value ?? "0").replace(/[^\d]/g, "")), 0);
  return total > 0 ? `$${total.toLocaleString("en-US")}` : "—";
}

export function PipelineView({ columns = defaultPipeline }: { columns?: PipelineColumn[] }) {
  return (
    <>
      <ViewHeader kicker="Your stages, your words" title="Jobs & quotes" />
      <div className="scrollbar-none overflow-x-auto">
        <div className="flex gap-2.5 p-3" style={{ minWidth: `${columns.length * 168}px` }}>
          {columns.map((col) => (
            <div key={col.name} className="w-full min-w-[158px] flex-1 rounded-lg bg-[#f6f3ed] p-2">
              <div className="mb-2 flex items-baseline justify-between gap-2 px-1">
                <p className="truncate text-[11.5px] font-bold">
                  {col.name}{" "}
                  <span className="font-medium text-muted">{col.cards.length}</span>
                </p>
                <p className="shrink-0 text-[10.5px] text-muted">{sumValues(col.cards)}</p>
              </div>
              <div className="space-y-1.5">
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-md border border-line bg-white p-2 shadow-[0_1px_1px_rgb(20_33_42/0.04)]"
                  >
                    <p className="truncate font-semibold">{card.title}</p>
                    <p className="truncate text-[11px] text-muted">{card.sub}</p>
                    {card.value || card.flag ? (
                      <div className="mt-1.5 flex items-center justify-between gap-1">
                        <span className="text-[11px] font-semibold">{card.value}</span>
                        {card.flag ? <Chip tone={card.flag.tone}>{card.flag.label}</Chip> : null}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function PipelineMock({
  columns,
  className,
  business,
}: {
  columns?: PipelineColumn[];
  className?: string;
  business?: string;
}) {
  const stageNames = (columns ?? defaultPipeline).map((c) => c.name).join(", ");
  return (
    <AppFrame
      active="pipeline"
      business={business}
      className={className}
      label={`Product preview: a pipeline board with the stages ${stageNames}. Each card shows a customer, the job and its value.`}
    >
      <PipelineView columns={columns} />
    </AppFrame>
  );
}

/* -------------------------------------------------------------- Customer */

const timeline = [
  {
    icon: FileText,
    title: "Quote sent: Full re-roof · $14,800",
    meta: "Dana · 8 days ago",
  },
  {
    icon: Phone,
    title: "Call: wants to wait for the insurance adjuster",
    meta: "Sam · 6 days ago",
  },
  {
    icon: Camera,
    title: "Inspection done · 23 photos added",
    meta: "Sam · 10 days ago",
  },
  {
    icon: Globe,
    title: "Lead came in from your website form",
    meta: "Automatic · 12 days ago",
  },
];

export function CustomerView() {
  return (
    <div className="grid sm:grid-cols-[1fr_190px]">
      <div className="min-w-0 border-line sm:border-r">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-800">
            JO
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-[15px] font-bold">Jamie Okafor</p>
            <p className="flex items-center gap-1 truncate text-[11px] text-muted">
              <MapPin className="size-3" /> 1428 Oak St · Homeowner since 2019
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 border-b border-line px-4 py-2.5">
          <Chip tone="pine">Repeat customer</Chip>
          <Chip tone="sky">Referral: Elm Court HOA</Chip>
          <Chip>Insurance claim</Chip>
        </div>
        <div className="px-4 py-3">
          <div className="mb-2.5 flex gap-3 text-[11.5px] font-semibold">
            <span className="border-b-2 border-brand-600 pb-1 text-ink">Activity</span>
            <span className="pb-1 text-muted">Jobs (3)</span>
            <span className="pb-1 text-muted">Files (23)</span>
          </div>
          <ol className="space-y-2.5">
            {timeline.map((item) => (
              <li key={item.title} className="flex gap-2.5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sand text-ink-soft">
                  <item.icon className="size-3" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-[11px] text-muted">{item.meta}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="hidden space-y-2.5 bg-[#fbfaf7] p-3 sm:block">
        <div className="rounded-lg border border-line bg-white p-2.5">
          <p className="text-[10.5px] font-semibold tracking-wide text-muted uppercase">Open quote</p>
          <p className="mt-1 font-semibold">Full re-roof</p>
          <p className="text-[11px] text-muted">Quote sent · $14,800</p>
        </div>
        <div className="rounded-lg border border-brand-200 bg-brand-50 p-2.5">
          <p className="text-[10.5px] font-semibold tracking-wide text-brand-700 uppercase">
            Next follow-up
          </p>
          <p className="mt-1 font-semibold">Thu · 10:00am</p>
          <p className="text-[11px] text-ink-soft">Call about adjuster visit</p>
        </div>
        <div className="space-y-1.5 rounded-lg border border-line bg-white p-2.5 text-[11px] text-ink-soft">
          <p className="flex items-center gap-1.5">
            <Phone className="size-3" /> (555) 010-0187
          </p>
          <p className="flex items-center gap-1.5">
            <Mail className="size-3" /> jamie.o@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

export function CustomerMock({ className }: { className?: string }) {
  return (
    <AppFrame
      active="customers"
      className={className}
      label="Product preview: a customer record showing contact details, tags, an activity timeline of calls, quotes and photos, plus the open quote and next follow-up."
    >
      <CustomerView />
    </AppFrame>
  );
}

/* ------------------------------------------------------------ Follow-ups */

const followUps = [
  {
    group: "Overdue",
    tone: "brand" as const,
    items: [
      { title: "1428 Oak St: check on quote", meta: "Due 2 days ago · Dana" },
      { title: "Lakeview Dental: send revised price", meta: "Due yesterday · Dana" },
    ],
  },
  {
    group: "Today",
    tone: "amber" as const,
    items: [
      { title: "Patel residence: confirm 9am inspection", meta: "Text template ready · Sam" },
      { title: "Hannah Brooks: book a storm check", meta: "New lead · Sam" },
    ],
  },
  {
    group: "Coming up",
    tone: "neutral" as const,
    items: [
      { title: "Spring roof check reminders", meta: "14 past customers · Repeats yearly", repeat: true },
    ],
  },
];

export function FollowUpsView() {
  return (
    <>
      <ViewHeader kicker="Nothing slips" title="Follow-ups" action="Follow-up" />
      <div className="space-y-3 px-4 py-3">
        {followUps.map((g) => (
          <div key={g.group}>
            <div className="mb-1.5 flex items-center gap-2">
              <Chip tone={g.tone}>{g.group}</Chip>
              <span className="text-[11px] text-muted">{g.items.length}</span>
            </div>
            <ul className="space-y-1.5">
              {g.items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2.5 rounded-lg border border-line px-2.5 py-2"
                >
                  <span className="size-4 shrink-0 rounded border border-line-strong" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{item.title}</p>
                    <p className="truncate text-[11px] text-muted">{item.meta}</p>
                  </div>
                  {"repeat" in item && item.repeat ? (
                    <Repeat className="size-3.5 shrink-0 text-pine-600" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function FollowUpsMock({ className }: { className?: string }) {
  return (
    <AppFrame
      active="follow-ups"
      className={className}
      label="Product preview: follow-ups grouped into overdue, today and coming up, including a yearly reminder for past customers."
    >
      <FollowUpsView />
    </AppFrame>
  );
}

/* ----------------------------------------------------------------- Leads */

const leads = [
  { name: "Marcus Lee", note: "Water stain on ceiling after last storm", source: "Website form", icon: Globe, tone: "sky" as const, when: "2h" },
  { name: "Hannah Brooks", note: "Neighbor had theirs done, wants a quote", source: "Referral", icon: UserPlus, tone: "pine" as const, when: "5h" },
  { name: "Cedar Grove Church", note: "Missed call, left a voicemail", source: "Phone", icon: Phone, tone: "amber" as const, when: "1d" },
  { name: "T. Nguyen", note: "Asked about financing options", source: "Email", icon: Mail, tone: "neutral" as const, when: "1d" },
];

export function LeadsView() {
  return (
    <>
      <ViewHeader kicker="Every lead, one inbox" title="New leads" action="Add lead" />
      <ul className="divide-y divide-line">
        {leads.map((l) => (
          <li key={l.name} className="flex items-center gap-3 px-4 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sand text-ink-soft">
              <l.icon className="size-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate font-semibold">{l.name}</p>
                <Chip tone={l.tone}>{l.source}</Chip>
              </div>
              <p className="truncate text-[11px] text-muted">{l.note}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="text-[10.5px] text-muted">{l.when}</span>
              <span className="rounded-md border border-line px-1.5 py-0.5 text-[10.5px] font-semibold">
                Assign
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export function LeadsMock({ className }: { className?: string }) {
  return (
    <AppFrame
      active="leads"
      className={className}
      label="Product preview: a single inbox of new leads from the website, referrals, phone calls and email, each ready to assign."
    >
      <LeadsView />
    </AppFrame>
  );
}

/* --------------------------------------------------------------- Reports */

export function ReportsView() {
  const stats = [
    { n: "38", l: "Leads in" },
    { n: "21", l: "Quotes sent" },
    { n: "9", l: "Jobs won" },
    { n: "$62.4k", l: "Won this month" },
  ];
  const sources = [
    { l: "Website form", n: 14 },
    { l: "Referral", n: 11 },
    { l: "Google search", n: 8 },
    { l: "Door knocking", n: 5 },
  ];
  return (
    <>
      <ViewHeader kicker="March so far" title="How business is going" action="Export" />
      <div className="grid grid-cols-2 gap-2 px-4 py-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="rounded-lg border border-line bg-[#fbfaf7] px-2.5 py-2">
            <p className="font-display text-lg leading-none font-bold">{s.n}</p>
            <p className="mt-1 text-[10.5px] text-muted">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <p className="mb-1.5 text-[11px] font-semibold tracking-wide text-muted uppercase">
          Where leads came from
        </p>
        <table className="w-full text-left">
          <tbody className="divide-y divide-line">
            {sources.map((s) => (
              <tr key={s.l}>
                <td className="py-1.5">{s.l}</td>
                <td className="py-1.5 text-right font-semibold tabular-nums">{s.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function ReportsMock({ className }: { className?: string }) {
  return (
    <AppFrame
      active="reports"
      className={className}
      label="Product preview: a simple monthly summary of leads in, quotes sent, jobs won and where leads came from."
    >
      <ReportsView />
    </AppFrame>
  );
}
