export type ProjectCategory =
  | 'mobile'
  | 'web-frontend'
  | 'backend'
  | 'commercial';
export type ProjectStatus = 'shipped' | 'in-progress' | 'draft';

export type LocalizedString = {
  en: string;
  fr: string;
};

export type LocalizedStringArray = {
  en: string[];
  fr: string[];
};

export interface ProjectHighlight {
  title: LocalizedString;
  detail: LocalizedString;
}

export interface ProjectScreenshot {
  src: string;
  caption: LocalizedString;
}

export interface Project {
  slug: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  categories: ProjectCategory[];
  featured: boolean;
  status: ProjectStatus;
  tags: string[];
  demoUrl?: string;
  releaseUrl?: string;
  appetizeUrl?:string,
  githubUrl?: string;
  image?: string;
  screenshots?: ProjectScreenshot[];

  hook: LocalizedString;
  problem: LocalizedString;
  how: LocalizedStringArray;
  proud: ProjectHighlight[];
  tradeoffs: LocalizedStringArray;
  learned?: LocalizedStringArray;
}
