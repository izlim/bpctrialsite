'use client';

import { useLocale } from '@/components/LocaleProvider';

const files = [
  { key: 'researchEn', file: 'chinese-churches-research-2026-en.pdf', pages: 53, size: '0.9 MB' },
  { key: 'researchZh', file: 'chinese-churches-research-2026-zh.pdf', pages: 55, size: '1.3 MB' },
  { key: 'futureChurch', file: 'future-church-handbook-2026.pdf', pages: 9, size: '6.8 MB' },
] as const;

export default function DownloadsPageClient() {
  const { t } = useLocale();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="bg-transparent">
      <section className="bg-primary-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.downloads.title}</h1>
          <p className="text-lg text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto leading-relaxed">
            {t.downloads.intro}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          {files.map(({ key, file, pages, size }) => (
            <article
              key={key}
              className="bg-white rounded-lg border border-primary-200 card-accent-primary shadow-sm p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="flex-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-primary-100 text-primary-900 rounded px-2 py-1 mb-3">
                  {t.downloads.files[key].language}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t.downloads.files[key].title}</h2>
                <p className="text-gray-700 mb-2">{t.downloads.files[key].description}</p>
                <p className="text-sm text-gray-500">
                  PDF • {pages} {t.downloads.pages} • {size}
                </p>
              </div>
              <a
                href={`${basePath}/downloads/${file}`}
                download
                className="btn-teal-primary inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-[48px] w-full md:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t.downloads.download}
              </a>
            </article>
          ))}

          <p className="text-sm text-teal-900 bg-teal-50 border-l-4 border-teal-400 rounded p-4">
            {t.downloads.iphoneTip}
          </p>
        </div>
      </div>
    </div>
  );
}
