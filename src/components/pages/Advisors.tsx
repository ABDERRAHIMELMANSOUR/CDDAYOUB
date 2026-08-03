import React from 'react';

import photo1 from '../../assets/NouraddineGRIBI.png';
import photo2 from '../../assets/YassineSaddiki.png';
import photo3 from '../../assets/TheoHendriks.png';
import photo4 from '../../assets/IliasSemlali.png';
import photo5 from '../../assets/AzizElKaddouri.png';
import photo6 from '../../assets/AbdelbassetZaghdoud.png';
import photo7 from '../../assets/AhlamGharbaoui.png';
import photo8 from '../../assets/KhalidChougrani.png';
import photo9 from '../../assets/RachidEssehli.png';
import photo10 from '../../assets/AbdelilahBoulal.png';
import photo11 from '../../assets/DieterdeVroomen.png';
import photo12 from '../../assets/AbderrahimElMansour.png';
import photo13 from '../../assets/JanHoogland.png';
import photo14 from '../../assets/PatrickCnubben.png';
import photo15 from '../../assets/FatimadeVos.png';
import photo16 from '../../assets/HajiaZaki.png';
import photo17 from '../../assets/YosufOuhlous.png';
import photo18 from '../../assets/CoenHubers.png';
import photo19 from '../../assets/WillemHazenberg.png';
import photo20 from '../../assets/AyoubSaboumazrag.png';
import photo21 from '../../assets/AsmaGribi.png';
// import photo22 from '../../assets/DrissDrif.png';
import photo23 from '../../assets/FouadElHaji.png';
import photo24 from '../../assets/JoelMyers.png';
import photo25 from '../../assets/VolkanOzturk.png';
import photo26 from '../../assets/NoraKasmi.png';
import photo27 from '../../assets/Ahmed_Rahmouni.png';
import photo28 from '../../assets/Youssef_boulle.png';
import { Linkedin } from 'lucide-react';

interface Advisor {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  Linkedin: string;
}

//alll

export function Advisors() {
  /*
   * Advisory Council only. Statutory board officers (President, Treasurer) are
   * presented on the Leadership page — mixing them into a list of advisors is a
   * governance-presentation error. Grouping the council by focus area, plus the
   * Honorary and Secretariat sections, follows under ticket 16.
   */
  const advisors: Advisor[] = [
    {
      name: 'Yassine Saddiki',
      role: 'Senior Advisor Commercial Strategy & Infrastructure Development',
      bio: 'Experienced in commercial strategy and large-scale infrastructure projects. Supports organizations in structuring growth plans and long-term investments.',
      imageUrl: photo2,
      Linkedin: 'https://www.linkedin.com/in/yassin-saddiki-4a068213/',
    },
    {
      name: 'Theo Hendriks',
      role: 'Honorary Member',
      bio: 'Honorary member recognized for his long-standing contribution and commitment to the CDD network. Provides trusted guidance and historical insight to support the organization\'s mission.',
      imageUrl: photo3,
      Linkedin: 'https://www.linkedin.com/in/theo-hendriks-10653943/',
    },
    {
      name: 'Ilias Semlali',
      role: 'Juridical Partner – Corporate & Liability',
      bio: 'Corporate legal specialist with deep expertise in compliance, contracts, and liability matters. Advises businesses on risk management and regulatory frameworks.',
      imageUrl: photo4,
      Linkedin: 'https://www.linkedin.com/in/ilias-semlali-392174172/',
    },
    {
      name: 'Aziz El Kaddouri',
      role: 'Senior Advisor Statistics',
      bio: 'Data-driven professional specialized in analytics and statistical modeling. Supports evidence-based decision-making through reliable insights and performance metrics.',
      imageUrl: photo5,
      Linkedin: 'https://www.linkedin.com/in/azizelkaddouri/',
    },
    {
      name: 'Abdelbasset Zaghdoud',
      role: 'Senior Advisor Real Estate & Events',
      bio: 'Expert in real estate development and event coordination. Facilitates high-impact projects and strategic venues that support business growth.',
      imageUrl: photo6,
      Linkedin: 'https://www.linkedin.com/in/abdelbassetzaghdoud/',
    },
    {
      name: 'Ahlam Gharbaoui',
      role: 'Senior Advisor International Business Expansion',
      bio: 'Supports companies in expanding into international markets with structured growth strategies. Experienced in partnerships and cross-border operations.',
      imageUrl: photo7,
      Linkedin: 'https://www.linkedin.com/in/ahlam-gharbaoui-759a72a/',
    },
    {
      name: 'Khalid Chougrani',
      role: 'Senior Advisor Innovation & Management',
      bio: 'Innovation and management consultant with experience guiding organizations through transformation. Helps teams adopt efficient processes and modern solutions.',
      imageUrl: photo8,
      Linkedin: 'https://www.linkedin.com/in/khalid-chougrani-ab0ab287/',
    },
    {
      name: 'Rachid Essehli',
      role: 'Senior Advisor Energy Storage',
      bio: 'Specialist in energy storage technologies and systems integration. Advises on sustainable power solutions and grid optimization.',
      imageUrl: photo9,
      Linkedin: 'https://www.linkedin.com/in/rachid-essehli-4aa5a31b7/',
    },
    {
      name: 'Abdelilah Boulal',
      role: 'Senior Advisor Talent, Leadership & Social Impact',
      bio: 'Focused on talent development, leadership coaching, and social impact initiatives. Helps organizations build strong teams and inclusive cultures.',
      imageUrl: photo10,
      Linkedin: 'https://www.linkedin.com/in/abdel-boulal-3566b320/',
    },
    {
      name: 'Dieter de Vroomen',
      role: 'Senior Advisor Public-Private Governance',
      bio: 'Specialist in public-private collaboration and institutional governance. Bridges stakeholders to deliver impactful and structured partnerships.',
      imageUrl: photo11,
      Linkedin: 'https://www.linkedin.com/in/dieterdevroomen/',
    },
    {
      name: 'Abderrahim El Mansour',
      role: 'Digital Marketing Manager',
      bio: 'Digital marketing strategist with expertise in SEO, performance marketing, and online growth. Supports CDD\'s visibility and communication strategy across digital channels.',
      imageUrl: photo12,
      Linkedin: 'https://www.linkedin.com/in/abderrahim-el-mansour-359623232/',
    },
    {
      name: 'Jan Hoogland',
      role: 'Senior Advisor Arabic Language & Culture',
      bio: 'Cultural and linguistic advisor fostering stronger understanding between Dutch and Moroccan communities. Supports intercultural communication and cooperation.',
      imageUrl: photo13,
      Linkedin: 'https://www.linkedin.com/in/jan-hoogland-1020157/',
    },
    {
      name: 'Patrick Cnubben',
      role: 'Senior Advisor Development Hydrogen Valley',
      bio: 'Energy transition expert engaged in hydrogen ecosystem development. Advises on sustainable energy projects and regional innovation clusters.',
      imageUrl: photo14,
      Linkedin: 'https://www.linkedin.com/in/patrick-cnubben-8864b7a/',
    },
    // {
    //   name: 'Fatima de Vos',
    //   role: 'Senior Advisor Strategic Transformation',
    //   bio: 'Strategic transformation leader helping organizations navigate change and modernization. Drives operational excellence and long-term competitiveness.',
    //   imageUrl: photo15,
    //   Linkedin: 'https://www.linkedin.com/in/fatimadevos/',
    // },
    {
      name: 'Hajia Zaki',
      role: 'Senior Advisor Art & Cultural Affairs',
      bio: 'Advocate for arts and cultural initiatives that strengthen community engagement. Supports creative industries and cultural exchange projects.',
      imageUrl: photo16,
      Linkedin: 'https://www.linkedin.com/in/hazia-zaki-8221b0183/',
    },
    {
      name: 'Yosuf Ouhlous',
      role: 'Senior Advisor Agriculture & Horticulture',
      bio: 'Senior advisor with broad experience supporting strategic initiatives and organizational development. Contributes to partnership building and project execution.',
      imageUrl: photo17,
      Linkedin: 'https://www.linkedin.com/in/yosef-ouhlous-bb4730269/',
    },
    // {
    //   name: 'Coen Hubers',
    //   role: 'Secretary',
    //   bio: 'Ensures efficient coordination and administrative governance within CDD Pays-Bas. Oversees communication, documentation, and organizational processes.',
    //   imageUrl: photo18,
    //   Linkedin: 'https://www.linkedin.com/in/coen-hubers-8a635411/',
    // },
    {
      name: 'Willem Hazenberg',
      role: 'Senior consultant at Bilfinger Engineering & Consultancy Western Europe',
      bio: 'Experienced advisor supporting strategic planning and stakeholder engagement. Provides practical insights and structured solutions to complex challenges.',
      imageUrl: photo19,
      Linkedin: 'https://www.linkedin.com/in/willemhazenberg/',
    },
    {
      name: 'Ayoub Saboumazrag',
      role: 'Senior Advisor Digitalisation & AI',
      bio: 'Helps organizations leverage digitalisation, data, and AI to drive practical innovation and cross-border business growth.',
      imageUrl: photo20,
      Linkedin: 'https://www.linkedin.com/in/ayoub-saboumazrag/',
    },
    {
      name: 'Asma Gribi',
      role: 'Senior Advisor Communication',
      bio: 'Strengthens CDD’s communication, visibility, and stakeholder engagement through clear and impactful messaging.',
      imageUrl: photo21,
      Linkedin: 'https://www.linkedin.com/in/asma-gribi-94a4bb13/',
    },
    {
      name: 'Fouad El Haji',
      role: 'Senior Advisor Governance & Public Affairs',
      bio: 'Experienced public sector leader with strong expertise in governance and education. Brings strategic insight and institutional networks to strengthen cross-border impact.',
      imageUrl: photo23,
      Linkedin: 'https://www.linkedin.com/in/fouad-el-haji-b8b319a2/',
    },
    {
      name: 'Joel Myers',
      role: 'Senior Advisor Digital Twins',
      bio: 'Expert in Smart Cities and Digital Twins, driving data-driven urban innovation. Supports sustainable digital transformation and international cooperation.',
      imageUrl: photo24,
      Linkedin: 'https://www.linkedin.com/in/joel-myers-domila/',
    },
    {
      name: 'Volkan Ozturk',
      role: 'Senior Advisor – Renewable Energy & Strategic Investments',
      bio: 'International energy executive with 20+ years of experience and over 500 MW in renewable projects (hydro, geothermal, solar & wind). Strengthening cross-border energy and investment cooperation between the Netherlands, Turkey, and Morocco at CDD Pays-Bas.',
      imageUrl: photo25,
      Linkedin: 'https://www.linkedin.com/in/vozturknl?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    //////////////////////////////////////////////////////////////
    {
      name: 'Nora kasmi',
      role: 'Senior Advisor Social Domain & Labour Market Policy',
      bio: 'Senior expert with 23+ years of experience in social policy and labour market strategy. Bridges public policy, inclusion, and societal impact.',
      imageUrl: photo26,
      Linkedin: 'https://www.linkedin.com/in/nora-kasmi/',
    },
    {
      name: 'Youssef Boulal',
      role: 'Senior Advisor Port Operations & CSD',
      bio: 'Maritime and logistics expert with 20+ years in port operations and shipping. Brings strong operational leadership across international trade and logistics ecosystems.',
      imageUrl: photo28,
      Linkedin: 'https://www.linkedin.com/in/youssef-boulal-6a6929170/',
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
              Our Advisors
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Senior Advisory Board
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our advisory board brings together distinguished experts across key sectors,
              providing strategic guidance and domain expertise to support CDD Pays-Bas' mission
              of fostering cross-border collaboration and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Expert Network
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Meet Our Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Accomplished professionals with decades of experience providing strategic counsel
              and sector-specific insights across Europe, Morocco, and Africa.
            </p>
          </div>

          {/* Advisor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Profile Photo */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                          src={advisor.imageUrl}
                          alt={advisor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center leading-tight">
                    {advisor.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm font-semibold text-blue-600 mb-4 text-center leading-snug min-h-[42px]">
                    {advisor.role}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {advisor.bio}
                  </p>
                  <div className="flex justify-center mt-2">
                    <a
                      className="inline-flex items-center px-4 py-2  bg-white text-gray-900 rounded-xl hover:bg-gray-50 border-2 border-gray-200 transition-all duration-300 font-medium"
                      href={advisor.Linkedin}
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Purpose */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Advisory Role
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              How Our Advisors Contribute
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our senior advisors play a crucial role in shaping CDD Pays-Bas' strategic direction and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Counsel',
                description: 'Providing high-level guidance on organizational strategy, partnerships, and growth opportunities',
              },
              {
                title: 'Sector Expertise',
                description: 'Offering deep domain knowledge in energy, finance, infrastructure, innovation, and policy',
              },
              {
                title: 'Network Access',
                description: 'Connecting CDD Pays-Bas with key stakeholders, investors, and decision-makers',
              },
              {
                title: 'Project Support',
                description: 'Contributing to the development and execution of strategic initiatives and projects',
              },
              {
                title: 'Thought Leadership',
                description: 'Participating in events, roundtables, and publications to elevate CDD Pays-Bas\' profile',
              },
              {
                title: 'Quality Assurance',
                description: 'Ensuring excellence and credibility in all activities and partnerships',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Interested in Joining Our Advisory Board?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            CDD Pays-Bas welcomes senior experts and thought leaders who share our commitment
            to cross-border collaboration, sustainable development, and impactful partnerships.
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
