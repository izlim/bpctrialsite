'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function VisitPageClient() {
  const { locale, t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.visit.title}</h1>

        {/* Service Times */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{t.visit.serviceTimes}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.home.services.map((service: any, index: number) => (
              <div key={index} className="bg-white border-2 border-primary-200 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-2"><strong>{t.common.time}:</strong> {service.time}</p>
                <p className="text-lg text-gray-700 mb-2"><strong>{t.common.location}:</strong> {service.location}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{t.visit.location}</h2>
          <div className="bg-white border-2 border-primary-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">{t.common.siteName}</h3>
            <p className="text-lg text-gray-700 mb-2 whitespace-pre-line">{t.contact.addressText}</p>
            <p className="text-gray-600 mb-4">
              {t.contact.phone}: <a href={`tel:${t.contact.phoneText.replace(/\s/g, '')}`} className="text-primary-600 hover:text-primary-700">{t.contact.phoneText}</a>
            </p>
            <p className="text-gray-600">
              {t.contact.email}: <a href={`mailto:${t.contact.emailText}`} className="text-primary-600 hover:text-primary-700">{t.contact.emailText}</a>
            </p>
          </div>

          {/* Location Photo */}
          <div className="w-full max-w-md mx-auto aspect-3/4 rounded-lg overflow-hidden border-2 border-primary-100 mb-6 shadow-lg">
            <ImagePlaceholder className="w-full h-full" text="Church Building Photo" src="/images/bpc-building-pic-.jpg" />
          </div>

          {/* Live Google Map */}
          <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-primary-100 mb-6 shadow-lg">
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
        </section>

        {/* Directions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{t.visit.gettingHere}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚇</span>
                {t.visit.byMrt}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Take the North-East Line or Circle Line to Serangoon Station. Exit at Exit C and take the buses 22, 43, 70, 70A or 70M. Alight at the 3rd bus stop "Aft Paya Lebar Cres". The church is just a short walk from there.'
                  : '乘搭东北线或环线到实龙岗地铁站。从 C 出口 出站后，转乘 22、43、70、70A 或 70M 号巴士。在第 3 个巴士站 “Aft Paya Lebar Cres” 下车。教堂就在附近，步行即可到达。'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚌</span>
                {t.visit.byBus}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Bus numbers 22, 24, 43, 58, 62, 62A, 70, 70A, 70M, 76, 80 and 80A stop near the church. The nearest bus stops are "Aft Paya Lebar Cres" and "Opp Bethany Presby Ch" on the opposite side of the road, which are a 2-minute walk from the building.'
                  : '巴士号码22、24、43、58、62、62A、70、70A、70M、76、80 和 80A 在教堂附近停靠。最近的巴士站是 "Aft Paya Lebar Cres" 和 "Opp Bethany Presby Ch"，位于马路的对面，距离建筑物2分钟步行。'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚗</span>
                {t.visit.byCar}
              </h3>
              <p className="text-gray-700 mb-2">
                {locale === 'en' ? 'Limited parking is available on-site. Additional parking can be found at: Da Jin Factory Building, S534963' : '现场停车位有限。可在以下地点找到额外停车位：Da Jin Factory Building, S534963'}
              </p>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">{t.visit.planVisit}</h2>
          <p className="text-gray-700 mb-6">
            {t.visit.planVisitText}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>{locale === 'en' ? 'Services typically last about 90 minutes' : '崇拜通常持续约90分钟'}</li>
            <li>{locale === 'en' ? 'Dress code is casual - come as you are' : '着装要求随意 - 随意穿着即可'}</li>
            <li>{locale === 'en' ? 'Children are welcome - we have Sunday School and nursery care' : '欢迎儿童 - 我们提供主日学和托儿服务'}</li>
            <li>{locale === 'en' ? 'Friendly greeters will welcome you at the door' : '友好的迎宾员会在门口欢迎您'}</li>
          </ul>
          <Link
            href={getLocalizedPath('/what-to-expect', locale)}
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            {locale === 'en' ? 'Learn More About What to Expect →' : '了解更多期待什么 →'}
          </Link>
        </section>
      </div>
    </div>
  );
}
