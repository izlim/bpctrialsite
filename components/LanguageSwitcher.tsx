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
    // Use full-page navigation for static export compatibility
    window.location.href = newPath;
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`relative z-50 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${isOpen ? 'bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
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
          {/* Backdrop for closing dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 border border-gray-200 overflow-hidden">
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={(e) => handleLanguageChange(e, locale)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLocale === locale
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
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
