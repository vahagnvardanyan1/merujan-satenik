# Մերուժան & Սաթենիկ — Wedding Invitation

Next.js 16 + React 19 + Tailwind CSS 4. Images and music are served from the Picsart CDN with on-the-fly webp optimization (`lib/imageLoader.ts`).

```bash
npm run dev    # develop
npm run build  # production build
npm start      # serve production build
```

## RSVP → Google Sheets

Guest responses are submitted through a server action (`app/actions/rsvp.ts`). Where they land depends on `RSVP_WEBHOOK_URL`:

- **Set** → each response is POSTed to your Google Apps Script webhook, which appends a row to a Google Sheet.
- **Unset** → responses are appended to `data/rsvp.json` on the server (fine for local dev; don't rely on it on serverless hosts like Vercel, where the filesystem is ephemeral).

### Setup (~2 minutes)

1. Create a Google Sheet, e.g. with a header row: `Date | Name | Side | Guests | Attending`.
2. In the sheet: **Extensions → Apps Script**, replace the code with:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     sheet.appendRow([
       new Date(),
       data.name,
       data.side === "bride" ? "Հարսի կողմից" : "Փեսայի կողմից",
       Number(data.guests),
       data.attending === "yes" ? "Այո" : "Ոչ",
     ]);
     // keep the guests column formatted as a plain number (not a date)
     sheet.getRange(sheet.getLastRow(), 4).setNumberFormat("0");
     return ContentService.createTextOutput(
       JSON.stringify({ ok: true }),
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → Web app**, set *Execute as: Me* and *Who has access: Anyone*, then deploy and copy the web-app URL (ends in `/exec`).
4. Put it in `.env.local` (copy `.env.example`):

   ```
   RSVP_WEBHOOK_URL=https://script.google.com/macros/s/…/exec
   ```

   On your host (e.g. Vercel), add the same variable in the project's environment settings.
