import type { AdvisorGroup } from './advisors';
import type { Locale } from '../i18n/config';
import type { Localised } from '../i18n/localised';

/**
 * Events (ticket 19).
 *
 * Events are tagged by commission from day one — the same `AdvisorGroup`
 * taxonomy defined in advisors.ts — which is what lets commission pages
 * auto-populate their related events instead of going stale.
 *
 * `EventType` keeps the four categories already used on the site; the audit
 * called it good taxonomy and told us to use it as the filter.
 */
export type EventType =
  | 'community'
  | 'delegation'
  | 'summit'
  | 'roundtable';

/** Event categories. Filter chips, so they are interface copy and translated. */
export const EVENT_TYPE_LABELS: Record<EventType, Localised<string>> = {
  community: {
    en: 'Community Gathering',
    nl: 'Netwerkbijeenkomst',
    fr: 'Rencontre du réseau',
  },
  delegation: {
    en: 'Business Delegation',
    nl: 'Handelsmissie',
    fr: "Délégation d'affaires",
  },
  summit: { en: 'Summit & Forum', nl: 'Top & forum', fr: 'Sommet & forum' },
  roundtable: {
    en: 'Executive Roundtable',
    nl: 'Bestuurlijke rondetafel',
    fr: 'Table ronde des dirigeants',
  },
};

export interface CDDEvent {
  slug: string;
  title: string;
  /** ISO date. Drives the upcoming/past split — no manual re-labelling. */
  date: string;
  /** Human-readable time, e.g. "18:00–21:00". Optional. */
  time?: string;
  location: string;
  city: string;
  type: EventType;
  /** Commissions this event belongs to. Empty for whole-club events. */
  commissions: AdvisorGroup[];
  summary: string;
  /** Longer description, shown on the event page. */
  description?: string;
  /** Capacity, if limited. */
  capacity?: number;
  /** Whether members and non-members pay differently. */
  memberPrice?: string;
  guestPrice?: string;
  /** Written after the event — the recap that turns an attendee into a member. */
  recap?: string;
  /** Photo import paths, once CDD's own photography exists. */
  photos?: string[];
  /** Open for registration. */
  registrationOpen: boolean;
}

/**
 * The Iftar is the only real event on record. It is kept exactly as the
 * organisation's first gathering, now with a recap rather than a stale
 * "RSVP coming soon".
 */
export const EVENTS: CDDEvent[] = [
  {
    slug: 'first-collective-iftar-2026',
    title: 'CDD Pays-Bas — First Collective Iftar',
    date: '2026-02-28',
    location: 'Rotterdam',
    city: 'Rotterdam',
    type: 'community',
    commissions: [],
    summary:
      'The first collective gathering of the CDD Pays-Bas network — a warm, informal evening that brought members together beyond their professional roles.',
    description:
      'This first collective Iftar marked a symbolic moment for CDD Pays-Bas. Beyond professional roles, the evening centred on shared stories, cultural understanding and community building during the holy month of Ramadan.',
    recap:
      'Our first collective Iftar brought the network together in Rotterdam for an evening built around connection rather than agenda. Guests shared a meal, heard reflections on CDD\'s role as a bridge between the Netherlands and Morocco, and left with relationships that have since turned into working conversations. It set the tone for how CDD Pays-Bas convenes: neutral, respectful, open and personal.',
    registrationOpen: false,
  },
];

/** Events in the future, soonest first. */
export function upcomingEvents(now: Date = new Date()): CDDEvent[] {
  return EVENTS.filter((e) => new Date(e.date) >= startOfDay(now)).sort(
    (a, b) => +new Date(a.date) - +new Date(b.date)
  );
}

/** Events in the past, most recent first. */
export function pastEvents(now: Date = new Date()): CDDEvent[] {
  return EVENTS.filter((e) => new Date(e.date) < startOfDay(now)).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );
}

/** Events tagged to a commission — used to auto-populate commission pages. */
export function eventsForCommission(group: AdvisorGroup): CDDEvent[] {
  return EVENTS.filter((e) => e.commissions.includes(group)).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );
}

export function getEvent(slug: string): CDDEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

/** Date locales — a Dutch reader expects "28 februari 2026", not "28 February". */
const DATE_LOCALE: Record<Locale, string> = { en: 'en-GB', nl: 'nl-NL', fr: 'fr-FR' };

export function formatEventDate(iso: string, locale: Locale = 'en'): string {
  return new Date(iso).toLocaleDateString(DATE_LOCALE[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

/**
 * schema.org/Event structured data — free distribution into Google's event
 * surfaces, which the blueprint calls out specifically.
 */
export function eventJsonLd(event: CDDEvent, origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location,
      address: { '@type': 'PostalAddress', addressLocality: event.city, addressCountry: 'NL' },
    },
    description: event.summary,
    organizer: {
      '@type': 'Organization',
      name: 'CDD Pays-Bas',
      url: origin,
    },
    url: `${origin}/events/${event.slug}`,
  };
}
