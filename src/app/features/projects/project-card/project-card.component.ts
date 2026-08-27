import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, LocalizedString } from '../../../core/models/project.model';
import {
  Language,
  TranslationService,
} from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  protected i18n = inject(TranslationService);

  // Helper for localized strings
  getLocalized(field: LocalizedString): string {
    const lang = this.i18n.language() as Language;
    return field[lang] || field.en;
  }
}
