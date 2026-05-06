export default function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-sawonet-green/40 ${className}`}
    >
      {children}
    </article>
  );
}
