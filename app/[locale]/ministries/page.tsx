import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import MinistriesPageClient from './MinistriesPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ministries | Bethany Presbyterian Church',
  description: 'Discover our various ministries and find a place to serve and connect at Bethany Presbyterian Church.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function MinistriesPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <MinistriesPageClient />;
}
