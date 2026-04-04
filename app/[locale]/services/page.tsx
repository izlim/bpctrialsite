import { notFound } from 'next/navigation';
import { getServices } from '@/lib/markdown';
import { locales, type Locale } from '@/lib/i18n';
import ServicesPageClient from './ServicesPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '崇拜讲道' : 'Sermons & Services',
    description: isZh
      ? '收听或观看伯大尼长老会的崇拜讲道，涵盖英华双语青年崇拜、华语成人崇拜及福建话崇拜的讲道内容。'
      : 'Watch or listen to sermons from Bethany Presbyterian Church — covering our English-Chinese bilingual youth service, Chinese adult worship, and Hokkien dialect service.',
    keywords: isZh
      ? ['伯大尼讲道', '教会崇拜视频', '华语讲道', '双语崇拜讲道', '福建话讲道', '主日讲道']
      : ['Bethany Presbyterian Church sermons', 'church sermons Singapore', 'bilingual youth sermon', 'Hokkien sermon', 'Chinese adult sermon', 'Sunday worship recording Singapore'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const services = await getServices(params.locale);

  return <ServicesPageClient services={services} />;
}
