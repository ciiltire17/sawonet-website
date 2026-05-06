import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { memberNgos } from '../data/memberNgos.js';
import { organization, workingGroups } from '../data/sawonet.js';

export default function MemberNgos() {
  return (
    <>
      <PageHero
        eyebrow="Member NGOs"
        title="19 women-led and women-serving organizations"
        description="SAWONET members represent diverse pastoralist and marginalized communities across Somalia's federal states and regions."
        image
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Network membership"
            title="Community-rooted organizations across Somalia"
            description={`Coverage includes ${organization.coverage.join(', ')}.`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberNgos.map((ngo) => (
              <Card key={ngo.id}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sawonet-mint text-sm font-bold text-sawonet-green ring-1 ring-sawonet-green/20">
                  {ngo.name.slice(0, 2)}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                  {ngo.role}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-sawonet-navy">{ngo.name}</h2>
                {ngo.description && (
                  <p className="mt-3 leading-7 text-slate-600">{ngo.description}</p>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Governance"
            title="Inclusive structure for coordination"
            description="The network is governed by a General Assembly of full members and a five-member Steering Committee. The Secretariat serves as Chair and leads coordination, administration, and strategic guidance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {workingGroups.map((group) => (
              <div key={group} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-sawonet-navy">{group}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
