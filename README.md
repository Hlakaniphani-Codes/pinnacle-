# Pinnacle Recruitment Group — Website

A fast, static marketing website for **Pinnacle Recruitment Group**, a South African
staffing and recruitment company. Built as plain HTML, CSS and vanilla JavaScript —
no build step, no framework, deploys anywhere.

Reference companies used to scope the services offered: [plsstaff.co.za](https://plsstaff.co.za/)
and [corestaffingsolutions.co.in](https://www.corestaffingsolutions.co.in/).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, live-vacancies ticker, who-we-are, services, why-us, reviews, accreditations, CTA |
| `about.html` | Company story, mission/vision, values, how-we-work, credentials |
| `services.html` | Six services in detail + FAQ |
| `industries.html` | Nine sector cards + tender/contract support |
| `employers.html` | "Request staff" brief form + process |
| `job-seekers.html` | Sample vacancies + CV registration form + candidate reviews |
| `contact.html` | Contact details + contact form |

## Design

Clean, organised corporate staffing style (modelled on plsstaff.co.za) — charcoal top
bar and header, dark hero with a 4-stat strip, solid colour blocks (grey / red split
panels), plain bordered grids, sharp-cornered buttons — with a motion layer on top so
it reads as active rather than static.

- **Palette:** brand red (`#DA1F28`) as the single accent, charcoal (`#2E2E30`) for the
  header / hero / dark sections / footer, white and a light grey (`#F4F4F5`) for the
  rest. All CSS custom properties in `css/style.css` (`:root`).
- **Type:** Heebo (headings) + Lato (body), from Google Fonts. No serif.
- **Motion** (respects `prefers-reduced-motion`): slow Ken-Burns zoom on the hero image,
  rotating last word of the headline, a scroll-progress bar, a looping live-vacancies
  ticker, staggered card reveals on scroll, animated section-heading underlines,
  count-up statistics, icon/card hover states.
- **JS** (`js/main.js`): the above, plus mobile drawer, FAQ accordion, demo form handling.

## Client-confirmed details (already in the site)

- **Office:** 27 Bram Fischer Road, North Beach, Durban, 4001
- **Phone:** 087 088 4506
- The company's **founding year is deliberately not shown** anywhere — do not add it back.
- No team-member names or photos (removed at the client's request).

## Before go-live — replace the remaining placeholders

1. **Email / registration number** — `hello@pinnaclerecruitment.co.za` and `Reg. No. 2019/XXXXXX/07`.
2. **Images** — all photos load from the Unsplash CDN as placeholders. Swap for the client's
   own office and site photography and host them in `assets/` (hero image is set via the
   `--hero-img` inline style on `.hero` in `index.html`).
3. **Client logos** — the text names in the "Trusted by employers across South Africa" strip on `index.html`.
4. **Reviews** — replace sample testimonials with real, permissioned client/candidate quotes.
5. **Stats** — industries served, placements, client count, retention/rating figures.
6. **Accreditations** — confirm B-BBEE level, APSO membership, TES registration, POPIA officer.
7. **Vacancies** — the ticker on `index.html` and the list on `job-seekers.html` are static
   samples; connect them to a job board / ATS feed.
8. **Forms** — currently show a confirmation message only. Wire each `form[data-demo]`
   to an email service (Formspree, Web3Forms), the client's ATS, or a small backend, then
   remove the `.form-note` disclaimer.
9. **Map** — embed Google Maps for 27 Bram Fischer Road on `contact.html` (`.map-box`).
10. **Legal** — add real Privacy Policy, POPIA notice and Terms pages (footer links).

## Run locally

```bash
cd Pinnacle
python -m http.server 8080
# open http://localhost:8080
```

Asset links carry a `?v=` query — bump it in the HTML when you change `style.css` / `main.js`
so browsers don't serve a stale copy.

## Deploy

Upload the folder to any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages,
or standard cPanel hosting. No server-side runtime required.
