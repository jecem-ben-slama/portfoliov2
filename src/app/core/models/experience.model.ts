export interface Experience {
  role: string;
  organization: string;
  dateRange: string;
  bullets: string[];
  tags?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: string;
  coursework?: string[];
}
