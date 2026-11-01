import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import HistoryPageClient from './HistoryPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '教会历史 · 百年恩典之路' : 'Our History · 120-Year Journey',
    description: isZh
      ? '探索新加坡长老会伯大尼堂逾120年的恩典历程：从1902年柴山开拓、1951年机场征地流离，到巴耶利峇永久圣殿及今日多元语言事工。'
      : 'Explore over 120 years of faith, resilience, and mission at Bethany Presbyterian Church Singapore: from humble beginnings in 1902 to today.',
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HistoryPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <HistoryPageClient />;
}
