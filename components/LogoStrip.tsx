/**
 * Franja de logos de clientes (prueba social) que se desplaza sola en una sola
 * línea (marquee). Los logos se muestran en escala de grises para unificar
 * marcas de colores dispares. La animación se detiene al pasar el cursor y se
 * desactiva con prefers-reduced-motion (ver globals.css).
 *
 * Logos reales aportados por el cliente en /public/assets/img/clientes/.
 * No inventar clientes (§10): usar solo logos que Kamifa autorice.
 */

const LOGOS = [
  { src: "/assets/img/clientes/dgi.svg", alt: "DGI", className: "h-[38px]" },
  { src: "/assets/img/clientes/calibre.svg", alt: "Calibre", className: "h-[42px]" },
  { src: "/assets/img/clientes/caf.svg", alt: "CAF", className: "h-[50px]" },
  { src: "/assets/img/clientes/autos-ec.svg", alt: "Autos EC", className: "h-[50px]" },
  {
    src: "/assets/img/clientes/mayorga.png",
    alt: "Distribuidora Mayorga",
    className: "h-[58px]",
  },
  {
    src: "/assets/img/clientes/la-salle.png",
    alt: "La Salle — Instituto Pedagógico",
    className: "h-[54px]",
  },
  {
    src: "/assets/img/clientes/cies-unan.png",
    alt: "CIES — UNAN Managua",
    className: "h-[42px]",
  },
  {
    src: "/assets/img/clientes/volcano.png",
    alt: "Volcano Labs",
    className: "h-[34px]",
  },
  {
    src: "/assets/img/clientes/mango.png",
    alt: "Mango Travel",
    className: "h-[44px]",
  },
];

function LogoItem({
  src,
  alt,
  className,
  "aria-hidden": ariaHidden,
}: {
  src: string;
  alt: string;
  className: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <li className="flex shrink-0 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={ariaHidden ? "" : alt}
        aria-hidden={ariaHidden}
        loading="lazy"
        className={`${className} w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
      />
    </li>
  );
}

export function LogoStrip() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
      {/* Etiqueta + divisor (fijos) */}
      <div className="flex items-center gap-5 lg:shrink-0">
        <span className="eyebrow whitespace-nowrap !text-muted">
          Empresas que confían en nosotros
        </span>
        <span
          aria-hidden="true"
          className="hidden h-8 w-px bg-hairline lg:block"
        />
      </div>

      {/* Marquee: una sola línea que se desplaza. Máscara de degradado en los
          bordes para que los logos entren y salgan suavemente. */}
      <div
        className="marquee-viewport relative flex-1 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="marquee-track flex w-max items-center gap-x-14">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.alt} {...logo} />
          ))}
          {/* Copia duplicada para el loop sin costura (oculta a lectores) */}
          {LOGOS.map((logo) => (
            <LogoItem key={`${logo.alt}-dup`} {...logo} aria-hidden />
          ))}
        </ul>
      </div>
    </div>
  );
}
