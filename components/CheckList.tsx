function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-brand"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Lista de beneficios / oferta con viñeta de check.
 */
export function CheckList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-text">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
