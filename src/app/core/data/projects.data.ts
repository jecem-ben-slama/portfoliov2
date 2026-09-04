import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  //* ApplyFlow
  {
    slug: 'applyflow',
    name: 'ApplyFlow',
    tagline: {
      en: 'Job application automation system with stage-by-stage success tracking.',
      fr: "Système d'automatisation de candidatures avec suivi de réussite par étape.",
    },
    description: {
      en: 'An automated email dispatch tool that tracks application progress to pinpoint exactly where rejections happen (e.g., ignored resumes vs. failed interviews).',
      fr: "Un outil d'envoi automatisé qui suit l'avancement des candidatures pour identifier précisément à quelle étape surviennent les refus (ex: CV ignorés vs entretiens ratés).",
    },
    categories: ['web-frontend', 'backend'],
    featured: true,
    status: 'shipped',
    tags: [
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
      'OAuth 2.0',
      'Bucket4j',
    ],
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
        src: 'assets/applyflow/template.png',
        caption: {
          en: 'Template editor with dynamic placeholders',
          fr: 'Éditeur de modèles avec balises dynamiques',
        },
      },
      {
        src: 'assets/applyflow/dashboard-overview.png',
        caption: {
          en: 'Stage-by-stage overview: tracking application progress from dispatch to final offer',
          fr: "Vue d'ensemble : suivi des étapes de candidature, de l'envoi à l'offre finale",
        },
      },
      {
        src: 'assets/applyflow/performance-breakdown.png',
        caption: {
          en: 'Performance breakdown: comparing response rates across CVs, languages, job titles, and templates',
          fr: 'Analyse des performances : comparaison des taux de réponse par CV, langue, poste et modèle',
        },
      },
    ],
    hook: {
      en: 'I built this after grinding through internship applications myself. The automation started as a fix for rewriting cover letters and attaching the right CV every time. But what kept me using it was the visual tracking: breaking the job hunt into stages helped me see exactly where I was failing—whether my CV was getting ignored early on, or if I was losing offers during the interviews.',
      fr: "J'ai conçu cet outil après avoir enchaîné les candidatures de stage. L'automatisation a commencé comme un correctif pour éviter de réécrire les lettres de motivation et de joindre le bon CV à chaque fois. Mais ce qui m'a poussé à continuer, c'est le suivi visuel : diviser la recherche d'emploi en étapes m'a aidé à voir exactement où j'échouais — si mon CV était ignoré d'entrée de jeu, ou si je perdais des offres lors des entretiens.",
    },
    problem: {
      en: "Manually applying to jobs means juggling CV variants, rewriting templates, and tracking statuses in a spreadsheet that's always out of sync. ApplyFlow fixes both: it provides reliable, automated email dispatch through the Gmail API, and tracks status changes to show exactly which stages of the job hunt need improvement.",
      fr: "Postuler manuellement implique de jongler entre plusieurs variantes de CV, de réécrire des modèles et de suivre les statuts dans un tableur toujours désynchronisé. ApplyFlow résout ces deux problèmes : il assure un envoi automatisé et fiable via l'API Gmail, et suit les changements de statut pour montrer exactement quelles étapes de la recherche d'emploi doivent être améliorées.",
    },
    how: {
      en: [
        'Build a reusable email template with placeholders for company, position, and skills — in French or English.',
        'At send time, placeholders are swapped for the target company, with a live preview of exactly how the final email will read before dispatch.',
        'Backend streams the matching CV from Google Drive directly into the email payload in memory — bypassing the database entirely.',
        "Email sends through the Gmail API on the user's behalf via OAuth.",
        'If Gmail is down or rate-limited, the application state machine holds the application in a "compiled" state instead of failing — dropping zero data.',
        'Every status change is logged (sent, rejected, interview, offer) to calculate success and drop-off rates.',
      ],
      fr: [
        "Création d'un modèle d'e-mail réutilisable avec des balises pour l'entreprise, le poste et les compétences — en français ou en anglais.",
        "Au moment de l'envoi, les balises sont remplacées par les informations de l'entreprise cible, avec un aperçu en direct.",
        "Le backend récupère le CV depuis Google Drive et l'injecte directement en mémoire dans la charge utile de l'e-mail — en évitant la base de données.",
        "L'e-mail est envoyé via l'API Gmail pour le compte de l'utilisateur via OAuth.",
        'En cas de panne de Gmail, la machine à états retient la candidature à l’état "compilé" pour éviter toute perte de données.',
        "Chaque changement de statut (envoyé, refusé, entretien, offre) est enregistré pour calculer les taux de réussite et d'abandon.",
      ],
    },
    proud: [
      {
        title: {
          en: 'Stage-by-stage tracking to isolate failures.',
          fr: 'Suivi par étape pour isoler les échecs.',
        },
        detail: {
          en: 'Tracks application success rates from submission to offer. Seeing exactly where an application dies makes it obvious if the problem is a bad CV (early rejection) or poor interview skills (late rejection). Includes response tracking across different CVs to see which version earns more interview callbacks.',
          fr: "Suit les taux de réussite de l'envoi à l'offre. Voir exactement où une candidature s'arrête permet de savoir si le problème vient d'un mauvais CV (refus précoce) ou de lacunes en entretien (refus tardif). Inclut un suivi des réponses selon les versions de CV pour identifier quelle version décroche le plus d'entretiens.",
        },
      },
      {
        title: {
          en: 'A template system that scales.',
          fr: 'Un système de modèles évolutif.',
        },
        detail: {
          en: 'Dynamic placeholders for company, position, and skills, filled per application in French or English, with a live payload preview before execution.',
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
        'Streaming CVs synchronously from Google Drive saved database storage space, but introduced external network latency — requiring aggressive HTTP timeouts to prevent backend thread starvation.',
        'Buffering PDF bytes into JVM heap memory kept PostgreSQL lean, but created a potential memory bottleneck under high concurrency.',
        'Cover letter generation uses dynamic template placeholders rather than an AI/LLM wrapper — prioritizing predictable formatting and execution speed over generative text.',
        'Currently load-tested only for single-user capacity. Next milestone: building a Testcontainers suite that explicitly mocks Gmail API 500 errors and rate-limit responses.',
      ],
      fr: [
        'Le streaming des CV depuis Drive économise de l’espace en base de données, mais introduit une latence réseau — nécessitant des timeouts HTTP stricts pour éviter la saturation des threads.',
        'Le stockage temporaire des octets du CV dans la mémoire JVM évite d’encombrer PostgreSQL, mais crée un goulot potentiel sous forte charge.',
        'La génération des lettres de motivation utilise des balises de modèles dynamiques plutôt qu’une IA — privilégiant un formatage prévisible et la rapidité d’exécution.',
        'Testé uniquement pour un usage mono-utilisateur à ce stade. Prochaine étape : suite de tests Testcontainers simulant les erreurs d’API.',
      ],
    },
    learned: {
      en: [
        'Building token-bucket rate limiters in Spring Boot using Bucket4j to prevent HTTP 429 quota exhaustion',
        'Implementing memory-efficient file streaming to bypass PostgreSQL BLOB storage by passing byte arrays directly in JVM memory',
        'Designing defensive UI patterns with contextual "?" tooltips to clarify complex metrics and prevent user confusion',
      ],
      fr: [
        'Mise en place de limiteurs de débit avec Bucket4j sous Spring Boot pour éviter les erreurs HTTP 429',
        'Implémentation d’un streaming de fichiers économe en mémoire pour contourner le stockage BLOB dans PostgreSQL',
        'Conception d’interfaces défensives avec des infobulles contextuelles « ? » pour clarifier les métriques complexes',
      ],
    },
    lessons: {
      en: [
        'Never trust user behavior to follow linear happy paths: users will routinely skip workflow steps (e.g. jumping from "Applied" directly to "Offer"), so the backend must automatically backfill missing state gaps to protect data integrity.',
        'Never trust third-party availability: external API integrations like Google Drive require aggressive client timeouts to keep slow HTTP calls from exhausting system thread pools.',
      ],
      fr: [
        'Ne jamais faire confiance au comportement utilisateur : les utilisateurs sautent systématiquement des étapes (ex: passer de "Candidaté" à "Offre"). Le backend doit combler automatiquement ces lacunes pour préserver l’intégrité des données.',
        'Ne jamais faire confiance à la disponibilité des services tiers : les API externes comme Google Drive nécessitent des timeouts stricts pour éviter d’épuiser les pools de threads.',
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
        'NEC packets need a valid 8-bit system address. Brute-forced that address space (0x00–0xFF) against the physical TV until it responded.',
        'Built a custom internal diagnostic UI to fire hex commands at the TV and label what each one did — capture, label, verify, repeat.',
        "Wired the mapped command set into a raw, utilitarian Flutter frontend via Android's native Consumer IR API.",
      ],
      fr: [
        "Acquisition de domaine : Avant de coder, j'ai étudié le fonctionnement physique des télécommandes IR (fréquences porteuses, modulation de distance d'impulsion, signalisation matérielle) pour comprendre les attentes du récepteur.",
        'Analyse de la documentation réglementaire pour identifier le matériel, pointant vers le protocole IR NEC.',
        "Compilation de 8 pages de fréquences porteuses à tester. Coup de chance : la TV a répondu à une fréquence de la deuxième page, validant immédiatement l'approche.",
        "Force brute de l'espace d'adressage 8 bits (0x00–0xFF) jusqu'à obtenir une réponse de la TV.",
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
          en: 'Instead of manually testing hex codes one by one in code, I built a UI that turned tedious hex-testing into a fast, repeatable loop.',
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
    lessons: {
      en: [
        "Know when to stop fighting the hardware: after hours of brute-forcing, I had to accept defeat because I simply could not crack the secret of the actual remote's wake-up signal.",
        'When developing quickly to solve an immediate problem, UI elegance takes a back seat. A quick-and-dirty interface that gets the job done right now is infinitely better than a polished design that never gets finished.',
        'Documentation is a luxury; when working with unbranded legacy hardware, the device itself is your only source of truth.',
      ],
      fr: [
        'Savoir quand abandonner la lutte contre le matériel : après des heures de force brute, j’ai dû accepter la défaite car je n’ai tout simplement pas pu percer le secret du véritable signal de réveil de la télécommande.',
        'Lors d’un développement rapide pour résoudre un problème immédiat, l’élégance de l’interface passe au second plan. Une interface vite fait, bien fait qui résout le problème tout de suite vaut infiniment mieux qu’un design léché qui ne voit jamais le jour.',
        'La documentation est un luxe ; lorsque l’on travaille avec du matériel non genré ou de récupération, l’appareil lui-même est votre unique source de vérité.',
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
      en: 'Cloud-based translation apps compromise privacy and fail offline. I built an offline-first, zero-latency OCR and translation engine to rigorously test Clean Architecture and handle heavy asynchronous ML model downloads without dropping UI frames',
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
    lessons: {
      en: [
        'A powerful feature matters little if the user abandons it out of frustration. A silent loading spinner while downloading a 30MB language model in the background makes the app feel broken. I learned that transparent communication requires a multi-sensory approach: using distinct haptic vibrations, audio cues, and system notifications to explicitly signal background progress is just as critical as the core feature itself.',
      ],
      fr: [
        "Une fonctionnalité puissante a peu de valeur si l'utilisateur l'abandonne par frustration. Un indicateur de chargement silencieux pendant le téléchargement d'un modèle de 30 Mo donne l'impression que l'application a planté. J'ai appris qu'une communication transparente doit être multisensorielle : utiliser des vibrations haptiques distinctes, des retours sonores et des notifications pour signaler clairement la progression en arrière-plan est tout aussi crucial que la fonctionnalité elle-même.",
      ],
    },
  },
  //* IIT Internship
  {
    slug: 'IIT-Internship-Workflow',
    name: 'IIT-Internship-Workflow',
    tagline: {
      en: 'Academic internship tracking and workflow management platform.',
      fr: 'Plateforme de Suivi Académique des Stages.',
    },
    description: {
      en: 'A Spring Boot and Angular platform built to centralize and digitize the academic internship supervision process, ensuring traceability of exchanges and document versions.',
      fr: 'Une plateforme Angular/Spring Boot conçue pour centraliser et digitaliser le processus de suivi des stages académiques, assurant la traçabilité des échanges.',
    },
    categories: ['backend'],
    featured: false,
    status: 'shipped',
    tags: [
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'WebSockets',
      'Hibernate/JPA',
    ],
    demoUrl: '',
    releaseUrl: '',
    apiUrl:
      'https://iit-851148.docs.buildwithfern.com/internship-manager/introduction',
    githubUrl:
      'https://github.com/jecem-ben-slama/InternshipManagerApplication',
    image: 'assets/iit/logo-dark.svg',
    screenshots: [],
    hook: {
      en: 'A centralized backend platform that replaced a chaotic legacy workflow of static PDFs and WhatsApp messages with a unified application lifecycle and supervision pipeline.',
      fr: 'Une plateforme back-end centralisée remplaçant un flux de travail chaotique (PDFs statiques et messages WhatsApp) par un cycle de vie de candidature et un pipeline de supervision unifiés.',
    },
    problem: {
      en: 'The internship process was heavily fragmented: students picked from a static PDF, cold-emailed teachers, and communicated via WhatsApp. This caused severe information loss, zero traceability for administration, and a high risk of lost reports.',
      fr: "Le processus de stage était fortement fragmenté : sélection via un PDF statique, emails à froid aux enseignants, et communication via WhatsApp. Cela causait une perte d'information sévère, aucune traçabilité pour l'administration, et un risque élevé de perte de rapports.",
    },
    how: {
      en: [
        'Professors publish project topics with set student quotas, while students can also submit custom project proposals directly to a supervisor.',
        'Students apply to available projects, and the platform tracks each application status in real time.',
        'The moment a supervisor accepts a student and hits their quota limit, the backend automatically mass-rejects all remaining pending applications for that project.',
        'Once paired, the supervisor and student unlock a private workspace featuring live messaging (STOMP WebSockets) and secure document exchange.',
        'Every operation runs through a centralized error handler, ensuring failed uploads or constraint violations return clear messages rather than breaking the frontend.',
      ],
      fr: [
        'Les enseignants publient leurs sujets avec un quota d’étudiants, tandis que les étudiants peuvent aussi proposer leurs propres sujets directement.',
        'Les étudiants postulent aux projets disponibles, et la plateforme suit l’état de chaque demande en temps réel.',
        'Dès qu’un enseignant accepte un étudiant et atteint son quota, le backend rejette automatiquement toutes les autres candidatures en attente pour ce projet.',
        'Une fois le binôme validé, l’étudiant et l’enseignant accèdent à un espace privé avec messagerie en temps réel (STOMP WebSockets) et partage sécurisé de documents.',
        'Toutes les opérations passent par un gestionnaire d’erreurs centralisé, garantissant des messages clairs au lieu de faire planter l’interface en cas de problème.',
      ],
    },
    proud: [
      {
        title: {
          en: 'Pragmatic Storage Abstraction',
          fr: 'Abstraction de Stockage Pragmatique',
        },
        detail: {
          en: 'Used Dependency Injection to abstract file handling behind a StorageService interface. The MVP relies on simple local storage, but this decoupled design allows for an easy migration to cloud providers (AWS S3) in the future.',
          fr: "Utilisation de l'injection de dépendances pour abstraire la gestion des fichiers via une interface StorageService. Le MVP s'appuie sur un stockage local simple, mais cette architecture découplée facilite une future migration vers le cloud (AWS S3).",
        },
      },
      {
        title: {
          en: 'Efficient Data Fetching',
          fr: 'Récupération Efficace des Données',
        },
        detail: {
          en: 'Eliminated N+1 bottlenecks on the dashboard views using standard DTO projections and JOIN FETCH queries to maintain response times well under the strict 2-second requirement.',
          fr: "Élimination des goulots d'étranglement N+1 sur les tableaux de bord en utilisant des projections DTO et JOIN FETCH pour maintenir un temps de réponse bien inférieur à l'exigence stricte de 2 secondes.",
        },
      },
    ],
    tradeoffs: {
      en: [
        'Used fire-and-forget async emails without a failure queue, eliminating the need for a dedicated message broker to keep infrastructure simple.',
        'Omitted explicit database indexing for the MVP, relying on a school_year column for logical partitioning after correctly identifying that the low data volume per supervisor made full-table scans a non-issue.',
      ],
      fr: [
        "Utilisation d'e-mails asynchrones \"fire-and-forget\" sans file d'attente d'échecs, éliminant le besoin d'un broker de messages pour simplifier l'infrastructure.",
        "Omission de l'indexation explicite de la base de données pour le MVP, en s'appuyant sur une colonne school_year pour le partitionnement logique, ayant identifié que le faible volume de données par encadrant rendait les requêtes non problématiques.",
      ],
    },
    learned: {
      en: [
        'Enforcing the database as the strict single source of truth, shifting away from brittle frontend state management to robust backend validation.',
        'Scoping MVP features and balancing technical debt against time-to-market.',
        'Securing REST APIs against Insecure Direct Object Reference (IDOR) vulnerabilities.',
        'Managing database transactions to ensure ACID compliance during bulk entity updates.',
      ],
      fr: [
        "Imposer la base de données comme unique source de vérité, passant d'une gestion d'état front-end fragile à une validation back-end robuste.",
        'Définition du périmètre MVP et équilibrage entre dette technique et délai de mise sur le marché.',
        'Sécurisation des API REST contre les vulnérabilités de référence directe à un objet (IDOR).',
        'Gestion des transactions de base de données pour assurer la conformité ACID lors des mises à jour en masse.',
      ],
    },
    lessons: {
      en: [
        "This was my first real collaborative project, and I learned that an API response is itself a form of communication, not just a technical contract — my friend building the frontend had no reason to dig through my backend code to understand why something failed, which is why I stopped writing errors for myself and started writing them for someone who'd never seen my code.",
      ],
      fr: [
        "C'était mon premier vrai projet collaboratif, et j'ai compris qu'une réponse API est en soi une forme de communication, pas seulement un contrat technique — mon ami qui développait le frontend n'avait aucune raison de fouiller dans mon code backend pour comprendre un échec, c'est pourquoi j'ai arrêté d'écrire des erreurs pour moi-même et j'ai commencé à les écrire pour quelqu'un qui n'avait jamais vu mon code.",
      ],
    },
  },
];
