import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/i18n/translation.service';
import { ActionsService } from '../../core/services/actions.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly i18n = inject(TranslationService);
  private readonly actions = inject(ActionsService);

  copied = false;

  readonly emailAddress = this.actions.getEmailAddress();

  copyEmail(): void {
    this.actions.copyEmail().then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }

  sendEmail(): void {
    this.actions.sendEmail();
  }

  get resumePath(): string {
    return this.actions.getResumePath();
  }
}
