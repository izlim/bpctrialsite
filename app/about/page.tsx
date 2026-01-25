import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bethany Presbyterian Church',
  description: 'Learn about our mission, vision, history, and leadership team at Bethany Presbyterian Church.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Bethany Presbyterian Church</h1>

        {/* Mission & Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            To glorify God by making disciples of all nations through the proclamation of the Gospel, 
            the teaching of God's Word, and the building of a loving community that serves one another 
            and reaches out to the world.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To be a vibrant, Christ-centered community where every member is growing in faith, 
            connected in fellowship, and engaged in ministry, impacting Singapore and beyond 
            with the love and truth of Jesus Christ.
          </p>
        </section>

        {/* History */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-700 mb-4">
            Bethany Presbyterian Church was established in [YEAR] with a vision to serve the 
            community and spread the Gospel in Singapore. What began as a small gathering of 
            faithful believers has grown into a vibrant congregation committed to God's work.
          </p>
          <p className="text-gray-700 mb-4">
            Throughout our history, we have remained committed to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Biblical teaching and sound doctrine</li>
            <li>Authentic worship and prayer</li>
            <li>Loving community and fellowship</li>
            <li>Service to our community and world</li>
            <li>Discipleship and spiritual growth</li>
          </ul>
        </section>

        {/* Leadership */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-700 text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Pastor Name</h3>
              <p className="text-gray-600 text-center mb-4">Senior Pastor</p>
              <p className="text-gray-700 text-sm">
                Pastor Name has been serving at Bethany Presbyterian Church since [YEAR]. 
                He is passionate about expository preaching and discipleship, with a heart 
                for seeing people grow in their relationship with Christ.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-700 text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Associate Pastor</h3>
              <p className="text-gray-600 text-center mb-4">Youth & Family Ministry</p>
              <p className="text-gray-700 text-sm">
                Our associate pastor leads our youth and family ministries, helping families 
                grow together in faith and supporting the next generation of believers.
              </p>
            </div>
          </div>
        </section>

        {/* Denomination */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Presbyterian Tradition</h2>
          <p className="text-gray-700 mb-4">
            Bethany Presbyterian Church is part of the Presbyterian denomination, which traces 
            its roots to the Protestant Reformation. We value:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The sovereignty of God in all things</li>
            <li>The authority of Scripture as our guide for faith and life</li>
            <li>Reformed theology and the Westminster Confession of Faith</li>
            <li>Elder-led governance and congregational participation</li>
            <li>Connectionalism with other Presbyterian churches</li>
          </ul>
        </section>

        {/* Photo Gallery Placeholder */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Church Life</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Photo {i}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
