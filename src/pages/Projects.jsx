import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { campaigns, glfAfrica2026 } from '../data/sawonet.js';

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects / Campaigns"
        title="Campaigns and partnerships advancing protection and resilience"
        description="SAWONET's current priorities include ending early and forced child marriage, strengthening climate adaptation for pastoralist women, and participating in rangelands dialogue such as GLF Africa 2026."
        image
      />

      <section className="py-16 sm:py-20">
        <Container>
          <article
            id="glf-africa-2026"
            className="mb-10 overflow-hidden rounded-lg border border-sawonet-green/20 bg-white shadow-soft"
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <img
                src={glfAfrica2026.images.panel.src}
                alt={glfAfrica2026.images.panel.alt}
                className="h-72 w-full object-cover sm:h-96 lg:h-full"
                height="933"
                loading="lazy"
                width="1400"
              />
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                  GLF Africa 2026
                </p>
                <h2 className="mt-3 text-3xl font-bold text-sawonet-navy">
                  {glfAfrica2026.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-sawonet-gold">
                  {glfAfrica2026.subtitle}
                </p>
                <p className="mt-5 leading-7 text-slate-600">{glfAfrica2026.description}</p>
                <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
                  {glfAfrica2026.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-semibold"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <img
                    src={glfAfrica2026.images.main.src}
                    alt={glfAfrica2026.images.main.alt}
                    className="h-56 w-full rounded-lg object-cover object-center"
                    height="2100"
                    loading="lazy"
                    width="1400"
                  />
                  <img
                    src={glfAfrica2026.images.speaker.src}
                    alt={glfAfrica2026.images.speaker.alt}
                    className="h-56 w-full rounded-lg object-cover object-center"
                    height="933"
                    loading="lazy"
                    width="1400"
                  />
                </div>
              </div>
            </div>
          </article>
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
