export type ProjectCategory = 'mobile' | 'web-frontend' | 'backend' | 'commercial';
export type ProjectStatus = 'shipped' | 'in-progress' | 'draft';

export interface ProjectHighlight {
  title: string;
  detail: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  featured: boolean;
  status: ProjectStatus;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  screenshots?: ProjectScreenshot[];

  /** Personal reason the project exists. Keep it specific and true. */
  hook: string;
  /** What problem it actually solves. */
  problem: string;
  /** Ordered steps describing how it works. */
  how: string[];
  /** Genuine technical highlights, not generic praise. */
  proud: ProjectHighlight[];
  /** Real trade-offs and constraints. */
  tradeoffs: string[];
  /** Optional: process/practice lessons (git flow, environments, source of truth, etc.) */
  learned?: string[];
}
