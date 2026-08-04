import type { Locale } from './config';

/**
 * Interface strings for the three locales.
 *
 * Keys are grouped by area. English is the reference: every key present in `en`
 * must exist in `nl` and `fr`, which the type below enforces at compile time —
 * a missing translation is a build error, not a silent English string in the
 * middle of a Dutch page.
 */
export interface Dictionary {
  nav: {
    about: string;
    focusAreas: string;
    membership: string;
    events: string;
    insights: string;
    contact: string;
    memberLogin: string;
    memberLoginPending: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    whoWeAre: string;
    governanceBoard: string;
    advisoryCouncil: string;
    partnerships: string;
    transparency: string;
    allFocusAreas: string;
    whyJoin: string;
    tiersAndDues: string;
    ourMembers: string;
    apply: string;
  };
  footer: {
    organisation: string;
    engage: string;
    connect: string;
    privacy: string;
    cookies: string;
    accessibility: string;
    rightsReserved: string;
    tagline: string;
  };
  common: {
    readMore: string;
    getInTouch: string;
    learnMore: string;
    viewAll: string;
    backTo: string;
    optional: string;
    required: string;
    loading: string;
    close: string;
    languageNotice: string;
    changeLanguage: string;
  };
  membership: {
    title: string;
    subtitle: string;
    applyCta: string;
    seeTiers: string;
    whyJoin: string;
    whyJoinIntro: string;
    tiers: string;
    duesIntro: string;
    duesIntroPrivate: string;
    mostChosen: string;
    perYear: string;
    byInvitation: string;
    contactForDues: string;
    honoraryTitle: string;
    honoraryText: string;
    ourMembers: string;
    membersIntro: string;
    membersEmpty: string;
    membersEmptyCta: string;
    paymentNote: string;
    paymentIdeal: string;
    paymentSepa: string;
    paymentCard: string;
    readyToJoin: string;
    readyText: string;
  };
  events: {
    title: string;
    subtitle: string;
    upcoming: string;
    past: string;
    noUpcoming: string;
    noUpcomingNote: string;
    noMatch: string;
    noMatchNote: string;
    noPastMatch: string;
    recapNote: string;
    getNotified: string;
    register: string;
    registrationSoon: string;
    filterType: string;
    filterCommission: string;
    allTypes: string;
    allCommissions: string;
    places: string;
    membersPrice: string;
    guestsPrice: string;
    rsvpTitle: string;
    rsvpDone: string;
    rsvpThanks: string;
    fullName: string;
    email: string;
    organisation: string;
    privacyNote: string;
    confirmRegistration: string;
  };
  home: {
    badge: string;
    heroLine1: string;
    heroLine2: string;
    heroText: string;
    getInvolved: string;
    upcomingEvents: string;
    visionEyebrow: string;
    visionTitle: string;
    visionText: string;
    whatWeDo: string;
    focusTitle: string;
    focusText: string;
    exploreAll: string;
    impactEyebrow: string;
    impactTitle: string;
    impactText: string;
    impactPoints: string[];
    imageCaption: string;
    valuesEyebrow: string;
    valuesTitle: string;
    valuesText: string;
    values: { title: string; description: string }[];
    ctaTitle: string;
    ctaText: string;
  };
  focusAreas: {
    title: string;
    mechanism: string;
    howTheyWork: string;
    rulesIntro: string;
    takePart: string;
    takePartText: string;
  };
  commissions: {
    commission: string;
    established: string;
    cadence: string;
    advisor: string;
    advisors: string;
    viewCommission: string;
    advisorsIntro: string;
    advisorsPending: string;
    refreshedQuarterly: string;
    allEvents: string;
    allInsights: string;
    joinNamed: string;
    joinText: string;
    chair: string;
    toBeAppointed: string;
    openToMembers: string;
    currentPriorities: string;
    whatWeDo: string;
    chairAndAdvisors: string;
    joinCommission: string;
    relatedEvents: string;
    relatedInsights: string;
    governanceTrust: string;
    opportunity: string;
  };
  insights: {
    title: string;
    subtitle: string;
    news: string;
    spotlight: string;
    briefing: string;
    all: string;
    relatedCommissions: string;
    nothingPublished: string;
    cadenceNote: string;
    readMore: string;
    backToInsights: string;
  };
}

const en: Dictionary = {
  nav: {
    about: 'About',
    focusAreas: 'Focus Areas',
    membership: 'Membership',
    events: 'Events',
    insights: 'Insights',
    contact: 'Contact',
    memberLogin: 'Member Login',
    memberLoginPending: 'The member platform is being prepared',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to main content',
    whoWeAre: 'Who We Are',
    governanceBoard: 'Governance & Board',
    advisoryCouncil: 'Advisory Council',
    partnerships: 'Partnerships',
    transparency: 'Transparency',
    allFocusAreas: 'All focus areas',
    whyJoin: 'Why Join',
    tiersAndDues: 'Tiers & Dues',
    ourMembers: 'Our Members',
    apply: 'Apply',
  },
  footer: {
    organisation: 'Organisation',
    engage: 'Engage',
    connect: 'Connect',
    privacy: 'Privacy',
    cookies: 'Cookies',
    accessibility: 'Accessibility',
    rightsReserved: 'All rights reserved.',
    tagline:
      'An international business and leadership platform connecting decision-makers, entrepreneurs, investors, and senior experts across Europe, Morocco, and Africa.',
  },
  common: {
    readMore: 'Read more',
    getInTouch: 'Get in touch',
    learnMore: 'Learn more',
    viewAll: 'View all',
    backTo: 'Back to',
    optional: '(optional)',
    required: 'required',
    loading: 'Loading…',
    close: 'Close',
    languageNotice: 'This section has not been translated yet and is shown in English.',
    changeLanguage: 'Change language',
  },
  membership: {
    title: 'Join the Club',
    subtitle:
      "CDD Pays-Bas is a members' club. Membership gives you access to {advisors} senior advisors, {commissions} working commissions, and a network that spans the Netherlands and Morocco.",
    applyCta: 'Apply for membership',
    seeTiers: 'See tiers & dues',
    whyJoin: 'Why join',
    whyJoinIntro: 'Written as what you actually get, rather than as abstractions.',
    tiers: 'Tiers & dues',
    duesIntro:
      'Annual dues, published openly. Membership runs for twelve months and is renewable.',
    duesIntroPrivate:
      'Membership runs for twelve months and is renewable. Contact us for current dues.',
    mostChosen: 'Most chosen',
    perYear: 'per year',
    byInvitation: 'By invitation',
    contactForDues: 'Contact us for current dues',
    honoraryTitle: 'Honorary membership',
    honoraryText:
      'Extended by board invitation to individuals recognised for their contribution to CDD Pays-Bas. It cannot be applied for.',
    ourMembers: 'Our members',
    membersIntro:
      'A logo wall of member and partner organisations belongs here. It is the strongest proof a club can offer, and it stays empty rather than filled with placeholders until there are real names to show.',
    membersEmpty:
      'Member organisations will be listed here with their consent. If your organisation is already working with CDD Pays-Bas and you would like to be included,',
    membersEmptyCta: 'let us know',
    paymentNote: 'Payment',
    paymentIdeal: 'Standard for Dutch members',
    paymentSepa: 'Used for annual renewals',
    paymentCard: 'For international members',
    readyToJoin: 'Ready to join?',
    readyText:
      'The application takes a couple of minutes. We review every application and come back to you personally.',
  },
  events: {
    title: 'Events & Gatherings',
    subtitle:
      'Roundtables, delegations, forums and community gatherings — convened by the commissions and open to members.',
    upcoming: 'Upcoming',
    past: 'Past events',
    noUpcoming: 'Our next event is being finalised.',
    noUpcomingNote: 'Members and subscribers are notified first.',
    noMatch: 'No upcoming events match these filters.',
    noMatchNote: 'Try clearing a filter, or see what the commissions have run before.',
    noPastMatch: 'No past events match these filters.',
    recapNote: 'Recaps are published within five working days of every event.',
    getNotified: 'Get notified',
    register: 'Register',
    registrationSoon: 'Registration opens soon',
    filterType: 'Type',
    filterCommission: 'Commission',
    allTypes: 'All types',
    allCommissions: 'All commissions',
    places: 'places',
    membersPrice: 'Members',
    guestsPrice: 'Guests',
    rsvpTitle: 'Register',
    rsvpDone: 'Registration received',
    rsvpThanks:
      'Thank you — your registration is recorded. We will confirm your place by email and send joining details closer to the date.',
    fullName: 'Full name',
    email: 'Email',
    organisation: 'Organisation',
    privacyNote: 'Your details are handled in line with our',
    confirmRegistration: 'Confirm registration',
  },
  home: {
    badge: 'International Business Leadership Platform',
    heroLine1: 'Connecting Leaders,',
    heroLine2: 'Building the Future',
    heroText:
      'CDD Pays-Bas is an international platform for business leaders, investors, and decision-makers driving cross-border collaboration and sustainable development.',
    getInvolved: 'Get Involved',
    upcomingEvents: 'Upcoming Events',
    visionEyebrow: 'Our Vision',
    visionTitle: 'A Strategic Bridge Between Two Markets',
    visionText:
      'To serve as a strategic bridge connecting European, Moroccan, and African ecosystems, fostering economic diplomacy, innovation, and sustainable growth through purposeful collaboration between business leaders, public institutions, and international partners.',
    whatWeDo: 'What We Do',
    focusTitle: 'Strategic Focus Areas',
    focusText: 'We drive impact across key sectors shaping the future of international business',
    exploreAll: 'Explore All Focus Areas',
    impactEyebrow: 'Our Impact',
    impactTitle: 'Driving Cross-Border Impact',
    impactText:
      'CDD Pays-Bas brings together business leaders, investors, public institutions, and international experts to create meaningful partnerships that transcend borders.',
    impactPoints: [
      'Economic diplomacy and strategic representation',
      'High-level business delegations and networking',
      'Knowledge sharing and executive education',
    ],
    imageCaption: 'Connecting leaders across two markets',
    valuesEyebrow: 'Core Values',
    valuesTitle: 'Our Core Values',
    valuesText: 'Principles that guide our mission and shape our impact',
    values: [
      { title: 'Leadership', description: 'Empowering decision-makers to drive meaningful change' },
      { title: 'Sustainability', description: 'Promoting inclusive and sustainable economic growth' },
      { title: 'Collaboration', description: 'Building bridges between sectors and geographies' },
      { title: 'Impact', description: 'Creating measurable value for communities and economies' },
    ],
    ctaTitle: 'Join Our Network',
    ctaText:
      'Connect with decision-makers, explore strategic partnerships, and be part of initiatives shaping the future of cross-border collaboration.',
  },
  focusAreas: {
    title: 'Where our work happens',
    mechanism:
      'CDD Pays-Bas organises its work through four standing commissions, each chaired by a senior advisor and open to all members.',
    howTheyWork: 'How the commissions work',
    rulesIntro:
      'A commission that exists only as a page is a focus area with a better name. These rules are published so members and partners can hold us to them.',
    takePart: 'Take part in a commission',
    takePartText:
      'Commissions are open to all CDD members. Tell us which one fits your work and we will bring you into the next session.',
  },
  commissions: {
    commission: 'Commission',
    established: 'Established',
    cadence: 'Cadence',
    advisor: 'senior advisor',
    advisors: 'senior advisors',
    viewCommission: 'View commission',
    advisorsIntro: 'Senior advisors whose domains sit within this commission. They are drawn from the',
    advisorsPending: 'Advisors for this commission are being confirmed.',
    refreshedQuarterly: 'Refreshed quarterly',
    allEvents: 'All events',
    allInsights: 'All insights',
    joinNamed: 'Join the {name} Commission',
    joinText:
      'Commissions are open to all CDD members. Tell us you would like to take part and we will bring you into the next session.',
    chair: 'Chair',
    toBeAppointed: 'To be appointed by the board',
    openToMembers: 'Open to all members',
    currentPriorities: 'Current priorities',
    whatWeDo: 'What we do',
    chairAndAdvisors: 'Chair & advisors',
    joinCommission: 'Join this commission',
    relatedEvents: 'Related events',
    relatedInsights: 'Related insights',
    governanceTrust: 'Governance & trust',
    opportunity: 'The Netherlands–Morocco opportunity',
  },
  insights: {
    title: 'News, spotlights & briefings',
    subtitle: 'What the network is doing, who is in it, and what is changing in both markets.',
    news: 'News',
    spotlight: 'Member & Advisor Spotlight',
    briefing: 'Market Briefing',
    all: 'All',
    relatedCommissions: 'Related commissions',
    nothingPublished: 'Nothing published in this category yet.',
    cadenceNote: 'CDD Pays-Bas aims to publish at least two items a month.',
    readMore: 'Read more',
    backToInsights: 'Insights',
  },
};

const nl: Dictionary = {
  nav: {
    about: 'Over ons',
    focusAreas: 'Aandachtsgebieden',
    membership: 'Lidmaatschap',
    events: 'Evenementen',
    insights: 'Inzichten',
    contact: 'Contact',
    memberLogin: 'Inloggen leden',
    memberLoginPending: 'Het ledenplatform wordt voorbereid',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    skipToContent: 'Naar hoofdinhoud',
    whoWeAre: 'Wie wij zijn',
    governanceBoard: 'Bestuur & governance',
    advisoryCouncil: 'Raad van adviseurs',
    partnerships: 'Partnerschappen',
    transparency: 'Transparantie',
    allFocusAreas: 'Alle aandachtsgebieden',
    whyJoin: 'Waarom lid worden',
    tiersAndDues: 'Categorieën & contributie',
    ourMembers: 'Onze leden',
    apply: 'Aanmelden',
  },
  footer: {
    organisation: 'Organisatie',
    engage: 'Meedoen',
    connect: 'Contact',
    privacy: 'Privacy',
    cookies: 'Cookies',
    accessibility: 'Toegankelijkheid',
    rightsReserved: 'Alle rechten voorbehouden.',
    tagline:
      'Een internationaal platform voor ondernemerschap en leiderschap dat bestuurders, ondernemers, investeerders en senior experts verbindt in Europa, Marokko en Afrika.',
  },
  common: {
    readMore: 'Lees meer',
    getInTouch: 'Neem contact op',
    learnMore: 'Meer informatie',
    viewAll: 'Bekijk alles',
    backTo: 'Terug naar',
    optional: '(optioneel)',
    required: 'verplicht',
    loading: 'Laden…',
    close: 'Sluiten',
    languageNotice: 'Dit onderdeel is nog niet vertaald en wordt in het Engels weergegeven.',
    changeLanguage: 'Taal wijzigen',
  },
  membership: {
    title: 'Word lid van de club',
    subtitle:
      'CDD Pays-Bas is een ledenclub. Een lidmaatschap geeft u toegang tot {advisors} senior adviseurs, {commissions} werkende commissies en een netwerk dat Nederland en Marokko omspant.',
    applyCta: 'Lidmaatschap aanvragen',
    seeTiers: 'Bekijk categorieën & contributie',
    whyJoin: 'Waarom lid worden',
    whyJoinIntro: 'Beschreven als wat u daadwerkelijk krijgt, in plaats van als abstracties.',
    tiers: 'Categorieën & contributie',
    duesIntro:
      'Jaarlijkse contributie, openlijk gepubliceerd. Het lidmaatschap loopt twaalf maanden en is verlengbaar.',
    duesIntroPrivate:
      'Het lidmaatschap loopt twaalf maanden en is verlengbaar. Neem contact op voor de actuele contributie.',
    mostChosen: 'Meest gekozen',
    perYear: 'per jaar',
    byInvitation: 'Op uitnodiging',
    contactForDues: 'Neem contact op voor de actuele contributie',
    honoraryTitle: 'Erelidmaatschap',
    honoraryText:
      'Wordt op uitnodiging van het bestuur toegekend aan personen die worden erkend voor hun bijdrage aan CDD Pays-Bas. Hiervoor kan niet worden aangemeld.',
    ourMembers: 'Onze leden',
    membersIntro:
      'Hier hoort een logowand van leden- en partnerorganisaties. Het is het sterkste bewijs dat een club kan leveren, en blijft leeg in plaats van gevuld met plaatsvervangers totdat er echte namen te tonen zijn.',
    membersEmpty:
      'Ledenorganisaties worden hier met hun toestemming vermeld. Werkt uw organisatie al samen met CDD Pays-Bas en wilt u worden opgenomen,',
    membersEmptyCta: 'laat het ons weten',
    paymentNote: 'Betaling',
    paymentIdeal: 'Standaard voor Nederlandse leden',
    paymentSepa: 'Gebruikt voor jaarlijkse verlengingen',
    paymentCard: 'Voor internationale leden',
    readyToJoin: 'Klaar om lid te worden?',
    readyText:
      'De aanmelding kost een paar minuten. Wij beoordelen elke aanmelding en nemen persoonlijk contact met u op.',
  },
  events: {
    title: 'Evenementen & bijeenkomsten',
    subtitle:
      'Rondetafelgesprekken, handelsmissies, fora en netwerkbijeenkomsten — georganiseerd door de commissies en open voor leden.',
    upcoming: 'Aankomend',
    past: 'Afgelopen evenementen',
    noUpcoming: 'Ons volgende evenement wordt momenteel voorbereid.',
    noUpcomingNote: 'Leden en abonnees worden als eerste op de hoogte gebracht.',
    noMatch: 'Geen aankomende evenementen komen overeen met deze filters.',
    noMatchNote: 'Wis een filter, of bekijk wat de commissies eerder hebben georganiseerd.',
    noPastMatch: 'Geen afgelopen evenementen komen overeen met deze filters.',
    recapNote: 'Verslagen worden binnen vijf werkdagen na elk evenement gepubliceerd.',
    getNotified: 'Houd mij op de hoogte',
    register: 'Aanmelden',
    registrationSoon: 'Aanmelding opent binnenkort',
    filterType: 'Type',
    filterCommission: 'Commissie',
    allTypes: 'Alle typen',
    allCommissions: 'Alle commissies',
    places: 'plaatsen',
    membersPrice: 'Leden',
    guestsPrice: 'Gasten',
    rsvpTitle: 'Aanmelden',
    rsvpDone: 'Aanmelding ontvangen',
    rsvpThanks:
      'Dank u — uw aanmelding is geregistreerd. Wij bevestigen uw plaats per e-mail en sturen praktische informatie dichter bij de datum.',
    fullName: 'Volledige naam',
    email: 'E-mailadres',
    organisation: 'Organisatie',
    privacyNote: 'Uw gegevens worden verwerkt conform onze',
    confirmRegistration: 'Aanmelding bevestigen',
  },
  home: {
    badge: 'Internationaal platform voor zakelijk leiderschap',
    heroLine1: 'Leiders verbinden,',
    heroLine2: 'de toekomst bouwen',
    heroText:
      'CDD Pays-Bas is een internationaal platform voor bestuurders, investeerders en besluitvormers die grensoverschrijdende samenwerking en duurzame ontwikkeling stimuleren.',
    getInvolved: 'Doe mee',
    upcomingEvents: 'Aankomende evenementen',
    visionEyebrow: 'Onze visie',
    visionTitle: 'Een strategische brug tussen twee markten',
    visionText:
      'Fungeren als strategische brug tussen Europese, Marokkaanse en Afrikaanse ecosystemen, en economische diplomatie, innovatie en duurzame groei bevorderen door doelgerichte samenwerking tussen bestuurders, publieke instellingen en internationale partners.',
    whatWeDo: 'Wat wij doen',
    focusTitle: 'Strategische aandachtsgebieden',
    focusText:
      'Wij creëren impact in sleutelsectoren die de toekomst van internationaal ondernemen vormgeven',
    exploreAll: 'Bekijk alle aandachtsgebieden',
    impactEyebrow: 'Onze impact',
    impactTitle: 'Grensoverschrijdende impact realiseren',
    impactText:
      'CDD Pays-Bas brengt bestuurders, investeerders, publieke instellingen en internationale experts samen om betekenisvolle partnerschappen te vormen die grenzen overstijgen.',
    impactPoints: [
      'Economische diplomatie en strategische vertegenwoordiging',
      'Hoogwaardige handelsmissies en netwerkvorming',
      'Kennisdeling en executive education',
    ],
    imageCaption: 'Leiders verbinden in twee markten',
    valuesEyebrow: 'Kernwaarden',
    valuesTitle: 'Onze kernwaarden',
    valuesText: 'Principes die onze missie sturen en onze impact vormgeven',
    values: [
      { title: 'Leiderschap', description: 'Besluitvormers in staat stellen betekenisvolle verandering te realiseren' },
      { title: 'Duurzaamheid', description: 'Inclusieve en duurzame economische groei bevorderen' },
      { title: 'Samenwerking', description: 'Bruggen bouwen tussen sectoren en regio\'s' },
      { title: 'Impact', description: 'Meetbare waarde creëren voor gemeenschappen en economieën' },
    ],
    ctaTitle: 'Sluit u aan bij ons netwerk',
    ctaText:
      'Kom in contact met besluitvormers, verken strategische partnerschappen en maak deel uit van initiatieven die de toekomst van grensoverschrijdende samenwerking vormgeven.',
  },
  focusAreas: {
    title: 'Waar ons werk gebeurt',
    mechanism:
      'CDD Pays-Bas organiseert haar werk via vier vaste commissies, elk voorgezeten door een senior adviseur en open voor alle leden.',
    howTheyWork: 'Hoe de commissies werken',
    rulesIntro:
      'Een commissie die alleen als pagina bestaat, is een aandachtsgebied met een mooiere naam. Deze regels zijn gepubliceerd zodat leden en partners ons eraan kunnen houden.',
    takePart: 'Neem deel aan een commissie',
    takePartText:
      'Commissies staan open voor alle CDD-leden. Laat ons weten welke aansluit bij uw werk en wij nemen u mee naar de volgende sessie.',
  },
  commissions: {
    commission: 'Commissie',
    established: 'Opgericht',
    cadence: 'Vergaderfrequentie',
    advisor: 'senior adviseur',
    advisors: 'senior adviseurs',
    viewCommission: 'Bekijk commissie',
    advisorsIntro:
      'Senior adviseurs wier vakgebied binnen deze commissie valt. Zij zijn afkomstig uit de',
    advisorsPending: 'De adviseurs voor deze commissie worden nog bevestigd.',
    refreshedQuarterly: 'Elk kwartaal geactualiseerd',
    allEvents: 'Alle evenementen',
    allInsights: 'Alle inzichten',
    joinNamed: 'Neem deel aan de commissie {name}',
    joinText:
      'Commissies staan open voor alle CDD-leden. Laat ons weten dat u wilt deelnemen en wij nemen u mee naar de volgende sessie.',
    chair: 'Voorzitter',
    toBeAppointed: 'Nog te benoemen door het bestuur',
    openToMembers: 'Open voor alle leden',
    currentPriorities: 'Huidige prioriteiten',
    whatWeDo: 'Wat wij doen',
    chairAndAdvisors: 'Voorzitter & adviseurs',
    joinCommission: 'Neem deel aan deze commissie',
    relatedEvents: 'Gerelateerde evenementen',
    relatedInsights: 'Gerelateerde inzichten',
    governanceTrust: 'Governance & vertrouwen',
    opportunity: 'De kans tussen Nederland en Marokko',
  },
  insights: {
    title: 'Nieuws, portretten & briefings',
    subtitle:
      'Wat het netwerk doet, wie erbij betrokken is en wat er verandert in beide markten.',
    news: 'Nieuws',
    spotlight: 'Portret van leden & adviseurs',
    briefing: 'Marktbriefing',
    all: 'Alles',
    relatedCommissions: 'Gerelateerde commissies',
    nothingPublished: 'Nog niets gepubliceerd in deze categorie.',
    cadenceNote: 'CDD Pays-Bas streeft ernaar minimaal twee items per maand te publiceren.',
    readMore: 'Lees meer',
    backToInsights: 'Inzichten',
  },
};

const fr: Dictionary = {
  nav: {
    about: 'À propos',
    focusAreas: "Domaines d'action",
    membership: 'Adhésion',
    events: 'Événements',
    insights: 'Analyses',
    contact: 'Contact',
    memberLogin: 'Espace membres',
    memberLoginPending: 'La plateforme membres est en préparation',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skipToContent: 'Aller au contenu principal',
    whoWeAre: 'Qui sommes-nous',
    governanceBoard: 'Gouvernance & conseil',
    advisoryCouncil: 'Conseil consultatif',
    partnerships: 'Partenariats',
    transparency: 'Transparence',
    allFocusAreas: "Tous les domaines d'action",
    whyJoin: 'Pourquoi adhérer',
    tiersAndDues: 'Catégories & cotisations',
    ourMembers: 'Nos membres',
    apply: 'Adhérer',
  },
  footer: {
    organisation: 'Organisation',
    engage: 'Participer',
    connect: 'Contact',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
    accessibility: 'Accessibilité',
    rightsReserved: 'Tous droits réservés.',
    tagline:
      "Une plateforme internationale d'affaires et de leadership reliant décideurs, entrepreneurs, investisseurs et experts seniors en Europe, au Maroc et en Afrique.",
  },
  common: {
    readMore: 'Lire la suite',
    getInTouch: 'Nous contacter',
    learnMore: 'En savoir plus',
    viewAll: 'Tout voir',
    backTo: 'Retour à',
    optional: '(facultatif)',
    required: 'obligatoire',
    loading: 'Chargement…',
    close: 'Fermer',
    languageNotice: "Cette section n'est pas encore traduite et s'affiche en anglais.",
    changeLanguage: 'Changer de langue',
  },
  membership: {
    title: 'Rejoignez le Club',
    subtitle:
      "CDD Pays-Bas est un club de membres. L'adhésion vous donne accès à {advisors} conseillers seniors, {commissions} commissions actives et un réseau qui couvre les Pays-Bas et le Maroc.",
    applyCta: "Demander l'adhésion",
    seeTiers: 'Voir les catégories & cotisations',
    whyJoin: 'Pourquoi adhérer',
    whyJoinIntro:
      "Formulé en fonction de ce que vous obtenez réellement, plutôt qu'en abstractions.",
    tiers: 'Catégories & cotisations',
    duesIntro:
      "Cotisations annuelles, publiées ouvertement. L'adhésion court sur douze mois et est renouvelable.",
    duesIntroPrivate:
      "L'adhésion court sur douze mois et est renouvelable. Contactez-nous pour les cotisations en vigueur.",
    mostChosen: 'Le plus choisi',
    perYear: 'par an',
    byInvitation: 'Sur invitation',
    contactForDues: 'Contactez-nous pour les cotisations en vigueur',
    honoraryTitle: "Membre d'honneur",
    honoraryText:
      "Accordé sur invitation du conseil aux personnes reconnues pour leur contribution à CDD Pays-Bas. Il ne peut faire l'objet d'une candidature.",
    ourMembers: 'Nos membres',
    membersIntro:
      "Un mur de logos des organisations membres et partenaires a sa place ici. C'est la preuve la plus forte qu'un club puisse offrir : il reste vide plutôt que rempli d'espaces réservés tant qu'il n'y a pas de vrais noms à montrer.",
    membersEmpty:
      "Les organisations membres seront listées ici avec leur accord. Si votre organisation collabore déjà avec CDD Pays-Bas et souhaite y figurer,",
    membersEmptyCta: 'faites-le nous savoir',
    paymentNote: 'Paiement',
    paymentIdeal: 'Standard pour les membres néerlandais',
    paymentSepa: 'Utilisé pour les renouvellements annuels',
    paymentCard: 'Pour les membres internationaux',
    readyToJoin: 'Prêt à nous rejoindre ?',
    readyText:
      'La demande prend quelques minutes. Nous examinons chaque candidature et vous répondons personnellement.',
  },
  events: {
    title: 'Événements & rencontres',
    subtitle:
      'Tables rondes, délégations, forums et rencontres du réseau — organisés par les commissions et ouverts aux membres.',
    upcoming: 'À venir',
    past: 'Événements passés',
    noUpcoming: 'Notre prochain événement est en cours de finalisation.',
    noUpcomingNote: 'Les membres et abonnés sont informés en priorité.',
    noMatch: 'Aucun événement à venir ne correspond à ces filtres.',
    noMatchNote: "Retirez un filtre, ou découvrez ce que les commissions ont déjà organisé.",
    noPastMatch: 'Aucun événement passé ne correspond à ces filtres.',
    recapNote: 'Les comptes rendus sont publiés dans les cinq jours ouvrés suivant chaque événement.',
    getNotified: 'Être informé',
    register: "S'inscrire",
    registrationSoon: 'Les inscriptions ouvrent prochainement',
    filterType: 'Type',
    filterCommission: 'Commission',
    allTypes: 'Tous les types',
    allCommissions: 'Toutes les commissions',
    places: 'places',
    membersPrice: 'Membres',
    guestsPrice: 'Invités',
    rsvpTitle: "S'inscrire",
    rsvpDone: 'Inscription reçue',
    rsvpThanks:
      'Merci — votre inscription est enregistrée. Nous confirmerons votre place par e-mail et vous enverrons les informations pratiques à l’approche de la date.',
    fullName: 'Nom complet',
    email: 'E-mail',
    organisation: 'Organisation',
    privacyNote: 'Vos données sont traitées conformément à notre',
    confirmRegistration: "Confirmer l'inscription",
  },
  home: {
    badge: 'Plateforme internationale de leadership économique',
    heroLine1: 'Relier les dirigeants,',
    heroLine2: "construire l'avenir",
    heroText:
      'CDD Pays-Bas est une plateforme internationale réunissant dirigeants, investisseurs et décideurs qui font avancer la collaboration transfrontalière et le développement durable.',
    getInvolved: 'Participer',
    upcomingEvents: 'Événements à venir',
    visionEyebrow: 'Notre vision',
    visionTitle: 'Un pont stratégique entre deux marchés',
    visionText:
      "Servir de pont stratégique entre les écosystèmes européens, marocains et africains, en favorisant la diplomatie économique, l'innovation et une croissance durable par une collaboration réfléchie entre dirigeants, institutions publiques et partenaires internationaux.",
    whatWeDo: 'Ce que nous faisons',
    focusTitle: "Domaines d'action stratégiques",
    focusText:
      "Nous créons de l'impact dans les secteurs clés qui façonnent l'avenir des affaires internationales",
    exploreAll: "Découvrir tous les domaines d'action",
    impactEyebrow: 'Notre impact',
    impactTitle: 'Créer un impact transfrontalier',
    impactText:
      'CDD Pays-Bas réunit dirigeants, investisseurs, institutions publiques et experts internationaux pour créer des partenariats significatifs qui dépassent les frontières.',
    impactPoints: [
      'Diplomatie économique et représentation stratégique',
      "Délégations d'affaires de haut niveau et mise en réseau",
      'Partage de connaissances et formation des dirigeants',
    ],
    imageCaption: 'Relier les dirigeants de deux marchés',
    valuesEyebrow: 'Valeurs fondamentales',
    valuesTitle: 'Nos valeurs fondamentales',
    valuesText: 'Les principes qui guident notre mission et façonnent notre impact',
    values: [
      { title: 'Leadership', description: 'Donner aux décideurs les moyens de conduire un vrai changement' },
      { title: 'Durabilité', description: "Favoriser une croissance économique inclusive et durable" },
      { title: 'Collaboration', description: 'Bâtir des ponts entre secteurs et territoires' },
      { title: 'Impact', description: 'Créer une valeur mesurable pour les communautés et les économies' },
    ],
    ctaTitle: 'Rejoignez notre réseau',
    ctaText:
      "Échangez avec des décideurs, explorez des partenariats stratégiques et prenez part aux initiatives qui façonnent l'avenir de la collaboration transfrontalière.",
  },
  focusAreas: {
    title: 'Là où se fait notre travail',
    mechanism:
      'CDD Pays-Bas organise son travail à travers quatre commissions permanentes, chacune présidée par un conseiller senior et ouverte à tous les membres.',
    howTheyWork: 'Comment fonctionnent les commissions',
    rulesIntro:
      "Une commission qui n'existe que sous forme de page est un domaine d'action avec un plus joli nom. Ces règles sont publiées pour que membres et partenaires puissent nous y tenir.",
    takePart: 'Participer à une commission',
    takePartText:
      'Les commissions sont ouvertes à tous les membres du CDD. Dites-nous laquelle correspond à votre activité et nous vous intégrerons à la prochaine session.',
  },
  commissions: {
    commission: 'Commission',
    established: 'Créée en',
    cadence: 'Fréquence',
    advisor: 'conseiller senior',
    advisors: 'conseillers seniors',
    viewCommission: 'Voir la commission',
    advisorsIntro:
      'Les conseillers seniors dont les domaines relèvent de cette commission. Ils sont issus du',
    advisorsPending: 'Les conseillers de cette commission sont en cours de confirmation.',
    refreshedQuarterly: 'Actualisées chaque trimestre',
    allEvents: 'Tous les événements',
    allInsights: 'Toutes les analyses',
    joinNamed: 'Rejoindre la commission {name}',
    joinText:
      'Les commissions sont ouvertes à tous les membres du CDD. Dites-nous que vous souhaitez y participer et nous vous intégrerons à la prochaine session.',
    chair: 'Président',
    toBeAppointed: 'À nommer par le conseil',
    openToMembers: 'Ouverte à tous les membres',
    currentPriorities: 'Priorités actuelles',
    whatWeDo: 'Ce que nous faisons',
    chairAndAdvisors: 'Président & conseillers',
    joinCommission: 'Rejoindre cette commission',
    relatedEvents: 'Événements associés',
    relatedInsights: 'Analyses associées',
    governanceTrust: 'Gouvernance & confiance',
    opportunity: "L'opportunité Pays-Bas–Maroc",
  },
  insights: {
    title: 'Actualités, portraits & briefings',
    subtitle:
      'Ce que fait le réseau, qui le compose et ce qui évolue sur les deux marchés.',
    news: 'Actualités',
    spotlight: 'Portrait de membres & conseillers',
    briefing: 'Briefing marché',
    all: 'Tout',
    relatedCommissions: 'Commissions associées',
    nothingPublished: 'Rien de publié dans cette catégorie pour le moment.',
    cadenceNote: 'CDD Pays-Bas vise à publier au moins deux contenus par mois.',
    readMore: 'Lire la suite',
    backToInsights: 'Analyses',
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, nl, fr };
