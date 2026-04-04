import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import ContactPageClient from './ContactPageClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  return {
    title: isZh ? '联系我们' : 'Contact Us',
    description: isZh
      ? '联系伯大尼长老会教会——欢迎来访、询问崇拜时间或了解更多关于我们的英华双语、华语、儿童主日学及福建话崇拜信息。'
      : 'Get in touch with Bethany Presbyterian Church. Contact us to learn more about our English-Chinese bilingual youth service, Chinese adult worship, Sunday school, and Hokkien dialect service.',
    keywords: isZh
      ? ['联系伯大尼教会', '伯大尼教会电话', '教会地址', '新加坡教会联系方式']
      : ['contact Bethany Presbyterian Church', 'church enquiry Singapore', 'church address Upper Paya Lebar', 'Bethany Presbyterian Church phone'],
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <ContactPageClient />;
}
