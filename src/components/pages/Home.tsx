import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Target, TrendingUp, Lightbulb, HandshakeIcon, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FOCUS_AREAS } from '../../data/focusAreas';

export function Home() {
  // Shared with the Focus Areas page so the two can never disagree again.
  const focusAreas = FOCUS_AREAS;

  const values = [
    { title: 'Leadership', description: 'Empowering decision-makers to drive meaningful change' },
    { title: 'Sustainability', description: 'Promoting inclusive and sustainable economic growth' },
    { title: 'Collaboration', description: 'Building bridges between sectors and geographies' },
    { title: 'Impact', description: 'Creating measurable value for communities and economies' },
  ];

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
              <span className="text-sm font-medium text-gray-700">International Business Leadership Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Connecting Leaders,<br />
              <span className="gradient-text">Building the Future</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
              CDD Pays-Bas is an international platform for business leaders, investors, 
              and decision-makers driving cross-border collaboration and sustainable development.
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
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                Upcoming Events
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
              Our Vision
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              A Strategic Bridge Between Two Markets
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To serve as a strategic bridge connecting European, Moroccan, and African ecosystems,
              fostering economic diplomacy, innovation, and sustainable growth through purposeful 
              collaboration between business leaders, public institutions, and international partners.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              What We Do
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Strategic Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We drive impact across key sectors shaping the future of international business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <Link
                key={area.slug}
                to="/focus-areas"
                className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <area.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.summary}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/focus-areas"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
            >
              Explore All Focus Areas
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
                Our Impact
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Driving Cross-Border Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CDD Pays-Bas brings together business leaders, investors, public institutions, 
                and international experts to create meaningful partnerships that transcend borders.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 leading-relaxed">Economic diplomacy and strategic representation</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 leading-relaxed">High-level business delegations and networking</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 leading-relaxed">Knowledge sharing and executive education</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2OTY4ODcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="International business collaboration"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
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
              Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Principles that guide our mission and shape our impact
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
            Join Our Network
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Connect with decision-makers, explore strategic partnerships, and be part of 
            initiatives shaping the future of cross-border collaboration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}