const STEPS = [
  {
    n: 1,
    title: "Visitamos",
    text: "Vamos a tu empresa para entender la necesidad.",
  },
  {
    n: 2,
    title: "Tomamos medidas",
    text: "En el lugar de trabajo de tu equipo.",
  },
  {
    n: 3,
    title: "Confeccionamos",
    text: "A la medida, con la tela y el bordado que elijas.",
  },
  {
    n: 4,
    title: "Entregamos",
    text: "En la fecha acordada, en tiempo y forma.",
  },
];

/**
 * Bloque de proceso (§5.4): 4 pasos numerados. Aquí la numeración SÍ aplica
 * porque representa un orden real.
 */
export function ProcessSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step) => (
        <li
          key={step.n}
          className="rounded-[14px] border border-hairline bg-white p-6 shadow-[var(--shadow-soft)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-display text-lg font-semibold text-brand-700">
            {step.n}
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm text-text">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
