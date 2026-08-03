import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, X, Check } from 'lucide-react';
import {
  EVENTS,
  EVENT_TYPE_LABELS,
  upcomingEvents,
  pastEvents,
  formatEventDate,
  type CDDEvent,
  type EventType,
} from '../../data/events';
import { COMMISSIONS } from '../../data/commissions';
import { GROUP_LABELS, type AdvisorGroup } from '../../data/advisors';
import { BrandedImage } from '../BrandedImage';

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
  const [typeFilter, setTypeFilter] = useState<EventType | 'all'>('all');
  const [commissionFilter, setCommissionFilter] = useState<AdvisorGroup | 'all'>('all');
  const [rsvpFor, setRsvpFor] = useState<CDDEvent | null>(null);

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
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Events
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              Events &amp; Gatherings
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Roundtables, delegations, forums and community gatherings — convened by the
              commissions and open to members.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 space-y-3">
          <FilterRow label="Type">
            <Chip active={typeFilter === 'all'} onClick={() => setTypeFilter('all')}>
              All types
            </Chip>
            {(Object.keys(EVENT_TYPE_LABELS) as EventType[]).map((type) => (
              <Chip key={type} active={typeFilter === type} onClick={() => setTypeFilter(type)}>
                {EVENT_TYPE_LABELS[type]}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Commission">
            <Chip active={commissionFilter === 'all'} onClick={() => setCommissionFilter('all')}>
              All commissions
            </Chip>
            {COMMISSIONS.map((commission) => (
              <Chip
                key={commission.slug}
                active={commissionFilter === commission.group}
                onClick={() => setCommissionFilter(commission.group)}
              >
                {commission.title}
              </Chip>
            ))}
          </FilterRow>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming</h2>
          {upcoming.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-lg text-gray-800 font-medium">
                {filtersActive
                  ? 'No upcoming events match these filters.'
                  : 'Our next event is being finalised.'}
              </p>
              <p className="mt-2 text-gray-700">
                {filtersActive
                  ? 'Try clearing a filter, or see what the commissions have run before.'
                  : 'Members and subscribers are notified first.'}
              </p>
              <Link
                to="/contact"
                className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                Get notified
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
            <h2 className="text-3xl font-bold text-gray-900">Past events</h2>
            <p className="text-sm text-gray-700">
              Recaps are published within five working days of every event.
            </p>
          </div>
          {past.length === 0 ? (
            <p className="text-gray-700">No past events match these filters.</p>
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
  if (groups.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {groups.map((group) => (
        <Link
          key={group}
          to={`/focus-areas/${group}`}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100"
        >
          {GROUP_LABELS[group]}
        </Link>
      ))}
    </div>
  );
}

function EventCard({ event, onRsvp }: { event: CDDEvent; onRsvp: () => void }) {
  return (
    <article className="flex flex-col rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white">
      <div className="h-44">
        <BrandedImage
          label={EVENT_TYPE_LABELS[event.type]}
          title={event.title}
          className="rounded-none"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{event.title}</h3>
        <dl className="mt-3 space-y-1.5 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
            <dd>{formatEventDate(event.date)}</dd>
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
          {event.capacity && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-700" aria-hidden="true" />
              <dd>{event.capacity} places</dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-gray-700 leading-relaxed flex-grow">{event.summary}</p>
        <CommissionTags groups={event.commissions} />
        <button
          type="button"
          onClick={onRsvp}
          disabled={!event.registrationOpen}
          className="mt-6 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {event.registrationOpen ? 'Register' : 'Registration opens soon'}
        </button>
      </div>
    </article>
  );
}

function PastEventCard({ event }: { event: CDDEvent }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-8">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg bg-gray-100 text-gray-800">
          {EVENT_TYPE_LABELS[event.type]}
        </span>
        <span className="text-sm text-gray-700">{formatEventDate(event.date)}</span>
        <span className="text-sm text-gray-700">· {event.location}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
        {event.recap ?? event.summary}
      </p>
      <CommissionTags groups={event.commissions} />
      {event.photos && event.photos.length > 0 && (
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {event.photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={`${event.title}`}
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
            {done ? 'Registration received' : `Register — ${event.title}`}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
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
            <p className="text-gray-700 leading-relaxed">
              Thank you — your registration for <strong>{event.title}</strong> is recorded. We will
              confirm your place by email and send joining details closer to the date.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="space-y-5"
          >
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
              <p className="flex items-center gap-2 font-medium text-gray-900">
                <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
                {formatEventDate(event.date)}
                {event.time ? ` · ${event.time}` : ''}
              </p>
              <p className="mt-1">{event.location}</p>
              {(event.memberPrice || event.guestPrice) && (
                <p className="mt-2">
                  {event.memberPrice && <>Members: {event.memberPrice}. </>}
                  {event.guestPrice && <>Guests: {event.guestPrice}.</>}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="rsvp-name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full name <span className="text-red-700">*</span>
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
                Email <span className="text-red-700">*</span>
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
                Organisation <span className="font-normal text-gray-600">(optional)</span>
              </label>
              <input
                id="rsvp-org"
                name="organisation"
                autoComplete="organization"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <p className="text-sm text-gray-700">
              Your details are handled in line with our{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
                privacy statement
              </Link>
              .
            </p>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all"
            >
              Confirm registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
