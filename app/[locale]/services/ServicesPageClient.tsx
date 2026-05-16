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
        </div>
      </div>
    </div>
  );
}
