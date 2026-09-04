import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectListComponent } from '../projects/project-list/project-list.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectListComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Manual fallback in case Angular's built-in anchorScrolling doesn't
    // catch it (e.g. element not yet painted). Harmless no-op if the
    // built-in scrolling already did the job.
    if (isPlatformBrowser(this.platformId)) {
      this.route.fragment.subscribe((fragment) => {
        if (!fragment) return;
        setTimeout(() => this.scrollToFragment(fragment), 0);
      });
    }
  }

  private scrollToFragment(fragment: string, attempt = 0) {
    const el = document.getElementById(fragment);

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else if (attempt < 20) {
      setTimeout(() => this.scrollToFragment(fragment, attempt + 1), 50);
    }
  }
}
