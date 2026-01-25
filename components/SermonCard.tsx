'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { SermonFrontmatter } from '@/lib/markdown';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';

interface SermonCardProps {
  sermon: {
    slug: string;
    frontmatter: SermonFrontmatter;
  };
}

export default function SermonCard({ sermon }: SermonCardProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const sermonPath = getLocalizedPath(`/sermons/${sermon.slug}`, locale);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Link href={sermonPath}>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-2">
                {sermon.frontmatter.title}
              </h3>
            </Link>
            {sermon.frontmatter.series && (
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded mb-2">
                {sermon.frontmatter.series}
              </span>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Speaker:</span> {sermon.frontmatter.speaker}</p>
          <p><span className="font-medium">Date:</span> {formatDate(sermon.frontmatter.date)}</p>
        </div>
        <div className="mt-4 flex space-x-3">
          {sermon.frontmatter.videoUrl && (
            <a
              href={sermon.frontmatter.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Watch Video →
            </a>
          )}
          {sermon.frontmatter.audioUrl && (
            <a
              href={sermon.frontmatter.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Listen →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
