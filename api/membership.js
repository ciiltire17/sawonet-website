const REQUIRED_FIELDS = [
  'fullName',
  'email',
  'phone',
  'country',
  'membershipCategory',
  'experience',
  'motivation',
];

const CONTRIBUTION_AREAS = [
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

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '');
}

function sanitizeText(value) {
  return String(value || '').trim();
}

function normalizeApplication(body) {
  const contributionAreas = Array.isArray(body.contributionAreas)
    ? body.contributionAreas.filter((area) => CONTRIBUTION_AREAS.includes(area))
    : [];

  return {
    timestamp: new Date().toISOString(),
    fullName: sanitizeText(body.fullName),
    email: sanitizeText(body.email).toLowerCase(),
    phone: sanitizeText(body.phone),
    country: sanitizeText(body.country),
    region: sanitizeText(body.region),
    organization: sanitizeText(body.organization),
    position: sanitizeText(body.position),
    membershipCategory: sanitizeText(body.membershipCategory),
    applyingForOrganization: body.applyingForOrganization === 'Yes' ? 'Yes' : 'No',
    organizationType: body.applyingForOrganization === 'Yes' ? sanitizeText(body.organizationType) : '',
    experience: sanitizeText(body.experience),
    motivation: sanitizeText(body.motivation),
    contributionAreas,
    otherContribution: sanitizeText(body.otherContribution),
    feeAcknowledged: Boolean(body.feeAcknowledged),
    governanceAcknowledged: Boolean(body.governanceAcknowledged),
    accurateInformation: Boolean(body.accurateInformation),
    supportsVision: Boolean(body.supportsVision),
    agreesPolicies: Boolean(body.agreesPolicies),
  };
}

function parseBody(body) {
  if (typeof body !== 'string') return body || {};

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}

function validate(application) {
  const missing = REQUIRED_FIELDS.filter((field) => !application[field]);

  if (!isEmail(application.email)) {
    missing.push('validEmail');
  }

  if (application.applyingForOrganization === 'Yes' && !application.organizationType) {
    missing.push('organizationType');
  }

  if (!application.contributionAreas.length) {
    missing.push('contributionAreas');
  }

  if (
    !application.feeAcknowledged ||
    !application.governanceAcknowledged ||
    !application.accurateInformation ||
    !application.supportsVision ||
    !application.agreesPolicies
  ) {
    missing.push('acknowledgements');
  }

  return missing;
}

function formatEmailBody(application) {
  const contributionAreas = [
    ...application.contributionAreas,
    application.otherContribution ? `Other: ${application.otherContribution}` : '',
  ]
    .filter(Boolean)
    .join(', ');

  return [
    `Timestamp: ${application.timestamp}`,
    `Full Name: ${application.fullName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone}`,
    `Country: ${application.country}`,
    `Region / State: ${application.region || 'Not provided'}`,
    `Organization: ${application.organization || 'Not provided'}`,
    `Position / Title: ${application.position || 'Not provided'}`,
    `Membership Category: ${application.membershipCategory}`,
    `Applying for Organization: ${application.applyingForOrganization}`,
    `Organization Type: ${application.organizationType || 'Not applicable'}`,
    `Contribution Areas: ${contributionAreas}`,
    '',
    'Experience:',
    application.experience,
    '',
    'Motivation:',
    application.motivation,
    '',
    'Acknowledgements:',
    `Annual fee: ${application.feeAcknowledged ? 'Yes' : 'No'}`,
    `Governance: ${application.governanceAcknowledged ? 'Yes' : 'No'}`,
    `Accurate information: ${application.accurateInformation ? 'Yes' : 'No'}`,
    `Supports vision and mission: ${application.supportsVision ? 'Yes' : 'No'}`,
    `Agrees to constitution and policies: ${application.agreesPolicies ? 'Yes' : 'No'}`,
  ].join('\n');
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }
}

async function sendResendEmail({ to, subject, text, replyTo }) {
  if (!process.env.RESEND_API_KEY) return false;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'SAWONET <onboarding@resend.dev>',
      to,
      subject,
      text,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend failed with status ${response.status}`);
  }

  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const application = normalizeApplication(parseBody(req.body));
    const missing = validate(application);

    if (missing.length) {
      return res.status(400).json({ error: 'Missing or invalid fields', fields: missing });
    }

    const googleWebhookUrl = process.env.MEMBERSHIP_SHEETS_WEBHOOK_URL;
    const emailWebhookUrl = process.env.MEMBERSHIP_EMAIL_WEBHOOK_URL;
    const adminEmail = process.env.MEMBERSHIP_TO_EMAIL || 'info@sawonet.org';
    const adminSubject = `New Membership Application - ${application.fullName}`;
    const adminText = formatEmailBody(application);
    const applicantText =
      'Thank you for your interest in joining the Somali Pastoralist Women Network (SAWONET). We have received your application and our team will review it shortly.';

    const configured =
      Boolean(googleWebhookUrl) || Boolean(emailWebhookUrl) || Boolean(process.env.RESEND_API_KEY);

    if (!configured) {
      return res.status(503).json({
        error:
          'Membership submission integrations are not configured. Add MEMBERSHIP_SHEETS_WEBHOOK_URL or RESEND_API_KEY.',
      });
    }

    const tasks = [];

    if (googleWebhookUrl) {
      tasks.push(postJson(googleWebhookUrl, application));
    }

    if (emailWebhookUrl) {
      tasks.push(
        postJson(emailWebhookUrl, {
          ...application,
          to: adminEmail,
          subject: adminSubject,
          message: adminText,
          confirmationSubject: 'Thank You for Applying to Join SAWONET',
          confirmationMessage: applicantText,
        })
      );
    }

    tasks.push(
      sendResendEmail({
        to: adminEmail,
        subject: adminSubject,
        text: adminText,
        replyTo: application.email,
      })
    );

    tasks.push(
      sendResendEmail({
        to: application.email,
        subject: 'Thank You for Applying to Join SAWONET',
        text: applicantText,
        replyTo: adminEmail,
      })
    );

    await Promise.all(tasks);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'Unable to submit application right now. Please try again later.',
      detail: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
