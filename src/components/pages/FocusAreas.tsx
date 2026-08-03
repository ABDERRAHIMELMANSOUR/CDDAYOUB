import { Zap, Building2, Lightbulb, TrendingUp, GraduationCap, Landmark } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FocusAreas() {
  const areas = [
    {
      icon: Zap,
      title: 'Energy Transition',
      tagline: 'Powering a sustainable future',
      description: 'Leading the shift to renewable energy and green technologies across Europe, Morocco, and Africa.',
      focus: [
        'Green hydrogen production and infrastructure',
        'Solar and wind energy projects',
        'Energy storage solutions',
        'Sustainable energy infrastructure',
        'Cross-border energy partnerships',
      ],
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3Njk3MTUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Building2,
      title: 'Infrastructure & Real Estate',
      tagline: 'Building tomorrow\'s foundations',
      description: 'Developing strategic infrastructure and real estate projects that connect economies and create value.',
      focus: [
        'Large-scale infrastructure development',
        'Smart city initiatives',
        'Logistics and connectivity hubs',
        'Commercial real estate investment',
        'Public infrastructure partnerships',
      ],
      image: 'https://images.unsplash.com/photo-1714661116916-8e44405d0c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmZyYXN0cnVjdHVyZSUyMGJyaWRnZXxlbnwxfHx8fDE3Njk3MjEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Technology',
      tagline: 'Driving digital transformation',
      description: 'Fostering innovation ecosystems and supporting technology-driven solutions for sustainable growth.',
      focus: [
        'Digital transformation initiatives',
        'R&D and innovation hubs',
        'Technology transfer programs',
        'Startup and scale-up support',
        'Smart solutions and automation',
      ],
      image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY5NjkzMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: TrendingUp,
      title: 'Economy & Finance',
      tagline: 'Catalyzing economic growth',
      description: 'Facilitating investment flows, economic development, and financial partnerships across borders.',
      focus: [
        'Cross-border investment facilitation',
        'Project finance and funding',
        'Economic development strategies',
        'Trade promotion and export support',
        'Financial services innovation',
      ],
      image: 'https://images.unsplash.com/photo-1764726354539-96228698dc45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2OTcyMTM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: GraduationCap,
      title: 'Education & Capacity Building',
      tagline: 'Investing in human capital',
      description: 'Developing talent and building institutional capacity through education and knowledge transfer.',
      focus: [
        'Executive education programs',
        'Professional development initiatives',
        'Knowledge exchange platforms',
        'Institutional capacity building',
        'Vocational training partnerships',
      ],
      image: 'https://images.unsplash.com/photo-1543283864-0eba98564bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc2OTY2NjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Landmark,
      title: 'Public-Private Partnerships',
      tagline: 'Bridging sectors for impact',
      description: 'Creating strategic alliances between government, business, and civil society to drive sustainable development.',
      focus: [
        'Strategic PPP frameworks',
        'Policy dialogue and advocacy',
        'Institutional partnerships',
        'Development program collaboration',
        'Governance and compliance support',
      ],
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2OTY4ODcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

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
              CDD Pays-Bas drives impact across key sectors shaping the future of 
              cross-border collaboration and sustainable development.
            </p>
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
                    <p className="text-blue-900 font-medium">{area.tagline}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6">{area.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h3>
                  <ul className="space-y-2">
                    {area.focus.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`relative h-80 lg:h-96 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <ImageWithFallback
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
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
