import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { inter, gensen } from '@/lib/fonts';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/components/LocaleProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  return {
    alternates: {
      canonical: `https://bethanypc.org.sg/${locale}/`,
      languages: {
        'en': 'https://bethanypc.org.sg/en/',
        'zh': 'https://bethanypc.org.sg/zh/',
        'x-default': 'https://bethanypc.org.sg/',
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className={`${inter.variable} ${gensen.variable} font-sans`}>
        <LocaleProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
