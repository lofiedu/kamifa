import { ReactNode } from "react";
import { ImageFrame } from "@/components/ImageFrame";

/**
 * Tarjeta de producto (rejilla breve del inicio). Imagen arriba + título + 1 línea.
 */
export function ProductCard({
  title,
  text,
  imageLabel,
  icon,
}: {
  title: string;
  text: string;
  imageLabel: string;
  icon?: ReactNode;
}) {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-hairline bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5">
      <div className="overflow-hidden">
        <ImageFrame
          aspect="4 / 3"
          label={imageLabel}
          icon={icon}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm text-text">{text}</p>
      </div>
    </article>
  );
}
