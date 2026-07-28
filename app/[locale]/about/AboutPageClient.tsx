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
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            {t.about.officialWebsiteIntro}
          </p>
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

          {/* Our History */}
          <section className="mb-20">
            <div className="bg-primary-50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-primary-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-30 -mr-10 -mt-10" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-primary-900">{t.about.history}</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {t.about.historyText}
                </p>
              </div>
            </div>
          </section>

          {/* Our Leadership */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.about.leadership}</h2>
              <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                <h3 className="text-2xl font-bold mb-4 text-primary-900">{t.about.seniorPastor}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'en'
                    ? 'Serving the church through preaching, pastoral care, and spiritual leadership.'
                    : '透过讲道、牧养关怀与属灵带领，服事教会。'}
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-orange">
                <h3 className="text-2xl font-bold mb-4 text-primary-900">{t.about.associatePastor}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'en'
                    ? 'Supporting the congregation through discipleship, counselling, and ministry oversight.'
                    : '藉着门徒训练、辅导关怀与事工统筹来支持会众。'}
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                <h3 className="text-2xl font-bold mb-4 text-primary-900">{t.about.youthFamily}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'en'
                    ? 'Equipping young people and families through discipleship, community, and growth in Christ.'
                    : '透过门徒训练、团契与在基督里的成长，装备青年与家庭。'}
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-orange">
                <h3 className="text-2xl font-bold mb-4 text-primary-900">{t.about.presbyterian}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'en'
                    ? 'We practice Presbyterian church government and uphold the historic Christian faith as expressed in the Reformed tradition.'
                    : '我们实践长老会治理，并持守改革宗传统所表达的历史性基督教信仰。'}
                </p>
              </div>
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
                src={img.src}
                alt={locale === 'en' ? 'Church life photo' : '教会生活照片'}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
