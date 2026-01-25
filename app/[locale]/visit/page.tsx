import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import VisitPageClient from './VisitPageClient';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function VisitPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <VisitPageClient />;
}
