'use client';

import { useLocale } from '@/components/LocaleProvider';
import ImagePlaceholder from '@/components/ImagePlaceholder';


export default function MinistriesPageClient() {
    const { locale, t } = useLocale();

    const trainingMinistries = [
        {
            title: locale === 'en' ? 'Children\'s Ministry' : '儿童事工',
            description: locale === 'en' ? 'Partnering with parents to raise a generation that loves, honours, and fears the Lord throughout their lives, so that they will not depart from His ways even when they grow old' : '藉着与父母配搭，教养敬虔热情爱主的下一代成为末日耶和华的精兵，使孩子们一生敬畏神，就是到老也不偏离正道',
            ageRange: locale === 'en' ? 'Ages 0-12' : '0-12岁',
        },
        {
            title: locale === 'en' ? 'Youth Ministry' : '青少年事工',
            description: locale === 'en' ? 'Through weekly worship sessions, messages from the pulpit and cell group meetings, our youth can experience a life-changing relation with Jesus Christ' : '透过每周的敬拜、讲道和生命小组，青少年能体验到与耶稣基督之间生命改变的关系！',
            ageRange: locale === 'en' ? 'Ages 13-25' : '13-25岁',
        },
        {
            title: locale === 'en' ? 'Small Groups' : '祝福小组事工',
            description: locale === 'en' ? 'To help members grow in spiritual maturity through encouraging them to care and meet the spiritual, emotional, and physical needs of fellow brothers and sisters in Christ.' : '透过劝勉门徒迈向成熟和服侍来满足属灵、情感和身体的需要，来提供整个教会家庭的关系。',
            ageRange: locale === 'en' ? 'Catered to various age groups' : '各个年龄层',
        },
        {
            title: locale === 'en' ? 'Training and Equiping Ministry' : '培训装备事工',
            description: locale === 'en' ? 'To build up the Body of Christ towards maturity by means of instruction, teaching the Word of God, personal encouragement, and training people to walk as His disciples.' : '藉着指导、教导上帝的道、个人劝勉及培育主的门徒来建立基督的身体迈向成熟。',
            ageRange: locale === 'en' ? 'Catered to various age groups' : '各个年龄层',
        },
    ];

    const outreachMinistries = [
        {
            title: locale === 'en' ? 'Social Care' : '社会关怀',
            description: locale === 'en' ? 'To lead the congregation in living out the life of Christ and magnifying the love and grace of God through giving to the needy.' : '带领会众接着施予有需要的群体来活出基督的生命与彰显上帝的慈爱与怜悯。',
        },
        {
            title: locale === 'en' ? 'Mission & Evangelism' : '宣教布道',
            description: locale === 'en' ? 'To spread the gospel to all people and nations, and equip others to carry out the Great Commission.' : '将领受的福音信息传给万族万民，并且装备信徒履行主的大使命。',
        },
        {
            title: locale === 'en' ? 'Early Childhood Education' : '学前教育',
            description: locale === 'en' ? 'To provide the community with good quality Childcare Services and Early Childhood Education, so as to develp young minds to their fullest potential.' : '为社区提供优质的幼儿托管服务和幼儿教育，以致发展与发挥他们的潜能。',
        },
    ];

    const servingOpportunities = [
        {
            title: locale === 'en' ? 'Worship' : '敬拜',
            description: locale === 'en' ? 'Join our worship team to lead the congregation in praise and worship.' : '加入我们的敬拜团队，带领会众进行赞美和敬拜。',
        },
        {
            title: locale === 'en' ? 'Befrienders' : '关怀大使',
            description: locale === 'en' ? 'Welcome and connect with visitors and new members, helping them feel at home.' : '欢迎并与访客和新成员建立联系，帮助他们感到宾至如归。',
        },
        {
            title: locale === 'en' ? 'Sunday School Teachers' : '主日学老师',
            description: locale === 'en' ? 'Teach and disciple children in their walk with God.' : '教导和管教儿童与神同行。',
        },
        {
            title: locale === 'en' ? 'Prayer Warriors' : '代祷勇士',
            description: locale === 'en' ? 'Join our prayer team to pray for the church, community, and world.' : '加入我们的祷告团队，为教会、社区和世界祷告。',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t.ministries.title}</h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t.ministries.description}
                </p>

                <h2 className="text-3xl font-bold mb-8 text-primary-800">{t.ministries.trainingTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {trainingMinistries.map((ministry, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <ImagePlaceholder className="h-48 w-full" text={ministry.title} />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-3">{ministry.title}</h2>
                                <p className="text-gray-700 mb-4">{ministry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold mb-8 text-primary-800">{t.ministries.outreachTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {outreachMinistries.map((ministry, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <ImagePlaceholder className="h-48 w-full" text={ministry.title} />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-3">{ministry.title}</h2>
                                <p className="text-gray-700 mb-4">{ministry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold mb-8 text-primary-800">{t.ministries.servingTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servingOpportunities.map((opportunity, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <ImagePlaceholder className="h-48 w-full" text={opportunity.title} />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-3">{opportunity.title}</h2>
                                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">{t.ministries.interested}</h2>
                    <p className="text-gray-700 mb-6">
                        {t.ministries.interestedText}
                    </p>
                    <a
                        href="https://forms.office.com/pages/responsepage.aspx?id=i2Cs4k-AkEez-LeS7IEA4YCoNIiTSVlEuS7MWyqTJmZURFBWMDdBTDQxMzQwTTZJVTJDS0VPMkJHRS4u&route=shorturl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                    >
                        {t.ministries.signUp}
                    </a>
                </div>
            </div>
        </div>
    );
}
