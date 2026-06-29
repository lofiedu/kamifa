import { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Encabezado de página interna: eyebrow + H1 + intro. Mucho espacio en blanco.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-18 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-hero font-bold text-ink">{title}</h1>
          {intro && <p className="mt-6 text-lead text-text">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
