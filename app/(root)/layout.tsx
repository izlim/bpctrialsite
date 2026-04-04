import { inter, gensen } from '@/lib/fonts';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting... | Bethany Presbyterian Church Singapore',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gensen.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
