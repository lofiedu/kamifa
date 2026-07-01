import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { TrustStrip } from "@/components/TrustStrip";
import { LogoStrip } from "@/components/LogoStrip";
import { CTABand } from "@/components/CTABand";
import { ImageFrame } from "@/components/ImageFrame";
import {
  ArrowRightIcon,
  ScissorsIcon,
  NeedleIcon,
  ShirtIcon,
  TshirtFoldIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Kamifa | Uniformes y confección a la medida en Nicaragua",
  description:
    "Uniformes ejecutivos, bordado corporativo y prendas personalizadas a la medida, desde una sola pieza. Atención directa de la gerencia y entrega en tiempo y forma.",
};

const PRODUCTS = [
  {
    title: "Chaquetas a la medida",
    text: "En distintas telas, confeccionadas y personalizadas.",
    imageLabel: "Chaqueta ejecutiva",
    src: "/assets/img/chaquetas.webp",
    alt: "Chaqueta confeccionada a la medida por Kamifa",
    icon: <ShirtIcon className="h-8 w-8" />,
    message:
      "Hola Kamifa, vi su sitio web y me gustaría cotizar chaquetas a la medida. ",
  },
  {
    title: "Bordados",
    text: "En todo tipo de prenda, desde una pieza.",
    imageLabel: "Bordado corporativo",
    src: "/assets/img/bordados.webp",
    alt: "Prenda con bordado corporativo de Kamifa",
    fit: "contain" as const,
    fitClassName: "bg-brand-50",
    icon: <NeedleIcon className="h-8 w-8" />,
    message: "Hola Kamifa, vi su sitio web y me gustaría cotizar un bordado. ",
  },
  {
    title: "Camisetas personalizadas",
    text: "Varias técnicas y acabados de calidad.",
    imageLabel: "Camiseta personalizada",
    src: "/assets/img/camisetas-personalizadas.webp",
    alt: "Camiseta personalizada confeccionada por Kamifa",
    icon: <TshirtFoldIcon className="h-8 w-8" />,
    message:
      "Hola Kamifa, vi su sitio web y me gustaría cotizar camisetas personalizadas. ",
  },
  {
    title: "Uniformes",
    text: "Ejecutivos y de trabajo, a la medida y con tu bordado.",
    imageLabel: "Uniformes",
    src: "/assets/img/uniformes.webp",
    alt: "Uniforme corporativo confeccionado por Kamifa",
    icon: <ScissorsIcon className="h-8 w-8" />,
    message: "Hola Kamifa, vi su sitio web y me gustaría cotizar uniformes. ",
  },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="bg-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">Confección a la medida · Desde 1998</p>
            <h1 className="mt-4 text-hero font-bold text-ink">
              A la medida de tu empresa.{" "}
              <span className="text-brand">Desde una sola pieza.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lead text-text">
              En Kamifa confeccionamos uniformes ejecutivos, bordados y prendas
              personalizadas con atención directa de la gerencia, medidas
              tomadas en tu lugar de trabajo y entrega en tiempo y forma.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton label="Cotizar ahora" />
              <Link href="/empresas" className="btn-ghost">
                Ver soluciones para empresas
                <ArrowRightIcon className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <ImageFrame
              priority
              aspect="4 / 4.6"
              variant="dark"
              label="Confección Kamifa"
              src="/assets/img/home.webp"
              alt="Polo corporativo confeccionado a la medida por Kamifa"
              icon={<ShirtIcon className="h-10 w-10" />}
              className="rounded-[22px] shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </Container>
      </section>

      {/* ===================== FRANJA DE CLIENTES ===================== */}
      <section className="bg-white">
        <Container className="py-10 lg:py-12">
          <Reveal>
            <LogoStrip />
          </Reveal>
        </Container>
      </section>

      {/* ===================== DOS CAMINOS ===================== */}
      <Section tone="paper">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Dos caminos</p>
          <h2 className="mt-3 text-h2 font-semibold text-ink">
            Elige cómo trabajamos contigo
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <CategoryCard
              eyebrow="Para empresas e instituciones"
              title="Uniformes ejecutivos y bordado corporativo"
              text="Vestimos a tu equipo con prendas a la medida y bordado de tu marca. Visitamos tu empresa, tomamos medidas y cumplimos la entrega acordada."
              linkLabel="Ver soluciones empresariales"
              href="/empresas"
              imageLabel="Uniformes ejecutivos"
              src="/assets/img/empresariales.webp"
              alt="Uniforme corporativo bordado confeccionado por Kamifa"
              icon={<ShirtIcon className="h-9 w-9" />}
            />
          </Reveal>
          <Reveal delay={120}>
            <CategoryCard
              eyebrow="Sin pedido mínimo"
              title="Tu prenda personalizada, desde una sola pieza"
              text="¿Una chaqueta, un bordado o una camiseta? No necesitas comprar en volumen. Hacemos tu prenda a la medida, una por una, con acabados de calidad."
              linkLabel="Ver personalización"
              href="/personalizado"
              imageLabel="Personalización"
              src="/assets/img/prenda-personalizada.webp"
              alt="Camiseta personalizada confeccionada por Kamifa"
              icon={<NeedleIcon className="h-9 w-9" />}
            />
          </Reveal>
        </div>
      </Section>

      {/* ===================== FRANJA DE CONFIANZA ===================== */}
      <Section tone="white">
        <Reveal>
          <TrustStrip />
        </Reveal>
      </Section>

      {/* ===================== PRODUCTOS ===================== */}
      <Section tone="paper">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Lo que confeccionamos</p>
          <h2 className="mt-3 text-h2 font-semibold text-ink">
            Prendas y bordados con acabado de calidad
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <ProductCard {...p} />
            </Reveal>
          ))}
        </div>
        {/* Rango de precio honesto (§6.1) */}
        <Reveal>
          <p className="mt-8 text-sm text-muted">
            Precios desde C$250 hasta C$2,500 por pieza, según prenda, tela y
            técnica.
          </p>
        </Reveal>
      </Section>

      {/* ===================== CTA FINAL ===================== */}
      <CTABand
        title="¿Listo para vestir a tu equipo o crear tu prenda?"
        text="Escríbenos por WhatsApp y te atiende la gerencia directamente."
      />
    </>
  );
}
