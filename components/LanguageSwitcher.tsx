'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from '@/components/LocaleProvider';
import { getLocaleFromPath, getLocalizedPath, getPathWithoutLocale, localeNames } from '@/lib/i18n';

// Two languages, so the switcher is a single toggle labelled in the *other*
// language: readers see their own language's name next to a globe.
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { t } = useLocale();
  const currentLocale = getLocaleFromPath(pathname);
  const targetLocale = currentLocale === 'en' ? 'zh' : 'en';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const href = basePath + getLocalizedPath(getPathWithoutLocale(pathname), targetLocale);

  return (
    <a
      href={href}
      hrefLang={targetLocale}
      lang={targetLocale}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-[rgba(255,255,255,0.9)] border border-white/20 transition-colors hover:bg-primary-700/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-primary-600"
      aria-label={t.common.switchLanguage}
      title={t.common.switchLanguage}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
      </svg>
      <span>{localeNames[targetLocale]}</span>
    </a>
  );
}
