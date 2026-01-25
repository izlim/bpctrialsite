import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import ContactPageClient from './ContactPageClient';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return <ContactPageClient />;
}
