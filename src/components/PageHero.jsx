import Container from './Container.jsx';

export default function PageHero({ eyebrow, title, description, image = false }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {image && (
        <img
          src="/assets/sawonet-logo-512.png"
          alt=""
          className="pointer-events-none absolute -right-16 top-8 hidden h-56 w-56 rounded-full object-contain opacity-[0.06] lg:block"
          height="224"
          loading="lazy"
          width="224"
        />
      )}
      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sawonet-green">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-sawonet-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </Container>
    </section>
  );
}
