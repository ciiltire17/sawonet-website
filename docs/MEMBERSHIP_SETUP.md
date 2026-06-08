# SAWONET Membership Submission Setup

The membership page posts to `/api/membership`. Configure at least one backend integration in Vercel:

- `MEMBERSHIP_SHEETS_WEBHOOK_URL`: Google Apps Script web app URL. Recommended because it can append to Google Sheets and send both emails.
- `RESEND_API_KEY`: Optional server-side email delivery. Also set `RESEND_FROM` to a verified sender.
- `MEMBERSHIP_TO_EMAIL`: Defaults to `info@sawonet.org`.

## Google Sheets + Email Apps Script

Create a Google Sheet with these columns:

`Timestamp, Full Name, Email, Phone, Country, Region, Organization, Position, Membership Category, Organization Type, Experience, Motivation, Contribution Areas`

In Apps Script, deploy this as a web app with access set to "Anyone":

```js
const SHEET_NAME = 'Applications';
const ADMIN_EMAIL = 'info@sawonet.org';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const contributionAreas = [
    ...(data.contributionAreas || []),
    data.otherContribution ? `Other: ${data.otherContribution}` : '',
  ].filter(Boolean).join(', ');

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.fullName,
    data.email,
    data.phone,
    data.country,
    data.region,
    data.organization,
    data.position,
    data.membershipCategory,
    data.organizationType,
    data.experience,
    data.motivation,
    contributionAreas,
  ]);

  const adminBody = Object.entries(data)
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
    .join('\n');

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Membership Application - ${data.fullName}`,
    body: adminBody,
    replyTo: data.email,
  });

  MailApp.sendEmail({
    to: data.email,
    subject: 'Thank You for Applying to Join SAWONET',
    body: 'Thank you for your interest in joining the Somali Pastoralist Women Network (SAWONET). We have received your application and our team will review it shortly.',
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

After deployment, copy the web app URL into `MEMBERSHIP_SHEETS_WEBHOOK_URL` in Vercel.
