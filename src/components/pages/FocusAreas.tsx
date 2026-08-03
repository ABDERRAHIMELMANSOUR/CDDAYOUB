import { FOCUS_AREAS, DELIVERY_METHOD, POSITIONING_LINE } from '../../data/focusAreas';

export function FocusAreas() {
  // Single source of truth — shared with the homepage (see src/data/focusAreas.ts).
  const areas = FOCUS_AREAS;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Strategic Focus Areas
            </h1>
            <p className="text-xl text-gray-300">
              CDD Pays-Bas organises its work through four focus areas, each bringing
              together senior advisors from both markets. {POSITIONING_LINE}
            </p>
            <p className="mt-4 text-base text-gray-400">{DELIVERY_METHOD}</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      {areas.map((area, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <area.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{area.title}</h2>
                    <p className="text-blue-900 font-medium">{area.summary}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6">{area.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h3>
                  <ul className="space-y-2">
                    {area.topics.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/*
                Branded panel replaces the previous stock photography, which was
                off-brand (a concert stage illustrating education, a clinical
                photo illustrating innovation, a reused handshake). CDD's own
                event photography lands here under ticket 21.
              */}
              <div className={`relative h-80 lg:h-96 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-cyan-200 font-semibold">
                      Focus Area {area.number}
                    </p>
                    <p className="mt-3 text-3xl font-bold leading-tight">{area.title}</p>
                  </div>
                  <area.icon className="h-16 w-16 text-white/25" aria-hidden="true" />
                  <p className="text-sm text-blue-100 leading-relaxed">{DELIVERY_METHOD}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Cross-Sector Impact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cross-Sector Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our focus areas are interconnected, creating synergies that amplify impact and 
              drive holistic development across Europe, Morocco, and Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-xl font-semibold mb-3">Integrated Solutions</h3>
              <p className="text-blue-100">
                We bring together expertise across sectors to develop comprehensive solutions 
                that address complex challenges.
              </p>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-xl font-semibold mb-3">Strategic Partnerships</h3>
              <p className="text-blue-100">
                Our multi-sector approach enables unique collaborations between energy, 
                infrastructure, finance, and innovation leaders.
              </p>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-700">
              <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
              <p className="text-blue-100">
                Every focus area contributes to sustainable and inclusive growth aligned 
                with global development goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Collaboration Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a business leader, investor, or institution, CDD Pays-Bas can 
            connect you with strategic partners in your sector.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
