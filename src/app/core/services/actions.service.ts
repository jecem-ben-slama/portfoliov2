import { Injectable, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  private readonly i18n = inject(TranslationService);
  private readonly emailAddress = 'benslemajecem@gmail.com';

  sendEmail(): void {
    const subject = encodeURIComponent(
      'Engineering Role / Collaboration Inquiry'
    );
    const body = encodeURIComponent(
      'Hi,\n\nI came across your portfolio and wanted to reach out regarding...\n\nBest regards.'
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.emailAddress}&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailUrl, '_blank');

    if (!newWindow) {
      window.location.href = `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
    }
  }

 
  getResumePath(): string {
    return this.i18n.is('fr') ? 'assets/resume-fr.pdf' : 'assets/resume-en.pdf';
  }


  copyEmail(): Promise<void> {
    return navigator.clipboard.writeText(this.emailAddress);
  }

  getEmailAddress(): string {
    return this.emailAddress;
  }
}
