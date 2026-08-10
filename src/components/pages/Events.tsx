import { useMemo, useState } from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { Calendar, CalendarPlus, MapPin, Clock, Users, X, Check, AlertCircle } from 'lucide-react';
import {
  EVENTS,
  EVENT_TYPE_LABELS,
  upcomingEvents,
  pastEvents,
  formatEventDate,
  eventJsonLd,
  placesLeft,
  canRegister,
  type CDDEvent,
  type EventType,
} from '../../data/events';
import { COMMISSIONS } from '../../data/commissions';
import { GROUP_LABELS, type AdvisorGroup } from '../../data/advisors';
import { BrandedImage } from '../BrandedImage';
import { HoneypotField } from '../HoneypotField';
import { StructuredData } from '../StructuredData';
import { downloadIcs } from '../../lib/calendar';
import { submitToCrm, isLikelyBot } from '../../lib/crm';
import { trackEvent, GOALS } from '../../lib/analytics';

/**
 * Events (ticket 19).
 *
 * The upcoming/past split is computed from each event's date, so nothing can be
 * left badged "Upcoming" months after it happened — the defect that made an
 * active organisation look dormant.
 *
 * Registration opens a modal that captures the RSVP. Payment and confirmation
 * emails need the same backend as membership checkout (see src/lib/payments.ts);
 * until that exists the modal records interest and says so honestly.
 */
export function Events() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [typeFilter, setTypeFilter] = useState<EventType | 'all'>('all');
  const [commissionFilter, setCommissionFilter] = useState<AdvisorGroup | 'all'>('all');
  const [rsvpFor, setRsvpFor] = useState<CDDEvent | null>(null);

  /*
   * schema.org/Event for every event on the page — the free distribution into
   * Google's event surfaces the blueprint calls out. An ItemList wrapper is
   * used rather than one script per event so the ordering is explicit.
   */
  const origin = typeof window === 'undefined' ? 'https://cddpaysbas.nl' : window.location.origin;
  const eventsLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: EVENTS.map((event, index) => {
        // @context belongs on the outer graph only; repeating it on each
        // nested item is redundant and discouraged by schema.org.
        const { '@context': _context, ...item } = eventJsonLd(event, origin, locale);
        return { '@type': 'ListItem', position: index + 1, item };
      }),
    }),
    [origin, locale]
  );

  const matches = useMemo(
    () => (event: CDDEvent) =>
      (typeFilter === 'all' || event.type === typeFilter) &&
      (commissionFilter === 'all' || event.commissions.includes(commissionFilter)),
    [typeFilter, commissionFilter]
  );

  const upcoming = upcomingEvents().filter(matches);
  const past = pastEvents().filter(matches);
  const filtersActive = typeFilter !== 'all' || commissionFilter !== 'all';

  return (
    <div>
      <StructuredData id="events-jsonld" data={eventsLd} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.nav.events}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              {t.events.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t.events.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 space-y-3">
          <FilterRow label={t.events.filterType}>
            <Chip active={typeFilter === 'all'} onClick={() => setTypeFilter('all')}>
              {t.events.allTypes}
            </Chip>
            {(Object.keys(EVENT_TYPE_LABELS) as EventType[]).map((type) => (
              <Chip key={type} active={typeFilter === type} onClick={() => setTypeFilter(type)}>
                {pick(EVENT_TYPE_LABELS[type], locale)}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label={t.events.filterCommission}>
            <Chip active={commissionFilter === 'all'} onClick={() => setCommissionFilter('all')}>
              {t.events.allCommissions}
            </Chip>
            {COMMISSIONS.map((commission) => (
              <Chip
                key={commission.slug}
                active={commissionFilter === commission.group}
                onClick={() => setCommissionFilter(commission.group)}
              >
                {pick(GROUP_LABELS[commission.group], locale)}
              </Chip>
            ))}
          </FilterRow>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.events.upcoming}</h2>
          {upcoming.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-lg text-gray-800 font-medium">
                {filtersActive ? t.events.noMatch : t.events.noUpcoming}
              </p>
              <p className="mt-2 text-gray-700">
                {filtersActive ? t.events.noMatchNote : t.events.noUpcomingNote}
              </p>
              <Link
                to="/contact"
                className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                {t.events.getNotified}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} onRsvp={() => setRsvpFor(event)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t.events.past}</h2>
            <p className="text-sm text-gray-700">
              {t.events.recapNote}
            </p>
          </div>
          {past.length === 0 ? (
            <p className="text-gray-700">{t.events.noPastMatch}</p>
          ) : (
            <div className="space-y-8">
              {past.map((event) => (
                <PastEventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {rsvpFor && <RsvpModal event={rsvpFor} onClose={() => setRsvpFor(null)} />}
    </div>
  );
}

/* ── Pieces ─────────────────────────────────────────────────────────────── */

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-700 w-24 flex-shrink-0">
        {label}
      </span>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

function CommissionTags({ groups }: { groups: AdvisorGroup[] }) {
  const { locale } = useLocale();
  if (groups.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {groups.map((group) => (
        <Link
          key={group}
          to={`/commissions/${group}`}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100"
        >
          {pick(GROUP_LABELS[group], locale)}
        </Link>
      ))}
    </div>
  );
}

function EventCard({ event, onRsvp }: { event: CDDEvent; onRsvp: () => void }) {
  const tt = useTranslation();
  const { locale } = useLocale();
  const left = placesLeft(event);
  const open = canRegister(event);
  return (
    <article className="flex flex-col rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white">
      <div className="h-44">
        <BrandedImage
          label={pick(EVENT_TYPE_LABELS[event.type], locale)}
          title={pick(event.title, locale)}
          className="rounded-none"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {pick(event.title, locale)}
        </h3>
        <dl className="mt-3 space-y-1.5 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
            <dd>{formatEventDate(event.date, locale)}</dd>
          </div>
          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <dd>{event.time}</dd>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
            <dd>{event.location}</dd>
          </div>
          {event.capacity !== undefined && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <dd>
                {left === null
                  ? `${event.capacity} ${tt.events.places}`
                  : left === 0
                    ? tt.events.full
                    : `${left} ${tt.events.placesLeft}`}
              </dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-gray-700 leading-relaxed flex-grow">{pick(event.summary, locale)}</p>
        <CommissionTags groups={event.commissions} />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onRsvp}
            disabled={!open}
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {left === 0
              ? tt.events.full
              : event.registrationOpen
                ? tt.events.register
                : tt.events.registrationSoon}
          </button>
          <button
            type="button"
            onClick={() => {
              trackEvent(GOALS.calendarDownload, { event: event.slug });
              downloadIcs(event, locale);
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-blue-600 text-blue-700 hover:bg-blue-50 transition-colors"
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            {tt.events.addToCalendar}
          </button>
        </div>
      </div>
    </article>
  );
}

function PastEventCard({ event }: { event: CDDEvent }) {
  const t = useTranslation();
  const { locale } = useLocale();
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-8">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg bg-gray-100 text-gray-800">
          {pick(EVENT_TYPE_LABELS[event.type], locale)}
        </span>
        <span className="text-sm text-gray-700">{formatEventDate(event.date, locale)}</span>
        <span className="text-sm text-gray-700">· {event.location}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{pick(event.title, locale)}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
        {pick(event.recap ?? event.summary, locale)}
      </p>
      <CommissionTags groups={event.commissions} />
      {event.photos && event.photos.length > 0 && (
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {event.photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={pick(event.title, locale)}
              loading="lazy"
              className="rounded-xl object-cover w-full h-28"
            />
          ))}
        </div>
      )}
    </article>
  );
}

/** RSVP modal (ticket 19). Records the registration; see note in the body. */
function RsvpModal({ event, onClose }: { event: CDDEvent; onClose: () => void }) {
  const [pending, setPending] = useState(false);
  const [degraded, setDegraded] = useState(false);
  const t = useTranslation();
  const { locale } = useLocale();
  const [done, setDone] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <h2 id="rsvp-title" className="text-2xl font-bold text-gray-900">
            {done ? t.events.rsvpDone : `${t.events.rsvpTitle} — ${pick(event.title, locale)}`}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.close}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {done ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-5">
              <Check className="h-7 w-7 text-blue-700" aria-hidden="true" />
            </div>
            <p className="text-gray-700 leading-relaxed">{t.events.rsvpThanks}</p>
            {degraded && (
              <p className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left text-sm text-amber-900">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {t.events.rsvpPending}
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                trackEvent(GOALS.calendarDownload, { event: event.slug });
                downloadIcs(event, locale);
              }}
              className="mt-6 mr-3 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              {t.events.addToCalendar}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
            >
              {t.common.close}
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              // Silently accept and drop bot submissions: telling a bot it was
              // detected only helps whoever wrote it.
              if (isLikelyBot(form)) {
                setDone(true);
                return;
              }
              setPending(true);
              const result = await submitToCrm({
                form: 'event-registration',
                locale,
                sourcePath: window.location.pathname,
                fields: {
                  eventSlug: event.slug,
                  eventTitle: pick(event.title, 'en'),
                  eventDate: event.date,
                  name: String(form.get('name') || ''),
                  email: String(form.get('email') || ''),
                  organisation: String(form.get('organisation') || ''),
                },
              });
              setPending(false);
              // 'not-configured' is expected until the board sets the webhook
              // up; only a real failure warrants telling the visitor to email.
              setDegraded(result.status === 'error');
              trackEvent(GOALS.eventRegistration, { event: event.slug });
              setDone(true);
            }}
            className="space-y-5"
          >
            <HoneypotField />
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
              <p className="flex items-center gap-2 font-medium text-gray-900">
                <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
                {formatEventDate(event.date, locale)}
                {event.time ? ` · ${event.time}` : ''}
              </p>
              <p className="mt-1">{event.location}</p>
              {(event.memberPrice || event.guestPrice) && (
                <p className="mt-2">
                  {event.memberPrice && (
                    <>
                      {t.events.membersPrice}: {event.memberPrice}.{' '}
                    </>
                  )}
                  {event.guestPrice && (
                    <>
                      {t.events.guestsPrice}: {event.guestPrice}.
                    </>
                  )}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="rsvp-name" className="block text-sm font-semibold text-gray-900 mb-2">
                {t.events.fullName} <span className="text-red-700">*</span>
              </label>
              <input
                id="rsvp-name"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="rsvp-email" className="block text-sm font-semibold text-gray-900 mb-2">
                {t.events.email} <span className="text-red-700">*</span>
              </label>
              <input
                id="rsvp-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="rsvp-org" className="block text-sm font-semibold text-gray-900 mb-2">
                {t.events.organisation}{' '}
                <span className="font-normal text-gray-600">{t.common.optional}</span>
              </label>
              <input
                id="rsvp-org"
                name="organisation"
                autoComplete="organization"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <p className="text-sm text-gray-700">
              {t.events.privacyNote}{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
                {t.footer.privacy}
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={pending}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-60"
            >
              {pending ? t.common.loading : t.events.confirmRegistration}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
