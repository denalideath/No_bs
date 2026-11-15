import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

/** Joins class names; later Tailwind classes override earlier conflicting ones. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type Tone = "cream" | "sand" | "white" | "ink";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  white: "bg-white",
  ink: "bg-ink text-white",
};

export function Section({
  id,
  tone = "cream",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-24", toneClasses[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.08em] text-brand-700",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={cn("mb-3", invert && "text-brand-200")}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            invert ? "text-white/75" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  secondary:
    "border border-line-strong bg-white text-ink hover:border-ink/40 hover:bg-cream",
  ghost: "text-ink hover:bg-ink/5",
  inverse: "bg-white text-ink hover:bg-brand-50",
};

const buttonSizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
}

/**
 * A link styled as a button. `track` adds a data attribute that the
 * AnalyticsListener picks up, so CTAs stay server components.
 */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  track,
  arrow = false,
  ...rest
}: Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  track?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={buttonClasses({ variant, size, className })}
      data-track={track}
      {...rest}
    >
      {children}
      {arrow ? <ArrowRight aria-hidden className="size-4" /> : null}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  track,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  track?: string;
}) {
  return (
    <Link
      href={href}
      data-track={track}
      className={cn(
        "group inline-flex items-center gap-1.5 font-semibold text-brand-700 underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export function CheckList({
  items,
  className,
  invert = false,
}: {
  items: ReactNode[];
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              invert ? "bg-white/15 text-white" : "bg-pine-100 text-pine-700",
            )}
          >
            <Check aria-hidden className="size-3.5" strokeWidth={3} />
          </span>
          <span className={invert ? "text-white/85" : "text-ink-soft"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "pine" | "ink";
  className?: string;
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700 ring-brand-100",
    pine: "bg-pine-50 text-pine-700 ring-pine-100",
    ink: "bg-ink text-white ring-ink",
  } as const;
  return (
    <span
      className={cn(
        "flex size-11 items-center justify-center rounded-xl ring-1 [&>svg]:size-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "pine" | "amber" | "sky";
  className?: string;
}) {
  const tones = {
    neutral: "bg-sand text-ink-soft",
    brand: "bg-brand-50 text-brand-700",
    pine: "bg-pine-50 text-pine-700",
    amber: "bg-amber-soft text-amber-ink",
    sky: "bg-sky-soft text-sky-ink",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
