import type { ReactNode } from "react";
import {
  BarChart3,
  Bell,
  CalendarCheck,
  Inbox,
  KanbanSquare,
  Search,
  Sun,
  Users,
} from "lucide-react";
import { cn } from "@/components/ui";
import { LogoMark } from "@/components/logo";

export type AppView =
  | "today"
  | "leads"
  | "pipeline"
  | "customers"
  | "follow-ups"
  | "reports";

const navItems: { id: AppView; label: string; icon: typeof Sun }[] = [
  { id: "today", label: "Today", icon: Sun },
  { id: "leads", label: "Leads", icon: Inbox },
  { id: "pipeline", label: "Pipeline", icon: KanbanSquare },
  { id: "customers", label: "Customers", icon: Users },
  { id: "follow-ups", label: "Follow-ups", icon: CalendarCheck },
  { id: "reports", label: "Reports", icon: BarChart3 },
];

/**
 * Product chrome used around every UI preview. These previews are built in
 * code with sample data so they stay crisp; swap in real screenshots later
 * if you prefer.
 */
export function AppFrame({
  active,
  children,
  className,
  label,
  business = "Whitfield Roofing",
}: {
  active: AppView;
  children: ReactNode;
  className?: string;
  label: string;
  business?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong/70 bg-white text-[13px] text-ink shadow-float",
        className,
      )}
    >
      <figcaption className="sr-only">{label}</figcaption>
      <div aria-hidden className="flex items-center gap-3 border-b border-line bg-[#fbfaf7] px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#e8dfd0]" />
          <span className="size-2.5 rounded-full bg-[#e8dfd0]" />
          <span className="size-2.5 rounded-full bg-[#e8dfd0]" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md border border-line bg-white px-2.5 py-1 text-[11px] text-muted">
          <Search className="size-3" />
          Search customers, jobs, quotes…
        </div>
        <Bell className="size-3.5 text-muted" />
        <span className="flex size-6 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
          DW
        </span>
      </div>
      <div aria-hidden className="flex min-h-0">
        <nav className="hidden w-40 shrink-0 flex-col gap-0.5 border-r border-line bg-[#fbfaf7] p-2.5 sm:flex">
          <div className="mb-2 flex items-center gap-2 px-2 py-1">
            <LogoMark className="size-5" />
            <span className="truncate text-[12px] font-bold">{business}</span>
          </div>
          {navItems.map(({ id, label, icon: Icon }) => (
            <span
              key={id}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium",
                id === active ? "bg-brand-50 text-brand-700" : "text-ink-soft",
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </span>
          ))}
        </nav>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </figure>
  );
}
