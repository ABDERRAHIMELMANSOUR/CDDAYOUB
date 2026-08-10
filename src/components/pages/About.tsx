import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { Target, Eye, Award, Globe } from 'lucide-react';
import { BrandedImage } from '../BrandedImage';
import { ORGANISATION, MOROCCO_RELATIONSHIP_TEXT } from '../../data/organisation';

export function About() {
  const t = useTranslation();
  const { locale } = useLocale();
  const pillars = t.about.whatWeDoItems;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.about.eyebrow}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/*
        Our relationship to CDD Morocco, stated structurally.

        The site asserts a shared vision with CDD Morocco but never explained the
        structure. A Dutch corporate legal team, ministry or bank will ask
        whether CDD Pays-Bas is a chapter, a licensed affiliate, or an
        independent Dutch entity. Set `moroccoRelationship` in
        src/data/organisation.ts and the precise sentence replaces the general
        one below.
      */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-800 mb-3">
            {t.about.moroccoHeading}
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            {ORGANISATION.moroccoRelationship
              ? pick(MOROCCO_RELATIONSHIP_TEXT[ORGANISATION.moroccoRelationship], locale)
              : t.about.moroccoDefault}
          </p>
          <p className="mt-3 text-sm text-gray-700">
            {t.about.transparencyLine}{' '}
            <Link to="/transparency" className="text-blue-700 underline hover:text-blue-900 font-medium">
              {t.about.transparencyLink}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                {t.about.whoWeAre}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                {t.about.whoWeAre}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">{t.about.whoWeAreP1Lead}</span>{' '}
                  {t.about.whoWeAreP1}
                </p>
                <p>
                  {t.about.whoWeAreP2Before}{' '}
                  <span className="font-semibold text-gray-900">{t.about.whoWeAreP2Emphasis}</span>{' '}
                  {t.about.whoWeAreP2After}
                </p>
                <p>{t.about.whoWeAreP3}</p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              {/*
                Was a stock Unsplash skyline of an unrelated city, loaded from a
                third party on every visit — the last of the off-brand imagery
                in ticket 21, and the only remaining external image request on
                the site. Replaced with the branded placeholder until CDD's own
                photography exists; pass `src` to BrandedImage and it takes over.
              */}
              <BrandedImage
                label={t.about.eyebrow}
                title={t.about.whoWeAre}
                caption={t.about.imageCaption}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.ourMission}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t.about.missionText}</p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.ourVision}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.about.whatWeDo}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.about.whatWeDo}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.whatWeDoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.about.stakeholders}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {t.about.whoWeServe}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.whoWeServeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.serveItems.map((stakeholder, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium">{stakeholder}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CDD Pays-Bas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.about.whyEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.about.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.whyItems.map((item, index) => {
              const Icon = [Award, Globe, Target][index] ?? Award;
              return (
                <div key={item.title} className="text-center group">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}