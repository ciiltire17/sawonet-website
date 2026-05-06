import BrandLogo from '../components/BrandLogo.jsx';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import { organization } from '../data/sawonet.js';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with SAWONET"
        description="Reach out to the interim secretariat for membership, partnership, campaign, climate adaptation, or advocacy collaboration."
        image
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            <Card className="bg-sawonet-mint">
              <BrandLogo size="lg" />
              <p className="mt-5 leading-7 text-slate-700">
                SAWONET welcomes conversations with NGOs, community partners, donors, and
                institutions committed to women-led pastoralist resilience, protection,
                peacebuilding, and sustainable development.
              </p>
            </Card>
            <Card>
              <Icon className="text-sawonet-green" name="mail" size={28} />
              <h2 className="mt-4 text-xl font-bold text-sawonet-navy">Email</h2>
              <a
                className="mt-2 inline-flex font-medium text-sawonet-blue hover:text-sawonet-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green"
                href={`mailto:${organization.contact.email}`}
              >
                {organization.contact.email}
              </a>
            </Card>
            <Card>
              <Icon className="text-sawonet-green" name="phone" size={28} />
              <h2 className="mt-4 text-xl font-bold text-sawonet-navy">Phone</h2>
              <a
                className="mt-2 inline-flex font-medium text-sawonet-blue hover:text-sawonet-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green"
                href={`tel:${organization.contact.phone}`}
              >
                {organization.contact.phone}
              </a>
            </Card>
            <Card>
              <Icon className="text-sawonet-green" name="network" size={28} />
              <h2 className="mt-4 text-xl font-bold text-sawonet-navy">Website</h2>
              <a
                className="mt-2 inline-flex font-medium text-sawonet-blue hover:text-sawonet-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green"
                href={`https://${organization.contact.website}`}
              >
                {organization.contact.website}
              </a>
            </Card>
          </div>

          <form
            aria-label="Contact form"
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-sawonet-green focus:ring-2 focus:ring-sawonet-green/20"
                  autoComplete="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-sawonet-green focus:ring-2 focus:ring-sawonet-green/20"
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Subject
                <input
                  className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-sawonet-green focus:ring-2 focus:ring-sawonet-green/20"
                  type="text"
                  name="subject"
                  placeholder="Partnership, membership, campaign, or general inquiry"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Message
                <textarea
                  className="min-h-40 rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-sawonet-green focus:ring-2 focus:ring-sawonet-green/20"
                  name="message"
                  placeholder="Write your message"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
