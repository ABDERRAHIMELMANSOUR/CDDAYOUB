import React from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { ArrowRight, Users } from 'lucide-react';
import { BrandedImage } from '../BrandedImage';
import { AdvisorAvatar } from '../AdvisorAvatar';
import { HeroSlider } from '../HeroSlider';
import { ParticleNetwork } from '../ParticleNetwork';
import { NewsCarousel } from '../NewsCarousel';
import { COMMISSION_DOMAINS } from '../../data/commissionDomains';
import { ADVISORS } from '../../data/advisors';
import { useLocale, useTranslation } from '../../i18n/LocaleProvider';
import { pick } from '../../i18n/localised';
import { trackEvent, GOALS } from '../../lib/analytics';

export function Home() {
  const t = useTranslation();
  const { locale } = useLocale();
  // Shared with the Commissions page so the two can never disagree again.
  const commissions = COMMISSION_DOMAINS;

  const values = t.home.values;

  /*
   * Advisor spotlight. Rotates by day-of-year rather than at random, so the
   * card is stable within a visit (no flicker between renders) but different
   * tomorrow. Board officers are not in ADVISORS, so nobody is double-listed.
   */
  const dayOfYear = Math.floor(Date.now() / 86_400_000);
  const spotlight = [0, 1, 2].map((i) => ADVISORS[(dayOfYear + i) % ADVISORS.length]);

  return (
    <div>
      <HeroSlider />

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
                src="/media/home-impact-bg.jpg"
                label="CDD Pays-Bas"
                title={t.home.imageCaption}

                className="relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisor spotlight — the cheapest credibility content available. */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.home.spotlightEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {t.home.spotlightTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlight.map((advisor) => (
              <Link
                key={advisor.name}
                to="/advisors"
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <AdvisorAvatar name={advisor.name} photo={advisor.photo} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{advisor.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-700 leading-snug">
                  {pick(advisor.role, locale)}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/advisors"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
            >
              {t.home.spotlightAll}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/*
        News & media carousel. Replaces the static three-card insights grid:
        same source, plus LinkedIn posts, and it scales as CDD publishes more
        without pushing the rest of the page down.
      */}
      <NewsCarousel />

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

      {/*
        Membership CTA band. Full-width and contrasting, per E1. Replaces a
        generic "get in touch" block that sent the page's final action to a
        contact form rather than to the thing the site exists to sell.
      */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <ParticleNetwork variant="light" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {t.home.joinBandTitle}
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">{t.home.joinBandText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/membership/apply"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-800 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg group"
            >
              {t.home.joinBandPrimary}
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center px-10 py-5 bg-blue-800/40 text-white border-2 border-white/40 rounded-2xl hover:bg-blue-800/60 transition-all duration-300 font-semibold text-lg"
            >
              {t.home.joinBandSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}