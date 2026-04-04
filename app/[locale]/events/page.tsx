import { getEvents } from '@/lib/markdown';
import EventsPageClient from './EventsPageClient';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '活动' : 'Events',
    description: isZh
      ? '了解伯大尼长老会即将举行的教会活动、聚会与特别崇拜，包括英华双语、华语及福建话崇拜相关活动。'
      : 'Discover upcoming events, gatherings, and special services at Bethany Presbyterian Church — including activities for our bilingual youth, Chinese adult, Sunday school, and Hokkien congregations.',
    keywords: isZh
      ? ['伯大尼教会活动', '新加坡教会活动', '教会聚会', '福建话崇拜活动', '儿童主日学活动']
      : ['Bethany Presbyterian Church events', 'church events Singapore', 'Christian events Singapore', 'Hokkien service events', 'bilingual youth events', 'Sunday school activities Singapore'],
  };
}

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
