import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { memberNgos } from '../data/memberNgos.js';
import { organization, workingGroups } from '../data/sawonet.js';

function MemberLogo({ ngo }) {
  if (ngo.logo) {
    return (
      <img
        src={ngo.logo}
        alt={ngo.logoAlt || `${ngo.name} logo`}
        className="h-16 w-16 rounded-lg object-contain"
        height="64"
        loading="lazy"
        width="64"
      />
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-sawonet-green/20 bg-sawonet-mint text-sawonet-green">
      <Icon name="building" size={28} />
    </div>
  );
}

function LatestActivity({ activity }) {
  const previewImages = activity.images.slice(0, 4);
  const additionalImages = activity.images.slice(4);

  return (
    <div className="mt-6 border-t border-sawonet-green/15 pt-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-gold">
        Latest Activity
      </p>
      <h3 className="mt-2 text-2xl font-bold leading-tight text-sawonet-navy">
        {activity.title}
      </h3>
      <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-3">
        <p className="rounded-md bg-sawonet-mint px-3 py-2 text-sawonet-navy">
          {activity.location}
        </p>
        <p className="rounded-md bg-sawonet-sand px-3 py-2 text-sawonet-navy">
          {activity.date}
        </p>
        <p className="rounded-md bg-slate-50 px-3 py-2 text-sawonet-navy ring-1 ring-slate-200">
          {activity.beneficiaries}
        </p>
      </div>
      <p className="mt-4 leading-7 text-slate-600">{activity.summary}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {previewImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="aspect-[4/3] w-full rounded-lg object-cover object-center"
            height="1024"
            loading="lazy"
            width="768"
          />
        ))}
      </div>

      <details className="mt-5">
        <summary className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-sawonet-green px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700">
          Read More <Icon name="arrowRight" size={16} />
        </summary>
        <div className="mt-5 space-y-5">
          <p className="leading-7 text-slate-600">{activity.details}</p>
          <div>
            <p className="font-semibold text-sawonet-navy">Impact highlights</p>
            <ul className="mt-3 grid gap-3 text-slate-700 sm:grid-cols-2">
              {activity.impactHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg border border-sawonet-green/20 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {additionalImages.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full rounded-lg object-cover object-center"
                height="1024"
                loading="lazy"
                width="768"
              />
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}

function MemberCard({ ngo, featured = false }) {
  return (
    <article
      id={ngo.id}
      className={`group flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
        featured || ngo.latestActivity ? 'border-sawonet-green/30 lg:col-span-2' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200 transition group-hover:ring-sawonet-green/30">
          <MemberLogo ngo={ngo} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
            {ngo.role}
          </p>
          <h2 className="mt-2 text-xl font-bold leading-tight text-sawonet-navy sm:text-2xl">
            {ngo.name}
          </h2>
          {ngo.shortName !== ngo.name && (
            <p className="mt-1 text-sm font-semibold text-slate-500">{ngo.shortName}</p>
          )}
        </div>
      </div>

      <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Icon name="mapPin" size={16} className="text-sawonet-gold" />
        {ngo.region}
      </p>

      <p className="mt-4 flex-1 leading-7 text-slate-600">{ngo.description}</p>

      {ngo.credentials?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {ngo.credentials.map((credential) => (
            <span
              key={credential}
              className="rounded-full bg-sawonet-sand px-3 py-1 text-xs font-semibold text-sawonet-navy"
            >
              {credential}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {ngo.focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
          >
            {area}
          </span>
        ))}
      </div>

      {ngo.latestActivity && <LatestActivity activity={ngo.latestActivity} />}

      <div className="mt-6 border-t border-slate-100 pt-5">
        {ngo.profileUrl ? (
          <a
            href={ngo.profileUrl}
            className="inline-flex items-center gap-2 font-semibold text-sawonet-green transition hover:text-sawonet-navy"
            rel="noreferrer"
            target="_blank"
          >
            View Profile <Icon name="arrowRight" size={16} />
          </a>
        ) : (
          <span className="inline-flex items-center rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-500 ring-1 ring-slate-200">
            {ngo.profileStatus}
          </span>
        )}
      </div>
    </article>
  );
}

export default function MemberNgos() {
  const featuredMember = memberNgos.find((ngo) => ngo.id === 'oppd');
  const remainingMembers = memberNgos.filter((ngo) => ngo.id !== 'oppd');

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
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredMember && <MemberCard ngo={featuredMember} featured />}
            {remainingMembers.map((ngo) => (
              <MemberCard key={ngo.id} ngo={ngo} />
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
