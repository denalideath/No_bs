"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { ctas, mainNav, site } from "@/content/site";
import { buttonClasses } from "@/components/ui";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex size-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
      >
        {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-cream"
        >
          <nav aria-label="Mobile" className="px-4 pt-4 pb-10">
            <ul className="divide-y divide-line">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-4 text-lg font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/customer-stories"
                  onClick={close}
                  className="block py-4 text-lg font-semibold text-ink"
                >
                  Customer stories
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Link
                href={ctas.primary.href}
                onClick={close}
                data-track="mobile-nav:primary"
                className={buttonClasses({ size: "lg", className: "w-full" })}
              >
                {ctas.primary.label}
              </Link>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className={buttonClasses({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full",
                })}
              >
                <Phone className="size-4" aria-hidden />
                Call a person: {site.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
