// ============================================================================
// WhatsApp — punto único de verdad para todos los CTAs y el formulario.
// La acción principal del sitio es escribir por WhatsApp para cotizar.
// ============================================================================

// TODO(cliente): reemplazar con el número real de Kamifa.
// Formato internacional, sin "+" ni espacios. Nicaragua = código país 505.
// Ej: 50588887777
export const WHATSAPP_NUMBER = "50500000000";

const DEFAULT_MSG =
  "Hola Kamifa, vi su sitio web y me gustaría cotizar. Estoy interesado/a en: ";

/**
 * Construye la URL de wa.me con un mensaje prellenado.
 * Todos los botones y el formulario de contacto la usan.
 * Abrir siempre con target="_blank" rel="noopener".
 */
export function buildWhatsAppUrl(message: string = DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
