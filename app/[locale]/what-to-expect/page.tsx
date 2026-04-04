import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import WhatToExpectPageClient from './WhatToExpectPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '新朋友指南' : 'What to Expect',
    description: isZh
      ? '第一次来伯大尼长老会？了解我们的崇拜流程、停车信息及接待安排。我们提供英华双语青年崇拜、华语崇拜、儿童主日学及福建话崇拜，欢迎您的到来！'
      : 'Visiting Bethany Presbyterian Church for the first time? Learn what to expect — from our welcoming atmosphere to our English-Chinese bilingual youth service, Chinese adult worship, children Sunday school, and Hokkien services.',
    keywords: isZh
      ? ['新朋友指南', '初次来访', '伯大尼教会欢迎', '崇拜流程', '教会初访']
      : ['first time church visit Singapore', 'what to expect at church', 'new to Bethany Presbyterian', 'welcoming church Singapore', 'church visitor guide Singapore'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function WhatToExpectPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <WhatToExpectPageClient />;
}
