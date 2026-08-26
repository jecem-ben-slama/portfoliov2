import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/i18n/translation.service';
import { ActionsService } from '../../../core/services/actions.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly i18n = inject(TranslationService);
  private readonly contactActions = inject(ActionsService);

  onContactClick(event: Event): void {
    event.preventDefault();
    this.contactActions.sendEmail();
  }
}
