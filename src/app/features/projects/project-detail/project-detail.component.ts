import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { ProjectsService } from '../../../core/services/projects.service';
import {
  Project,
  LocalizedString,
  LocalizedStringArray,
} from '../../../core/models/project.model';
import {
  TranslationService,
  Language,
} from '../../../core/i18n/translation.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);
  private sanitizer = inject(DomSanitizer);
  protected i18n = inject(TranslationService);

  project$: Observable<Project | undefined>;
  isDemoActive = false;

  constructor() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const slug = params.get('slug');
        return of(slug ? this.projectsService.getBySlug(slug) : undefined);
      })
    );
  }

  toggleDemo(): void {
    this.isDemoActive = !this.isDemoActive;
  }

  getSanitizerUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getLocalized(field: LocalizedString): string {
    const lang = this.i18n.language() as Language;
    return field[lang] || field.en;
  }

  getLocalizedArray(field: LocalizedStringArray | undefined): string[] {
    if (!field) return [];
    const lang = this.i18n.language() as Language;
    return field[lang] || field.en || [];
  }
  lightboxImage: string | null = null;
  lightboxCaption: string = '';

  openLightbox(src: string, caption: string): void {
    this.lightboxImage = src;
    this.lightboxCaption = caption;
  }

  closeLightbox(): void {
    this.lightboxImage = null;
  }
}
