"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Listens for clicks on any element with `data-track="location:name"` and
 * records a cta_click event. Lets CTAs stay server components.
 */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      track("cta_click", {
        id: el.dataset.track,
        label: el.textContent?.trim().slice(0, 80),
        href: el.getAttribute("href") ?? undefined,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
