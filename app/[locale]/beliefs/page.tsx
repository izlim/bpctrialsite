import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import BeliefsPageClient from './BeliefsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Believe | Statement of Faith | Bethany Presbyterian Church',
  description: 'Learn about our core beliefs, statement of faith, and doctrinal positions at Bethany Presbyterian Church.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function BeliefsPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <BeliefsPageClient />;
}
