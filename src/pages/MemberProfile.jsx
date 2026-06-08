import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { memberNgos } from '../data/memberNgos.js';
import { Link } from '../router.jsx';

function DetailLogo({ member }) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200">
      {member.logo ? (
        <img
          alt={member.logoAlt || `${member.name} logo`}
          className="h-full w-full object-contain"
          height="96"
          src={member.logo}
          width="96"
        />
      ) : (
        <Icon className="text-sawonet-green" name="building" size={42} />
      )}
    </div>
  );
}

export default function MemberProfile({ memberId }) {
  const member = memberNgos.find((ngo) => ngo.id === memberId);

  if (!member) {
    return (
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <Card className="hover:translate-y-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
              Member Profile
            </p>
            <h1 className="mt-3 text-3xl font-bold text-sawonet-navy">Profile not found</h1>
            <Link
              className="mt-6 inline-flex items-center gap-2 font-semibold text-sawonet-green hover:text-sawonet-navy"
              to="/member-ngos"
            >
              Back to member organizations <Icon name="arrowRight" size={16} />
            </Link>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="bg-sawonet-mint py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <DetailLogo member={member} />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                {member.role}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-sawonet-navy sm:text-5xl">
                {member.name} ({member.shortName})
              </h1>
              {member.tagline && (
                <p className="mt-4 text-xl font-semibold leading-8 text-sawonet-green">
                  "{member.tagline}"
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                Founded
              </p>
              <p className="mt-2 text-2xl font-bold text-sawonet-navy">{member.founded}</p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                Headquarters
              </p>
              <p className="mt-2 font-semibold leading-6 text-sawonet-navy">
                {member.headquarters}
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                Coverage
              </p>
              <p className="mt-2 font-semibold leading-6 text-sawonet-navy">{member.region}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="About"
              title="Organization overview"
              description={member.description}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card className="border-sawonet-green/30 hover:translate-y-0">
                <h2 className="text-2xl font-bold text-sawonet-navy">Mission</h2>
                <p className="mt-4 leading-7 text-slate-600">{member.mission}</p>
              </Card>
              <Card className="border-sawonet-gold/40 hover:translate-y-0">
                <h2 className="text-2xl font-bold text-sawonet-navy">Vision</h2>
                <p className="mt-4 leading-7 text-slate-600">{member.vision}</p>
              </Card>
            </div>
          </div>

          <Card className="bg-slate-50 hover:translate-y-0">
            <h2 className="text-2xl font-bold text-sawonet-navy">Focus Areas</h2>
            <div className="mt-5 grid gap-3">
              {member.focusAreas.map((area) => (
                <div
                  className="rounded-md border border-sawonet-green/15 bg-white px-4 py-3 font-semibold leading-6 text-slate-700"
                  key={area}
                >
                  {area}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="hover:translate-y-0">
            <Icon className="text-sawonet-green" name="mapPin" size={28} />
            <h2 className="mt-4 text-2xl font-bold text-sawonet-navy">Coverage Area</h2>
            <p className="mt-4 leading-7 text-slate-600">{member.coverage}</p>
          </Card>

          <Card className="hover:translate-y-0">
            <Icon className="text-sawonet-green" name="shieldCheck" size={28} />
            <h2 className="mt-4 text-2xl font-bold text-sawonet-navy">Registration</h2>
            <ul className="mt-4 grid gap-3">
              {member.registration.map((item) => (
                <li
                  className="rounded-md bg-sawonet-mint px-4 py-3 font-semibold text-sawonet-navy"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="hover:translate-y-0">
            <Icon className="text-sawonet-green" name="mail" size={28} />
            <h2 className="mt-4 text-2xl font-bold text-sawonet-navy">Contact Information</h2>
            <div className="mt-4 grid gap-3 leading-7 text-slate-600">
              <a
                className="font-semibold text-sawonet-blue hover:text-sawonet-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green"
                href={`tel:${member.contact.phone}`}
              >
                {member.contact.phone}
              </a>
              <a
                className="font-semibold text-sawonet-blue hover:text-sawonet-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green"
                href={`mailto:${member.contact.email}`}
              >
                {member.contact.email}
              </a>
              <p>{member.contact.location}</p>
            </div>
          </Card>
        </Container>
      </section>

      <section className="bg-sawonet-green py-12 text-white">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-100">
              SAWONET member profile
            </p>
            <h2 className="mt-2 text-3xl font-bold">Action for Peace Education and Development Organization</h2>
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-sawonet-green transition hover:bg-green-50"
            to="/member-ngos"
          >
            Back to Members
          </Link>
        </Container>
      </section>
    </>
  );
}
