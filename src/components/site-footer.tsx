import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { footerNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo invert />
            <p className="mt-4 text-white/70">
              The CRM for service businesses, set up with you—not left to you.
            </p>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/15"
            >
              <Phone aria-hidden className="size-4" />
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-white/60">
              A real person answers. {site.supportHours}.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h2 className="font-sans text-sm font-semibold tracking-normal text-white/60">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/85 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>{site.supportLine}</p>
        </div>
      </Container>
    </footer>
  );
}
