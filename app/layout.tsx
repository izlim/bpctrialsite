import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/components/LocaleProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bethany Presbyterian Church | Singapore',
    template: '%s | Bethany Presbyterian Church',
  },
  description: 'A welcoming community of believers committed to serving God and our neighbors. Join us for worship, fellowship, and growth.',
  keywords: ['church', 'Presbyterian', 'Singapore', 'worship', 'community', 'faith', 'Christian', 'Bible', 'sermons', 'ministry'],
  authors: [{ name: 'Bethany Presbyterian Church' }],
  creator: 'Bethany Presbyterian Church',
  publisher: 'Bethany Presbyterian Church',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bethanypc.org.sg'),
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://bethanypc.org.sg',
    siteName: 'Bethany Presbyterian Church',
    title: 'Bethany Presbyterian Church | Singapore',
    description: 'A welcoming community of believers committed to serving God and our neighbors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bethany Presbyterian Church',
    description: 'A welcoming community of believers committed to serving God and our neighbors.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={inter.className}>
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
