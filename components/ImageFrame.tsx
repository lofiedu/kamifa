import { ReactNode } from "react";

/**
 * Marco de imagen con proporción fija.
 *
 * Por ahora renderiza un PLACEHOLDER de marca (gradiente celeste + etiqueta +
 * guiño de puntada) para evitar imágenes rotas. Cuando el cliente entregue las
 * fotos reales, pasar `src` (ruta en /assets/img/...) y se usará <img> con
 * width/height y loading="lazy" — sin layout shift.
 *
 * TODO(cliente): sustituir placeholders por fotos reales en /public/assets/img/.
 */
export function ImageFrame({
  label,
  aspect = "4 / 3",
  variant = "light",
  icon,
  src,
  alt,
  priority = false,
  fit = "cover",
  fitClassName = "",
  className = "",
}: {
  label?: string;
  aspect?: string;
  variant?: "light" | "dark";
  icon?: ReactNode;
  src?: string;
  alt?: string;
  priority?: boolean;
  /** Ajuste de la imagen dentro del marco. "contain" evita recortes. */
  fit?: "cover" | "contain";
  /** Clases extra para el contenedor cuando se usa "contain" (p. ej. fondo). */
  fitClassName?: string;
  className?: string;
}) {
  const dark = variant === "dark";

  if (src) {
    // "cover": la imagen llena el marco (puede recortar).
    if (fit !== "contain") {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          className={`block h-full w-full object-cover ${className}`}
          style={{ aspectRatio: aspect }}
        />
      );
    }

    // "contain": el marco mantiene la proporción fija y la imagen entra
    // completa, sin recortes (con fondo opcional vía fitClassName).
    return (
      <div
        className={`flex items-center justify-center overflow-hidden ${fitClassName} ${className}`}
        style={{ aspectRatio: aspect }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          className="block h-full w-full scale-[1.15] object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        dark
          ? "bg-gradient-to-br from-brand-600 to-brand-ink"
          : "bg-gradient-to-br from-brand-25 to-brand-100"
      } ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={alt ?? label ?? "Imagen de Kamifa (placeholder)"}
    >
      {/* Marco de puntada (guiño textil) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-3 rounded-[14px] border border-dashed ${
          dark ? "border-white/25" : "border-brand-200"
        }`}
      />
      <span
        className={`relative flex flex-col items-center gap-2 px-4 text-center ${
          dark ? "text-white/85" : "text-brand-700"
        }`}
      >
        {icon}
        {label && (
          <span className="text-xs font-semibold uppercase tracking-[0.12em]">
            {label}
          </span>
        )}
      </span>
    </div>
  );
}
