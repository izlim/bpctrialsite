import { getSermons } from '@/lib/markdown';
import SermonCard from '@/components/SermonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermons | Bethany Presbyterian Church',
  description: 'Watch or listen to sermons from Bethany Presbyterian Church. Browse our sermon archive by date, series, or speaker.',
};

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Sermons</h1>
        <p className="text-lg text-gray-600 mb-12">
          Listen to or watch our weekly sermons. All messages are grounded in Scripture 
          and designed to help you grow in your relationship with God.
        </p>

        {sermons.length === 0 ? (
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">No sermons available yet.</p>
            <p className="text-sm text-gray-500">
              Sermons will appear here once they are added to the content folder.
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
