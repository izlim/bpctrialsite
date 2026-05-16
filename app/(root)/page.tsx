'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // Detect browser language preference
    const browserLanguage = typeof navigator !== 'undefined'
      ? (navigator.language || (navigator.languages && navigator.languages[0]) || 'en')
      : 'en';

    // Check if the browser language is Chinese (zh, zh-CN, zh-TW, zh-HK, etc.)
    const isChinese = browserLanguage.toLowerCase().startsWith('zh');
    const targetPath = basePath + (isChinese ? '/zh/' : '/en/');

    // Redirect to appropriate locale if we are still at the root
    // This acts as a secondary fallback if the layout script doesn't execute
    if (window.location.pathname === basePath || window.location.pathname === `${basePath}/` || window.location.pathname === `${basePath}/index.html`) {
      window.location.replace(targetPath);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Redirecting...</h1>
        <p className="text-gray-600 mb-6">Preparing the site for you.</p>
        <p className="text-sm text-gray-500">
          If you are not redirected automatically,{' '}
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en/`} className="text-teal-500 hover:text-teal-600 font-medium underline">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
