'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';

export default function AboutPageClient() {
  const { locale, t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>

        {/* Mission & Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.about.mission}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {t.about.missionText}
          </p>
          <h2 className="text-3xl font-semibold mb-4">{t.about.vision}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t.about.visionText}
          </p>
          <p className="text-gray-700 mb-4">
            {locale == 'en' ? 'Swarms of living creatures will live wherever the river flows. There will be large numbers of fish, because this water flows there and makes the salt water fresh; so where the river flows everything will live.\n (Ezekiel 47:9)' : '这河水所到之处，凡滋生的动物都必生活，并且因这流来的水必有极多的鱼，海水也变甜了。这河水所到之处，百物都必生活\n (以西结书 47:9)'}
          </p>
        </section>

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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">
                  {locale === 'en' ? `Photo ${i}` : `照片 ${i}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
