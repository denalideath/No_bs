"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/components/ui";

export type TourTab = {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  panel: ReactNode;
};

/**
 * Tabbed walkthrough of the product. Panels are server-rendered previews
 * passed in as props; this component only handles switching between them.
 */
export function ProductTour({ tabs }: { tabs: TourTab[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select(active + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0);
    } else if (e.key === "End") {
      e.preventDefault();
      select(tabs.length - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
      <div className="min-w-0">
        <div
          role="tablist"
          aria-label="Product walkthrough"
          aria-orientation="vertical"
          className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
        >
          {tabs.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  "shrink-0 rounded-xl border text-left transition-colors lg:w-full",
                  selected
                    ? "border-brand-200 bg-white shadow-card"
                    : "border-transparent hover:bg-white/60",
                )}
              >
                <span className="flex items-center gap-3 px-4 py-3 lg:px-5 lg:py-4">
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      selected ? "bg-brand-600 text-white" : "bg-sand-deep text-ink-soft",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="font-display text-base font-bold whitespace-nowrap text-ink lg:text-lg">
                    {tab.label}
                  </span>
                </span>
                {selected ? (
                  <span className="hidden px-5 pb-5 lg:block">
                    <span className="block text-ink-soft">{tab.body}</span>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="min-w-0 focus-visible:outline-offset-8"
        >
          <h3 className="font-display text-2xl font-bold text-ink">{tab.title}</h3>
          <p className="mt-2 text-ink-soft lg:hidden">{tab.body}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-soft">
            {tab.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-500" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">{tab.panel}</div>
        </div>
      ))}
    </div>
  );
}
