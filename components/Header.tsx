'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from './LocaleProvider';
import Logo from './Logo';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';

export default function Header() {
  const { t } = useLocale();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const homePath = getLocalizedPath('/', locale);

  return (
    <header className="bg-primary-600 border-b border-primary-700 shadow-md sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href={homePath} className="flex items-center space-x-3 min-w-0">
            <Logo size={48} className="text-teal-400 shrink-0" />
            <div className="min-w-0">
              <span className="block text-xl sm:text-2xl font-bold text-white truncate">{t.common.siteName}</span>
              <p className="text-sm text-[rgba(255,255,255,0.65)]">{t.common.siteLocation}</p>
            </div>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <Navigation />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
