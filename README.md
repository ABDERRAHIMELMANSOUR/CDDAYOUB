# CDD Pays-Bas

The website of **Club des Dirigeants — Pays-Bas**, the Dutch–Moroccan business
leaders' club: [cddpaysbas.nl](https://cddpaysbas.nl)

## 📋 Start here

**→ [HANDOVER.md](./HANDOVER.md)** — domain and DNS setup, Vercel environment
variables, the one-line activation table for outstanding board decisions, and
how to edit the content.

## Running the code

```bash
npm install     # Node 20+
npm run dev     # development server
npm run build   # production build into build/
```

Deployment is automatic: Vercel builds from `main` on every push.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router.
Static site, no backend and no database — all content lives in `src/data/`.

## Structure

```
src/
├── data/          content: advisors, commissions, events, insights,
│                  membership tiers, organisation details
├── components/
│   ├── pages/     one file per page
│   └── ui/        shared primitives
├── i18n/          EN / NL / FR localisation  (see i18n/README.md)
├── lib/           navigation, payments, analytics, Smart Platform config
└── assets/        logo, advisor portraits, photos/
```

### One taxonomy runs through everything

Advisors, events and insights are all tagged with the same commission key. That
is why commission pages populate their advisors, related events and related
articles automatically — tag new content and it appears where it belongs.

## Editing content

No CMS. Edit the relevant file in `src/data/`, commit, and Vercel redeploys.
See [HANDOVER.md](./HANDOVER.md) §7 for the full map.

## Background

Built against the *Website Audit & Restructure Blueprint v3.0* by Ayoub
Saboumazrag. The site is structured as **club infrastructure** — membership,
four standing commissions, events and insights — rather than a brochure.

Design origin: [Figma](https://www.figma.com/design/co4uaOkDvMvAmD90e3MSli/CDD-Pays-Bas).

Known limitations and outstanding decisions are listed openly in
[HANDOVER.md](./HANDOVER.md) §4 and §9.
