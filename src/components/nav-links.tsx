"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/site";
import { cn } from "@/components/ui";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors hover:bg-ink/5 hover:text-ink";

/** Desktop navigation with active-page highlighting. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {mainNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(linkClass, active ? "bg-ink/5 text-ink" : "text-ink-soft")}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

/** Static fallback rendered while the pathname is unknown (no active state). */
export function NavLinksFallback() {
  return (
    <>
      {mainNav.map((item) => (
        <Link key={item.href} href={item.href} className={cn(linkClass, "text-ink-soft")}>
          {item.label}
        </Link>
      ))}
    </>
  );
}
