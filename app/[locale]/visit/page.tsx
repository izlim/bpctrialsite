import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import VisitPageClient from './VisitPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '来访信息' : 'Visit Us',
    description: isZh
      ? '查看伯大尼长老会的崇拜时间、地点与交通路线。我们提供英华双语青年崇拜、华语成人崇拜、儿童主日学及福建话崇拜。'
      : 'Find service times, location, and directions to Bethany Presbyterian Church. We offer bilingual youth, Chinese adult, children Sunday school, and Hokkien services every week.',
    keywords: isZh
      ? ['伯大尼教会地址', '崇拜时间', '教会路线', '主日崇拜时间', '新加坡教会交通']
      : ['Bethany Presbyterian Church location', 'church service times Singapore', 'Sunday service hours', 'how to get to church Singapore', 'Upper Paya Lebar church directions'],
  };
}


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function VisitPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <VisitPageClient />;
}
