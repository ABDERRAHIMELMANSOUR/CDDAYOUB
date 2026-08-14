import { useState } from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { Mail, MapPin, Linkedin, Send, Phone, Building, AlertCircle } from 'lucide-react';
import { submitToCrm, isLikelyBot } from '../../lib/crm';
import { trackEvent, GOALS } from '../../lib/analytics';
import { HoneypotField } from '../HoneypotField';
import { PageHero } from '../PageHero';

export function Contact() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [degraded, setDegraded] = useState(false);

  /**
   * Posts the enquiry to the CRM (blueprint ticket: route submissions into the
   * CRM rather than a mailbox, so the pipeline is visible to the board).
   *
   * Until VITE_CRM_WEBHOOK_URL is configured this reports `not-configured`,
   * which is treated as a normal send — the board is told plainly in the
   * handover that enquiries are not being captured until they set it. A hard
   * failure is surfaced to the visitor with an email fallback, because an
   * enquiry that silently vanishes is worse than no form at all.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (isLikelyBot(form)) {
      setSubmitted(true);
      return;
    }
    setPending(true);
    const result = await submitToCrm({
      form: 'contact',
      locale,
      sourcePath: window.location.pathname,
      fields: { ...formData },
    });
    setPending(false);
    setDegraded(result.status === 'error');
    trackEvent(GOALS.contactSubmitted, { interest: formData.interest || 'unspecified' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDegraded(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: '',
      });
    }, 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.labelLocation,
      details: [t.contact.country, t.contact.location],
    },
    {
      icon: Mail,
      title: t.contact.labelEmail,
      details: ['contact@cddpaysbas.nl'],
    },
    {
      icon: Phone,
      title: t.contact.labelPhone,
      details: ['+31 6 40766802'],
    },
    {
      icon: Linkedin,
      title: t.contact.labelLinkedin,
      details: ['Club des Dirigeants – CDD PAYS-BAS'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <PageHero variant="brand" title={t.contact.heroTitle}>
        {t.contact.heroSubtitle}
      </PageHero>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h2>
              <p className="text-gray-600 mb-8">{t.contact.introText}</p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <item.icon className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.officeHours}</h3>
                <p className="text-sm text-gray-600">{t.contact.weekdays}</p>
                <p className="text-sm text-gray-600">{t.contact.hours}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.sendMessage}</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.contact.sent}</h3>
                    <p className="text-gray-600">{t.contact.sentText}</p>
                    {degraded && (
                      <p className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left text-sm text-amber-900">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {t.contact.sendFailed}
                      </p>
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <HoneypotField />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.name} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t.contact.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.organisation}
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t.contact.orgPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t.contact.emailPlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t.contact.phonePlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.areaOfInterest}{' '}
                        <span className="font-normal text-gray-500">{t.common.optional}</span>
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">{t.contact.selectOption}</option>
                        {t.contact.interests.map((area, index) => (
                          <option key={index} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.subject}{' '}
                        <span className="font-normal text-gray-500">{t.common.optional}</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.contact.subjectPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.contact.messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="w-full md:w-auto px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center disabled:opacity-60"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      {pending ? t.common.loading : t.contact.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.whoShouldContact}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.contact.whoShouldContactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.contact.audiences.map((stakeholder, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-5 w-5 text-blue-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{stakeholder.title}</h3>
                <p className="text-sm text-gray-600">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{t.contact.privacyTitle}</h3>
            <p className="text-sm text-gray-700">{t.contact.privacyText}</p>
            {/* A paragraph is not a privacy statement — this links to the real one. */}
            <p className="text-sm text-gray-700 mt-3">
              {t.contact.privacyLinkIntro}{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900 font-medium">
                {t.contact.privacyLinkText}
              </Link>{' '}
              {t.contact.privacyLinkOutro}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
