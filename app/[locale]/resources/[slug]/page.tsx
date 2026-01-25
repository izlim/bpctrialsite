import { getResources, getResourceBySlug } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';

export async function generateStaticParams() {
  const resources = await getResources('en');
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const resource = await getResourceBySlug(params.slug, params.locale);
  if (!resource) {
    return {
      title: 'Resource Not Found',
    };
  }
  return {
    title: `${resource.frontmatter.title} | Resources | Bethany Presbyterian Church`,
    description: resource.frontmatter.title,
  };
}

export default async function ResourcePage({ params }: { params: { slug: string; locale: string } }) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const resource = await getResourceBySlug(params.slug, params.locale);

  if (!resource) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${params.locale}/resources`} className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← {params.locale === 'en' ? 'Back to All Resources' : '返回所有资源'}
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            {resource.frontmatter.type && (
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded mb-3">
                {resource.frontmatter.type}
              </span>
            )}
            <h1 className="text-4xl font-bold mb-4">{resource.frontmatter.title}</h1>
            <p className="text-gray-600">{formatDate(resource.frontmatter.date)}</p>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />
        </article>
      </div>
    </div>
  );
}
