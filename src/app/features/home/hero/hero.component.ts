import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/i18n/translation.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly i18n = inject(TranslationService);
}
