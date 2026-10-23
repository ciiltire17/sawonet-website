import Card from './Card.jsx';
import { Link } from '../router.jsx';
import { publicationAuthors } from '../data/publications.js';

export function PublicationActions({ publication }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={publication.pdf} target="_blank" rel="noreferrer" className="publication-button bg-sawonet-green text-white hover:bg-green-800" aria-label={`Read PDF: ${publication.title} (opens in a new tab)`}>
        Read PDF <span aria-hidden="true">↗</span>
      </a>
      <a href={publication.pdf} download className="publication-button border border-slate-300 text-sawonet-navy hover:bg-sawonet-mint" aria-label={`Download PDF: ${publication.title} (${publication.fileSize})`}>
        Download PDF <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}

export default function PublicationCard({ publication, compact = false, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <Card className={`publication-card flex h-full flex-col !p-0 ${compact ? '' : 'sm:grid sm:grid-cols-[0.8fr_1.2fr]'}`}>
      <Link to={publication.path} className={`block rounded-t-lg bg-slate-100 p-5 ${compact ? '' : 'sm:rounded-l-lg sm:rounded-tr-none'}`} aria-label={`View Brief ${publication.number}: ${publication.title}`}>
        <img src={publication.cover} alt={`Original cover of Brief ${publication.number}: ${publication.title}`} width="900" height="1273" loading="lazy" className={`mx-auto h-auto w-full object-contain shadow-md ${compact ? 'max-w-40' : 'max-w-60'}`} />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sawonet-green">Brief {publication.number} <span aria-hidden="true">·</span> <time dateTime="2026-08">{publication.date}</time></p>
        <Heading className={`mt-3 font-bold leading-snug text-sawonet-navy ${compact ? 'text-lg' : 'text-xl'}`}>
          <Link to={publication.path} className="hover:text-sawonet-green hover:underline">{publication.title}</Link>
        </Heading>
        {!compact && <p className="mt-3 text-sm leading-6 text-slate-600">{publicationAuthors.map((author) => author.name).join(', ')}</p>}
        {!compact && <p className="mt-4 text-sm leading-6 text-slate-600">{publication.summary}</p>}
        <div className="mt-auto pt-5">
          {compact ? <Link to={publication.path} className="inline-flex min-h-11 items-center gap-2 font-semibold text-sawonet-green hover:underline">Explore brief <span aria-hidden="true">→</span></Link> : <>
            <p className="mb-3 text-xs text-slate-500">PDF · {publication.pages} pages · {publication.fileSize}</p>
            <PublicationActions publication={publication} />
          </>}
        </div>
      </div>
    </Card>
  );
}
