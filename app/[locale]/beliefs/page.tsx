import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import BeliefsPageClient from './BeliefsPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '信仰' : 'Beliefs',
    description: isZh
      ? '了解伯大尼长老会所持守的信仰、核心教导与长老会特色。'
      : 'Learn what we believe at Bethany Presbyterian Church—core doctrines, Presbyterian distinctives, and confessional standards.',
    keywords: isZh ? ['长老会信仰', '核心信仰', '我们相信'] : ['Presbyterian beliefs', 'core beliefs', 'what we believe'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function BeliefsPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <BeliefsPageClient />;
}

