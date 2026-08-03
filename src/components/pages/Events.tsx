import React from 'react';
import { Calendar, MapPin, Heart, Users, Star, MessageCircle } from 'lucide-react';

export function Events() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Events
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Events & Gatherings
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              CDD Pays-Bas organizes meaningful gatherings that strengthen connections, celebrate shared values, 
              and build a vibrant community of leaders and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Upcoming
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Next Gathering
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our next event is being finalised and will be announced here shortly.
              Members and subscribers are notified first.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-medium"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/*
        Past Events archive.

        The Iftar of 28 February 2026 was still labelled "Upcoming Event" months
        after it took place, alongside "RSVP information will be shared soon" —
        which made an active organisation look dormant. Presented as a completed
        gathering with a recap, the same content becomes proof that CDD convenes
        people. Event photography and a fuller recap follow under ticket 21.
      */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Past Events
            </div>
          </div>
          {/* Event Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-8 shadow-xl">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Held 28 February 2026
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              CDD Pays-Bas – First Collective Iftar
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg text-gray-700 mb-4">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-amber-600" />
                <span className="font-semibold">February 28th, 2026</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-amber-600" />
                <span className="font-semibold">Rotterdam</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              The first collective gathering of the CDD Pays-Bas network
            </p>
          </div>

          {/* Event Card */}
          <div className="bg-white rounded-3xl border border-amber-100 shadow-2xl overflow-hidden mb-16">
            <div className="p-12 lg:p-16">
              {/* Introduction */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mr-4"></span>
                  A Symbolic Moment
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This first collective Iftar marked a symbolic moment for CDD Pays-Bas — a warm and informal
                  gathering that brought the network together and strengthened the human connections behind it.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond professional roles, the evening centred on shared stories, cultural understanding,
                  and community building during the holy month of Ramadan.
                </p>
              </div>

              {/* Programme */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mr-4"></span>
                  The Programme
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Informal & Warm Atmosphere</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          A relaxed, welcoming environment where everyone can be themselves
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Shared Meal (Iftar)</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Breaking fast together in the spirit of unity and tradition
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Light Introduction Round</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Getting to know each other beyond titles and roles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Reflection on CDD's Role</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Understanding our mission as a bridge between Netherlands and Morocco
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Guided by Our Values</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-900">Neutrality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="font-bold text-gray-900">Respect</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-900">Openness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <p className="font-bold text-gray-900">Connection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of the Next One
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              This gathering set the tone for how CDD Pays-Bas convenes its network.
              Let us know you would like an invitation to the next event.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 font-medium text-lg"
            >
              Request an Invitation
            </a>
          </div>
        </div>
      </section>

      {/* Why Attend CDD Events */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Our Approach
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Why Attend CDD Events?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our gatherings create space for authentic connection and meaningful dialogue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Human Connection</h3>
              <p className="text-gray-400 leading-relaxed">
                Building genuine relationships beyond business cards and titles in a warm, welcoming atmosphere
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Building</h3>
              <p className="text-gray-400 leading-relaxed">
                Strengthening our network through shared experiences, cultural understanding, and mutual respect
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cultural Bridge</h3>
              <p className="text-gray-400 leading-relaxed">
                Celebrating diversity and creating bridges between Dutch and Moroccan communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Formats */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Event Types
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              What We Organize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CDD Pays-Bas hosts diverse formats designed to foster connection, collaboration, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Gatherings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Warm events that strengthen bonds and celebrate shared values
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Delegations</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-level missions connecting decision-makers across borders
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Summits & Forums</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic gatherings addressing key sectors and opportunities
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Roundtables</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Focused discussions on specific topics with senior leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Our Network
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Want to receive invitations to upcoming events and be part of our growing community? 
            Get in touch with us.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
