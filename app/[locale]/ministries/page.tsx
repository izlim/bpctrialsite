import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import MinistriesPageClient from './MinistriesPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '事工与服务' : 'Ministries',
    description: isZh
      ? '了解伯大尼长老会的各项事工——包括英华双语青年事工、华语成人事工、儿童主日学及福建话敬拜群体，欢迎加入我们。'
      : 'Explore the ministries at Bethany Presbyterian Church — English-Chinese bilingual youth ministry, Chinese adult fellowship, children Sunday school, and Hokkien dialect congregation. Find your place to serve.',
    keywords: isZh
      ? ['伯大尼事工', '青年事工', '儿童主日学', '福建语敬拜', '华语成人事工', '新加坡教会事奉']
      : ['Bethany Presbyterian ministries', 'church ministries Singapore', 'bilingual youth ministry', 'Chinese adult ministry', 'Hokkien congregation', 'Sunday school ministry', 'church serving opportunities Singapore'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function MinistriesPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <MinistriesPageClient />;
}
