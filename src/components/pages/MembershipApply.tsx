import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import {
  MEMBERSHIP,
  MEMBERSHIP_PRICE_EUR,
  formatMembershipPrice,
  pick,
} from '../../data/membership';
import { COMMISSIONS } from '../../data/commissions';
import { paymentProvider, PAYMENT_METHODS, type Applicant } from '../../lib/payments';
import { submitToCrm, isLikelyBot } from '../../lib/crm';
import { trackEvent, GOALS } from '../../lib/analytics';
import { HoneypotField } from '../HoneypotField';
import { PageHero } from '../PageHero';

/**
 * Membership application (tickets 17 & 18).
 *
 * Six fields, of which three are required — the blueprint's limit. Every extra
 * required field before someone has committed is friction for no gain.
 *
 * On submit the request goes to the configured payment provider. Until a
 * checkout endpoint exists that provider is `mockProvider`, which captures the
 * application and returns a reference; the confirmation says plainly that CDD
 * will be in touch to arrange payment. See src/lib/payments.ts for why a static
 * SPA cannot take iDEAL or card payments directly.
 */
export function MembershipApply() {
  const t = useTranslation();
  const { locale } = useLocale();
  const price = formatMembershipPrice(locale, t.membership.perMonth);
  const [params] = useSearchParams();
  // Preselected when arriving from a commission page's "join" CTA. Matched
  // against the rendered option values, so an unknown value simply falls back
  // to "no preference" rather than injecting arbitrary text into the form.
  const requested = params.get('commission') ?? '';
  const preselected = COMMISSIONS.some((c) => pick(c.title, locale) === requested)
    ? requested
    : '';
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [reference, setReference] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Fires once on arrival. Paired with the submitted goal below, this is what
  // makes the blueprint's "application form completion rate" measurable.
  useEffect(() => {
    trackEvent(GOALS.membershipApplicationStarted);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = new FormData(event.currentTarget);
    if (isLikelyBot(form)) {
      // Accept silently — a bot learns nothing, and a real applicant can never
      // land here because the field is hidden from screen and assistive tech.
      setReference('');
      setStatus('done');
      return;
    }
    const applicant: Applicant = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      organisation: String(form.get('organisation') || '').trim() || undefined,
      role: String(form.get('role') || '').trim() || undefined,
      commission: String(form.get('commission') || '').trim() || undefined,
      message: String(form.get('message') || '').trim() || undefined,
    };

    // The CRM is the board's pipeline view, so every application is recorded
    // there regardless of how payment is eventually taken. A CRM failure must
    // not block the application: the payment step is what the applicant came
    // for, and a lost CRM row is recoverable from the payment provider.
    await submitToCrm({
      form: 'membership-application',
      locale,
      sourcePath: window.location.pathname,
      fields: {
        name: applicant.name,
        email: applicant.email,
        organisation: applicant.organisation,
        role: applicant.role,
        commission: applicant.commission,
        message: applicant.message,
        monthlyDuesEur: MEMBERSHIP_PRICE_EUR,
      },
    });

    trackEvent(GOALS.membershipApplicationSubmitted, {
      commission: applicant.commission || 'none',
    });

    const result = await paymentProvider.createCheckout({ applicant });

    if (result.status === 'redirect') {
      window.location.href = result.checkoutUrl;
      return;
    }
    if (result.status === 'manual') {
      setReference(result.reference);
      setStatus('done');
      return;
    }
    setError(result.message);
    setStatus('error');
  }

  if (status === 'done') {
    return (
      <div className="max-w-[720px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="rounded-3xl border border-gray-200 shadow-lg p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-blue-700" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t.membership.receivedTitle}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.membership.receivedText} <strong>{reference}</strong>.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">{t.membership.receivedFollowUp}</p>
          <Link
            to="/"
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all"
          >
            {t.membership.backHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        size="compact"
        title={t.membership.applyTitle}
        above={
          <Link
            to="/membership"
            className="inline-flex items-center text-sm text-blue-100 hover:text-white transition-colors mb-5"
          >
            ← {t.membership.applyBackLink}
          </Link>
        }
      >
        {t.membership.applyIntro}
      </PageHero>

      <section className="py-12 lg:py-16 bg-white">
        <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto px-6 lg:px-12">
          {/* Applicant details */}
          <fieldset className="mb-10">
            <legend className="text-2xl font-bold text-gray-900 mb-5">
              {t.membership.yourDetails}
            </legend>
            <HoneypotField />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field
                label={t.membership.fullName}
                optionalLabel={t.membership.optional}
                name="name"
                required
                autoComplete="name"
              />
              <Field
                label={t.membership.emailLabel}
                optionalLabel={t.membership.optional}
                name="email"
                type="email"
                required
                autoComplete="email"
              />
              <Field
                label={t.membership.organisationLabel}
                optionalLabel={t.membership.optional}
                name="organisation"
                autoComplete="organization"
              />
              <Field
                label={t.membership.roleLabel}
                optionalLabel={t.membership.optional}
                name="role"
                autoComplete="organization-title"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="commission" className="block text-sm font-semibold text-gray-900 mb-2">
                {t.membership.commissionLabel}{' '}
                <span className="font-normal text-gray-600">{t.membership.optional}</span>
              </label>
              <select
                id="commission"
                name="commission"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                defaultValue={preselected}
              >
                <option value="">{t.membership.commissionNone}</option>
                {COMMISSIONS.map((commission) => (
                  <option key={commission.slug} value={pick(commission.title, locale)}>
                    {pick(commission.title, locale)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                {t.membership.messageLabel}{' '}
                <span className="font-normal text-gray-600">{t.membership.optional}</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </fieldset>

          {/* Review */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-2">
              {pick(MEMBERSHIP.name, locale)} — {price}
            </h2>
            {!paymentProvider.isLive ? (
              <p className="text-gray-700 leading-relaxed">{t.membership.reviewManual}</p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {t.membership.reviewLive} {PAYMENT_METHODS.map((m) => m.label).join(', ')}.
              </p>
            )}
            <p className="mt-3 text-sm text-gray-700">
              {t.membership.privacyLine}{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
                {t.membership.privacyLink}
              </Link>
              .
            </p>
          </div>

          {status === 'error' && (
            <p className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all disabled:opacity-60"
          >
            {status === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
            {status === 'submitting' ? t.membership.submitting : t.membership.submit}
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  optionalLabel,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
  optionalLabel: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-900 mb-2">
        {label}{' '}
        {required ? (
          <span className="text-red-700">*</span>
        ) : (
          <span className="font-normal text-gray-600">{optionalLabel}</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      />
    </div>
  );
}
