'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { EventFrontmatter } from '@/lib/markdown';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';
import ImagePlaceholder from './ImagePlaceholder';
import { useContext } from 'react';
import { LocaleContext } from './LocaleProvider';
import enTranslations from '@/translations/en.json';
import zhTranslations from '@/translations/zh.json';

interface EventCardProps {
  event: {
    slug: string;
    frontmatter: EventFrontmatter;
  };
}

export default function EventCard({ event }: EventCardProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const context = useContext(LocaleContext);
  const t = context?.t || (locale === 'zh' ? zhTranslations : enTranslations);
  const eventPath = getLocalizedPath(`/events/${event.slug}`, locale);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <ImagePlaceholder
        className="h-48 w-full"
        text="Event Image"
        src={event.frontmatter.image}
      />
      <div className="p-6">
        <Link href={eventPath}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-teal-600 transition-colors mb-3">
            {event.frontmatter.title}
          </h3>
        </Link>
        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(event.frontmatter.date, locale)}</span>
            {event.frontmatter.time && <span className="ml-2">• {event.frontmatter.time}</span>}
          </div>
          {event.frontmatter.location && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{event.frontmatter.location}</span>
            </div>
          )}
          {event.frontmatter.recurring && (
            <span className="inline-block bg-orange-100 text-orange-900 text-xs font-medium px-2 py-1 rounded">
              {locale === 'zh' ? '定期活动' : 'Recurring Event'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
