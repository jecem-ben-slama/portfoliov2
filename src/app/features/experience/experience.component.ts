import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EXPERIENCE } from '../../core/data/experience.data';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;

  readonly i18n = inject(TranslationService);
}
