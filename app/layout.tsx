import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/components/LocaleProvider';

// Inter font is now loaded locally to prevent build issues with blocked Google network
const inter = localFont({
  src: '../public/fonts/Inter-VariableFont.woff2',
  variable: '--font-inter',
  display: 'swap',
});

const gensen = localFont({
  src: [
    {
      path: '../public/fonts/GenSenRounded2TW-M-01.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GenSenRounded2TC-M-02.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gensen',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bethanypc.org.sg'),

  title: {
    default: 'Bethany Presbyterian Church Singapore',
    template: '%s | Bethany Presbyterian Church Singapore',
  },

  description:
    'Bethany Presbyterian Church is a Bible-centred Presbyterian church in Singapore offering Chinese and English worship services, discipleship, youth ministry and community outreach.',

  keywords: [
    'Presbyterian church Singapore',
    'Chinese church Singapore',
    'Christian church Singapore',
    'worship service Singapore',
    'Chinese church',
    'Bilingual church',
    'Elderly church',
    'Senior church',
    'Hokkien service',
    'Upper Paya Lebar',
  ],

  authors: [{ name: 'Bethany Presbyterian Church' }],
  creator: 'Bethany Presbyterian Church',
  publisher: 'Bethany Presbyterian Church',

  openGraph: {
    type: 'website',
    locale: 'en_SG',
    alternateLocale: ['zh_SG'],
    url: 'https://bethanypc.org.sg',
    siteName: 'Bethany Presbyterian Church',
    title: 'Bethany Presbyterian Church Singapore',
    description:
      'Join us for worship, fellowship and discipleship at Bethany Presbyterian Church in Singapore.',
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
    title: 'Bethany Presbyterian Church Singapore',
    description:
      'A Bible-centred Presbyterian church in Singapore with Chinese and English services.',
    images: ['/og.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://bethanypc.org.sg',
    languages: {
      en: 'https://bethanypc.org.sg/en/',
      zh: 'https://bethanypc.org.sg/zh/',
      'x-default': 'https://bethanypc.org.sg/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gensen.variable}`}>
        <LocaleProvider>
          <Header />
          {children}
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
              address: {
                '@type': 'PostalAddress',
                streetAddress: '364A Paya Lebar Road',
                addressLocality: 'Singapore',
                postalCode: '409123',
                addressCountry: 'SG',
              },
              telephone: '+65 6280 0011',
              availableLanguage: ['English', 'Mandarin', 'Hokkien'],
              audience: {
                '@type': 'Audience',
                audienceType: 'Seniors',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}