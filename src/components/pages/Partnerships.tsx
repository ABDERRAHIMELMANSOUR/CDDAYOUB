import { Building2, Users, Globe2, Briefcase, Heart, Network } from 'lucide-react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BrandedImage } from '../BrandedImage';

export function Partnerships() {
  const t = useTranslation();
  const partnerCategories = [
    {
      icon: Building2,
      title: 'Corporate Partners',
      description: 'Leading corporations and multinationals committed to cross-border growth and innovation',
      examples: ['Energy Companies', 'Infrastructure Firms', 'Technology Leaders', 'Financial Institutions'],
    },
    {
      icon: Briefcase,
      title: 'Investment Partners',
      description: 'Private equity firms, family offices, and institutional investors driving strategic investments',
      examples: ['Private Equity Funds', 'Development Finance Institutions', 'Family Offices', 'Venture Capital'],
    },
    {
      icon: Globe2,
      title: 'Institutional Partners',
      description: 'Government agencies, diplomatic missions, and international organizations',
      examples: ['Government Agencies', 'Embassies & Trade Offices', 'EU Institutions', 'International Organizations'],
    },
    {
      icon: Users,
      title: 'Knowledge Partners',
      description: 'Universities, research institutes, and professional organizations',
      examples: ['Universities', 'Research Centers', 'Think Tanks', 'Professional Associations'],
    },
    {
      icon: Heart,
      title: 'Diaspora Networks',
      description: 'Professional and business networks connecting communities across borders',
      examples: ['Business Associations', 'Professional Networks', 'Community Organizations', 'Alumni Groups'],
    },
    {
      icon: Network,
      title: 'Strategic Alliances',
      description: 'Business clubs, chambers of commerce, and sector-specific organizations',
      examples: ['Chambers of Commerce', 'Business Clubs', 'Sector Associations', 'Innovation Hubs'],
    },
  ];

  const benefits = t.partnerships.benefits;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Partnerships & Ecosystem
            </h1>
            <p className="text-xl text-blue-100">
              CDD Pays-Bas brings together a diverse ecosystem of partners committed to 
              cross-border collaboration, innovation, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Multi-Stakeholder Ecosystem</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our partnership network spans the public and private sectors, connecting organizations 
                that share our commitment to economic diplomacy, strategic collaboration, and impact.
              </p>
              <p className="text-lg text-gray-600">
                By bringing together diverse stakeholders—from corporations and investors to government 
                agencies and knowledge institutions—we create a dynamic platform for meaningful dialogue, 
                project development, and mutual growth.
              </p>
            </div>
            <div className="relative h-96">
              {/* Was the same stock handshake used on the homepage. */}
              <BrandedImage
                label="Partnerships"
                title="Building durable institutional relationships"
                caption="Replace with photography from a CDD partnership signing or event."
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with six key categories of partners, each bringing unique value to our network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-1">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1 h-1 bg-blue-900 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partners of CDD Pays-Bas gain access to a vetted network and strategic opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Geographic Reach</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our partnership network spans three strategic regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-2xl font-bold mb-4">Europe</h3>
              <p className="text-blue-100 mb-4">
                Strong presence in the Netherlands with connections across EU member states, 
                institutions, and business networks.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Business clusters & innovation hubs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>EU institutions & agencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Financial & investment networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-2xl font-bold mb-4">Morocco</h3>
              <p className="text-blue-100 mb-4">
                Deep connections with Moroccan business community, government stakeholders, 
                and development institutions.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Public & private sector leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Strategic infrastructure projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Economic development agencies</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-2xl font-bold mb-4">Africa</h3>
              <p className="text-blue-100 mb-4">
                Growing network across sub-Saharan Africa focusing on trade, investment, 
                and development partnerships.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regional economic communities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Development finance institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sector-specific partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Become a Partner
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join CDD Pays-Bas' ecosystem and connect with leaders shaping the future of 
            cross-border collaboration.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  );
}
