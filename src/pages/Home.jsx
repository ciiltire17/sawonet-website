import BrandLogo from '../components/BrandLogo.jsx';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { memberNgos } from '../data/memberNgos.js';
import {
  campaigns,
  glfAfrica2026,
  impactStats,
  organization,
  partners,
  thematicAreas,
} from '../data/sawonet.js';
import { Link } from '../router.jsx';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sawonet-mint via-white to-sawonet-sand">
        <Container className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-sawonet-green shadow-sm ring-1 ring-slate-200">
              {organization.tagline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-sawonet-navy sm:text-5xl lg:text-6xl">
              Advancing the rights, leadership, and resilience of pastoralist women across Somalia.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {organization.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Explore Campaigns <Icon name="arrowRight" size={18} />
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center justify-center rounded-md border border-sawonet-blue px-6 py-3 font-semibold text-sawonet-blue transition hover:bg-blue-50"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white bg-white/90 p-6 shadow-soft backdrop-blur">
            <div className="mb-6 flex justify-center">
              <BrandLogo size="xl" showText={false} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-lg p-5 ${
                    index === 0
                      ? 'bg-sawonet-green text-white'
                      : index === 1
                        ? 'bg-sawonet-blue text-white'
                        : 'bg-slate-50 text-sawonet-navy'
                  }`}
                >
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
              <div className="rounded-lg bg-sawonet-sand p-5 sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                  National coverage
                </p>
                <p className="mt-3 font-semibold leading-7 text-sawonet-navy">
                  {organization.coverage.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="grid gap-4">
              <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-soft">
                <img
                  src={glfAfrica2026.images.main.src}
                  alt={glfAfrica2026.images.main.alt}
                  className="aspect-[4/3] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03] sm:aspect-[16/10]"
                  height="1200"
                  width="1800"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-soft">
                  <img
                    src={glfAfrica2026.images.panel.src}
                    alt={glfAfrica2026.images.panel.alt}
                    className="aspect-[16/9] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04] sm:aspect-[4/3]"
                    height="1200"
                    loading="lazy"
                    width="1800"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-soft">
                  <img
                    src={glfAfrica2026.images.speaker.src}
                    alt={glfAfrica2026.images.speaker.alt}
                    className="aspect-[16/9] w-full object-cover object-[50%_28%] transition duration-500 ease-out group-hover:scale-[1.04] sm:aspect-[4/3]"
                    height="2400"
                    loading="lazy"
                    width="1600"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-sawonet-green shadow-sm ring-1 ring-sawonet-green/15">
                GLF Africa 2026 | {glfAfrica2026.location}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-sawonet-navy sm:text-4xl">
                {glfAfrica2026.title}
              </h2>
              <p className="mt-2 text-xl font-semibold text-sawonet-gold">
                {glfAfrica2026.subtitle}
              </p>
              <p className="mt-4 inline-flex rounded-md bg-sawonet-navy px-4 py-2 text-sm font-semibold text-white">
                Speaker participation: SAWONET Director
              </p>
              <p className="mt-5 leading-7 text-slate-600">{glfAfrica2026.description}</p>
              <p className="mt-4 leading-7 text-slate-600">{glfAfrica2026.overview}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {glfAfrica2026.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white bg-white p-4 shadow-sm"
                  >
                    <p className="text-2xl font-bold text-sawonet-navy">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {glfAfrica2026.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-lg border border-sawonet-green/20 bg-sawonet-mint px-4 py-3 text-sm font-semibold leading-6 text-sawonet-navy"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-lg border border-sawonet-gold/30 bg-white px-5 py-4 leading-7 text-slate-700 shadow-sm">
                {glfAfrica2026.outcome}
              </p>
              <Link
                to="/projects#glf-africa-2026"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Read More <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About SAWONET"
            title="A national women-led platform with community roots"
            description="SAWONET brings together women-led and women-serving organizations advancing gender justice, protection, peacebuilding, humanitarian response, climate resilience, and sustainable development."
          />
          <p className="text-lg leading-8 text-slate-600">
            Pastoralist women continue to face drought, displacement, harmful practices, limited
            services, and exclusion from decision-making. SAWONET strengthens their collective
            voice, leadership, and coordinated action while ensuring minority women-led
            organizations and disability inclusion groups are represented.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-sawonet-green/30">
              <h3 className="text-2xl font-bold text-sawonet-navy">Vision</h3>
              <p className="mt-4 leading-7 text-slate-600">{organization.vision}</p>
            </Card>
            <Card className="border-sawonet-gold/40">
              <h3 className="text-2xl font-bold text-sawonet-navy">Mission</h3>
              <p className="mt-4 leading-7 text-slate-600">{organization.mission}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="Thematic areas"
            title="Seven areas of coordinated action"
            description="SAWONET works across humanitarian, development, and peace sectors through evidence-based and community-led interventions."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {thematicAreas.slice(0, 6).map((area) => (
              <Card key={area.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-gold">
                  Thematic area
                </p>
                <h3 className="mt-3 text-xl font-bold text-sawonet-navy">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sawonet-sand py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Current campaign"
              title="Ending Early & Forced Child Marriage"
              description="SAWONET is leading a nationwide advocacy campaign to protect girls' rights and challenge harmful norms."
            />
            <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 font-semibold text-sawonet-green shadow-sm">
              {campaigns[0].label}
            </p>
          </div>
          <Card className="border-sawonet-gold/40">
            <h3 className="text-2xl font-bold text-sawonet-navy">{campaigns[0].status}</h3>
            <p className="mt-4 leading-7 text-slate-600">{campaigns[0].summary}</p>
            <Link
              to="/projects"
              className="mt-6 inline-flex rounded-md bg-sawonet-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Learn about the campaign
            </Link>
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Members"
              title="19 organizations across Somalia"
              description="SAWONET is governed through a General Assembly, a five-member Steering Committee, and thematic working groups."
            />
            <Link className="font-semibold text-sawonet-blue hover:text-sawonet-navy" to="/member-ngos">
              View all members
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {memberNgos.slice(0, 6).map((ngo) => (
              <Card key={ngo.id}>
                <p className="text-sm font-semibold text-sawonet-green">{ngo.role}</p>
                <h3 className="mt-2 text-xl font-bold text-sawonet-navy">{ngo.name}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="Partners"
            title="Working with national and global allies"
            description="SAWONET collaborates on pastoralist visibility, climate adaptation, and women-led sustainable land management."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name}>
                <h3 className="text-xl font-bold text-sawonet-navy">{partner.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{partner.role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sawonet-green py-16 text-white sm:py-20">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center">
            <BrandLogo
              className="shrink-0 [&_*]:text-white [&_img]:bg-white [&_img]:p-1"
              showText={false}
              size="lg"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-100">
                Partner with SAWONET
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Support women-led resilience, protection, peace, and climate action.
              </h2>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-sawonet-green transition hover:bg-green-50"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </>
  );
}
