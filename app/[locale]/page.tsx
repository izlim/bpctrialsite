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

  const services = await getServices(params.locale);
  const events = await getEvents();
  const featuredService = services[0];
  const upcomingEvents = events.slice(0, 3);

  return (
    <HomePageClient
      featuredService={featuredService}
      upcomingEvents={upcomingEvents}
    />
  );
}
