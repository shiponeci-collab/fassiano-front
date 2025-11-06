# Google Sheets Setup Instructions

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "FASSIANO Waitlist"
3. In row 1, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Address`

## Step 2: Create Google Apps Script

1. In your sheet, click **Extensions** → **Apps Script**
2. Delete the default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add row with data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.address
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name it "FASSIANO Waitlist Handler"

## Step 3: Deploy Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "FASSIANO Waitlist Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. Click **Authorize access** and allow permissions
7. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Your Code

1. Open `/components/notify-me-form.tsx`
2. Find line 58: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE"`
3. Replace with your copied URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ID_HERE/exec"
   ```
4. Save the file

## Step 5: Test the Connection

1. Run your app: `npm run dev`
2. Click "NOTIFY ME" button
3. Fill out the form with test data
4. Submit the form
5. Check your Google Sheet - data should appear in a new row!

## Troubleshooting

### Data Not Appearing
- Check the Apps Script logs: **Executions** tab in Apps Script
- Make sure the Web App is deployed with "Anyone" access
- Verify the URL is correct in notify-me-form.tsx

### Permission Errors
- Re-authorize the script: **Deploy** → **Manage deployments** → **Edit** → Re-authorize

### Form Shows Error
- Open browser console (F12) to see error details
- Make sure you're using the `/exec` URL, not `/dev`

## Optional: Email Notifications

To receive email notifications when someone signs up, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add row with data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.address
    ]);
    
    // Send email notification
    const emailSubject = "New FASSIANO Waitlist Signup!";
    const emailBody = `
      New waitlist signup:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}
      Time: ${data.timestamp}
    `;
    
    MailApp.sendEmail({
      to: "your-email@example.com", // Replace with your email
      subject: emailSubject,
      body: emailBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `"your-email@example.com"` with your actual email address.

## Security Note

This setup is fine for a teaser/landing page. For production, consider adding:
- ReCAPTCHA to prevent spam
- Rate limiting
- Data validation on the server side
