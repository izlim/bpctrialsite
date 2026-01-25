'use client';

import { useLocale } from '@/components/LocaleProvider';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ResourceFrontmatter } from '@/lib/markdown';
import { getLocalizedPath } from '@/lib/i18n';

interface ResourcesPageClientProps {
    resources: Array<{ slug: string; frontmatter: ResourceFrontmatter }>;
}

export default function ResourcesPageClient({ resources }: ResourcesPageClientProps) {
    const { locale, t } = useLocale();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t.resources.title}</h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t.resources.description}
                </p>

                {/* Resource Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">📖</div>
                        <h2 className="text-xl font-semibold mb-2">{locale === 'en' ? 'Daily Devotions' : '每日灵修'}</h2>
                        <p className="text-gray-600 text-sm">
                            {locale === 'en' ? 'Daily Bible readings and reflections to help you grow in your walk with God.' : '每日圣经阅读和反思，帮助您在与上帝同行的道路上成长。'}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">📚</div>
                        <h2 className="text-xl font-semibold mb-2">{locale === 'en' ? 'Bible Studies' : '圣经学习'}</h2>
                        <p className="text-gray-600 text-sm">
                            {locale === 'en' ? 'Study guides and materials for individual or group Bible study.' : '个人或小组圣经学习的学习指南和材料。'}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">🔗</div>
                        <h2 className="text-xl font-semibold mb-2">{locale === 'en' ? 'Helpful Links' : '有用链接'}</h2>
                        <p className="text-gray-600 text-sm">
                            {locale === 'en' ? 'Curated resources and websites to support your spiritual growth.' : '精心挑选的资源和网站，支持您的属灵成长。'}
                        </p>
                    </div>
                </div>

                {/* Resource List */}
                {resources.length > 0 ? (
                    <section>
                        <h2 className="text-2xl font-semibold mb-6">{t.resources.latest}</h2>
                        <div className="space-y-4">
                            {resources.map((resource) => (
                                <Link
                                    key={resource.slug}
                                    href={`/resources/${resource.slug}`}
                                    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{resource.frontmatter.title}</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <span>{formatDate(resource.frontmatter.date)}</span>
                                        {resource.frontmatter.type && (
                                            <>
                                                <span className="mx-2">•</span>
                                                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                                                    {resource.frontmatter.type}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="bg-gray-50 p-12 rounded-lg text-center">
                        <p className="text-gray-600 mb-4">{t.resources.noResources}</p>
                        <p className="text-sm text-gray-500">
                            {t.resources.noResourcesDesc}
                        </p>
                    </div>
                )}

                {/* Additional Resources */}
                <section className="mt-12 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">{locale === 'en' ? 'Additional Resources' : '额外资源'}</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">{locale === 'en' ? 'Bible Reading Plans' : '圣经阅读计划'}</h3>
                            <p className="text-gray-700 text-sm mb-2">
                                {locale === 'en'
                                    ? 'Follow a structured plan to read through the Bible in a year, or choose from topical reading plans.'
                                    : '遵循结构化计划在一年内读完圣经，或选择专题阅读计划。'}
                            </p>
                            <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                                {locale === 'en' ? 'View Reading Plans →' : '查看阅读计划 →'}
                            </a>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">{locale === 'en' ? 'Recommended Books' : '推荐书籍'}</h3>
                            <p className="text-gray-700 text-sm mb-2">
                                {locale === 'en'
                                    ? 'A curated list of Christian books recommended by our pastors for spiritual growth and study.'
                                    : '我们牧师推荐的精选基督教书籍列表，用于属灵成长和学习。'}
                            </p>
                            <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                                {locale === 'en' ? 'View Book List →' : '查看书单 →'}
                            </a>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">{locale === 'en' ? 'Online Tools' : '在线工具'}</h3>
                            <p className="text-gray-700 text-sm mb-2">
                                {locale === 'en'
                                    ? 'Helpful online Bible study tools, commentaries, and resources for deeper study of Scripture.'
                                    : '有用的在线圣经学习工具、注释和资源，用于深入研究圣经。'}
                            </p>
                            <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                                {locale === 'en' ? 'View Tools →' : '查看工具 →'}
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
