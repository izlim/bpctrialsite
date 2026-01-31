'use client';

import Link from 'next/link';
import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import SermonCard from '@/components/SermonCard';
import EventCard from '@/components/EventCard';

interface HomePageClientProps {
  featuredSermon: any;
  upcomingEvents: any[];
}

export default function HomePageClient({ featuredSermon, upcomingEvents }: HomePageClientProps) {
  const { locale, t } = useLocale();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{t.home.welcome}</h1>
            <p className="text-xl mb-8 text-primary-100">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={getLocalizedPath('/visit', locale)}
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                {t.home.planVisit}
              </Link>
              <Link
                href={getLocalizedPath('/what-to-expect', locale)}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center"
              >
                {t.home.whatToExpect}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.joinUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.home.services.map((service: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-2"><strong>{t.common.time}:</strong> {service.time}</p>
                <p className="text-gray-600 mb-2"><strong>{t.common.location}:</strong> {service.location}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={getLocalizedPath('/visit', locale)} className="text-primary-600 hover:text-primary-700 font-medium">
              View Full Schedule & Directions →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      {featuredSermon && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">{t.home.latestSermon}</h2>
              <Link href={getLocalizedPath('/sermons', locale)} className="text-primary-600 hover:text-primary-700 font-medium">
                {t.common.viewAll} →
              </Link>
            </div>
            <div className="max-w-4xl">
              <SermonCard sermon={featuredSermon} />
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">{t.home.upcomingEvents}</h2>
              <Link href={getLocalizedPath('/events', locale)} className="text-primary-600 hover:text-primary-700 font-medium">
                {t.common.viewAll} →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.getConnected}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href={getLocalizedPath('/about', locale)} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">{t.home.aboutUs}</h3>
              <p className="text-gray-600">{t.home.aboutDesc}</p>
            </Link>
            <Link href={getLocalizedPath('/ministries', locale)} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">{t.home.ministries}</h3>
              <p className="text-gray-600">{t.home.ministriesDesc}</p>
            </Link>
            <Link href={getLocalizedPath('/resources', locale)} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">{t.home.resources}</h3>
              <p className="text-gray-600">{t.home.resourcesDesc}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
