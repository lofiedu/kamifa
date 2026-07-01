import {
  CalendarIcon,
  HandshakeIcon,
  ClockCheckIcon,
  MapPinIcon,
} from "@/components/icons";

const ITEMS = [
  { icon: CalendarIcon, label: "Desde 1998" },
  { icon: HandshakeIcon, label: "Atención directa con la gerencia" },
  { icon: ClockCheckIcon, label: "Entrega en tiempo y forma" },
  { icon: MapPinIcon, label: "Toma de medidas en tu lugar de trabajo" },
];

/**
 * Franja de confianza (§5.4): datos cortos con icono lineal.
 */
export function TrustStrip() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
      {ITEMS.map(({ icon: Icon, label }) => (
        <li key={label} className="flex flex-col items-start gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <Icon className="h-[34px] w-[34px]" />
          </span>
          <span className="text-sm font-medium leading-snug text-ink">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
