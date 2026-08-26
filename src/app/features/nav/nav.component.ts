import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Language,
  TranslationService,
} from '../../core/i18n/translation.service';
import { ActionsService } from '../../core/services/actions.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly i18n = inject(TranslationService);
  private readonly contactActions = inject(ActionsService);

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  // Delegated to the single source of truth service
  get resumePath(): string {
    return this.contactActions.getResumePath();
  }
}
