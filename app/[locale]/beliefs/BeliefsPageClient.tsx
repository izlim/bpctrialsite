'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';

export default function BeliefsPageClient() {
  const { locale, t } = useLocale();
  const contactPath = getLocalizedPath('/contact', locale);

  const coreBeliefs = [
    {
      label: t.beliefs.bible,
      description:
        locale === 'en'
          ? 'We believe the Bible is the inspired, inerrant Word of God and the final authority for faith and life.'
          : '我们相信圣经是上帝所默示、无误的话语，是信仰与生活的最高准则。',
    },
    {
      label: t.beliefs.god,
      description:
        locale === 'en'
          ? 'We believe in one God—creator, holy, loving, and sovereign over all.'
          : '我们信独一的真神：全能的创造者，是圣洁、慈爱的主，也掌管万有。',
    },
    {
      label: t.beliefs.jesus,
      description:
        locale === 'en'
          ? 'We believe Jesus Christ is true God and true man, and through his death and resurrection we receive salvation.'
          : '我们相信耶稣基督是真神、真人；藉着他的受死与复活，我们得着救恩。',
    },
    {
      label: t.beliefs.holySpirit,
      description:
        locale === 'en'
          ? 'We believe the Holy Spirit empowers the church, convicts us of sin, and renews believers.'
          : '我们相信圣灵运行在教会中，使人知罪悔改，并更新信徒的生命。',
    },
    {
      label: t.beliefs.salvation,
      description:
        locale === 'en'
          ? 'We believe salvation is by grace through faith in Christ, leading to a life of discipleship.'
          : '我们相信救恩本乎恩典，因着信心而得，以致成就门徒的生活与见证。',
    },
    {
      label: t.beliefs.church,
      description:
        locale === 'en'
          ? 'We believe the church is the people of God called to worship, discipleship, fellowship, and mission.'
          : '我们相信教会是上帝的子民，被呼召敬拜、门徒训练、彼此团契，并参与使命。',
    },
    {
      label: t.beliefs.return,
      description:
        locale === 'en'
          ? 'We believe Christ will return in glory to judge and to consummate God’s kingdom.'
          : '我们相信基督必再来，以荣耀审判并成全上帝的国度。',
    },
  ];

  return (
    <div className="bg-transparent">
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.beliefs.title}</h1>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-8" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16 text-center">
            <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-3xl mx-auto leading-relaxed">
              {t.beliefs.intro}
            </p>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.beliefs.coreBeliefs}</h2>
              <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {coreBeliefs.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover-lift ${
                    i % 2 === 0 ? 'card-accent-primary' : 'card-accent-orange'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary-900">{item.label}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div className="bg-primary-50 rounded-3xl p-10 md:p-12 border border-primary-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-primary-800 font-bold">
                  ✦
                </span>
                <h2 className="text-3xl font-bold text-primary-900">{t.beliefs.distinctives}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {locale === 'en'
                  ? 'We emphasize God’s sovereignty, grace, and covenant faithfulness. We interpret Scripture in the Reformed tradition and place God’s Word at the centre of our life together.'
                  : '我们强调上帝的主权、恩典与约的信实。我们以改革宗传统诠释圣经，并把上帝的话语放在我们共同生活与敬拜的中心。'}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-12 border border-gray-100 shadow-xl card-accent-orange hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-primary-800 font-bold">
                  ✶
                </span>
                <h2 className="text-3xl font-bold text-primary-900">{t.beliefs.confessions}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {locale === 'en'
                  ? 'We hold to historic creeds and confessions as faithful summaries of biblical teaching—guiding how we worship, teach, and disciple the next generation.'
                  : '我们持守历史性的信条与信经作为圣经教导的忠实总结，引导我们如何敬拜、教导，并训练下一代作基督的门徒。'}
              </p>
            </div>
          </section>

          <section className="bg-primary-900 text-white rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20 -mb-48 -mr-48" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-center">{t.beliefs.questions}</h2>
              <p className="text-[rgba(255,255,255,0.75)] text-lg max-w-3xl mx-auto text-center leading-relaxed mb-10">
                {locale === 'en'
                  ? 'If you have questions about faith, doctrine, or visiting our church, our team is happy to help.'
                  : '如果您对信仰、教义，或想要来访有任何疑问，我们很乐意为您提供协助。'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={contactPath}
                  className="inline-flex items-center justify-center bg-orange-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg"
                >
                  {locale === 'en' ? 'Contact Us' : '联系我们'}
                </Link>
                <Link
                  href={getLocalizedPath('/visit', locale)}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  {locale === 'en' ? 'Plan a Visit' : '计划来访'}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

