import { Project } from '../models/project.model';


export const PROJECTS: Project[] = [
  {
    slug: 'applyflow',
    name: 'ApplyFlow',
    tagline: {
      en: 'Job application automation engine with pipeline conversion tracking',
      fr: "Moteur d'automatisation de candidatures avec suivi de conversion du pipeline",
    },
    description: {
      en: 'An automated dispatch system that tracks applicant funnel conversion rates to isolate drop-off points (resume screen vs. interview performance).',
      fr: "Un système de dispatch automatisé qui suit les taux de conversion de l'entonnoir de candidature pour isoler les points d'abandon (tri des CV vs performance en entretien).",
    },
    categories: ['web-frontend', 'backend'],
    featured: true,
    status: 'shipped',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'OAuth 2.0'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      {
        src: '',
        caption: {
          en: 'Live preview: stitched email before send',
          fr: 'Aperçu en direct : e-mail assemblé avant envoi',
        },
      },
      {
        src: '',
        caption: {
          en: 'Conversion funnel: rejection stage breakdown',
          fr: 'Entonnoir de conversion : ventilation des étapes de refus',
        },
      },
      {
        src: '',
        caption: {
          en: 'Template editor with dynamic placeholders',
          fr: 'Éditeur de modèles avec balises dynamiques',
        },
      },
    ],
    hook: {
      en: 'I built this after grinding through internship applications myself. The automation started as a fix for rewriting cover letters and attaching the right CV every time — but what kept me using it was the pipeline tracking: treating the job search as a conversion funnel helped me isolate whether my bottleneck was top-of-funnel (CV formatting) or bottom-of-funnel (interview execution).',
      fr: "J'ai conçu cet outil après avoir enchaîné les candidatures de stage. L'automatisation a commencé comme un correctif pour réécrire les lettres de motivation et joindre le bon CV à chaque fois — mais ce qui m'a poussé à continuer, c'est le suivi du pipeline : traiter la recherche d'emploi comme un entonnoir de conversion m'a aidé à identifier si mon goulot d'étranglement venait du haut de l'entonnoir (format du CV) ou du bas (prestation en entretien).",
    },
    problem: {
      en: "Manually applying to jobs means juggling CV variants, rewriting templates, and tracking statuses in a spreadsheet that's always out of sync. ApplyFlow fixes both: it provides reliable, automated dispatch through the Gmail API, and tracks pipeline stage transitions to surface actionable conversion metrics.",
      fr: "Postuler manuellement implique de jongler entre plusieurs variantes de CV, de réécrire des modèles et de suivre les statuts dans un tableur toujours désynchronisé. ApplyFlow résout ces deux problèmes : il assure un envoi automatisé et fiable via l'API Gmail, tout en suivant les transitions d'étape pour dégager des métriques de conversion exploitables.",
    },
    how: {
      en: [
        'Build a reusable email template with placeholders for company, position, and skills — in French or English.',
        'At send time, placeholders auto-fill for the target company, with a live preview of exactly how the final email will read before dispatch.',
        'Backend streams the matching CV from Google Drive directly into the email payload in memory — bypassing the database entirely.',
        "Email sends through the Gmail API on the user's behalf via OAuth.",
        'If Gmail is down or rate-limited, the application state machine holds the application in a "compiled" state instead of failing — dropping zero data.',
        'Every state transition is logged (sent, rejected, interview, offer) to feed the conversion funnel metrics.',
      ],
      fr: [
        "Création d'un modèle d'e-mail réutilisable avec des balises pour l'entreprise, le poste et les compétences — en français ou en anglais.",
        "Au moment de l'envoi, les balises se remplissent automatiquement pour l'entreprise cible avec un aperçu en direct.",
        "Le backend récupère le CV depuis Google Drive et l'injecte directement en mémoire dans la charge utile de l'e-mail — en évitant la base de données.",
        "L'e-mail est envoyé via l'API Gmail pour le compte de l'utilisateur via OAuth.",
        'En cas de panne de Gmail, la machine à états retient la candidature à l’état "compilé" pour éviter toute perte de données.',
        "Chaque transition d'état (envoyé, refusé, entretien, offre) est enregistrée pour alimenter les métriques de l'entonnoir.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Pipeline stage metrics for isolating bottlenecks.',
          fr: 'Métriques par étape pour isoler les goulots d’étranglement.',
        },
        detail: {
          en: 'Tracks conversion rates across the application lifecycle. Identifying a drop-off before the recruiter screen isolates top-of-funnel issues (CV/targeting), whereas post-interview rejections point to execution. Includes basic A/B tracking to see which CV variant performs best.',
          fr: 'Suit les taux de conversion tout au long du cycle de vie de la candidature. Permet d’identifier si les rejections proviennent du ciblage initial ou de la phase d’entretien.',
        },
      },
      {
        title: {
          en: 'A template engine that scales.',
          fr: 'Un moteur de modèles évolutif.',
        },
        detail: {
          en: 'Dynamic placeholders for company, position, and skills, auto-filled per application in French or English, with a live payload preview before execution.',
          fr: 'Balises dynamiques adaptées au français ou à l’anglais, avec prévisualisation du payload avant exécution.',
        },
      },
      {
        title: {
          en: 'Defensive state management.',
          fr: 'Gestion d’état défensive.',
        },
        detail: {
          en: "Dispatch runs as a state machine, not a fire-and-forget call. Implemented a rate-limiter (Bucket4j, capped just under Google's quota) to throttle the backend before Google triggers a 429 Too Many Requests error.",
          fr: 'Utilisation d’une machine à états et d’un limiteur de débit (Bucket4j) pour rester sous les quotas stricts de Google.',
        },
      },
      {
        title: {
          en: 'Optimized memory management.',
          fr: 'Gestion optimisée de la mémoire.',
        },
        detail: {
          en: 'CVs live in Google Drive, not Postgres. The backend pulls the bytes and pipes them straight into the outgoing email in memory to avoid choking the database with heavy BLOBs.',
          fr: 'Les CV résident sur Google Drive et sont injectés directement en mémoire dans l’e-mail sortant, évitant de surcharger PostgreSQL.',
        },
      },
    ],
    tradeoffs: {
      en: [
        "Streaming CVs from Drive saved database space but added a dependency on Drive's response time — implemented strict timeouts so a slow third-party response couldn't hang a backend thread indefinitely.",
        'Users frequently skip statuses (jumping straight from "applied" to "offer"), so state transitions had to be backfilled automatically to maintain schema integrity for the funnel queries.',
        'Cover letter personalization is templated, not AI-generated. The system automates the repetitive data-binding, but the substance of the application still requires a human pass.',
        'Currently load-tested only for single-user capacity. Next milestone: building a Testcontainers suite that explicitly mocks Gmail API 500 errors and rate-limit responses to mathematically prove the retry logic.',
      ],
      fr: [
        'Le streaming des CV depuis Drive économise de l’espace mais crée une dépendance au temps de réponse — des timeouts stricts ont été mis en place.',
        'Les utilisateurs sautent parfois des étapes (passant directement de "candidaté" à "offre"), nécessitant une rétro-correction automatique des statuts.',
        'La lettre de motivation utilise des modèles paramétriques et non de l’IA, nécessitant une relecture humaine finale.',
        'Testé uniquement pour un usage mono-utilisateur à ce stade.',
      ],
    },
    learned: {
      en: ["githuib branching","docker","CICD workflow"],
      fr: [],
    },
  },
  {
    slug: 'remote-control',
    name: 'Remote Control',
    tagline: {
      en: 'A phone remote for a TV with zero documentation',
      fr: 'Une télécommande sur téléphone pour une TV sans documentation',
    },
    description: {
      en: 'When my TV remote broke, I reverse-engineered the undocumented IR protocol from scratch and built a Flutter app to replace it.',
      fr: "Quand la télécommande de ma télé est tombée en panne, j'ai rétro-ingénieré le protocole IR non documenté et créé une application Flutter pour la remplacer.",
    },
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: ['Flutter', 'Dart', 'Android Consumer IR API', 'Provider'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      {
        src: '',
        caption: {
          en: 'Remote UI in use',
          fr: 'Interface de la télécommande en action',
        },
      },
      {
        src: '',
        caption: {
          en: 'Internal command mapping tool',
          fr: 'Outil interne de cartographie des commandes',
        },
      },
    ],
    hook: {
      en: "My TV's remote broke and no replacement existed for that model, so I decided to control it from my phone instead. There was no documentation for the hardware anywhere — before I could write a line of app code, I had to reverse-engineer the infrared protocol from scratch.",
      fr: "La télécommande de ma télévision étant cassée et aucun modèle de remplacement n'existant, j'ai décidé de la piloter depuis mon téléphone. En l'absence totale de documentation, j'ai dû rétro-ingénierer le protocole infrarouge à partir de zéro.",
    },
    problem: {
      en: "Universal remote apps assume the manufacturer's command set is known or discoverable. Mine wasn't. No datasheet, no protocol reference — just a TV with an IR receiver and a phone with an IR blaster. Getting from nothing to a working remote meant treating the TV itself as the only source of truth.",
      fr: "Les applications de télécommande universelle supposent que les commandes sont connues. Ce n'était pas le cas ici. Aucune fiche technique, aucune référence — juste une TV et un téléphone émetteur IR.",
    },
    how: {
      en: [
        "Started from the TV's regulatory and licensing documentation to narrow down the receiver hardware, pointing to the NEC IR protocol.",
        'NEC packets need a valid 8-bit system address before the receiver parses anything. Brute-forced that address space (0x00–0xFF) against the physical TV until it responded — it answered at 0x01.',
        'Built a small internal tool to fire hex commands at the TV and label what each one did — capture, label, verify, repeat.',
        "Compiled the mapped command set into a fixed configuration registry, wired into a Flutter frontend via Android's native Consumer IR API.",
      ],
      fr: [
        'Analyse de la documentation réglementaire de la TV pour identifier le protocole NEC.',
        "Force brute de l'espace d'adressage 8 bits (0x00–0xFF) jusqu'à obtenir une réponse de la TV (réponse à 0x01).",
        "Création d'un outil interne pour envoyer des commandes hexadécimales et labelliser leur effet.",
        "Compilation du jeu de commandes dans un registre de configuration relié à Flutter via l'API Consumer IR d'Android.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Getting a real answer with no reference material.',
          fr: 'Obtenir une réponse sans matériel de référence.',
        },
        detail: {
          en: 'No protocol doc to check work against — every step was validated against the physical TV itself, including a real brute-force search for the system address.',
          fr: 'Aucune documentation de protocole disponible — chaque étape a été validée directement sur la TV physique.',
        },
      },
      {
        title: {
          en: 'Building my own tooling instead of guessing manually.',
          fr: 'Créer ses propres outils au lieu de deviner manuellement.',
        },
        detail: {
          en: 'A small diagnostic UI for the mapping phase turned tedious manual hex-testing into a fast, repeatable loop.',
          fr: 'Une interface de diagnostic dédiée a transformé les tests hexadécimaux en une boucle rapide et reproductible.',
        },
      },
      {
        title: {
          en: 'Keeping the app clean once the hard part was done.',
          fr: 'Garder l’application propre après la phase complexe.',
        },
        detail: {
          en: "Hardware discovery was messy by nature; the shipped app isn't. State management and hardware I/O stay cleanly separated.",
          fr: "La phase de découverte matérielle était complexe ; l'application finale reste propre et structurée.",
        },
      },
    ],
    tradeoffs: {
      en: [
        "Only works with the exact TV it was reverse-engineered against — it isn't a universal remote, and the write-up says so directly rather than overselling it.",
        'Requires a phone with a built-in IR blaster, which rules out most modern phones.',
        'The discovery tooling (address brute-forcing, frequency sweeping) is internal-only right now. Next step: expose it as a guided in-app workflow so someone else with unsupported hardware can run the same process themselves.',
      ],
      fr: [
        'Fonctionne uniquement avec le modèle de TV spécifique rétro-ingénieré.',
        "Nécessite un téléphone équipé d'un émetteur infrarouge intégré.",
        "Les outils de découverte sont actuellement internes, avec pour projet de les exposer dans l'application.",
      ],
    },
  },
  {
    slug: 'ai-partner',
    name: 'AI Partner',
    tagline: {
      en: 'Offline translation app, built to actually learn Clean Architecture',
      fr: 'Application de traduction hors-ligne pour apprendre Clean Architecture',
    },
    description: {
      en: 'A self-directed project to properly learn Clean Architecture and BLoC — an on-device translation app using Google ML Kit, with no internet required and nothing leaving the phone.',
      fr: 'Un projet personnel pour maîtriser Clean Architecture et BLoC — une application de traduction locale utilisant Google ML Kit sans connexion Internet.',
    },
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: ['Flutter', 'Clean Architecture', 'BLoC/Cubit', 'Google ML Kit'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      {
        src: '',
        caption: {
          en: 'Translator screen',
          fr: 'Écran de traduction',
        },
      },
      {
        src: '',
        caption: {
          en: 'Text-to-speech player',
          fr: 'Lecteur de synthèse vocale',
        },
      },
    ],
    hook: {
      en: 'I built this specifically to practice Clean Architecture and the BLoC/Cubit pattern properly, instead of just reading about them. I wanted something with real complexity to make the architecture worth it — an on-device translation app fit, since state actually changes over time (model downloads, offline availability, playback) rather than being a simple CRUD screen.',
      fr: 'Créé spécifiquement pour pratiquer Clean Architecture et le pattern BLoC/Cubit. Une application de traduction locale présentait la complexité idéale pour justifier cette architecture.',
    },
    problem: {
      en: 'A Flutter app that translates and identifies languages entirely on-device using Google ML Kit, so it works with no internet connection and nothing leaves the phone. It also includes text-to-speech playback, haptic feedback, and local notifications for background model downloads.',
      fr: "Une application Flutter qui traduit et identifie les langues entièrement sur l'appareil via Google ML Kit, sans connexion Internet, avec synthèse vocale et retours haptiques.",
    },
    how: {
      en: [
        'State flows one direction through Cubits — the presentation layer only rebuilds in response to emitted state, never reaching into business logic directly.',
        'Third-party SDKs (ML Kit, Flutter TTS) are wrapped in custom service classes, isolating the app from the specific packages underneath.',
        "ML Kit's translation models are large, so downloads run in the background with progress tracking, without blocking the main UI isolate.",
        'Services and repositories are provided once at the app root via MultiRepositoryProvider/MultiBlocProvider, keeping lifecycle management in one place.',
      ],
      fr: [
        "Flux d'état unidirectionnel via des Cubits, isolant la couche de présentation de la logique métier.",
        'Encapsulation des SDK tiers (ML Kit, TTS) dans des classes de service personnalisées.',
        'Téléchargements de modèles ML Kit gérés en arrière-plan avec suivi de progression.',
        "Injection des services et repositories au niveau de la racine de l'application.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Keeping the UI genuinely dumb.',
          fr: 'Garder l’interface utilisateur simple et passive.',
        },
        detail: {
          en: "The main thing I wanted to get right: a presentation layer that only reacts to emitted state, not one that's just organized to look passive.",
          fr: 'Une couche de présentation qui réagit uniquement aux états émis sans logique superflue.',
        },
      },
      {
        title: {
          en: 'Isolating third-party SDKs behind my own interfaces.',
          fr: 'Isoler les SDK tiers derrière mes propres interfaces.',
        },
        detail: {
          en: 'ML Kit and TTS are wrapped in service classes so nothing above that layer knows which package is actually doing the work.',
          fr: 'ML Kit et TTS sont encapsulés pour masquer les dépendances sous-jacentes.',
        },
      },
      {
        title: {
          en: 'Handling background model downloads without freezing the UI.',
          fr: 'Gérer les téléchargements en arrière-plan sans bloquer l’UI.',
        },
        detail: {
          en: 'This was the most fiddly part of the project — more so than the translation logic itself.',
          fr: 'La partie la plus délicate du projet, surpassant la logique de traduction elle-même.',
        },
      },
    ],
    tradeoffs: {
      en: [
        'This is a solo learning project, not a shipped product with real users — built to get the architecture right, not to compete with existing translation apps.',
        'The offline/on-device angle is genuinely useful, but the real value here was what building it taught about structuring a non-trivial Flutter app.',
      ],
      fr: [
        "Projet d'apprentissage en solo orienté vers la maîtrise architecturale plutôt que la concurrence commerciale.",
        "L'intérêt principal réside dans l'apprentissage de la structuration d'une application Flutter complexe.",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // PLACEHOLDERS
  // ---------------------------------------------------------------------
  {
    slug: 'school-backend',
    name: 'School backend project',
    tagline: {
      en: 'TODO: real name + one-line pitch',
      fr: 'À FAIRE : nom réel + description en une ligne',
    },
    description: {
      en: 'TODO: what course was this for, what does it do, what stack.',
      fr: 'À FAIRE : contexte du cours, fonctionnalités et stack.',
    },
    categories: ['backend'],
    featured: false,
    status: 'shipped',
    tags: ['TODO'],
    hook: {
      en: 'TODO: what was the assignment actually asking for?',
      fr: 'À FAIRE : quel était l’intitulé du devoir ?',
    },
    problem: {
      en: 'TODO',
      fr: 'À FAIRE',
    },
    how: {
      en: ['TODO'],
      fr: ['À FAIRE'],
    },
    proud: [
      {
        title: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
        detail: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
      },
    ],
    tradeoffs: {
      en: ['TODO'],
      fr: ['À FAIRE'],
    },
  },
  {
    slug: 'flutter-app-one',
    name: 'Flutter app one',
    tagline: {
      en: 'TODO: real name + one-line pitch',
      fr: 'À FAIRE : nom réel + description en une ligne',
    },
    description: {
      en: 'TODO — smaller app, one or two sentences is enough.',
      fr: 'À FAIRE — application plus petite.',
    },
    categories: ['mobile'],
    featured: false,
    status: 'shipped',
    tags: ['Flutter', 'Dart'],
    hook: {
      en: 'TODO',
      fr: 'À FAIRE',
    },
    problem: {
      en: 'TODO',
      fr: 'À FAIRE',
    },
    how: {
      en: ['TODO'],
      fr: ['À FAIRE'],
    },
    proud: [
      {
        title: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
        detail: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
      },
    ],
    tradeoffs: {
      en: [],
      fr: [],
    },
  },
  {
    slug: 'flutter-app-two',
    name: 'Flutter app two',
    tagline: {
      en: 'TODO: real name + one-line pitch',
      fr: 'À FAIRE : nom réel + description en une ligne',
    },
    description: {
      en: 'TODO — smaller app, one or two sentences is enough.',
      fr: 'À FAIRE — application plus petite.',
    },
    categories: ['mobile'],
    featured: false,
    status: 'shipped',
    tags: ['Flutter', 'Dart'],
    hook: {
      en: 'TODO',
      fr: 'À FAIRE',
    },
    problem: {
      en: 'TODO',
      fr: 'À FAIRE',
    },
    how: {
      en: ['TODO'],
      fr: ['À FAIRE'],
    },
    proud: [
      {
        title: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
        detail: {
          en: 'TODO',
          fr: 'À FAIRE',
        },
      },
    ],
    tradeoffs: {
      en: [],
      fr: [],
    },
  },
];
