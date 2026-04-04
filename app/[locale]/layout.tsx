import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { inter, gensen } from '@/lib/fonts';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/components/LocaleProvider';
import '../globals.css';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale;
  const isZh = locale === 'zh';

  return {
    metadataBase: new URL('https://bethanypc.org.sg'),
    title: {
      default: isZh
        ? '伯大尼长老会教会 新加坡'
        : 'Bethany Presbyterian Church Singapore',
      template: isZh
        ? '%s | 伯大尼长老会教会 新加坡'
        : '%s | Bethany Presbyterian Church Singapore',
    },
    description: isZh
      ? '伯大尼长老会是新加坡以圣经为中心的长老会教会，提供英语及华语崇拜、英华双语青年崇拜、成人主日崇拜、儿童主日学及福建话崇拜服务。'
      : 'Bethany Presbyterian Church is a Bible-centred Presbyterian church in Singapore. We offer English-Chinese bilingual youth services, Chinese adult Sunday worship, Sunday school for children, and a unique Hokkien dialect service.',
    keywords: isZh
      ? [
          '新加坡长老会',
          '新加坡华人教会',
          '新加坡基督教会',
          '双语青年崇拜',
          '英华双语崇拜',
          '华语崇拜',
          '儿童主日学',
          '福建话崇拜',
          '巴耶利峇教会',
          '新加坡基督教',
          '长者教会',
          '敬老教会',
        ]
      : [
          'Presbyterian church Singapore',
          'Chinese church Singapore',
          'Christian church Singapore',
          'bilingual church Singapore',
          'English Chinese bilingual youth service',
          'Chinese adult Sunday service',
          'Sunday school Singapore',
          'Hokkien church service Singapore',
          'Hokkien dialect service',
          'Upper Paya Lebar church',
          'multilingual church Singapore',
          'Bethany Presbyterian Church',
        ],
    authors: [{ name: 'Bethany Presbyterian Church' }],
    creator: 'Bethany Presbyterian Church',
    publisher: 'Bethany Presbyterian Church',
    openGraph: {
      type: 'website',
      locale: isZh ? 'zh_SG' : 'en_SG',
      alternateLocale: isZh ? ['en_SG'] : ['zh_SG'],
      url: `https://bethanypc.org.sg/${locale}/`,
      siteName: isZh ? '伯大尼长老会教会' : 'Bethany Presbyterian Church',
      title: isZh
        ? '伯大尼长老会教会 新加坡'
        : 'Bethany Presbyterian Church Singapore',
      description: isZh
        ? '欢迎加入伯大尼长老会，一起敬拜、团契与门훈. 我们提供英华双语青年崇拜、华语崇拜、儿童主日学及福建话崇拜。'
        : 'Join us for worship, fellowship and discipleship at Bethany Presbyterian Church — offering bilingual youth, Chinese adult, children Sunday school, and Hokkien services.',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? '伯大尼长老会教会 新加坡' : 'Bethany Presbyterian Church Singapore',
      description: isZh
        ? '新加坡伯大尼长老会，提供英华双语、华语、儿童主日学及福建话崇拜服务。'
        : 'A Bible-centred church in Singapore with bilingual youth, Chinese adult, Sunday school, and Hokkien services.',
      images: ['/og.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

        {/* Church structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Church',
              name: 'Bethany Presbyterian Church',
              url: 'https://bethanypc.org.sg',
              logo: 'https://bethanypc.org.sg/icon.png',
              sameAs: [
                'https://www.facebook.com/bethanypcsg/',
                'https://www.instagram.com/bethanypc.sg/',
                'https://www.youtube.com/@bethanypresbyterianchurchs3856',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '364A Paya Lebar Road',
                addressLocality: 'Singapore',
                postalCode: '534965',
                addressCountry: 'SG',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 1.3265,
                longitude: 103.8907,
              },
              telephone: '+65 6280 0011',
              email: 'hello@bethanypc.org.sg',
              availableLanguage: ['English', 'Mandarin', 'Hokkien'],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '09:30',
                  closes: '11:00',
                  name: 'Sunday Morning Hokkien Service',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '11:30',
                  closes: '13:00',
                  name: 'Sunday Morning Chinese Service',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '11:30',
                  closes: '13:00',
                  name: 'Youth Bilingual Service',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '11:30',
                  closes: '13:00',
                  name: "Children's Sunday School",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
