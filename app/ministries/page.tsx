import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ministries | Bethany Presbyterian Church',
  description: 'Discover our various ministries and find a place to serve and connect at Bethany Presbyterian Church.',
};

export default function MinistriesPage() {
  const ministries = [
    {
      title: 'Children\'s Ministry',
      description: 'Nurturing the faith of our youngest members through age-appropriate Bible teaching, songs, and activities.',
      ageRange: 'Ages 0-12',
      contact: 'children@bethanypc.org.sg',
    },
    {
      title: 'Youth Ministry',
      description: 'Helping teenagers grow in their faith, build meaningful friendships, and discover their purpose in Christ.',
      ageRange: 'Ages 13-18',
      contact: 'youth@bethanypc.org.sg',
    },
    {
      title: 'Small Groups',
      description: 'Connect with others in smaller settings for Bible study, prayer, and fellowship throughout the week.',
      ageRange: 'All Ages',
      contact: 'smallgroups@bethanypc.org.sg',
    },
    {
      title: 'Women\'s Ministry',
      description: 'Building community among women through Bible studies, retreats, and fellowship events.',
      ageRange: 'Women of All Ages',
      contact: 'women@bethanypc.org.sg',
    },
    {
      title: 'Men\'s Ministry',
      description: 'Encouraging men to grow in faith and character through accountability, study, and service.',
      ageRange: 'Men of All Ages',
      contact: 'men@bethanypc.org.sg',
    },
    {
      title: 'Outreach & Missions',
      description: 'Serving our local community and supporting global missions to share the love of Christ.',
      ageRange: 'All Ages',
      contact: 'outreach@bethanypc.org.sg',
    },
    {
      title: 'Music & Worship',
      description: 'Leading the congregation in worship through music, both traditional and contemporary styles.',
      ageRange: 'All Ages',
      contact: 'worship@bethanypc.org.sg',
    },
    {
      title: 'Prayer Ministry',
      description: 'Interceding for the needs of our church, community, and world through organized prayer.',
      ageRange: 'All Ages',
      contact: 'prayer@bethanypc.org.sg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Ministries</h1>
        <p className="text-lg text-gray-600 mb-12">
          At Bethany Presbyterian Church, we believe that every member has a role to play 
          in the body of Christ. Explore our ministries and find a place to serve, grow, 
          and connect with others.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-3">{ministry.title}</h2>
              <p className="text-gray-700 mb-4">{ministry.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Age Range:</strong> {ministry.ageRange}</p>
                  <a
                    href={`mailto:${ministry.contact}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    {ministry.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Interested in Serving?</h2>
          <p className="text-gray-700 mb-6">
            We'd love to help you find a place to serve and use your gifts for God's kingdom. 
            Whether you're interested in one of these ministries or have other ideas, we're 
            here to help you get connected.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
