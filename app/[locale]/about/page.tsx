import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import AboutPageClient from './AboutPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '关于我们' : 'About Us',
    description: isZh
      ? '了解伯大尼长老会教会的历史、使命与信仰。我们是一间以圣经为根基、服事多元文化社区的新加坡教会。'
      : 'Learn about Bethany Presbyterian Church — our history, mission, and faith. A Bible-centred church in Singapore serving the community since decades.',
    keywords: isZh
      ? ['伯大尼教会历史', '长老会信仰', '新加坡教会使命', '教会简介']
      : ['about Bethany Presbyterian Church', 'church history Singapore', 'Presbyterian faith', 'church mission Singapore'],
  };
}


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <AboutPageClient />;
}
