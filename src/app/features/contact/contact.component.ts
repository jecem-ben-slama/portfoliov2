import { Component, inject } from '@angular/core';

import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly i18n = inject(TranslationService);
}
