# CDD Pays-Bas — Handover & Activation

Everything needed to own, run and finish activating cddpaysbas.nl.

Delivered against the *Website Audit & Restructure Blueprint v3.0* (Ayoub
Saboumazrag, 28 July 2026). Tickets 1–24 are implemented; this document is
ticket 25.

---

## 1. What you own

| Asset | Where | Status |
|---|---|---|
| Source code | `github.com/ABDERRAHIMELMANSOUR/CDDAYOUB` | ⚠️ personal account — see below |
| Hosting | Vercel project (builds from `main`) | Live |
| Domain | `cddpaysbas.nl` | Confirm registrar access |
| Analytics | Plausible (not yet enabled) | See §3 |
| Member platform | CDD Smart Platform | Awaiting board decision |

### ⚠️ Transfer the repository to a CDD-owned account

The blueprint requires the code to sit in a **CDD-owned repository**, not an
individual's. Today it is under a personal GitHub account, which means the
organisation's website depends on one person's login.

Create a GitHub **organisation** (e.g. `cdd-paysbas`), then
*Settings → Danger Zone → Transfer ownership*. Vercel reconnects to the moved
repo without a redeploy. Do this before anything else.

### Access checklist

- [ ] Domain registrar login held by the board (not one individual)
- [ ] GitHub organisation owned by CDD, with at least two owners
- [ ] Vercel project owned by a CDD account, with at least two members
- [ ] **2FA enabled on every admin account** — GitHub, Vercel, registrar, email
- [ ] Credentials stored in a shared password manager the board can reach

---

## 2. Domain & DNS

Vercel serves the site. Point the domain at it in the registrar's DNS panel.

**Apex domain (`cddpaysbas.nl`)**

```
Type: A       Name: @      Value: 76.76.21.21
```

**www subdomain**

```
Type: CNAME   Name: www    Value: cname.vercel-dns.com
```

Then in Vercel: *Project → Settings → Domains* → add both `cddpaysbas.nl` and
`www.cddpaysbas.nl`, and set one as primary (recommend the apex, redirecting
`www` to it). TLS certificates are issued automatically; allow up to an hour
for DNS to propagate.

> Confirm the A record value in Vercel's own domain panel at the time you set
> it up — Vercel publishes the current apex IP there, and it is authoritative
> over this document.

**Keep the existing MX records untouched** if email runs on this domain.
Changing A/CNAME records does not affect mail, but deleting records wholesale
will break it.

---

## 3. Vercel environment variables

Set under *Project → Settings → Environment Variables*.

| Variable | Required | Effect when set |
|---|---|---|
| `VITE_CRM_WEBHOOK_URL` | **Yes, before launch** | Where Contact, membership application and event registration submissions are POSTed. **Until it is set, nothing submitted through any form on the site is recorded anywhere.** |
| `VITE_PLAUSIBLE_DOMAIN` | No | Enables cookieless analytics. Use `cddpaysbas.nl`. |
| `VITE_PLAUSIBLE_HOST` | No | Only for a self-hosted Plausible/Matomo instance. Defaults to `https://plausible.io`. |
| `VITE_LINKEDIN_FEED_URL` | No | JSON feed of LinkedIn posts for the Insights page. Unset shows a link to the LinkedIn page instead. |

**`VITE_CRM_WEBHOOK_URL` must be an ingest-only endpoint.** The URL ships in the
public bundle, so it must not carry an API key and must not be able to read,
export or delete records — only create them. Expect spam on a public endpoint
and filter it in the CRM; the site's honeypot stops naive bots, not determined
ones. If the CRM requires authentication, add `api/crm.ts` as a Vercel function
holding the key server-side and point this variable at it.

Variables must start with `VITE_` to reach the browser bundle. **Never put a
secret in a `VITE_` variable** — everything with that prefix is compiled into
the public JavaScript and readable by any visitor. Payment and SSO secrets
belong in serverless-function variables without the prefix (§5).

Redeploy after adding a variable; Vite reads them at build time.

### Enabling analytics

1. Create the site at [plausible.io](https://plausible.io) (or self-host).
2. Set `VITE_PLAUSIBLE_DOMAIN=cddpaysbas.nl` in Vercel.
3. Redeploy.

**No cookie banner is needed and none should be added.** Article 11.7a of the
Telecommunicatiewet requires consent for *storing information on, or reading it
from, a device* — it is the storage that triggers consent, not the measurement.
Plausible sets no cookies and writes nothing to the device, so the article does
not apply. The reasoning is documented in `src/lib/analytics.ts`.

Adding Google Analytics, Meta Pixel, LinkedIn Insight or Hotjar **would** make a
consent-blocking banner mandatory and require rewriting `/cookies` first. Do not
add them casually.

---

## 4. Board decisions — the one-line activation table

Every item below is a small edit to one file. Nothing needs a developer beyond
making the change and letting Vercel redeploy.

| # | Decision | File | Change |
|---|---|---|---|
| 1 | Legal form (`vereniging` / `stichting`) | `src/data/organisation.ts` | `legalForm: 'vereniging'` |
| 2 | KvK number | `src/data/organisation.ts` | `kvk: '12345678'` |
| 3 | RSIN | `src/data/organisation.ts` | `rsin: '123456789'` |
| 4 | Registered address | `src/data/organisation.ts` | `registeredAddress: '…'` |
| 5 | Phone number | `src/data/organisation.ts` | `phone: '+31 …'` |
| 6 | Relationship to CDD Morocco | `src/data/organisation.ts` | `moroccoRelationship: 'chapter'` \| `'affiliate'` \| `'independent'` |
| 7 | Governance documents | `src/data/organisation.ts` | Add a `href` to each entry in `TRANSPARENCY_DOCUMENTS` |
| 8 | Four commission chairs | `src/data/commissions.ts` | `chair: 'Name'` in each `DETAIL` entry |
| 9 | Commission founding year | `src/data/commissions.ts` | `established: '2026'` |
| 10 | Ratify or hide the dues | `src/data/membership.ts` | Adjust `priceFrom`/`priceTo`, or `PRICING_PUBLISHED = false` |
| 11 | Smart Platform | `src/lib/smartPlatform.ts` | `status: 'external'` + `baseUrl` |
| 12 | Go live with payments | `src/lib/payments.ts` | `paymentProvider = serverProvider` (after §5) |

**Nothing is invented anywhere in the codebase.** Every unset field is `null`
and the interface hides what is null, so the site never displays a placeholder
KvK number or names a chair who has not agreed. Fill a value in and it appears
automatically wherever it belongs.

In development (`npm run dev`) amber *"To confirm"* boxes mark the outstanding
items. They never render in production.

---

## 5. Making payments live

The membership funnel is complete; payment is deliberately not connected.

**Why:** this is a static site with no backend. Mollie and Stripe both create
payments server-side using a **secret key**, and everything in the browser
bundle is public. Shipping that key would publish a live financial credential.
Amounts must also be decided server-side, or a payer can edit €150 to €1.

**What to build — one serverless function:**

1. Choose a provider. **Mollie** is recommended for a Dutch organisation:
   native iDEAL, SEPA direct debit for renewals, cards for international
   members.
2. Add `api/checkout.ts` to this repo. Vercel already hosts the site, so no
   separate backend is needed. It must:
   - accept `{ tierId, applicant }` — **never an amount**;
   - look the price up from its own copy of the tier table;
   - create the payment using `MOLLIE_API_KEY` from a Vercel environment
     variable (no `VITE_` prefix);
   - return `{ checkoutUrl }`.
3. Add `api/payment-webhook.ts`. **Treat the webhook as the only source of
   truth for "paid"** — the browser redirect can be forged, or simply never
   happen if the payer closes the tab.
4. Collect SEPA mandates through the provider's flow. Do not store IBANs.
5. **Update `/privacy`** — a payment processor is a data processor, and the AVG
   requires it to be disclosed.
6. Set `paymentProvider = serverProvider` in `src/lib/payments.ts`.

The full contract is documented at the top of `src/lib/payments.ts`.

Event RSVPs need the same backend for confirmation emails, `.ics` files and
T-7/T-1 reminders. Until then both flows record the request and say plainly
that CDD will follow up.

---

## 6. Smart Platform / Member Login

Member Login is a disabled control until the board answers one question: **is
the Smart Platform the member area, a separate product, or a prototype?**

- **Separate product or ready to link** → `status: 'external'` + `baseUrl` in
  `src/lib/smartPlatform.ts`.
- **The member area, with federated login** → `status: 'sso'`, `protocol:
  'oidc'`, `baseUrl`, `clientId`.

Use **OIDC**, not SAML: it works with a static front end plus one serverless
callback and avoids XML handling. A static site is a *public client*, so it must
use **Authorization Code with PKCE** — never the implicit flow, and never a
client secret in the bundle. The redirect URI must be allow-listed with the
identity provider, or the integration becomes an open redirect.

Also fill in `PLATFORM_DESCRIPTION`: something in the navigation that is never
explained costs more credibility than it gains.

---

## 7. Running and editing the site

```bash
npm install     # Node 20+
npm run dev     # local dev server
npm run build   # production build into build/
```

Vercel deploys automatically on every push to `main`.

### Where the content lives

All content is in `src/data/` — no CMS, no database.

| To change | Edit |
|---|---|
| Advisors, and their commission | `src/data/advisors.ts` |
| Commission mandates, priorities, chairs | `src/data/commissions.ts` |
| Membership tiers and benefits | `src/data/membership.ts` |
| Events | `src/data/events.ts` |
| Articles, news, briefings | `src/data/insights.ts` |
| Legal and statutory details | `src/data/organisation.ts` |
| Navigation | `src/lib/navigation.ts` |
| Interface translations | `src/i18n/dictionaries.ts` |

**One taxonomy runs through everything.** An advisor, an event and an article
are all tagged with the same commission key, which is why commission pages
populate their advisors, events and insights automatically. Tag new content and
it appears in the right places by itself.

### Adding an event

Append to `EVENTS` in `src/data/events.ts`. Upcoming vs past is computed from
the date — nothing has to be re-labelled, which is what prevents the original
defect where a February event still said "Upcoming Event" in July.

Publish a recap within five working days. That is what turns an attendee into a
member.

### Adding photography

Drop files into `src/assets/photos/` and pass them as `src` to
`<BrandedImage />`; the branded placeholder disappears with no layout change.
See the README in that folder for alt-text, sizing and consent guidance.

### Translations

Interface strings are translated in EN, NL and FR. Long-form content —
advisor biographies, commission narratives, articles, and the legal statements —
is still English, with a visible notice telling readers so.

This is deliberate. A biography is an advisor's professional reputation and
needs their sign-off; the privacy and cookie statements carry AVG obligations
where a mistranslated clause is a compliance problem rather than a typo. **Have
the legal pages translated professionally**, not machine-translated.

`src/i18n/README.md` gives the workflow and a priority order.

---

## 8. Measuring success

Once analytics is on, track these against the blueprint's six-month targets.
Goal names are defined in `src/lib/analytics.ts`.

| Metric | Target |
|---|---|
| Membership applications per month | 5+ |
| Application form completion rate | > 60% |
| Event registrations completed on site | > 70% |
| Newsletter subscribers | 250+ |
| Homepage → Membership click rate | > 15% |
| Publishing cadence | ≥ 2 items per month |
| Activities per commission per year | ≥ 2 |
| Lighthouse mobile, all four categories | ≥ 90 |

**The cadence metric is the one that always slips and matters most.** A
structurally sound site with nothing new for four months reads exactly like the
old Events page did. Assign a named content owner.

---

## 9. Known limitations

Stated plainly so nothing is a surprise later.

1. **Payments are not connected** — needs the serverless function in §5.
2. **Event RSVPs are recorded client-side only** — no confirmation email,
   `.ics` file or reminders until the same backend exists.
3. **Long-form content is English-only** in all three locales, with a visible
   notice. §7.
4. **No independent accessibility audit** has been carried out. The site targets
   WCAG 2.2 AA and `/accessibility` describes it as *partially conformant*,
   which is the honest claim until an audit is done.
5. **Advisor portraits are large** (400 KB–1 MB each). Compressing them to
   ~150 KB would measurably improve the Lighthouse mobile score.
6. **The Projects page exists but is unlinked** — reinstate it in
   `src/lib/navigation.ts` when there is a first project to show.
7. **Members logo wall is empty by design** — a wall of invented members would
   undo the credibility it exists to build.

---

## 10. First actions, in order

1. Transfer the repository to a CDD-owned GitHub organisation (§1).
2. Enable 2FA everywhere and record credentials in a shared password manager.
3. Confirm domain and DNS (§2).
4. Get the treasurer to supply legal form, KvK, RSIN and address → items 1–5 (§4).
5. Answer the CDD Morocco question → item 6.
6. Appoint four commission chairs → item 8. Per the blueprint this is a phone
   call to advisors who have already agreed to advise.
7. Ratify the dues → item 10.
8. Enable analytics (§3).
9. Commission the checkout function (§5).
10. Assign a named content owner and publish something. The structure is built;
    what it needs now is activity.

---

*Prepared as ticket 25 of the Website Audit & Restructure Blueprint v3.0.*


---

## 12. Decisions taken after the blueprint (August 2026)

Three things on this site now differ from the v3 blueprint, on the board's
instruction. Recorded here so nobody later reads the blueprint and files a bug.

| Item | Blueprint said | Site does | Why |
|---|---|---|---|
| Membership | Five tiers, €150–€5,000+ per year (Part E4) | **One membership, €25/month** | Board decision (Nouraddine Gribi). One price, no tier anxiety, nothing to work out before joining. |
| Navigation label | Keep "Focus Areas" in the nav, "Commissions" in the body (Part D0) | **"Commissions" everywhere**, including the URL | Board decision. `/focus-areas` redirects to `/commissions`, so old links still work. |
| Honorary membership | Listed as a tier | **Not in the pricing model at all** | It is a board recognition, not a product. Holders appear on the Advisory Council page. |

### Still outstanding for the board

| # | Item | Consequence while open |
|---|---|---|
| 1 | Set `VITE_CRM_WEBHOOK_URL` | Every form submission is lost. This is the single most urgent item. |
| 2 | Supply legal form, KvK, RSIN, registered address | Footer legal bar and Transparency page stay incomplete; institutional partners notice. |
| 3 | Appoint the four commission chairs | Every commission page reads "Chair: to be appointed by the board". |
| 4 | Publish an upcoming event | Registration, capacity and `.ics` all work but are unreachable — the only event on the site is in the past, so the Events page shows an archive and nothing to register for. |
| 5 | Photographs for Badr Ikken and Turgut Torunogullari | Their cards show initials rather than a portrait. |
| 6 | Confirm advisor translations | The NL/FR advisor biographies are in-house translations of copy describing named professionals; each advisor should confirm their own. |
| 7 | Decide on LinkedIn sync | Needs LinkedIn Partner Program approval before it can be automated (§ below). |
| 8 | Live payment | `src/lib/payments.ts` documents the one serverless function required. Membership is a monthly subscription, not a one-off charge. |

### LinkedIn sync — what is actually possible

The Insights page has a LinkedIn section wired and ready, but it cannot fetch
posts by itself, and it is worth being clear why:

- **There is no public feed.** LinkedIn company pages expose no RSS and no
  unauthenticated endpoint. The old RSS feeds were withdrawn years ago.
- **The API is gated.** Reading an organisation's posts requires the Community
  Management API, which needs LinkedIn Partner Program approval and a verified
  company page, then OAuth 2.0. Access tokens are secrets and this is a static
  site — a token in the bundle is a published credential.
- **Scraping is not an option.** Blocked by CORS, breaches LinkedIn's terms, and
  the markup changes without notice. Third-party feed widgets work by holding
  CDD's credentials on their infrastructure and seeing every visitor — a
  data-protection decision for the board, not a developer.

So the site reads a JSON feed from a URL CDD controls (`VITE_LINKEDIN_FEED_URL`),
produced server-side where a token can live safely. Either a scheduled Vercel
function calling the official API once approved, or — workable today — a small
JSON file the secretariat maintains by hand in `/public`. Until one exists, the
section shows a link to the LinkedIn page rather than invented posts.
