import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../../core/services/projects.service';
import { ProjectCategory } from '../../../core/models/project.model';
import { TranslationService } from '../../../core/i18n/translation.service';

type FilterValue = ProjectCategory | 'all';

interface FilterOption {
  value: FilterValue;
  labelKey: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  readonly i18n = inject(TranslationService);
  private readonly projectsService = inject(ProjectsService);

  readonly filters: FilterOption[] = [
    { value: 'all', labelKey: 'filters.all' },
    { value: 'commercial', labelKey: 'filters.commercial' },
    { value: 'mobile', labelKey: 'filters.mobile' },
    { value: 'web-frontend', labelKey: 'filters.webFrontend' },
    { value: 'backend', labelKey: 'filters.backend' },
  ];

  readonly activeFilter = signal<FilterValue>('all');

  private readonly allProjects = this.projectsService.getAll();

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allProjects;
    return this.allProjects.filter((p) => p.categories.includes(filter));
  });

  setFilter(value: FilterValue) {
    this.activeFilter.set(value);
  }
}
