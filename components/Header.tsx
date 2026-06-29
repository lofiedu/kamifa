"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Sombra muy sutil al hacer scroll (§4 navegación)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <div className="container-kamifa flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Kamifa — inicio">
          {/* TODO(cliente): sustituir por el logo real en /public/assets/logo-kamifa.svg */}
          <Image
            src="/assets/logo-kamifa.svg"
            alt="Kamifa"
            width={132}
            height={40}
            priority
            unoptimized
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        {/* Navegación desktop */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.95rem] font-medium transition-colors hover:text-brand-700 ${
                  active ? "text-brand-700" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA WhatsApp — siempre visible, también en móvil */}
          <WhatsAppButton
            label="Cotizar por WhatsApp"
            className="!px-4 !py-2.5 text-sm sm:!px-5"
          />

          {/* Hamburguesa (solo móvil/tablet) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink lg:hidden"
          >
            <span className="sr-only">Menú</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Principal (móvil)"
          className="border-t border-hairline bg-white lg:hidden"
        >
          <ul className="container-kamifa flex flex-col py-2">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-base font-medium ${
                      active ? "text-brand-700" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-2 text-sm text-muted">
              IG {SITE.instagram.handle}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
