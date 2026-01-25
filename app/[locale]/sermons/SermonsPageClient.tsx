'use client';

import { useLocale } from '@/components/LocaleProvider';
import { getLocalizedPath } from '@/lib/i18n';
import SermonCard from '@/components/SermonCard';

interface SermonsPageClientProps {
  sermons: Array<{ slug: string; frontmatter: any }>;
}

export default function SermonsPageClient({ sermons }: SermonsPageClientProps) {
  const { locale, t } = useLocale();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t.sermons.title}</h1>
        <p className="text-lg text-gray-600 mb-12">
          {t.sermons.description}
        </p>

        {sermons.length === 0 ? (
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">{t.sermons.noSermons}</p>
            <p className="text-sm text-gray-500">
              {t.sermons.noSermonsDesc}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.slug} sermon={sermon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
