import Container from '../components/Container.jsx';
import { PublicationActions } from '../components/PublicationCard.jsx';
import { Link } from '../router.jsx';

export default function ReportDetail({ publication }) {
  return (
    <>
      <section className="bg-slate-50 py-10 sm:py-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
            <Link to="/publications" className="inline-flex min-h-11 items-center font-semibold text-sawonet-green hover:underline">← Research & Publications</Link>
            <span className="ml-3">/ OPPD report</span>
          </nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">OPPD · Post-session report</p>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-sawonet-navy sm:text-4xl lg:text-5xl">{publication.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{publication.summary}</p>
              <dl className="my-7 grid gap-4 border-y border-slate-200 py-6 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:col-span-2"><dt className="font-semibold text-sawonet-navy">Report by</dt><dd>{publication.organization}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Participant</dt><dd>{publication.participant}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Submitted to</dt><dd>United Nations Convention to Combat Desertification (UNCCD) Secretariat</dd></div>
                <div className="sm:col-span-2"><dt className="font-semibold text-sawonet-navy">Conference</dt><dd>{publication.conference}</dd></div>
                <div><dt className="font-semibold text-sawonet-navy">Format</dt><dd>PDF · {publication.pages} pages · {publication.fileSize}</dd></div>
              </dl>
              <PublicationActions publication={publication} />
            </div>
            <figure className="mx-auto w-full max-w-[300px]">
              <a href={publication.pdf} target="_blank" rel="noreferrer" aria-label={`Read PDF: ${publication.title} (opens in a new tab)`}>
                <img src={publication.cover} width={publication.coverWidth} height={publication.coverHeight} alt={`Original first page of ${publication.title}`} className="h-auto w-full border border-slate-200 shadow-soft" />
              </a>
              <figcaption className="mt-3 text-xs leading-5 text-slate-600">First page of the original OPPD report.</figcaption>
            </figure>
          </div>
        </Container>
      </section>
      <Container className="py-12 sm:py-16">
        <section aria-labelledby="report-attribution" className="max-w-3xl rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 id="report-attribution" className="text-2xl font-bold text-sawonet-navy">Source & attribution</h2>
          <p className="mt-4 leading-7 text-slate-700">This report was submitted by {publication.organization}. The participant named in the report is {publication.participant}.</p>
          <p className="mt-4 leading-7 text-slate-700">SAWONET hosts the original six-page PDF for access and download. OPPD is responsible for the report’s content; SAWONET is not its author.</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">The PDF is provided unchanged, including its original wording, links and sections marked for completion by OPPD.</p>
          <a href={publication.pdf} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center font-semibold text-sawonet-green hover:underline">Read the full original report (PDF, new tab) →</a>
        </section>
      </Container>
    </>
  );
}
