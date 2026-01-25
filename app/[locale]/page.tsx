import { notFound } from 'next/navigation';
import { getSermons, getEvents } from '@/lib/markdown';
import SermonCard from '@/components/SermonCard';
import EventCard from '@/components/EventCard';
import { locales, type Locale } from '@/lib/i18n';
import { useLocale } from '@/components/LocaleProvider';
import HomePageClient from './HomePageClient';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const sermons = await getSermons();
  const events = await getEvents();
  const featuredSermon = sermons[0];
  const upcomingEvents = events.slice(0, 3);

  return (
    <HomePageClient
      featuredSermon={featuredSermon}
      upcomingEvents={upcomingEvents}
    />
  );
}
