import { getEvents } from '@/lib/markdown';
import EventsPageClient from './EventsPageClient';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Events | Bethany Presbyterian Church',
  description: 'View upcoming events, activities, and gatherings at Bethany Presbyterian Church.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function EventsPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const events = await getEvents(params.locale);

  return <EventsPageClient events={events} />;
}
