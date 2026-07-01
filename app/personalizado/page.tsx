import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CheckList } from "@/components/CheckList";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTABand } from "@/components/CTABand";
import { ImageFrame } from "@/components/ImageFrame";
import { NeedleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Prendas personalizadas desde una pieza",
  description:
    "No necesitas comprar en volumen. Confeccionamos y personalizamos prenda por prenda: chaquetas, bordados, camisetas y camisas a tu medida, con acabados de calidad.",
};

const MSG_PIEZA =
  "Hola Kamifa, vi su sitio web y me gustaría cotizar una prenda personalizada. Quiero: ";

const QUE_PEDIR = [
  "Bordado en cualquier prenda de vestir",
  "Camisetas personalizadas en varias técnicas",
  "Chaquetas confeccionadas a tu medida",
  "Camisas y pantalones a la medida",
];

export default function PersonalizadoPage() {
  return (
    <>
      <PageHero
        eyebrow="Sin pedido mínimo"
        title="Tu prenda personalizada, desde una sola pieza"
        intro="No necesitas comprar en volumen. En Kamifa confeccionamos y personalizamos prenda por prenda: una chaqueta, un bordado, una camiseta o una camisa a tu medida, con acabados de calidad y atención personal."
      >
        <WhatsAppButton
          label="Cuéntanos qué quieres crear"
          message={MSG_PIEZA}
          size="lg"
        />
      </PageHero>

      {/* Qué puedes pedir + imagen */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2 font-semibold text-ink">
              Qué puedes pedir desde una pieza
            </h2>
            <CheckList items={QUE_PEDIR} className="mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <ImageFrame
              aspect="4 / 4.6"
              variant="dark"
              label="Prenda personalizada"
              src="/assets/img/una-pieza.png"
              alt="Prendas confeccionadas a la medida por Kamifa"
              icon={<NeedleIcon className="h-10 w-10" />}
              className="rounded-[22px] shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Cómo trabajamos */}
      <Section tone="white">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Cómo trabajamos contigo</p>
          <h2 className="mt-3 text-h2 font-semibold text-ink">
            Atención directa para que la prenda quede exacta
          </h2>
          <p className="mt-5 text-lead text-text">
            Atención directa, asesoría en tela y técnica, y toma de medidas para
            que la prenda quede exacta.
          </p>
          <p className="mt-6 text-sm text-muted">
            Precio: desde C$250 hasta C$2,500 por pieza, según prenda, tela y
            técnica.
          </p>
        </Reveal>
      </Section>

      <CTABand
        title="Cuéntanos qué quieres crear"
        text="Escríbenos por WhatsApp con tu idea y te asesoramos en tela, técnica y medidas."
        buttonLabel="Crear mi prenda por WhatsApp"
        message={MSG_PIEZA}
      />
    </>
  );
}
