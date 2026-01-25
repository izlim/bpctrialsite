import { getEvents } from '@/lib/markdown';
import EventCard from '@/components/EventCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Bethany Presbyterian Church',
  description: 'View upcoming events, activities, and gatherings at Bethany Presbyterian Church.',
};

export default async function EventsPage() {
  const events = await getEvents();
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.frontmatter.date);
    return eventDate >= new Date();
  });
  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.frontmatter.date);
    return eventDate < new Date();
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg text-gray-600 mb-12">
          Join us for worship, fellowship, and community events. Check out our upcoming activities!
        </p>

        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </section>
        )}

        {events.length === 0 && (
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">No events scheduled at this time.</p>
            <p className="text-sm text-gray-500">
              Events will appear here once they are added to the content folder.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
