import { Target, Eye, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  const pillars = [
    {
      title: 'Economic Diplomacy',
      description: 'Representing and advocating for business interests across Europe, Morocco, and Africa',
    },
    {
      title: 'Strategic Partnerships',
      description: 'Facilitating high-value connections between corporations, investors, and institutions',
    },
    {
      title: 'Knowledge Exchange',
      description: 'Organizing thought leadership events, roundtables, and executive programs',
    },
    {
      title: 'Project Development',
      description: 'Supporting cross-border initiatives in energy, infrastructure, and innovation',
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
              About Us
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              About CDD Pays-Bas
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              An international platform connecting decision-makers and fostering 
              collaboration between Europe, Morocco, and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                Who We Are
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Who We Are</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">CDD Pays-Bas</span> (Club des Dirigeants – Netherlands) 
                  is an international business and leadership platform that serves as a strategic bridge between European, 
                  Moroccan, and African ecosystems.
                </p>
                <p>
                  We bring together <span className="font-semibold text-gray-900">business leaders, investors, 
                  senior experts, public institutions, and international organizations</span> to foster economic 
                  diplomacy, innovation, and sustainable development.
                </p>
                <p>
                  Our network includes CEOs, entrepreneurs, project developers, policymakers, diaspora leaders, 
                  and knowledge partners committed to creating cross-border impact in sectors such as energy transition, 
                  infrastructure, technology, finance, real estate, and education.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758195004300-7061d5138bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBSb3R0ZXJkYW0lMjBza3lsaW5lfGVufDF8fHx8MTc2OTcyMTM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Netherlands cityscape"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower business leaders and decision-makers by creating strategic connections, 
                facilitating cross-border collaboration, and promoting sustainable and inclusive economic 
                development across Europe, Morocco, and Africa through purposeful dialogue, knowledge sharing, 
                and actionable partnerships.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the premier international platform connecting European, Moroccan, and African business 
                ecosystems, recognized for driving impactful collaborations in strategic sectors such as energy 
                transition, innovation, infrastructure, and finance, while championing leadership, governance, 
                and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              What We Do
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CDD Pays-Bas acts as a convener, facilitator, and strategic partner across four core pillars
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
              Our Stakeholders
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Who We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our platform connects diverse stakeholders committed to cross-border impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Business Leaders & CEOs',
              'Investors & Project Developers',
              'Public Institutions & Policymakers',
              'Entrepreneurs & Innovators',
              'International Organizations',
              'Senior Advisors & Experts',
              'Diaspora Networks',
              'Knowledge & Research Partners',
            ].map((stakeholder, index) => (
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
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Why CDD Pays-Bas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Credibility & Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Led by experienced professionals with deep expertise in international business, 
                governance, and strategic partnerships
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Border Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to a vetted ecosystem spanning Europe, Morocco, and Africa with institutional 
                and private sector connections
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact-Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                Focused on actionable outcomes, sustainable development, and creating measurable 
                value for partners and communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}