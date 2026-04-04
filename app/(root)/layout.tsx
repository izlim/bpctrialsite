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
      <head>
        <meta httpEquiv="refresh" content="2;url=/en/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var path = window.location.pathname;
                if (path === '/' || path === '/index.html') {
                  var browserLanguage = typeof navigator !== 'undefined'
                    ? (navigator.language || (navigator.languages && navigator.languages[0]) || 'en')
                    : 'en';
                  var isChinese = browserLanguage.toLowerCase().startsWith('zh');
                  window.location.replace(isChinese ? '/zh/' : '/en/');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${gensen.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
