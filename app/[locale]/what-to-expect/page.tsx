import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import WhatToExpectPageClient from './WhatToExpectPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Expect | Your First Visit | Bethany Presbyterian Church',
  description: 'Learn what to expect during your first visit to Bethany Presbyterian Church, including service format, dress code, and children\'s programs.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function WhatToExpectPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <WhatToExpectPageClient />;
}
