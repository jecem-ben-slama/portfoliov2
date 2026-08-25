import { Experience, Education } from '../models/experience.model';

export const EXPERIENCE: Experience[] = [
  {
    role: 'experience.steg.role',

    organization: 'experience.steg.organization',

    dateRange: 'experience.steg.dateRange',

    bullets: [
      'experience.steg.bullets.0',
      'experience.steg.bullets.1',
      'experience.steg.bullets.2',
    ],

    tags: ['Flutter Web', 'PHP', 'BLoC', 'JWT', 'RBAC', 'PoC'],
  },

  {
    role: 'experience.cvpt.role',

    organization: 'experience.cvpt.organization',

    dateRange: 'experience.cvpt.dateRange',

    bullets: [
      'experience.cvpt.bullets.0',
      'experience.cvpt.bullets.1',
      'experience.cvpt.bullets.2',
    ],

    tags: ['Flutter', 'Clean Architecture', 'BLoC', 'REST API'],
  },

  {
    role: 'experience.evastin.role',

    organization: 'experience.evastin.organization',

    dateRange: 'experience.evastin.dateRange',

    bullets: [
      'experience.evastin.bullets.0',
      'experience.evastin.bullets.1',
      'experience.evastin.bullets.2',
    ],

    tags: ['Flutter', 'Dart', 'Figma', 'UI Implementation'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'education.iit.degree',

    institution: 'education.iit.institution',

    dateRange: 'education.iit.dateRange',

    coursework: [],
  },

  {
    degree: 'education.istic.degree',

    institution: 'education.istic.institution',

    dateRange: 'education.istic.dateRange',

    coursework: [],
  },
];
