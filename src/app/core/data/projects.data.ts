import { Project } from '../models/project.model';

/**
 * This array is the single source of truth for every project card and
 * detail page on the site. Add a new project by pushing a new object here —
 * nothing else needs to change for it to show up in the grid, the filter
 * bar, and its own /projects/:slug route.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'applyflow',
    name: 'ApplyFlow',
    tagline: 'Automated job application CRM with diagnostic analytics',
    description:
      'Tracks where in the pipeline each rejection happens, so you can tell if the problem is your CV, your targeting, or your interviews — while automating the send.',
    categories: ['web-frontend', 'backend'],
    featured: true,
    status: 'shipped',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'OAuth 2.0'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      { src: '', caption: 'Live preview: stitched email before send' },
      { src: '', caption: 'Analytics: rejection stage breakdown' },
      { src: '', caption: 'Template editor with placeholders' }
    ],
    hook:
      "I built this after grinding through internship applications myself. The automation started as a fix for rewriting cover letters and attaching the right CV every time — but what kept me using it was the analytics: when you're getting rejected a lot, it's hard to tell if it's your CV, your targeting, or your interviews. This tells you which.",
    problem:
      "Manually applying to jobs means juggling CV variants, rewriting templates, and tracking statuses in a spreadsheet that's always a little out of date — and even when you do track it, a spreadsheet doesn't tell you why you're being rejected. ApplyFlow fixes both: it automates the dispatch, and it tracks the pipeline stage of every rejection so patterns actually surface.",
    how: [
      'Build a reusable email template with placeholders for company, position, and skills — in French or English.',
      "At send time, placeholders auto-fill for the target company, with a live preview of exactly how the final email will read before anything goes out.",
      "Backend streams the matching CV from Google Drive straight into the email — it's never stored in the database.",
      'Email sends through the Gmail API on the user\'s behalf via OAuth.',
      'If Gmail is down or rate-limited, the application holds in a "compiled" state instead of failing — nothing is lost.',
      'Every state change is logged — sent, rejected, interview, offer — feeding the analytics.'
    ],
    proud: [
      {
        title: "Analytics that tell you what's actually wrong.",
        detail:
          'It tracks whether a rejection came before or after an interview. Rejected before ever getting a call means a CV or targeting problem; rejected after means something else entirely. It also breaks results down by which CV and template performed best.'
      },
      {
        title: "A template engine that doesn't feel like fill-in-the-blank.",
        detail:
          'Placeholders for company, position, and skills, auto-filled per application in French or English, with a live preview before send.'
      },
      {
        title: 'Handling failure without losing data.',
        detail:
          "Dispatch runs as a state machine, not a fire-and-forget call. A rate-limiter (Bucket4j, capped just under Google's quota) throttles the backend before Google does it for me."
      },
      {
        title: "Not storing files I don't need to store.",
        detail:
          'CVs live in Google Drive, not Postgres. The backend pulls the bytes and pipes them straight into the outgoing email in memory.'
      }
    ],
    tradeoffs: [
      "Streaming CVs from Drive saved database space but added a dependency on Drive's response time — needed strict timeouts so a slow response couldn't hang a dispatch thread indefinitely.",
      'Users skip statuses (jump straight from "applied" to "offer"), so state transitions had to be backfilled to keep analytics accurate.',
      "Cover letter personalization is templated, not AI-generated — the automation handles the repetitive swap-in details, not the substance of why I want the job. That still gets a human pass.",
      "Haven't load-tested beyond my own usage yet. Next up: a test suite that simulates Gmail failures and rate-limit responses to confirm the retry logic actually behaves as intended."
    ],
    learned: [
      // TODO: fill in with real specifics, e.g.:
      // 'Used separate dev/prod branches with Render and Vercel auto-deploying from each — dev branch deployed to a staging URL so I could break things without touching the live app.',
      // 'Made the backend the single source of truth for application state instead of trusting the frontend's local copy — the Angular app reflects state from Postgres, it never assumes what happened.'
    ]
  },
  {
    slug: 'remote-control',
    name: 'Remote Control',
    tagline: 'A phone remote for a TV with zero documentation',
    description:
      'When my TV remote broke, I reverse-engineered the undocumented IR protocol from scratch and built a Flutter app to replace it.',
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: ['Flutter', 'Dart', 'Android Consumer IR API', 'Provider'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      { src: '', caption: 'Remote UI in use' },
      { src: '', caption: 'Internal command mapping tool' }
    ],
    hook:
      "My TV's remote broke and no replacement existed for that model, so I decided to control it from my phone instead. There was no documentation for the hardware anywhere — before I could write a line of app code, I had to reverse-engineer the infrared protocol from scratch.",
    problem:
      "Universal remote apps assume the manufacturer's command set is known or discoverable. Mine wasn't. No datasheet, no protocol reference — just a TV with an IR receiver and a phone with an IR blaster. Getting from nothing to a working remote meant treating the TV itself as the only source of truth.",
    how: [
      "Started from the TV's regulatory and licensing documentation to narrow down the receiver hardware, pointing to the NEC IR protocol.",
      'NEC packets need a valid 8-bit system address before the receiver parses anything. Brute-forced that address space (0x00–0xFF) against the physical TV until it responded — it answered at 0x01.',
      'Built a small internal tool to fire hex commands at the TV and label what each one did — capture, label, verify, repeat.',
      "Compiled the mapped command set into a fixed configuration registry, wired into a Flutter frontend via Android's native Consumer IR API."
    ],
    proud: [
      {
        title: 'Getting a real answer with no reference material.',
        detail:
          'No protocol doc to check work against — every step was validated against the physical TV itself, including a real brute-force search for the system address.'
      },
      {
        title: 'Building my own tooling instead of guessing manually.',
        detail:
          'A small diagnostic UI for the mapping phase turned tedious manual hex-testing into a fast, repeatable loop.'
      },
      {
        title: 'Keeping the app clean once the hard part was done.',
        detail:
          "Hardware discovery was messy by nature; the shipped app isn't. State management and hardware I/O stay cleanly separated."
      }
    ],
    tradeoffs: [
      "Only works with the exact TV it was reverse-engineered against — it isn't a universal remote, and the write-up says so directly rather than overselling it.",
      'Requires a phone with a built-in IR blaster, which rules out most modern phones.',
      'The discovery tooling (address brute-forcing, frequency sweeping) is internal-only right now. Next step: expose it as a guided in-app workflow so someone else with unsupported hardware can run the same process themselves.'
    ]
  },
  {
    slug: 'ai-partner',
    name: 'AI Partner',
    tagline: 'Offline translation app, built to actually learn Clean Architecture',
    description:
      'A self-directed project to properly learn Clean Architecture and BLoC — an on-device translation app using Google ML Kit, with no internet required and nothing leaving the phone.',
    categories: ['mobile'],
    featured: true,
    status: 'shipped',
    tags: ['Flutter', 'Clean Architecture', 'BLoC/Cubit', 'Google ML Kit'],
    demoUrl: '',
    githubUrl: '',
    image: '',
    screenshots: [
      { src: '', caption: 'Translator screen' },
      { src: '', caption: 'Text-to-speech player' }
    ],
    hook:
      'I built this specifically to practice Clean Architecture and the BLoC/Cubit pattern properly, instead of just reading about them. I wanted something with real complexity to make the architecture worth it — an on-device translation app fit, since state actually changes over time (model downloads, offline availability, playback) rather than being a simple CRUD screen.',
    problem:
      'A Flutter app that translates and identifies languages entirely on-device using Google ML Kit, so it works with no internet connection and nothing leaves the phone. It also includes text-to-speech playback, haptic feedback, and local notifications for background model downloads.',
    how: [
      'State flows one direction through Cubits — the presentation layer only rebuilds in response to emitted state, never reaching into business logic directly.',
      'Third-party SDKs (ML Kit, Flutter TTS) are wrapped in custom service classes, isolating the app from the specific packages underneath.',
      "ML Kit's translation models are large, so downloads run in the background with progress tracking, without blocking the main UI isolate.",
      'Services and repositories are provided once at the app root via MultiRepositoryProvider/MultiBlocProvider, keeping lifecycle management in one place.'
    ],
    proud: [
      {
        title: 'Keeping the UI genuinely dumb.',
        detail:
          "The main thing I wanted to get right: a presentation layer that only reacts to emitted state, not one that's just organized to look passive."
      },
      {
        title: 'Isolating third-party SDKs behind my own interfaces.',
        detail:
          'ML Kit and TTS are wrapped in service classes so nothing above that layer knows which package is actually doing the work.'
      },
      {
        title: 'Handling background model downloads without freezing the UI.',
        detail: 'This was the most fiddly part of the project — more so than the translation logic itself.'
      }
    ],
    tradeoffs: [
      'This is a solo learning project, not a shipped product with real users — built to get the architecture right, not to compete with existing translation apps.',
      'The offline/on-device angle is genuinely useful, but the real value here was what building it taught about structuring a non-trivial Flutter app.'
    ]
  },

  // ---------------------------------------------------------------------
  // PLACEHOLDERS — real projects, content not yet provided.
  // Fill in tagline / description / hook / problem / how / proud / tradeoffs
  // with real details, then flip `featured` to true if it belongs alongside
  // the three above.
  // ---------------------------------------------------------------------
  {
    slug: 'school-backend',
    name: 'School backend project',
    tagline: 'TODO: real name + one-line pitch',
    description: 'TODO: what course was this for, what does it do, what stack.',
    categories: ['backend'],
    featured: false,
    status: 'shipped',
    tags: ['TODO'],
    hook: 'TODO: what was the assignment actually asking for?',
    problem: 'TODO',
    how: ['TODO'],
    proud: [{ title: 'TODO', detail: 'TODO' }],
    tradeoffs: ['TODO']
  },
  {
    slug: 'flutter-app-one',
    name: 'Flutter app one',
    tagline: 'TODO: real name + one-line pitch',
    description: 'TODO — smaller app, one or two sentences is enough.',
    categories: ['mobile'],
    featured: false,
    status: 'shipped',
    tags: ['Flutter', 'Dart'],
    hook: 'TODO',
    problem: 'TODO',
    how: ['TODO'],
    proud: [{ title: 'TODO', detail: 'TODO' }],
    tradeoffs: []
  },
  {
    slug: 'flutter-app-two',
    name: 'Flutter app two',
    tagline: 'TODO: real name + one-line pitch',
    description: 'TODO — smaller app, one or two sentences is enough.',
    categories: ['mobile'],
    featured: false,
    status: 'shipped',
    tags: ['Flutter', 'Dart'],
    hook: 'TODO',
    problem: 'TODO',
    how: ['TODO'],
    proud: [{ title: 'TODO', detail: 'TODO' }],
    tradeoffs: []
  }

  // Internships / capstone: add real entries here once you send the details.
  // Use categories: ['commercial', 'mobile'] (or 'backend' / 'web-frontend')
  // so they show up correctly in the filter bar.
];
