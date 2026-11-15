import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/content/site";
import { DemoForm } from "./demo-form";

export const metadata: Metadata = {
  title: "Book a demo: a short working session about your business",
  description:
    "Book a 30-minute working session. Tell us how your business runs and see the CRM set up for it, with a straight answer on timeline and price.",
};

const agenda = [
  {
    time: "10 min",
    title: "How you work",
    body: "How leads come in, how you quote, who does what, and where things slip.",
  },
  {
    time: "15 min",
    title: "Your CRM, your way",
    body: "We show you the CRM set up for your kind of work, not a generic tour.",
  },
  {
    time: "5 min",
    title: "A straight answer",
    body: "Which plan fits, what your launch would cost, and how long it would really take.",
  },
];

export default function BookDemoPage() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
      />
      <Container className="relative grid gap-12 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div>
          <Eyebrow className="mb-4">Book a demo</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-bold text-ink sm:text-5xl">
            A short working session about your business.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            30 minutes with someone who&apos;ll ask how you run things, then show you how the CRM
            would fit. Not a canned product tour.
          </p>

          <h2 className="mt-10 font-display text-lg font-bold text-ink">What we&apos;ll cover</h2>
          <ol className="mt-4 space-y-4">
            {agenda.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">
                    {item.title} <span className="font-normal text-muted">· {item.time}</span>
                  </p>
                  <p className="mt-0.5 text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-line bg-white p-5">
            <p className="font-semibold text-ink">Rather just talk to someone?</p>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 font-display text-xl font-bold text-brand-700 hover:underline"
            >
              <Phone aria-hidden className="size-5" />
              {site.phone}
            </a>
            <p className="mt-1 text-sm text-muted">{site.supportHours}. A person picks up.</p>
          </div>
        </div>

        <div className="min-w-0">
          <DemoForm />
        </div>
      </Container>
    </section>
  );
}
