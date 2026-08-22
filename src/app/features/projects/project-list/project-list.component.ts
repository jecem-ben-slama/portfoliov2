import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../../core/services/projects.service';
import { ProjectCategory } from '../../../core/models/project.model';

type FilterValue = ProjectCategory | 'all';

interface FilterOption {
  value: FilterValue;
  label: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  readonly filters: FilterOption[] = [
    { value: 'all', label: 'All' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'web-frontend', label: 'Web Frontend' },
    { value: 'backend', label: 'Backend & API' }
  ];

  readonly activeFilter = signal<FilterValue>('all');

  private readonly allProjects: ReturnType<ProjectsService['getAll']>;

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allProjects;
    return this.allProjects.filter((p) => p.categories.includes(filter));
  });

  constructor(private projectsService: ProjectsService) {
    this.allProjects = this.projectsService.getAll();
  }

  setFilter(value: FilterValue) {
    this.activeFilter.set(value);
  }
}
