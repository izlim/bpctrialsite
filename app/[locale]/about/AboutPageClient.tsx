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
          <div className="w-24 h-1.5 bg-accent-400 mx-auto rounded-full mb-8" />
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
            <div className="bg-white p-10 rounded-3xl shadow-xl card-accent-accent hover-lift border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.about.vision}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.visionText}
              </p>

            </div>
          </section>

          {/* Featured Verse */}
          <section className="mb-20">
            <div className="bg-primary-50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-primary-100">
              <div className="absolute top-0 left-0 text-primary-200 text-9xl font-serif opacity-20 transform -translate-x-4 -translate-y-8">"</div>
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

        {/* History */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.about.history}</h2>
          <p className="text-gray-700 mb-4">
            {t.about.historyText}
          </p>
          <p className="text-gray-700 mb-4">
            {locale === 'en' ? 'Throughout our history, we have remained committed to:' : '在我们的历史中，我们始终致力于：'}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>{locale === 'en' ? 'Biblical teaching and sound doctrine' : '圣经教导和健全的教义'}</li>
            <li>{locale === 'en' ? 'Authentic worship and prayer' : '真实的敬拜和祷告'}</li>
            <li>{locale === 'en' ? 'Loving community and fellowship' : '充满爱心的社区和团契'}</li>
            <li>{locale === 'en' ? 'Service to our community and world' : '服务我们的社区和世界'}</li>
            <li>{locale === 'en' ? 'Discipleship and spiritual growth' : '门徒训练和属灵成长'}</li>
          </ul>
        </section> */}

        {/* Leadership */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{t.about.leadership}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-700 text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {locale === 'en' ? 'Pastor Name' : '牧师姓名'}
              </h3>
              <p className="text-gray-600 text-center mb-4">{t.about.seniorPastor}</p>
              <p className="text-gray-700 text-sm">
                {locale === 'en'
                  ? 'Pastor Name has been serving at Bethany Presbyterian Church since [YEAR]. He is passionate about expository preaching and discipleship, with a heart for seeing people grow in their relationship with Christ.'
                  : '牧师姓名自[年份]起在伯大尼长老会服事。他热衷于释经讲道和门徒训练，渴望看到人们在与基督的关系中成长。'}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-700 text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {locale === 'en' ? 'Associate Pastor' : '副牧师'}
              </h3>
              <p className="text-gray-600 text-center mb-4">{t.about.youthFamily}</p>
              <p className="text-gray-700 text-sm">
                {locale === 'en'
                  ? 'Our associate pastor leads our youth and family ministries, helping families grow together in faith and supporting the next generation of believers.'
                  : '我们的副牧师领导青年和家庭事工，帮助家庭在信仰中一起成长，并支持下一代信徒。'}
              </p>
            </div>
          </div>
        </section>*/}

        {/* Denomination */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.about.presbyterian}</h2>
          <p className="text-gray-700 mb-4">
            {locale === 'en'
              ? 'Bethany Presbyterian Church is part of the Presbyterian denomination, which traces its roots to the Protestant Reformation. We value:'
              : '伯大尼长老会是长老会宗派的一部分，其根源可追溯到宗教改革。我们重视：'}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{locale === 'en' ? 'The sovereignty of God in all things' : '上帝在一切事物中的主权'}</li>
            <li>{locale === 'en' ? 'The authority of Scripture as our guide for faith and life' : '圣经作为我们信仰和生活的指南的权威'}</li>
            <li>{locale === 'en' ? 'Reformed theology and the Westminster Confession of Faith' : '改革宗神学和威斯敏斯特信条'}</li>
            <li>{locale === 'en' ? 'Elder-led governance and congregational participation' : '长老治理和会众参与'}</li>
            <li>{locale === 'en' ? 'Connectionalism with other Presbyterian churches' : '与其他长老会教会的联系'}</li>
          </ul>
        </section>*/}

        {/* Photo Gallery Placeholder */}
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
