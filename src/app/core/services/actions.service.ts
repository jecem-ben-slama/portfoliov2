import { Injectable, inject } from '@angular/core';
import { TranslationService } from '../i18n/translation.service';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  private readonly i18n = inject(TranslationService);
  private readonly analytics = inject(AnalyticsService);
  private readonly emailAddress = 'benslemajecem@gmail.com';

  sendEmail(): void {
    this.analytics.trackEvent('click_contact_gmail', {
      method: 'direct_mailto',
    });

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
    return this.i18n.is('fr')
      ? 'assets/Jecem_Ben_Slama_CV.pdf'
      : 'assets/Jecem_Ben_Slama_Resume.pdf';
  }

  trackResumeDownload(): void {
    this.analytics.trackEvent('download_resume', {
      lang: this.i18n.language(),
    });
  }

  copyEmail(): Promise<void> {
    this.analytics.trackEvent('copy_email', { method: 'clipboard' });
    return navigator.clipboard.writeText(this.emailAddress);
  }

  getEmailAddress(): string {
    return this.emailAddress;
  }
}
