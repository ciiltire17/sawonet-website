import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { organization, strategicObjectives, values, workingGroups } from '../data/sawonet.js';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Somali Pastoralist Women Network"
        description="SAWONET is a national women-led platform uniting community-rooted organizations across Somalia for the rights, leadership, and resilience of pastoralist women and girls."
        image
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow={organization.tagline}
              title="A platform for collective voice and coordinated action"
              description="SAWONET brings together women-led and women-serving organizations working across pastoralist and marginalized communities."
            />
            <p className="mt-6 leading-8 text-slate-600">
              The network responds to intersecting challenges affecting pastoralist women and
              girls, including drought, displacement, harmful practices, limited services, and
              exclusion from decision-making. It also brings minority women-led organizations and
              disability inclusion organizations into shared planning and advocacy.
            </p>
          </div>
          <div className="grid gap-6">
            <Card>
              <h3 className="text-xl font-bold text-sawonet-navy">Vision</h3>
              <p className="mt-3 leading-7 text-slate-600">{organization.vision}</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-sawonet-navy">Mission</h3>
              <p className="mt-3 leading-7 text-slate-600">{organization.mission}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="Strategic objectives"
            title="What SAWONET is built to achieve"
            description="The network aligns advocacy, capacity, programming, livelihoods, peacebuilding, and indigenous knowledge into a shared national agenda."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strategicObjectives.map((objective) => (
              <Card key={objective.title}>
                <h3 className="text-xl font-bold text-sawonet-navy">{objective.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{objective.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Values"
              title="Guiding principles"
              description="SAWONET's work is grounded in inclusion, accountability, safeguarding, community leadership, indigenous knowledge, solidarity, and climate justice."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-lg bg-sawonet-mint px-4 py-3 font-semibold text-sawonet-navy">
                  {value}
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-sawonet-sand">
            <h3 className="text-2xl font-bold text-sawonet-navy">Structure</h3>
            <p className="mt-4 leading-7 text-slate-700">
              SAWONET is governed by a General Assembly of full members and a five-member
              Steering Committee. The Secretariat serves as Chair and leads coordination,
              administration, and strategic guidance.
            </p>
            <h4 className="mt-6 font-bold text-sawonet-navy">Thematic working groups</h4>
            <ul className="mt-4 space-y-3 text-slate-700">
              {workingGroups.map((group) => (
                <li key={group}>- {group}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>
    </>
  );
}
