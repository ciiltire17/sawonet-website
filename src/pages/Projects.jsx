import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { campaigns } from '../data/sawonet.js';

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects / Campaigns"
        title="Campaigns and partnerships advancing protection and resilience"
        description="SAWONET's current priorities include ending early and forced child marriage and strengthening climate adaptation for pastoralist women."
        image
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {campaigns.map((campaign) => (
              <Card key={campaign.title} className="border-sawonet-gold/40">
                <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-gold">
                  {campaign.status}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-sawonet-navy">{campaign.title}</h2>
                <p className="mt-2 inline-flex rounded-full bg-sawonet-mint px-3 py-1 font-semibold text-sawonet-green">
                  {campaign.label}
                </p>
                <p className="mt-5 leading-7 text-slate-600">{campaign.summary}</p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {campaign.activities.map((activity) => (
                    <li key={activity}>- {activity}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sawonet-sand py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Pastoralist realities"
            title="Responding to drought, displacement, and food insecurity"
            description="Somalia is facing escalating multi-season drought conditions, including livestock deaths, displacement, food insecurity, depleted water sources, and overcrowded displacement camps. Pastoralist women and girls remain disproportionately affected by these shocks."
          />
        </Container>
      </section>
    </>
  );
}
