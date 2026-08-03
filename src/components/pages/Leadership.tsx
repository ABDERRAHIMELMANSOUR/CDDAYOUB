import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Award, Globe2, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import presidentPhoto from '../../assets/NouraddineGRIBI.png';
import founderPhoto from '../../assets/DrissDrif.png';
import treasurerPhoto from '../../assets/Ahmed_Rahmouni.png';

export function Leadership() {
  /*
   * The statutory board. Ahmed Rahmouni (Treasurer) is a board officer and was
   * previously presented in the Advisors grid, which misrepresents governance.
   * The remaining seats are confirmed with the treasurer before publishing
   * (ticket 10); only verified officers are listed here.
   */
  const boardMembers = [
    {
      name: 'Nouraddine Gribi',
      role: 'President',
      bio: 'Leads CDD Pays-Bas with a strategic vision focused on strengthening economic bridges between Morocco and the Netherlands. Drives partnerships, governance, and sustainable impact initiatives.',
      photo: presidentPhoto,
      linkedin: 'https://www.linkedin.com/in/nouraddine-gribi-4a639435/',
    },
    {
      name: 'Ahmed Rahmouni',
      role: 'Treasurer',
      bio: 'International business professional with strong financial and commercial expertise. Supports CDD Pays-Bas with strategic financial oversight and cross-border business insight.',
      photo: treasurerPhoto,
      linkedin: 'https://www.linkedin.com/in/ahmed-rahmouni-prfile/',
    },
  ];

  const leadershipHighlights = [
    {
      icon: Award,
      title: 'Leadership & Governance',
      description: 'Driving strategic vision and organizational excellence',
    },
    {
      icon: Globe2,
      title: 'Cross-Border Cooperation',
      description: 'Netherlands ↔ Morocco partnerships and collaboration',
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurship & Ecosystem Building',
      description: 'Supporting entrepreneurs and fostering innovation',
    },
    {
      icon: Users,
      title: 'Institutional Credibility',
      description: 'Building trusted international partnerships',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Leadership
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Leadership & Governance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team brings together decades of expertise in international business, 
              economic diplomacy, and strategic leadership across Europe, Morocco, and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* President Section - Featured */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              President
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Mr. Nouraddine Gribi</h2>
            <p className="text-xl text-blue-600 font-semibold">President – CDD Pays-Bas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={presidentPhoto}
                    alt="Mr. Nouraddine Gribi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Nouraddine Gribi is the President of CDD Pays-Bas and a strategic leader dedicated to strengthening economic and institutional ties between Morocco and the Netherlands. With extensive experience in business development, governance, and international partnerships, he drives high-impact collaborations between public and private stakeholders.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  He actively promotes entrepreneurship, inclusion, and sustainable growth within the Moroccan-Dutch ecosystem. Through his leadership, CDD Pays-Bas continues to build bridges, create opportunities, and deliver measurable value for its members and partners.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:president@cddpaysbas.org"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </a>
                <a
                  href="https://www.linkedin.com/in/nouraddine-gribi-4a639435/"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Leadership Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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


      {/* Founder Section - Driss DRIF */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Founder
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Mr. Driss DRIF</h2>
            <p className="text-xl text-blue-600 font-semibold">Founder & President – CDD</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <ImageWithFallback
                    src={founderPhoto}
                    alt="Mr. Driss DRIF"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Driss DRIF is the Founder and President of CDD (Club des Dirigeants), an organization established 
                  with the vision of connecting leaders, fostering strategic dialogue, and building strong bridges 
                  between Morocco and international ecosystems.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Under his leadership, CDD has become a growing network of decision-makers and advisors across sectors, 
                  driving impactful collaborations between public and private stakeholders. His initiative laid the 
                  foundation for CDD Pays-Bas, which continues this legacy in the Netherlands.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/driss-drif-9b17a634/"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Unity - Group Photo */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Leadership Continuity
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              A Shared Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              United by a commitment to connecting leaders, fostering collaboration, and building 
              bridges between the Netherlands, Morocco, and Africa.
            </p>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1704652329540-851160c7741f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnMlMjBtZWV0aW5nJTIwcGFydG5lcnNoaXAlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTM1MzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CDD Leadership - Nouraddine Gribi and Driss DRIF"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-4xl mx-auto text-center text-white">
                <p className="text-2xl font-semibold mb-4">
                  From Vision to Reality
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Driss DRIF founded CDD with a vision of connecting leaders and fostering strategic dialogue. 
                  Nouraddine Gribi continues this legacy as President of CDD Pays-Bas, strengthening ties between 
                  the Netherlands, Morocco, and Africa through impactful partnerships and sustainable development.
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
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtZWV0aW5nJTIwYm9hcmRyb29tfGVufDF8fHx8MTc2OTcyMTM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Executive leadership meeting"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Experienced Leadership</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              CDD Pays-Bas is guided by a distinguished board and advisory team with proven track records 
              in international business, public policy, and strategic development.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Board */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Governance
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              The Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CDD Pays-Bas is governed by its statutory board, distinct from the Advisory
              Council of senior experts who advise the organisation.
            </p>
          </div>

          {/* Statutory facts — the details an institutional partner checks first. */}
          <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Remuneration</h3>
              <p className="text-gray-700 leading-relaxed">
                Board members serve unpaid. Expenses incurred on behalf of the organisation are
                reimbursed against receipt.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Statutory details</h3>
              <p className="text-gray-700 leading-relaxed">
                Legal form, KvK and RSIN, together with our statutes, policy plan, annual report and
                financial summary, are published on our{' '}
                <Link
                  to="/transparency"
                  className="text-blue-700 underline hover:text-blue-900 font-medium"
                >
                  transparency page
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
              Governance
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Governance Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              CDD Pays-Bas operates with transparency, accountability, and strategic focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Open communication and clear decision-making processes',
              },
              {
                title: 'Accountability',
                description: 'Responsible stewardship and measurable outcomes',
              },
              {
                title: 'Inclusion',
                description: 'Diverse perspectives and equitable representation',
              },
              {
                title: 'Excellence',
                description: 'High standards in all our activities and partnerships',
              },
            ].map((principle, index) => (
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
            Interested in Contributing?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            CDD Pays-Bas welcomes senior experts and advisors who share our commitment to 
            cross-border collaboration and sustainable development.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}