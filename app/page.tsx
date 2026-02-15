'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language preference
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';

    // Check if the browser language is Chinese (zh, zh-CN, zh-TW, zh-HK, etc.)
    const isChinese = browserLanguage.toLowerCase().startsWith('zh');

    // Redirect to appropriate locale
    router.replace(isChinese ? '/zh' : '/en');
  }, [router]);

  return (
    <>
      {/* Meta refresh as fallback if JavaScript fails */}
      <Head>
        <meta httpEquiv="refresh" content="1;url=/en/" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Redirecting...</p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically,{' '}
            <a href="/en/" className="text-primary-600 hover:text-primary-700 underline">
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
