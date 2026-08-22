import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = PROJECTS;

  getAll(): Project[] {
    return this.projects;
  }

  getFeatured(): Project[] {
    return this.projects.filter((p) => p.featured);
  }

  getOthers(): Project[] {
    return this.projects.filter((p) => !p.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  getByCategory(category: ProjectCategory | 'all'): Project[] {
    if (category === 'all') return this.projects;
    return this.projects.filter((p) => p.categories.includes(category));
  }
}
