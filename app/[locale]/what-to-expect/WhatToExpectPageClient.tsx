'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import Link from 'next/link';

export default function WhatToExpectPageClient() {
    const { locale, t } = useLocale();

    return (
        <div className="bg-transparent">
            {/* Header Section */}
            <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight italic text-white">
                        {t.whatToExpect.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-light">
                        {t.whatToExpect.intro}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto space-y-24">
                    {/* Service Format - Timeline Style */}
                    <section>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whatToExpect.serviceFormat}</h2>
                            <div className="w-24 h-1.5 bg-accent-400 mx-auto rounded-full" />
                        </div>
                        <div className="relative max-w-3xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12 relative">
                                {[
                                    { time: '25 mins', label: locale === 'en' ? 'Worship' : '敬拜', color: 'bg-primary-600' },
                                    {
                                        time: '15 mins',
                                        label: locale === 'en' ? 'Welcome & Announcements' : '欢迎与报告',
                                        sub: locale === 'en' ? '(Holy Communion on 1st Sundays)' : '(每月首个主日：圣餐礼)',
                                        color: 'bg-accent-400'
                                    },
                                    { time: '45 mins', label: locale === 'en' ? 'Sermon' : '讲道', color: 'bg-primary-600' },
                                    { time: '10 mins', label: locale === 'en' ? 'Closing Song' : '回应诗歌/结束诗歌', color: 'bg-primary-400' }
                                ].map((item, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className="flex-1 w-full md:w-auto text-center md:text-right px-8 order-2 md:order-none">
                                            {i % 2 === 0 || true ? (
                                                <div className={`p-6 rounded-2xl bg-white shadow-lg border-t-4 border-primary-500 hover-lift ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                                                    <span className="text-primary-600 font-bold text-lg mb-1 block">{item.time}</span>
                                                    <h3 className="text-2xl font-bold text-gray-800">{item.label}</h3>
                                                    {item.sub && <p className="text-gray-500 text-sm italic mt-2">{item.sub}</p>}
                                                </div>
                                            ) : <div className="hidden md:block" />}
                                        </div>
                                        <div className={`w-10 h-10 rounded-full ${item.color} border-4 border-white shadow-md z-10 flex-shrink-0 hidden md:flex items-center justify-center text-white font-bold`}>
                                            {i + 1}
                                        </div>
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-gray-500 mt-12 font-medium bg-gray-50 py-3 rounded-xl border border-dashed border-gray-300">
                                {locale === 'en' ? 'Total service time: Approximately 90-100 minutes' : '总崇拜时间：约90-100分钟'}
                            </p>
                        </div>
                    </section>

                    {/* Worship Style & Dress Code Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <section className="bg-primary-50 p-10 rounded-3xl border border-primary-100 shadow-sm">
                            <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.whatToExpect.worshipStyle}</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {locale === 'en' ? 'Our worship style blends traditional and contemporary elements. We value:' : '我们的敬拜风格融合了传统和现代元素。我们重视：'}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: locale === 'en' ? 'Biblical Content' : '圣经内容', desc: locale === 'en' ? 'Songs and messages grounded in Scripture' : '所有歌曲和信息都基于圣经' },
                                    { title: locale === 'en' ? 'Authentic Expression' : '真实表达', desc: locale === 'en' ? 'Genuine, heartfelt worship' : '我们鼓励真诚、发自内心的敬拜' },
                                    { title: locale === 'en' ? 'Musical Diversity' : '音乐多样性', desc: locale === 'en' ? 'From classic hymns to modern songs' : '从经典赞美诗到现代敬拜歌曲' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                        <span className="text-accent-500 mr-3 text-xl">✓</span>
                                        <div>
                                            <span className="font-bold text-primary-800 block">{item.title}</span>
                                            <span className="text-gray-600 text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-amber-50 p-10 rounded-3xl border border-amber-100 shadow-sm text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.whatToExpect.dressCode}</h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                {locale === 'en' ? 'There\'s no dress code at Bethany Presbyterian Church. Come as you are! You\'ll see people in a variety of styles:' : '伯大尼长老会没有着装要求。随意穿着！你会看到各种风格：'}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-primary-400">
                                    <h4 className="font-bold text-primary-800 mb-2">{locale === 'en' ? 'Business Casual' : '商务休闲'}</h4>
                                    <p className="text-sm text-gray-500">{locale === 'en' ? 'Dress shirts, slacks, dresses' : '衬衫、西裤、连衣裙'}</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-accent-400">
                                    <h4 className="font-bold text-primary-800 mb-2">{locale === 'en' ? 'Casual Attire' : '休闲装'}</h4>
                                    <p className="text-sm text-gray-500">{locale === 'en' ? 'Jeans, t-shirts, comfort' : '牛仔裤、T恤、舒适'}</p>
                                </div>
                            </div>
                            <p className="text-primary-700 mt-8 font-semibold text-lg italic">
                                "{locale === 'en' ? 'The most important thing is that you\'re here!' : '最重要的是你来了！'}"
                            </p>
                        </section>
                    </div>

                    {/* Children's Programs */}
                    <section className="bg-dot-pattern py-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whatToExpect.children}</h2>
                            <div className="w-24 h-1.5 bg-accent-400 mx-auto rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: locale === 'en' ? 'Sunday School (Ages 2-12)' : '主日学 (2-12岁)',
                                    time: locale === 'en' ? '11:30 AM' : '上午 11:30',
                                    desc: locale === 'en' ? 'Engaging Bible lessons, songs, and activities designed for children.' : '为儿童设计的有趣圣经课程、歌曲和活动。'
                                },
                                {
                                    title: locale === 'en' ? 'Youth Programs (Ages 13-18)' : '青年活动 (13-18岁)',
                                    time: locale === 'en' ? '11:30 AM' : '上午 11:30',
                                    desc: locale === 'en' ? 'Growth, friendship, and service programs for teenagers at Grace Auditorium.' : '在主恩楼为青少年提供的成长、友谊和服务活动。'
                                }
                            ].map((prog, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover-lift border-b-8 border-primary-600">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-primary-800">{prog.title}</h3>
                                        <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-bold">{prog.time}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-4">{prog.desc}</p>
                                    <div className="w-12 h-1 bg-primary-100 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* First-Time Visitors */}
                    <section className="bg-primary-900 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20 -mb-48 -mr-48" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-12 text-center">{t.whatToExpect.firstTime}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[
                                    {
                                        title: locale === 'en' ? 'When You Arrive' : '当您到达时',
                                        items: locale === 'en'
                                            ? ['Friendly greeters at the entrance', 'Pick up a welcome packet', 'Ask us anything - we\'re here for you!']
                                            : ['迎宾员会在大门欢迎您', '领取教会欢迎礼包', '随时提问 - 我们竭诚为您']
                                    },
                                    {
                                        title: locale === 'en' ? 'During Service' : '崇拜期间',
                                        items: locale === 'en'
                                            ? ['No spotlight on guests', 'Offering is for regular members', 'Participate at your own pace']
                                            : ['不会要求访客自我介绍', '奉献是为会友准备的', '以您舒适的方式参与']
                                    },
                                    {
                                        title: locale === 'en' ? 'After Service' : '崇拜后',
                                        items: locale === 'en'
                                            ? ['Join us for refreshments', 'Meet our pastor & members', 'Learn more about Bethany']
                                            : ['享用咖啡和精美茶点', '见牧师和其他成员', '更深了解伯大尼']
                                    }
                                ].map((step, i) => (
                                    <div key={i}>
                                        <h4 className="text-accent-400 font-bold text-xl mb-6 flex items-center">
                                            <span className="mr-3 w-8 h-8 rounded-full border border-accent-400 flex items-center justify-center text-sm">{i + 1}</span>
                                            {step.title}
                                        </h4>
                                        <ul className="space-y-4 text-primary-100">
                                            {step.items.map((item, j) => (
                                                <li key={j} className="flex items-start">
                                                    <span className="mr-2 text-accent-400">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Accessibility */}
                    <section className="text-center py-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whatToExpect.accessibility}</h2>
                        <div className="w-24 h-1.5 bg-accent-400 mx-auto rounded-full mb-12" />
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {[
                                locale === 'en' ? 'Wheelchair Accessible' : '轮椅通道',
                                locale === 'en' ? 'Elevator to all floors' : '各层电梯',
                                locale === 'en' ? 'Hearing Assistance' : '听力辅助',
                                locale === 'en' ? 'Large Print Bibles' : '大字圣经'
                            ].map((item, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-semibold shadow-sm border border-gray-200">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-2xl mx-auto italic">
                            {locale === 'en' ? 'Need specific help? Contact us in advance for a comfortable visit.' : '有特殊需求？请提前联系我们，以便我们为您安排。'}
                        </p>
                    </section>

                    {/* Call to Action */}
                    <section className="bg-primary-gradient text-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 rounded-full blur-3xl opacity-10 -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">{t.whatToExpect.readyToVisit}</h2>
                            <p className="text-xl mb-12 text-primary-100 max-w-2xl mx-auto leading-relaxed">
                                {t.whatToExpect.readyText}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link
                                    href={getLocalizedPath('/visit', locale)}
                                    className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
                                >
                                    {locale === 'en' ? 'Get Directions' : '获取路线'}
                                </Link>
                                <Link
                                    href={getLocalizedPath('/contact', locale)}
                                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all w-full sm:w-auto"
                                >
                                    {t.nav.contact}
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
