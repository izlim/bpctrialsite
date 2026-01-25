import { notFound } from 'next/navigation';
import { getSermons } from '@/lib/markdown';
import { locales, type Locale } from '@/lib/i18n';
import SermonsPageClient from './SermonsPageClient';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SermonsPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const sermons = await getSermons();

  return <SermonsPageClient sermons={sermons} />;
}
