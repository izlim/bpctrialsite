import { getEvents, getEventBySlug } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug);
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }
  return {
    title: `${event.frontmatter.title} | Events | Bethany Presbyterian Church`,
    description: `Join us for ${event.frontmatter.title} on ${formatDate(event.frontmatter.date)}`,
  };
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← Back to All Events
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6">{event.frontmatter.title}</h1>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Date & Time</h3>
                <p className="text-gray-900">
                  {formatDate(event.frontmatter.date)}
                  {event.frontmatter.time && ` • ${event.frontmatter.time}`}
                </p>
              </div>
              {event.frontmatter.location && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-900">{event.frontmatter.location}</p>
                </div>
              )}
              {event.frontmatter.recurring && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Type</h3>
                  <span className="inline-block bg-accent-100 text-accent-700 text-sm font-medium px-3 py-1 rounded">
                    Recurring Event
                  </span>
                </div>
              )}
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </article>
      </div>
    </div>
  );
}
