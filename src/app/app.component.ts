import { Component, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavComponent } from './features/nav/nav.component';
import { FooterComponent } from './features/footer/footer.component';
import { AnalyticsService } from './core/services/analytics.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  template: `
    <app-nav></app-nav>
    <main class="app-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100dvh;
      }
      .app-content {
        min-height: 100dvh;
        padding-top: 64px;
      }
      @media (max-width: 768px) {
        .app-content {
          padding-top: 60px;
        }
      }
    `,
  ],
})
export class AppComponent {
  private analytics = inject(AnalyticsService);
  private router = inject(Router);
  private hostRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.analytics.initTracking();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(
          filter(
            (event): event is NavigationEnd => event instanceof NavigationEnd
          )
        )
        .subscribe((event) => {
          const url = event.urlAfterRedirects || event.url;

          // Skip forced scroll-to-top when navigating to a fragment/anchor —
          // let Angular's built-in anchorScrolling (or HomeComponent's manual
          // fallback) handle it instead
          if (url.includes('#')) {
            return;
          }

          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;

          const contentEl =
            this.hostRef.nativeElement.querySelector('.app-content');
          if (contentEl) {
            contentEl.scrollTop = 0;
          }
        });
    }
  }
}
