import React from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { ArrowRight, Globe, Users, Target, TrendingUp, Lightbulb, HandshakeIcon, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BrandedImage } from '../BrandedImage';
import { COMMISSION_DOMAINS } from '../../data/commissionDomains';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';

export function Home() {
  const t = useTranslation();
  const { locale } = useLocale();
  // Shared with the Commissions page so the two can never disagree again.
  const commissions = COMMISSION_DOMAINS;

  const values = t.home.values;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-blue-50/30"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{t.home.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              {t.home.heroLine1}
              <br />
              <span className="gradient-text">{t.home.heroLine2}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
              {t.home.heroText}
            </p>
            
            {/*
              One primary CTA, one secondary. Three equal-weight buttons meant
              none of them won; the Smart Platform link stays in the header as a
              member entry point rather than competing with the hero's action.
            */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-medium group"
              >
                {t.home.getInvolved}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                {t.home.upcomingEvents}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.home.visionEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              {t.home.visionTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.home.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* Commissions */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.home.whatWeDo}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.home.focusTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.focusText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissions.map((area) => (
              <Link
                key={area.slug}
                to="/commissions"
                className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <area.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pick(area.title, locale)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pick(area.summary, locale)}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/commissions"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
            >
              {t.home.exploreAll}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Image Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                {t.home.impactEyebrow}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                {t.home.impactTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.home.impactText}
              </p>
              <ul className="space-y-5">
                {t.home.impactPoints.map((point) => (
                  <li key={point} className="flex items-start group">
                    <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              {/* Was a generic stock handshake, reused identically on Partnerships. */}
              <BrandedImage
                label="CDD Pays-Bas"
                title={t.home.imageCaption}

                className="relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.home.valuesEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {t.home.valuesTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.home.valuesText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.home.ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {t.home.ctaText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg group"
          >
            {t.common.getInTouch}
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}