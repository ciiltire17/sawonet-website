import { useState } from 'react';
import Container from '../components/Container.jsx';
import EventPhotoGallery from '../components/EventPhotoGallery.jsx';
import { cop17, cop17Hero, cop17Photos } from '../data/cop17.js';
import { Link } from '../router.jsx';

export default function Cop17() {
  const [loadVideo, setLoadVideo] = useState(false);
  return (
    <article>
      <header className="bg-sawonet-navy pb-12 pt-8 text-white sm:pb-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-200"><Link to="/projects" className="inline-flex min-h-11 items-center hover:underline">← Projects & global engagements</Link><span className="ml-3" aria-hidden="true">/ COP17</span></nav>
          <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_0.55fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-200">Global engagement · Mongolia 2026</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{cop17.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{cop17.summary}</p>
            </div>
            <dl className="grid gap-5 border-l-2 border-sawonet-gold pl-6 text-sm leading-6">
              <div><dt className="text-slate-300">Conference dates</dt><dd className="font-semibold"><time dateTime="2026-08-17">17</time>–<time dateTime="2026-08-28">28 August 2026</time></dd></div>
              <div><dt className="text-slate-300">Location</dt><dd className="font-semibold">{cop17.location}</dd></div>
              <div><dt className="text-slate-300">Conference theme</dt><dd className="font-semibold">{cop17.theme}</dd></div>
            </dl>
          </div>
          <a href="#cop17-gallery" className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-md bg-white px-5 py-3 font-semibold text-sawonet-green hover:bg-sawonet-mint">Explore the photo story <span aria-hidden="true">↓</span></a>
        </Container>
      </header>

      <Container className="py-8 sm:py-10">
        <figure>
          <img src={cop17Hero.src} srcSet={cop17Hero.srcSet} sizes="(min-width: 1280px) 1216px, 100vw" width={cop17Hero.width} height={cop17Hero.height} alt={cop17Hero.caption} fetchPriority="high" className="h-auto w-full rounded-lg" />
          <figcaption className="mt-3 text-sm leading-6 text-slate-600">{cop17Hero.caption} Photograph from SAWONET’s supplied event archive.</figcaption>
        </figure>
      </Container>

      <Container className="grid gap-10 pb-14 lg:grid-cols-[1.45fr_0.55fr] lg:gap-16">
        <div className="space-y-9 text-lg leading-8 text-slate-700">
          <section aria-labelledby="cop17-engagement">
            <h2 id="cop17-engagement" className="text-2xl font-bold text-sawonet-navy">Pastoralist perspectives in a global land dialogue</h2>
            <p className="mt-4">SAWONET’s photographic record from Ulaanbaatar brings together conference sessions, roundtable meetings and exchanges with fellow participants. It documents the settings in which people came together to discuss land, livelihoods and resilience, alongside delegation photographs and informal connections across the venue.</p>
            <p className="mt-4">The seventeenth Conference of the Parties to the United Nations Convention to Combat Desertification took place in Mongolia from 17 to 28 August 2026. Its programme brought land restoration, drought resilience, rangelands and food systems into a shared international conversation. <a href="https://www.unccd.int/cop17/programme" className="font-semibold text-sawonet-green underline">Read the official UNCCD programme.</a></p>
          </section>
          <section aria-labelledby="cop17-communities">
            <h2 id="cop17-communities" className="text-2xl font-bold text-sawonet-navy">Local communities and declaration dialogue</h2>
            <p className="mt-4">The COP17 programme included Local Communities Caucus meetings and a high-level dialogue on the place of local communities in land governance. The official agenda connected pastoralist and other community perspectives with land tenure, gender equality and drought resilience.</p>
            <p className="mt-4">The United Nations session record also documents the presentation of the Local Communities’ founding declaration. Together, these discussions provide context for the community exchanges recorded in the photo story below. <a href="https://transcripts.un.org/en/asset/k1j/k1jjmlhgjp" className="font-semibold text-sawonet-green underline">View the UN session record.</a></p>
          </section>
          <section aria-labelledby="cop17-rangelands">
            <h2 id="cop17-rangelands" className="text-2xl font-bold text-sawonet-navy">Rangelands, learning and connections</h2>
            <p className="mt-4">The archive includes programme displays and photographs from discussions on rangeland stewardship and lessons from Africa, as well as youth-centred approaches to drought and desertification. Group photographs and quieter moments between sessions complete this record of the engagement.</p>
          </section>
        </div>
        <aside className="self-start rounded-lg border-t-4 border-sawonet-green bg-sawonet-mint p-6 text-sm leading-7" aria-labelledby="cop17-context">
          <h2 id="cop17-context" className="text-xl font-bold text-sawonet-navy">Conference context</h2>
          <p className="mt-4">UNCCD’s official programme provides the conference dates and wider context for the meetings and themes.</p>
          <ul className="mt-5 space-y-4 font-semibold text-sawonet-green">
            <li><a href="https://www.unccd.int/cop17/programme" className="underline">COP17 programme</a></li>
            <li><a href="https://www.unccd.int/cop17/programme/agenda/local-communities-caucus-0" className="underline">Local Communities Caucus agenda</a></li>
            <li><a href="https://www.unccd.int/cop17/programme/agenda/seats-table-high-level-dialogue-local-communities-land-and-people-day" className="underline">Local communities high-level dialogue</a></li>
          </ul>
          <h3 className="mt-7 font-bold text-sawonet-navy">Earlier engagement</h3>
          <p className="mt-2">Explore SAWONET’s participation in the Global Gathering of Pastoralist Women in Kathmandu, Nepal, 26–29 May 2026.</p>
          <Link to="/projects#global-gathering-pastoralist-women" className="mt-3 inline-flex min-h-11 items-center font-semibold text-sawonet-green underline">Read the Kathmandu story →</Link>
        </aside>
      </Container>

      <section id="cop17-gallery" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-12 sm:py-16" aria-labelledby="cop17-gallery-title">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-sawonet-green">From the event archive</p>
          <h2 id="cop17-gallery-title" className="mt-3 text-3xl font-bold tracking-tight text-sawonet-navy sm:text-4xl">Mongolia, in photographs</h2>
          <EventPhotoGallery photos={cop17Photos} />
          <p className="mt-6 text-sm text-slate-600">Photography: SAWONET event archive.</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="cop17-film">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_0.65fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sawonet-green">A moment from the venue</p>
            <h2 id="cop17-film" className="mt-3 text-3xl font-bold text-sawonet-navy">Scenes from UNCCD COP17, Ulaanbaatar</h2>
            <p id="cop17-film-description" className="mt-5 leading-7 text-slate-600">A 17-second silent view of flags moving in the wind outside the conference venue, filmed during the Mongolia engagement.</p>
            {!loadVideo && <button type="button" onClick={() => setLoadVideo(true)} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-sawonet-green px-5 py-3 font-semibold text-white hover:bg-green-800">Load the venue film · 17 seconds</button>}
            <p className="mt-4 text-sm leading-6 text-slate-500">Playback is optional. The film loads on request and does not play automatically.</p>
          </div>
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-slate-100">
            {loadVideo ? <video controls playsInline preload="none" width="432" height="768" poster={`${cop17.assetPath}/flags-video-poster.webp`} aria-label="Silent film of flags at the COP17 venue" aria-describedby="cop17-film-description" className="h-auto max-h-[34rem] w-full object-contain"><source src={`${cop17.assetPath}/flags-at-the-venue.mp4`} type="video/mp4" /><p>Your browser does not support video playback. <a href={`${cop17.assetPath}/flags-at-the-venue.mp4`}>Open the silent venue film.</a></p></video> : <img src={`${cop17.assetPath}/flags-video-poster.webp`} alt="Rows of flags outside the conference venue beneath a blue sky" loading="lazy" width="432" height="768" className="h-auto max-h-[34rem] w-full object-contain" />}
          </div>
        </Container>
      </section>
    </article>
  );
}
