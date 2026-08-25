import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';

import {
  Language,
  TranslationService,
} from '../../core/i18n/translation.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly i18n = inject(TranslationService);

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }
}
