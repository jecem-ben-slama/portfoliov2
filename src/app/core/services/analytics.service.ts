import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private router = inject(Router);
  private measurementId = 'G-2PYF1B9H63'; // Replace with your actual GA4 Measurement ID

  initTracking(): void {
    // Listen to router navigation changes for SPA route tracking
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  trackPageView(url: string): void {
    if (typeof gtag === 'function') {
      gtag('config', this.measurementId, {
        page_path: url,
      });
    }
  }

  // Optional: Track custom events (e.g., when someone downloads your CV or copies your email)
  trackEvent(eventName: string, eventParams?: Record<string, any>): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
    }
  }
}
