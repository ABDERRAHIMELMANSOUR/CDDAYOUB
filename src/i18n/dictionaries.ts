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
    commissions: string;
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
    allCommissions: string;
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
    annualComingSoon: string;
    annualNote: string;
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
    perMonth: string;
    applyTitle: string;
    applyIntro: string;
    applyBackLink: string;
    yourDetails: string;
    fullName: string;
    emailLabel: string;
    organisationLabel: string;
    roleLabel: string;
    commissionLabel: string;
    commissionNone: string;
    messageLabel: string;
    optional: string;
    reviewManual: string;
    reviewLive: string;
    privacyLine: string;
    privacyLink: string;
    submit: string;
    submitting: string;
    receivedTitle: string;
    receivedText: string;
    receivedReference: string;
    receivedFollowUp: string;
    backHome: string;
    duesTitle: string;
    duesSingleIntro: string;
    whatsIncluded: string;
    cancelAnytime: string;
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
    placesLeft: string;
    full: string;
    addToCalendar: string;
    rsvpPending: string;
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
    heroCarouselLabel: string;
    heroPause: string;
    heroPlay: string;
    heroPrev: string;
    heroNext: string;
    heroSlideOf: string;
    heroGoToSlide: string;
    newsEyebrow: string;
    newsTitle: string;
    newsText: string;
    newsCarouselLabel: string;
    newsPrev: string;
    newsNext: string;
    newsRead: string;
    newsOnLinkedIn: string;
    becomeMember: string;
    proofAdvisors: string;
    proofCommissions: string;
    proofEvents: string;
    proofMarkets: string;
    spotlightEyebrow: string;
    spotlightTitle: string;
    spotlightAll: string;
    insightsAll: string;
    joinBandTitle: string;
    joinBandText: string;
    joinBandPrimary: string;
    joinBandSecondary: string;
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
  };
  commissionsIndex: {
    title: string;
    mechanism: string;
    howTheyWork: string;
    rulesIntro: string;
    takePart: string;
    takePartText: string;
  };
  commissions: {
    chairTitle: string;
    chairPending: string;
    chairPendingText: string;
    chairProfile: string;
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
  about: {
    imageCaption: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    moroccoHeading: string;
    moroccoDefault: string;
    transparencyLine: string;
    transparencyLink: string;
    whoWeAre: string;
    whoWeAreP1Lead: string;
    whoWeAreP1: string;
    whoWeAreP2Before: string;
    whoWeAreP2Emphasis: string;
    whoWeAreP2After: string;
    whoWeAreP3: string;
    ourMission: string;
    missionText: string;
    ourVision: string;
    visionText: string;
    whatWeDo: string;
    whatWeDoSubtitle: string;
    whoWeServeSubtitle: string;
    whyEyebrow: string;
    whatWeDoItems: { title: string; description: string }[];
    whoWeServe: string;
    stakeholders: string;
    serveItems: string[];
    whyTitle: string;
    whyItems: { title: string; description: string }[];
  };
  leadership: {
    eyebrow: string;
    title: string;
    subtitle: string;
    president: string;
    presidentRole: string;
    presidentBio1: string;
    presidentBio2: string;
    contactLabel: string;
    highlights: { title: string; description: string }[];
    founder: string;
    founderRole: string;
    founderBio1: string;
    founderBio2: string;
    continuityEyebrow: string;
    continuityTitle: string;
    continuitySubtitle: string;
    fromVisionTitle: string;
    fromVisionText: string;
    /** Board officer roles and biographies, keyed by the officer's name. */
    boardBios: Record<string, { role: string; bio: string }>;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    boardEyebrow: string;
    boardTitle: string;
    boardIntro: string;
    remuneration: string;
    remunerationText: string;
    statutoryDetails: string;
    statutoryText: string;
    transparencyLink: string;
    governanceEyebrow: string;
    governanceTitle: string;
    governanceText: string;
    principles: { title: string; description: string }[];
    teamEyebrow: string;
    teamTitle: string;
    teamText: string;
    visionCaption: string;
    teamCaption: string;
  };
  advisorsPage: {
    eyebrow: string;
    /** "{advisors} senior advisors across {commissions} commissions, …" */
    introBefore: string;
    introAfter: string;
    leadershipLink: string;
    joinTitle: string;
    joinText: string;
  };
  contact: {
    sendFailed: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    heroTitle: string;
    heroSubtitle: string;
    introText: string;
    labelLocation: string;
    labelEmail: string;
    labelPhone: string;
    labelLinkedin: string;
    phone: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    hours: string;
    whoShouldContactSubtitle: string;
    getInTouch: string;
    sendMessage: string;
    sent: string;
    sentText: string;
    name: string;
    email: string;
    organisation: string;
    subject: string;
    message: string;
    areaOfInterest: string;
    selectOption: string;
    submit: string;
    namePlaceholder: string;
    orgPlaceholder: string;
    subjectPlaceholder: string;
    officeHours: string;
    weekdays: string;
    location: string;
    whoShouldContact: string;
    interests: string[];
    audiences: { title: string; description: string }[];
    privacyTitle: string;
    privacyText: string;
    privacyLinkIntro: string;
    privacyLinkText: string;
    privacyLinkOutro: string;
    country: string;
  };
  partnerships: {
    eyebrow: string;
    title: string;
    subtitle: string;
    caption: string;
    heroTitle: string;
    heroSubtitle: string;
    ecosystemTitle: string;
    ecosystemP1: string;
    ecosystemP2: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    benefitsSubtitle: string;
    geoTitle: string;
    geoSubtitle: string;
    typesTitle: string;
    types: { title: string; description: string }[];
    /** Example organisations per partner category, index-aligned with `types`. */
    typeExamples: string[][];
    regions: { name: string; description: string; bullets: string[] }[];
    benefitsTitle: string;
    benefits: { title: string; description: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonText: string;
    announcement: string;
    pillars: { title: string; description: string }[];
    ctaTitle: string;
    ctaText: string;
  };
  legal: {
    authoritativeTitle: string;
    authoritativeText: string;
    lastUpdated: string;
  };
  insights: {
    galleryTitle: string;
    linkedinTitle: string;
    linkedinIntro: string;
    linkedinFollow: string;
    linkedinView: string;
    linkedinEmpty: string;
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
    commissions: 'Commissions',
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
    allCommissions: 'All commissions',
    whyJoin: 'Why Join',
    tiersAndDues: 'Membership & Dues',
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
    annualComingSoon: 'Coming soon',
    annualNote:
      'An annual rate is being prepared — one payment instead of twelve, at a saving on the monthly total. Monthly membership is available today and nothing changes for existing members when it launches.',
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
    perMonth: 'per month',
    applyTitle: 'Apply for membership',
    applyIntro: 'Three required fields. We review every application and respond personally.',
    applyBackLink: 'Membership',
    yourDetails: 'Your details',
    fullName: 'Full name',
    emailLabel: 'Email',
    organisationLabel: 'Organisation',
    roleLabel: 'Your role',
    commissionLabel: 'Commission you would like to join',
    commissionNone: 'No preference for now',
    messageLabel: 'Anything you would like us to know',
    optional: '(optional)',
    reviewManual:
      'Submitting records your application. CDD Pays-Bas will confirm your membership and arrange payment with you directly — online payment is being set up and no payment is taken now.',
    reviewLive: 'You will be taken to our payment provider to complete your membership. We accept',
    privacyLine: 'Your details are handled in line with our',
    privacyLink: 'privacy statement',
    submit: 'Submit application',
    submitting: 'Submitting…',
    receivedTitle: 'Application received',
    receivedText: 'Thank you. Your membership application has been recorded under reference',
    receivedReference: 'reference',
    receivedFollowUp:
      'A member of the board reviews every application personally. We will be in touch shortly to confirm your membership and arrange payment.',
    backHome: 'Back to home',
    duesTitle: 'Membership & dues',
    duesSingleIntro:
      'One membership, one price. €25 per month gives full access to the network, the events and the commissions — there are no tiers to weigh up and nothing held back for a higher band.',
    whatsIncluded: "What's included",
    cancelAnytime: 'Billed monthly. Cancel at any time.',
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
    placesLeft: 'places left',
    full: 'Fully booked',
    addToCalendar: 'Add to calendar',
    rsvpPending:
      'We could not reach our registration system just now, so we have not been able to record this automatically. Please email contact@cddpaysbas.nl and we will register you by hand.',
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
    heroCarouselLabel: 'Highlights from CDD Pays-Bas',
    heroPause: 'Pause automatic slide rotation',
    heroPlay: 'Resume automatic slide rotation',
    heroPrev: 'Previous slide',
    heroNext: 'Next slide',
    heroSlideOf: 'Slide {n} of {total}',
    heroGoToSlide: 'Show slide {n}',
    newsEyebrow: 'News & media',
    newsTitle: 'What we have been working on',
    newsText:
      'Recent articles, briefings and posts from CDD Pays-Bas and our LinkedIn page.',
    newsCarouselLabel: 'Recent news and media',
    newsPrev: 'Previous items',
    newsNext: 'Next items',
    newsRead: 'Read',
    newsOnLinkedIn: 'On LinkedIn',
    becomeMember: 'Become a member',
    proofAdvisors: 'senior advisors',
    proofCommissions: 'standing commissions',
    proofEvents: 'events held',
    proofMarkets: 'markets connected',
    spotlightEyebrow: 'Advisory Council',
    spotlightTitle: 'Who you get access to',
    spotlightAll: 'Meet the Advisory Council',
    insightsAll: 'All insights',
    joinBandTitle: 'Join CDD Pays-Bas',
    joinBandText:
      'One membership, €25 per month: every event, a seat in any commission, and direct access to our senior advisors across the Netherlands and Morocco.',
    joinBandPrimary: 'Become a member',
    joinBandSecondary: 'What membership includes',
    whatWeDo: 'What We Do',
    focusTitle: 'Our Four Commissions',
    focusText: 'We drive impact across key sectors shaping the future of international business',
    exploreAll: 'Explore all commissions',
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
  },
  commissionsIndex: {
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
    chairTitle: 'Chair of this commission',
    chairPending: 'Chair to be appointed',
    chairPendingText:
      'The board appoints each chair from the Advisory Council for a two-year term. This seat has not been filled yet, and we would rather say so than name someone who has not agreed.',
    chairProfile: 'View profile',
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
  about: {
    imageCaption:
      'Replace with photography from a CDD Pays-Bas gathering or delegation.',
    eyebrow: 'About Us',
    title: 'About CDD Pays-Bas',
    subtitle:
      'An international platform connecting decision-makers and fostering collaboration between Europe, Morocco, and Africa.',
    moroccoHeading: 'Our relationship to CDD Morocco',
    moroccoDefault:
      'CDD Pays-Bas works in close partnership with Club des Dirigeants (CDD), founded in Morocco, around a shared mission of connecting business leaders across both markets.',
    transparencyLine: 'Our statutory details and governance documents are published on our',
    transparencyLink: 'transparency page',
    whoWeAre: 'Who We Are',
    whoWeAreP1Lead: 'CDD Pays-Bas',
    whoWeAreP1:
      '(Club des Dirigeants – Netherlands) is an international business and leadership platform that serves as a strategic bridge between European, Moroccan, and African ecosystems.',
    whoWeAreP2Before: 'We bring together',
    whoWeAreP2Emphasis:
      'business leaders, investors, senior experts, public institutions, and international organizations',
    whoWeAreP2After: 'to foster economic diplomacy, innovation, and sustainable development.',
    whoWeAreP3:
      'Our network includes CEOs, entrepreneurs, project developers, policymakers, diaspora leaders, and knowledge partners committed to creating cross-border impact in sectors such as energy transition, infrastructure, technology, finance, real estate, and education.',
    missionText:
      'To empower business leaders and decision-makers by creating strategic connections, facilitating cross-border collaboration, and promoting sustainable and inclusive economic development across Europe, Morocco, and Africa through purposeful dialogue, knowledge sharing, and actionable partnerships.',
    visionText:
      'To be the premier international platform connecting European, Moroccan, and African business ecosystems, recognized for driving impactful collaborations in strategic sectors such as energy transition, innovation, infrastructure, and finance, while championing leadership, governance, and sustainable growth.',
    whatWeDoSubtitle:
      'CDD Pays-Bas acts as a convener, facilitator, and strategic partner across four core pillars',
    whoWeServeSubtitle:
      'Our platform connects diverse stakeholders committed to cross-border impact',
    whyEyebrow: 'Why Choose Us',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    whatWeDo: 'What We Do',
    whatWeDoItems: [
      { title: 'Economic Diplomacy', description: 'Representing and advocating for business interests across Europe, Morocco, and Africa' },
      { title: 'Strategic Partnerships', description: 'Facilitating high-value connections between corporations, investors, and institutions' },
      { title: 'Knowledge Exchange', description: 'Organizing thought leadership events, roundtables, and executive programs' },
      { title: 'Project Development', description: 'Supporting cross-border initiatives in energy, infrastructure, and innovation' },
    ],
    whoWeServe: 'Who We Serve',
    stakeholders: 'Our Stakeholders',
    serveItems: [
      'Business Leaders & CEOs',
      'Investors & Project Developers',
      'Public Institutions & Policymakers',
      'Entrepreneurs & Innovators',
      'Senior Advisors & Experts',
      'Knowledge & Research Partners',
      'Diaspora Networks',
      'International Organizations',
    ],
    whyTitle: 'Why CDD Pays-Bas',
    whyItems: [
      { title: 'Cross-Border Network', description: 'Access to a vetted ecosystem spanning Europe, Morocco, and Africa with institutional reach' },
      { title: 'Credibility & Trust', description: 'A governance-led organisation with named advisors and published statutes' },
      { title: 'Impact-Oriented', description: 'Focused on measurable outcomes rather than visibility alone' },
    ],
  },
  leadership: {
    eyebrow: 'Leadership',
    title: 'Leadership & Governance',
    subtitle:
      'Experienced leaders guiding CDD Pays-Bas with a commitment to transparency, accountability and measurable impact.',
    president: 'President',
    presidentRole: 'President – CDD Pays-Bas',
    presidentBio1:
      'Nouraddine Gribi is the President of CDD Pays-Bas and a strategic leader dedicated to strengthening economic and institutional ties between Morocco and the Netherlands. With extensive experience in business development, governance, and international partnerships, he drives high-impact collaborations between public and private stakeholders.',
    presidentBio2:
      'He actively promotes entrepreneurship, inclusion, and sustainable growth within the Moroccan-Dutch ecosystem. Through his leadership, CDD Pays-Bas continues to build bridges, create opportunities, and deliver measurable value for its members and partners.',
    contactLabel: 'Contact',
    highlights: [
      { title: 'Leadership & Governance', description: 'Driving strategic vision and organizational excellence' },
      { title: 'Cross-Border Cooperation', description: 'Netherlands ↔ Morocco partnerships and collaboration' },
      { title: 'Entrepreneurship & Ecosystem Building', description: 'Supporting entrepreneurs and fostering innovation' },
      { title: 'Institutional Credibility', description: 'Building trusted international partnerships' },
    ],
    founderRole: 'Founder & President – CDD',
    founderBio1:
      'Driss DRIF is the Founder and President of CDD (Club des Dirigeants), an organization established with the vision of connecting leaders, fostering strategic dialogue, and building strong bridges between Morocco and international ecosystems.',
    founderBio2:
      'Under his leadership, CDD has become a growing network of decision-makers and advisors across sectors, driving impactful collaborations between public and private stakeholders. His initiative laid the foundation for CDD Pays-Bas, which continues this legacy in the Netherlands.',
    continuityEyebrow: 'Leadership Continuity',
    continuityTitle: 'A Shared Vision',
    continuitySubtitle:
      'United by a commitment to connecting leaders, fostering collaboration, and building bridges between the Netherlands, Morocco, and Africa.',
    fromVisionTitle: 'From Vision to Reality',
    fromVisionText:
      'Driss DRIF founded CDD with a vision of connecting leaders and fostering strategic dialogue. Nouraddine Gribi continues this legacy as President of CDD Pays-Bas, strengthening ties between the Netherlands, Morocco, and Africa through impactful partnerships and sustainable development.',
    boardBios: {
      'Nouraddine Gribi': {
        role: 'President',
        bio: 'Leads CDD Pays-Bas with a strategic vision focused on strengthening economic bridges between Morocco and the Netherlands. Drives partnerships, governance, and sustainable impact initiatives.',
      },
      'Ahmed Rahmouni': {
        role: 'Treasurer',
        bio: 'International business professional with strong financial and commercial expertise. Supports CDD Pays-Bas with strategic financial oversight and cross-border business insight.',
      },
    },
    ctaTitle: 'Interested in Contributing?',
    ctaText:
      'CDD Pays-Bas welcomes senior experts and advisors who share our commitment to cross-border collaboration and sustainable development.',
    ctaButton: 'Contact Us',
    founder: 'Founder',
    boardEyebrow: 'Governance',
    boardTitle: 'The Board',
    boardIntro:
      'CDD Pays-Bas is governed by its statutory board, distinct from the Advisory Council of senior experts who advise the organisation.',
    remuneration: 'Remuneration',
    remunerationText:
      'Board members serve unpaid. Expenses incurred on behalf of the organisation are reimbursed against receipt.',
    statutoryDetails: 'Statutory details',
    statutoryText:
      'Legal form, KvK and RSIN, together with our statutes, policy plan, annual report and financial summary, are published on our',
    transparencyLink: 'transparency page',
    governanceEyebrow: 'Governance',
    governanceTitle: 'Governance Principles',
    governanceText: 'CDD Pays-Bas operates with transparency, accountability, and strategic focus',
    principles: [
      { title: 'Transparency', description: 'Open communication and clear decision-making processes' },
      { title: 'Accountability', description: 'Responsible stewardship and measurable outcomes' },
      { title: 'Inclusion', description: 'Diverse perspectives and equitable representation' },
      { title: 'Excellence', description: 'High standards in all our activities and partnerships' },
    ],
    teamEyebrow: 'Our Team',
    teamTitle: 'Experienced Leadership',
    teamText:
      'CDD Pays-Bas is guided by a distinguished board and advisory team with proven track records in international business, public policy, and strategic development.',
    visionCaption: 'From vision to reality',
    teamCaption: 'Experienced leadership',
  },
  advisorsPage: {
    eyebrow: 'Advisory Council',
    introBefore:
      'senior advisors across {commissions} commissions, bringing domain expertise to the work CDD Pays-Bas convenes.',
    introAfter: 'Our statutory board is presented separately on the',
    leadershipLink: 'Leadership page',
    joinTitle: 'Join the Advisory Council',
    joinText:
      'CDD Pays-Bas welcomes senior experts who share our commitment to building durable ties between the Netherlands and Morocco.',
  },
  contact: {
    sendFailed:
      'We could not reach our system just now, so this may not have been recorded. Please email contact@cddpaysbas.nl so your message reaches us.',
    eyebrow: 'Contact',
    title: 'Get in Touch',
    subtitle:
      'Whether you are exploring partnership, membership or a specific project, we would like to hear from you.',
    heroTitle: 'Contact & Collaboration',
    heroSubtitle:
      'Connect with CDD Pays-Bas to explore partnerships, join our network, or participate in cross-border initiatives.',
    introText:
      'We welcome inquiries from business leaders, investors, institutions, and organizations interested in cross-border collaboration.',
    labelLocation: 'Location',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelLinkedin: 'LinkedIn',
    phone: 'Phone Number',
    phonePlaceholder: '+31 XX XXX XXXX',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Tell us about your inquiry or collaboration interest...',
    hours: '9:00 – 18:00 CET',
    whoShouldContactSubtitle: 'CDD Pays-Bas welcomes engagement from diverse stakeholders',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Us a Message',
    sent: 'Message Sent!',
    sentText: 'Thank you for reaching out. We will respond as soon as possible.',
    name: 'Name',
    email: 'Email',
    organisation: 'Organization',
    subject: 'Subject',
    message: 'Message',
    areaOfInterest: 'Area of Interest',
    selectOption: 'Select an option',
    submit: 'Send Message',
    namePlaceholder: 'Your name',
    orgPlaceholder: 'Company or institution',
    subjectPlaceholder: 'Brief subject line',
    officeHours: 'Office Hours',
    weekdays: 'Monday - Friday',
    location: 'Rotterdam & Amsterdam',
    whoShouldContact: 'Who Should Contact Us?',
    interests: [
      'General Inquiry',
      'Partnership Opportunities',
      'Investment & Project Financing',
      'Business Delegation Participation',
      'Advisory & Expert Contribution',
      'Event Collaboration',
      'Media & Press',
    ],
    audiences: [
      { title: 'Business Leaders & CEOs', description: 'Explore strategic partnerships and cross-border opportunities' },
      { title: 'Investors', description: 'Access vetted projects and investment opportunities' },
      { title: 'Project Developers', description: 'Present projects to our network of partners and investors' },
      { title: 'Government & Institutions', description: 'Collaborate on economic diplomacy and policy initiatives' },
      { title: 'Knowledge Partners', description: 'Share expertise and participate in advisory capacity' },
      { title: 'Media & Press', description: 'Request interviews, information, or event coverage' },
    ],
    privacyTitle: 'Privacy & Data Protection',
    privacyText:
      'Your information will be handled in accordance with European data protection regulations. We will only use your contact details to respond to your inquiry and may add you to our professional network mailing list if you express interest. You can unsubscribe at any time.',
    privacyLinkIntro: 'Read our',
    privacyLinkText: 'privacy statement',
    privacyLinkOutro:
      'for full details on what we collect, why, how long we keep it, and your rights.',
    country: 'The Netherlands',
  },
  partnerships: {
    eyebrow: 'Partnerships',
    title: 'Partner With Us',
    subtitle:
      'CDD Pays-Bas builds durable relationships with organisations that share our commitment to cross-border collaboration.',
    caption: 'Building durable institutional relationships',
    heroTitle: 'Partnerships & Ecosystem',
    heroSubtitle:
      'CDD Pays-Bas brings together a diverse ecosystem of partners committed to cross-border collaboration, innovation, and sustainable development.',
    ecosystemTitle: 'A Multi-Stakeholder Ecosystem',
    ecosystemP1:
      'Our partnership network spans the public and private sectors, connecting organizations that share our commitment to economic diplomacy, strategic collaboration, and impact.',
    ecosystemP2:
      'By bringing together diverse stakeholders — from corporations and investors to government agencies and knowledge institutions — we create a dynamic platform for meaningful dialogue, project development, and mutual growth.',
    categoriesTitle: 'Our Partner Ecosystem',
    categoriesSubtitle:
      'We collaborate with six key categories of partners, each bringing unique value to our network',
    benefitsSubtitle:
      'Partners of CDD Pays-Bas gain access to a vetted network and strategic opportunities',
    geoTitle: 'Geographic Reach',
    geoSubtitle: 'Our partnership network spans three strategic regions',
    typeExamples: [
      ['Energy Companies', 'Infrastructure Firms', 'Technology Leaders', 'Financial Institutions'],
      ['Private Equity Funds', 'Development Finance Institutions', 'Family Offices', 'Venture Capital'],
      ['Government Agencies', 'Embassies & Trade Offices', 'EU Institutions', 'International Organizations'],
      ['Universities', 'Research Centres', 'Think Tanks', 'Professional Associations'],
      ['Business Associations', 'Professional Networks', 'Community Organizations', 'Alumni Groups'],
      ['Chambers of Commerce', 'Business Clubs', 'Sector Associations', 'Innovation Hubs'],
    ],
    regions: [
      {
        name: 'Europe',
        description:
          'Strong presence in the Netherlands with connections across EU member states, institutions, and business networks.',
        bullets: ['Business clusters & innovation hubs', 'EU institutions & agencies', 'Financial & investment networks'],
      },
      {
        name: 'Morocco',
        description:
          'Deep connections with the Moroccan business community, government stakeholders, and development institutions.',
        bullets: ['Public & private sector leaders', 'Strategic infrastructure projects', 'Economic development agencies'],
      },
      {
        name: 'Africa',
        description:
          'Growing network across sub-Saharan Africa focusing on trade, investment, and development partnerships.',
        bullets: ['Regional economic communities', 'Development finance institutions', 'Sector-specific partnerships'],
      },
    ],
    typesTitle: 'Partnership Types',
    types: [
      { title: 'Corporate Partners', description: 'Leading corporations and multinationals committed to cross-border growth and innovation' },
      { title: 'Investment Partners', description: 'Private equity firms, family offices, and institutional investors driving strategic investments' },
      { title: 'Institutional Partners', description: 'Government agencies, diplomatic missions, and international organizations' },
      { title: 'Knowledge Partners', description: 'Universities, research institutes and think tanks contributing expertise' },
      { title: 'Diaspora Networks', description: 'Community organizations, alumni groups and professional associations' },
      { title: 'Business Associations', description: 'Business clubs, chambers of commerce, and sector-specific organizations' },
    ],
    benefitsTitle: 'What Partnership Offers',
    benefits: [
      { title: 'Access to Networks', description: 'Connect with decision-makers, investors, and experts across Europe, Morocco, and Africa' },
      { title: 'Knowledge Exchange', description: 'Access insights, research, and expertise relevant to your sector and geography' },
      { title: 'Joint Initiatives', description: 'Participate in high-level delegations, projects, and collaborative initiatives' },
    ],
    ctaTitle: 'Become a Partner',
    ctaText:
      'Tell us about your organisation and what you would like to build with CDD Pays-Bas.',
    ctaButton: 'Partner With Us',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Strategic Projects',
    subtitle: 'Cross-border initiatives developed with our members and partners.',
    comingSoon: 'Coming Soon',
    announcement:
      'Our strategic projects will be announced soon. Stay tuned for upcoming initiatives and partnerships that will drive cross-border collaboration, sustainable development, and economic growth.',
    comingSoonText:
      'Our first strategic projects are in development. They will be published here, tagged to the commission that leads them.',
    pillars: [
      { title: 'Strategic Focus', description: 'Projects aligned with the four commissions and both national agendas' },
      { title: 'Multi-Stakeholder', description: 'Built with business, public institutions and knowledge partners together' },
      { title: 'Measurable Impact', description: 'Defined outcomes, reported to the board and to members' },
    ],
    ctaTitle: 'Propose a Project',
    ctaText: 'If you are developing a cross-border initiative, we would like to hear about it.',
  },
  legal: {
    authoritativeTitle: 'Authoritative version',
    authoritativeText:
      'This document is provided in English, Dutch and French for convenience. In the event of any discrepancy between versions, the English text prevails as the authoritative legal reference.',
    lastUpdated: 'Last updated',
  },
  insights: {
    galleryTitle: 'Gallery',
    linkedinTitle: 'From our LinkedIn',
    linkedinIntro: 'The latest posts from the CDD Pays-Bas company page.',
    linkedinFollow: 'Follow us on LinkedIn',
    linkedinView: 'View on LinkedIn',
    linkedinEmpty:
      'Our latest updates are posted on LinkedIn. Follow the page to see them as they go out.',
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
    commissions: 'Commissies',
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
    allCommissions: 'Alle commissies',
    whyJoin: 'Waarom lid worden',
    tiersAndDues: 'Lidmaatschap & contributie',
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
    annualComingSoon: 'Binnenkort',
    annualNote:
      'Er wordt een jaartarief voorbereid — één betaling in plaats van twaalf, met een korting op het maandtotaal. Het maandlidmaatschap is nu al beschikbaar en voor bestaande leden verandert er niets zodra het jaartarief ingaat.',
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
    perMonth: 'per maand',
    applyTitle: 'Lidmaatschap aanvragen',
    applyIntro:
      'Drie verplichte velden. Wij beoordelen elke aanvraag en reageren persoonlijk.',
    applyBackLink: 'Lidmaatschap',
    yourDetails: 'Uw gegevens',
    fullName: 'Volledige naam',
    emailLabel: 'E-mailadres',
    organisationLabel: 'Organisatie',
    roleLabel: 'Uw functie',
    commissionLabel: 'Commissie waaraan u wilt deelnemen',
    commissionNone: 'Voorlopig geen voorkeur',
    messageLabel: 'Iets wat wij zouden moeten weten',
    optional: '(optioneel)',
    reviewManual:
      'Met het verzenden leggen wij uw aanvraag vast. CDD Pays-Bas bevestigt uw lidmaatschap en regelt de betaling rechtstreeks met u — online betalen wordt momenteel ingericht en er wordt nu niets afgeschreven.',
    reviewLive:
      'U wordt doorgestuurd naar onze betaalprovider om uw lidmaatschap af te ronden. Wij accepteren',
    privacyLine: 'Uw gegevens worden verwerkt conform onze',
    privacyLink: 'privacyverklaring',
    submit: 'Aanvraag versturen',
    submitting: 'Bezig met versturen…',
    receivedTitle: 'Aanvraag ontvangen',
    receivedText:
      'Dank u wel. Uw aanvraag voor het lidmaatschap is vastgelegd onder kenmerk',
    receivedReference: 'kenmerk',
    receivedFollowUp:
      'Een bestuurslid beoordeelt elke aanvraag persoonlijk. Wij nemen binnenkort contact met u op om uw lidmaatschap te bevestigen en de betaling te regelen.',
    backHome: 'Terug naar de startpagina',
    duesTitle: 'Lidmaatschap & contributie',
    duesSingleIntro:
      'Eén lidmaatschap, één prijs. Voor € 25 per maand krijgt u volledige toegang tot het netwerk, de evenementen en de commissies — er zijn geen categorieën om af te wegen en er wordt niets achtergehouden voor een duurdere variant.',
    whatsIncluded: 'Wat is inbegrepen',
    cancelAnytime: 'Maandelijkse facturering. Op elk moment opzegbaar.',
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
    placesLeft: 'plaatsen beschikbaar',
    full: 'Volgeboekt',
    addToCalendar: 'Aan agenda toevoegen',
    rsvpPending:
      'Wij konden ons aanmeldsysteem zojuist niet bereiken, waardoor uw aanmelding niet automatisch is vastgelegd. Mail ons op contact@cddpaysbas.nl, dan schrijven wij u handmatig in.',
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
    heroCarouselLabel: 'Uitgelicht bij CDD Pays-Bas',
    heroPause: 'Automatisch wisselen van dia’s pauzeren',
    heroPlay: 'Automatisch wisselen van dia’s hervatten',
    heroPrev: 'Vorige dia',
    heroNext: 'Volgende dia',
    heroSlideOf: 'Dia {n} van {total}',
    heroGoToSlide: 'Toon dia {n}',
    newsEyebrow: 'Nieuws & media',
    newsTitle: 'Waar wij aan hebben gewerkt',
    newsText:
      'Recente artikelen, briefings en berichten van CDD Pays-Bas en onze LinkedIn-pagina.',
    newsCarouselLabel: 'Recent nieuws en media',
    newsPrev: 'Vorige items',
    newsNext: 'Volgende items',
    newsRead: 'Lezen',
    newsOnLinkedIn: 'Op LinkedIn',
    becomeMember: 'Word lid',
    proofAdvisors: 'senior adviseurs',
    proofCommissions: 'vaste commissies',
    proofEvents: 'gehouden evenementen',
    proofMarkets: 'verbonden markten',
    spotlightEyebrow: 'Raad van advies',
    spotlightTitle: 'Tot wie u toegang krijgt',
    spotlightAll: 'Maak kennis met de raad van advies',
    insightsAll: 'Alle insights',
    joinBandTitle: 'Word lid van CDD Pays-Bas',
    joinBandText:
      'Eén lidmaatschap, € 25 per maand: alle evenementen, een zetel in elke commissie en directe toegang tot onze senior adviseurs in Nederland en Marokko.',
    joinBandPrimary: 'Word lid',
    joinBandSecondary: 'Wat het lidmaatschap omvat',
    whatWeDo: 'Wat wij doen',
    focusTitle: 'Onze vier commissies',
    focusText:
      'Wij creëren impact in sleutelsectoren die de toekomst van internationaal ondernemen vormgeven',
    exploreAll: 'Bekijk alle commissies',
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
  },
  commissionsIndex: {
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
    chairTitle: 'Voorzitter van deze commissie',
    chairPending: 'Voorzitter nog te benoemen',
    chairPendingText:
      'Het bestuur benoemt elke voorzitter voor twee jaar uit de raad van advies. Deze zetel is nog niet ingevuld, en dat zeggen wij liever dan iemand te noemen die daar nog niet mee heeft ingestemd.',
    chairProfile: 'Bekijk profiel',
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
  about: {
    imageCaption:
      'Vervang door fotografie van een bijeenkomst of missie van CDD Pays-Bas.',
    eyebrow: 'Over ons',
    title: 'Over CDD Pays-Bas',
    subtitle:
      'Een internationaal platform dat besluitvormers verbindt en samenwerking bevordert tussen Europa, Marokko en Afrika.',
    moroccoHeading: 'Onze relatie met CDD Marokko',
    moroccoDefault:
      'CDD Pays-Bas werkt nauw samen met Club des Dirigeants (CDD), opgericht in Marokko, rond een gedeelde missie om bestuurders in beide markten te verbinden.',
    transparencyLine: 'Onze statutaire gegevens en governancedocumenten zijn gepubliceerd op onze',
    transparencyLink: 'transparantiepagina',
    whoWeAre: 'Wie wij zijn',
    whoWeAreP1Lead: 'CDD Pays-Bas',
    whoWeAreP1:
      '(Club des Dirigeants – Nederland) is een internationaal platform voor ondernemerschap en leiderschap dat fungeert als strategische brug tussen het Europese, Marokkaanse en Afrikaanse ecosysteem.',
    whoWeAreP2Before: 'Wij brengen',
    whoWeAreP2Emphasis:
      'ondernemers en bestuurders, investeerders, ervaren experts, publieke instellingen en internationale organisaties',
    whoWeAreP2After:
      'bijeen om economische diplomatie, innovatie en duurzame ontwikkeling te bevorderen.',
    whoWeAreP3:
      'Ons netwerk omvat CEO’s, ondernemers, projectontwikkelaars, beleidsmakers, diasporaleiders en kennispartners die zich inzetten voor grensoverschrijdende impact in sectoren als energietransitie, infrastructuur, technologie, financiën, vastgoed en onderwijs.',
    missionText:
      'Ondernemers en besluitvormers versterken door strategische verbindingen te leggen, grensoverschrijdende samenwerking te faciliteren en duurzame, inclusieve economische ontwikkeling te bevorderen in Europa, Marokko en Afrika — via gerichte dialoog, kennisdeling en werkbare partnerschappen.',
    visionText:
      'Hét internationale platform zijn dat de Europese, Marokkaanse en Afrikaanse zakelijke ecosystemen verbindt, erkend om samenwerkingen met impact in strategische sectoren als energietransitie, innovatie, infrastructuur en financiën, met leiderschap, goed bestuur en duurzame groei als leidraad.',
    whatWeDoSubtitle:
      'CDD Pays-Bas treedt op als verbinder, facilitator en strategisch partner langs vier kernpijlers',
    whoWeServeSubtitle:
      'Ons platform verbindt uiteenlopende partijen die zich inzetten voor grensoverschrijdende impact',
    whyEyebrow: 'Waarom voor ons kiezen',
    ourMission: 'Onze missie',
    ourVision: 'Onze visie',
    whatWeDo: 'Wat wij doen',
    whatWeDoItems: [
      { title: 'Economische diplomatie', description: 'Zakelijke belangen vertegenwoordigen en behartigen in Europa, Marokko en Afrika' },
      { title: 'Strategische partnerschappen', description: 'Waardevolle verbindingen faciliteren tussen bedrijven, investeerders en instellingen' },
      { title: 'Kennisuitwisseling', description: 'Organiseren van thought leadership-evenementen, rondetafelgesprekken en executive programma\'s' },
      { title: 'Projectontwikkeling', description: 'Ondersteunen van grensoverschrijdende initiatieven in energie, infrastructuur en innovatie' },
    ],
    whoWeServe: 'Voor wie wij werken',
    stakeholders: 'Onze stakeholders',
    serveItems: [
      'Bestuurders & CEO\'s',
      'Investeerders & projectontwikkelaars',
      'Publieke instellingen & beleidsmakers',
      'Ondernemers & innovators',
      'Senior adviseurs & experts',
      'Kennis- & onderzoekspartners',
      'Diasporanetwerken',
      'Internationale organisaties',
    ],
    whyTitle: 'Waarom CDD Pays-Bas',
    whyItems: [
      { title: 'Grensoverschrijdend netwerk', description: 'Toegang tot een gescreend ecosysteem in Europa, Marokko en Afrika met institutioneel bereik' },
      { title: 'Geloofwaardigheid & vertrouwen', description: 'Een governance-gedreven organisatie met bij naam genoemde adviseurs en gepubliceerde statuten' },
      { title: 'Impactgericht', description: 'Gericht op meetbare resultaten in plaats van louter zichtbaarheid' },
    ],
  },
  leadership: {
    eyebrow: 'Leiderschap',
    title: 'Leiderschap & governance',
    subtitle:
      'Ervaren bestuurders die CDD Pays-Bas leiden met toewijding aan transparantie, verantwoording en meetbare impact.',
    president: 'Voorzitter',
    presidentRole: 'Voorzitter – CDD Pays-Bas',
    presidentBio1:
      'Nouraddine Gribi is voorzitter van CDD Pays-Bas en een strategisch leider die zich inzet voor sterkere economische en institutionele banden tussen Marokko en Nederland. Met ruime ervaring in bedrijfsontwikkeling, governance en internationale partnerschappen brengt hij samenwerkingen met grote impact tot stand tussen publieke en private partijen.',
    presidentBio2:
      'Hij zet zich actief in voor ondernemerschap, inclusie en duurzame groei binnen het Marokkaans-Nederlandse ecosysteem. Onder zijn leiding blijft CDD Pays-Bas bruggen slaan, kansen creëren en meetbare waarde leveren voor leden en partners.',
    contactLabel: 'Contact',
    highlights: [
      { title: 'Leiderschap & governance', description: 'Strategische visie en organisatorische kwaliteit aanjagen' },
      { title: 'Grensoverschrijdende samenwerking', description: 'Partnerschappen en samenwerking Nederland ↔ Marokko' },
      { title: 'Ondernemerschap & ecosysteemontwikkeling', description: 'Ondernemers ondersteunen en innovatie stimuleren' },
      { title: 'Institutionele geloofwaardigheid', description: 'Betrouwbare internationale partnerschappen opbouwen' },
    ],
    founderRole: 'Oprichter & voorzitter – CDD',
    founderBio1:
      'Driss DRIF is oprichter en voorzitter van CDD (Club des Dirigeants), opgericht vanuit de visie om leiders te verbinden, strategische dialoog te bevorderen en sterke bruggen te bouwen tussen Marokko en internationale ecosystemen.',
    founderBio2:
      'Onder zijn leiding is CDD uitgegroeid tot een groeiend netwerk van besluitvormers en adviseurs uit uiteenlopende sectoren, dat samenwerkingen met impact tot stand brengt tussen publieke en private partijen. Zijn initiatief legde de basis voor CDD Pays-Bas, dat deze lijn in Nederland voortzet.',
    continuityEyebrow: 'Continuïteit in leiderschap',
    continuityTitle: 'Een gedeelde visie',
    continuitySubtitle:
      'Verenigd in de inzet om leiders te verbinden, samenwerking te bevorderen en bruggen te bouwen tussen Nederland, Marokko en Afrika.',
    fromVisionTitle: 'Van visie naar werkelijkheid',
    fromVisionText:
      'Driss DRIF richtte CDD op vanuit de visie om leiders te verbinden en strategische dialoog te bevorderen. Nouraddine Gribi zet deze lijn voort als voorzitter van CDD Pays-Bas en versterkt de banden tussen Nederland, Marokko en Afrika via partnerschappen met impact en duurzame ontwikkeling.',
    boardBios: {
      'Nouraddine Gribi': {
        role: 'Voorzitter',
        bio: 'Leidt CDD Pays-Bas vanuit een strategische visie gericht op sterkere economische bruggen tussen Marokko en Nederland. Stuurt op partnerschappen, governance en initiatieven met duurzame impact.',
      },
      'Ahmed Rahmouni': {
        role: 'Penningmeester',
        bio: 'Internationaal zakelijk professional met sterke financiële en commerciële expertise. Ondersteunt CDD Pays-Bas met strategisch financieel toezicht en grensoverschrijdend zakelijk inzicht.',
      },
    },
    ctaTitle: 'Wilt u bijdragen?',
    ctaText:
      'CDD Pays-Bas verwelkomt ervaren experts en adviseurs die onze inzet voor grensoverschrijdende samenwerking en duurzame ontwikkeling delen.',
    ctaButton: 'Neem contact op',
    founder: 'Oprichter',
    boardEyebrow: 'Governance',
    boardTitle: 'Het bestuur',
    boardIntro:
      'CDD Pays-Bas wordt bestuurd door het statutaire bestuur, dat losstaat van de Raad van Adviseurs met senior experts die de organisatie adviseren.',
    remuneration: 'Vergoeding',
    remunerationText:
      'Bestuursleden zijn onbezoldigd. Kosten die namens de organisatie worden gemaakt, worden op declaratiebasis vergoed.',
    statutoryDetails: 'Statutaire gegevens',
    statutoryText:
      'Rechtsvorm, KvK en RSIN, samen met onze statuten, beleidsplan, jaarverslag en financiële verantwoording, zijn gepubliceerd op onze',
    transparencyLink: 'transparantiepagina',
    governanceEyebrow: 'Governance',
    governanceTitle: 'Governanceprincipes',
    governanceText: 'CDD Pays-Bas werkt transparant, verantwoordelijk en met strategische focus',
    principles: [
      { title: 'Transparantie', description: 'Open communicatie en heldere besluitvormingsprocessen' },
      { title: 'Verantwoording', description: 'Verantwoord beheer en meetbare resultaten' },
      { title: 'Inclusie', description: 'Diverse perspectieven en evenwichtige vertegenwoordiging' },
      { title: 'Excellentie', description: 'Hoge standaarden in al onze activiteiten en partnerschappen' },
    ],
    teamEyebrow: 'Ons team',
    teamTitle: 'Ervaren leiderschap',
    teamText:
      'CDD Pays-Bas wordt geleid door een vooraanstaand bestuur en adviesteam met bewezen staat van dienst in internationaal ondernemen, publiek beleid en strategische ontwikkeling.',
    visionCaption: 'Van visie naar werkelijkheid',
    teamCaption: 'Ervaren leiderschap',
  },
  advisorsPage: {
    eyebrow: 'Raad van advies',
    introBefore:
      'ervaren adviseurs verdeeld over {commissions} commissies, die vakinhoudelijke expertise inbrengen in het werk dat CDD Pays-Bas samenbrengt.',
    introAfter: 'Ons statutair bestuur wordt apart gepresenteerd op de',
    leadershipLink: 'pagina Leiderschap',
    joinTitle: 'Sluit u aan bij de raad van advies',
    joinText:
      'CDD Pays-Bas verwelkomt ervaren experts die onze inzet delen voor duurzame banden tussen Nederland en Marokko.',
  },
  contact: {
    sendFailed:
      'Wij konden ons systeem zojuist niet bereiken, waardoor uw bericht mogelijk niet is vastgelegd. Mail ons op contact@cddpaysbas.nl, dan komt uw bericht zeker aan.',
    eyebrow: 'Contact',
    title: 'Neem contact op',
    subtitle:
      'Of u nu een partnerschap, een lidmaatschap of een concreet project verkent — wij horen graag van u.',
    heroTitle: 'Contact & samenwerking',
    heroSubtitle:
      'Neem contact op met CDD Pays-Bas om partnerschappen te verkennen, u bij ons netwerk aan te sluiten of deel te nemen aan grensoverschrijdende initiatieven.',
    introText:
      'Wij verwelkomen vragen van ondernemers en bestuurders, investeerders, instellingen en organisaties met belangstelling voor grensoverschrijdende samenwerking.',
    labelLocation: 'Locatie',
    labelEmail: 'E-mail',
    labelPhone: 'Telefoon',
    labelLinkedin: 'LinkedIn',
    phone: 'Telefoonnummer',
    phonePlaceholder: '+31 XX XXX XXXX',
    emailPlaceholder: 'uw.email@voorbeeld.nl',
    messagePlaceholder: 'Vertel ons over uw vraag of uw interesse in samenwerking...',
    hours: '9:00 – 18:00 uur CET',
    whoShouldContactSubtitle:
      'CDD Pays-Bas staat open voor contact met uiteenlopende belanghebbenden',
    getInTouch: 'Neem contact op',
    sendMessage: 'Stuur ons een bericht',
    sent: 'Bericht verzonden!',
    sentText: 'Dank voor uw bericht. Wij reageren zo spoedig mogelijk.',
    name: 'Naam',
    email: 'E-mailadres',
    organisation: 'Organisatie',
    subject: 'Onderwerp',
    message: 'Bericht',
    areaOfInterest: 'Interessegebied',
    selectOption: 'Maak een keuze',
    submit: 'Bericht versturen',
    namePlaceholder: 'Uw naam',
    orgPlaceholder: 'Bedrijf of instelling',
    subjectPlaceholder: 'Korte omschrijving',
    officeHours: 'Openingstijden',
    weekdays: 'Maandag - vrijdag',
    location: 'Rotterdam & Amsterdam',
    whoShouldContact: 'Wie kan contact opnemen?',
    interests: [
      'Algemene vraag',
      'Partnerschapsmogelijkheden',
      'Investering & projectfinanciering',
      'Deelname aan handelsmissie',
      'Advies & expertbijdrage',
      'Samenwerking bij evenementen',
      'Media & pers',
    ],
    audiences: [
      { title: 'Bestuurders & CEO\'s', description: 'Verken strategische partnerschappen en grensoverschrijdende kansen' },
      { title: 'Investeerders', description: 'Krijg toegang tot gescreende projecten en investeringsmogelijkheden' },
      { title: 'Projectontwikkelaars', description: 'Presenteer projecten aan ons netwerk van partners en investeerders' },
      { title: 'Overheid & instellingen', description: 'Werk samen aan economische diplomatie en beleidsinitiatieven' },
      { title: 'Kennispartners', description: 'Deel expertise en neem deel in een adviserende rol' },
      { title: 'Media & pers', description: 'Vraag interviews, informatie of verslaglegging van evenementen aan' },
    ],
    privacyTitle: 'Privacy & gegevensbescherming',
    privacyText:
      'Uw gegevens worden verwerkt conform de Europese regelgeving voor gegevensbescherming. Wij gebruiken uw contactgegevens uitsluitend om op uw vraag te reageren en kunnen u bij interesse toevoegen aan onze mailinglijst. U kunt zich op elk moment afmelden.',
    privacyLinkIntro: 'Lees onze',
    privacyLinkText: 'privacyverklaring',
    privacyLinkOutro:
      'voor alle details over wat wij verzamelen, waarom, hoe lang wij het bewaren en welke rechten u heeft.',
    country: 'Nederland',
  },
  partnerships: {
    eyebrow: 'Partnerschappen',
    title: 'Word onze partner',
    subtitle:
      'CDD Pays-Bas bouwt duurzame relaties met organisaties die onze inzet voor grensoverschrijdende samenwerking delen.',
    caption: 'Duurzame institutionele relaties opbouwen',
    heroTitle: 'Partnerschappen & ecosysteem',
    heroSubtitle:
      'CDD Pays-Bas brengt een divers ecosysteem van partners samen die zich inzetten voor grensoverschrijdende samenwerking, innovatie en duurzame ontwikkeling.',
    ecosystemTitle: 'Een ecosysteem van vele belanghebbenden',
    ecosystemP1:
      'Ons partnernetwerk beslaat de publieke en private sector en verbindt organisaties die onze inzet voor economische diplomatie, strategische samenwerking en impact delen.',
    ecosystemP2:
      'Door uiteenlopende partijen samen te brengen — van bedrijven en investeerders tot overheidsinstanties en kennisinstellingen — creëren wij een dynamisch platform voor betekenisvolle dialoog, projectontwikkeling en wederzijdse groei.',
    categoriesTitle: 'Ons partnerecosysteem',
    categoriesSubtitle:
      'Wij werken samen met zes hoofdcategorieën partners, elk met een eigen waarde voor ons netwerk',
    benefitsSubtitle:
      'Partners van CDD Pays-Bas krijgen toegang tot een getoetst netwerk en strategische kansen',
    geoTitle: 'Geografisch bereik',
    geoSubtitle: 'Ons partnernetwerk beslaat drie strategische regio’s',
    typeExamples: [
      ['Energiebedrijven', 'Infrastructuurbedrijven', 'Technologiekoplopers', 'Financiële instellingen'],
      ['Participatiefondsen', 'Ontwikkelingsbanken', 'Family offices', 'Durfkapitaal'],
      ['Overheidsinstanties', 'Ambassades & handelskantoren', 'EU-instellingen', 'Internationale organisaties'],
      ['Universiteiten', 'Onderzoekscentra', 'Denktanks', 'Beroepsverenigingen'],
      ['Brancheverenigingen', 'Professionele netwerken', 'Gemeenschapsorganisaties', 'Alumniverenigingen'],
      ['Kamers van koophandel', 'Businessclubs', 'Sectororganisaties', 'Innovatiehubs'],
    ],
    regions: [
      {
        name: 'Europa',
        description:
          'Een sterke aanwezigheid in Nederland, met verbindingen naar EU-lidstaten, instellingen en zakelijke netwerken.',
        bullets: ['Bedrijfsclusters & innovatiehubs', 'EU-instellingen & agentschappen', 'Financiële & investeringsnetwerken'],
      },
      {
        name: 'Marokko',
        description:
          'Diepe verbindingen met het Marokkaanse bedrijfsleven, overheidspartijen en ontwikkelingsinstellingen.',
        bullets: ['Leiders uit publieke & private sector', 'Strategische infrastructuurprojecten', 'Agentschappen voor economische ontwikkeling'],
      },
      {
        name: 'Afrika',
        description:
          'Een groeiend netwerk in Sub-Saharaans Afrika, gericht op handel, investeringen en ontwikkelingspartnerschappen.',
        bullets: ['Regionale economische gemeenschappen', 'Ontwikkelingsbanken', 'Sectorspecifieke partnerschappen'],
      },
    ],
    typesTitle: 'Soorten partnerschap',
    types: [
      { title: 'Corporate partners', description: 'Toonaangevende bedrijven en multinationals die zich inzetten voor grensoverschrijdende groei en innovatie' },
      { title: 'Investeringspartners', description: 'Participatiemaatschappijen, family offices en institutionele investeerders achter strategische investeringen' },
      { title: 'Institutionele partners', description: 'Overheidsinstanties, diplomatieke posten en internationale organisaties' },
      { title: 'Kennispartners', description: 'Universiteiten, onderzoeksinstituten en denktanks die expertise inbrengen' },
      { title: 'Diasporanetwerken', description: 'Gemeenschapsorganisaties, alumniverenigingen en beroepsverenigingen' },
      { title: 'Brancheorganisaties', description: 'Businessclubs, kamers van koophandel en sectororganisaties' },
    ],
    benefitsTitle: 'Wat een partnerschap oplevert',
    benefits: [
      { title: 'Toegang tot netwerken', description: 'Kom in contact met besluitvormers, investeerders en experts in Europa, Marokko en Afrika' },
      { title: 'Kennisuitwisseling', description: 'Krijg toegang tot inzichten, onderzoek en expertise die relevant zijn voor uw sector en regio' },
      { title: 'Gezamenlijke initiatieven', description: 'Neem deel aan hoogwaardige missies, projecten en gezamenlijke initiatieven' },
    ],
    ctaTitle: 'Word partner',
    ctaText: 'Vertel ons over uw organisatie en wat u samen met CDD Pays-Bas wilt opbouwen.',
    ctaButton: 'Word onze partner',
  },
  projects: {
    eyebrow: 'Projecten',
    title: 'Strategische projecten',
    subtitle: 'Grensoverschrijdende initiatieven ontwikkeld met onze leden en partners.',
    comingSoon: 'Binnenkort',
    announcement:
      'Onze strategische projecten worden binnenkort aangekondigd. Houd deze pagina in de gaten voor komende initiatieven en partnerschappen die grensoverschrijdende samenwerking, duurzame ontwikkeling en economische groei aanjagen.',
    comingSoonText:
      'Onze eerste strategische projecten zijn in ontwikkeling. Zij worden hier gepubliceerd, gekoppeld aan de commissie die ze leidt.',
    pillars: [
      { title: 'Strategische focus', description: 'Projecten die aansluiten bij de vier commissies en de agenda van beide landen' },
      { title: 'Meerdere partijen', description: 'Opgebouwd met bedrijfsleven, publieke instellingen en kennispartners samen' },
      { title: 'Meetbare impact', description: 'Vastgestelde resultaten, gerapporteerd aan het bestuur en aan de leden' },
    ],
    ctaTitle: 'Dien een project in',
    ctaText: 'Ontwikkelt u een grensoverschrijdend initiatief? Wij horen er graag over.',
  },
  legal: {
    authoritativeTitle: 'Authentieke versie',
    authoritativeText:
      'Dit document wordt voor het gemak in het Engels, Nederlands en Frans aangeboden. Bij verschillen tussen de versies prevaleert de Engelse tekst als authentieke juridische referentie.',
    lastUpdated: 'Laatst bijgewerkt',
  },
  insights: {
    galleryTitle: 'Fotogalerij',
    linkedinTitle: 'Van onze LinkedIn',
    linkedinIntro: 'De nieuwste berichten van de bedrijfspagina van CDD Pays-Bas.',
    linkedinFollow: 'Volg ons op LinkedIn',
    linkedinView: 'Bekijken op LinkedIn',
    linkedinEmpty:
      'Onze meest recente updates plaatsen wij op LinkedIn. Volg de pagina om ze direct te zien.',
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
    commissions: 'Commissions',
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
    allCommissions: 'Toutes les commissions',
    whyJoin: 'Pourquoi adhérer',
    tiersAndDues: 'Adhésion & cotisation',
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
    annualComingSoon: 'Prochainement',
    annualNote:
      "Un tarif annuel est en préparation : un seul paiement au lieu de douze, avec une économie sur le total mensuel. L'adhésion mensuelle est déjà disponible et rien ne change pour les membres actuels lors de son lancement.",
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
    perMonth: 'par mois',
    applyTitle: 'Demander une adhésion',
    applyIntro:
      'Trois champs obligatoires. Nous examinons chaque demande et répondons personnellement.',
    applyBackLink: 'Adhésion',
    yourDetails: 'Vos coordonnées',
    fullName: 'Nom complet',
    emailLabel: 'E-mail',
    organisationLabel: 'Organisation',
    roleLabel: 'Votre fonction',
    commissionLabel: 'Commission que vous souhaitez rejoindre',
    commissionNone: 'Pas de préférence pour le moment',
    messageLabel: 'Ce que vous souhaitez nous faire savoir',
    optional: '(facultatif)',
    reviewManual:
      "L'envoi enregistre votre demande. CDD Pays-Bas confirmera votre adhésion et organisera le paiement directement avec vous — le paiement en ligne est en cours de mise en place et aucun montant n'est prélevé maintenant.",
    reviewLive:
      'Vous serez redirigé vers notre prestataire de paiement pour finaliser votre adhésion. Nous acceptons',
    privacyLine: 'Vos données sont traitées conformément à notre',
    privacyLink: 'déclaration de confidentialité',
    submit: 'Envoyer la demande',
    submitting: 'Envoi en cours…',
    receivedTitle: 'Demande reçue',
    receivedText: "Merci. Votre demande d'adhésion a été enregistrée sous la référence",
    receivedReference: 'référence',
    receivedFollowUp:
      "Un membre du conseil examine personnellement chaque demande. Nous vous contacterons prochainement pour confirmer votre adhésion et organiser le paiement.",
    backHome: "Retour à l'accueil",
    duesTitle: 'Adhésion & cotisation',
    duesSingleIntro:
      "Une seule adhésion, un seul tarif. Pour 25 € par mois, vous accédez pleinement au réseau, aux événements et aux commissions — aucune catégorie à comparer, rien qui soit réservé à une formule supérieure.",
    whatsIncluded: 'Ce qui est inclus',
    cancelAnytime: 'Facturation mensuelle. Résiliable à tout moment.',
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
    placesLeft: 'places restantes',
    full: 'Complet',
    addToCalendar: "Ajouter à l'agenda",
    rsvpPending:
      "Nous n'avons pas pu joindre notre système d'inscription à l'instant ; votre inscription n'a donc pas été enregistrée automatiquement. Écrivez-nous à contact@cddpaysbas.nl et nous vous inscrirons manuellement.",
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
    heroCarouselLabel: 'À la une chez CDD Pays-Bas',
    heroPause: 'Mettre en pause le défilement automatique',
    heroPlay: 'Reprendre le défilement automatique',
    heroPrev: 'Diapositive précédente',
    heroNext: 'Diapositive suivante',
    heroSlideOf: 'Diapositive {n} sur {total}',
    heroGoToSlide: 'Afficher la diapositive {n}',
    newsEyebrow: 'Actualités & médias',
    newsTitle: 'Ce sur quoi nous avons travaillé',
    newsText:
      'Articles récents, briefings et publications de CDD Pays-Bas et de notre page LinkedIn.',
    newsCarouselLabel: 'Actualités et médias récents',
    newsPrev: 'Éléments précédents',
    newsNext: 'Éléments suivants',
    newsRead: 'Lire',
    newsOnLinkedIn: 'Sur LinkedIn',
    becomeMember: 'Devenir membre',
    proofAdvisors: 'conseillers seniors',
    proofCommissions: 'commissions permanentes',
    proofEvents: 'événements organisés',
    proofMarkets: 'marchés reliés',
    spotlightEyebrow: 'Conseil consultatif',
    spotlightTitle: 'Les personnes auxquelles vous accédez',
    spotlightAll: 'Découvrir le conseil consultatif',
    insightsAll: 'Tous les insights',
    joinBandTitle: 'Rejoignez CDD Pays-Bas',
    joinBandText:
      "Une seule adhésion, 25 € par mois : tous les événements, un siège dans la commission de votre choix et un accès direct à nos conseillers seniors aux Pays-Bas et au Maroc.",
    joinBandPrimary: 'Devenir membre',
    joinBandSecondary: "Ce que comprend l'adhésion",
    whatWeDo: 'Ce que nous faisons',
    focusTitle: 'Nos quatre commissions',
    focusText:
      "Nous créons de l'impact dans les secteurs clés qui façonnent l'avenir des affaires internationales",
    exploreAll: 'Découvrir toutes les commissions',
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
  },
  commissionsIndex: {
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
    chairTitle: 'Président de cette commission',
    chairPending: 'Président à nommer',
    chairPendingText:
      "Le conseil nomme chaque président pour deux ans parmi les membres du conseil consultatif. Ce siège n'est pas encore pourvu, et nous préférons le dire plutôt que de citer une personne qui n'a pas donné son accord.",
    chairProfile: 'Voir le profil',
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
  about: {
    imageCaption:
      "À remplacer par une photographie d'une rencontre ou d'une mission de CDD Pays-Bas.",
    eyebrow: 'À propos',
    title: 'À propos de CDD Pays-Bas',
    subtitle:
      "Une plateforme internationale qui relie les décideurs et favorise la collaboration entre l'Europe, le Maroc et l'Afrique.",
    moroccoHeading: 'Notre relation avec CDD Maroc',
    moroccoDefault:
      'CDD Pays-Bas travaille en étroit partenariat avec le Club des Dirigeants (CDD), fondé au Maroc, autour d’une mission commune : relier les dirigeants des deux marchés.',
    transparencyLine: 'Nos données statutaires et documents de gouvernance sont publiés sur notre',
    transparencyLink: 'page de transparence',
    whoWeAre: 'Qui nous sommes',
    whoWeAreP1Lead: 'CDD Pays-Bas',
    whoWeAreP1:
      "(Club des Dirigeants – Pays-Bas) est une plateforme internationale d'affaires et de leadership qui fait office de passerelle stratégique entre les écosystèmes européen, marocain et africain.",
    whoWeAreP2Before: 'Nous réunissons',
    whoWeAreP2Emphasis:
      "des dirigeants d'entreprise, des investisseurs, des experts confirmés, des institutions publiques et des organisations internationales",
    whoWeAreP2After:
      "afin de favoriser la diplomatie économique, l'innovation et le développement durable.",
    whoWeAreP3:
      "Notre réseau rassemble des PDG, des entrepreneurs, des porteurs de projets, des décideurs publics, des leaders de la diaspora et des partenaires de savoir engagés à produire un impact transfrontalier dans des secteurs tels que la transition énergétique, les infrastructures, la technologie, la finance, l'immobilier et l'éducation.",
    missionText:
      "Donner aux dirigeants et décideurs les moyens d'agir en créant des connexions stratégiques, en facilitant la collaboration transfrontalière et en promouvant un développement économique durable et inclusif en Europe, au Maroc et en Afrique, par le dialogue utile, le partage de connaissances et des partenariats concrets.",
    visionText:
      "Être la première plateforme internationale reliant les écosystèmes d'affaires européen, marocain et africain, reconnue pour des collaborations à fort impact dans des secteurs stratégiques tels que la transition énergétique, l'innovation, les infrastructures et la finance, tout en portant le leadership, la bonne gouvernance et la croissance durable.",
    whatWeDoSubtitle:
      'CDD Pays-Bas agit comme fédérateur, facilitateur et partenaire stratégique autour de quatre piliers',
    whoWeServeSubtitle:
      'Notre plateforme relie des acteurs divers engagés dans un impact transfrontalier',
    whyEyebrow: 'Pourquoi nous choisir',
    ourMission: 'Notre mission',
    ourVision: 'Notre vision',
    whatWeDo: 'Ce que nous faisons',
    whatWeDoItems: [
      { title: 'Diplomatie économique', description: "Représenter et défendre les intérêts économiques en Europe, au Maroc et en Afrique" },
      { title: 'Partenariats stratégiques', description: 'Faciliter des mises en relation à forte valeur entre entreprises, investisseurs et institutions' },
      { title: 'Échange de connaissances', description: "Organiser des événements de référence, des tables rondes et des programmes pour dirigeants" },
      { title: 'Développement de projets', description: "Soutenir des initiatives transfrontalières dans l'énergie, les infrastructures et l'innovation" },
    ],
    whoWeServe: 'À qui nous nous adressons',
    stakeholders: 'Nos parties prenantes',
    serveItems: [
      'Dirigeants & PDG',
      'Investisseurs & porteurs de projets',
      'Institutions publiques & décideurs politiques',
      'Entrepreneurs & innovateurs',
      'Conseillers seniors & experts',
      'Partenaires de savoir & de recherche',
      'Réseaux de la diaspora',
      'Organisations internationales',
    ],
    whyTitle: 'Pourquoi CDD Pays-Bas',
    whyItems: [
      { title: 'Réseau transfrontalier', description: "Accès à un écosystème sélectionné couvrant l'Europe, le Maroc et l'Afrique, avec une portée institutionnelle" },
      { title: 'Crédibilité & confiance', description: 'Une organisation guidée par sa gouvernance, avec des conseillers nommés et des statuts publiés' },
      { title: 'Orientée impact', description: 'Centrée sur des résultats mesurables plutôt que sur la seule visibilité' },
    ],
  },
  leadership: {
    eyebrow: 'Direction',
    title: 'Direction & gouvernance',
    subtitle:
      'Des dirigeants expérimentés qui guident CDD Pays-Bas avec un engagement de transparence, de responsabilité et d’impact mesurable.',
    president: 'Président',
    presidentRole: 'Président – CDD Pays-Bas',
    presidentBio1:
      "Nouraddine Gribi est le président de CDD Pays-Bas, dirigeant stratégique engagé à renforcer les liens économiques et institutionnels entre le Maroc et les Pays-Bas. Fort d'une longue expérience du développement des affaires, de la gouvernance et des partenariats internationaux, il impulse des collaborations à fort impact entre acteurs publics et privés.",
    presidentBio2:
      "Il promeut activement l'entrepreneuriat, l'inclusion et une croissance durable au sein de l'écosystème maroco-néerlandais. Sous sa direction, CDD Pays-Bas continue de bâtir des ponts, de créer des opportunités et d'apporter une valeur mesurable à ses membres et partenaires.",
    contactLabel: 'Contact',
    highlights: [
      { title: 'Leadership & gouvernance', description: "Porter la vision stratégique et l'excellence organisationnelle" },
      { title: 'Coopération transfrontalière', description: 'Partenariats et collaboration Pays-Bas ↔ Maroc' },
      { title: "Entrepreneuriat & développement de l'écosystème", description: "Accompagner les entrepreneurs et encourager l'innovation" },
      { title: 'Crédibilité institutionnelle', description: 'Construire des partenariats internationaux de confiance' },
    ],
    founderRole: 'Fondateur & président – CDD',
    founderBio1:
      "Driss DRIF est le fondateur et président du CDD (Club des Dirigeants), organisation créée avec la volonté de relier les dirigeants, de nourrir le dialogue stratégique et de bâtir des ponts solides entre le Maroc et les écosystèmes internationaux.",
    founderBio2:
      "Sous sa direction, le CDD est devenu un réseau grandissant de décideurs et de conseillers de tous secteurs, à l'origine de collaborations à fort impact entre acteurs publics et privés. Son initiative a posé les fondations de CDD Pays-Bas, qui prolonge cet héritage aux Pays-Bas.",
    continuityEyebrow: 'Continuité du leadership',
    continuityTitle: 'Une vision partagée',
    continuitySubtitle:
      'Unis par la volonté de relier les dirigeants, de favoriser la collaboration et de bâtir des ponts entre les Pays-Bas, le Maroc et l’Afrique.',
    fromVisionTitle: 'De la vision à la réalité',
    fromVisionText:
      "Driss DRIF a fondé le CDD avec l'ambition de relier les dirigeants et de nourrir le dialogue stratégique. Nouraddine Gribi poursuit cet héritage comme président de CDD Pays-Bas, en renforçant les liens entre les Pays-Bas, le Maroc et l'Afrique par des partenariats à fort impact et un développement durable.",
    boardBios: {
      'Nouraddine Gribi': {
        role: 'Président',
        bio: 'Dirige CDD Pays-Bas avec une vision stratégique centrée sur le renforcement des ponts économiques entre le Maroc et les Pays-Bas. Pilote les partenariats, la gouvernance et les initiatives à impact durable.',
      },
      'Ahmed Rahmouni': {
        role: 'Trésorier',
        bio: "Professionnel du commerce international doté d'une solide expertise financière et commerciale. Il appuie CDD Pays-Bas par une supervision financière stratégique et une connaissance fine des affaires transfrontalières.",
      },
    },
    ctaTitle: 'Envie de contribuer ?',
    ctaText:
      'CDD Pays-Bas accueille les experts et conseillers confirmés qui partagent son engagement pour la collaboration transfrontalière et le développement durable.',
    ctaButton: 'Nous contacter',
    founder: 'Fondateur',
    boardEyebrow: 'Gouvernance',
    boardTitle: 'Le conseil',
    boardIntro:
      'CDD Pays-Bas est dirigé par son conseil statutaire, distinct du Conseil consultatif composé d’experts seniors qui conseillent l’organisation.',
    remuneration: 'Rémunération',
    remunerationText:
      "Les membres du conseil exercent bénévolement. Les frais engagés pour le compte de l'organisation sont remboursés sur justificatif.",
    statutoryDetails: 'Données statutaires',
    statutoryText:
      'La forme juridique, le KvK et le RSIN, ainsi que nos statuts, plan de politique, rapport annuel et compte rendu financier, sont publiés sur notre',
    transparencyLink: 'page de transparence',
    governanceEyebrow: 'Gouvernance',
    governanceTitle: 'Principes de gouvernance',
    governanceText: 'CDD Pays-Bas agit avec transparence, responsabilité et une orientation stratégique',
    principles: [
      { title: 'Transparence', description: 'Une communication ouverte et des processus de décision clairs' },
      { title: 'Responsabilité', description: 'Une gestion responsable et des résultats mesurables' },
      { title: 'Inclusion', description: 'Des perspectives diverses et une représentation équitable' },
      { title: 'Excellence', description: 'Des standards élevés dans toutes nos activités et partenariats' },
    ],
    teamEyebrow: 'Notre équipe',
    teamTitle: 'Une direction expérimentée',
    teamText:
      "CDD Pays-Bas est guidé par un conseil et une équipe consultative reconnus, aux parcours éprouvés dans les affaires internationales, les politiques publiques et le développement stratégique.",
    visionCaption: 'De la vision à la réalité',
    teamCaption: 'Une direction expérimentée',
  },
  advisorsPage: {
    eyebrow: 'Conseil consultatif',
    introBefore:
      "conseillers expérimentés répartis sur {commissions} commissions, qui apportent leur expertise sectorielle aux travaux réunis par CDD Pays-Bas.",
    introAfter: 'Notre conseil statutaire est présenté séparément sur la',
    leadershipLink: 'page Leadership',
    joinTitle: 'Rejoignez le conseil consultatif',
    joinText:
      "CDD Pays-Bas accueille les experts confirmés qui partagent son engagement à bâtir des liens durables entre les Pays-Bas et le Maroc.",
  },
  contact: {
    sendFailed:
      "Nous n'avons pas pu joindre notre système à l'instant ; votre message n'a peut-être pas été enregistré. Écrivez-nous à contact@cddpaysbas.nl pour qu'il nous parvienne à coup sûr.",
    eyebrow: 'Contact',
    title: 'Nous contacter',
    subtitle:
      "Que vous exploriez un partenariat, une adhésion ou un projet précis, nous serions heureux d'avoir de vos nouvelles.",
    heroTitle: 'Contact & collaboration',
    heroSubtitle:
      'Contactez CDD Pays-Bas pour explorer des partenariats, rejoindre notre réseau ou participer à des initiatives transfrontalières.',
    introText:
      "Nous accueillons les demandes des dirigeants d'entreprise, des investisseurs, des institutions et des organisations intéressés par la collaboration transfrontalière.",
    labelLocation: 'Localisation',
    labelEmail: 'E-mail',
    labelPhone: 'Téléphone',
    labelLinkedin: 'LinkedIn',
    phone: 'Numéro de téléphone',
    phonePlaceholder: '+31 XX XXX XXXX',
    emailPlaceholder: 'votre.email@exemple.com',
    messagePlaceholder: 'Parlez-nous de votre demande ou de votre intérêt pour une collaboration...',
    hours: '9h00 – 18h00 CET',
    whoShouldContactSubtitle:
      'CDD Pays-Bas est ouvert aux échanges avec des parties prenantes de tous horizons',
    getInTouch: 'Nous contacter',
    sendMessage: 'Envoyez-nous un message',
    sent: 'Message envoyé !',
    sentText: 'Merci de nous avoir écrit. Nous vous répondrons dans les meilleurs délais.',
    name: 'Nom',
    email: 'E-mail',
    organisation: 'Organisation',
    subject: 'Objet',
    message: 'Message',
    areaOfInterest: "Domaine d'intérêt",
    selectOption: 'Sélectionnez une option',
    submit: 'Envoyer le message',
    namePlaceholder: 'Votre nom',
    orgPlaceholder: 'Entreprise ou institution',
    subjectPlaceholder: 'Objet en quelques mots',
    officeHours: "Heures d'ouverture",
    weekdays: 'Lundi - vendredi',
    location: 'Rotterdam & Amsterdam',
    whoShouldContact: 'Qui peut nous contacter ?',
    interests: [
      'Demande générale',
      'Opportunités de partenariat',
      'Investissement & financement de projets',
      "Participation à une délégation d'affaires",
      'Conseil & contribution d’expert',
      'Collaboration événementielle',
      'Médias & presse',
    ],
    audiences: [
      { title: 'Dirigeants & PDG', description: 'Explorez des partenariats stratégiques et des opportunités transfrontalières' },
      { title: 'Investisseurs', description: 'Accédez à des projets sélectionnés et à des opportunités d’investissement' },
      { title: 'Porteurs de projets', description: 'Présentez vos projets à notre réseau de partenaires et d’investisseurs' },
      { title: 'Institutions publiques', description: 'Collaborez sur la diplomatie économique et les initiatives de politique publique' },
      { title: 'Partenaires de savoir', description: 'Partagez votre expertise et intervenez à titre consultatif' },
      { title: 'Médias & presse', description: 'Demandez des interviews, des informations ou une couverture d’événement' },
    ],
    privacyTitle: 'Confidentialité & protection des données',
    privacyText:
      "Vos informations sont traitées conformément à la réglementation européenne sur la protection des données. Nous n'utilisons vos coordonnées que pour répondre à votre demande et pouvons vous ajouter à notre liste de diffusion si vous en manifestez l'intérêt. Vous pouvez vous désinscrire à tout moment.",
    privacyLinkIntro: 'Consultez notre',
    privacyLinkText: 'déclaration de confidentialité',
    privacyLinkOutro:
      "pour tout le détail de ce que nous collectons, pourquoi, combien de temps nous le conservons et quels sont vos droits.",
    country: 'Pays-Bas',
  },
  partnerships: {
    eyebrow: 'Partenariats',
    title: 'Devenez partenaire',
    subtitle:
      'CDD Pays-Bas construit des relations durables avec les organisations qui partagent notre engagement pour la collaboration transfrontalière.',
    caption: 'Construire des relations institutionnelles durables',
    heroTitle: 'Partenariats & écosystème',
    heroSubtitle:
      "CDD Pays-Bas réunit un écosystème diversifié de partenaires engagés dans la collaboration transfrontalière, l'innovation et le développement durable.",
    ecosystemTitle: 'Un écosystème multi-acteurs',
    ecosystemP1:
      "Notre réseau de partenaires couvre les secteurs public et privé et relie des organisations qui partagent notre engagement pour la diplomatie économique, la collaboration stratégique et l'impact.",
    ecosystemP2:
      "En réunissant des acteurs très divers — des entreprises et investisseurs aux agences publiques et institutions de savoir — nous créons une plateforme dynamique de dialogue utile, de développement de projets et de croissance mutuelle.",
    categoriesTitle: 'Notre écosystème de partenaires',
    categoriesSubtitle:
      'Nous collaborons avec six grandes catégories de partenaires, chacune apportant une valeur propre à notre réseau',
    benefitsSubtitle:
      "Les partenaires de CDD Pays-Bas accèdent à un réseau qualifié et à des opportunités stratégiques",
    geoTitle: 'Portée géographique',
    geoSubtitle: 'Notre réseau de partenaires couvre trois régions stratégiques',
    typeExamples: [
      ["Entreprises de l'énergie", 'Sociétés d’infrastructure', 'Leaders technologiques', 'Institutions financières'],
      ['Fonds de capital-investissement', 'Institutions de financement du développement', 'Family offices', 'Capital-risque'],
      ['Agences publiques', 'Ambassades & bureaux commerciaux', 'Institutions européennes', 'Organisations internationales'],
      ['Universités', 'Centres de recherche', 'Think tanks', 'Associations professionnelles'],
      ['Associations d’entreprises', 'Réseaux professionnels', 'Organisations communautaires', 'Associations d’anciens élèves'],
      ['Chambres de commerce', 'Clubs d’affaires', 'Fédérations sectorielles', 'Pôles d’innovation'],
    ],
    regions: [
      {
        name: 'Europe',
        description:
          "Une présence forte aux Pays-Bas, avec des liens dans les États membres de l'UE, les institutions et les réseaux d'affaires.",
        bullets: ['Clusters d’entreprises & pôles d’innovation', 'Institutions & agences européennes', "Réseaux financiers & d'investissement"],
      },
      {
        name: 'Maroc',
        description:
          'Des liens étroits avec la communauté d’affaires marocaine, les acteurs publics et les institutions de développement.',
        bullets: ['Dirigeants des secteurs public & privé', "Projets d'infrastructure stratégiques", 'Agences de développement économique'],
      },
      {
        name: 'Afrique',
        description:
          "Un réseau en croissance en Afrique subsaharienne, centré sur le commerce, l'investissement et les partenariats de développement.",
        bullets: ['Communautés économiques régionales', 'Institutions de financement du développement', 'Partenariats sectoriels'],
      },
    ],
    typesTitle: 'Types de partenariat',
    types: [
      { title: 'Partenaires entreprises', description: 'Grandes entreprises et multinationales engagées dans la croissance transfrontalière et l’innovation' },
      { title: "Partenaires d'investissement", description: 'Fonds de capital-investissement, family offices et investisseurs institutionnels porteurs d’investissements stratégiques' },
      { title: 'Partenaires institutionnels', description: 'Agences publiques, missions diplomatiques et organisations internationales' },
      { title: 'Partenaires de savoir', description: 'Universités, instituts de recherche et think tanks apportant leur expertise' },
      { title: 'Réseaux de la diaspora', description: 'Organisations communautaires, associations d’anciens élèves et associations professionnelles' },
      { title: 'Organisations professionnelles', description: 'Clubs d’affaires, chambres de commerce et organisations sectorielles' },
    ],
    benefitsTitle: 'Ce qu’apporte un partenariat',
    benefits: [
      { title: 'Accès aux réseaux', description: "Échangez avec des décideurs, investisseurs et experts en Europe, au Maroc et en Afrique" },
      { title: 'Échange de connaissances', description: 'Accédez à des analyses, recherches et expertises pertinentes pour votre secteur et votre zone' },
      { title: 'Initiatives conjointes', description: 'Participez à des délégations de haut niveau, des projets et des initiatives collaboratives' },
    ],
    ctaTitle: 'Devenir partenaire',
    ctaText: 'Parlez-nous de votre organisation et de ce que vous souhaitez bâtir avec CDD Pays-Bas.',
    ctaButton: 'Devenez partenaire',
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Projets stratégiques',
    subtitle: 'Des initiatives transfrontalières développées avec nos membres et partenaires.',
    comingSoon: 'Prochainement',
    announcement:
      "Nos projets stratégiques seront annoncés prochainement. Restez informé des initiatives et partenariats à venir, qui porteront la collaboration transfrontalière, le développement durable et la croissance économique.",
    comingSoonText:
      'Nos premiers projets stratégiques sont en cours de développement. Ils seront publiés ici, rattachés à la commission qui les pilote.',
    pillars: [
      { title: 'Orientation stratégique', description: 'Des projets alignés sur les quatre commissions et sur les agendas des deux pays' },
      { title: 'Multi-acteurs', description: 'Construits avec les entreprises, les institutions publiques et les partenaires de savoir' },
      { title: 'Impact mesurable', description: 'Des résultats définis, rapportés au conseil et aux membres' },
    ],
    ctaTitle: 'Proposer un projet',
    ctaText: 'Si vous développez une initiative transfrontalière, nous serions heureux d’en entendre parler.',
  },
  legal: {
    authoritativeTitle: 'Version faisant foi',
    authoritativeText:
      "Ce document est fourni en anglais, néerlandais et français à titre de commodité. En cas de divergence entre les versions, le texte anglais prévaut comme référence juridique faisant foi.",
    lastUpdated: 'Dernière mise à jour',
  },
  insights: {
    galleryTitle: 'Galerie photo',
    linkedinTitle: 'Depuis notre LinkedIn',
    linkedinIntro: 'Les dernières publications de la page CDD Pays-Bas.',
    linkedinFollow: 'Suivez-nous sur LinkedIn',
    linkedinView: 'Voir sur LinkedIn',
    linkedinEmpty:
      'Nos dernières actualités sont publiées sur LinkedIn. Suivez la page pour les découvrir dès leur parution.',
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
