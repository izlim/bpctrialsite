'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function AboutPageClient() {
  const { locale, t } = useLocale();

  return (
    <div className="bg-transparent">
      {/* Header Section */}
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.about.title}</h1>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-8" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Mission & Vision */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl card-accent-primary hover-lift border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.about.mission}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl card-accent-orange hover-lift border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.about.vision}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.visionText}
              </p>

            </div>
          </section>

          {/* Featured Verse */}
          <section className="mb-20">
            <div className="bg-primary-50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-primary-100">
              <div className="absolute top-0 left-0 text-primary-200 text-9xl font-serif opacity-20 transform -translate-x-4 -translate-y-8"></div>
              <blockquote className="relative z-10 max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-primary-900 leading-relaxed italic mb-6">
                  {locale == 'en'
                    ? 'Swarms of living creatures will live wherever the river flows. There will be large numbers of fish, because this water flows there and makes the salt water fresh; so where the river flows everything will live.'
                    : '这河水所到之处，凡滋生的动物都必生活，并且因这流来的水必有极多的鱼，海水也变甜了。这河水所到之处，百物都必生活。'}
                </p>
                <footer className="text-primary-600 font-bold text-lg tracking-wide uppercase">
                  {locale == 'en' ? 'Ezekiel 47:9' : '以西结书 47:9'}
                </footer>
              </blockquote>
            </div>
          </section>
        </div>

        {/* Photo Gallery */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">
            {locale === 'en' ? 'Church Life' : '教会生活'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 
              To change these photos:
              1. Add your photos to the public/images folder
              2. Update the src paths below to match your filenames
            */}
            {[
              { src: '/images/about-1.jpg', alt: 'Church Life 1' },
              { src: '/images/about-2.jpg', alt: 'Church Life 2' },
              { src: '/images/about-3.jpg', alt: 'Church Life 3' },
              { src: '/images/about-4.jpg', alt: 'Church Life 4' },
              { src: '/images/about-5.jpg', alt: 'Church Life 5' },
              { src: '/images/about-6.jpg', alt: 'Church Life 6' },
              { src: '/images/about-7.jpg', alt: 'Church Life 7' },
              { src: '/images/about-8.jpg', alt: 'Church Life 8' },
            ].map((img, i) => (
              <ImagePlaceholder
                key={i}
                className="aspect-square rounded-lg"
                text={locale === 'en' ? `Photo ${i + 1}` : `照片 ${i + 1}`}
                src={img.src}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
