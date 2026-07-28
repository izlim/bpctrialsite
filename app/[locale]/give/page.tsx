import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import GivePageClient from './GivePageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '奉献' : 'Give',
    description: isZh
      ? '了解伯大尼长老会的奉献方式，以及您的奉献如何支持我们的事工与宣教。'
      : 'Explore ways to give at Bethany Presbyterian Church—and how your giving supports ministry, outreach, and stewardship.',
    keywords: isZh ? ['奉献', '支持事工', '教会奉献'] : ['give', 'donate', 'church giving'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GivePage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <GivePageClient />;
}

