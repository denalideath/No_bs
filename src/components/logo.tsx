import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/components/ui";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="32" height="32" rx="9" fill="#c2470f" />
      <path
        d="M9 16.5l4.5 4.5L23 11.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} home`}
    >
      <LogoMark />
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight",
          invert ? "text-white" : "text-ink",
        )}
      >
        {site.name}
      </span>
    </Link>
  );
}
