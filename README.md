# Pathway Finders Empowerment Initiative: Website

React (Vite) frontend and Express (Node.js) API in one project.

```
client/   React site (pages, components, styles, images)
server/   Express API for form submissions. Also serves the built site in production.
```

## Run it locally

```bash
npm install          # installs client and server (npm workspaces)
npm run dev          # API on :5050, website on http://localhost:5173
```

Production build on your own machine:

```bash
npm run build
npm start            # site and API on http://localhost:5050
```

Locally, form submissions are saved as JSON files in `server/data/`.

## Deploy to Vercel

Everything Vercel needs is already in the project:

| File | What it does |
|---|---|
| `vercel.json` | Builds the React site into `client/dist`, sends `/api/*` to the API function, sends every other path to the React app (so links like `/programs/health-outreach` work on refresh), and sets caching and security headers |
| `api/index.js` | The serverless function. It runs the Express app in `server/app.js` |
| `server/storage.js` | Saves submissions to Upstash Redis on Vercel (the file system there is read-only) |
| `package.json` | Pins Node 22 and lists the build command |

### Steps

1. **Put the project on GitHub** (or GitLab/Bitbucket).
   ```bash
   git init && git add . && git commit -m "Pathway Finders website"
   ```
   Then create an empty repository on GitHub and push to it.
2. **Import it in Vercel.** Go to vercel.com/new, pick the repository and click Deploy. Leave the Root Directory as the project root. The settings come from `vercel.json`.
3. **Add storage.** In the Vercel project, open the **Storage** tab, choose **Upstash for Redis** from the Marketplace (free plan is enough), and connect it to the project. This adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.
4. **Add environment variables** in Settings > Environment Variables (see `.env.example`):
   - `ADMIN_KEY`: a long random password for reading submissions
   - Optional email alerts: `RESEND_API_KEY`, `NOTIFY_EMAIL` and `NOTIFY_FROM`
5. **Redeploy** (Deployments > ... > Redeploy) so the new variables take effect.
6. **Check it works:** open `https://your-site.vercel.app/api/health`. It should say `"storage":"redis"`. If it says `"none"`, storage isn't connected yet and forms will show an error.
7. **Add your domain** in Settings > Domains if you have one (for example pathwayfinders.org).

### Reading submissions

```bash
curl -H "x-admin-key: YOUR_ADMIN_KEY" https://your-site.vercel.app/api/admin/submissions/help-requests
```

Collections: `contact`, `volunteers`, `partners`, `pledges`, `newsletter`, `help-requests`, `applications`, `rsvps`.

With `RESEND_API_KEY` and `NOTIFY_EMAIL` set, your team also gets an email for every new form, so nobody has to check manually.

## Pages

| Section | Pages |
|---|---|
| Main | Home, Contact, Get Help |
| About | Our Story, Our Team, Impact & Reports, Partners, Careers |
| Our Work | All Programmes, plus one page for each programme |
| Media | News (with full articles), Stories, Events, Gallery |
| Get Involved | Donate, Volunteer, Fundraise, Sponsor, FAQs |
| Legal | Privacy Policy, Safeguarding Policy, Terms of Use |

## Editing content

- `client/src/data/site.js`: contact details, programmes, stats, values, history, FAQs, donation amounts
- `client/src/data/content.js`: news, stories, events, gallery, team, board, partners, jobs, reports, policies

Anything marked **SAMPLE** is a placeholder. Replace it with real figures, names (with consent) and dates before launch. Have a lawyer review the policy pages.

## Photos

Every photo slot is filled with a free stock photo from Pexels (Pexels License: free for commercial use, no attribution required). They were chosen to show Nigerian communities, health outreaches, schools, markets and skills training. `photo-sources.json` lists the Pexels link for every file, and credits appear on the Terms of Use page.

Over time, replace them with photos of your own work by saving a file with the same name in `client/public/img/` (landscape, about 1600px wide). Team photos (`team-1.jpg` to `team-8.jpg`) are intentionally left empty so you can add real staff portraits; until then a coloured tile shows.

Avoid publishing a stock photo next to a real beneficiary's name and story once the site is live. Use their own photo (with consent) or a general photo with no name.

## Next steps

Online card payments for donations through Paystack or Flutterwave, and a simple admin page for viewing submissions.
