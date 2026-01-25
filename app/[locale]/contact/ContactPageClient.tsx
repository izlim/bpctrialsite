'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';

export default function ContactPageClient() {
  const { locale, t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t.contact.getInTouch}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.address}</h3>
                <p className="text-gray-700">
                  123 Church Street<br />
                  Singapore 123456
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.phone}</h3>
                <p className="text-gray-700">
                  <a href="tel:+6561234567" className="text-primary-600 hover:text-primary-700">
                    +65 6123 4567
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.email}</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700">
                    info@bethanypc.org.sg
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.officeHours}</h3>
                <p className="text-gray-700">
                  {locale === 'en' ? 'Monday - Friday: 9:00 AM - 5:00 PM' : '星期一 - 星期五：上午9:00 - 下午5:00'}<br />
                  {locale === 'en' ? 'Saturday: 9:00 AM - 12:00 PM' : '星期六：上午9:00 - 中午12:00'}<br />
                  {locale === 'en' ? 'Sunday: Closed' : '星期日：休息'}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">{t.contact.sendMessage}</h2>
            <ContactForm />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t.contact.otherWays}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{t.contact.pastoralCare}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {locale === 'en' 
                  ? 'For pastoral needs, prayer requests, or spiritual guidance'
                  : '用于牧养需求、祷告请求或属灵指导'}
              </p>
              <a href="mailto:pastor@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                pastor@bethanypc.org.sg
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.contact.general}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {locale === 'en'
                  ? 'Questions about services, events, or church information'
                  : '关于服务、活动或教会信息的问题'}
              </p>
              <a href="mailto:info@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                info@bethanypc.org.sg
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.contact.ministry}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {locale === 'en'
                  ? 'Interested in joining a ministry or small group?'
                  : '有兴趣加入事工或小组吗？'}
              </p>
              <a href="mailto:ministries@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                ministries@bethanypc.org.sg
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
