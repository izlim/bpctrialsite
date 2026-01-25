'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function MinistriesPageClient() {
    const { locale, t } = useLocale();

    const ministries = [
        {
            title: locale === 'en' ? 'Children\'s Ministry' : '儿童事工',
            description: locale === 'en' ? 'Nurturing the faith of our youngest members through age-appropriate Bible teaching, songs, and activities.' : '通过适合年龄的圣经教导、歌曲和活动，培育我们最年轻成员的信仰。',
            ageRange: locale === 'en' ? 'Ages 0-12' : '0-12岁',
            contact: 'children@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Youth Ministry' : '青年事工',
            description: locale === 'en' ? 'Helping teenagers grow in their faith, build meaningful friendships, and discover their purpose in Christ.' : '帮助青少年在信仰中成长，建立有意义的友谊，并在基督里发现他们的目标。',
            ageRange: locale === 'en' ? 'Ages 13-18' : '13-18岁',
            contact: 'youth@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Small Groups' : '小组',
            description: locale === 'en' ? 'Connect with others in smaller settings for Bible study, prayer, and fellowship throughout the week.' : '在一周中，通过小组形式与他人联系，进行圣经学习、祷告和团契。',
            ageRange: locale === 'en' ? 'All Ages' : '所有年龄',
            contact: 'smallgroups@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Women\'s Ministry' : '妇女事工',
            description: locale === 'en' ? 'Building community among women through Bible studies, retreats, and fellowship events.' : '通过圣经学习、退修会和团契活动，在妇女中建立社区。',
            ageRange: locale === 'en' ? 'Women of All Ages' : '所有年龄段的妇女',
            contact: 'women@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Men\'s Ministry' : '男士事工',
            description: locale === 'en' ? 'Encouraging men to grow in faith and character through accountability, study, and service.' : '通过问责、学习和服务，鼓励男士在信仰和品格上成长。',
            ageRange: locale === 'en' ? 'Men of All Ages' : '所有年龄段的男士',
            contact: 'men@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Outreach & Missions' : '外展与宣教',
            description: locale === 'en' ? 'Serving our local community and supporting global missions to share the love of Christ.' : '服务我们的当地社区并支持全球宣教，分享基督的爱。',
            ageRange: locale === 'en' ? 'All Ages' : '所有年龄',
            contact: 'outreach@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Music & Worship' : '音乐与敬拜',
            description: locale === 'en' ? 'Leading the congregation in worship through music, both traditional and contemporary styles.' : '通过传统和现代风格的音乐带领会众敬拜。',
            ageRange: locale === 'en' ? 'All Ages' : '所有年龄',
            contact: 'worship@bethanypc.org.sg',
        },
        {
            title: locale === 'en' ? 'Prayer Ministry' : '祷告事工',
            description: locale === 'en' ? 'Interceding for the needs of our church, community, and world through organized prayer.' : '通过有组织的祷告，为我们教会、社区和世界的需要代求。',
            ageRange: locale === 'en' ? 'All Ages' : '所有年龄',
            contact: 'prayer@bethanypc.org.sg',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t.ministries.title}</h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t.ministries.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ministries.map((ministry, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold mb-3">{ministry.title}</h2>
                            <p className="text-gray-700 mb-4">{ministry.description}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2"><strong>{locale === 'en' ? 'Age Range:' : '年龄范围：'}</strong> {ministry.ageRange}</p>
                                    <a
                                        href={`mailto:${ministry.contact}`}
                                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                                    >
                                        {ministry.contact}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">{t.ministries.interested}</h2>
                    <p className="text-gray-700 mb-6">
                        {t.ministries.interestedText}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                    >
                        {t.nav.contact}
                    </Link>
                </div>
            </div>
        </div>
    );
}
