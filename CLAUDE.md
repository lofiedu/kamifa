# CLAUDE.md — Sitio web de Kamifa

> Archivo de contexto para construir el sitio en Cursor.
> Léelo completo antes de generar código. Las decisiones de marca, diseño y
> contenido de aquí son la fuente de verdad: no las reinventes.

---

## 1. Qué estamos construyendo

Un sitio **informativo de varias páginas** para **Kamifa**, taller textil
nicaragüense de confección a la medida (fundado en 1998). El sitio tiene
tres trabajos, en orden de prioridad:

1. **Captar leads empresariales** (uniformes ejecutivos, bordado corporativo,
   prendas a la medida para empresas e instituciones).
2. **Comunicar la promesa "desde una sola pieza"** — sin pedido mínimo,
   personalización accesible para individuos.
3. **Reforzar la marca y su branding** — Kamifa hoy no tiene manual de marca
   ni slogan; este sitio sienta las bases de su identidad visual.

**Acción principal del visitante:** escribir por **WhatsApp para cotizar**.
El botón de WhatsApp es el CTA primario y debe estar siempre visible
(barra superior + secciones clave + footer). Un formulario de contacto es
CTA secundario.

### Audiencia
- **Primaria:** responsables de compras / RR.HH. / gerentes de empresas e
  instituciones que necesitan uniformes y prendas corporativas, y que valoran
  atención personalizada y cumplimiento en entrega.
- **Secundaria:** personas que quieren una prenda personalizada desde una pieza
  (bordado, camiseta, chaqueta a la medida).

### Diferenciadores reales (úsalos en el copy, no inventes otros)
- Atención personalizada **directa con la gerencia**, sin vendedores intermedios.
- **Visita y toma de medidas en el lugar de trabajo** del cliente.
- **Entrega en tiempo y forma**, sin engaños.
- Rapidez.
- **Desde una sola pieza** (no exige volumen mínimo).

### Lo que NO somos (evitar en copy y diseño)
- No somos una fábrica industrial de alto volumen. El competidor admirado
  (Koture) tiene esa capacidad; nosotros competimos por cercanía, medida exacta
  y flexibilidad de bajo volumen. El tono nunca debe prometer producción masiva.

---

## 2. Tono de marca

Palabras guía del cliente: **Pasión. Fuerza. Honestidad. Puntualidad. Respeto.**
La empresa se describe a sí misma como **"fuerte"** y su esencia en una palabra
es **"pasión"**.

Traducción a diseño y voz:
- **Empresarial, sobrio y sofisticado**, pero **amigable y accesible**. No frío,
  no corporativo-genérico, no acartonado.
- Mucho **espacio en blanco**, fotografía grande, jerarquía tipográfica clara.
- Voz cercana y directa, en **español de Nicaragua**, trato de "usted" en
  contextos empresariales y "vos/tú" evitado salvo en microcopy informal ligero.
  Por defecto: **usted**, cálido pero profesional.
- Honestidad como valor → nada de promesas exageradas ni claims sin respaldo.

### Slogan
Kamifa no tiene slogan. Propuesta principal (usar como tagline del hero):

> **"A la medida de tu empresa. Desde una sola pieza."**

Alternativas aprobables (déjalas comentadas en el código por si el cliente
prefiere otra):
- "Confección a la medida, con atención personal."
- "Hecho a tu medida, atendido en persona."

---

## 3. Identidad de marca / nombre

- Nombre: **Kamifa**. Escríbelo siempre con K mayúscula, resto minúsculas.
- Instagram: **@kamifa_ni** → https://instagram.com/kamifa_ni
- Correo: **kamifagerencia@gmail.com**
- Fundación: **1998**, propietaria original **Gladys Fonseca**.
- Hay logo (lo provee el cliente). NO inventes un logo: usa un placeholder
  `<img src="/assets/logo-kamifa.svg" alt="Kamifa">` y deja la ruta lista.

---

## 4. Arquitectura del sitio

Multipágina. Cinco rutas:

| Página            | Ruta            | Propósito                                                        |
|-------------------|-----------------|------------------------------------------------------------------|
| Inicio            | `/`             | Hero + dos caminos (Empresas / Desde una pieza) + prueba + CTA.  |
| Empresas          | `/empresas`     | Pilar empresarial: uniformes, bordado corporativo, proceso, lead.|
| Desde una pieza   | `/personalizado`| Promesa de valor para una pieza: personalización individual.     |
| Nosotros          | `/nosotros`     | Historia desde 1998, misión, valores, filosofía.                 |
| Contacto          | `/contacto`     | WhatsApp (primario) + formulario + IG + correo.                  |

Las **dos categorías de foco** (`Empresas` y `Desde una pieza`) deben ser el eje
visual del inicio: dos caminos claros, equilibrados, con el empresarial primero.

### Navegación
- Header fijo, fondo blanco, sombra muy sutil al hacer scroll.
- Logo a la izquierda. Links: Inicio · Empresas · Desde una pieza · Nosotros · Contacto.
- A la derecha, **botón WhatsApp** ("Cotizar por WhatsApp") en color primario.
- En móvil: menú hamburguesa; el botón de WhatsApp permanece visible siempre.

---

## 5. Sistema de diseño

### 5.1 Color

Color principal: **#28A9C6** (celeste corporativo). Toda la paleta deriva de él,
en tonos más tenues, sobre **mucho blanco**. Es un esquema casi monocromático:
celeste + neutros + blanco. No introduzcas colores que no estén aquí.

Pega estos tokens tal cual (CSS custom properties):

```css
:root {
  /* Marca — celeste y derivados (tints calculados sobre #28A9C6) */
  --brand:            #28A9C6; /* primario: CTAs, acentos, enlaces */
  --brand-600:        #1E7F94; /* hover / estados activos */
  --brand-700:        #165D6D; /* énfasis sobre fondos claros */
  --brand-ink:        #0C333B; /* titulares opcionales en teal profundo */

  --brand-300:        #73C7DA; /* acento suave */
  --brand-200:        #9ED8E5; /* detalles, líneas, iconos */
  --brand-100:        #C9EAF1; /* badges, chips */
  --brand-50:         #E5F5F8; /* fondos de sección suaves */
  --brand-25:         #F4FBFC; /* wash casi blanco */

  /* Neutros */
  --white:            #FFFFFF;
  --paper:            #F8FAFB; /* fondo alterno muy claro */
  --hairline:         #E3E9EC; /* bordes / divisores de 1px */
  --ink:              #15272D; /* texto de titulares (charcoal con matiz teal) */
  --text:             #43565C; /* cuerpo de texto */
  --muted:            #7B8A90; /* texto secundario, captions */

  /* Semánticos */
  --focus:            #28A9C6; /* anillo de foco accesible */
  --shadow:           0 1px 2px rgba(21,39,45,.04), 0 8px 24px rgba(21,39,45,.06);
  --shadow-card:      0 1px 3px rgba(21,39,45,.05), 0 12px 32px rgba(21,39,45,.07);
}
```

Reglas de uso:
- **El blanco domina.** Fondos por defecto en `--white`; alterna secciones con
  `--paper` o `--brand-50` para ritmo, nunca bloques saturados de celeste.
- `--brand` se reserva para CTAs, enlaces, iconos y acentos pequeños. No pintes
  secciones enteras de `--brand`; perdería sofisticación.
- Titulares en `--ink`; permite `--brand-700`/`--brand-ink` para algún titular
  destacado puntual.
- Contraste mínimo AA: texto sobre blanco usa `--text`/`--ink` (cumplen);
  texto blanco solo sobre `--brand-600`/`--brand-700` o fotos oscurecidas con
  overlay (no sobre `--brand` puro en tamaños pequeños).

### 5.2 Tipografía

Fuentes libres (Google Fonts), elegidas para "corporativo + amigable":

- **Titulares / display:** `Poppins` (geométrica, redonda, cercana). Pesos 500–700.
- **Cuerpo / UI:** `Plus Jakarta Sans` (moderna, sobria, muy legible). Pesos 400–600.

> Nota importante: el cliente mencionó **Google Sans**, pero NO tiene licencia
> pública ni está en Google Fonts, así que no la cargues como webfont. Si el
> cliente consigue la licencia, sustituir `Poppins` por Google Sans en titulares;
> el resto del sistema no cambia.

Carga:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Tokens tipográficos:
```css
:root {
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Plus Jakarta Sans", system-ui, sans-serif;

  /* Escala (fluida con clamp). Base 16px. */
  --fs-hero:   clamp(2.5rem, 5vw + 1rem, 4.25rem); /* H1 hero */
  --fs-h2:     clamp(1.9rem, 2.5vw + 1rem, 2.75rem);
  --fs-h3:     clamp(1.35rem, 1vw + 1rem, 1.6rem);
  --fs-lead:   clamp(1.05rem, .5vw + 1rem, 1.25rem); /* párrafo intro */
  --fs-body:   1rem;
  --fs-small:  .875rem;
  --fs-eyebrow:.8125rem; /* etiquetas en mayúsculas */
}
```
Reglas:
- Titulares en `--font-display`, peso 600/700, `letter-spacing: -0.02em`,
  `line-height: 1.08–1.15`.
- Cuerpo en `--font-body`, 400, `line-height: 1.6`, ancho de medida máx. ~68ch.
- **Eyebrows** (etiquetas tipo "SOLUCIONES EMPRESARIALES"): `--font-body` 600,
  `text-transform: uppercase`, `letter-spacing: .12em`, color `--brand-700`.
- No uses numeración decorativa 01/02/03 salvo que represente un proceso real
  con orden (p. ej. los pasos "Visitamos → Tomamos medidas → Confeccionamos →
  Entregamos"), donde sí aporta.

### 5.3 Espaciado, radios, layout

```css
:root {
  --space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem;
  --space-6:1.5rem; --space-8:2rem; --space-12:3rem; --space-16:4rem;
  --space-24:6rem; --space-32:8rem;

  --radius-sm:8px;
  --radius:14px;     /* tarjetas */
  --radius-lg:22px;  /* bloques grandes / imágenes */
  --radius-pill:999px; /* botones */

  --maxw:1200px;     /* contenedor */
  --gutter:clamp(1.25rem, 4vw, 3rem);
}
```
- Contenedor centrado `max-width: var(--maxw)` con `padding-inline: var(--gutter)`.
- Secciones con respiración generosa: `padding-block: var(--space-24)` en desktop.
- Bordes redondeados moderados (amigable, no infantil). Botones tipo pill.
- Sombras suaves y difusas (`--shadow`, `--shadow-card`); nunca duras.

### 5.4 Componentes clave

- **Botón primario** (`.btn-whatsapp` / `.btn-primary`): fondo `--brand`, texto
  blanco, pill, padding `0.85rem 1.5rem`, peso 600. Hover `--brand-600`.
  Incluye icono de WhatsApp a la izquierda (SVG inline). Foco visible (anillo
  `--focus` 2px + offset).
- **Botón secundario** (`.btn-ghost`): borde 1.5px `--brand`, texto `--brand-700`,
  fondo transparente. Hover relleno `--brand-50`.
- **Tarjeta de categoría** (las dos del inicio): imagen grande arriba o de fondo,
  con overlay degradado a `--ink` translúcido para legibilidad del texto blanco
  (estilo referencia Hale Mercantile / Designtex). Eyebrow + título + 1 línea +
  enlace "Ver más →". Radio `--radius-lg`, sombra `--shadow-card`, hover sube
  2px y zoom suave de imagen (1.03).
- **Pieza de prueba/confianza:** franja con "Desde 1998", "Atención directa con
  gerencia", "Entrega en tiempo y forma" como datos cortos con icono lineal.
- **Bloque de proceso** (4 pasos numerados): Visitamos · Tomamos medidas ·
  Confeccionamos · Entregamos. Aquí la numeración SÍ aplica.
- **Formulario de lead:** campos Nombre, Empresa (opcional), Correo, Teléfono,
  Mensaje. Botón "Enviar solicitud". Validación accesible (labels reales, no solo
  placeholders). Ver §7 sobre envío.

### 5.5 Imágenes / fotografía

- El cliente entrega fotos reales de producto. Usa placeholders con proporción
  fija y `alt` descriptivo; deja rutas en `/assets/img/...` listas para sustituir.
  Ejemplo: `chaqueta-ejecutiva.jpg`, `bordado-corporativo.jpg`,
  `camiseta-personalizada.jpg`, `camisa-medida.jpg`.
- Trata las fotos en grande, full-bleed o casi, estilo editorial (referencias).
- Mantén consistencia: si las fotos vienen con fondos variados, aplica un
  tratamiento uniforme (mismo encuadre/recorte, posible overlay sutil).
- Detalle de marca opcional y discreto: una **línea de puntada** (borde
  `dashed` 1px en `--brand-200`) como divisor fino entre algunas secciones —
  guiño al oficio textil. Úsalo con moderación, no en cada sección.

### 5.6 Motion

- Sutil y con propósito. Reveal al hacer scroll (fade + translateY 12px),
  microinteracción en hover de tarjetas y botones. Nada llamativo.
- **Respeta `prefers-reduced-motion`**: desactiva animaciones de entrada.

### 5.7 Referencias estéticas (qué imitar y qué no)
- Imitar: aire/blanco y fotografía grande de **Hale Mercantile** y **Cloth+Paper**;
  rejilla de categorías con etiqueta sobre imagen de **Designtex/Hale**;
  sobriedad tipográfica.
- NO imitar: el rosa de Sloane, los degradados naranja-rojo de los temas de
  ThemeForest, ni los layouts "newspaper" densos. Mantén celeste + blanco.

---

## 6. Contenido (copy en español, listo para usar)

Usa este copy. Es honesto con lo que Kamifa realmente ofrece. Ajusta solo
detalles menores; no inventes servicios ni cifras nuevas.

### 6.1 Inicio (`/`)

**Eyebrow:** CONFECCIÓN A LA MEDIDA · DESDE 1998
**H1:** A la medida de tu empresa. Desde una sola pieza.
**Subtítulo:** En Kamifa confeccionamos uniformes ejecutivos, bordados y prendas
personalizadas con atención directa de la gerencia, medidas tomadas en tu lugar
de trabajo y entrega en tiempo y forma.
**CTA primario:** Cotizar por WhatsApp
**CTA secundario:** Ver soluciones para empresas

**Dos caminos (tarjetas):**

1. **Empresas** (eyebrow: PARA EMPRESAS E INSTITUCIONES)
   Título: Uniformes ejecutivos y bordado corporativo
   Texto: Vestimos a tu equipo con prendas a la medida y bordado de tu marca.
   Visitamos tu empresa, tomamos medidas y cumplimos la entrega acordada.
   Enlace: Ver soluciones empresariales →  (a `/empresas`)

2. **Desde una pieza** (eyebrow: SIN PEDIDO MÍNIMO)
   Título: Tu prenda personalizada, desde una sola pieza
   Texto: ¿Una chaqueta, un bordado o una camiseta? No necesitas comprar en
   volumen. Hacemos tu prenda a la medida, una por una, con acabados de calidad.
   Enlace: Ver personalización →  (a `/personalizado`)

**Franja de confianza (datos cortos con icono):**
- Desde 1998
- Atención directa con la gerencia
- Entrega en tiempo y forma
- Toma de medidas en tu lugar de trabajo

**Sección productos (4 tarjetas, breve):**
- Chaquetas a la medida — En distintas telas, confeccionadas y personalizadas.
- Bordados — En todo tipo de prenda, desde una pieza.
- Camisetas personalizadas — Varias técnicas y acabados de calidad.
- Camisas y pantalones — A la medida, con acabado industrial.

**Rango de precio (texto honesto, una línea):**
Precios desde C$250 hasta C$2,500 por pieza, según prenda, tela y técnica.

**Cierre / CTA final:**
Título: ¿Listo para vestir a tu equipo o crear tu prenda?
Texto: Escríbenos por WhatsApp y te atiende la gerencia directamente.
Botón: Cotizar por WhatsApp

### 6.2 Empresas (`/empresas`)

**Eyebrow:** SOLUCIONES EMPRESARIALES
**H1:** Uniformes y prendas corporativas a la medida de tu empresa
**Intro:** Vestimos a equipos de empresas e instituciones con uniformes
ejecutivos, camisas, pantalones y chaquetas confeccionados a la medida, además
de bordado con la identidad de tu marca. Te atiende directamente la gerencia,
sin intermediarios.

**Qué ofrecemos:**
- Uniformes ejecutivos a la medida
- Camisas y pantalones con acabado industrial
- Chaquetas en distintas telas, personalizadas
- Bordado corporativo (logo de tu empresa) en cualquier prenda

**Por qué las empresas nos eligen:**
- Atención personalizada de la gerente general, sin vendedores.
- Visitamos tu empresa y tomamos medidas en el lugar de trabajo.
- Cumplimiento de entrega en tiempo y forma.
- Flexibilidad: desde una pieza hasta el equipo completo.

**Proceso (4 pasos numerados):**
1. Visitamos — Vamos a tu empresa para entender la necesidad.
2. Tomamos medidas — En el lugar de trabajo de tu equipo.
3. Confeccionamos — A la medida, con la tela y el bordado que elijas.
4. Entregamos — En la fecha acordada, en tiempo y forma.

**CTA:** Solicita una cotización para tu empresa → (WhatsApp + formulario)

### 6.3 Desde una pieza (`/personalizado`)

**Eyebrow:** SIN PEDIDO MÍNIMO
**H1:** Tu prenda personalizada, desde una sola pieza
**Intro:** No necesitas comprar en volumen. En Kamifa confeccionamos y
personalizamos prenda por prenda: una chaqueta, un bordado, una camiseta o una
camisa a tu medida, con acabados de calidad y atención personal.

**Qué puedes pedir desde una pieza:**
- Bordado en cualquier prenda de vestir
- Camisetas personalizadas en varias técnicas
- Chaquetas confeccionadas a tu medida
- Camisas y pantalones a la medida

**Cómo trabajamos contigo:** atención directa, asesoría en tela y técnica, y
toma de medidas para que la prenda quede exacta.

**Precio:** Desde C$250 hasta C$2,500 por pieza, según prenda, tela y técnica.

**CTA:** Cuéntanos qué quieres crear → (WhatsApp)

### 6.4 Nosotros (`/nosotros`)

**Eyebrow:** NUESTRA HISTORIA
**H1:** Confección con pasión desde 1998
**Texto:** Kamifa nació en 1998 de la mano de su propietaria, Gladys Fonseca,
con el objetivo de llevar productos a los hogares nicaragüenses: cojines, sets
de baño, ropa de cama y más. Con el tiempo evolucionamos hacia la confección de
uniformes ejecutivos y prendas personalizadas para empresas y personas.

**Misión:** Ofrecer productos y atención personalizada a nuestros clientes,
garantizando prendas duraderas y una experiencia que invite a volver y
recomendar.

**Valores:** Honestidad · Puntualidad · Respeto

**Filosofía de trabajo:** Cumplimos la entrega de los productos en tiempo y
forma, sin engaños al cliente.

### 6.5 Contacto (`/contacto`)

**H1:** Hablemos de tu proyecto
**Texto:** La forma más rápida de cotizar es por WhatsApp: te atiende
directamente la gerencia.
**Bloque WhatsApp (primario):** botón grande "Cotizar por WhatsApp".
**Formulario (secundario):** Nombre · Empresa (opcional) · Correo · Teléfono ·
Mensaje · [Enviar solicitud].
**Otros canales:**
- Instagram: @kamifa_ni
- Correo: kamifagerencia@gmail.com

---

## 7. CTA de WhatsApp y formulario

### WhatsApp
- **PENDIENTE:** el cliente aún no dio el número de WhatsApp. Define una sola
  constante y reutilízala en todo el sitio; deja un comentario `TODO` claro.

```js
// TODO: reemplazar con el número real de Kamifa (formato internacional, sin + ni espacios)
// Nicaragua = código país 505. Ej: 50588887777
const WHATSAPP_NUMBER = "50500000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Kamifa, vi su sitio web y me gustaría cotizar. Estoy interesado/a en: "
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
```
- Todos los botones de WhatsApp abren `WHATSAPP_URL` en pestaña nueva
  (`target="_blank" rel="noopener"`).
- En páginas Empresas/Personalizado, puedes prellenar el mensaje con el contexto
  (ej. "...interesado/a en uniformes para empresa").

### Formulario
- No hay backend definido todavía. Implementa el formulario con un punto de
  integración claro y comentado. Opciones (elige y deja `TODO`):
  - `mailto:kamifagerencia@gmail.com` como fallback inmediato, **o**
  - un servicio tipo Formspree/Web3Forms (deja la action y una nota), **o**
  - `fetch` a un endpoint a definir.
- **No** captures ni envíes datos sensibles. Validación en cliente accesible,
  con mensajes de error claros y en español.
- Mensaje de éxito en la voz de la marca: "¡Gracias! Te contactaremos pronto.
  Si prefieres, escríbenos por WhatsApp para una respuesta más rápida."

---

## 8. Convenciones técnicas

> El stack final lo decides tú en Cursor. Recomendación abajo; respeta los
> principios pase lo que pase.

### Stack sugerido
- HTML + CSS + JS vanilla, **o** un framework ligero (Astro encaja muy bien para
  un sitio informativo multipágina y rápido). Si usas framework, mantén el mismo
  sistema de tokens de §5.
- Sin dependencias pesadas innecesarias. El sitio debe cargar rápido.

### Estructura de archivos (si es vanilla/Astro)
```
/assets
  /img            (fotos del cliente — placeholders por ahora)
  logo-kamifa.svg
/styles
  tokens.css      (variables de §5)
  base.css        (reset, tipografía, utilidades)
  components.css
/index.html  (o /src/pages/index.astro)
/empresas
/personalizado
/nosotros
/contacto
```

### Calidad mínima (no negociable)
- **Responsive** real, mobile-first. Probar 360px, 768px, 1200px.
- **Accesibilidad:** HTML semántico (`header/nav/main/section/footer`), un solo
  `<h1>` por página, jerarquía de headings correcta, `alt` en imágenes,
  labels en formularios, foco visible, contraste AA, navegación por teclado,
  `prefers-reduced-motion`.
- **SEO básico:** `<title>` y `<meta name="description">` por página,
  Open Graph (`og:title`, `og:description`, `og:image`), `lang="es"`,
  texto descriptivo y honesto. Sin keyword stuffing.
- **Rendimiento:** imágenes con `loading="lazy"` (menos el hero), tamaños
  responsivos, `width`/`height` para evitar layout shift.
- Favicon y `og:image` como placeholders listos para sustituir.

### Metadatos por página (puntos de partida)
- Inicio — Title: "Kamifa | Uniformes y confección a la medida en Nicaragua"
- Empresas — Title: "Uniformes ejecutivos y bordado corporativo | Kamifa"
- Desde una pieza — Title: "Prendas personalizadas desde una pieza | Kamifa"
- Nosotros — Title: "Sobre Kamifa | Confección con pasión desde 1998"
- Contacto — Title: "Contacto y cotización | Kamifa"

---

## 9. Pendientes del cliente (placeholders en el código)

Marca cada uno con un comentario `TODO` visible:
1. **Número de WhatsApp** (constante `WHATSAPP_NUMBER`).
2. **Logo** (`/assets/logo-kamifa.svg`).
3. **Fotos reales** de producto (rutas en `/assets/img/`).
4. **Destino del formulario** (mailto vs. servicio).
5. **Dirección física / ciudad**, si el cliente quiere mostrarla (no provista).
6. Confirmar **slogan** definitivo (propuesta en §2).

---

## 10. Reglas para ti (Cursor/Claude) al generar código

- Sigue los tokens de §5 **exactamente**; no cambies el color principal ni
  introduzcas paletas nuevas.
- Usa el copy de §6 tal cual; si falta algo, escribe en la misma voz y márcalo
  como propuesta con comentario.
- No inventes testimonios, clientes, premios, certificaciones ni cifras.
- Mantén el equilibrio: **empresarial primero**, "desde una pieza" como segundo
  pilar igual de claro.
- Ante cualquier duda de alcance, prioriza: (1) claridad del lead por WhatsApp,
  (2) las dos categorías, (3) refuerzo de marca.
