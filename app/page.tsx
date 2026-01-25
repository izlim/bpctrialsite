'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect language preference or default to English
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'zh' ? 'zh' : 'en';
    router.replace(`/${defaultLang}`);
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
