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
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">{t.visit.sundayMorning}</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>{t.common.time}:</strong> 9:30 AM - 11:00 AM</p>
              <p className="text-gray-600 mb-4">
                {locale === 'en' ? 'Traditional worship with hymns and contemporary elements' : '传统敬拜，包含赞美诗和现代元素'}
              </p>
              <p className="text-sm text-gray-500">
                {locale === 'en' ? 'Children\'s Sunday School available during service' : '主日学在崇拜期间开放'}
              </p>
            </div>
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">{t.visit.sundayEvening}</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>{t.common.time}:</strong> 6:00 PM - 7:30 PM</p>
              <p className="text-gray-600 mb-4">
                {locale === 'en' ? 'Contemporary worship with modern music' : '现代敬拜，使用现代音乐'}
              </p>
              <p className="text-sm text-gray-500">
                {locale === 'en' ? 'Youth programs available' : '提供青年活动'}
              </p>
            </div>
          </div>
          <div className="mt-6 bg-primary-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">{t.visit.midweek}</h4>
            <ul className="text-gray-700 space-y-1">
              <li><strong>{locale === 'en' ? 'Wednesday:' : '星期三：'}</strong> {locale === 'en' ? 'Prayer Meeting - 7:30 PM' : '祷告会 - 晚上7:30'}</li>
              <li><strong>{locale === 'en' ? 'Friday:' : '星期五：'}</strong> {locale === 'en' ? 'Small Groups - Various times and locations' : '小组 - 不同时间和地点'}</li>
              <li><strong>{locale === 'en' ? 'Saturday:' : '星期六：'}</strong> {locale === 'en' ? 'Youth Fellowship - 3:00 PM' : '青年团契 - 下午3:00'}</li>
            </ul>
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
                  ? 'Take the [Line Name] to [Station Name] Station. Exit at [Exit Number] and walk approximately 5 minutes. The church is located on the corner of Church Street and Main Road.'
                  : '乘坐[线路名称]到[站名]站。从[出口号码]出口，步行约5分钟。教会在教堂街和主路的拐角处。'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚌</span>
                {t.visit.byBus}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'Bus numbers [X], [Y], and [Z] stop near the church. The nearest bus stop is "Church Street" which is a 2-minute walk from the building.'
                  : '巴士号码[X]、[Y]和[Z]在教堂附近停靠。最近的巴士站是"教堂街"，距离建筑物2分钟步行。'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚗</span>
                {t.visit.byCar}
              </h3>
              <p className="text-gray-700 mb-2">
                {locale === 'en' ? 'Limited parking is available on-site. Additional parking can be found at:' : '现场停车位有限。可在以下地点找到额外停车位：'}
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>{locale === 'en' ? 'Public parking lot across the street' : '街对面的公共停车场'}</li>
                <li>{locale === 'en' ? 'Street parking on surrounding roads' : '周边道路的街边停车'}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚶</span>
                {t.visit.walking}
              </h3>
              <p className="text-gray-700">
                {locale === 'en'
                  ? 'The church is easily accessible on foot from the surrounding neighborhoods. We\'re located in a pedestrian-friendly area with sidewalks and crosswalks.'
                  : '教堂很容易从周边社区步行到达。我们位于一个适合步行的区域，有步行道和人行横道。'}
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
            <li>{locale === 'en' ? 'Free parking available on-site' : '现场提供免费停车'}</li>
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
