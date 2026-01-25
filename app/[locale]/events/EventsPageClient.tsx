'use client';

import { useLocale } from '@/components/LocaleProvider';
import EventCard from '@/components/EventCard';
import { EventFrontmatter } from '@/lib/markdown';

interface EventsPageClientProps {
    events: Array<{ slug: string; frontmatter: EventFrontmatter }>;
}

export default function EventsPageClient({ events }: EventsPageClientProps) {
    const { t } = useLocale();

    const upcomingEvents = events.filter(event => {
        const eventDate = new Date(event.frontmatter.date);
        // Use yesterday to include today's events or handle timezone differences broadly
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return eventDate >= yesterday;
    });

    const pastEvents = events.filter(event => {
        const eventDate = new Date(event.frontmatter.date);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return eventDate < yesterday;
    });

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t.events.title}</h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t.events.description}
                </p>

                {upcomingEvents.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8">{t.events.upcoming}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.slug} event={event} />
                            ))}
                        </div>
                    </section>
                )}

                {pastEvents.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-semibold mb-8">{t.events.past}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastEvents.map((event) => (
                                <EventCard key={event.slug} event={event} />
                            ))}
                        </div>
                    </section>
                )}

                {events.length === 0 && (
                    <div className="bg-gray-50 p-12 rounded-lg text-center">
                        <p className="text-gray-600 mb-4">{t.events.noEvents}</p>
                        <p className="text-sm text-gray-500">
                            {t.events.noEventsDesc}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
