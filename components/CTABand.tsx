import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";

/**
 * Franja de cierre con CTA primario de WhatsApp. Reutilizable en todas las
 * páginas. La acción principal del sitio siempre vuelve a WhatsApp.
 */
export function CTABand({
  title,
  text,
  buttonLabel = "Cotizar por WhatsApp",
  message,
}: {
  title: string;
  text: string;
  buttonLabel?: string;
  message?: string;
}) {
  return (
    <Section tone="brand">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-h2 font-semibold text-ink">{title}</h2>
        <p className="mt-4 text-lead text-text">{text}</p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label={buttonLabel} message={message} size="lg" />
        </div>
      </Reveal>
    </Section>
  );
}
