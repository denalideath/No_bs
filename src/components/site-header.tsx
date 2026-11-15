import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks, NavLinksFallback } from "@/components/nav-links";
import { ButtonLink } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/95">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          <Suspense fallback={<NavLinksFallback />}>
            <NavLinks />
          </Suspense>
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink
            href="/book-a-demo"
            size="md"
            track="header:book-demo"
            className="hidden min-[360px]:inline-flex"
          >
            Book a demo
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
