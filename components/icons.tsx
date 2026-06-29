// Iconos lineales / SVG inline. Sin dependencias externas.

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const lineIconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
};

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3" />
    </svg>
  );
}

export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4l-1.6-1.6" />
      <path d="m6 10 3.5-3.5a1 1 0 0 1 1.4 0l3.1 3.1a1 1 0 0 1 0 1.4L13 12" />
      <path d="m6 10-3 3 3 3 2-2M21 13l-3-3" />
    </svg>
  );
}

export function ClockCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

// Iconos de producto (rejilla del inicio)
export function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}

export function NeedleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <path d="m3 21 8-8" />
      <path d="M14 10 21 3l-4 9-3-2Z" />
      <path d="M13 11a2 2 0 1 0 0-2" />
    </svg>
  );
}

export function ShirtIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <path d="M9 3 6 4 3 7l2.5 2.5L7 8v12h10V8l1.5 1.5L21 7l-3-3-3-1a3 3 0 0 1-6 0Z" />
    </svg>
  );
}

export function TshirtFoldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...lineIconProps}>
      <path d="M4 8v12h16V8l-4-4H8L4 8Z" />
      <path d="M8 4v4l4 2 4-2V4M4 8h4M16 8h4" />
    </svg>
  );
}
