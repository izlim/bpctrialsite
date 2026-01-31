'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';

export default function WhatToExpectPageClient() {
    const { locale, t } = useLocale();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{t.whatToExpect.title}</h1>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
                    <p className="text-lg text-gray-700">
                        {t.whatToExpect.intro}
                    </p>
                </div>

                {/* Service Format */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.serviceFormat}</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.visit.sundayMorning} (9:30 AM)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>{locale === 'en' ? 'Welcome & Announcements' : '欢迎与报告'}</strong> {locale === 'en' ? '(5 minutes)' : '(5分钟)'}</li>
                                <li><strong>{locale === 'en' ? 'Worship Through Music' : '音乐敬拜'}</strong> {locale === 'en' ? '(20 minutes) - Mix of traditional hymns and contemporary songs' : '(20分钟) - 传统赞美诗与现代诗歌'}</li>
                                <li><strong>{locale === 'en' ? 'Scripture Reading' : '读经'}</strong> {locale === 'en' ? '(3 minutes)' : '(3分钟)'}</li>
                                <li><strong>{locale === 'en' ? 'Message' : '讲道'}</strong> {locale === 'en' ? '(35-40 minutes) - Expository preaching from the Bible' : '(35-40分钟) - 圣经释经讲道'}</li>
                                <li><strong>{locale === 'en' ? 'Response & Prayer' : '回应与祷告'}</strong> {locale === 'en' ? '(5 minutes)' : '(5分钟)'}</li>
                                <li><strong>{locale === 'en' ? 'Benediction' : '祝福'}</strong> {locale === 'en' ? '(2 minutes)' : '(2分钟)'}</li>
                            </ul>
                            <p className="text-gray-600 mt-4 text-sm">
                                {locale === 'en' ? 'Total service time: Approximately 90 minutes' : '总崇拜时间：约90分钟'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.visit.sundayEvening} (6:00 PM)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>{locale === 'en' ? 'Contemporary Worship' : '现代敬拜'}</strong> {locale === 'en' ? '(25 minutes) - Modern Christian music' : '(25分钟) - 现代基督教音乐'}</li>
                                <li><strong>{locale === 'en' ? 'Message' : '讲道'}</strong> {locale === 'en' ? '(35-40 minutes) - Practical, applicable teaching' : '(35-40分钟) - 实用教导'}</li>
                                <li><strong>{locale === 'en' ? 'Fellowship Time' : '团契时间'}</strong> {locale === 'en' ? '(15 minutes) - Coffee and conversation' : '(15分钟) - 多加咖啡与交流'}</li>
                            </ul>
                            <p className="text-gray-600 mt-4 text-sm">
                                {locale === 'en' ? 'Total service time: Approximately 75 minutes' : '总崇拜时间：约75分钟'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Worship Style */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.worshipStyle}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en' ? 'Our worship style blends traditional and contemporary elements. We value:' : '我们的敬拜风格融合了传统和现代元素。我们重视：'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>{locale === 'en' ? 'Biblical Content:' : '圣经内容：'}</strong> {locale === 'en' ? 'All songs and messages are grounded in Scripture' : '所有歌曲和信息都基于圣经'}</li>
                            <li><strong>{locale === 'en' ? 'Authentic Expression:' : '真实表达：'}</strong> {locale === 'en' ? 'We encourage genuine, heartfelt worship' : '我们鼓励真诚、发自内心的敬拜'}</li>
                            <li><strong>{locale === 'en' ? 'Musical Diversity:' : '音乐多样性：'}</strong> {locale === 'en' ? 'From classic hymns to modern worship songs' : '从经典赞美诗到现代敬拜歌曲'}</li>
                            <li><strong>{locale === 'en' ? 'Participation:' : '参与：'}</strong> {locale === 'en' ? 'Everyone is welcome to participate at their comfort level' : '欢迎每个人以自己舒适的方式参与'}</li>
                        </ul>
                    </div>
                </section>

                {/* Dress Code */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.dressCode}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en' ? 'There\'s no dress code at Bethany Presbyterian Church. Come as you are! You\'ll see people in a variety of styles:' : '伯大尼长老会没有着装要求。随意穿着！你会看到各种风格：'}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <p className="font-semibold mb-2">{locale === 'en' ? 'Some people wear:' : '有些人穿：'}</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    <li>{locale === 'en' ? 'Business casual' : '商务休闲'}</li>
                                    <li>{locale === 'en' ? 'Dress shirts and slacks' : '衬衫和西裤'}</li>
                                    <li>{locale === 'en' ? 'Dresses and skirts' : '连衣裙和裙子'}</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">{locale === 'en' ? 'Others wear:' : '其他人穿：'}</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    <li>{locale === 'en' ? 'Jeans and t-shirts' : '牛仔裤和T恤'}</li>
                                    <li>{locale === 'en' ? 'Casual attire' : '休闲装'}</li>
                                    <li>{locale === 'en' ? 'Whatever is comfortable' : '任何舒适的衣服'}</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm italic">
                            {locale === 'en' ? 'The most important thing is that you\'re here, not what you\'re wearing!' : '最重要的是你来了，而不是你穿什么！'}
                        </p>
                    </div>
                </section>

                {/* Children's Programs */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.children}</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{locale === 'en' ? 'Nursery (Ages 0-2)' : '育儿室 (0-2岁)'}</h3>
                            <p className="text-gray-700 mb-2">
                                {locale === 'en' ? 'Safe, loving care for infants and toddlers during both services. Our trained volunteers provide age-appropriate activities and care.' : '在两场崇拜期间为婴幼儿提供安全、充满爱心的照顾。我们要训练有素的志愿者提供适合年龄的活动和照顾。'}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>{t.common.location}:</strong> {locale === 'en' ? 'First floor, Room 101' : '一楼，101室'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{locale === 'en' ? 'Sunday School (Ages 3-12)' : '主日学 (3-12岁)'}</h3>
                            <p className="text-gray-700 mb-2">
                                {locale === 'en' ? 'Engaging Bible lessons, songs, and activities designed for children. Classes are divided by age groups to ensure age-appropriate teaching.' : '为儿童设计的有趣圣经课程、歌曲和活动。班级按年龄分组，以确保适合年龄的教学。'}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>{t.common.time}:</strong> {locale === 'en' ? 'During Sunday morning service (9:30 AM)' : '主日早堂期间 (上午9:30)'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{locale === 'en' ? 'Youth Programs (Ages 13-18)' : '青年活动 (13-18岁)'}</h3>
                            <p className="text-gray-700 mb-2">
                                {locale === 'en' ? 'Dynamic programs designed to help teenagers grow in their faith, build friendships, and serve others.' : '充满活力的活动，旨在帮助青少年在信仰中成长，建立友谊并服务他人。'}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>{t.common.date}:</strong> {locale === 'en' ? 'Sunday: Evening service and youth group; Saturday: Youth fellowship at 3:00 PM' : '周日：晚堂崇拜和青年团契；周六：下午3:00青年团契'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* First-Time Visitors */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.firstTime}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">{locale === 'en' ? 'When You Arrive' : '当您到达时'}</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>{locale === 'en' ? 'Friendly greeters will welcome you at the main entrance' : '友好的迎宾员会在正门欢迎您'}</li>
                                <li>{locale === 'en' ? 'Feel free to ask any questions - we\'re here to help!' : '随时提出任何问题 - 我们在这里为您提供帮助！'}</li>
                                <li>{locale === 'en' ? 'Pick up a welcome packet with information about the church' : '领取包含教会信息的欢迎礼包'}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">{locale === 'en' ? 'During Service' : '崇拜期间'}</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>{locale === 'en' ? 'You won\'t be asked to stand up or introduce yourself' : '您不会被要求站起来或自我介绍'}</li>
                                <li>{locale === 'en' ? 'Offering is for members and regular attendees - guests are not expected to give' : '奉献是为会员和常客准备的 - 客人不被期望奉献'}</li>
                                <li>{locale === 'en' ? 'Feel free to participate in singing and prayer at your comfort level' : '随意以您舒适的方式参与唱诗和祷告'}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">{locale === 'en' ? 'After Service' : '崇拜后'}</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>{locale === 'en' ? 'Join us for coffee and refreshments in the fellowship hall' : '在团契厅与我们一起享用咖啡和茶点'}</li>
                                <li>{locale === 'en' ? 'Meet our pastor and other members' : '见我们的牧师和其他成员'}</li>
                                <li>{locale === 'en' ? 'Ask questions and learn more about our church' : '提问并了解更多关于我们教会的信息'}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.whatToExpect.accessibility}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en' ? 'We want everyone to feel welcome and comfortable. Our facilities include:' : '我们希望每个人都感到受欢迎和舒适。我们的设施包括：'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>{locale === 'en' ? 'Wheelchair accessible entrances and restrooms' : '轮椅无障碍通道和洗手间'}</li>
                            <li>{locale === 'en' ? 'Elevator access to all floors' : '通往所有楼层的电梯'}</li>
                            <li>{locale === 'en' ? 'Hearing assistance devices available upon request' : '可根据要求提供听力辅助设备'}</li>
                            <li>{locale === 'en' ? 'Large print bulletins and Bibles' : '大字崇拜程序单和圣经'}</li>
                            <li>{locale === 'en' ? 'Designated seating areas for wheelchairs' : '轮椅专用座位区'}</li>
                        </ul>
                        <p className="text-gray-600 mt-4 text-sm">
                            {locale === 'en' ? 'If you have specific accessibility needs, please contact us in advance so we can ensure your visit is comfortable.' : '如果您有特殊的无障碍需求，请提前联系我们，以便我们确保您的访问舒适。'}
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-primary-600 text-white p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-4">{t.whatToExpect.readyToVisit}</h2>
                    <p className="text-lg mb-6 text-primary-100">
                        {t.whatToExpect.readyText}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={getLocalizedPath('/visit', locale)}
                            className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
                        >
                            {locale === 'en' ? 'Get Directions' : '获取路线'}
                        </Link>
                        <Link
                            href={getLocalizedPath('/contact', locale)}
                            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
