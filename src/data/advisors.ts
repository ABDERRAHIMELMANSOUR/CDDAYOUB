/**
 * The Advisory Council — the single source of advisor records.
 *
 * Lifted out of the page component so the same records drive both the Advisory
 * Council page and the commission pages. Ticket 16 calls for the `group` field
 * to be defined once because tickets 19-20 (events and insights tagging) reuse
 * the same taxonomy; `AdvisorGroup` below is that taxonomy.
 *
 * Grouping follows Part D3 of the blueprint, which mapped the existing advisors
 * onto the four commissions. Board officers are NOT here — they live on the
 * Leadership page.
 */

import photo1 from '../assets/YassineSaddiki.png';
import photo2 from '../assets/TheoHendriks.png';
import photo3 from '../assets/IliasSemlali.png';
import photo4 from '../assets/AzizElKaddouri.png';
import photo5 from '../assets/AbdelbassetZaghdoud.png';
import photo6 from '../assets/AhlamGharbaoui.png';
import photo7 from '../assets/KhalidChougrani.png';
import photo8 from '../assets/RachidEssehli.png';
import photo9 from '../assets/AbdelilahBoulal.png';
import photo10 from '../assets/DieterdeVroomen.png';
import photo11 from '../assets/AbderrahimElMansour.png';
import photo12 from '../assets/JanHoogland.png';
import photo13 from '../assets/PatrickCnubben.png';
import photo14 from '../assets/HajiaZaki.png';
import photo15 from '../assets/YosufOuhlous.png';
import photo16 from '../assets/WillemHazenberg.png';
import photo17 from '../assets/AyoubSaboumazrag.png';
import photo18 from '../assets/AsmaGribi.png';
import photo19 from '../assets/FouadElHaji.png';
import photo20 from '../assets/JoelMyers.png';
import photo21 from '../assets/VolkanOzturk.png';
import photo22 from '../assets/NoraKasmi.png';
import photo23 from '../assets/Youssef_boulle.png';

/** Commission slugs, plus the two groups that are not commissions. */
export type AdvisorGroup =
  | 'energy-water-transition'
  | 'digital-ai-infrastructure'
  | 'industry-trade-logistics'
  | 'talent-knowledge-society'
  | 'governance-public-affairs'
  | 'secretariat'
  | 'honorary';

export interface Advisor {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
  group: AdvisorGroup;
}

/** Labels for the non-commission groups (commissions get theirs from commissions.ts). */
export const GROUP_LABELS: Record<AdvisorGroup, string> = {
  'energy-water-transition': 'Energy & Water Transition',
  'digital-ai-infrastructure': 'Digital, AI & Infrastructure',
  'industry-trade-logistics': 'Industry, Trade & Logistics',
  'talent-knowledge-society': 'Talent, Knowledge & Society',
  'governance-public-affairs': 'Governance, Trust & Public Affairs',
  secretariat: 'Operations & Secretariat',
  honorary: 'Honorary Members',
};

export const GROUP_DESCRIPTIONS: Partial<Record<AdvisorGroup, string>> = {
  'governance-public-affairs':
    'A cross-cutting group rather than a commission: governance, legal, statistics and public affairs support the work of all four commissions.',
  secretariat:
    'Operational roles supporting communications and day-to-day running of the organisation — distinct from the advisory function.',
  honorary: 'Recognised by the board for their contribution to CDD Pays-Bas.',
};

export const ADVISORS: Advisor[] = [
  {
    name: 'Yassine Saddiki',
    role: 'Senior Advisor Commercial Strategy & Infrastructure Development',
    bio: 'Experienced in commercial strategy and large-scale infrastructure projects. Supports organizations in structuring growth plans and long-term investments.',
    photo: photo1,
    linkedin: 'https://www.linkedin.com/in/yassin-saddiki-4a068213/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Theo Hendriks',
    role: 'Honorary Member',
    bio: 'Honorary member recognized for his long-standing contribution and commitment to the CDD network. Provides trusted guidance and historical insight to support the organization\\\'s mission.',
    photo: photo2,
    linkedin: 'https://www.linkedin.com/in/theo-hendriks-10653943/',
    group: 'honorary',
  },
  {
    name: 'Ilias Semlali',
    role: 'Juridical Partner – Corporate & Liability',
    bio: 'Corporate legal specialist with deep expertise in compliance, contracts, and liability matters. Advises businesses on risk management and regulatory frameworks.',
    photo: photo3,
    linkedin: 'https://www.linkedin.com/in/ilias-semlali-392174172/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Aziz El Kaddouri',
    role: 'Senior Advisor Statistics',
    bio: 'Data-driven professional specialized in analytics and statistical modeling. Supports evidence-based decision-making through reliable insights and performance metrics.',
    photo: photo4,
    linkedin: 'https://www.linkedin.com/in/azizelkaddouri/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Abdelbasset Zaghdoud',
    role: 'Senior Advisor Real Estate & Events',
    bio: 'Expert in real estate development and event coordination. Facilitates high-impact projects and strategic venues that support business growth.',
    photo: photo5,
    linkedin: 'https://www.linkedin.com/in/abdelbassetzaghdoud/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Ahlam Gharbaoui',
    role: 'Senior Advisor International Business Expansion',
    bio: 'Supports companies in expanding into international markets with structured growth strategies. Experienced in partnerships and cross-border operations.',
    photo: photo6,
    linkedin: 'https://www.linkedin.com/in/ahlam-gharbaoui-759a72a/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Khalid Chougrani',
    role: 'Senior Advisor Innovation & Management',
    bio: 'Innovation and management consultant with experience guiding organizations through transformation. Helps teams adopt efficient processes and modern solutions.',
    photo: photo7,
    linkedin: 'https://www.linkedin.com/in/khalid-chougrani-ab0ab287/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Rachid Essehli',
    role: 'Senior Advisor Energy Storage',
    bio: 'Specialist in energy storage technologies and systems integration. Advises on sustainable power solutions and grid optimization.',
    photo: photo8,
    linkedin: 'https://www.linkedin.com/in/rachid-essehli-4aa5a31b7/',
    group: 'energy-water-transition',
  },
  {
    name: 'Abdelilah Boulal',
    role: 'Senior Advisor Talent, Leadership & Social Impact',
    bio: 'Focused on talent development, leadership coaching, and social impact initiatives. Helps organizations build strong teams and inclusive cultures.',
    photo: photo9,
    linkedin: 'https://www.linkedin.com/in/abdel-boulal-3566b320/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Dieter de Vroomen',
    role: 'Senior Advisor Public-Private Governance',
    bio: 'Specialist in public-private collaboration and institutional governance. Bridges stakeholders to deliver impactful and structured partnerships.',
    photo: photo10,
    linkedin: 'https://www.linkedin.com/in/dieterdevroomen/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Abderrahim El Mansour',
    role: 'Digital Marketing Manager',
    bio: 'Digital marketing strategist with expertise in SEO, performance marketing, and online growth. Supports CDD\\\'s visibility and communication strategy across digital channels.',
    photo: photo11,
    linkedin: 'https://www.linkedin.com/in/abderrahim-el-mansour-359623232/',
    group: 'secretariat',
  },
  {
    name: 'Jan Hoogland',
    role: 'Senior Advisor Arabic Language & Culture',
    bio: 'Cultural and linguistic advisor fostering stronger understanding between Dutch and Moroccan communities. Supports intercultural communication and cooperation.',
    photo: photo12,
    linkedin: 'https://www.linkedin.com/in/jan-hoogland-1020157/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Patrick Cnubben',
    role: 'Senior Advisor Development Hydrogen Valley',
    bio: 'Energy transition expert engaged in hydrogen ecosystem development. Advises on sustainable energy projects and regional innovation clusters.',
    photo: photo13,
    linkedin: 'https://www.linkedin.com/in/patrick-cnubben-8864b7a/',
    group: 'energy-water-transition',
  },
  {
    name: 'Hajia Zaki',
    role: 'Senior Advisor Art & Cultural Affairs',
    bio: 'Advocate for arts and cultural initiatives that strengthen community engagement. Supports creative industries and cultural exchange projects.',
    photo: photo14,
    linkedin: 'https://www.linkedin.com/in/hazia-zaki-8221b0183/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Yosuf Ouhlous',
    role: 'Senior Advisor Agriculture & Horticulture',
    bio: 'Senior advisor with broad experience supporting strategic initiatives and organizational development. Contributes to partnership building and project execution.',
    photo: photo15,
    linkedin: 'https://www.linkedin.com/in/yosef-ouhlous-bb4730269/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Willem Hazenberg',
    role: 'Senior Advisor Engineering & Consultancy',
    bio: 'Experienced advisor supporting strategic planning and stakeholder engagement. Provides practical insights and structured solutions to complex challenges.',
    photo: photo16,
    linkedin: 'https://www.linkedin.com/in/willemhazenberg/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Ayoub Saboumazrag',
    role: 'Senior Advisor Digitalisation & AI',
    bio: 'Helps organizations leverage digitalisation, data, and AI to drive practical innovation and cross-border business growth.',
    photo: photo17,
    linkedin: 'https://www.linkedin.com/in/ayoub-saboumazrag/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Asma Gribi',
    role: 'Senior Advisor Communication',
    bio: 'Strengthens CDD’s communication, visibility, and stakeholder engagement through clear and impactful messaging.',
    photo: photo18,
    linkedin: 'https://www.linkedin.com/in/asma-gribi-94a4bb13/',
    group: 'secretariat',
  },
  {
    name: 'Fouad El Haji',
    role: 'Senior Advisor Governance & Public Affairs',
    bio: 'Experienced public sector leader with strong expertise in governance and education. Brings strategic insight and institutional networks to strengthen cross-border impact.',
    photo: photo19,
    linkedin: 'https://www.linkedin.com/in/fouad-el-haji-b8b319a2/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Joel Myers',
    role: 'Senior Advisor Digital Twins',
    bio: 'Expert in Smart Cities and Digital Twins, driving data-driven urban innovation. Supports sustainable digital transformation and international cooperation.',
    photo: photo20,
    linkedin: 'https://www.linkedin.com/in/joel-myers-domila/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Volkan Ozturk',
    role: 'Senior Advisor – Renewable Energy & Strategic Investments',
    bio: 'International energy executive with 20+ years of experience and over 500 MW in renewable projects (hydro, geothermal, solar & wind). Strengthening cross-border energy and investment cooperation between the Netherlands, Turkey, and Morocco at CDD Pays-Bas.',
    photo: photo21,
    linkedin: 'https://www.linkedin.com/in/vozturknl?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    group: 'energy-water-transition',
  },
  {
    name: 'Nora Kasmi',
    role: 'Senior Advisor Social Domain & Labour Market Policy',
    bio: 'Senior expert with 23+ years of experience in social policy and labour market strategy. Bridges public policy, inclusion, and societal impact.',
    photo: photo22,
    linkedin: 'https://www.linkedin.com/in/nora-kasmi/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Youssef Boulal',
    role: 'Senior Advisor Port Operations & CSD',
    bio: 'Maritime and logistics expert with 20+ years in port operations and shipping. Brings strong operational leadership across international trade and logistics ecosystems.',
    photo: photo23,
    linkedin: 'https://www.linkedin.com/in/youssef-boulal-6a6929170/',
    group: 'industry-trade-logistics',
  },
];

/** Advisors belonging to a given group, in listed order. */
export function advisorsInGroup(group: AdvisorGroup): Advisor[] {
  return ADVISORS.filter((a) => a.group === group);
}
