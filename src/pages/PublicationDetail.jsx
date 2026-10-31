import Container from '../components/Container.jsx';
import PublicationCard, { PublicationActions } from '../components/PublicationCard.jsx';
import { publicationAuthors, policyBriefs, publicationSeries, researchCountries } from '../data/publications.js';
import ReportDetail from './ReportDetail.jsx';
import { Link } from '../router.jsx';

export default function PublicationDetail({ publication }) {
  if (publication.kind === 'report') return <ReportDetail publication={publication} />;
  return (
    <>
      <section className="bg-slate-50 py-10 sm:py-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
            <Link to="/publications" className="inline-flex min-h-11 items-center font-semibold text-sawonet-green hover:underline">← Research & Publications</Link>
            <span className="ml-3">/ Brief {publication.number}</span>
          </nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">Policy Brief {publication.number} · <time dateTime="2026-08">{publication.date}</time></p>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-sawonet-navy sm:text-4xl lg:text-5xl">{publication.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{publication.subtitle}</p>
              <dl className="my-7 grid gap-4 border-y border-slate-200 py-6 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:col-span-2"><dt className="font-semibold text-sawonet-navy">Authors</dt><dd>{publicationAuthors.map((author) => `${author.name} (${author.affiliation})`).join('; ')}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Series</dt><dd>{publicationSeries}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Research countries</dt><dd>{researchCountries.join(', ')}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Publication</dt><dd>August 2026 · Brief {publication.number}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Format</dt><dd>PDF · {publication.pages} pages · {publication.fileSize}</dd></div>
              </dl>
              <PublicationActions publication={publication} />
            </div>
            <figure className="mx-auto w-full max-w-[300px]">
              <a href={publication.pdf} target="_blank" rel="noreferrer" aria-label={`Read the original PDF of Brief ${publication.number} (opens in a new tab)`}>
                <img src={publication.cover} width="900" height="1273" alt={`Original cover of ${publication.title}`} className="h-auto w-full border border-slate-200 shadow-soft" />
              </a>
              <figcaption className="mt-3 text-xs leading-5 text-slate-600">Original publication cover. Photo: {publication.photoCredit}.</figcaption>
            </figure>
          </div>
        </Container>
      </section>
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-10">
            <section aria-labelledby="executive-summary">
              <h2 id="executive-summary" className="text-2xl font-bold text-sawonet-navy">Executive summary</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{publication.executiveSummary}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">Condensed from the original brief. Read the PDF for the complete evidence, analysis and references.</p>
            </section>
            <section aria-labelledby="key-findings">
              <h2 id="key-findings" className="text-2xl font-bold text-sawonet-navy">Key findings</h2>
              <ul className="mt-5 space-y-4">{publication.findings.map((finding) => <li key={finding} className="border-l-2 border-sawonet-green pl-5 leading-7 text-slate-700">{finding}</li>)}</ul>
              <a href={`${publication.pdf}#page=${publication.findingPdfPage}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-sawonet-green hover:underline">Source: Key Findings, printed pages {publication.findingPages} (PDF, new tab)</a>
            </section>
            <section aria-labelledby="policy-recommendations">
              <h2 id="policy-recommendations" className="text-2xl font-bold text-sawonet-navy">Policy recommendations</h2>
              <ol className="mt-5 list-decimal space-y-4 pl-6 marker:font-bold marker:text-sawonet-green">{publication.recommendations.map((recommendation) => <li key={recommendation} className="pl-2 leading-7 text-slate-700">{recommendation}</li>)}</ol>
              <a href={`${publication.pdf}#page=${publication.recommendationPdfPage}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-sawonet-green hover:underline">Source: Policy Recommendations, printed pages {publication.recommendationPages} (PDF, new tab)</a>
            </section>
            <section aria-labelledby="citation" className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 id="citation" className="text-xl font-bold text-sawonet-navy">Citation & attribution</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{publication.citation}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Joint series: {publicationSeries}. The original citation identifies CGIAR Climate Security and Organization for Pastoral Peace Development (OPPD).</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">© 2026 CGIAR Climate Security. The original PDF retains all copyright notices, license statements, source citations, photo credits and institutional disclaimers.</p>
            </section>
          </div>
          <aside className="self-start rounded-lg border-t-4 border-sawonet-green bg-sawonet-mint p-6 text-sm leading-7" aria-labelledby="research-context">
            <h2 id="research-context" className="text-lg font-bold text-sawonet-navy">About this research</h2>
            <p className="mt-3">Part of the joint {publicationSeries}, bringing evidence from pastoral communities into climate, peace and inclusion policy.</p>
            <h3 className="mt-6 font-semibold text-sawonet-navy">Acknowledgements</h3>
            <p className="mt-2">Supported by the CGIAR Climate Action and Food Frontiers Science Programs, and funders contributing to the CGIAR Trust Fund.</p>
            <h3 className="mt-6 font-semibold text-sawonet-navy">Research contact</h3>
            <p className="mt-2">CGIAR Climate Security</p>
            <a href="mailto:climatesecurity@cgiar.org" className="break-words font-semibold text-sawonet-green underline">climatesecurity@cgiar.org</a>
          </aside>
        </div>
      </Container>
      <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="related-publications">
        <Container>
          <h2 id="related-publications" className="text-2xl font-bold text-sawonet-navy">Related publications</h2>
          <p className="mt-3 text-slate-600">Explore the other available briefs in this joint series.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{policyBriefs.filter((item) => item.slug !== publication.slug).map((item) => <PublicationCard key={item.slug} publication={item} compact />)}</div>
        </Container>
      </section>
    </>
  );
}
