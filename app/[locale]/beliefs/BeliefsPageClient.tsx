'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/i18n';

export default function BeliefsPageClient() {
    const { locale, t } = useLocale();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{t.beliefs.title}</h1>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
                    <p className="text-lg text-gray-700">
                        {t.beliefs.intro}
                    </p>
                </div>

                {/* Core Beliefs */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.beliefs.coreBeliefs}</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.bible}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'It is our ultimate authority for faith and life, and it reveals God\'s plan for salvation and His will for how we should live.'
                                    : '它是我们信仰和生活的最终权威，揭示了上帝的救赎计划以及祂对我们应当如何生活的旨意。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.god}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit. God is sovereign, holy, loving, and just. He created all things and sustains all things by His power.'
                                    : '我们相信独一的真神，永恒地存在于三个位格中：圣父、圣子和圣灵。上帝是主权的、圣洁的、慈爱的和公义的。祂创造了万物，并用祂的大能托住万物。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.jesus}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe Jesus Christ is fully God and fully man. He was born of a virgin, lived a sinless life, died on the cross to pay for our sins, and rose again on the third day. He is the only way to salvation and will return one day to judge the living and the dead.'
                                    : '我们相信耶稣基督完全是神，也完全是人。祂由童贞女所生，过着无罪的生活，为赎我们的罪死在十字架上，并于第三天复活。祂是救恩的唯一道路，有一天将再来审判活人和死人。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.holySpirit}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe the Holy Spirit convicts people of sin, regenerates believers, indwells all Christians, and empowers us to live godly lives. The Spirit also gives spiritual gifts for the building up of the church.'
                                    : '我们相信圣灵使人知罪，使信徒重生，内住在所有基督徒里面，并赋予我们要过敬虔生活的能力。圣灵还赐下属灵恩赐以建立教会。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.salvation}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe salvation is by grace alone through faith alone in Christ alone. It is not earned by good works, but is a free gift from God. Those who repent of their sins and trust in Jesus Christ are saved and receive eternal life.'
                                    : '我们相信救恩是本乎恩，也因着信，单单在基督里。这不是靠善行得来的，而是上帝白白的礼物。那些悔改罪并信靠耶稣基督的人就得救了，并获得永生。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.church}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe the church is the body of Christ, made up of all true believers. The local church exists to worship God, build up believers, and reach out to the world with the Gospel. We practice baptism and the Lord\'s Supper as sacraments instituted by Christ.'
                                    : '我们相信教会是基督的身体，由所有真正的信徒组成。地方教会的存在是为了敬拜上帝，建立信徒，并向世界传播福音。我们实行洗礼和主餐，作为基督设立的圣礼。'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">{t.beliefs.return}</h3>
                            <p className="text-gray-700">
                                {locale === 'en'
                                    ? 'We believe Jesus Christ will return visibly and bodily to earth to establish His kingdom. All people will be raised from the dead - believers to eternal life with God, and unbelievers to eternal separation from God.'
                                    : '我们相信耶稣基督将肉身可见地回到地上建立祂的国度。所有人都要从死里复活——信徒与上帝同享永生，不信者与上帝永远隔绝。'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Presbyterian Distinctives */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.beliefs.distinctives}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'As a Presbyterian church, we hold to several distinctive beliefs:'
                                : '作为长老会，我们坚持几个独特的信仰：'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>{locale === 'en' ? 'The Sovereignty of God:' : '上帝的主权：'}</strong> {locale === 'en' ? 'God is in complete control of all things and works all things according to His will' : '上帝完全掌控万事，并按祂的旨意行万事'}</li>
                            <li><strong>{locale === 'en' ? 'Election:' : '拣选：'}</strong> {locale === 'en' ? 'God chose us in Christ before the foundation of the world, not because of anything we have done' : '上帝在创世之前就在基督里拣选了我们，不是因为我们做了什么'}</li>
                            <li><strong>{locale === 'en' ? 'Covenant Theology:' : '圣约神学：'}</strong> {locale === 'en' ? 'God relates to His people through covenants, and the church is the continuation of God\'s covenant people' : '上帝通过圣约与子民建立关系，教会是上帝圣约子民的延续'}</li>
                            <li><strong>{locale === 'en' ? 'Elder-Led Governance:' : '长老治理：'}</strong> {locale === 'en' ? 'The church is led by elders (presbyters) who are elected by the congregation' : '教会由会众选举产生的长老（监督）领导'}</li>
                            <li><strong>{locale === 'en' ? 'Connectionalism:' : '联结主义：'}</strong> {locale === 'en' ? 'We are connected to other Presbyterian churches for mutual support and accountability' : '我们与其他长老会教会联系，以获得相互支持和问责'}</li>
                        </ul>
                    </div>
                </section>

                {/* Confessional Standards */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{t.beliefs.confessions}</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'Our church subscribes to the historic confessions of the Presbyterian tradition:'
                                : '我们的教会认同长老会传统的历史信条：'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>{locale === 'en' ? 'Westminster Confession of Faith' : '威斯敏斯特信条'}</strong> - {locale === 'en' ? 'Our primary doctrinal standard' : '我们的主要教义标准'}</li>
                            <li><strong>{locale === 'en' ? 'Westminster Larger Catechism' : '威斯敏斯特大要理问答'}</strong> - {locale === 'en' ? 'Detailed explanation of Christian doctrine' : '基督教教义的详细解释'}</li>
                            <li><strong>{locale === 'en' ? 'Westminster Shorter Catechism' : '威斯敏斯特小要理问答'}</strong> - {locale === 'en' ? 'Summary of Christian beliefs in question and answer format' : '以问答形式总结基督教信仰'}</li>
                        </ul>
                        <p className="text-gray-600 mt-4 text-sm">
                            {locale === 'en'
                                ? 'These documents, written in the 17th century, remain faithful summaries of biblical teaching and continue to guide our understanding of Scripture.'
                                : '这些写于17世纪的文件仍然是圣经教导的忠实总结，并继续指导我们要理解圣经。'}
                        </p>
                    </div>
                </section>

                {/* Statement of Faith */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">{locale === 'en' ? 'Statement of Faith' : '信仰宣言'}</h2>
                    <div className="bg-primary-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'We believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.'
                                : '我们信独一的上帝，全能的父，创造天地和有形无形万物的主。'}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all worlds, God of God, Light of Light, very God of very God, begotten, not made, being of one substance with the Father; by whom all things were made.'
                                : '我们信独一的主耶稣基督，上帝的独生子，在万世以前为父所生，出于神而为神，出于光而为光，出于真神而为真神，受生而非被造，与父一体，万物都是藉着祂造的。'}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {locale === 'en'
                                ? 'And in the Holy Ghost, the Lord and Giver of Life, who proceedeth from the Father and the Son; who with the Father and the Son together is worshipped and glorified; who spake by the prophets.'
                                : '我们信圣灵，是主，是赐生命者，从父和子出来，与父和子同受敬拜，同受尊荣，亦曾藉着先知说话。'}
                        </p>
                        <p className="text-gray-700">
                            {locale === 'en'
                                ? 'And we believe one holy catholic and apostolic Church. We acknowledge one baptism for the remission of sins; and we look for the resurrection of the dead, and the life of the world to come. Amen.'
                                : '我们信唯一、神圣、大公、使徒的教会。我们承认为赦罪设立的独一洗礼。我们盼望死人复活，并来世的生命。阿们。'}
                        </p>
                    </div>
                </section>

                {/* Questions */}
                <section className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4">{t.beliefs.questions}</h2>
                    <p className="text-gray-700 mb-6">
                        {locale === 'en'
                            ? 'If you have questions about what we believe or would like to discuss our doctrinal positions, we\'d love to talk with you. Our pastors are available to answer questions and provide resources for further study.'
                            : '如果您对我们的信仰有疑问，或者想讨论我们的教义立场，我们很乐意与您交谈。我们的牧师可以回答问题并提供进一步学习的资源。'}
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                    >
                        {t.nav.contact}
                    </a>
                </section>
            </div>
        </div>
    );
}
