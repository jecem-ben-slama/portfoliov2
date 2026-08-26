import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly i18n = inject(TranslationService);
  private sanitizer = inject(DomSanitizer);

  copied = false;
  readonly emailAddress = 'benslemajecem@gmail.com';

  get mailtoLink(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(
      `mailto:${this.emailAddress}?subject=Inquiry%20regarding%20your%20portfolio`
    );
  }

  get resumePath(): string {
    return this.i18n.is('fr') ? 'assets/resume-fr.pdf' : 'assets/resume-en.pdf';
  }

  copyEmail(event: Event): void {
    event.preventDefault(); // Stop default navigation if needed
    navigator.clipboard.writeText(this.emailAddress).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000); // Reset after 2 seconds
    });
  }
}
