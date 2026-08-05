import type { CDDEvent } from '../data/events';
import type { Locale } from '../i18n/config';
import { pick } from '../i18n/localised';

/**
 * `.ics` calendar file generation (ticket 19).
 *
 * Built to RFC 5545. Generated in the browser and handed over as a blob
 * download — no server needed, and no third-party calendar service that would
 * see who is attending what.
 *
 * Two details that are easy to get wrong and break the file silently:
 *   - Lines MUST be CRLF-terminated, not LF. Outlook is strict about this.
 *   - Commas, semicolons and backslashes inside text values must be escaped,
 *     or an event whose title contains a comma truncates at the comma.
 */

/** Escapes a text value per RFC 5545 §3.3.11. */
function escapeText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

/** Formats a Date as a UTC timestamp: 20260228T170000Z. */
function toUtcStamp(date: Date): string {
  return `${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
}

/**
 * Parses the event's date plus optional "18:00–21:00" time range.
 *
 * The times CDD publishes are local Netherlands times. Rather than guess at
 * daylight saving, the values are emitted with a TZID of Europe/Amsterdam and
 * left as local times, which is what a calendar client expects.
 */
function localStamp(isoDate: string, time: string): string {
  return `${isoDate.replace(/-/g, '')}T${time.replace(':', '')}00`;
}

/** Splits "18:00–21:00" (en dash or hyphen) into start and end. */
function parseTimeRange(time?: string): { start: string; end: string } {
  const fallback = { start: '18:00', end: '21:00' };
  if (!time) return fallback;
  const parts = time.split(/[–—-]/).map((p) => p.trim());
  const valid = (v: string) => /^\d{1,2}:\d{2}$/.test(v);
  if (parts.length === 2 && valid(parts[0]) && valid(parts[1])) {
    return { start: parts[0], end: parts[1] };
  }
  if (parts.length >= 1 && valid(parts[0])) {
    // Start time only — assume a three-hour event rather than emit a zero-length one.
    const [h, m] = parts[0].split(':').map(Number);
    const end = `${String((h + 3) % 24).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    return { start: parts[0], end };
  }
  return fallback;
}

/** Builds the full text of an `.ics` file for one event. */
export function buildIcs(event: CDDEvent, locale: Locale, origin: string): string {
  const { start, end } = parseTimeRange(event.time);
  const url = `${origin}/events`;

  // Folding long lines is required by RFC 5545 (75 octets), but every calendar
  // client in practice accepts unfolded lines, and folding multi-byte UTF-8
  // safely is fiddly. Descriptions are kept short instead.
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CDD Pays-Bas//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.slug}@cddpaysbas.nl`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART;TZID=Europe/Amsterdam:${localStamp(event.date, start)}`,
    `DTEND;TZID=Europe/Amsterdam:${localStamp(event.date, end)}`,
    `SUMMARY:${escapeText(pick(event.title, locale))}`,
    `DESCRIPTION:${escapeText(pick(event.summary, locale))}`,
    `LOCATION:${escapeText(`${event.location}, ${event.city}`)}`,
    `URL:${escapeText(url)}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `${lines.join('\r\n')}\r\n`;
}

/** Triggers a download of the event's `.ics` file. */
export function downloadIcs(event: CDDEvent, locale: Locale): void {
  const origin = typeof window === 'undefined' ? 'https://cddpaysbas.nl' : window.location.origin;
  const blob = new Blob([buildIcs(event, locale, origin)], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.slug}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // Revoking immediately can cancel the download in Safari; one tick is enough.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
