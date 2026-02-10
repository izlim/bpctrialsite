'use client';

import Link from 'next/link';
import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import ServiceCard from '@/components/ServiceCard';
import EventCard from '@/components/EventCard';
import ImageCarousel from '@/components/ImageCarousel';
import ImagePlaceholder from '@/components/ImagePlaceholder';

interface HomePageClientProps {
  featuredService: any;
  upcomingEvents: any[];
}

export default function HomePageClient({ featuredService, upcomingEvents }: HomePageClientProps) {
  const { locale, t } = useLocale();

  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg',
  ];

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const liveStreamYoutubeId = t.home.liveStream?.youtubeUrl ? getYoutubeId(t.home.liveStream.youtubeUrl) : null;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-3xl flex-1">
            <h1 className="text-5xl font-bold mb-6 text-white">{t.home.welcome}</h1>
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
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <ImageCarousel
              images={heroImages}
              className="aspect-video w-full rounded-lg shadow-xl overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-soft-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">{t.home.joinUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.home.services.map((service: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md card-accent-primary hover-lift">
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">{service.title}</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong className="text-primary-600">{t.common.time}:</strong> {service.time}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-primary-600">{t.common.location}:</strong> {service.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={getLocalizedPath('/visit', locale)} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors group">
              {locale === 'en' ? 'View Full Schedule & Directions' : '查看完整时间表与路线'}
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Stream / Latest Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                {locale === 'en' ? 'Latest Service' : '最新崇拜'}
              </h2>
              <div className="w-20 h-1.5 bg-accent-400 mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                {locale === 'en'
                  ? 'Watch our latest service or join us live when we\'re streaming!'
                  : '观看我们最新的崇拜或在我们直播时加入我们！'}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-100 transform hover:scale-[1.01] transition-transform duration-500">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UU4VQHI9TGLIEBYNfmSTuVZA"
                  title={locale === 'en' ? 'Latest Service' : '最新崇拜'}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-primary-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
              <div>
                <h2 className="text-4xl font-bold text-primary-900 mb-2">{t.home.upcomingEvents}</h2>
                <div className="w-20 h-1.5 bg-accent-400 rounded-full mx-auto md:mx-0" />
              </div>
              <Link href={getLocalizedPath('/events', locale)} className="mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-semibold text-lg flex items-center group transition-colors">
                {t.common.viewAll}
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.slug} className="hover-lift">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.home.getConnected}</h2>
            <div className="w-20 h-1.5 bg-accent-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Link href={getLocalizedPath('/about', locale)} className="bg-white rounded-2xl shadow-lg hover-lift overflow-hidden group border border-gray-100 card-accent-primary">
              <ImagePlaceholder className="h-56 w-full group-hover:scale-110 transition-transform duration-700" text="About Us" icon={<span className="text-5xl">🏛️</span>} />
              <div className="p-8 text-center bg-white relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-primary-800">{t.home.aboutUs}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.aboutDesc}</p>
              </div>
            </Link>
            <Link href={getLocalizedPath('/ministries', locale)} className="bg-white rounded-2xl shadow-lg hover-lift overflow-hidden group border border-gray-100 card-accent-accent">
              <ImagePlaceholder className="h-56 w-full group-hover:scale-110 transition-transform duration-700" text="Ministries" icon={<span className="text-5xl">👥</span>} />
              <div className="p-8 text-center bg-white relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-primary-800">{t.home.ministries}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.ministriesDesc}</p>
              </div>
            </Link>
            <Link href={getLocalizedPath('/resources', locale)} className="bg-white rounded-2xl shadow-lg hover-lift overflow-hidden group border border-gray-100 card-accent-primary">
              <ImagePlaceholder className="h-56 w-full group-hover:scale-110 transition-transform duration-700" text="Resources" icon={<span className="text-5xl">📚</span>} />
              <div className="p-8 text-center bg-white relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-primary-800">{t.home.resources}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.resourcesDesc}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
