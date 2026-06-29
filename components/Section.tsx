import { ReactNode } from "react";
import { Container } from "@/components/Container";

type Tone = "white" | "paper" | "brand";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  paper: "bg-paper",
  brand: "bg-brand-50",
};

/**
 * Sección con respiración generosa (padding-block ~6rem en desktop) y un
 * contenedor centrado. Alterna fondos con `tone` para dar ritmo (§5.3).
 */
export function Section({
  tone = "white",
  className = "",
  containerClassName = "",
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
