'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useContext } from 'react';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';
import { LocaleContext } from './LocaleProvider';
import enTranslations from '@/translations/en.json';
import zhTranslations from '@/translations/zh.json';

export default function Navigation() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const context = useContext(LocaleContext);
  const t = context?.t || (locale === 'zh' ? zhTranslations : enTranslations);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/visit', key: 'visit' },
    { href: '/what-to-expect', key: 'whatToExpect' },
    { href: '/services', key: 'services' },
    { href: '/events', key: 'events' },
    { href: '/ministries', key: 'ministries' },
    { href: '/contact', key: 'contact' },
  ];

  const isActive = (href: string) => {
    const localizedHref = getLocalizedPath(href, locale);
    if (href === '/') {
      return pathname === localizedHref || pathname === `/${locale}`;
    }
    return pathname?.startsWith(localizedHref);
  };

  const linkBase =
    'px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const linkInactive =
    'text-[rgba(255,255,255,0.65)] hover:text-white hover:bg-primary-700/80';
  const linkActive = 'bg-primary-700 text-white';

  return (
    <>
      <nav className="hidden lg:flex flex-wrap items-center justify-end gap-0.5 max-w-4xl">
        {navLinks.map((link) => {
          const localizedHref = getLocalizedPath(link.href, locale);
          return (
            <Link
              key={link.href}
              href={localizedHref}
              className={`${linkBase} ${
                isActive(link.href) ? linkActive : linkInactive
              }`}
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        className="lg:hidden p-2 rounded-md text-white hover:bg-primary-700/80"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <nav
          className="lg:hidden absolute top-full left-0 right-0 bg-primary-800 border-t border-primary-700 shadow-lg"
          aria-label="Mobile"
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const localizedHref = getLocalizedPath(link.href, locale);
              return (
                <Link
                  key={link.href}
                  href={localizedHref}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    isActive(link.href)
                      ? 'bg-primary-700 text-white'
                      : 'text-[rgba(255,255,255,0.85)] hover:bg-primary-700/60 hover:text-white'
                  }`}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
