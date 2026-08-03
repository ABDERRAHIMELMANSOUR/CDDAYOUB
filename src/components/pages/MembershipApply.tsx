import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import { MEMBERSHIP_TIERS, getTier, formatPrice, pick, type TierId } from '../../data/membership';
import { COMMISSIONS } from '../../data/commissions';
import { paymentProvider, PAYMENT_METHODS, type Applicant } from '../../lib/payments';

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
  const priceLabels = {
    perYear: t.membership.perYear,
    byInvitation: t.membership.byInvitation,
    contactForDues: t.membership.contactForDues,
  };
  const [params] = useSearchParams();
  const initialTier = (params.get('tier') as TierId) || 'individual';

  const [tierId, setTierId] = useState<TierId>(
    getTier(initialTier)?.applicable ? initialTier : 'individual'
  );
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [reference, setReference] = useState<string>('');
  const [error, setError] = useState<string>('');

  const tier = getTier(tierId);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = new FormData(event.currentTarget);
    const applicant: Applicant = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      organisation: String(form.get('organisation') || '').trim() || undefined,
      role: String(form.get('role') || '').trim() || undefined,
      commission: String(form.get('commission') || '').trim() || undefined,
      message: String(form.get('message') || '').trim() || undefined,
    };

    const result = await paymentProvider.createCheckout({ tierId, applicant });

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application received</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you. Your application for{' '}
            <strong>{tier ? pick(tier.name, locale) : ''}</strong> membership has been recorded
            under reference <strong>{reference}</strong>.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            A member of the board reviews every application personally. We will be in touch shortly
            to confirm your membership and arrange payment.
          </p>
          <Link
            to="/"
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-12">
          <Link
            to="/membership"
            className="inline-flex items-center text-sm text-blue-200 hover:text-white transition-colors mb-5"
          >
            ← Membership
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Apply for membership
          </h1>
          <p className="mt-4 text-xl text-gray-200 leading-relaxed">
            Three required fields. We review every application and respond personally.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto px-6 lg:px-12">
          {/* Tier selection */}
          <fieldset className="mb-10">
            <legend className="text-2xl font-bold text-gray-900 mb-5">Choose your tier</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEMBERSHIP_TIERS.filter((t) => t.applicable).map((option) => (
                <label
                  key={option.id}
                  className={`flex cursor-pointer gap-4 rounded-2xl border-2 p-5 transition-all ${
                    tierId === option.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="tier"
                    value={option.id}
                    checked={tierId === option.id}
                    onChange={() => setTierId(option.id)}
                    className="mt-1 h-4 w-4 text-blue-600"
                  />
                  <span>
                    <span className="block font-bold text-gray-900">
                      {pick(option.name, locale)}
                    </span>
                    <span className="block text-sm text-gray-600 mt-0.5">
                      {pick(option.audience, locale)}
                    </span>
                    <span className="block text-sm font-semibold text-blue-700 mt-1">
                      {formatPrice(option, locale, priceLabels)}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Applicant details */}
          <fieldset className="mb-10">
            <legend className="text-2xl font-bold text-gray-900 mb-5">Your details</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required autoComplete="name" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Organisation" name="organisation" autoComplete="organization" />
              <Field label="Role" name="role" autoComplete="organization-title" />
            </div>

            <div className="mt-6">
              <label htmlFor="commission" className="block text-sm font-semibold text-gray-900 mb-2">
                Which commission interests you? <span className="font-normal text-gray-600">(optional)</span>
              </label>
              <select
                id="commission"
                name="commission"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                defaultValue=""
              >
                <option value="">No preference</option>
                {COMMISSIONS.map((commission) => (
                  <option key={commission.slug} value={commission.title}>
                    {commission.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Anything you would like us to know?{' '}
                <span className="font-normal text-gray-600">(optional)</span>
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
              {tier ? pick(tier.name, locale) : ''} — {tier ? formatPrice(tier, locale, priceLabels) : ''}
            </h2>
            {!paymentProvider.isLive ? (
              <p className="text-gray-700 leading-relaxed">
                Submitting records your application. CDD Pays-Bas will confirm your membership and
                arrange payment with you directly — online payment is being set up and no payment
                is taken now.
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                You will be taken to our payment provider to complete your membership. We accept{' '}
                {PAYMENT_METHODS.map((m) => m.label).join(', ')}.
              </p>
            )}
            <p className="mt-3 text-sm text-gray-700">
              Your details are handled in line with our{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900">
                privacy statement
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
            {status === 'submitting' ? 'Submitting…' : 'Submit application'}
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
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
          <span className="font-normal text-gray-600">(optional)</span>
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
