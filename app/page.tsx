'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
