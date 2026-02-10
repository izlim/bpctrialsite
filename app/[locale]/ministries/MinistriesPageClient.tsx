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
            image: '/images/children.jpg', // Add image path here, e.g., '/images/childrens-ministry.jpg'
        },
        {
            title: locale === 'en' ? 'Youth Ministry' : '青少年事工',
            description: locale === 'en' ? 'Through weekly worship sessions, messages from the pulpit and cell group meetings, our youth can experience a life-changing relation with Jesus Christ' : '透过每周的敬拜、讲道和生命小组，青少年能体验到与耶稣基督之间生命改变的关系！',
            ageRange: locale === 'en' ? 'Ages 13-25' : '13-25岁',
            image: '/images/youth.jpg', // Add image path here, e.g., '/images/youth-ministry.jpg'
        },
        {
            title: locale === 'en' ? 'Small Groups' : '祝福小组事工',
            description: locale === 'en' ? 'To help members grow in spiritual maturity through encouraging them to care and meet the spiritual, emotional, and physical needs of fellow brothers and sisters in Christ.' : '透过劝勉门徒迈向成熟和服侍来满足属灵、情感和身体的需要，来提供整个教会家庭的关系。',
            ageRange: locale === 'en' ? 'Catered to various age groups' : '各个年龄层',
            image: '/images/cell.jpg', // Add image path here, e.g., '/images/small-groups.jpg'
        },
        {
            title: locale === 'en' ? 'Training and Equiping Ministry' : '培训装备事工',
            description: locale === 'en' ? 'To build up the Body of Christ towards maturity by means of instruction, teaching the Word of God, personal encouragement, and training people to walk as His disciples.' : '藉着指导、教导上帝的道、个人劝勉及培育主的门徒来建立基督的身体迈向成熟。',
            ageRange: locale === 'en' ? 'Catered to various age groups' : '各个年龄层',
            image: '/images/training2.jpg', // Add image path here, e.g., '/images/training-ministry.jpg'
        },
    ];

    const outreachMinistries = [
        {
            title: locale === 'en' ? 'Social Care' : '社会关怀',
            description: locale === 'en' ? 'To lead the congregation in living out the life of Christ and magnifying the love and grace of God through giving to the needy.' : '带领会众接着施予有需要的群体来活出基督的生命与彰显上帝的慈爱与怜悯。',
            image: '/images/social.jpg', // Add image path here, e.g., '/images/social-care.jpg'
        },
        {
            title: locale === 'en' ? 'Mission & Evangelism' : '宣教布道',
            description: locale === 'en' ? 'To spread the gospel to all people and nations, and equip others to carry out the Great Commission.' : '将领受的福音信息传给万族万民，并且装备信徒履行主的大使命。',
            image: '/images/missions.jpg', // Add image path here, e.g., '/images/mission-evangelism.jpg'
        },
        {
            title: locale === 'en' ? 'Early Childhood Education' : '学前教育',
            description: locale === 'en' ? 'To provide the community with good quality Childcare Services and Early Childhood Education, so as to develp young minds to their fullest potential.' : '为社区提供优质的幼儿托管服务和幼儿教育，以致发展与发挥他们的潜能。',
            image: '/images/lotbeth.avif', // Add image path here, e.g., '/images/early-childhood.jpg'
        },
    ];

    const servingOpportunities = [
        {
            title: locale === 'en' ? 'Worship' : '敬拜',
            description: locale === 'en' ? 'Join our worship team to lead the congregation in praise and worship.' : '加入我们的敬拜团队，带领会众进行赞美和敬拜。',
            image: '/images/worship.jpg', // Add image path here, e.g., '/images/worship.jpg'
        },
        {
            title: locale === 'en' ? 'Befrienders' : '关怀大使',
            description: locale === 'en' ? 'Welcome and connect with visitors and new members, helping them feel at home.' : '欢迎并与访客和新成员建立联系，帮助他们感到宾至如归。',
            image: '/images/welcome.jpg', // Add image path here, e.g., '/images/befrienders.jpg'
        },
        {
            title: locale === 'en' ? 'Sunday School Teachers' : '主日学老师',
            description: locale === 'en' ? 'Teach and disciple children in their walk with God.' : '教导和管教儿童与神同行。',
            image: '/images/sundayschool.jpg', // Add image path here, e.g., '/images/sunday-school.jpg'
        },
        {
            title: locale === 'en' ? 'Prayer Warriors' : '代祷勇士',
            description: locale === 'en' ? 'Join our prayer team to pray for the church, community, and world.' : '加入我们的祷告团队，为教会、社区和世界祷告。',
            image: '/images/prayer2.jpg', // Add image path here, e.g., '/images/prayer.jpg'
        },
    ];

    return (
        <div className="bg-transparent">
            {/* Header Section */}
            <section className="bg-primary-gradient text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.ministries.title}</h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                        {t.ministries.description}
                    </p>
                    <div className="w-24 h-1.5 bg-accent-400 mx-auto rounded-full mt-8" />
                </div>
            </section>

            {/* Training Ministries */}
            <section className="py-24 bg-soft-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.ministries.trainingTitle}</h2>
                        <div className="w-20 h-1.5 bg-accent-400 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {trainingMinistries.map((ministry, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift border border-gray-100 card-accent-primary">
                                <ImagePlaceholder className="h-64 w-full group-hover:scale-105 transition-transform duration-500" text={ministry.title} src={ministry.image} />
                                <div className="p-10">
                                    <h2 className="text-2xl font-bold mb-4 text-primary-900">{ministry.title}</h2>
                                    <p className="text-gray-800 leading-relaxed text-lg">{ministry.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outreach Ministries */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.ministries.outreachTitle}</h2>
                        <div className="w-20 h-1.5 bg-accent-400 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {outreachMinistries.map((ministry, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift border border-gray-100 card-accent-accent">
                                <ImagePlaceholder className="h-64 w-full" text={ministry.title} src={ministry.image} />
                                <div className="p-10">
                                    <h2 className="text-2xl font-bold mb-4 text-primary-900">{ministry.title}</h2>
                                    <p className="text-gray-800 leading-relaxed text-lg">{ministry.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Serving Opportunities */}
            <section className="py-24 bg-primary-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-20 -ml-32 -mt-32" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-primary-900">{t.ministries.servingTitle}</h2>
                        <div className="w-20 h-1.5 bg-accent-400 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {servingOpportunities.map((opportunity, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100 card-accent-primary">
                                <ImagePlaceholder className="h-56 w-full" text={opportunity.title} src={opportunity.image} />
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold mb-4 text-primary-800">{opportunity.title}</h2>
                                    <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interest Section */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-primary-gradient p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                        <div className="relative z-10 text-white">
                            <h2 className="text-4xl font-bold mb-6">{t.ministries.interested}</h2>
                            <p className="text-xl mb-10 text-primary-100 leading-relaxed">
                                {t.ministries.interestedText}
                            </p>
                            <a
                                href="https://forms.office.com/pages/responsepage.aspx?id=i2Cs4k-AkEez-LeS7IEA4YCoNIiTSVlEuS7MWyqTJmZURFBWMDdBTDQxMzQwTTZJVTJDS0VPMkJHRS4u&route=shorturl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {t.ministries.signUp}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
