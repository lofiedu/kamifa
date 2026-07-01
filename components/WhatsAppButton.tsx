import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

type Props = {
  /** Texto del botón. Por defecto: "Cotizar por WhatsApp". */
  label?: string;
  /** Mensaje contextual prellenado (ej. "...interesado/a en uniformes"). */
  message?: string;
  /** Tamaño visual. */
  size?: "md" | "lg";
  /** Color: "brand" (celeste de marca) o "whatsapp" (verde oficial). */
  variant?: "brand" | "whatsapp";
  className?: string;
};

export function WhatsAppButton({
  label = "Cotizar por WhatsApp",
  message,
  size = "md",
  variant = "brand",
  className = "",
}: Props) {
  const sizeClass =
    size === "lg" ? "text-lg px-7 py-4" : "";
  const variantClass = variant === "whatsapp" ? "btn-whatsapp" : "";
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener"
      className={`btn-primary ${variantClass} ${sizeClass} ${className}`}
    >
      <WhatsAppIcon className="shrink-0" />
      {label}
    </a>
  );
}
