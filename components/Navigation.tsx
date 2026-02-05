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
    //{ href: '/what-to-expect', key: 'whatToExpect' },
    //{ href: '/beliefs', key: 'beliefs' },
    { href: '/services', key: 'services' },
    { href: '/events', key: 'events' },
    { href: '/ministries', key: 'ministries' },
    //{ href: '/resources', key: 'resources' },
    //{ href: '/give', key: 'give' },
    { href: '/contact', key: 'contact' },
  ];

  const isActive = (href: string) => {
    const localizedHref = getLocalizedPath(href, locale);
    if (href === '/') {
      return pathname === localizedHref || pathname === `/${locale}`;
    }
    return pathname?.startsWith(localizedHref);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-1">
        {navLinks.map((link) => {
          const localizedHref = getLocalizedPath(link.href, locale);
          return (
            <Link
              key={link.href}
              href={localizedHref}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const localizedHref = getLocalizedPath(link.href, locale);
              return (
                <Link
                  key={link.href}
                  href={localizedHref}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium ${isActive(link.href)
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
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
