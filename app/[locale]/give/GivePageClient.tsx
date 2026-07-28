'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/i18n';

export default function GivePageClient() {
  const { locale, t } = useLocale();

  const contactPath = getLocalizedPath('/contact', locale);
  const mailtoContact = `mailto:${t.contact.emailText}?subject=${encodeURIComponent(
    locale === 'en' ? 'Giving details request' : '索取奉献资料'
  )}`;

  const methods = [
    {
      title: t.give.online,
      description:
        locale === 'en'
          ? 'Use our secure online giving link (provided by the church office). If you need help, email us and we will guide you.'
          : '使用由教会办公室提供的安全在线奉献链接。如需协助，请电邮我们，我们会为您说明。',
    },
    {
      title: t.give.bankTransfer,
      description:
        locale === 'en'
          ? 'You can give via bank transfer. For the latest account details, please request them from the church office.'
          : '您也可以透过银行转账奉献。请向教会办公室索取最新的账户资料。',
    },
    {
      title: t.give.checkCash,
      description:
        locale === 'en'
          ? 'You may give by cheque or cash during Sunday worship or by arrangement with the church office.'
          : '您可以在主日敬拜时以支票或现金奉献，或与教会办公室预约安排。',
    },
    {
      title: t.give.mobileApp,
      description:
        locale === 'en'
          ? 'We support mobile banking transfers. Please contact us for the required reference/details.'
          : '我们支持手机银行转账。请与我们联系以获取所需的参考/资料。',
    },
  ];

  const supports = [
    {
      title: t.give.local,
      description:
        locale === 'en'
          ? 'Worship services, pastoral care, and discipleship programs for our church family.'
          : '为会众预备的敬拜、牧养关怀与门徒训练事工。',
    },
    {
      title: t.give.outreach,
      description:
        locale === 'en'
          ? 'Missions, evangelism, and social care that help share Christ’s love beyond our walls.'
          : '宣教布道与社会关怀，把基督的爱带到教会之外。',
    },
    {
      title: t.give.transparency,
      description:
        locale === 'en'
          ? 'Responsible stewardship and clear financial reporting so the church can serve with integrity.'
          : '尽心的管家职分与清晰的财务报告，让教会以诚信服事。',
    },
  ];

  return (
    <div className="bg-transparent">
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.give.title}</h1>
          <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-3xl mx-auto leading-relaxed">{t.give.intro}</p>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mt-8" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-primary-900 mb-6">{t.give.whyGive}</h2>
                <div className="w-20 h-1.5 bg-orange-400 rounded-full mb-6" />
                <p className="text-gray-700 leading-relaxed text-lg">
                  {locale === 'en'
                    ? 'Your giving supports the work God has entrusted to our church. It helps us serve our community, strengthen believers, and reach those who need hope.'
                    : '您的奉献支持上帝托付给我们教会的工作。它帮助我们服事社区、坚固信徒，并把盼望带给需要的人。'}
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 w-full md:max-w-sm">
                <p className="text-primary-900 font-bold mb-3">{t.give.taxDeductible}</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {locale === 'en'
                    ? 'For eligible receipts, please request a donation receipt from the church office.'
                    : '如需符合条件的奉献收据，请向教会办公室索取。'}
                </p>
                <a
                  href={mailtoContact}
                  className="mt-6 inline-flex w-full items-center justify-center bg-orange-400 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-lg"
                >
                  {locale === 'en' ? 'Request Details' : '索取资料'}
                </a>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">{t.give.waysToGive}</h2>
              <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {methods.map((m, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-orange p-10">
                  <h3 className="text-2xl font-bold mb-4 text-primary-900">{m.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{m.description}</p>
                  <div className="mt-6">
                    <a
                      href={mailtoContact}
                      className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold"
                    >
                      {locale === 'en' ? 'Contact us to get the latest details' : '联络我们索取最新资料'} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary-50 rounded-[40px] p-12 md:p-16 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-20 -mt-24 -ml-24" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary-900 mb-4">{t.give.whatSupports}</h2>
                <div className="w-20 h-1.5 bg-orange-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supports.map((s, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover-lift">
                    <h3 className="text-2xl font-bold mb-3 text-primary-900">{s.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">{locale === 'en' ? 'Need help giving?' : '需要协助奉献？'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              {locale === 'en'
                ? 'If you have questions, contact the church office and we will gladly assist you.'
                : '若您有任何疑问，请联络教会办公室，我们会很乐意为您提供协助。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={contactPath}
                className="inline-flex items-center justify-center bg-primary-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg"
              >
                {locale === 'en' ? 'Go to Contact Page' : '前往联系页面'}
              </Link>
              <a
                href={mailtoContact}
                className="inline-flex items-center justify-center bg-orange-400 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-lg"
              >
                {locale === 'en' ? 'Email Us' : '电邮我们'}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

