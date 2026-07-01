import { ReactNode } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ImageFrame } from "@/components/ImageFrame";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Tarjeta de producto alta, estilo "categorías": imagen full-bleed con overlay,
 * título abajo a la izquierda y, al hacer hover/focus, se revela una descripción
 * y un botón circular con flecha (abajo a la derecha).
 *
 * En pantallas táctiles (sin hover) la descripción y la flecha se muestran
 * siempre, para no esconder información.
 *
 * Cada tarjeta abre WhatsApp con el producto en el mensaje (CTA del sitio).
 */
export function ProductCard({
  title,
  text,
  imageLabel,
  icon,
  message,
  src,
  alt,
  fit,
  fitClassName,
}: {
  title: string;
  text: string;
  imageLabel: string;
  icon?: ReactNode;
  message?: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  fitClassName?: string;
}) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener"
      aria-label={`${title} — cotizar por WhatsApp`}
      className="group relative block overflow-hidden rounded-[18px] shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      {/* Imagen / placeholder */}
      <ImageFrame
        variant="dark"
        aspect="3 / 4"
        label={imageLabel}
        icon={icon}
        src={src}
        alt={alt ?? imageLabel}
        fit={fit}
        fitClassName={fitClassName}
        className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      {/* Overlay degradado a --ink para contraste */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent"
      />

      {/* Contenido */}
      <div className="absolute inset-x-0 bottom-0 p-5 pr-16 sm:p-6 sm:pr-16 text-white">
        <h3 className="font-display text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 max-h-24 overflow-hidden text-sm text-white/85 transition-all duration-300 ease-out lg:max-h-0 lg:translate-y-1 lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-24 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
          {text}
        </p>
      </div>

      {/* Botón circular con flecha */}
      <span
        aria-hidden="true"
        className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-[var(--shadow-soft)] transition-all duration-300 ease-out group-hover:bg-brand-600 lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100"
      >
        <ArrowRightIcon className="h-[18px] w-[18px]" />
      </span>
    </a>
  );
}
