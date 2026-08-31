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
import type { Localised } from '../i18n/localised';

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
  /**
   * Role and biography.
   *
   * NL/FR renderings are working translations produced in-house so the site is
   * not half-English for Dutch and French visitors. They describe named,
   * real professionals, so the board should have each advisor confirm their
   * own wording before treating it as final.
   */
  role: Localised<string>;
  bio: Localised<string>;
  /** Portrait. Null until the advisor supplies one — the UI renders initials. */
  photo: string | null;
  linkedin: string;
  group: AdvisorGroup;
}

/**
 * Group names. These appear as filter chips and content tags across Advisors,
 * Events and Insights, so they are interface copy and are translated. The
 * commission *mandates* and narratives remain English pending human
 * translation — see src/i18n/README.md.
 */
export const GROUP_LABELS: Record<AdvisorGroup, Localised<string>> = {
  'energy-water-transition': {
    en: 'Energy & Water Transition',
    nl: 'Energie- & watertransitie',
    fr: "Transition énergétique & hydrique",
  },
  'digital-ai-infrastructure': {
    en: 'Digital, AI & Infrastructure',
    nl: 'Digitaal, AI & infrastructuur',
    fr: 'Numérique, IA & infrastructures',
  },
  'industry-trade-logistics': {
    en: 'Industry, Trade & Logistics',
    nl: 'Industrie, handel & logistiek',
    fr: 'Industrie, commerce & logistique',
  },
  'talent-knowledge-society': {
    en: 'Talent, Knowledge & Society',
    nl: 'Talent, kennis & samenleving',
    fr: 'Talents, savoir & société',
  },
  'governance-public-affairs': {
    en: 'Governance, Trust & Public Affairs',
    nl: 'Governance, vertrouwen & publieke zaken',
    fr: 'Gouvernance, confiance & affaires publiques',
  },
  secretariat: {
    en: 'Operations & Secretariat',
    nl: 'Operatie & secretariaat',
    fr: 'Opérations & secrétariat',
  },
  honorary: { en: 'Honorary Distinction', nl: 'Ere-deelnemers', fr: "Distinctions d'honneur" },
};

export const GROUP_DESCRIPTIONS: Partial<Record<AdvisorGroup, Localised<string>>> = {
  'governance-public-affairs': {
    en: 'A cross-cutting group rather than a commission: governance, legal, statistics and public affairs support the work of all four commissions.',
    nl: 'Een overkoepelende groep in plaats van een commissie: governance, juridische zaken, statistiek en publieke zaken ondersteunen het werk van alle vier de commissies.',
    fr: "Un groupe transversal plutôt qu'une commission : la gouvernance, le juridique, les statistiques et les affaires publiques soutiennent le travail des quatre commissions.",
  },
  secretariat: {
    en: 'Operational roles supporting communications and day-to-day running of the organisation — distinct from the advisory function.',
    nl: 'Operationele rollen die communicatie en de dagelijkse gang van zaken ondersteunen — losstaand van de adviesfunctie.',
    fr: "Des fonctions opérationnelles qui soutiennent la communication et la gestion quotidienne de l'organisation — distinctes de la fonction consultative.",
  },
  honorary: {
    en: 'Recognised by the board for their contribution to CDD Pays-Bas.',
    nl: 'Door het bestuur erkend voor hun bijdrage aan CDD Pays-Bas.',
    fr: 'Reconnus par le conseil pour leur contribution à CDD Pays-Bas.',
  },
};

export const ADVISORS: Advisor[] = [
  {
    name: 'Yassine Saddiki',
    role: {
      en: 'Senior Advisor Commercial Strategy & Infrastructure Development',
      nl: 'Senior adviseur commerciële strategie & infrastructuurontwikkeling',
      fr: 'Conseiller senior stratégie commerciale & développement d\'infrastructures',
    },
    bio: {
      en: 'Experienced in commercial strategy and large-scale infrastructure projects. Supports organizations in structuring growth plans and long-term investments.',
      nl: 'Ervaren in commerciële strategie en grootschalige infrastructuurprojecten. Ondersteunt organisaties bij het opzetten van groeiplannen en langetermijninvesteringen.',
      fr: 'Expérimenté en stratégie commerciale et en projets d\'infrastructure de grande envergure. Il accompagne les organisations dans la structuration de leurs plans de croissance et de leurs investissements de long terme.',
    },
    photo: photo1,
    linkedin: 'https://www.linkedin.com/in/yassin-saddiki-4a068213/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Theo Hendriks',
    role: {
      en: 'Honorary Distinction',
      nl: 'Ere-deelnemer',
      fr: "Distinction d'honneur",
    },
    bio: {
      en: 'Recognised by the board for his long-standing contribution and commitment to the CDD network. Provides trusted guidance and historical insight to support the organization\\\'s mission.',
      nl: 'Ere-deelnemer, erkend voor zijn langdurige bijdrage en betrokkenheid bij het CDD-netwerk. Biedt vertrouwde begeleiding en historisch inzicht ter ondersteuning van de missie van de organisatie.',
      fr: 'Distingué par le conseil pour sa contribution et son engagement de longue date au sein du réseau CDD. Il apporte des conseils de confiance et une mémoire institutionnelle au service de la mission de l\'organisation.',
    },
    photo: photo2,
    linkedin: 'https://www.linkedin.com/in/theo-hendriks-10653943/',
    group: 'honorary',
  },
  {
    name: 'Ilias Semlali',
    role: {
      en: 'Juridical Partner – Corporate & Liability',
      nl: 'Juridisch partner – ondernemingsrecht & aansprakelijkheid',
      fr: 'Partenaire juridique – droit des sociétés & responsabilité',
    },
    bio: {
      en: 'Corporate legal specialist with deep expertise in compliance, contracts, and liability matters. Advises businesses on risk management and regulatory frameworks.',
      nl: 'Specialist ondernemingsrecht met diepgaande expertise op het gebied van compliance, contracten en aansprakelijkheid. Adviseert bedrijven over risicobeheer en regelgevende kaders.',
      fr: 'Spécialiste du droit des sociétés, doté d\'une expertise approfondie en conformité, contrats et responsabilité. Il conseille les entreprises sur la gestion des risques et les cadres réglementaires.',
    },
    photo: photo3,
    linkedin: 'https://www.linkedin.com/in/ilias-semlali-392174172/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Aziz El Kaddouri',
    role: {
      en: 'Senior Advisor Statistics',
      nl: 'Senior adviseur statistiek',
      fr: 'Conseiller senior statistiques',
    },
    bio: {
      en: 'Data-driven professional specialized in analytics and statistical modeling. Supports evidence-based decision-making through reliable insights and performance metrics.',
      nl: 'Datagedreven professional gespecialiseerd in analyse en statistische modellering. Ondersteunt onderbouwde besluitvorming met betrouwbare inzichten en prestatiecijfers.',
      fr: 'Professionnel orienté données, spécialisé en analyse et modélisation statistique. Il appuie une prise de décision fondée sur des données fiables et des indicateurs de performance.',
    },
    photo: photo4,
    linkedin: 'https://www.linkedin.com/in/azizelkaddouri/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Abdelbasset Zaghdoud',
    role: {
      en: 'Senior Advisor Real Estate & Events',
      nl: 'Senior adviseur vastgoed & evenementen',
      fr: 'Conseiller senior immobilier & événements',
    },
    bio: {
      en: 'Expert in real estate development and event coordination. Facilitates high-impact projects and strategic venues that support business growth.',
      nl: 'Expert in vastgoedontwikkeling en evenementencoördinatie. Faciliteert projecten met impact en strategische locaties die bedrijfsgroei ondersteunen.',
      fr: 'Expert en développement immobilier et en coordination d\'événements. Il facilite des projets à fort impact et des lieux stratégiques favorisant la croissance des entreprises.',
    },
    photo: photo5,
    linkedin: 'https://www.linkedin.com/in/abdelbassetzaghdoud/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Ahlam Gharbaoui',
    role: {
      en: 'Senior Advisor International Business Expansion',
      nl: 'Senior adviseur internationale expansie',
      fr: 'Conseillère senior expansion internationale',
    },
    bio: {
      en: 'Supports companies in expanding into international markets with structured growth strategies. Experienced in partnerships and cross-border operations.',
      nl: 'Ondersteunt bedrijven bij hun uitbreiding naar internationale markten met gestructureerde groeistrategieën. Ervaren in partnerschappen en internationale activiteiten.',
      fr: 'Elle accompagne les entreprises dans leur développement à l\'international à l\'aide de stratégies de croissance structurées. Expérimentée en partenariats et en opérations transfrontalières.',
    },
    photo: photo6,
    linkedin: 'https://www.linkedin.com/in/ahlam-gharbaoui-759a72a/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Khalid Chougrani',
    role: {
      en: 'Senior Advisor Innovation & Management',
      nl: 'Senior adviseur innovatie & management',
      fr: 'Conseiller senior innovation & management',
    },
    bio: {
      en: 'Innovation and management consultant with experience guiding organizations through transformation. Helps teams adopt efficient processes and modern solutions.',
      nl: 'Innovatie- en managementconsultant met ervaring in het begeleiden van organisaties door transformaties. Helpt teams efficiënte processen en moderne oplossingen te omarmen.',
      fr: 'Consultant en innovation et en management, expérimenté dans l\'accompagnement des organisations en transformation. Il aide les équipes à adopter des processus efficaces et des solutions modernes.',
    },
    photo: photo7,
    linkedin: 'https://www.linkedin.com/in/khalid-chougrani-ab0ab287/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Rachid Essehli',
    role: {
      en: 'Senior Advisor Energy Storage',
      nl: 'Senior adviseur energieopslag',
      fr: 'Conseiller senior stockage d\'énergie',
    },
    bio: {
      en: 'Specialist in energy storage technologies and systems integration. Advises on sustainable power solutions and grid optimization.',
      nl: 'Specialist in technologieën voor energieopslag en systeemintegratie. Adviseert over duurzame energieoplossingen en netoptimalisatie.',
      fr: 'Spécialiste des technologies de stockage d\'énergie et de l\'intégration de systèmes. Il conseille sur les solutions énergétiques durables et l\'optimisation des réseaux.',
    },
    photo: photo8,
    linkedin: 'https://www.linkedin.com/in/rachid-essehli-4aa5a31b7/',
    group: 'energy-water-transition',
  },
  {
    name: 'Abdelilah Boulal',
    role: {
      en: 'Senior Advisor Talent, Leadership & Social Impact',
      nl: 'Senior adviseur talent, leiderschap & maatschappelijke impact',
      fr: 'Conseiller senior talents, leadership & impact social',
    },
    bio: {
      en: 'Focused on talent development, leadership coaching, and social impact initiatives. Helps organizations build strong teams and inclusive cultures.',
      nl: 'Richt zich op talentontwikkeling, leiderschapscoaching en initiatieven met maatschappelijke impact. Helpt organisaties sterke teams en inclusieve culturen te bouwen.',
      fr: 'Il se consacre au développement des talents, au coaching de dirigeants et aux initiatives à impact social. Il aide les organisations à constituer des équipes solides et des cultures inclusives.',
    },
    photo: photo9,
    linkedin: 'https://www.linkedin.com/in/abdel-boulal-3566b320/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Dieter de Vroomen',
    role: {
      en: 'Senior Advisor Public-Private Governance',
      nl: 'Senior adviseur publiek-private governance',
      fr: 'Conseiller senior gouvernance public-privé',
    },
    bio: {
      en: 'Specialist in public-private collaboration and institutional governance. Bridges stakeholders to deliver impactful and structured partnerships.',
      nl: 'Specialist in publiek-private samenwerking en institutionele governance. Verbindt partijen om gestructureerde partnerschappen met impact te realiseren.',
      fr: 'Spécialiste de la collaboration public-privé et de la gouvernance institutionnelle. Il met en relation les parties prenantes pour bâtir des partenariats structurés et à fort impact.',
    },
    photo: photo10,
    linkedin: 'https://www.linkedin.com/in/dieterdevroomen/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Abderrahim El Mansour',
    role: {
      en: 'Digital Marketing Manager',
      nl: 'Manager digitale marketing',
      fr: 'Responsable marketing digital',
    },
    bio: {
      en: 'Digital marketing strategist with expertise in SEO, performance marketing, and online growth. Supports CDD\\\'s visibility and communication strategy across digital channels.',
      nl: 'Strateeg digitale marketing met expertise in SEO, performance marketing en online groei. Ondersteunt de zichtbaarheid en communicatiestrategie van CDD via digitale kanalen.',
      fr: 'Stratège en marketing digital, expert en SEO, marketing à la performance et croissance en ligne. Il appuie la visibilité et la stratégie de communication du CDD sur les canaux numériques.',
    },
    photo: photo11,
    linkedin: 'https://www.linkedin.com/in/abderrahim-el-mansour-359623232/',
    group: 'secretariat',
  },
  {
    name: 'Jan Hoogland',
    role: {
      en: 'Senior Advisor Arabic Language & Culture',
      nl: 'Senior adviseur Arabische taal & cultuur',
      fr: 'Conseiller senior langue & culture arabes',
    },
    bio: {
      en: 'Cultural and linguistic advisor fostering stronger understanding between Dutch and Moroccan communities. Supports intercultural communication and cooperation.',
      nl: 'Cultureel en taalkundig adviseur die het wederzijds begrip tussen de Nederlandse en Marokkaanse gemeenschap versterkt. Ondersteunt interculturele communicatie en samenwerking.',
      fr: 'Conseiller culturel et linguistique qui renforce la compréhension mutuelle entre les communautés néerlandaise et marocaine. Il soutient la communication et la coopération interculturelles.',
    },
    photo: photo12,
    linkedin: 'https://www.linkedin.com/in/jan-hoogland-1020157/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Patrick Cnubben',
    role: {
      en: 'Senior Advisor Development Hydrogen Valley',
      nl: 'Senior adviseur ontwikkeling Hydrogen Valley',
      fr: 'Conseiller senior développement Hydrogen Valley',
    },
    bio: {
      en: 'Energy transition expert engaged in hydrogen ecosystem development. Advises on sustainable energy projects and regional innovation clusters.',
      nl: 'Expert energietransitie, betrokken bij de ontwikkeling van het waterstofecosysteem. Adviseert over duurzame energieprojecten en regionale innovatieclusters.',
      fr: 'Expert de la transition énergétique, engagé dans le développement de l\'écosystème hydrogène. Il conseille sur les projets énergétiques durables et les clusters régionaux d\'innovation.',
    },
    photo: photo13,
    linkedin: 'https://www.linkedin.com/in/patrick-cnubben-8864b7a/',
    group: 'energy-water-transition',
  },
  {
    name: 'Hajia Zaki',
    role: {
      en: 'Senior Advisor Art & Cultural Affairs',
      nl: 'Senior adviseur kunst & culturele zaken',
      fr: 'Conseillère senior arts & affaires culturelles',
    },
    bio: {
      en: 'Advocate for arts and cultural initiatives that strengthen community engagement. Supports creative industries and cultural exchange projects.',
      nl: 'Pleitbezorger van kunst- en cultuurinitiatieven die de betrokkenheid in de samenleving versterken. Ondersteunt de creatieve sector en projecten voor culturele uitwisseling.',
      fr: 'Elle défend les initiatives artistiques et culturelles qui renforcent l\'engagement des communautés. Elle soutient les industries créatives et les projets d\'échange culturel.',
    },
    photo: photo14,
    linkedin: 'https://www.linkedin.com/in/hazia-zaki-8221b0183/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Yosuf Ouhlous',
    role: {
      en: 'Senior Advisor Agriculture & Horticulture',
      nl: 'Senior adviseur land- & tuinbouw',
      fr: 'Conseiller senior agriculture & horticulture',
    },
    bio: {
      en: 'Senior advisor with broad experience supporting strategic initiatives and organizational development. Contributes to partnership building and project execution.',
      nl: 'Senior adviseur met brede ervaring in het ondersteunen van strategische initiatieven en organisatieontwikkeling. Draagt bij aan het opbouwen van partnerschappen en de uitvoering van projecten.',
      fr: 'Conseiller senior doté d\'une large expérience dans l\'accompagnement d\'initiatives stratégiques et le développement organisationnel. Il contribue à la construction de partenariats et à l\'exécution de projets.',
    },
    photo: photo15,
    linkedin: 'https://www.linkedin.com/in/yosef-ouhlous-bb4730269/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Willem Hazenberg',
    role: {
      en: 'Senior Advisor Engineering & Consultancy',
      nl: 'Senior adviseur engineering & consultancy',
      fr: 'Conseiller senior ingénierie & conseil',
    },
    bio: {
      en: 'Experienced advisor supporting strategic planning and stakeholder engagement. Provides practical insights and structured solutions to complex challenges.',
      nl: 'Ervaren adviseur die strategische planning en de betrokkenheid van belanghebbenden ondersteunt. Biedt praktische inzichten en gestructureerde oplossingen voor complexe vraagstukken.',
      fr: 'Conseiller expérimenté qui appuie la planification stratégique et la mobilisation des parties prenantes. Il apporte des éclairages pratiques et des solutions structurées à des problèmes complexes.',
    },
    photo: photo16,
    linkedin: 'https://www.linkedin.com/in/willemhazenberg/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Ayoub Saboumazrag',
    role: {
      en: 'Senior Advisor Digitalisation & AI',
      nl: 'Senior adviseur digitalisering & AI',
      fr: 'Conseiller senior numérisation & IA',
    },
    bio: {
      en: 'Helps organizations leverage digitalisation, data, and AI to drive practical innovation and cross-border business growth.',
      nl: 'Helpt organisaties digitalisering, data en AI in te zetten voor praktische innovatie en internationale bedrijfsgroei.',
      fr: 'Il aide les organisations à mobiliser la numérisation, les données et l\'IA au service d\'une innovation concrète et d\'une croissance transfrontalière.',
    },
    photo: photo17,
    linkedin: 'https://www.linkedin.com/in/ayoub-saboumazrag/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Asma Gribi',
    role: {
      en: 'Senior Advisor Communication',
      nl: 'Senior adviseur communicatie',
      fr: 'Conseillère senior communication',
    },
    bio: {
      en: 'Strengthens CDD’s communication, visibility, and stakeholder engagement through clear and impactful messaging.',
      nl: 'Versterkt de communicatie, zichtbaarheid en stakeholderbetrokkenheid van CDD met heldere en krachtige boodschappen.',
      fr: 'Elle renforce la communication, la visibilité et la mobilisation des parties prenantes du CDD par des messages clairs et percutants.',
    },
    photo: photo18,
    linkedin: 'https://www.linkedin.com/in/asma-gribi-94a4bb13/',
    group: 'secretariat',
  },
  {
    name: 'Fouad El Haji',
    role: {
      en: 'Senior Advisor Governance & Public Affairs',
      nl: 'Senior adviseur governance & publieke zaken',
      fr: 'Conseiller senior gouvernance & affaires publiques',
    },
    bio: {
      en: 'Experienced public sector leader with strong expertise in governance and education. Brings strategic insight and institutional networks to strengthen cross-border impact.',
      nl: 'Ervaren leider in de publieke sector met sterke expertise op het gebied van governance en onderwijs. Brengt strategisch inzicht en institutionele netwerken in om betekenisvolle impact te versterken.',
      fr: 'Dirigeant expérimenté du secteur public, doté d\'une solide expertise en gouvernance et en éducation. Il apporte une vision stratégique et des réseaux institutionnels pour renforcer l\'impact transfrontalier.',
    },
    photo: photo19,
    linkedin: 'https://www.linkedin.com/in/fouad-el-haji-b8b319a2/',
    group: 'governance-public-affairs',
  },
  {
    name: 'Joel Myers',
    role: {
      en: 'Senior Advisor Digital Twins',
      nl: 'Senior adviseur digital twins',
      fr: 'Conseiller senior jumeaux numériques',
    },
    bio: {
      en: 'Expert in Smart Cities and Digital Twins, driving data-driven urban innovation. Supports sustainable digital transformation and international cooperation.',
      nl: 'Expert in smart cities en digital twins, die datagedreven stedelijke innovatie aanjaagt. Ondersteunt duurzame digitale transformatie en internationale samenwerking.',
      fr: 'Expert des villes intelligentes et des jumeaux numériques, il impulse une innovation urbaine fondée sur les données. Il soutient la transformation numérique durable et la coopération internationale.',
    },
    photo: photo20,
    linkedin: 'https://www.linkedin.com/in/joel-myers-domila/',
    group: 'digital-ai-infrastructure',
  },
  {
    name: 'Volkan Ozturk',
    role: {
      en: 'Senior Advisor – Renewable Energy & Strategic Investments',
      nl: 'Senior adviseur – hernieuwbare energie & strategische investeringen',
      fr: 'Conseiller senior – énergies renouvelables & investissements stratégiques',
    },
    bio: {
      en: 'International energy executive with 20+ years of experience and over 500 MW in renewable projects (hydro, geothermal, solar & wind). Strengthening cross-border energy and investment cooperation between the Netherlands, Turkey, and Morocco at CDD Pays-Bas.',
      nl: 'Internationaal energiebestuurder met ruim 20 jaar ervaring en meer dan 500 MW aan hernieuwbare projecten (waterkracht, geothermie, zon en wind). Versterkt bij CDD Pays-Bas de internationale samenwerking op het gebied van energie en investeringen tussen Nederland, Turkije en Marokko.',
      fr: 'Dirigeant du secteur énergétique international, fort de plus de 20 ans d\'expérience et de plus de 500 MW de projets renouvelables (hydraulique, géothermie, solaire et éolien). Au sein de CDD Pays-Bas, il renforce la coopération énergétique et d\'investissement entre les Pays-Bas, la Turquie et le Maroc.',
    },
    photo: photo21,
    linkedin: 'https://www.linkedin.com/in/vozturknl?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    group: 'energy-water-transition',
  },
  {
    name: 'Nora Kasmi',
    role: {
      en: 'Senior Advisor Social Domain & Labour Market Policy',
      nl: 'Senior adviseur sociaal domein & arbeidsmarktbeleid',
      fr: 'Conseillère senior domaine social & politique du marché du travail',
    },
    bio: {
      en: 'Senior expert with 23+ years of experience in social policy and labour market strategy. Bridges public policy, inclusion, and societal impact.',
      nl: 'Senior expert met ruim 23 jaar ervaring in sociaal beleid en arbeidsmarktstrategie. Verbindt publiek beleid, inclusie en maatschappelijke impact.',
      fr: 'Experte senior forte de plus de 23 ans d\'expérience en politique sociale et en stratégie du marché du travail. Elle fait le lien entre politiques publiques, inclusion et impact sociétal.',
    },
    photo: photo22,
    linkedin: 'https://www.linkedin.com/in/nora-kasmi/',
    group: 'talent-knowledge-society',
  },
  {
    name: 'Youssef Boulal',
    role: {
      en: 'Senior Advisor Port Operations & CSD',
      nl: 'Senior adviseur havenoperaties & CSD',
      fr: 'Conseiller senior opérations portuaires & CSD',
    },
    bio: {
      en: 'Maritime and logistics expert with 20+ years in port operations and shipping. Brings strong operational leadership across international trade and logistics ecosystems.',
      nl: 'Maritiem- en logistiekexpert met ruim 20 jaar ervaring in havenoperaties en scheepvaart. Brengt sterk operationeel leiderschap in binnen internationale handels- en logistieke ecosystemen.',
      fr: 'Expert maritime et logistique fort de plus de 20 ans d\'expérience dans les opérations portuaires et le transport maritime. Il apporte un solide leadership opérationnel aux écosystèmes du commerce et de la logistique internationaux.',
    },
    photo: photo23,
    linkedin: 'https://www.linkedin.com/in/youssef-boulal-6a6929170/',
    group: 'industry-trade-logistics',
  },
  {
    name: 'Badr Ikken',
    /*
     * Added on Nouraddine Gribi's instruction (August 2026). Role reflects the
     * titles supplied by the board verbatim; no biography is asserted beyond
     * them. Photograph and a fuller biography to be supplied by the advisor.
     */
    role: {
      en: 'Senior Advisor & Partner — Executive President and Managing Partner, GI3; Chairman, AHK Maroc Steering Committee',
      nl: 'Senior adviseur & partner — uitvoerend voorzitter en managing partner, GI3; voorzitter van het stuurcomité van AHK Maroc',
      fr: "Conseiller senior & partenaire — président exécutif et managing partner, GI3 ; président du comité de pilotage de l'AHK Maroc",
    },
    bio: {
      en: 'Executive President and Managing Partner of GI3, and Chairman of the Steering Committee of AHK Maroc, the German-Moroccan Chamber of Commerce and Industry.',
      nl: 'Uitvoerend voorzitter en managing partner van GI3 en voorzitter van het stuurcomité van AHK Maroc, de Duits-Marokkaanse Kamer van Koophandel en Industrie.',
      fr: "Président exécutif et managing partner de GI3, et président du comité de pilotage de l'AHK Maroc, la Chambre de commerce et d'industrie germano-marocaine.",
    },
    photo: null,
    linkedin: '',
    group: 'energy-water-transition',
  },
  {
    name: 'Turgut Torunogullari',
    /*
     * Honorary distinction, added on Nouraddine Gribi's instruction (August 2026).
     * Company affiliation as supplied by the board; photograph to follow.
     */
    role: {
      en: 'Honorary Distinction — Edelstaal',
      nl: 'Ere-deelnemer — Edelstaal',
      fr: "Distinction d'honneur — Edelstaal",
    },
    bio: {
      en: 'Recognised by the board of CDD Pays-Bas for his contribution to the network. Edelstaal.',
      nl: 'Ere-deelnemer van CDD Pays-Bas, door het bestuur erkend voor zijn bijdrage aan het netwerk. Edelstaal.',
      fr: "Distingué par le conseil de CDD Pays-Bas pour sa contribution au réseau. Edelstaal.",
    },
    photo: null,
    linkedin: '',
    group: 'honorary',
  },
];

/** Advisors belonging to a given group, in listed order. */
export function advisorsInGroup(group: AdvisorGroup): Advisor[] {
  return ADVISORS.filter((a) => a.group === group);
}
