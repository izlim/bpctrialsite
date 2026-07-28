import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import ResourcesPageClient from './ResourcesPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '资源' : 'Resources',
    description: isZh
      ? '透过灵修与圣经学习资源，在信心里持续成长。'
      : 'Grow in your faith through devotion, Bible study, and helpful resources.',
    keywords: isZh ? ['灵修资源', '圣经学习', '查经'] : ['devotions', 'bible study', 'resources'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <ResourcesPageClient />;
}

