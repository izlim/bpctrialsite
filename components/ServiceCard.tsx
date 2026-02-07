'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { ServiceFrontmatter } from '@/lib/markdown';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';
import ImagePlaceholder from './ImagePlaceholder';

interface ServiceCardProps {
  service: {
    slug: string;
    frontmatter: ServiceFrontmatter;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const servicePath = getLocalizedPath(`/services/${service.slug}`, locale);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = service.frontmatter.videoUrl ? getYoutubeId(service.frontmatter.videoUrl) : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {youtubeId ? (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={service.frontmatter.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <ImagePlaceholder className="aspect-video" text="No Video Available" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {service.frontmatter.title}
            </h3>
            {service.frontmatter.series && (
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded mb-2">
                {service.frontmatter.series}
              </span>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          {service.frontmatter.speaker && <p><span className="font-medium">Speaker:</span> {service.frontmatter.speaker}</p>}
          <p><span className="font-medium">Date:</span> {formatDate(service.frontmatter.date)}</p>
        </div>
        <div className="mt-4 flex space-x-3">
          <Link href={servicePath} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Watch →
          </Link>
        </div>
      </div>
    </div>
  );
}
