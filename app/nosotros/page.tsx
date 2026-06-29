import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Sobre Kamifa | Confección con pasión desde 1998",
  description:
    "Kamifa nació en 1998 de la mano de Gladys Fonseca. Hoy confeccionamos uniformes ejecutivos y prendas personalizadas con honestidad, puntualidad y respeto.",
};

const VALORES = [
  {
    title: "Honestidad",
    text: "Cumplimos lo que prometemos, sin engaños al cliente.",
  },
  {
    title: "Puntualidad",
    text: "Entregamos en tiempo y forma, en la fecha acordada.",
  },
  {
    title: "Respeto",
    text: "Atención cercana y trato directo con cada cliente.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Confección con pasión desde 1998"
        intro="Kamifa nació en 1998 de la mano de su propietaria, Gladys Fonseca, con el objetivo de llevar productos a los hogares nicaragüenses: cojines, sets de baño, ropa de cama y más. Con el tiempo evolucionamos hacia la confección de uniformes ejecutivos y prendas personalizadas para empresas y personas."
      />

      {/* Misión + Filosofía */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Nuestra misión</p>
            <p className="mt-4 text-lead text-text">
              Ofrecer productos y atención personalizada a nuestros clientes,
              garantizando prendas duraderas y una experiencia que invite a
              volver y recomendar.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Filosofía de trabajo</p>
            <p className="mt-4 text-lead text-text">
              Cumplimos la entrega de los productos en tiempo y forma, sin
              engaños al cliente.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Valores */}
      <Section tone="white">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Nuestros valores</p>
          <h2 className="mt-3 text-h2 font-semibold text-ink">
            Honestidad · Puntualidad · Respeto
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {VALORES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="rounded-[14px] border border-hairline bg-white p-7 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-xl font-semibold text-brand-700">
                  {v.title}
                </h3>
                <p className="mt-2 text-text">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Trabajemos juntos en tu próximo proyecto"
        text="Ya sea para tu empresa o una sola prenda, te atiende la gerencia directamente por WhatsApp."
      />
    </>
  );
}
