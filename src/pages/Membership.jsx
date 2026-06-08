import { useMemo, useState } from 'react';
import Card from '../components/Card.jsx';
import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const membershipCategories = [
  'Individual Woman Member',
  'Youth Member (18-35 years)',
  'Woman Pastoralist Leader',
  'Researcher / Academic',
  'Women-Led CSO Representative',
  'Youth-Led CSO Representative',
];

const organizationTypes = [
  'Women-Led Civil Society Organization',
  'Youth-Led Civil Society Organization',
  'Other',
];

const contributionAreas = [
  'Advocacy',
  'Community Mobilization',
  'Research',
  'Capacity Strengthening',
  'Policy Engagement',
  'Climate Action',
  'Peacebuilding',
  'Youth Leadership',
  'Other',
];

const benefits = [
  'Join a national platform advancing pastoralist women leadership and rights.',
  'Participate in advocacy, campaigns, policy dialogue, and thematic working groups.',
  'Access shared learning, capacity strengthening, research, and partnership opportunities.',
  'Contribute to climate resilience, peacebuilding, protection, and youth leadership action.',
];

const faqs = [
  {
    question: 'Who can apply for membership?',
    answer:
      'SAWONET welcomes individual women, youth leaders, pastoralist leaders, researchers, and representatives of women-led or youth-led civil society organizations.',
  },
  {
    question: 'When is the annual membership fee paid?',
    answer:
      'The annual fee of USD 70 is paid after the application has been reviewed and approved by SAWONET.',
  },
  {
    question: 'How are members involved in governance?',
    answer:
      'Members participate through the Annual General Meeting, thematic engagement, and leadership election processes held every June.',
  },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  region: '',
  organization: '',
  position: '',
  membershipCategory: '',
  applyingForOrganization: 'No',
  organizationType: '',
  experience: '',
  motivation: '',
  contributionAreas: [],
  otherContribution: '',
  feeAcknowledged: false,
  governanceAcknowledged: false,
  accurateInformation: false,
  supportsVision: false,
  agreesPolicies: false,
};

const inputClass =
  'rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sawonet-green focus:ring-2 focus:ring-sawonet-green/20';

const fieldLabelClass = 'grid gap-2 text-sm font-medium text-slate-700';

function TextInput({ label, name, value, onChange, required = false, type = 'text', ...props }) {
  return (
    <label className={fieldLabelClass}>
      <span>
        {label} {required && <span className="text-sawonet-green">*</span>}
      </span>
      <input
        className={inputClass}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
        {...props}
      />
    </label>
  );
}

function Checkbox({ checked, label, name, onChange, required = false, value }) {
  return (
    <label className="flex gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-sawonet-green/40 hover:bg-sawonet-mint/40">
      <input
        checked={checked}
        className="mt-1 h-4 w-4 rounded border-slate-300 text-sawonet-green focus:ring-sawonet-green"
        name={name}
        onChange={onChange}
        required={required}
        type="checkbox"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}

function RadioOption({ checked, label, name, onChange, value }) {
  return (
    <label className="flex gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-sawonet-green/40 hover:bg-sawonet-mint/40">
      <input
        checked={checked}
        className="mt-1 h-4 w-4 border-slate-300 text-sawonet-green focus:ring-sawonet-green"
        name={name}
        onChange={onChange}
        required
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}

export default function Membership() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const selectedContributions = useMemo(
    () => new Set(form.contributionAreas),
    [form.contributionAreas]
  );

  function updateField(event) {
    const { checked, name, type, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'applyingForOrganization' && value === 'No' ? { organizationType: '' } : {}),
    }));
  }

  function updateContribution(event) {
    const { checked, value } = event.target;
    setForm((current) => {
      const next = checked
        ? [...current.contributionAreas, value]
        : current.contributionAreas.filter((area) => area !== value);

      return {
        ...current,
        contributionAreas: next,
        ...(!next.includes('Other') ? { otherContribution: '' } : {}),
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Unable to submit application right now.');
      }

      setForm(initialForm);
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError.message);
      setStatus('error');
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-sawonet-mint">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            alt="Pastoralist women and civil society participants gathered for SAWONET engagement"
            className="h-full w-full object-cover"
            src="/assets/global-gathering-pastoralist-women/group-photo.jpg"
          />
          <div className="absolute inset-0 bg-sawonet-navy/25" />
        </div>
        <Container className="relative grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-sawonet-green shadow-sm ring-1 ring-sawonet-green/15">
              Membership
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-sawonet-navy sm:text-5xl">
              Join SAWONET
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Become part of a growing network of pastoralist women, youth leaders, researchers,
              advocates, and civil society organizations working to advance rights, leadership,
              resilience, climate action, and socio-economic empowerment across Somalia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-green focus-visible:ring-offset-2"
                href="#membership-application"
              >
                Apply for Membership <Icon name="arrowRight" size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-sawonet-blue bg-white px-6 py-3 font-semibold text-sawonet-blue transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sawonet-blue focus-visible:ring-offset-2"
                download
                href="/assets/membership/sawonet-membership-guidelines.pdf"
              >
                Download Guidelines PDF
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="Membership benefits"
            title="A platform for collective voice, learning, and action"
            description="Members help shape SAWONET advocacy, campaigns, and programs while building stronger connections across pastoralist communities and women-led institutions."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit} className="hover:translate-y-0">
                <Icon className="text-sawonet-green" name="shieldCheck" size={28} />
                <p className="mt-4 leading-7 text-slate-600">{benefit}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="membership-application" className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="grid gap-5 lg:sticky lg:top-28">
            <Card className="border-sawonet-green/30 bg-sawonet-mint hover:translate-y-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                Annual Membership Fee
              </p>
              <p className="mt-4 text-4xl font-bold text-sawonet-navy">USD 70</p>
              <p className="mt-3 leading-7 text-slate-700">Per member or organization.</p>
            </Card>
            <Card className="border-sawonet-gold/40 bg-sawonet-sand hover:translate-y-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-sawonet-green">
                Governance
              </p>
              <h2 className="mt-3 text-2xl font-bold text-sawonet-navy">AGM every June</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Annual General Meeting and leadership elections are held every June.
              </p>
            </Card>
          </div>

          <form
            aria-label="SAWONET membership application form"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-7"
            onSubmit={handleSubmit}
          >
            {status === 'success' && (
              <div
                className="mb-6 rounded-md border border-sawonet-green/30 bg-sawonet-mint px-4 py-3 font-medium leading-7 text-sawonet-navy"
                role="status"
              >
                Thank you for your interest in joining the Somali Pastoralist Women Network
                (SAWONET). We have received your application and our team will review it shortly.
              </div>
            )}

            {status === 'error' && (
              <div
                className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 font-medium leading-7 text-red-700"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="grid gap-8">
              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Applicant Information</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <TextInput
                    autoComplete="name"
                    label="Full Name"
                    name="fullName"
                    onChange={updateField}
                    required
                    value={form.fullName}
                  />
                  <TextInput
                    autoComplete="email"
                    label="Email Address"
                    name="email"
                    onChange={updateField}
                    required
                    type="email"
                    value={form.email}
                  />
                  <TextInput
                    autoComplete="tel"
                    label="Phone Number"
                    name="phone"
                    onChange={updateField}
                    required
                    type="tel"
                    value={form.phone}
                  />
                  <TextInput
                    autoComplete="country-name"
                    label="Country of Residence"
                    name="country"
                    onChange={updateField}
                    required
                    value={form.country}
                  />
                  <TextInput
                    label="Region / State"
                    name="region"
                    onChange={updateField}
                    value={form.region}
                  />
                  <TextInput
                    autoComplete="organization"
                    label="Organization Name"
                    name="organization"
                    onChange={updateField}
                    value={form.organization}
                  />
                  <TextInput
                    label="Position / Title"
                    name="position"
                    onChange={updateField}
                    value={form.position}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Membership Category</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {membershipCategories.map((category) => (
                    <RadioOption
                      checked={form.membershipCategory === category}
                      key={category}
                      label={category}
                      name="membershipCategory"
                      onChange={updateField}
                      value={category}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Organization Information</h2>
                <fieldset className="mt-5">
                  <legend className="text-sm font-medium text-slate-700">
                    Are you applying on behalf of an organization?
                  </legend>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    {['Yes', 'No'].map((option) => (
                      <RadioOption
                        checked={form.applyingForOrganization === option}
                        key={option}
                        label={option}
                        name="applyingForOrganization"
                        onChange={updateField}
                        value={option}
                      />
                    ))}
                  </div>
                </fieldset>

                {form.applyingForOrganization === 'Yes' && (
                  <fieldset className="mt-5">
                    <legend className="text-sm font-medium text-slate-700">
                      Organization Type
                    </legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {organizationTypes.map((type) => (
                        <RadioOption
                          checked={form.organizationType === type}
                          key={type}
                          label={type}
                          name="organizationType"
                          onChange={updateField}
                          value={type}
                        />
                      ))}
                    </div>
                  </fieldset>
                )}
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Interest and Experience</h2>
                <div className="mt-5 grid gap-5">
                  <label className={fieldLabelClass}>
                    <span>
                      Describe your experience working with pastoralist communities, women's
                      rights, youth empowerment, climate resilience, or peacebuilding{' '}
                      <span className="text-sawonet-green">*</span>
                    </span>
                    <textarea
                      className={`${inputClass} min-h-40`}
                      name="experience"
                      onChange={updateField}
                      required
                      value={form.experience}
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    <span>
                      Why would you like to join SAWONET?{' '}
                      <span className="text-sawonet-green">*</span>
                    </span>
                    <textarea
                      className={`${inputClass} min-h-36`}
                      name="motivation"
                      onChange={updateField}
                      required
                      value={form.motivation}
                    />
                  </label>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Contribution Areas</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {contributionAreas.map((area) => (
                    <Checkbox
                      checked={selectedContributions.has(area)}
                      key={area}
                      label={area}
                      name="contributionAreas"
                      onChange={updateContribution}
                      value={area}
                    />
                  ))}
                </div>
                {selectedContributions.has('Other') && (
                  <label className={`${fieldLabelClass} mt-4`}>
                    Other contribution area
                    <input
                      className={inputClass}
                      name="otherContribution"
                      onChange={updateField}
                      value={form.otherContribution}
                    />
                  </label>
                )}
              </section>

              <section className="grid gap-4 rounded-lg border border-sawonet-green/20 bg-sawonet-mint p-5">
                <h2 className="text-2xl font-bold text-sawonet-navy">Membership Fee</h2>
                <p className="leading-7 text-slate-700">
                  Annual Membership Fee: <strong>USD 70 per member/organization</strong>
                </p>
                <Checkbox
                  checked={form.feeAcknowledged}
                  label="I understand and agree to pay the annual membership fee upon approval."
                  name="feeAcknowledged"
                  onChange={updateField}
                  required
                />
              </section>

              <section className="grid gap-4 rounded-lg border border-sawonet-gold/30 bg-sawonet-sand p-5">
                <h2 className="text-2xl font-bold text-sawonet-navy">Governance</h2>
                <p className="leading-7 text-slate-700">
                  Annual General Meeting (AGM) and leadership elections are held every June.
                </p>
                <Checkbox
                  checked={form.governanceAcknowledged}
                  label="I understand and acknowledge this governance structure."
                  name="governanceAcknowledged"
                  onChange={updateField}
                  required
                />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-sawonet-navy">Declaration</h2>
                <div className="mt-5 grid gap-3">
                  <Checkbox
                    checked={form.accurateInformation}
                    label="Information provided is accurate"
                    name="accurateInformation"
                    onChange={updateField}
                    required
                  />
                  <Checkbox
                    checked={form.supportsVision}
                    label="I support SAWONET's vision and mission"
                    name="supportsVision"
                    onChange={updateField}
                    required
                  />
                  <Checkbox
                    checked={form.agreesPolicies}
                    label="I agree to follow the Network's constitution and policies"
                    name="agreesPolicies"
                    onChange={updateField}
                    required
                  />
                </div>
              </section>
            </div>

            <button
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-sawonet-green px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
              disabled={status === 'submitting'}
              type="submit"
            >
              {status === 'submitting' ? 'Submitting Application' : 'Submit Membership Application'}
              <Icon name="arrowRight" size={18} />
            </button>
          </form>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            centered
            eyebrow="FAQs"
            title="Membership questions"
            description="Key details for applicants before submitting the online form."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <Card key={faq.question} className="hover:translate-y-0">
                <h3 className="text-xl font-bold text-sawonet-navy">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
