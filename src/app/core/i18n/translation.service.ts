import { Injectable, inject, signal } from '@angular/core';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import { PLATFORM_ID } from '@angular/core';

import { en } from './en';
import { fr } from './fr';

export type Language = 'en' | 'fr';

type Translation = typeof en;

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly document = inject(DOCUMENT);

  private readonly platformId = inject(PLATFORM_ID);

  private readonly translations: Record<Language, Translation> = {
    en,
    fr,
  };

  private readonly languageSignal = signal<Language>(this.getInitialLanguage());

  readonly language = this.languageSignal.asReadonly();

  constructor() {
    this.updateDocumentLanguage(this.languageSignal());
  }

  /**
   * Translate using dot notation.
   *
   * Example:
   *
   * i18n.t('nav.projects')
   */
  t(path: string): string {
    const translation = this.translations[this.languageSignal()];

    const value = path
      .split('.')
      .reduce<any>((current, key) => current?.[key], translation);

    if (typeof value === 'string') {
      return value;
    }

    console.warn(
      `[i18n] Missing translation: "${path}" ` +
        `for "${this.languageSignal()}"`
    );

    return path;
  }

  /**
   * Manually change language.
   *
   * Manual selection is remembered.
   */
  setLanguage(language: Language): void {
    this.languageSignal.set(language);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('portfolio-language', language);
      } catch {
        // Ignore storage errors.
      }
    }

    this.updateDocumentLanguage(language);
  }

  /**
   * Check active language.
   */
  is(language: Language): boolean {
    return this.languageSignal() === language;
  }

  /**
   * Toggle EN / FR.
   */
  toggleLanguage(): void {
    this.setLanguage(this.languageSignal() === 'en' ? 'fr' : 'en');
  }

  /**
   * Determine initial language.
   *
   * Browser:
   *   1. Saved preference
   *   2. Browser language
   *   3. English
   *
   * SSR:
   *   English fallback
   */
  private getInitialLanguage(): Language {
    /*
     * SSR
     *
     * localStorage and navigator do not exist.
     */
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    /*
     * 1. Explicit saved preference.
     */
    const savedLanguage = this.getSavedLanguage();

    if (savedLanguage) {
      return savedLanguage;
    }

    /*
     * 2. Browser language preferences.
     */
    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    /*
     * Find French anywhere in the
     * browser's preferred languages.
     *
     * Example:
     *
     * ['fr-FR', 'fr', 'en-US']
     *
     * → French
     */
    const hasFrench = browserLanguages.some((language) =>
      language?.toLowerCase().startsWith('fr')
    );

    if (hasFrench) {
      return 'fr';
    }

    /*
     * Everything else → English.
     */
    return 'en';
  }

  /**
   * Read explicit user preference.
   */
  private getSavedLanguage(): Language | null {
    try {
      const saved = localStorage.getItem('portfolio-language');

      if (saved === 'en' || saved === 'fr') {
        return saved;
      }
    } catch {
      // Ignore storage errors.
    }

    return null;
  }

  /**
   * Keep <html lang=""> synchronized.
   */
  private updateDocumentLanguage(language: Language): void {
    this.document.documentElement.lang = language;
  }
}
