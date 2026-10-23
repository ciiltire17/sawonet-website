import { cop17, cop17Hero } from '../data/cop17.js';
import { Link } from '../router.jsx';

export default function Cop17Feature() {
  return (
    <article className="overflow-hidden rounded-lg bg-sawonet-navy text-white shadow-soft">
      <div className="grid lg:grid-cols-2">
        <Link to={cop17.path} className="block bg-slate-100" aria-label="View SAWONET's COP17 photo story">
          <img src={cop17Hero.src} srcSet={cop17Hero.srcSet} sizes="(min-width: 1024px) 50vw, 100vw" width={cop17Hero.width} height={cop17Hero.height} alt={cop17Hero.caption} loading="lazy" className="h-full min-h-64 w-full object-cover" />
        </Link>
        <div className="flex flex-col items-start justify-center p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-200">Global engagement · August 2026</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{cop17.title}</h2>
          <p className="mt-5 leading-7 text-slate-200">{cop17.summary}</p>
          <p className="mt-4 text-sm text-slate-300">18 photographs · Community meetings · Delegation & networking</p>
          <Link to={cop17.path} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-md bg-white px-5 py-3 font-semibold text-sawonet-green hover:bg-sawonet-mint">Explore the COP17 photo story <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
}
