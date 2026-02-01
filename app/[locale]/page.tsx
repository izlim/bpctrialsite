import { notFound } from 'next/navigation';
import { getServices, getEvents } from '@/lib/markdown';
import EventCard from '@/components/EventCard';
import { locales, type Locale } from '@/lib/i18n';
import HomePageClient from './HomePageClient';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const allEvents = await getEvents(params.locale);

  // Filter for future events only (nearest first)
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const upcomingEvents = allEvents
    .filter(event => new Date(event.frontmatter.date) >= yesterday)
    .slice(0, 3);

  const services = await getServices(params.locale);
  const featuredService = services[0];

  return (
    <HomePageClient
      featuredService={featuredService}
      upcomingEvents={upcomingEvents}
    />
  );
}
