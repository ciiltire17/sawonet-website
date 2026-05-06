import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { thematicAreas } from '../data/sawonet.js';

const areaIcons = ['heartHandshake', 'handshake', 'shieldCheck', 'leaf', 'barChart', 'users', 'network'];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Coordinated action for pastoralist women and girls"
        description="SAWONET delivers evidence-based and community-led interventions across humanitarian, development, and peace sectors."
        image
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="Seven thematic areas"
            title="A practical framework for impact"
            description="Through its member organizations, SAWONET advances gender justice, protection, peacebuilding, humanitarian response, climate resilience, inclusive governance, livelihoods, and digital innovation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {thematicAreas.map((area, index) => (
              <Card key={area.title}>
                <Icon
                  className="text-sawonet-green"
                  name={areaIcons[index] || 'network'}
                  size={34}
                />
                <h2 className="mt-5 text-2xl font-bold text-sawonet-navy">{area.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sawonet-sand py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Additional activities"
            title="Integrated services for community resilience"
            description="SAWONET members also work across health and SRH services, GBV services, child protection, education in emergencies, nutrition, market support, cash-plus programming, coordination, advocacy, and policy engagement."
          />
        </Container>
      </section>
    </>
  );
}
