'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';

export default function GivePageClient() {
    const { locale, t } = useLocale();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{t.give.title}</h1>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12">
                    <p className="text-lg text-gray-700">
                        {t.give.intro}
                    </p>
                </div>

                {/* Why We Give */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.give.whyGive}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en' ? 'Giving is an act of worship and a response to God\'s grace in our lives. The Bible teaches us that everything we have comes from God, and we are called to be good stewards of His resources.' : '奉献是一种敬拜行为，也是对上帝在我们生命中恩典的回应。圣经教导我们，我们所拥有的一切都来自上帝，我们被呼召成为祂资源的好管家。'}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {locale === 'en' ? 'When we give, we:' : '当我们奉献时，我们：'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                            <li>{locale === 'en' ? 'Express our trust in God\'s provision' : '表达我们对上帝供应的信任'}</li>
                            <li>{locale === 'en' ? 'Participate in God\'s work in the world' : '参与上帝在世界上的工作'}</li>
                            <li>{locale === 'en' ? 'Support the ministry of the local church' : '支持地方教会的事工'}</li>
                            <li>{locale === 'en' ? 'Help those in need in our community and beyond' : '帮助我们社区及其他有需要的人'}</li>
                            <li>{locale === 'en' ? 'Invest in the next generation of believers' : '投资于下一代信徒'}</li>
                        </ul>
                        <p className="text-gray-600 text-sm italic">
                            {locale === 'en' ? '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7' : '“各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。” - 哥林多后书 9:7'}
                        </p>
                    </div>
                </section>

                {/* Ways to Give */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.give.waysToGive}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <span className="text-2xl mr-3">💳</span>
                                {t.give.online}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {locale === 'en' ? 'Give securely online using your credit card or bank account. Set up one-time or recurring donations.' : '使用您的信用卡或银行账户安全地在线奉献。设置一次性或定期捐款。'}
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                            >
                                {locale === 'en' ? 'Give Online →' : '在线奉献 →'}
                            </a>
                            <p className="text-xs text-gray-500 mt-2">
                                {locale === 'en' ? '(Online giving platform will be integrated here)' : '(在线奉献平台将在此处集成)'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <span className="text-2xl mr-3">🏦</span>
                                {t.give.bankTransfer}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {locale === 'en' ? 'Transfer directly to our church account:' : '直接转账到我们的教会账户：'}
                            </p>
                            <div className="bg-gray-50 p-4 rounded text-sm">
                                <p className="font-mono">{locale === 'en' ? 'Bank: [Bank Name]' : '银行：[银行名称]'}</p>
                                <p className="font-mono">{locale === 'en' ? 'Account: [Account Number]' : '账户：[账号]'}</p>
                                <p className="font-mono">{locale === 'en' ? 'Name: Bethany Presbyterian Church' : '名称：伯大尼长老会'}</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <span className="text-2xl mr-3">✉️</span>
                                {t.give.checkCash}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {locale === 'en'
                                    ? 'You can give by check or cash during our Sunday services. Place your offering in the collection plate or drop it off at the church office during office hours.'
                                    : '您可以在主日崇拜期间通过支票或现金奉献。将您的奉献放入奉献盘，或在办公时间送到教会办公室。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <span className="text-2xl mr-3">📱</span>
                                {t.give.mobileApp}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {locale === 'en'
                                    ? 'Give on the go using our mobile app. Available for iOS and Android.'
                                    : '使用我们的移动应用程序随时随地奉献。适用于iOS和Android。'}
                            </p>
                            <p className="text-xs text-gray-500">
                                {locale === 'en' ? '(Mobile app will be available in the future)' : '(移动应用程序将在未来推出)'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* What Your Giving Supports */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.give.whatSupports}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.give.local}</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>{locale === 'en' ? 'Sunday worship services' : '主日崇拜'}</li>
                                <li>{locale === 'en' ? 'Children\'s and youth programs' : '儿童和青年活动'}</li>
                                <li>{locale === 'en' ? 'Small groups and Bible studies' : '小组和圣经学习'}</li>
                                <li>{locale === 'en' ? 'Pastoral care and counseling' : '牧养关怀和辅导'}</li>
                                <li>{locale === 'en' ? 'Facility maintenance and operations' : '设施维护和运营'}</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.give.outreach}</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>{locale === 'en' ? 'Community service projects' : '社区服务项目'}</li>
                                <li>{locale === 'en' ? 'Local evangelism efforts' : '本地布道工作'}</li>
                                <li>{locale === 'en' ? 'Global missions support' : '全球宣教支持'}</li>
                                <li>{locale === 'en' ? 'Disaster relief and aid' : '救灾和援助'}</li>
                                <li>{locale === 'en' ? 'Church planting initiatives' : '植堂计划'}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Financial Transparency */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.give.transparency}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'We are committed to financial integrity and transparency. Our finances are overseen by our board of elders and audited annually. If you have questions about our financial practices or would like to see our annual report, please contact the church office.'
                                : '我们致力于财务诚信和透明。我们的财务由长老会监督，并每年进行审计。如果您对我们的财务做法有问题，或者想查看我们的年度报告，请联系教会办公室。'}
                        </p>
                        <a
                            href="/contact"
                            className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                            {locale === 'en' ? 'Contact Us for More Information →' : '联系我们以获取更多信息 →'}
                        </a>
                    </div>
                </section>

                {/* Tax Deductible */}
                <section className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">{t.give.taxDeductible}</h2>
                    <p className="text-gray-700 mb-4">
                        {locale === 'en'
                            ? 'All contributions to Bethany Presbyterian Church are tax-deductible in Singapore. You will receive a receipt for your giving that can be used for tax purposes.'
                            : '所有给伯大尼长老会的捐款在新加坡都是可以抵税的。您将收到一份捐款收据，可用于税务目的。'}
                    </p>
                    <p className="text-gray-600 text-sm">
                        {locale === 'en' ? 'For questions about giving receipts or tax documentation, please contact our finance office at' : '有关捐款收据或税务文件的问题，请联系我们的财务办公室：'} <a href="mailto:finance@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700">finance@bethanypc.org.sg</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
