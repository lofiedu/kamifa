import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

type Props = {
  /** Texto del botón. Por defecto: "Cotizar por WhatsApp". */
  label?: string;
  /** Mensaje contextual prellenado (ej. "...interesado/a en uniformes"). */
  message?: string;
  /** Tamaño visual. */
  size?: "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  label = "Cotizar por WhatsApp",
  message,
  size = "md",
  className = "",
}: Props) {
  const sizeClass =
    size === "lg" ? "text-lg px-7 py-4" : "";
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener"
      className={`btn-primary ${sizeClass} ${className}`}
    >
      <WhatsAppIcon className="shrink-0" />
      {label}
    </a>
  );
}
