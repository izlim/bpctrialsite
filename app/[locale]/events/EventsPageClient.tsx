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
        <div className="bg-transparent">
            {/* Header Section */}
            <section className="bg-primary-gradient text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t.events.title}</h1>
                    <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-3xl mx-auto leading-relaxed">
                        {t.events.description}
                    </p>
                    <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mt-8" />
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {upcomingEvents.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-4xl font-bold mb-10 text-primary-900 border-l-8 border-orange-400 pl-6">{t.events.upcoming}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {upcomingEvents.map((event) => (
                                    <div key={event.slug} className="hover-lift">
                                        <EventCard event={event} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {pastEvents.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-4xl font-bold mb-10 text-primary-900 border-l-8 border-orange-400 pl-6">{t.events.past}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 opacity-80">
                                {pastEvents.map((event) => (
                                    <div key={event.slug} className="hover-lift grayscale hover:grayscale-0 transition-all duration-500">
                                        <EventCard event={event} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {events.length === 0 && (
                        <div className="bg-white p-20 rounded-[40px] text-center shadow-xl border border-gray-100">
                            <div className="text-6xl mb-8">📅</div>
                            <p className="text-2xl font-bold text-primary-900 mb-4">{t.events.noEvents}</p>
                            <p className="text-lg text-gray-500 max-w-md mx-auto">
                                {t.events.noEventsDesc}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
