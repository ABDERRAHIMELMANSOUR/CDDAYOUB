import { Building2, Users, Globe2, Briefcase, Heart, Network } from 'lucide-react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
import { BrandedImage } from '../BrandedImage';
import { PageHero } from '../PageHero';

export function Partnerships() {
  const t = useTranslation();
  const ICONS = [Building2, Briefcase, Globe2, Users, Heart, Network];
  const partnerCategories = t.partnerships.types.map((type, i) => ({
    icon: ICONS[i] ?? Network,
    title: type.title,
    description: type.description,
    examples: t.partnerships.typeExamples[i] ?? [],
  }));

  const benefits = t.partnerships.benefits;

  return (
    <div>
      {/* Hero */}
      <PageHero variant="brand" title={t.partnerships.heroTitle}>
        {t.partnerships.heroSubtitle}
      </PageHero>

      {/* Ecosystem Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.partnerships.ecosystemTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{t.partnerships.ecosystemP1}</p>
              <p className="text-lg text-gray-600">{t.partnerships.ecosystemP2}</p>
            </div>
            <div className="relative h-96">
              {/* Was the same stock handshake used on the homepage. */}
              <BrandedImage
                label={t.partnerships.eyebrow}
                title={t.partnerships.caption}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.partnerships.categoriesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.partnerships.categoriesSubtitle}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.partnerships.benefitsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.partnerships.benefitsSubtitle}
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
            <h2 className="text-3xl font-bold mb-4">{t.partnerships.geoTitle}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t.partnerships.geoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.partnerships.regions.map((region) => (
              <div
                key={region.name}
                className="bg-blue-800/50 p-8 rounded-lg border border-blue-700"
              >
                <h3 className="text-2xl font-bold mb-4">{region.name}</h3>
                <p className="text-blue-100 mb-4">{region.description}</p>
                <ul className="space-y-2 text-sm text-blue-100">
                  {region.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.partnerships.ctaTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{t.partnerships.ctaText}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            {t.partnerships.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
