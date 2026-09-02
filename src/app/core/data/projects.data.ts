import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  //* ApplyFlow
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
    demoUrl: 'https://applyflow-portal.vercel.app/',
    githubUrl: '',
    image: 'assets/applyflow/logo.svg',
    screenshots: [
      {
        src: 'assets/applyflow/email-preview.png',
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
        src: 'assets/applyflow/template.png',
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
          en: 'Defensive state management & rate limiting.',
          fr: 'Gestion d’état défensive et limitation de débit.',
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
      en: [
        'Maintaining strict database integrity while gracefully handling non-linear user workflows through automatic backfilling of skipped pipeline states',
        'Designing defensive UI patterns with contextual “?” tooltips to clarify complex metrics and prevent user confusion',
        'Implementing memory-efficient file streaming to transfer large PDFs directly from Google Drive to API responses without persisting them in PostgreSQL',
      ],
      fr: [
        'Garantir l’intégrité stricte de la base de données tout en gérant les parcours utilisateurs non linéaires grâce au remplissage automatique des étapes de workflow ignorées',
        'Concevoir des interfaces défensives avec des infobulles contextuelles « ? » pour clarifier les métriques complexes et réduire les erreurs d’interprétation',
        'Mettre en place un streaming de fichiers économe en mémoire pour transférer directement les PDF volumineux de Google Drive vers les réponses de l’API sans les persister dans PostgreSQL',
      ],
    },
  },
  //* Remote Control
  {
    slug: 'remote-control',
    name: 'Hardware Interface Remote',
    tagline: {
      en: 'A 72-hour reverse-engineering sprint to control an undocumented knockoff TV.',
      fr: 'Un sprint de rétro-ingénierie de 72h pour contrôler une TV sans documentation.',
    },
    description: {
      en: 'When my TV remote broke, I had 3 days and zero budget to fix it. I reverse-engineered the undocumented IR protocol from scratch and built a low-level Flutter diagnostic utility to replace it.',
      fr: "Quand ma télécommande est tombée en panne, j'avais 3 jours et aucun budget pour la réparer. J'ai rétro-ingénieré le protocole IR non documenté et créé un utilitaire de diagnostic Flutter bas niveau pour la remplacer.",
    },
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: [
      'Flutter',
      'Dart',
      'Android Consumer IR API',
      'Hardware I/O',
      'Provider',
    ],
    demoUrl: '',
    releaseUrl:
      'https://github.com/jecem-ben-slama/remote_control/releases/latest',
    githubUrl: 'https://github.com/jecem-ben-slama/remote_control',
    image: 'assets/remote-control/logo.svg',
    screenshots: [
      {
        src: 'assets/remote-control/remote.png',
        caption: {
          en: 'Final remote control interface for command execution',
          fr: 'Interface finale de la télécommande pour l’exécution des commandes',
        },
      },
      {
        src: 'assets/remote-control/mapper.png',
        caption: {
          en: 'Frequency mapping interface for documenting the function of each discovered signal',
          fr: 'Interface de mappage des fréquences pour documenter la fonction de chaque signal détecté',
        },
      },
      {
        src: 'assets/remote-control/pdf.png',
        caption: {
          en: 'Generated PDF report containing the discovered commands',
          fr: 'Rapport PDF généré contenant les commandes détectées',
        },
      },
    ],

    hook: {
      en: "My TV remote broke, and as a student staring at an obscure knockoff SMASNUG TV with zero replacement parts on the market, buying a new one wasn't an option. With no documentation and a phone with an IR blaster, I spent 72 hours building a custom hardware diagnostic toolkit from scratch—complete with an address space brute-forcer, register map viewer, and a Flutter telemetry interface to inject raw NEC protocol packets.",
      fr: "Ma télécommande s'est cassée. Étant étudiant avec une TV de marque obscure (SMASNUG) introuvable sur le marché, racheter n'était pas une option. Sans documentation, j'ai passé 72 heures à créer une boîte à outils de diagnostic matériel : force brute d'adresses, carte des registres et interface de télémétrie Flutter pour injecter des paquets NEC bruts.",
    },
    problem: {
      en: "Universal remote apps assume the manufacturer's command set is known or discoverable. A cheap knockoff TV doesn't exist in those databases. No datasheet, no protocol reference — just a TV with an IR receiver and a phone with an IR blaster. Getting from nothing to a working remote meant treating the TV itself as the only source of truth.",
      fr: "Les applications universelles supposent que les commandes du fabricant sont connues. Une TV bas de gamme n'existe pas dans ces bases. Aucune fiche technique — juste une TV et un téléphone émetteur IR. Il a fallu traiter la TV elle-même comme unique source de vérité.",
    },
    how: {
      en: [
        "Domain Acquisition: Before writing a single line of code, I spent hours researching how physical IR remotes actually work—diving into carrier frequencies, pulse-distance modulation, and raw hardware signaling to understand exactly what the TV's receiver was expecting.",
        "Started from the TV's regulatory and licensing documentation to narrow down the receiver hardware, pointing to the NEC IR protocol.",
        'Compiled 8 pages of potential carrier frequencies to test. Luckily, the receiver responded to a frequency on page two, saving hours of blind testing and validating the native Android I/O bridge.',
        'NEC packets need a valid 8-bit system address. Brute-forced that address space (0x00–0xFF) against the physical TV until it answered at 0x01.',
        'Built a custom internal diagnostic UI to fire hex commands at the TV and label what each one did — capture, label, verify, repeat.',
        "Wired the mapped command set into a raw, utilitarian Flutter frontend via Android's native Consumer IR API.",
      ],
      fr: [
        "Acquisition de domaine : Avant de coder, j'ai étudié le fonctionnement physique des télécommandes IR (fréquences porteuses, modulation de distance d'impulsion, signalisation matérielle) pour comprendre les attentes du récepteur.",
        'Analyse de la documentation réglementaire pour identifier le matériel, pointant vers le protocole IR NEC.',
        "Compilation de 8 pages de fréquences porteuses à tester. Coup de chance : la TV a répondu à une fréquence de la deuxième page, validant immédiatement l'approche.",
        "Force brute de l'espace d'adressage 8 bits (0x00–0xFF) jusqu'à obtenir une réponse de la TV à l'adresse 0x01.",
        "Création d'une interface de diagnostic interne pour envoyer des commandes hexadécimales et labelliser leur effet.",
        "Intégration des commandes cartographiées dans une interface Flutter utilitaire via l'API Consumer IR d'Android.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Executing under strict constraints.',
          fr: 'Exécution sous contraintes strictes.',
        },
        detail: {
          en: 'Turned a dead hardware blocker into a fully functional, custom-engineered solution in under 72 hours using zero budget and zero reference material.',
          fr: "Transformation d'un blocage matériel en une solution fonctionnelle en moins de 72 heures, sans budget ni matériel de référence.",
        },
      },
      {
        title: {
          en: 'Building diagnostic tooling instead of guessing.',
          fr: 'Créer des outils de diagnostic au lieu de deviner.',
        },
        detail: {
          en: 'Instead of manually testing hex codes one by one in code, I built a dark-mode diagnostic UI that turned tedious hex-testing into a fast, repeatable loop.',
          fr: "Au lieu de tester manuellement le code hexadécimal, j'ai créé une interface de diagnostic qui a rendu les tests rapides et reproductibles.",
        },
      },
      {
        title: {
          en: 'Accepting absolute hardware limits.',
          fr: 'Accepter les limites matérielles absolues.',
        },
        detail: {
          en: 'The discrete "Power On" command remains unsolvable because the cheap TV cuts all power to the IR receiver during standby. Diagnosing and accepting that physical wall was a massive engineering lesson.',
          fr: 'La commande "Allumer" reste insoluble car la TV coupe l\'alimentation du récepteur IR en veille. Diagnostiquer et accepter ce mur physique fut une grande leçon.',
        },
      },
    ],
    tradeoffs: {
      en: [
        'Prioritized low-level protocol mapping and hardware reliability over polished UI design — built as a 3-day utility prototype, not a commercial visual showcase.',
        'Only works with the exact SMASNUG TV model reverse-engineered during the sprint.',
        'Requires an Android device with a built-in physical IR blaster.',
        "The 'Wake/Power On' function does not work due to the TV's hardware-level standby power restrictions.",
      ],
      fr: [
        "Priorité donnée à la cartographie bas niveau plutôt qu'au design — construit comme un prototype utilitaire de 3 jours.",
        'Fonctionne uniquement avec le modèle SMASNUG spécifique rétro-ingénieré.',
        'Nécessite un appareil Android avec un émetteur infrarouge physique intégré.',
        "La fonction 'Allumer' ne fonctionne pas en raison des restrictions d'alimentation de la TV en mode veille.",
      ],
    },
    learned: {
      en: [
        'Low-level Android Consumer IR API integration',
        'Hardware protocol reverse engineering',
        'Rapid prototyping under strict time constraints',
      ],
      fr: [
        'Intégration de l’API Consumer IR bas niveau d’Android',
        'Rétro-ingénierie de protocoles matériels',
        'Prototypage rapide sous contraintes temporelles strictes',
      ],
    },
  },
  //* AI Partner
  {
    slug: 'ai-partner',
    name: 'AI Partner',
    tagline: {
      en: 'Offline ML translation engine demonstrating strict architecture boundaries.',
      fr: 'Moteur de traduction ML hors-ligne démontrant des frontières architecturales strictes.',
    },
    description: {
      en: 'A zero-latency, on-device OCR and translation assistant powered by Google ML Kit. Built as a proving ground to rigorously apply Clean Architecture, Dependency Injection, and the BLoC pattern in a Flutter environment.',
      fr: "Un assistant d'OCR et de traduction local sans latence propulsé par Google ML Kit. Conçu comme un terrain d'essai pour appliquer rigoureusement la Clean Architecture, l'injection de dépendances et le pattern BLoC avec Flutter.",
    },
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: [
      'Flutter',
      'Clean Architecture',
      'BLoC/Cubit',
      'Google ML Kit',
      'Offline-First',
      'OCR / Text Recognition',
    ],
    demoUrl: '',
    releaseUrl: 'https://github.com/jecem-ben-slama/Ai_Partner/releases/latest',
    githubUrl: 'https://github.com/jecem-ben-slama/Ai_Partner',
    image: 'assets/aipartner/logo.svg',
    screenshots: [
      {
        src: 'assets/aipartner/text-extraction.gif',
        caption: {
          en: 'Real-time On-Device Text Extraction (OCR)',
          fr: "Extraction de texte sur l'appareil en temps réel (OCR)",
        },
      },
      {
        src: 'assets/aipartner/translation.gif',
        caption: {
          en: 'Real-time Translator Screen',
          fr: 'Écran de traduction en temps réel',
        },
      },
      {
        src: 'assets/aipartner/tts.gif',
        caption: {
          en: 'Text-to-Speech Playback',
          fr: 'Lecteur de synthèse vocale ',
        },
      },
    ],
    hook: {
      en: 'Most state management tutorials focus on simple CRUD screens. I wanted to prove I could handle complex, asynchronous state. I built an offline translation app because managing large background model downloads, hardware haptics, and offline availability forces you to either respect architectural boundaries or watch your app break.',
      fr: "La plupart des tutoriels se limitent à de simples écrans CRUD. Je voulais prouver ma capacité à gérer des états asynchrones complexes. J'ai créé cette application car la gestion des téléchargements de modèles en arrière-plan et de la disponibilité hors-ligne oblige à respecter les frontières architecturales.",
    },
    problem: {
      en: 'Cloud-based OCR and translation apps compromise user privacy, introduce high latency, and fail without network access. The challenge was building an offline-first solution that parses physical text and processes languages locally while leveraging native background threads to avoid blocking the UI during heavy ML operations.',
      fr: "Les applications d'OCR et de traduction basées sur le cloud compromettent la confidentialité, introduisent de la latence et nécessitent un réseau. Le défi était de créer une solution hors-ligne extrayant le texte physique et traitant les langues localement tout en exploitant des threads natifs pour éviter de bloquer l'UI.",
    },
    how: {
      en: [
        'Enforced unidirectional data flow via Cubits—the presentation layer blindly reacts to emitted states and contains zero business logic.',
        'Encapsulated third-party SDKs (Google ML Kit, Flutter TTS) inside a dedicated Service layer, preventing vendor lock-in across the application core.',
        'Delegated heavy machine learning computations and model downloads to native background threads via platform channels, keeping the Dart UI thread fluid.',
        'Managed app-wide dependency injection through MultiRepositoryProvider, ensuring clean lifecycle control for all services and repositories.',
      ],
      fr: [
        "Application d'un flux de données unidirectionnel via des Cubits—la couche de présentation réagit aveuglément aux états sans logique métier.",
        'Encapsulation des SDK tiers (Google ML Kit, Flutter TTS) dans une couche de service dédiée pour éviter le vendor lock-in.',
        'Délégation des calculs ML lourds et des téléchargements vers des threads natifs en arrière-plan pour maintenir une UI fluide.',
        "Gestion de l'injection de dépendances globale via MultiRepositoryProvider pour un contrôle propre du cycle de vie.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Keeping the UI genuinely dumb.',
          fr: 'Garder l’interface utilisateur strictement passive.',
        },
        detail: {
          en: 'The presentation layer strictly listens to states and renders UI. It contains no business logic, no try-catch error parsing, and no direct service calls.',
          fr: "La couche de présentation écoute strictement les états et s'affiche. Elle ne contient aucune logique métier ni appel direct aux services.",
        },
      },
      {
        title: {
          en: 'Pragmatic Service Encapsulation.',
          fr: 'Encapsulation pragmatique des services.',
        },
        detail: {
          en: 'By wrapping ML Kit in a concrete service singleton, third-party implementation details are kept completely isolated from the business logic layer.',
          fr: "En encapsulant ML Kit dans un service singleton concret, les détails d'implémentation tiers restent totalement isolés de la logique métier.",
        },
      },
      {
        title: {
          en: 'Non-blocking Native Execution.',
          fr: 'Exécution native non bloquante.',
        },
        detail: {
          en: 'Leveraging asynchronous execution and platform channels allowed model downloads and identification to run without frame drops.',
          fr: "L'exploitation de l'exécution asynchrone a permis d'exécuter les téléchargements et identifications sans perte de fluidité.",
        },
      },
    ],
    tradeoffs: {
      en: [
        'App Size vs. Privacy: Bundling offline ML models increases the initial app footprint, but guarantees zero-latency and absolute user data privacy.',
        'Boilerplate vs. Modularity: Implementing a structured Clean Architecture approach for a focused utility app introduced development overhead, but delivered a highly testable, predictable codebase.',
      ],
      fr: [
        "Taille de l'app vs Confidentialité : L'intégration de modèles ML locaux augmente le poids de l'application, mais garantit une absence de latence et une confidentialité absolue.",
        "Boilerplate vs Modularité : L'implémentation d'une architecture structurée a demandé plus de temps, mais a produit un code hautement testable et prévisible.",
      ],
    },
    learned: {
      en: [
        'Structuring state boundaries in Flutter with BLoC',
        'Isolating external SDK dependencies cleanly',
        'Handling asynchronous native platform channels',
      ],
      fr: [
        "Structuration des frontières d'état dans Flutter avec BLoC",
        'Isolation propre des dépendances SDK externes',
        'Gestion des canaux de communication natifs asynchrones',
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
    learned: {
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
    learned: {
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
    learned: {
      en: [],
      fr: [],
    },
  },
];
