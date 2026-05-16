'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getLocalizedPath, getPathWithoutLocale, type Locale, locales, localeNames } from '@/lib/i18n';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e: React.MouseEvent, locale: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const newPath = basePath + getLocalizedPath(pathWithoutLocale, locale);
    setIsOpen(false);
    window.location.href = newPath;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`relative z-50 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-primary-600 border border-white/20 ${
          isOpen ? 'bg-primary-700 text-white' : 'text-[rgba(255,255,255,0.9)] hover:bg-primary-700/80'
        }`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span>{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-44 bg-primary-800 rounded-md shadow-lg z-50 border border-primary-600 overflow-hidden">
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={(e) => handleLanguageChange(e, locale)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    currentLocale === locale
                      ? 'bg-primary-700 text-teal-300 font-medium'
                      : 'text-[rgba(255,255,255,0.85)] hover:bg-primary-700/80 hover:text-white'
                  }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
