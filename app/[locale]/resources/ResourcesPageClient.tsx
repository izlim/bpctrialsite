'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/i18n';

export default function ResourcesPageClient() {
  const { locale, t } = useLocale();
  const contactPath = getLocalizedPath('/contact', locale);

  const suggested = [
    {
      title: locale === 'en' ? 'Daily Devotion (5 minutes)' : '每日灵修（5分钟）',
      description:
        locale === 'en'
          ? 'Read a short passage, pray honestly, write one reflection, and end with a simple action of faith.'
          : '阅读短段经文，诚恳祷告，记录一项省思，最后以一个信心行动结束。',
    },
    {
      title: locale === 'en' ? 'Weekly Scripture Reading' : '每周读经',
      description:
        locale === 'en'
          ? 'Follow a simple rhythm: Read → Reflect → Pray → Share with your family or a friend.'
          : '按简单节奏：读经 → 思想 → 祷告 → 与家人或朋友分享。',
    },
    {
      title: locale === 'en' ? 'Prayer Guide for the Week' : '本周祷告指南',
      description:
        locale === 'en'
          ? 'Pray for church life, your household, and our community—asking God for wisdom and peace.'
          : '为教会生活、家庭与社区祷告；求神赐下智慧与平安。',
    },
  ];

  return (
    <div className="bg-transparent">
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.resources.title}</h1>
          <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-3xl mx-auto leading-relaxed">
            {t.resources.description}
          </p>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mt-8" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.resources.latest}</h2>
              <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
            </div>

            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-12 text-center">
              <div className="text-6xl mb-6">📖</div>
              <p className="text-3xl font-bold text-primary-900 mb-3">{t.resources.noResources}</p>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.resources.noResourcesDesc}</p>
              <div className="mt-8">
                <Link
                  href={contactPath}
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg"
                >
                  {locale === 'en' ? 'Ask for Resources' : '索取资源'}
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-primary-50 rounded-[40px] p-12 md:p-16 mb-20 relative overflow-hidden border border-primary-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-20 -mr-24 -mt-24" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-primary-900">
                  {locale === 'en' ? 'Start Here' : '从这里开始'}
                </h2>
                <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {suggested.map((item, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover-lift ${
                      i % 2 === 0 ? 'card-accent-primary' : 'card-accent-orange'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary-900">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {locale === 'en'
                    ? 'Want a tailored guide for your season of life? Contact us and we will gladly share what we can.'
                    : '想要为您当前的生活阶段预备更贴近的指南？欢迎联络我们，我们会乐意分享。'}
                </p>
                <Link
                  href={contactPath}
                  className="mt-6 inline-flex items-center justify-center bg-orange-400 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-lg"
                >
                  {locale === 'en' ? 'Contact Us' : '联系我们'}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

