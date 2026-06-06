import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { campaigns, glfAfrica2026, globalGatheringPastoralistWomen } from '../data/sawonet.js';

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects / Campaigns"
        title="Campaigns and partnerships advancing protection and resilience"
        description="SAWONET's current priorities include ending early and forced child marriage, strengthening climate adaptation for pastoralist women, and contributing to global rangelands dialogue through GLF Africa 2026 and the Global Gathering of Pastoralist Women."
        image
      />

      <section className="py-16 sm:py-20">
        <Container>
          <article
            id="global-gathering-pastoralist-women"
            className="mb-10 overflow-hidden rounded-lg border border-sawonet-gold/30 bg-white shadow-soft"
          >
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="p-6 sm:p-8">
                <p className="inline-flex rounded-full bg-sawonet-sand px-4 py-2 text-sm font-semibold uppercase tracking-wide text-sawonet-green ring-1 ring-sawonet-gold/30">
                  Global gathering | {globalGatheringPastoralistWomen.dates}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-sawonet-navy">
                  {globalGatheringPastoralistWomen.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-sawonet-gold">
                  {globalGatheringPastoralistWomen.subtitle}
                </p>
                <p className="mt-5 rounded-md border-l-4 border-sawonet-green bg-sawonet-mint px-5 py-4 font-semibold leading-7 text-sawonet-navy">
                  {globalGatheringPastoralistWomen.theme}
                </p>
                <p className="mt-5 leading-7 text-slate-600">
                  {globalGatheringPastoralistWomen.description}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {globalGatheringPastoralistWomen.representation}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {globalGatheringPastoralistWomen.overview}
                </p>
                <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
                  {globalGatheringPastoralistWomen.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-sawonet-green/20 bg-slate-50 px-4 py-3 font-semibold leading-6"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg border border-sawonet-gold/30 bg-sawonet-sand px-5 py-4 leading-7 text-sawonet-navy">
                  {globalGatheringPastoralistWomen.outcome}
                </p>
              </div>
              <div className="grid gap-4 bg-slate-50 p-4 sm:p-6">
                <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-sm">
                  <img
                    src={globalGatheringPastoralistWomen.images.opening.src}
                    alt={globalGatheringPastoralistWomen.images.opening.alt}
                    className="aspect-[4/3] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                    height="960"
                    loading="lazy"
                    width="1280"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-sm">
                    <img
                      src={globalGatheringPastoralistWomen.images.discussion.src}
                      alt={globalGatheringPastoralistWomen.images.discussion.alt}
                      className="aspect-[4/3] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                      height="1280"
                      loading="lazy"
                      width="1280"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-sm">
                    <img
                      src={globalGatheringPastoralistWomen.images.declaration.src}
                      alt={globalGatheringPastoralistWomen.images.declaration.alt}
                      className="aspect-[4/3] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                      height="810"
                      loading="lazy"
                      width="1080"
                    />
                  </div>
                </div>
                <div className="group overflow-hidden rounded-lg border border-white bg-white shadow-sm">
                  <img
                    src={globalGatheringPastoralistWomen.images.group.src}
                    alt={globalGatheringPastoralistWomen.images.group.alt}
                    className="aspect-[16/9] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                    height="1114"
                    loading="lazy"
                    width="1820"
                  />
                </div>
              </div>
            </div>
          </article>

          <article
            id="glf-africa-2026"
            className="mb-10 overflow-hidden rounded-lg border border-sawonet-green/20 bg-white shadow-soft"
          >
            <div className="grid lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="group overflow-hidden bg-slate-100">
                <img
                  src={glfAfrica2026.images.main.src}
                  alt={glfAfrica2026.images.main.alt}
                  className="h-80 w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03] sm:h-[34rem] lg:h-[42rem]"
                  height="1200"
                  loading="lazy"
                  width="1800"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="inline-flex rounded-full bg-sawonet-mint px-4 py-2 text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                  GLF Africa 2026 | {glfAfrica2026.dates}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-sawonet-navy">
                  {glfAfrica2026.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-sawonet-gold">
                  {glfAfrica2026.subtitle}
                </p>
                <p className="mt-4 inline-flex rounded-md bg-sawonet-navy px-4 py-2 text-sm font-semibold text-white">
                  Speaker participation: Ms. Fozia Noor
                </p>
                <p className="mt-5 leading-7 text-slate-600">{glfAfrica2026.description}</p>
                <p className="mt-4 leading-7 text-slate-600">{glfAfrica2026.overview}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {glfAfrica2026.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <p className="text-2xl font-bold text-sawonet-navy">{stat.value}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
                  {glfAfrica2026.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-sawonet-green/20 bg-sawonet-mint px-4 py-3 font-semibold"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg border border-sawonet-gold/30 bg-sawonet-sand px-5 py-4 leading-7 text-sawonet-navy">
                  {glfAfrica2026.outcome}
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                    <img
                      src={glfAfrica2026.images.panel.src}
                      alt={glfAfrica2026.images.panel.alt}
                      className="aspect-[4/3] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                      height="1200"
                      loading="lazy"
                      width="1800"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                    <img
                      src={glfAfrica2026.images.speaker.src}
                      alt={glfAfrica2026.images.speaker.alt}
                      className="aspect-[4/3] w-full object-cover object-[50%_28%] transition duration-500 ease-out group-hover:scale-[1.04]"
                      height="2400"
                      loading="lazy"
                      width="1600"
                    />
                  </div>
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
