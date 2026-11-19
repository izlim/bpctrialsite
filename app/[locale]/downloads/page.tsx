import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import DownloadsPageClient from './DownloadsPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '资料下载' : 'Downloads',
    description: isZh
      ? '下载《2026 新加坡华语教会研究》报告（中英文版）及“未来教会”研讨会参加者手册。'
      : 'Download the 2026 Research on Singapore Chinese Speaking Churches report (English and Chinese) and the Future Church forum participant handbook.',
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function DownloadsPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <DownloadsPageClient />;
}
