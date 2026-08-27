export const fr = {
  nav: {
    projects: 'Projets',
    experience: 'Expérience',
    education: 'Formation',
    contact: 'Contact',
    resume: 'CV',
  },

  hero: {
    eyebrow: 'Ingénieur logiciel',

    title: 'Comprendre l’architecture logicielle, un système à la fois.',

    description:
      'Étudiant en ingénierie informatique, spécialisé dans le développement Flutter et les backends avec Spring Boot, avec un intérêt particulier pour la gestion d’état, les API sécurisées et la création d’outils pratiques de bout en bout.',

    viewProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
  },

  about: {
    eyebrow: 'À propos',
    title: 'Un développeur passionné par la création.',
    description:
      'Je suis étudiant en ingénierie informatique, intéressé par le génie logiciel, le développement mobile et les technologies web modernes.',
    description2:
      'J’aime transformer des idées en applications fonctionnelles et bien conçues, tout en développant continuellement mes compétences et en découvrant de nouvelles technologies.',
  },

  projects: {
    eyebrow: 'Réalisations',
    title: 'Mes réalisations concrètes',
    viewProject: 'Voir le projet',
    featured: 'En vedette',
    setImage: 'image : définir project.image',
    viewCode: 'Voir le code',
    readMore: 'Lire l’analyse détaillée',
    // Add these project detail labels:
    allProjects: 'Tous les projets',
    liveDemo: 'Démo en direct',
    github: 'GitHub',
    stack: 'Technologies',
    problem: 'Le problème',
    howItWorks: 'Fonctionnement',
    proudOf: 'Ce dont je suis fier',
    tradeoffs: 'Compromis et leçons',
    processPractices: 'Processus et pratiques',
    notFound: 'Projet introuvable.',
    backHome: "Retour à l'accueil",
  },
  experience: {
    eyebrow: 'Expérience',

    steg: {
      role: 'Stagiaire développeur mobile & full-stack',
      organization: 'STEG CTI',
      dateRange: 'Juillet 2025',

      bullets: [
        'Développement d’un tableau de bord de gestion des stages sous forme de Proof-of-Concept (PoC) avec Flutter Web et PHP, afin de valider la viabilité d’un outil multiplateforme unifié pour le personnel administratif.',

        'Mise en place de BLoC pour assurer une gestion d’état prévisible sur le client web et contourner les problèmes courants de blocage de l’interface liés au rendu Flutter Web.',

        'Sécurisation des endpoints backend avec une authentification JWT et un contrôle d’accès basé sur les rôles (RBAC), établissant une base REST API sécurisée pour environ 10 utilisateurs internes simultanés.',
      ],
    },

    cvpt: {
      role: 'Stagiaire développeur mobile Flutter',
      organization: 'CVPT',
      dateRange: 'Janv. 2024 – Mai 2024',

      bullets: [
        'Conception d’un Proof-of-Concept visant à valider la faisabilité technique de la migration d’une application mobile native existante vers une base de code Flutter unifiée.',

        'Mise en place de l’architecture initiale du projet en appliquant les principes de Clean Architecture et en découplant strictement les couches présentation, domaine et données pour faciliter la reprise du projet par l’équipe.',

        'Intégration de BLoC pour gérer les flux de données REST API asynchrones, optimiser les reconstructions des widgets et éviter une gestion d’état difficile à maintenir.',
      ],
    },

    evastin: {
      role: 'Stagiaire développeur UI Flutter',
      organization: 'EVASTIN',
      dateRange: 'Juillet 2023 – Août 2023',

      bullets: [
        'Transformation de maquettes Figma statiques en écrans d’interface Flutter pour deux applications e-commerce.',

        'Mise en pratique des fondamentaux de l’arbre de widgets Flutter, notamment la composition des layouts avec Rows, Columns et Stacks ainsi que le routage basique de l’interface.',

        'Livraison de prototypes frontend visuels et statiques permettant aux parties prenantes de valider les parcours UI/UX avant toute intégration backend.',
      ],
    },
  },

  education: {
    eyebrow: 'Formation',

    iit: {
      degree: 'Diplôme d’ingénieur - Informatique',
      institution: 'Institut International de Technologie (IIT)',
      dateRange: '2024 – Présent',
    },

    istic: {
      degree: 'Licence - IoT & Systèmes embarqués',
      institution:
        'Institut Supérieur des Technologies de l’Information et de la Communication (ISTIC)',
      dateRange: '2021 – 2024',
    },
  },

  skills: {
    eyebrow: 'Technologies',
    title: 'Compétences',

    languages: 'Langages de programmation',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    database: 'Bases de données',
    tools: 'Outils',
  },

  contact: {
    eyebrow: 'Contact',

    title:
      'À la recherche d’un poste junior en ingénierie logicielle, orienté mobile et backend.',

    description:
      'Vous souhaitez échanger sur une opportunité ou discuter d’un projet ? N’hésitez pas à me contacter.',

    email: 'M’envoyer un e-mail',

    resume: 'Télécharger le CV',
    copied: 'copié dans le presse-papiers',
    copy: 'copier l’adresse e-mail',
  },

  footer: {
    rights: 'Tous droits réservés.',
    builtWith: 'Créé avec Angular',
  },
  filters: {
    all: 'Tous',
    commercial: 'Commercial',
    mobile: 'Mobile',
    webFrontend: 'Web Frontend',
    backend: 'Backend & API',
  },
};
