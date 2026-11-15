"use client";

import {
  Suspense,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck2, CheckCircle2, Compass, Loader2, Repeat2, Sprout } from "lucide-react";
import { buttonClasses, cn } from "@/components/ui";
import { conversionPaths, isConversionPathId, site, type ConversionPathId } from "@/content/site";
import { track } from "@/lib/analytics";
import { requestDemo } from "./actions";
import {
  currentSystemOptions,
  industryOptions,
  teamSizeOptions,
  type DemoField,
  type DemoFormState,
} from "./options";

const initialState: DemoFormState = { status: "idle" };
const pathIcons = { new: Sprout, switching: Repeat2, comparing: Compass } as const;
const schedulerUrl = process.env.NEXT_PUBLIC_SCHEDULER_URL;

/** Reads ?path= from the URL. Isolated in Suspense so the form itself stays prerendered. */
function PathFromUrl({ onPath }: { onPath: (p: ConversionPathId) => void }) {
  const value = useSearchParams().get("path");
  useEffect(() => {
    if (isConversionPathId(value)) onPath(value);
  }, [value, onPath]);
  return null;
}

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-line-strong bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none aria-[invalid=true]:border-brand-600";

function Field({
  id,
  label,
  optional,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-[0.95rem] font-semibold text-ink">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-muted">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-brand-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function DemoForm() {
  const [state, formAction, pending] = useActionState(requestDemo, initialState);
  const [path, setPath] = useState<ConversionPathId>("new");
  const [currentSystem, setCurrentSystem] = useState("");
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  // Submitting via onSubmit (rather than <form action>) skips React's automatic
  // form reset, so typed values and the chosen path survive a failed submit.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  };

  useEffect(() => {
    if (state.status === "error") errorRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (state.status === "success") {
      track("demo_form_submitted", { path });
      successRef.current?.focus();
    }
    // `path` intentionally excluded: only fire once per successful submit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const choosePath = (p: ConversionPathId) => {
    setPath(p);
    track("demo_path_selected", { path: p });
  };

  const onFirstInteraction = () => {
    if (started.current) return;
    started.current = true;
    track("demo_form_started", { path });
  };

  const err = (f: DemoField) => state.errors?.[f];
  const a11y = (f: DemoField) => ({
    "aria-invalid": err(f) ? true : undefined,
    "aria-describedby": err(f) ? `${f}-error` : undefined,
  });

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl border border-line bg-white p-6 shadow-float outline-none sm:p-10"
      >
        <CheckCircle2 aria-hidden className="size-12 text-pine-600" />
        <h2 className="mt-4 text-3xl font-bold text-ink">Thanks, {state.firstName}. You&apos;re in.</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          A real person will be in touch within one business day to find a time that suits you.
        </p>
        <ol className="mt-8 space-y-4">
          {[
            "We'll email you to pick a time for your 30-minute working session.",
            "Before the call, we'll look at what you told us about your business.",
            "On the call, you'll see the CRM set up for your kind of work, and get a straight answer on timeline and price.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sand font-display text-sm font-bold text-ink">
                {i + 1}
              </span>
              <span className="pt-0.5 text-ink-soft">{step}</span>
            </li>
          ))}
        </ol>
        {schedulerUrl ? (
          <a
            href={schedulerUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="demo-success:scheduler"
            className={buttonClasses({ size: "lg", className: "mt-8 w-full sm:w-auto" })}
          >
            <CalendarCheck2 aria-hidden className="size-5" />
            Pick a time now
          </a>
        ) : null}
        <p className="mt-8 text-sm text-muted">
          Can&apos;t wait? Call {site.phone}, {site.supportHours}.
        </p>
      </div>
    );
  }

  const showCrmField = currentSystem === "crm" || path === "switching";

  return (
    <form
      onSubmit={onSubmit}
      onFocusCapture={onFirstInteraction}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 shadow-float sm:p-8"
    >
      <Suspense fallback={null}>
        <PathFromUrl onPath={setPath} />
      </Suspense>

      {state.status === "error" && state.message ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 font-medium text-brand-800 outline-none"
        >
          {state.message}
        </div>
      ) : null}

      <fieldset>
        <legend className="font-display text-xl font-bold text-ink">Where are you starting from?</legend>
        <div className="mt-4 grid gap-3">
          {conversionPaths.map((p) => {
            const Icon = pathIcons[p.id];
            const checked = path === p.id;
            return (
              <label
                key={p.id}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors",
                  checked
                    ? "border-brand-600 bg-brand-50 ring-1 ring-brand-600"
                    : "border-line hover:border-line-strong",
                )}
              >
                <input
                  type="radio"
                  name="path"
                  value={p.id}
                  checked={checked}
                  onChange={() => choosePath(p.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    checked ? "bg-brand-600 text-white" : "bg-sand text-ink-soft",
                  )}
                >
                  <Icon aria-hidden className="size-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{p.audience}</span>
                  <span className="block text-sm text-ink-soft">{p.offer}</span>
                </span>
              </label>
            );
          })}
        </div>
        {err("path") ? <p className="mt-2 text-sm font-medium text-brand-700">{err("path")}</p> : null}
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={err("name")}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={inputClass}
            {...a11y("name")}
          />
        </Field>
        <Field id="business" label="Business name" error={err("business")}>
          <input
            id="business"
            name="business"
            autoComplete="organization"
            required
            className={inputClass}
            {...a11y("business")}
          />
        </Field>
        <Field id="email" label="Email" error={err("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            {...a11y("email")}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={err("phone")}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...a11y("phone")}
          />
        </Field>
        <Field id="industry" label="Your trade" error={err("industry")}>
          <select
            id="industry"
            name="industry"
            required
            defaultValue=""
            className={inputClass}
            {...a11y("industry")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {industryOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="teamSize" label="Team size" error={err("teamSize")}>
          <select
            id="teamSize"
            name="teamSize"
            required
            defaultValue=""
            className={inputClass}
            {...a11y("teamSize")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {teamSizeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field
          id="currentSystem"
          label="Where does your customer info live today?"
          error={err("currentSystem")}
          className="sm:col-span-2"
        >
          <select
            id="currentSystem"
            name="currentSystem"
            required
            value={currentSystem}
            onChange={(e) => setCurrentSystem(e.target.value)}
            className={inputClass}
            {...a11y("currentSystem")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {currentSystemOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        {showCrmField ? (
          <Field id="currentCrm" label="Which CRM do you use now?" optional className="sm:col-span-2">
            <input
              id="currentCrm"
              name="currentCrm"
              className={inputClass}
            />
          </Field>
        ) : null}
        <Field
          id="headache"
          label="What's the biggest headache right now?"
          optional
          className="sm:col-span-2"
        >
          <textarea
            id="headache"
            name="headache"
            rows={3}
            placeholder="e.g. Quotes go out and nobody follows up"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Honeypot for bots. Hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={buttonClasses({ size: "lg", className: "mt-8 w-full" })}
      >
        {pending ? <Loader2 aria-hidden className="size-5 animate-spin" /> : null}
        {pending ? "Sending…" : "Request my working session"}
      </button>
      <p className="mt-4 text-center text-sm text-muted">
        We&apos;ll only use this to set up your call. No newsletters, no passing it on.
      </p>
    </form>
  );
}
