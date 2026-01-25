import { getSermons, getSermonBySlug } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const sermons = await getSermons();
  return sermons.map((sermon) => ({
    slug: sermon.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const sermon = await getSermonBySlug(params.slug);
  if (!sermon) {
    return {
      title: 'Sermon Not Found',
    };
  }
  return {
    title: `${sermon.frontmatter.title} | Sermons | Bethany Presbyterian Church`,
    description: `Sermon by ${sermon.frontmatter.speaker} on ${formatDate(sermon.frontmatter.date)}`,
  };
}

export default async function SermonPage({ params }: { params: { slug: string } }) {
  const sermon = await getSermonBySlug(params.slug);

  if (!sermon) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/sermons" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← Back to All Sermons
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            {sermon.frontmatter.series && (
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded mb-3">
                {sermon.frontmatter.series}
              </span>
            )}
            <h1 className="text-4xl font-bold mb-4">{sermon.frontmatter.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <p><strong>Speaker:</strong> {sermon.frontmatter.speaker}</p>
              <p><strong>Date:</strong> {formatDate(sermon.frontmatter.date)}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {sermon.frontmatter.videoUrl && (
              <a
                href={sermon.frontmatter.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Watch Video →
              </a>
            )}
            {sermon.frontmatter.audioUrl && (
              <a
                href={sermon.frontmatter.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Listen to Audio →
              </a>
            )}
            {sermon.frontmatter.notesUrl && (
              <a
                href={sermon.frontmatter.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors inline-flex items-center"
              >
                Download Notes →
              </a>
            )}
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: sermon.content }}
          />
        </article>
      </div>
    </div>
  );
}
