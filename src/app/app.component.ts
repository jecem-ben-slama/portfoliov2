import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './features/nav/nav.component';
import { FooterComponent } from './features/footer/footer.component';
import { AnalyticsService } from './core/services/analytics.service'; // Adjust path if needed

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

  constructor() {
    // Kick off automatic router tracking
    this.analytics.initTracking();
  }
}
