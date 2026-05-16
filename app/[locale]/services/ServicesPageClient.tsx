'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import ServiceCard from '@/components/ServiceCard';

interface ServicesPageClientProps {
  services: Array<{ slug: string; frontmatter: any }>;
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  const { locale, t } = useLocale();

  return (
    <div className="bg-transparent">
      {/* Header Section */}
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.services.title}</h1>
          <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-3xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mt-8" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {services.length === 0 ? (
            <div className="bg-white p-20 rounded-[40px] text-center shadow-xl border border-gray-100">
              <div className="text-6xl mb-8">📖</div>
              <p className="text-2xl font-bold text-primary-900 mb-4">{t.services.noServices}</p>
              <p className="text-lg text-gray-500 max-w-md mx-auto">
                {t.services.noServicesDesc}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <div key={service.slug} className="hover-lift">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          )}

          {/* More Streams on YouTube */}
          <div className="mt-16 rounded-[32px] border-l-4 border-[#FF6C0E] bg-[#F2EFF7] px-8 py-10 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2E1A46] flex items-center justify-center shadow-md">
              {/* YouTube icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF6C0E" className="w-7 h-7" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-bold text-[#100819] mb-1">{t.services.moreStreams}</p>
              <p className="text-[#1A0E28] opacity-70 text-sm leading-relaxed">{t.services.moreStreamsDesc}</p>
            </div>
            <a
              id="youtube-streams-link"
              href="https://www.youtube.com/@bethanypresbyterianchurchs3856/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2ED9C3] text-[#1a1040] font-semibold text-sm transition-colors duration-200 hover:bg-[#20B8A5] focus:outline-none focus:ring-2 focus:ring-[#2ED9C3] focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {t.services.viewOnYouTube}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
