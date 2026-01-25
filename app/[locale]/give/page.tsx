import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import GivePageClient from './GivePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give | Support Our Ministry | Bethany Presbyterian Church',
  description: 'Learn about giving and support the ministry of Bethany Presbyterian Church through your financial contributions.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GivePage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <GivePageClient />;
}
