import React from 'react';
import { LocaleLink as Link } from '../../i18n/LocaleLink';
import { useTranslation } from '../../i18n/LocaleProvider';
import { Linkedin, Mail, Award, Globe2, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BrandedImage } from '../BrandedImage';
import presidentPhoto from '../../assets/NouraddineGRIBI.png';
import founderPhoto from '../../assets/DrissDrif.png';
import treasurerPhoto from '../../assets/Ahmed_Rahmouni.png';
import { PageHero } from '../PageHero';

export function Leadership() {
  /*
   * The statutory board. Ahmed Rahmouni (Treasurer) is a board officer and was
   * previously presented in the Advisors grid, which misrepresents governance.
   * The remaining seats are confirmed with the treasurer before publishing
   * (ticket 10); only verified officers are listed here.
   */
  const t = useTranslation();

  const boardMembers = [
    {
      name: 'Nouraddine Gribi',
      photo: presidentPhoto,
      linkedin: 'https://www.linkedin.com/in/nouraddine-gribi-4a639435/',
    },
    {
      name: 'Ahmed Rahmouni',
      photo: treasurerPhoto,
      linkedin: 'https://www.linkedin.com/in/ahmed-rahmouni-prfile/',
    },
  ].map((member) => ({ ...member, ...t.leadership.boardBios[member.name] }));

  const HIGHLIGHT_ICONS = [Award, Globe2, TrendingUp, Users];
  const leadershipHighlights = t.leadership.highlights.map((highlight, i) => ({
    icon: HIGHLIGHT_ICONS[i] ?? Award,
    ...highlight,
  }));

  return (
    <div>
      <PageHero eyebrow={t.leadership.eyebrow} title={t.leadership.title}>
        {t.leadership.subtitle}
      </PageHero>

      {/*
        Founder and President side by side.
        Driss DRIF (who founded CDD) sits left and Nouraddine Gribi (who leads
        CDD Pays-Bas) right, so the reading order runs origin -> present. They
        were previously two stacked full-width sections, which buried the
        relationship between them under a screen of scrolling.
      */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <LeaderCard
              eyebrow={t.leadership.founder}
              name="Mr. Driss DRIF"
              role={t.leadership.founderRole}
              photo={founderPhoto}
              paragraphs={[t.leadership.founderBio1, t.leadership.founderBio2]}
              linkedin="https://www.linkedin.com/in/driss-drif-9b17a634/"
            />
            <LeaderCard
              eyebrow={t.leadership.president}
              name="Mr. Nouraddine Gribi"
              role={t.leadership.presidentRole}
              photo={presidentPhoto}
              paragraphs={[t.leadership.presidentBio1, t.leadership.presidentBio2]}
              linkedin="https://www.linkedin.com/in/nouraddine-gribi-4a639435/"
              email="president@cddpaysbas.org"
              contactLabel={t.leadership.contactLabel}
            />
          </div>

          {/* Leadership Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {leadershipHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Unity - Group Photo */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.leadership.continuityEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.leadership.continuityTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.leadership.continuitySubtitle}
            </p>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            {/*
              This was a stock photograph of unrelated people captioned "CDD
              Leadership - Nouraddine Gribi and Driss DRIF". Presenting stock
              models as two named, real individuals misrepresents them, so it is
              removed rather than merely swapped. A genuine photograph of the two
              belongs here.
            */}
            <BrandedImage
              label={t.leadership.fromVisionTitle}
              title={t.leadership.visionCaption}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-4xl mx-auto text-center text-white">
                <p className="text-2xl font-semibold mb-4">{t.leadership.fromVisionTitle}</p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t.leadership.fromVisionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Image */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"></div>
            {/* Was a generic stock boardroom photo. */}
            <BrandedImage
              label={t.leadership.teamEyebrow}
              title={t.leadership.teamCaption}
              className="relative"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.leadership.teamEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              {t.leadership.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">{t.leadership.teamText}</p>
          </div>
        </div>
      </section>

      {/* Statutory Board */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.leadership.boardEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.leadership.boardTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.leadership.boardIntro}
            </p>
          </div>

          {/* Statutory facts — the details an institutional partner checks first. */}
          <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{t.leadership.remuneration}</h3>
              <p className="text-gray-700 leading-relaxed">{t.leadership.remunerationText}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {t.leadership.statutoryDetails}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.leadership.statutoryText}{' '}
                <Link
                  to="/transparency"
                  className="text-blue-700 underline hover:text-blue-900 font-medium"
                >
                  {t.leadership.transparencyLink}
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.leadership.governanceEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {t.leadership.governanceTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.leadership.governanceText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.leadership.principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-blue-400">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t.leadership.ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">{t.leadership.ctaText}</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg"
          >
            {t.leadership.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * One leader: portrait, role and biography.
 *
 * `items-stretch` on the parent grid plus `h-full` here keeps the two cards the
 * same height when the biographies differ in length, and the links are pinned
 * to the bottom with `mt-auto` so they line up across the pair.
 */
function LeaderCard({
  eyebrow,
  name,
  role,
  photo,
  paragraphs,
  linkedin,
  email,
  contactLabel,
}: {
  eyebrow: string;
  name: string;
  role: string;
  photo: string;
  paragraphs: string[];
  linkedin: string;
  email?: string;
  contactLabel?: string;
}) {
  return (
    <article className="flex flex-col h-full bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-lg">
      <div className="text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          {eyebrow}
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="relative flex justify-center">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <ImageWithFallback src={photo} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{name}</h2>
        <p className="mt-2 text-lg text-blue-600 font-semibold">{role}</p>
      </div>

      <div className="mt-8 space-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-auto pt-8 flex flex-wrap gap-3">
        {email && contactLabel && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
          >
            <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
            {contactLabel}
          </a>
        )}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium"
        >
          <Linkedin className="h-5 w-5 mr-2" aria-hidden="true" />
          <span>LinkedIn</span>
          <span className="sr-only"> — {name}</span>
        </a>
      </div>
    </article>
  );
}
