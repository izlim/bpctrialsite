import { MetadataRoute } from 'next';
import { getEvents, getServices } from '@/lib/markdown';

const BASE_URL = 'https://bethanypc.org.sg';
const LOCALES = ['en', 'zh'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/about',
    '/visit',
    '/what-to-expect',
    '/services',
    '/events',
    '/ministries',
    '/contact',
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Add the root redirect path manually
  routes.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1.0,
  });

  for (const locale of LOCALES) {
    // Add static routes per locale
    for (const route of staticRoutes) {
      routes.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }

    // Add dynamic event routes per locale
    let events: Array<{ slug: string; frontmatter: any }> = [];
    try {
      events = await getEvents(locale);
    } catch (e) {
      console.warn(`Failed to generate event sitemap for locale: ${locale}`);
    }
    
    for (const event of events) {
      routes.push({
        url: `${BASE_URL}/${locale}/events/${event.slug}`,
        lastModified: new Date(), // using current date as fallback for any parsing errors
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }

    // Add dynamic service routes per locale
    let services: Array<{ slug: string; frontmatter: any }> = [];
    try {
      services = await getServices(locale);
    } catch (e) {
      console.warn(`Failed to generate services sitemap for locale: ${locale}`);
    }

    for (const service of services) {
      routes.push({
        url: `${BASE_URL}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return routes;
}
