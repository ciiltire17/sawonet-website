import { useState } from 'react';
import Container from '../components/Container.jsx';
import { Link } from '../router.jsx';
import { statement } from '../data/statement.js';
import text from '../data/statementText.json';

export function StatementFeature() {
  return <div className="rounded-lg border border-sawonet-green/20 bg-sawonet-mint p-6 sm:p-10">
    <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">{statement.category} · {statement.date}</p>
    <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-sawonet-navy sm:text-4xl">{statement.title}</h2>
    <p className="mt-4 leading-7 text-slate-600">{statement.campaign}</p>
    <Link to={statement.path} className="mt-6 inline-flex rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white hover:bg-green-700">Read the statement · English / Soomaali</Link>
  </div>;
}
export default function Statement() {
  const [language, setLanguage] = useState('en');
  const paragraphs = text[language];
  return <>
    <header className="bg-sawonet-mint py-12 sm:py-16"><Container>
      <Link to="/news" className="font-semibold text-sawonet-green">← News & Events</Link>
      <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-sawonet-green">{statement.category}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-sawonet-navy sm:text-5xl">{statement.title}</h1>
      <p className="mt-6 text-slate-600"><time dateTime="2026-11-25">{statement.date}</time> · SAWONET</p>
      <p className="mt-3 font-medium text-sawonet-green">{statement.campaign}</p>
    </Container></header>
    <Container className="py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0">
          <div role="group" aria-label="Statement language" className="mb-8 flex flex-wrap gap-3">
            {[['en','English'],['so','Soomaali']].map(([code,label]) => <button key={code} type="button" lang={code} aria-pressed={language === code} onClick={() => setLanguage(code)} className={`rounded-md border px-5 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${language === code ? 'border-sawonet-green bg-sawonet-green text-white' : 'border-slate-300 bg-white text-sawonet-navy'}`}>{label}</button>)}
          </div>
          <article lang={language} aria-label={language === 'en' ? 'English statement' : 'Bayaanka Soomaaliga'} className="max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((p,i) => i === 2 ? <h2 key={i} className="text-3xl font-bold leading-tight text-sawonet-navy">{p}</h2> : i === 1 || i === 8 ? <h3 key={i} className="font-bold text-sawonet-green">{p}</h3> : <p key={i} className={i === 0 || i === 16 ? 'font-semibold' : i === 17 ? 'break-words text-base font-semibold text-sawonet-green' : ''}>{p}</p>)}
          </article>
          <noscript><article lang="so" className="mt-12 space-y-5">{text.so.map((p,i)=><p key={i}>{p}</p>)}</article></noscript>
        </div>
        <aside className="self-start rounded-lg border border-slate-200 bg-slate-50 p-6" aria-label="Statement downloads">
          <h2 className="text-xl font-bold text-sawonet-navy">Download the statement</h2>
          <p className="mt-3 leading-7 text-slate-600">Complete English and Somali versions.</p>
          <a download href={`${statement.assets}/sawonet-collective-statement.pdf`} className="mt-5 block rounded-md bg-sawonet-green px-4 py-3 text-center font-semibold text-white">Download PDF</a>
          <a download href={`${statement.assets}/sawonet-collective-statement.docx`} className="mt-3 block rounded-md border border-slate-300 px-4 py-3 text-center font-semibold text-sawonet-navy">Original Word document</a>
        </aside>
      </div>
      <section className="mt-16 border-t border-slate-200 pt-12" aria-labelledby="campaign-videos">
        <h2 id="campaign-videos" className="text-3xl font-bold text-sawonet-navy">Campaign videos</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {[1,2].map(i => <figure key={i} className="mx-auto w-full max-w-sm"><video controls playsInline preload="none" poster={`${statement.assets}/poster-${i}.jpg`} width="576" height="1024" aria-label={`SAWONET campaign video ${i}`} className="aspect-[9/16] h-auto w-full rounded-lg bg-sawonet-navy"><source src={`${statement.assets}/campaign-${i}.mp4`} type="video/mp4" /><a href={`${statement.assets}/campaign-${i}.mp4`}>Download campaign video {i}</a></video><figcaption className="mt-3 text-sm text-slate-600">SAWONET campaign video {i} · <a className="underline" href={`${statement.assets}/campaign-${i}.mp4`} download>Download original video</a></figcaption></figure>)}
        </div>
      </section>
    </Container>
  </>;
}
