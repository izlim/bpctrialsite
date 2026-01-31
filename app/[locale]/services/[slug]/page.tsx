import { getServices, getServiceBySlug } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { locales, type Locale, getLocalizedPath } from '@/lib/i18n';

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    const services = await getServices(locale);
    services.forEach((service) => {
      params.push({
        locale,
        slug: service.slug,
      });
    });
  }

  return params;
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const service = await getServiceBySlug(params.slug, params.locale);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: `${service.frontmatter.title} | Services | Bethany Presbyterian Church`,
    description: `Service by ${service.frontmatter.speaker} on ${formatDate(service.frontmatter.date)}`,
  };
}

export default async function ServicePage({ params }: { params: { locale: string; slug: string } }) {
  const service = await getServiceBySlug(params.slug, params.locale);

  if (!service) {
    notFound();
  }

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = service.frontmatter.videoUrl ? getYoutubeId(service.frontmatter.videoUrl) : null;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href={getLocalizedPath('/services', params.locale as Locale)} className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← Back to All Services
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            {service.frontmatter.series && (
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded mb-3">
                {service.frontmatter.series}
              </span>
            )}
            <h1 className="text-4xl font-bold mb-4">{service.frontmatter.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {service.frontmatter.speaker && <p><strong>Speaker:</strong> {service.frontmatter.speaker}</p>}
              <p><strong>Date:</strong> {formatDate(service.frontmatter.date)}</p>
            </div>
          </div>

          {youtubeId && (
            <div className="mb-8 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={service.frontmatter.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mb-8">
            {service.frontmatter.notesUrl && (
              <a
                href={service.frontmatter.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors inline-flex items-center"
              >
                Download Notes →
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
