import { Briefcase, Rocket } from 'lucide-react';

export function Projects() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Projects
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Strategic Projects & Initiatives
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              CDD Pays-Bas develops high-impact projects that connect stakeholders and create 
              sustainable value across Europe, Morocco, and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Rocket className="h-14 w-14 text-white" />
                </div>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-8 tracking-wide uppercase">
              Coming Soon
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Strategic Projects in Development
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Our strategic projects will be announced soon. Stay tuned for upcoming initiatives 
              and partnerships that will drive cross-border collaboration, sustainable development, 
              and economic growth.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strategic Focus</h3>
                <p className="text-sm text-gray-600">
                  High-impact initiatives aligned with key sectors and regional priorities
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Stakeholder</h3>
                <p className="text-sm text-gray-600">
                  Bringing together public, private, and institutional partners
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Measurable Impact</h3>
                <p className="text-sm text-gray-600">
                  Clear objectives and outcomes that create lasting value
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-600 mb-6">
                Interested in collaborating on future projects?
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Preview */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Our Focus
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Sectors & Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our upcoming projects will address key sectors including energy transition, infrastructure, 
            innovation, real estate, finance, and economic development.
          </p>
          <a
            href="/focus-areas"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium"
          >
            Explore Focus Areas
          </a>
        </div>
      </section>
    </div>
  );
}
