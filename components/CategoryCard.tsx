import Link from "next/link";
import { ReactNode } from "react";
import { ImageFrame } from "@/components/ImageFrame";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Tarjeta de categoría (las dos del inicio: Empresas / Desde una pieza).
 * Imagen grande de fondo con overlay degradado a --ink para legibilidad del
 * texto blanco. Hover: sube 2px y zoom suave de imagen (§5.4).
 */
export function CategoryCard({
  eyebrow,
  title,
  text,
  linkLabel,
  href,
  imageLabel,
  icon,
}: {
  eyebrow: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
  imageLabel: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[22px] shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      {/* Imagen / placeholder */}
      <div className="overflow-hidden">
        <ImageFrame
          variant="dark"
          aspect="4 / 3.2"
          label={imageLabel}
          icon={icon}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Overlay degradado a --ink para contraste del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/5"
      />

      {/* Contenido */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-brand-100">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-[1.6rem]">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-white/85 sm:text-base">
          {text}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-white transition-[gap] duration-200 group-hover:gap-2.5">
          {linkLabel}
          <ArrowRightIcon className="h-[18px] w-[18px]" />
        </span>
      </div>
    </Link>
  );
}
