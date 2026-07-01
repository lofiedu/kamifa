import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/site";
import { InstagramIcon, MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="container-kamifa py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Image
              src="/assets/logo-kamifa.webp"
              alt="Kamifa"
              width={560}
              height={220}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-sm text-text">
              Confección a la medida desde {SITE.foundedYear}. Uniformes,
              bordado corporativo y prendas personalizadas, desde una sola pieza.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Pie de página">
            <p className="eyebrow mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <p className="eyebrow mb-4">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 text-text transition-colors hover:text-brand-700"
                >
                  <InstagramIcon className="h-5 w-5 text-brand-700" />
                  {SITE.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-text transition-colors hover:text-brand-700"
                >
                  <MailIcon className="h-5 w-5 text-brand-700" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="stitch-divider my-10" />

        <div className="flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} Kamifa. Confección a la medida en Nicaragua.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.volcanolabs.agency/"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-brand-700"
            >
              Volcano Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
