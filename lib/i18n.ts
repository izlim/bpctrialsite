import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

// Get locale from pathname
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
}

// Get path without locale
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

// Get localized path
export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLocale = getPathWithoutLocale(cleanPath);
  
  // Always include locale in path for consistency
  if (pathWithoutLocale === '/') {
    return `/${locale}`;
  }
  
  return `/${locale}${pathWithoutLocale}`;
}

// Hook to use translations
export function useTranslations(locale: Locale) {
  return useMemo(() => {
    // Dynamic import based on locale
    if (locale === 'zh') {
      return require('@/translations/zh.json');
    }
    return require('@/translations/en.json');
  }, [locale]);
}
