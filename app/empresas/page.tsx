import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CheckList } from "@/components/CheckList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTABand } from "@/components/CTABand";
import { ImageFrame } from "@/components/ImageFrame";
import { ShirtIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Uniformes ejecutivos y bordado corporativo",
  description:
    "Uniformes ejecutivos, camisas, pantalones y chaquetas a la medida, además de bordado corporativo. Te atiende directamente la gerencia, sin intermediarios.",
};

// Mensaje de WhatsApp prellenado con contexto empresarial
const MSG_EMPRESA =
  "Hola Kamifa, vi su sitio web y me gustaría cotizar uniformes para mi empresa. ";

const OFRECEMOS = [
  "Uniformes ejecutivos a la medida",
  "Camisas y pantalones con acabado industrial",
  "Chaquetas en distintas telas, personalizadas",
  "Bordado corporativo (logo de tu empresa) en cualquier prenda",
];

const POR_QUE = [
  "Atención personalizada de la gerente general, sin vendedores.",
  "Visitamos tu empresa y tomamos medidas en el lugar de trabajo.",
  "Cumplimiento de entrega en tiempo y forma.",
  "Flexibilidad: desde una pieza hasta el equipo completo.",
];

export default function EmpresasPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones empresariales"
        title="Uniformes y prendas corporativas a la medida de tu empresa"
        intro="Vestimos a equipos de empresas e instituciones con uniformes ejecutivos, camisas, pantalones y chaquetas confeccionados a la medida, además de bordado con la identidad de tu marca. Te atiende directamente la gerencia, sin intermediarios."
      >
        <WhatsAppButton
          label="Solicita una cotización"
          message={MSG_EMPRESA}
          size="lg"
        />
      </PageHero>

      {/* Qué ofrecemos + Por qué nos eligen */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2 font-semibold text-ink">Qué ofrecemos</h2>
            <CheckList items={OFRECEMOS} className="mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-h2 font-semibold text-ink">
              Por qué las empresas nos eligen
            </h2>
            <CheckList items={POR_QUE} className="mt-6" />
          </Reveal>
        </div>
      </Section>

      {/* Imagen editorial */}
      <Section tone="white">
        <Reveal>
          <ImageFrame
            aspect="16 / 7"
            variant="dark"
            label="Equipo uniformado a la medida"
            src="/assets/img/empresas.jpg"
            alt="Uniformes corporativos a la medida confeccionados por Kamifa"
            icon={<ShirtIcon className="h-10 w-10" />}
            className="rounded-[22px] shadow-[var(--shadow-card)]"
          />
        </Reveal>
      </Section>

      {/* Proceso */}
      <Section tone="paper">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="mt-3 text-h2 font-semibold text-ink">
            Un proceso claro, de la visita a la entrega
          </h2>
        </Reveal>
        <Reveal>
          <ProcessSteps />
        </Reveal>
      </Section>

      <CTABand
        title="Solicita una cotización para tu empresa"
        text="Cuéntanos cuántas personas son y qué prendas necesitas. Te atiende la gerencia directamente por WhatsApp."
        buttonLabel="Cotizar para mi empresa"
        message={MSG_EMPRESA}
      />
    </>
  );
}
