import { getResources } from '@/lib/markdown';
import ResourcesPageClient from './ResourcesPageClient';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Resources | Bethany Presbyterian Church',
  description: 'Access daily devotions, Bible reading plans, study materials, and other helpful resources.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ResourcesPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const resources = await getResources(params.locale);

  return <ResourcesPageClient resources={resources} />;
}
