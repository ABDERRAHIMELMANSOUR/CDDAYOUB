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
    tiers: string;
    perYear: string;
    byInvitation: string;
    contactForDues: string;
    ourMembers: string;
    paymentNote: string;
  };
  events: {
    title: string;
    upcoming: string;
    past: string;
    noUpcoming: string;
    getNotified: string;
    register: string;
    registrationSoon: string;
    filterType: string;
    filterCommission: string;
    allTypes: string;
    allCommissions: string;
  };
  commissions: {
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
    subtitle: 'Membership gives you access to our advisors, commissions and network.',
    applyCta: 'Apply for membership',
    seeTiers: 'See tiers & dues',
    whyJoin: 'Why join',
    tiers: 'Tiers & dues',
    perYear: 'per year',
    byInvitation: 'By invitation',
    contactForDues: 'Contact us for current dues',
    ourMembers: 'Our members',
    paymentNote: 'Payment',
  },
  events: {
    title: 'Events & Gatherings',
    upcoming: 'Upcoming',
    past: 'Past events',
    noUpcoming: 'Our next event is being finalised.',
    getNotified: 'Get notified',
    register: 'Register',
    registrationSoon: 'Registration opens soon',
    filterType: 'Type',
    filterCommission: 'Commission',
    allTypes: 'All types',
    allCommissions: 'All commissions',
  },
  commissions: {
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
    subtitle: 'Een lidmaatschap geeft u toegang tot onze adviseurs, commissies en netwerk.',
    applyCta: 'Lidmaatschap aanvragen',
    seeTiers: 'Bekijk categorieën & contributie',
    whyJoin: 'Waarom lid worden',
    tiers: 'Categorieën & contributie',
    perYear: 'per jaar',
    byInvitation: 'Op uitnodiging',
    contactForDues: 'Neem contact op voor de actuele contributie',
    ourMembers: 'Onze leden',
    paymentNote: 'Betaling',
  },
  events: {
    title: 'Evenementen & bijeenkomsten',
    upcoming: 'Aankomend',
    past: 'Afgelopen evenementen',
    noUpcoming: 'Ons volgende evenement wordt momenteel voorbereid.',
    getNotified: 'Houd mij op de hoogte',
    register: 'Aanmelden',
    registrationSoon: 'Aanmelding opent binnenkort',
    filterType: 'Type',
    filterCommission: 'Commissie',
    allTypes: 'Alle typen',
    allCommissions: 'Alle commissies',
  },
  commissions: {
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
    subtitle: "L'adhésion vous donne accès à nos conseillers, commissions et réseau.",
    applyCta: "Demander l'adhésion",
    seeTiers: 'Voir les catégories & cotisations',
    whyJoin: 'Pourquoi adhérer',
    tiers: 'Catégories & cotisations',
    perYear: 'par an',
    byInvitation: 'Sur invitation',
    contactForDues: 'Contactez-nous pour les cotisations en vigueur',
    ourMembers: 'Nos membres',
    paymentNote: 'Paiement',
  },
  events: {
    title: 'Événements & rencontres',
    upcoming: 'À venir',
    past: 'Événements passés',
    noUpcoming: 'Notre prochain événement est en cours de finalisation.',
    getNotified: 'Être informé',
    register: "S'inscrire",
    registrationSoon: 'Les inscriptions ouvrent prochainement',
    filterType: 'Type',
    filterCommission: 'Commission',
    allTypes: 'Tous les types',
    allCommissions: 'Toutes les commissions',
  },
  commissions: {
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
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, nl, fr };
