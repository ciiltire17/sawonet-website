# SAWONET Membership Submission Setup

The membership page posts to `/api/membership`. The API sends each application directly to SAWONET's Zoho Mail inbox using Nodemailer and Zoho SMTP.

## Required Vercel Environment Variables

Add these variables in the Vercel project settings for Production, Preview, and Development as needed:

`ZOHO_SMTP_USER=info@sawonet.org`

`ZOHO_APP_PASSWORD=the Zoho app password`

`MEMBERSHIP_RECIPIENT_EMAIL=info@sawonet.org`

Do not hardcode the Zoho app password in the repository. Generate an app password in Zoho Mail and store it only as the `ZOHO_APP_PASSWORD` environment variable.

## Email Delivery

SMTP settings used by `/api/membership`:

- Host: `smtp.zoho.com`
- Port: `465`
- Secure: `true`
- User: `ZOHO_SMTP_USER`
- Password: `ZOHO_APP_PASSWORD`

The API sends the subject:

`New SAWONET Membership Application - [Full Name]`

The email body includes all submitted membership form fields, including applicant details, organization information, experience, reason for joining, contribution areas, membership fee acknowledgement, governance acknowledgement, and declaration confirmations.

The API returns success only after Zoho SMTP returns a sent message ID. If SMTP fails, the browser shows an error and logs details to the console.

## Optional Google Sheets Storage

Email delivery is the source of truth for submission success. Google Sheets storage is optional and runs only after the email is sent.

Create a Google Sheet with these columns:

`Timestamp, Full Name, Email, Phone, Country, Region, Organization, Position, Membership Category, Organization Type, Experience, Motivation, Contribution Areas`

In Apps Script, deploy this as a web app with access set to "Anyone":

```js
const SHEET_NAME = 'Applications';

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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

After deployment, copy the web app URL into `MEMBERSHIP_SHEETS_WEBHOOK_URL` in Vercel.
