import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

declare let gtag: Function;
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private router = inject(Router);
  private measurementId = 'G-2PYF1B9H63'; // Your GA4 Measurement ID

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
    // Send to Google Analytics
    if (typeof gtag === 'function') {
      gtag('config', this.measurementId, {
        page_path: url,
      });
    }

    // Send to Umami
    if (window.umami) {
      window.umami.track('page-view', { url });
    }
  }

  trackEvent(eventName: string, eventParams?: Record<string, any>): void {
    // Send to Google Analytics
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
    }

    // Send to Umami
    if (window.umami) {
      window.umami.track(eventName, eventParams);
    }
  }
}
