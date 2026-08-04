import { useState } from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
import { Mail, MapPin, Linkedin, Send, Phone, Building } from 'lucide-react';

export function Contact() {
  const t = useTranslation();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, this would send the form data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: '',
      });
    }, 3000);
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
      title: 'Location',
      details: ['The Netherlands', t.contact.location],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@cddpaysbas.nl'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+31 6 40766802'],
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: ['Club des Dirigeants – CDD PAYS-BAS'],
    },
  ];

  const collaborationAreas = [
    'Partnership Opportunities',
    'Investment & Project Financing',
    'Business Delegation Participation',
    'Event Collaboration',
    'Advisory & Expert Contribution',
    'General Inquiry',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact & Collaboration
            </h1>
            <p className="text-xl text-blue-100">
              Connect with CDD Pays-Bas to explore partnerships, join our network, 
              or participate in cross-border initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h2>
              <p className="text-gray-600 mb-8">
                We welcome inquiries from business leaders, investors, institutions, 
                and organizations interested in cross-border collaboration.
              </p>

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
                <p className="text-sm text-gray-600">Monday - Friday</p>
                <p className="text-sm text-gray-600">9:00 AM - 6:00 PM CET</p>
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
                    <p className="text-gray-600">
                      Thank you for contacting CDD Pays-Bas. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Company or institution"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+31 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">{t.contact.selectOption}</option>
                        {collaborationAreas.map((area, index) => (
                          <option key={index} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief subject line"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your inquiry or collaboration interest..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
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
              CDD Pays-Bas welcomes engagement from diverse stakeholders
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
            <h3 className="font-semibold text-gray-900 mb-2">Privacy &amp; Data Protection</h3>
            <p className="text-sm text-gray-700">
              Your information will be handled in accordance with European data protection regulations.
              We will only use your contact details to respond to your inquiry and may add you to our
              professional network mailing list if you express interest. You can unsubscribe at any time.
            </p>
            {/* A paragraph is not a privacy statement — this links to the real one. */}
            <p className="text-sm text-gray-700 mt-3">
              Read our{' '}
              <Link to="/privacy" className="text-blue-700 underline hover:text-blue-900 font-medium">
                privacy statement
              </Link>{' '}
              for full details on what we collect, why, how long we keep it, and your rights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
