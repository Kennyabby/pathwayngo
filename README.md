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

The project deploys as one Vercel project with two **services** (Vercel's setup for a frontend and a backend in one repository):

| Service | Folder | Public path | What it is |
|---|---|---|---|
| `client` | `client/` | everything except `/api` | The React (Vite) website |
| `server` | `server/` | `/api/*` | The Express API (`server/app.js`) |

`vercel.json` defines both services and the routing. The website calls the API from the visitor's browser at `/api/...` on the same domain, so no internal bindings are needed. Locally, form submissions save to `server/data/`; on Vercel they save to Upstash Redis, because the file system there is read-only.

### Steps

1. **Push the project to GitHub.**
2. **Import it in Vercel** (vercel.com/new). Vercel detects `client` (Vite) and `server` (Express). Choose **Import multi-service project** and keep the Root Directory as the repository root. The settings come from `vercel.json`.
3. **Add storage.** In the project's **Storage** tab, add **Upstash for Redis** from the Marketplace (free plan is enough) and connect it. This adds `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
4. **Add environment variables** in Settings > Environment Variables (see `.env.example`): `ADMIN_KEY`, and optionally `RESEND_API_KEY`, `NOTIFY_EMAIL` and `NOTIFY_FROM` for email alerts.
5. **Redeploy** so the new variables take effect.
6. **Check it works:** open `https://your-site.vercel.app/api/health`. It should show `"storage":"redis"`. If it shows `"none"`, storage isn't connected yet and forms will show an error.
7. **Add your domain** in Settings > Domains if you have one.

To run both services the way Vercel does: `npx vercel dev -L`.

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

## Images

All images are in `client/public/img/`, sorted by purpose. A path in the code like `/img/programs/education.jpg` is the file `client/public/img/programs/education.jpg`.

| Folder | What's in it | Where to change it in the code |
|---|---|---|
| `brand/` | `logo.png` (full logo, footer) and `emblem.png` (round symbol: header, home banner, browser tab) | `client/src/data/images.js` and `client/index.html` |
| `home-slideshow/` | The 5 photos that fade in and out on the home page banner | `heroSlides` in `client/src/data/site.js` |
| `page-banners/` | The photo behind the title at the top of each page, named after the page (`about.jpg`, `donate.jpg`, `get-help.jpg`...) | `banners` in `client/src/data/images.js` |
| `sections/` | Photos inside page sections, named `page-section.jpg` (`home-who-we-are.jpg`, `about-our-story.jpg`...) | `sections` in `client/src/data/images.js` |
| `programs/` | One photo per programme, named after its page address (`health-outreach.jpg`...) | `programs` in `client/src/data/site.js` |
| `news/` | One photo per news article, named after its page address | `news` in `client/src/data/content.js` |
| `stories/` | One photo per beneficiary story (`folake.jpg`, `musa.jpg`...) | `stories` in `client/src/data/content.js` |
| `gallery/` | Gallery photos, numbered in display order | `gallery` in `client/src/data/content.js` |
| `team/` | Staff portraits `staff-1.jpg` to `staff-8.jpg` (empty for now; a coloured tile shows until you add them) | `staff` in `client/src/data/content.js` |

**To replace a photo:** save the new image over the old file with the same name. No code change is needed.
**To add a new photo:** put it in the right folder and add its path in the file listed above.

Use landscape photos about 1600 to 1920px wide, compressed (under about 500 KB each).

The current photos are free stock photos from Pexels (free for commercial use, no attribution required). `photo-sources.json` lists the Pexels link for every file, and credits appear on the Terms of Use page. Replace them with photos of your own work over time, and avoid putting a stock photo next to a real person's name and story.

## Next steps

Online card payments for donations through Paystack or Flutterwave, and a simple admin page for viewing submissions.
