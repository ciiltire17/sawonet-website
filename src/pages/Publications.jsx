import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import PublicationCard from '../components/PublicationCard.jsx';
import { publications, publicationSeries, researchCountries } from '../data/publications.js';

export default function Publications() {
  return (
    <>
      <PageHero eyebrow="Evidence for policy & action" title="Research & Publications" description="Explore SAWONET's collaborative research and policy engagement on pastoralist women's rights, climate resilience, inclusive governance and peacebuilding. These publications bring evidence and women's perspectives into policy dialogue." />
      <section className="py-12 sm:py-16" aria-labelledby="collection-title">
        <Container>
          <div className="mb-10 grid gap-6 border-b border-slate-200 pb-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sawonet-green">Featured collection · {publications.length} policy briefs</p>
              <h2 id="collection-title" className="text-2xl font-bold leading-snug tracking-tight text-sawonet-navy sm:text-3xl">{publicationSeries} | August 2026</h2>
            </div>
            <div className="text-sm leading-7 text-slate-600">
              <p>A joint policy brief series drawing on key informant interviews with pastoralist women-led, humanitarian, climate-resilience and peacebuilding organizations.</p>
              <p className="mt-3"><span className="font-semibold text-sawonet-navy">Research countries:</span> {researchCountries.join(', ')}.</p>
            </div>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {publications.map((publication) => <PublicationCard key={publication.slug} publication={publication} />)}
          </div>
          <p className="mt-8 text-sm leading-6 text-slate-600">Original publications by Joyce Takaindisa (CGIAR), Fozia Noor (OPPD), Barret Kamunzu (OPPD) and Yasmin Hassan (OPPD). Full citations, acknowledgements and credits accompany each brief.</p>
        </Container>
      </section>
    </>
  );
}
