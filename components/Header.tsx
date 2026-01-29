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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={homePath} className="flex items-center space-x-3">
            <Logo size={48} />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.common.siteName}</h1>
              <p className="text-sm text-gray-600">{t.common.siteLocation}</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Navigation />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
