import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Titulares / display (CLAUDE.md §5.2)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Cuerpo / UI
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kamifa | Uniformes y confección a la medida en Nicaragua",
    template: "%s | Kamifa",
  },
  description:
    "Kamifa confecciona uniformes ejecutivos, bordado corporativo y prendas personalizadas a la medida, desde una sola pieza. Atención directa de la gerencia y entrega en tiempo y forma.",
  openGraph: {
    type: "website",
    locale: "es_NI",
    siteName: "Kamifa",
    title: "Kamifa | Uniformes y confección a la medida en Nicaragua",
    description:
      "Confección a la medida desde 1998. Uniformes ejecutivos, bordado corporativo y prendas personalizadas, desde una sola pieza.",
    // TODO(cliente): sustituir por imagen OG real (1200x630).
    images: ["/assets/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
