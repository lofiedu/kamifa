"use client";

import { FormEvent, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

type Errors = Partial<Record<"nombre" | "correo" | "mensaje", string>>;

const inputClass =
  "mt-1.5 w-full rounded-[8px] border border-hairline bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = (data.get("nombre") as string).trim();
    const empresa = (data.get("empresa") as string).trim();
    const correo = (data.get("correo") as string).trim();
    const telefono = (data.get("telefono") as string).trim();
    const mensaje = (data.get("mensaje") as string).trim();

    // Validación accesible en español
    const next: Errors = {};
    if (!nombre) next.nombre = "Por favor escribe tu nombre.";
    if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo))
      next.correo = "Revisa el formato del correo.";
    if (!mensaje) next.mensaje = "Cuéntanos brevemente qué necesitas.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Mueve el foco al primer campo con error
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // Compone el mensaje de WhatsApp con los campos prellenados
    const lines = [
      "Hola Kamifa, vi su sitio web y me gustaría cotizar.",
      "",
      `Nombre: ${nombre}`,
      empresa ? `Empresa: ${empresa}` : null,
      correo ? `Correo: ${correo}` : null,
      telefono ? `Teléfono: ${telefono}` : null,
      "",
      `Mensaje: ${mensaje}`,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener");
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-[14px] border border-brand-100 bg-brand-50 p-7"
      >
        <p className="font-display text-xl font-semibold text-ink">
          ¡Gracias! Te contactaremos pronto.
        </p>
        <p className="mt-2 text-text">
          Se abrió WhatsApp con tu mensaje listo para enviar. Si no se abrió,
          escríbenos directamente y te atiende la gerencia.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="link-arrow mt-5"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-ink">
          Nombre <span className="text-brand">*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "err-nombre" : undefined}
          className={inputClass}
        />
        {errors.nombre && (
          <p id="err-nombre" className="mt-1.5 text-sm text-brand-700">
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-ink">
          Empresa <span className="text-muted">(opcional)</span>
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className="block text-sm font-medium text-ink">
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.correo}
            aria-describedby={errors.correo ? "err-correo" : undefined}
            className={inputClass}
          />
          {errors.correo && (
            <p id="err-correo" className="mt-1.5 text-sm text-brand-700">
              {errors.correo}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-ink"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-ink">
          Mensaje <span className="text-brand">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          placeholder="¿Qué prenda o uniforme necesitas? Cantidad, tela, bordado…"
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
          className={`${inputClass} resize-y`}
        />
        {errors.mensaje && (
          <p id="err-mensaje" className="mt-1.5 text-sm text-brand-700">
            {errors.mensaje}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <WhatsAppIcon className="shrink-0" />
        Enviar solicitud
      </button>
      <p className="text-sm text-muted">
        Al enviar, se abre WhatsApp con tus datos listos para que la gerencia te
        responda más rápido.
      </p>
    </form>
  );
}
