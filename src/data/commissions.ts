import { COMMISSION_DOMAINS, type CommissionDomain } from './commissionDomains';
import type { AdvisorGroup } from './advisors';
import type { Localised } from '../i18n/localised';

/**
 * The four standing commissions.
 *
 * Part D0 of the blueprint makes the case for governance language over strategy
 * language: a page that says "we focus on energy" invites nothing, while a page
 * that says "the Energy & Water Commission, chaired by X, meets quarterly and
 * is open to all members" invites participation.
 *
 * The blueprint proposed keeping "Focus Areas" as the NAVIGATION label for
 * discoverability while the bodies were called commissions in the page body.
 * The board (August 2026) chose to use "Commissions" consistently, including in
 * the navigation and the URL, so the two registers no longer diverge anywhere
 * on the site. Old /focus-areas URLs redirect; see App.tsx.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACTION REQUIRED — chairs are a board appointment, not a developer decision.
 *
 * `chair` is null for all four. Per D3 this is a phone call to advisors who
 * have already agreed to advise, not a recruitment problem — but until the
 * board appoints them, the standing line renders honestly as "chair to be
 * appointed" rather than naming someone who has not agreed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export interface Commission extends CommissionDomain {
  /** Commission slug doubles as the advisor group key. */
  group: AdvisorGroup;
  /** One-sentence mandate shown under the page header. */
  mandate: Localised<string>;
  /** Name of the chair, drawn from the Advisory Council. Null until appointed. */
  chair: string | null;
  /** Year the commission was established. Null until the board confirms. */
  established: string | null;
  /** Meeting cadence, e.g. "Meets quarterly". */
  cadence: Localised<string>;
  /** The NL–MA opportunity: 3–4 sentences with one hard data point. */
  opportunity: Localised<string>;
  /** What the commission actually does. */
  activities: Localised<string[]>;
  /** Three current priorities, refreshed quarterly. */
  priorities: Localised<string[]>;
  /** The cross-cutting governance & trust layer as it applies here. */
  governanceNote: Localised<string>;
}

/** Governance rules published on the landing page (Part D5). */
export const COMMISSION_GOVERNANCE: Localised<string[]> = {
  en: [
  'Each commission has a chair appointed by the board for a two-year term, drawn from the Advisory Council, with an optional vice-chair.',
  'Each commits to a minimum of two activities per year — a roundtable, briefing, mission segment, or working paper.',
  'Each publishes three current priorities, refreshed quarterly.',
  'Membership is open to any CDD member; joining takes one click from the commission page.',
  'The board reviews commission activity annually and may merge or sunset a dormant commission.',
  ],
  nl: [
    'Elke commissie heeft een voorzitter die door het bestuur voor twee jaar wordt benoemd, afkomstig uit de Raad van Adviseurs, met een optionele vicevoorzitter.',
    'Elke commissie verbindt zich aan minimaal twee activiteiten per jaar — een rondetafelgesprek, briefing, missieonderdeel of werkdocument.',
    'Elke commissie publiceert drie actuele prioriteiten, elk kwartaal geactualiseerd.',
    'Het lidmaatschap staat open voor elk CDD-lid; deelnemen kan met één klik vanaf de commissiepagina.',
    'Het bestuur beoordeelt de activiteit van de commissies jaarlijks en kan een inactieve commissie samenvoegen of beëindigen.',
  ],
  fr: [
    "Chaque commission a un président nommé par le conseil pour un mandat de deux ans, issu du Conseil consultatif, avec un vice-président facultatif.",
    "Chacune s'engage à mener au minimum deux activités par an — table ronde, briefing, volet de mission ou document de travail.",
    'Chacune publie trois priorités actuelles, actualisées chaque trimestre.',
    "L'adhésion est ouverte à tout membre du CDD ; rejoindre une commission se fait en un clic depuis sa page.",
    'Le conseil évalue chaque année les activités des commissions et peut fusionner ou clôturer une commission inactive.',
  ],
};

/** Extra detail per commission, merged with the shared focus-area records. */
const DETAIL: Record<string, Omit<Commission, keyof CommissionDomain | 'group'>> = {
  'energy-water-transition': {
    mandate: {
      en: 'To advance Dutch–Moroccan cooperation in renewable energy, hydrogen, storage and water, and to turn that cooperation into concrete projects.',
      nl: 'Het bevorderen van Nederlands–Marokkaanse samenwerking op het gebied van hernieuwbare energie, waterstof, opslag en water, en die samenwerking omzetten in concrete projecten.',
      fr: "Faire progresser la coopération néerlando-marocaine dans les énergies renouvelables, l'hydrogène, le stockage et l'eau, et transformer cette coopération en projets concrets.",
    },
    chair: null,
    established: null,
    cadence: { en: 'Meets quarterly', nl: 'Vergadert per kwartaal', fr: 'Se réunit chaque trimestre' },
    opportunity: {
      en: 'Morocco has committed to sourcing over half its installed electricity capacity from renewables and is building green hydrogen capacity aimed squarely at the European market. The Netherlands holds the receiving infrastructure, the port capacity and the water technology. Water is arguably the single strongest complementarity between the two countries — which is why it is named in this commission rather than buried as a horizontal theme.',
      nl: 'Marokko heeft zich gecommitteerd aan meer dan de helft van zijn opgestelde elektriciteitscapaciteit uit hernieuwbare bronnen en bouwt groene waterstofcapaciteit op die nadrukkelijk op de Europese markt is gericht. Nederland beschikt over de ontvangende infrastructuur, de havencapaciteit en de watertechnologie. Water is misschien wel de sterkste complementariteit tussen beide landen — daarom is het in deze commissie expliciet benoemd in plaats van weggestopt als horizontaal thema.',
      fr: "Le Maroc s'est engagé à tirer plus de la moitié de sa capacité électrique installée des énergies renouvelables et développe une capacité d'hydrogène vert clairement orientée vers le marché européen. Les Pays-Bas disposent des infrastructures de réception, de la capacité portuaire et des technologies de l'eau. L'eau est sans doute la complémentarité la plus forte entre les deux pays — c'est pourquoi elle est nommée dans cette commission plutôt qu'enfouie comme thème transversal.",
    },
    activities: {
      en: [
        'Roundtables bringing Dutch and Moroccan operators around specific projects',
        'Technical missions to hydrogen, solar and water infrastructure sites',
        'Briefings on tenders, subsidy instruments and regulatory change in both markets',
        'Matchmaking between developers, investors and technology suppliers',
      ],
      nl: [
        'Rondetafelgesprekken die Nederlandse en Marokkaanse partijen rond concrete projecten samenbrengen',
        'Technische missies naar waterstof-, zonne-energie- en waterinfrastructuurlocaties',
        'Briefings over aanbestedingen, subsidie-instrumenten en regelgeving in beide markten',
        'Matchmaking tussen ontwikkelaars, investeerders en technologieleveranciers',
      ],
      fr: [
        'Des tables rondes réunissant opérateurs néerlandais et marocains autour de projets précis',
        "Des missions techniques sur des sites d'infrastructures hydrogène, solaires et hydriques",
        "Des briefings sur les appels d'offres, les dispositifs de subvention et les évolutions réglementaires sur les deux marchés",
        'Des mises en relation entre développeurs, investisseurs et fournisseurs de technologies',
      ],
    },
    priorities: {
      en: [
        'Map the Dutch–Moroccan green hydrogen value chain and identify where CDD members already sit within it.',
        'Convene a first roundtable on water technology transfer, the area with the clearest mutual need.',
        'Recruit a water specialist to the Advisory Council — the one obvious gap on an otherwise deep bench.',
      ],
      nl: [
        'De Nederlands–Marokkaanse waardeketen voor groene waterstof in kaart brengen en vaststellen waar CDD-leden zich daarin al bevinden.',
        'Een eerste rondetafelgesprek organiseren over overdracht van watertechnologie, het gebied met de duidelijkste wederzijdse behoefte.',
        'Een waterspecialist werven voor de Raad van Adviseurs — de enige duidelijke lacune in een verder sterk bezette groep.',
      ],
      fr: [
        "Cartographier la chaîne de valeur néerlando-marocaine de l'hydrogène vert et identifier où les membres du CDD s'y positionnent déjà.",
        "Organiser une première table ronde sur le transfert de technologies de l'eau, le domaine où le besoin mutuel est le plus net.",
        "Recruter un spécialiste de l'eau au Conseil consultatif — la seule lacune évidente dans un ensemble par ailleurs solide.",
      ],
    },
    governanceNote: {
      en: 'Energy and water projects are long-horizon and regulator-facing. Work in this commission is framed by EU and Dutch permitting requirements, grid access rules, and the data-governance obligations attached to operational technology in critical infrastructure.',
      nl: 'Energie- en waterprojecten hebben een lange horizon en staan onder toezicht van regelgevers. Het werk in deze commissie wordt gekaderd door Europese en Nederlandse vergunningseisen, regels voor netaansluiting en de verplichtingen rond datagovernance bij operationele technologie in kritieke infrastructuur.',
      fr: "Les projets énergétiques et hydriques s'inscrivent dans le long terme et sont soumis aux régulateurs. Le travail de cette commission est encadré par les exigences d'autorisation européennes et néerlandaises, les règles d'accès au réseau et les obligations de gouvernance des données liées aux technologies opérationnelles dans les infrastructures critiques.",
    },
  },
  'digital-ai-infrastructure': {
    mandate: {
      en: 'To connect Dutch and Moroccan capability in applied AI, data infrastructure and the built environment, with governance and trust built in from the start.',
      nl: 'Het verbinden van Nederlandse en Marokkaanse capaciteiten op het gebied van toegepaste AI, data-infrastructuur en de gebouwde omgeving, met governance en vertrouwen vanaf het begin ingebouwd.',
      fr: "Relier les capacités néerlandaises et marocaines en IA appliquée, en infrastructures de données et dans le cadre bâti, avec la gouvernance et la confiance intégrées dès le départ.",
    },
    chair: null,
    established: null,
    cadence: { en: 'Meets quarterly', nl: 'Vergadert per kwartaal', fr: 'Se réunit chaque trimestre' },
    opportunity: {
      en: 'Morocco Digital 2030 sets out national ambitions in digitalisation, data centres and AI capability, at the same time as Dutch firms are seeking nearshore capacity and talent within a compatible time zone. The opportunity is not offshoring; it is joint capability. Digital twins, smart-city instrumentation and AI data centres are where the two markets have complementary strengths rather than competing ones.',
      nl: 'Morocco Digital 2030 formuleert nationale ambities op het gebied van digitalisering, datacenters en AI-capaciteit, precies op het moment dat Nederlandse bedrijven nearshore-capaciteit en talent zoeken binnen een compatibele tijdzone. De kans ligt niet in offshoring, maar in gezamenlijke capaciteitsopbouw. Digital twins, instrumentatie voor slimme steden en AI-datacenters zijn de terreinen waar beide markten elkaar aanvullen in plaats van beconcurreren.',
      fr: "Morocco Digital 2030 fixe des ambitions nationales en matière de numérisation, de centres de données et de capacités en IA, au moment même où les entreprises néerlandaises recherchent des capacités et des talents en nearshore dans un fuseau horaire compatible. L'opportunité n'est pas la délocalisation, mais une capacité commune. Les jumeaux numériques, l'instrumentation des villes intelligentes et les centres de données IA sont les domaines où les deux marchés se complètent plutôt qu'ils ne se concurrencent.",
    },
    activities: {
      en: [
        'Briefings on the EU AI Act, NIS2 and what they mean for cross-border projects',
        'Roundtables on digital twins, smart cities and data-centre development',
        'Matchmaking between Dutch technology firms and Moroccan engineering capacity',
        'Working papers on nearshore delivery models that survive procurement review',
      ],
      nl: [
        'Briefings over de EU AI-verordening, NIS2 en wat deze betekenen voor grensoverschrijdende projecten',
        'Rondetafelgesprekken over digital twins, slimme steden en de ontwikkeling van datacenters',
        'Matchmaking tussen Nederlandse technologiebedrijven en Marokkaanse engineeringcapaciteit',
        'Werkdocumenten over nearshore-leveringsmodellen die een inkooptoets doorstaan',
      ],
      fr: [
        "Des briefings sur le règlement européen sur l'IA, NIS2 et leurs implications pour les projets transfrontaliers",
        'Des tables rondes sur les jumeaux numériques, les villes intelligentes et le développement de centres de données',
        "Des mises en relation entre entreprises technologiques néerlandaises et capacités d'ingénierie marocaines",
        "Des documents de travail sur des modèles de prestation nearshore qui résistent à l'examen des acheteurs publics",
      ],
    },
    priorities: {
      en: [
        'Publish a short briefing on EU AI Act obligations for members operating across both markets.',
        'Convene Dutch and Moroccan participants around one concrete digital-twin or smart-city use case.',
        'Recruit a cybersecurity and data-governance advisor — the highest-value single addition to the council.',
      ],
      nl: [
        'Een korte briefing publiceren over verplichtingen uit de EU AI-verordening voor leden die in beide markten actief zijn.',
        'Nederlandse en Marokkaanse deelnemers samenbrengen rond één concrete toepassing van digital twins of slimme steden.',
        'Een adviseur cybersecurity en datagovernance werven — de waardevolste enkele aanvulling op de raad.',
      ],
      fr: [
        "Publier un briefing court sur les obligations du règlement européen sur l'IA pour les membres actifs sur les deux marchés.",
        "Réunir des participants néerlandais et marocains autour d'un cas d'usage concret de jumeau numérique ou de ville intelligente.",
        'Recruter un conseiller en cybersécurité et gouvernance des données — l’ajout le plus précieux au conseil.',
      ],
    },
    governanceNote: {
      en: 'This commission carries the cross-cutting trust layer most directly: EU AI Act enforcement, NIS2, ISO 42001, GDPR and CNDP alignment, and OT/IT convergence. No comparable bilateral club runs this layer, which makes it a genuine differentiator rather than a compliance overhead.',
      nl: 'Deze commissie draagt de overkoepelende vertrouwenslaag het meest direct: handhaving van de EU AI-verordening, NIS2, ISO 42001, afstemming tussen AVG en CNDP, en de convergentie van OT en IT. Geen enkele vergelijkbare bilaterale club voert deze laag uit, wat het een echt onderscheidend kenmerk maakt in plaats van een nalevingslast.',
      fr: "Cette commission porte le plus directement la couche transversale de confiance : application du règlement européen sur l'IA, NIS2, ISO 42001, alignement RGPD et CNDP, et convergence OT/IT. Aucun club bilatéral comparable ne gère cette couche, ce qui en fait un véritable différenciateur plutôt qu'une charge de conformité.",
    },
  },
  'industry-trade-logistics': {
    mandate: {
      en: 'To strengthen the Rotterdam–Tanger Med corridor and the industrial, agricultural and trade relationships that run along it.',
      nl: 'Het versterken van de corridor Rotterdam–Tanger Med en de industriële, agrarische en handelsrelaties die daarlangs lopen.',
      fr: 'Renforcer le corridor Rotterdam–Tanger Med et les relations industrielles, agricoles et commerciales qui le parcourent.',
    },
    chair: null,
    established: null,
    cadence: { en: 'Meets quarterly', nl: 'Vergadert per kwartaal', fr: 'Se réunit chaque trimestre' },
    opportunity: {
      en: 'Tanger Med is among the largest container ports in the Mediterranean and Rotterdam is the largest in Europe; the corridor between them is the physical spine of the Dutch–Moroccan economic relationship. Morocco is simultaneously a major supplier of fresh produce to Dutch and European markets and a growing automotive and aerospace manufacturing base. The port operations, horticulture and trade expertise already sitting on the Advisory Council map directly onto this corridor.',
      nl: 'Tanger Med behoort tot de grootste containerhavens van de Middellandse Zee en Rotterdam is de grootste van Europa; de corridor daartussen vormt de fysieke ruggengraat van de Nederlands–Marokkaanse economische relatie. Marokko is tegelijk een belangrijke leverancier van verse producten aan de Nederlandse en Europese markt én een groeiende productiebasis voor automotive en luchtvaart. De expertise in havenactiviteiten, tuinbouw en handel die al in de Raad van Adviseurs aanwezig is, sluit direct aan op deze corridor.',
      fr: "Tanger Med figure parmi les plus grands ports à conteneurs de Méditerranée et Rotterdam est le premier d'Europe ; le corridor qui les relie constitue la colonne vertébrale physique de la relation économique néerlando-marocaine. Le Maroc est à la fois un fournisseur majeur de produits frais pour les marchés néerlandais et européens et une base industrielle croissante dans l'automobile et l'aéronautique. L'expertise en activités portuaires, horticulture et commerce déjà présente au Conseil consultatif correspond directement à ce corridor.",
    },
    activities: {
      en: [
        'Roundtables on port, logistics and supply-chain resilience',
        'Trade missions and delegation segments along the corridor',
        'Briefings on customs, standards and market-access requirements',
        'Introductions between Dutch buyers and Moroccan producers and manufacturers',
      ],
      nl: [
        'Rondetafelgesprekken over havens, logistiek en de weerbaarheid van toeleveringsketens',
        'Handelsmissies en delegatieonderdelen langs de corridor',
        'Briefings over douane, normen en eisen voor markttoegang',
        'Introducties tussen Nederlandse afnemers en Marokkaanse producenten en fabrikanten',
      ],
      fr: [
        "Des tables rondes sur les ports, la logistique et la résilience des chaînes d'approvisionnement",
        'Des missions commerciales et volets de délégation le long du corridor',
        "Des briefings sur les douanes, les normes et les conditions d'accès au marché",
        'Des mises en relation entre acheteurs néerlandais et producteurs et fabricants marocains',
      ],
    },
    priorities: {
      en: [
        'Document the Rotterdam–Tanger Med corridor as a member-facing map of who does what, and where the gaps are.',
        'Run a first briefing on market-access and standards requirements for agri-food exporters.',
        'Identify two manufacturing or logistics projects where CDD members can realistically partner.',
      ],
      nl: [
        'De corridor Rotterdam–Tanger Med vastleggen als een ledenoverzicht van wie wat doet en waar de lacunes zitten.',
        'Een eerste briefing organiseren over markttoegang en normeisen voor agrifood-exporteurs.',
        'Twee productie- of logistieke projecten identificeren waarin CDD-leden realistisch kunnen samenwerken.',
      ],
      fr: [
        'Documenter le corridor Rotterdam–Tanger Med sous forme de cartographie destinée aux membres : qui fait quoi, et où sont les manques.',
        "Organiser un premier briefing sur l'accès au marché et les exigences normatives pour les exportateurs agroalimentaires.",
        'Identifier deux projets industriels ou logistiques où les membres du CDD peuvent réellement collaborer.',
      ],
    },
    governanceNote: {
      en: 'Trade and logistics work touches customs regimes, product standards and increasingly supply-chain due diligence obligations under EU law. The commission frames its work so that members can act on opportunities without falling foul of them.',
      nl: 'Werk op het gebied van handel en logistiek raakt aan douaneregimes, productnormen en in toenemende mate aan zorgplichtverplichtingen voor toeleveringsketens onder Europees recht. De commissie kadert haar werk zo dat leden kansen kunnen benutten zonder daarmee in de knel te komen.',
      fr: "Le travail commercial et logistique touche aux régimes douaniers, aux normes produits et, de plus en plus, aux obligations de vigilance sur les chaînes d'approvisionnement en droit européen. La commission encadre son travail pour que les membres puissent saisir les opportunités sans s'y exposer.",
    },
  },
  'talent-knowledge-society': {
    mandate: {
      en: 'To develop the human capital, institutional knowledge and cultural understanding that make the Dutch–Moroccan partnership durable.',
      nl: 'Het ontwikkelen van het menselijk kapitaal, de institutionele kennis en het culturele begrip die het Nederlands–Marokkaanse partnerschap duurzaam maken.',
      fr: 'Développer le capital humain, le savoir institutionnel et la compréhension culturelle qui rendent durable le partenariat néerlando-marocain.',
    },
    chair: null,
    established: null,
    cadence: { en: 'Meets quarterly', nl: 'Vergadert per kwartaal', fr: 'Se réunit chaque trimestre' },
    opportunity: {
      en: 'A significant Moroccan diaspora in the Netherlands represents an underused bridge: bilingual, bicultural, and often already operating professionally in both markets. At the same time, Dutch employers face structural shortages in technical and care occupations while Morocco produces engineering and technical graduates at scale. The constraint is not the supply of talent but the absence of structured pathways, recognition of qualifications, and the cultural fluency that makes placements last.',
      nl: 'De omvangrijke Marokkaanse diaspora in Nederland vormt een onderbenutte brug: tweetalig, bicultureel en vaak al professioneel actief in beide markten. Tegelijk kampen Nederlandse werkgevers met structurele tekorten in technische en zorgberoepen, terwijl Marokko op grote schaal technisch en ingenieursgeschoolde afgestudeerden voortbrengt. De beperking is niet het aanbod van talent, maar het ontbreken van gestructureerde routes, erkenning van diploma\'s en de culturele vaardigheid die plaatsingen duurzaam maakt.',
      fr: "L'importante diaspora marocaine aux Pays-Bas constitue un pont sous-exploité : bilingue, biculturelle et souvent déjà active professionnellement sur les deux marchés. Dans le même temps, les employeurs néerlandais font face à des pénuries structurelles dans les métiers techniques et du soin, tandis que le Maroc forme des diplômés en ingénierie et en techniques à grande échelle. La contrainte n'est pas l'offre de talents, mais l'absence de parcours structurés, de reconnaissance des qualifications et de l'aisance culturelle qui fait durer les placements.",
    },
    activities: {
      en: [
        'Roundtables on labour mobility, qualification recognition and retention',
        'Executive education and knowledge-transfer partnerships between institutions',
        'Programmes engaging diaspora professionals as a bridge between both markets',
        'Cultural and community initiatives that sustain the relationship beyond transactions',
      ],
      nl: [
        'Rondetafelgesprekken over arbeidsmobiliteit, diploma-erkenning en behoud van personeel',
        'Partnerschappen tussen instellingen voor executive education en kennisoverdracht',
        'Programma\'s die diasporaprofessionals inzetten als brug tussen beide markten',
        'Culturele en gemeenschapsinitiatieven die de relatie voorbij transacties in stand houden',
      ],
      fr: [
        'Des tables rondes sur la mobilité du travail, la reconnaissance des qualifications et la fidélisation',
        'Des partenariats de formation continue et de transfert de connaissances entre institutions',
        'Des programmes mobilisant les professionnels de la diaspora comme pont entre les deux marchés',
        'Des initiatives culturelles et communautaires qui font vivre la relation au-delà des transactions',
      ],
    },
    priorities: {
      en: [
        'Map existing qualification-recognition pathways between the two countries and where they break down.',
        'Convene employers and educators around one concrete skills-shortage occupation.',
        'Recruit a health or life-sciences advisor if health is to be a genuine theme rather than a label.',
      ],
      nl: [
        'De bestaande routes voor diploma-erkenning tussen beide landen in kaart brengen en vaststellen waar ze vastlopen.',
        'Werkgevers en onderwijsinstellingen samenbrengen rond één concreet knelpuntberoep.',
        'Een adviseur zorg of life sciences werven als gezondheid een echt thema moet zijn en geen etiket.',
      ],
      fr: [
        'Cartographier les parcours existants de reconnaissance des qualifications entre les deux pays et repérer où ils échouent.',
        "Réunir employeurs et acteurs de la formation autour d'un métier en tension concret.",
        'Recruter un conseiller en santé ou sciences de la vie si la santé doit être un thème réel et non une étiquette.',
      ],
    },
    governanceNote: {
      en: 'Work involving individuals, mobility and employment carries data-protection and equal-treatment obligations. The commission holds to the same governance and trust standards as the rest of the organisation, particularly where personal data crosses borders.',
      nl: 'Werk dat individuen, mobiliteit en arbeid raakt, brengt verplichtingen rond gegevensbescherming en gelijke behandeling met zich mee. De commissie hanteert dezelfde governance- en vertrouwensnormen als de rest van de organisatie, zeker waar persoonsgegevens grenzen overschrijden.',
      fr: "Le travail portant sur les personnes, la mobilité et l'emploi comporte des obligations de protection des données et d'égalité de traitement. La commission applique les mêmes normes de gouvernance et de confiance que le reste de l'organisation, en particulier lorsque des données personnelles franchissent les frontières.",
    },
  },
};

export const COMMISSIONS: Commission[] = COMMISSION_DOMAINS.map((area) => ({
  ...area,
  group: area.slug as AdvisorGroup,
  ...DETAIL[area.slug],
}));

export function getCommission(slug: string): Commission | undefined {
  return COMMISSIONS.find((c) => c.slug === slug);
}
