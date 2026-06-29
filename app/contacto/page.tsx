import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import { InstagramIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto y cotización",
  description:
    "La forma más rápida de cotizar es por WhatsApp: te atiende directamente la gerencia. También puedes escribirnos por el formulario, Instagram o correo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        intro="La forma más rápida de cotizar es por WhatsApp: te atiende directamente la gerencia."
      >
        <WhatsAppButton size="lg" />
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Formulario (secundario) */}
          <Reveal>
            <h2 className="text-h2 font-semibold text-ink">
              Escríbenos por el formulario
            </h2>
            <p className="mt-3 text-text">
              Completa tus datos y te llevamos directo a WhatsApp con el mensaje
              listo.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          {/* Otros canales */}
          <Reveal delay={120}>
            <div className="rounded-[22px] border border-hairline bg-white p-7 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Otros canales</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Encuéntranos también aquí
              </h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={SITE.instagram.url}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3 text-text transition-colors hover:text-brand-700"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <InstagramIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">Instagram</span>
                      <span className="font-medium text-ink">
                        {SITE.instagram.handle}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-text transition-colors hover:text-brand-700"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <MailIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">Correo</span>
                      <span className="font-medium text-ink">{SITE.email}</span>
                    </span>
                  </a>
                </li>
              </ul>

              <hr className="stitch-divider my-7" />

              <p className="text-sm text-text">
                Atención directa de la gerencia, sin intermediarios. Te
                respondemos lo antes posible.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
