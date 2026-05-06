import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { organization, partners } from '../data/sawonet.js';
import { Link } from '../router.jsx';

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Locally grounded partnerships for national impact"
        description="SAWONET works with national and global partners to advance climate adaptation, pastoralist visibility, women-led sustainable land management, and resilient community systems."
        image
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Current partners"
            title="Collaboration anchored in women-led leadership"
            description="The network is positioned to co-create evidence-based, scalable, and sustainable solutions in communities where women's voices are essential yet often overlooked."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <Card
                key={partner.name}
                className="flex h-full flex-col items-center px-6 py-8 text-center"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-md bg-white px-4">
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="mx-auto h-[70px] max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-sawonet-gold">
                  Partner
                </p>
                <h2 className="mt-3 text-2xl font-bold text-sawonet-navy">{partner.name}</h2>
                <p className="mt-4 leading-7 text-slate-600">{partner.role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sawonet-sand py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionHeader
              title="Why partner with SAWONET?"
              description="SAWONET offers national coverage with deep community access through trusted grassroots organizations working directly with pastoralist, minority, and marginalized groups."
            />
            <p className="mt-6 leading-8 text-slate-700">
              The network has experience in humanitarian response, advocacy, protection, and
              peacebuilding, supported by transparent governance and accountable coordination.
              SAWONET is ready to expand programming and deliver measurable impact across
              Somalia's pastoralist regions.
            </p>
          </div>
          <Card className="border-sawonet-gold/40">
            <h3 className="text-2xl font-bold text-sawonet-navy">Partner with us</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Contact the interim secretariat to explore collaboration, campaign support, climate
              adaptation programming, or joint advocacy.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-md bg-sawonet-green px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Contact {organization.shortName}
            </Link>
          </Card>
        </Container>
      </section>
    </>
  );
}
