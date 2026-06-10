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
    `Email Address: ${application.email}`,
    `Phone Number: ${application.phone}`,
    `Country of Residence: ${application.country}`,
    `Region / State: ${application.region || 'Not provided'}`,
    `Organization Name: ${application.organization || 'Not provided'}`,
    `Position / Title: ${application.position || 'Not provided'}`,
    `Membership Category: ${application.membershipCategory}`,
    `Applying on behalf of organization: ${application.applyingForOrganization}`,
    `Organization Type: ${application.organizationType || 'Not applicable'}`,
    '',
    'Experience:',
    application.experience,
    '',
    'Reason for joining:',
    application.motivation,
    '',
    `Contribution Areas: ${contributionAreas}`,
    '',
    'Acknowledgements:',
    `Membership fee acknowledgement: ${application.feeAcknowledged ? 'Yes' : 'No'}`,
    `Governance acknowledgement: ${application.governanceAcknowledged ? 'Yes' : 'No'}`,
    '',
    'Declaration confirmations:',
    `Information provided is accurate: ${application.accurateInformation ? 'Yes' : 'No'}`,
    `Supports SAWONET vision and mission: ${application.supportsVision ? 'Yes' : 'No'}`,
    `Agrees to follow the Network constitution and policies: ${application.agreesPolicies ? 'Yes' : 'No'}`,
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

async function sendFormspreeEmail({ application, endpoint, message, subject }) {
  if (!endpoint) return false;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _subject: subject,
      subject,
      name: application.fullName,
      email: application.email,
      phone: application.phone,
      message,
      fullName: application.fullName,
      country: application.country,
      region: application.region,
      organization: application.organization,
      position: application.position,
      membershipCategory: application.membershipCategory,
      applyingForOrganization: application.applyingForOrganization,
      organizationType: application.organizationType,
      experience: application.experience,
      motivation: application.motivation,
      contributionAreas: application.contributionAreas.join(', '),
      otherContribution: application.otherContribution,
      feeAcknowledged: application.feeAcknowledged ? 'Yes' : 'No',
      governanceAcknowledged: application.governanceAcknowledged ? 'Yes' : 'No',
      accurateInformation: application.accurateInformation ? 'Yes' : 'No',
      supportsVision: application.supportsVision ? 'Yes' : 'No',
      agreesPolicies: application.agreesPolicies ? 'Yes' : 'No',
    }),
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => '');
    throw new Error(`Formspree failed with status ${response.status}: ${responseText}`);
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
    const formspreeEndpoint = process.env.MEMBERSHIP_FORMSPREE_ENDPOINT;
    const adminEmail = process.env.MEMBERSHIP_TO_EMAIL || 'info@sawonet.org';
    const adminSubject = `New SAWONET Membership Application - ${application.fullName}`;
    const adminText = formatEmailBody(application);
    const applicantText =
      'Thank you for your interest in joining the Somali Pastoralist Women Network (SAWONET). We have received your application and our team will review it shortly.';

    const emailConfigured =
      Boolean(emailWebhookUrl) || Boolean(formspreeEndpoint) || Boolean(process.env.RESEND_API_KEY);

    if (!emailConfigured) {
      return res.status(503).json({
        error:
          'Membership email delivery is not configured. Add MEMBERSHIP_FORMSPREE_ENDPOINT, MEMBERSHIP_EMAIL_WEBHOOK_URL, or RESEND_API_KEY in Vercel.',
      });
    }

    const storageTasks = [];
    const emailTasks = [];

    if (googleWebhookUrl) {
      storageTasks.push(postJson(googleWebhookUrl, application));
    }

    if (emailWebhookUrl) {
      emailTasks.push(
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

    emailTasks.push(
      sendResendEmail({
        to: adminEmail,
        subject: adminSubject,
        text: adminText,
        replyTo: application.email,
      })
    );

    emailTasks.push(
      sendFormspreeEmail({
        application,
        endpoint: formspreeEndpoint,
        message: adminText,
        subject: adminSubject,
      })
    );

    const emailResults = await Promise.all(emailTasks);
    const delivered = emailResults.some(Boolean);

    if (!delivered) {
      throw new Error('No configured membership email provider delivered the application.');
    }

    await Promise.all([
      ...storageTasks,
      sendResendEmail({
        to: application.email,
        subject: 'Thank You for Applying to Join SAWONET',
        text: applicantText,
        replyTo: adminEmail,
      })
    ]);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'Unable to submit application right now. Please try again later.',
      detail: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
