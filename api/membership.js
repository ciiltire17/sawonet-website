import nodemailer from 'nodemailer';

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

function createZohoTransporter() {
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error('Zoho SMTP is not configured. Add ZOHO_SMTP_USER and ZOHO_APP_PASSWORD in Vercel.');
  }

  return nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

async function sendZohoMembershipEmail({ application, subject, text }) {
  const from = process.env.ZOHO_SMTP_USER;
  const to = process.env.MEMBERSHIP_RECIPIENT_EMAIL || 'info@sawonet.org';
  const transporter = createZohoTransporter();

  const result = await transporter.sendMail({
    from: `"SAWONET Membership" <${from}>`,
    to,
    replyTo: application.email,
    subject,
    text,
  });

  return result;
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
    const adminSubject = `New SAWONET Membership Application - ${application.fullName}`;
    const adminText = formatEmailBody(application);

    const emailResult = await sendZohoMembershipEmail({
      application,
      subject: adminSubject,
      text: adminText,
    });

    if (!emailResult?.messageId) {
      throw new Error('Zoho SMTP did not return a message ID for the membership application email.');
    }

    if (googleWebhookUrl) {
      postJson(googleWebhookUrl, application).catch((storageError) => {
        console.error('Membership application storage failed after email delivery:', storageError);
      });
    }

    return res.status(200).json({ ok: true, messageId: emailResult.messageId });
  } catch (error) {
    console.error('Membership application email delivery failed:', error);
    return res.status(500).json({
      error: 'Unable to submit application right now. Please try again later.',
      detail: error.message,
    });
  }
}
