// ============================================================================
// Datos de marca y navegación de Kamifa (fuente: CLAUDE.md §3 y §4).
// ============================================================================

export const SITE = {
  name: "Kamifa",
  foundedYear: 1998,
  slogan: "A la medida de tu empresa. Desde una sola pieza.",
  // Slogans alternativos aprobables (por si el cliente prefiere otro):
  //  - "Confección a la medida, con atención personal."
  //  - "Hecho a tu medida, atendido en persona."
  url: "https://kamifa.vercel.app", // TODO(cliente): dominio definitivo
  instagram: {
    handle: "@kamifa_ni",
    url: "https://instagram.com/kamifa_ni",
  },
  email: "kamifagerencia@gmail.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/empresas", label: "Empresas" },
  { href: "/personalizado", label: "Desde una pieza" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
