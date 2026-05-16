'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function VisitPageClient() {
  const { locale, t } = useLocale();

  return (
    <div className="bg-transparent">
      {/* Header Section */}
      <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.visit.title}</h1>
          <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Service Times */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-primary-900 border-l-8 border-orange-400 pl-6">{t.visit.serviceTimes}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.home.services.map((service: any, index: number) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                  <h3 className="text-2xl font-bold mb-4 text-primary-800">{service.title}</h3>
                  <div className="space-y-3">
                    <p className="text-lg text-gray-700 flex items-center"><span className="w-24 font-bold text-primary-600">{t.common.time}:</span> {service.time}</p>
                    <p className="text-lg text-gray-700 flex items-center"><span className="w-24 font-bold text-primary-600">{t.common.location}:</span> {service.location}</p>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed italic">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-primary-900 border-l-8 border-orange-400 pl-6">{t.visit.location}</h2>
            <div className="bg-white p-10 rounded-3xl shadow-xl mb-12 border border-gray-100 card-accent-orange">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">{t.common.siteName}</h3>
              <p className="text-lg text-gray-700 mb-6 whitespace-pre-line leading-relaxed">{t.contact.addressText}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-gray-700 font-medium">
                  <span className="text-teal-500 mr-2">📞</span> {t.contact.phone}: <a href={`tel:${t.contact.phoneText.replace(/\s/g, '')}`} className="text-teal-500 hover:text-teal-600 hover:underline">{t.contact.phoneText}</a>
                </p>
                <p className="text-gray-700 font-medium">
                  <span className="text-teal-500 mr-2">✉️</span> {t.contact.email}: <a href={`mailto:${t.contact.emailText}`} className="text-teal-500 hover:text-teal-600 hover:underline">{t.contact.emailText}</a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Location Photo */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl hover-lift">
                <ImagePlaceholder className="w-full h-full min-h-[400px]" text="Church Building Photo" src="/images/bpc-building-pic-.jpg" />
              </div>

              {/* Live Google Map */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl hover-lift min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7136200268733!2d103.87822937599617!3d1.3483210986389313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17bcc6871ded%3A0x478e0ddb351b3f80!2sBethany%20Presbyterian%20Church!5e0!3m2!1sen!2ssg!4v1769698378214!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Directions */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-primary-900 border-l-8 border-orange-400 pl-6">{t.visit.gettingHere}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                <div className="text-4xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-2xl">🚇</div>
                <h3 className="text-xl font-bold mb-4 text-primary-800">{t.visit.byMrt}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {locale === 'en'
                    ? 'North-East or Circle Line to Serangoon. Exit C → Bus 22, 43, 70/A/M → Alight at "Aft Paya Lebar Cres".'
                    : '乘搭东北线或环线到实龙岗站。C出口 → 巴士 22, 43, 70/A/M → "Aft Paya Lebar Cres" 下车。'}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                <div className="text-4xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-2xl">🚌</div>
                <h3 className="text-xl font-bold mb-4 text-primary-800">{t.visit.byBus}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {locale === 'en'
                    ? 'Buses 22, 24, 43, 58, 62/A, 70/A/M, 76, 80/A stop at "Aft Paya Lebar Cres" or "Opp Bethany Presby Ch".'
                    : '巴士 22, 24, 43, 58, 62/A, 70/A/M, 76, 80/A 在 "Aft Paya Lebar Cres" 或 "Opp Bethany Presby Ch" 停靠。'}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover-lift border border-gray-100 card-accent-primary">
                <div className="text-4xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-2xl">🚗</div>
                <h3 className="text-xl font-bold mb-4 text-primary-800">{t.visit.byCar}</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-2">
                  {locale === 'en' ? 'Limited on-site parking. Extra parking: Da Jin Factory Building, S534963.' : '现场停车位有限。额外停车：Da Jin Factory Building, S534963。'}
                </p>
              </div>
            </div>
          </section>

          {/* Plan Your Visit */}
          <section className="bg-primary-900 p-12 rounded-[40px] text-white relative overflow-hidden shadow-2xl mb-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">{t.visit.planVisit}</h2>
              <p className="text-xl mb-10 text-primary-100 leading-relaxed max-w-2xl">
                {t.visit.planVisitText}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  locale === 'en' ? 'Services last ~90 minutes' : '崇拜约90分钟',
                  locale === 'en' ? 'Casual dress code' : '着装随意',
                  locale === 'en' ? 'Children\'s Sunday School available' : '提供儿童主日学',
                  locale === 'en' ? 'Friendly greeters at the door' : '友好的迎宾员'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 text-lg">
                    <span className="text-teal-400">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href={getLocalizedPath('/what-to-expect', locale)}
                className="inline-block bg-orange-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg transform hover:-translate-y-1"
              >
                {locale === 'en' ? 'Learn More About What to Expect' : '了解更多期待什么'}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
