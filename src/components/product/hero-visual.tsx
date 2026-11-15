import { CheckCircle2 } from "lucide-react";
import { TodayMock } from "@/components/product/mocks";

/**
 * Homepage hero composition: the product, plus the two things competitors
 * don't show—a named person running your launch, and your data already moved.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl pt-6 pb-16 sm:pb-20 lg:mr-0 lg:pl-6">
      <TodayMock />

      {/* Launch lead card */}
      <div
        aria-hidden
        className="absolute -bottom-1 left-0 w-[16.5rem] rounded-2xl border border-line bg-white p-4 shadow-float sm:-left-4 lg:-left-6"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-pine-100 font-display font-bold text-pine-700">
            JR
          </span>
          <div className="min-w-0">
            <p className="text-sm leading-tight font-bold text-ink">Jordan, your launch lead</p>
            <p className="text-xs text-muted">Day 3 of 7 · Moving your data</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand">
          <div className="h-full w-[62%] rounded-full bg-pine-500" />
        </div>
        <p className="mt-2 text-xs text-ink-soft">
          &ldquo;Sample&apos;s ready for you to check. Takes about 20 minutes.&rdquo;
        </p>
      </div>

      {/* Import toast */}
      <div
        aria-hidden
        className="absolute top-0 right-2 flex items-center gap-2 rounded-full border border-pine-100 bg-white py-2 pr-4 pl-2.5 text-sm font-semibold text-ink shadow-float sm:-right-3"
      >
        <CheckCircle2 className="size-5 text-pine-600" />
        1,240 customers moved over
      </div>
      <p className="sr-only">
        Illustration: your launch lead, Jordan, is on day 3 of 7, moving your
        customer data over. 1,240 customers have been imported.
      </p>
    </div>
  );
}
