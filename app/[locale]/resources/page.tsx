import { getResources } from '@/lib/markdown';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Bethany Presbyterian Church',
  description: 'Access daily devotions, Bible reading plans, study materials, and other helpful resources.',
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg text-gray-600 mb-12">
          Grow in your faith with our collection of devotions, Bible studies, and helpful resources.
        </p>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📖</div>
            <h2 className="text-xl font-semibold mb-2">Daily Devotions</h2>
            <p className="text-gray-600 text-sm">
              Daily Bible readings and reflections to help you grow in your walk with God.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-xl font-semibold mb-2">Bible Studies</h2>
            <p className="text-gray-600 text-sm">
              Study guides and materials for individual or group Bible study.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔗</div>
            <h2 className="text-xl font-semibold mb-2">Helpful Links</h2>
            <p className="text-gray-600 text-sm">
              Curated resources and websites to support your spiritual growth.
            </p>
          </div>
        </div>

        {/* Resource List */}
        {resources.length > 0 ? (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Latest Resources</h2>
            <div className="space-y-4">
              {resources.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{resource.frontmatter.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{formatDate(resource.frontmatter.date)}</span>
                    {resource.frontmatter.type && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                          {resource.frontmatter.type}
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">No resources available yet.</p>
            <p className="text-sm text-gray-500">
              Resources will appear here once they are added to the content folder.
            </p>
          </div>
        )}

        {/* Additional Resources */}
        <section className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Bible Reading Plans</h3>
              <p className="text-gray-700 text-sm mb-2">
                Follow a structured plan to read through the Bible in a year, or choose 
                from topical reading plans.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                View Reading Plans →
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Recommended Books</h3>
              <p className="text-gray-700 text-sm mb-2">
                A curated list of Christian books recommended by our pastors for 
                spiritual growth and study.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                View Book List →
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Online Tools</h3>
              <p className="text-gray-700 text-sm mb-2">
                Helpful online Bible study tools, commentaries, and resources for 
                deeper study of Scripture.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                View Tools →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
