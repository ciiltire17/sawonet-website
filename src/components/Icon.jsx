const paths = {
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
  barChart: <path d="M4 19V5M9 19v-8M14 19V9M19 19V3" />,
  building: <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M8 7h4M8 11h4M8 15h4M3 21h18" />,
  handshake: <path d="M8 12l2 2a3 3 0 0 0 4 0l2-2M3 12l4-4 5 5M21 12l-4-4-5 5" />,
  heartHandshake: <path d="M19 14c1.5-1.4 3-3.1 3-5.2A5 5 0 0 0 13 6l-1 1-1-1a5 5 0 0 0-9 2.8c0 2.1 1.5 3.8 3 5.2l7 6 7-6ZM12 13l2 2a2.8 2.8 0 0 0 4 0" />,
  leaf: <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16ZM4 20c4-7 8-9 16-16" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  mapPin: <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11ZM12 10.5h.01" />,
  megaphone: <path d="M3 11v2a2 2 0 0 0 2 2h2l4 4v-4l8 2V7l-8 2H5a2 2 0 0 0-2 2Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  network: <path d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM19 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM10 10l-3 7M14 10l3 7M8 19h8" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
  shieldCheck: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4" />,
  users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.8M16 3.1a4 4 0 0 1 0 7.8" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
};

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}
