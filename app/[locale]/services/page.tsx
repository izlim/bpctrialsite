import { notFound } from 'next/navigation';
import { getServices } from '@/lib/markdown';
import { locales, type Locale } from '@/lib/i18n';
import ServicesPageClient from './ServicesPageClient';

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
