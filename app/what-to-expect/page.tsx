import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Expect | Your First Visit | Bethany Presbyterian Church',
  description: 'Learn what to expect during your first visit to Bethany Presbyterian Church, including service format, dress code, and children\'s programs.',
};

export default function WhatToExpectPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">What to Expect</h1>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
          <p className="text-lg text-gray-700">
            We're so glad you're considering visiting Bethany Presbyterian Church! 
            Whether you're new to church or looking for a new church home, we want 
            you to feel welcome and comfortable.
          </p>
        </div>

        {/* Service Format */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Service Format</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Sunday Morning Service (9:30 AM)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Welcome & Announcements</strong> (5 minutes)</li>
                <li><strong>Worship Through Music</strong> (20 minutes) - Mix of traditional hymns and contemporary songs</li>
                <li><strong>Scripture Reading</strong> (3 minutes)</li>
                <li><strong>Message</strong> (35-40 minutes) - Expository preaching from the Bible</li>
                <li><strong>Response & Prayer</strong> (5 minutes)</li>
                <li><strong>Benediction</strong> (2 minutes)</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">
                Total service time: Approximately 90 minutes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Sunday Evening Service (6:00 PM)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Contemporary Worship</strong> (25 minutes) - Modern Christian music</li>
                <li><strong>Message</strong> (35-40 minutes) - Practical, applicable teaching</li>
                <li><strong>Fellowship Time</strong> (15 minutes) - Coffee and conversation</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">
                Total service time: Approximately 75 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Worship Style */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Worship Style</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Our worship style blends traditional and contemporary elements. We value:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Biblical Content:</strong> All songs and messages are grounded in Scripture</li>
              <li><strong>Authentic Expression:</strong> We encourage genuine, heartfelt worship</li>
              <li><strong>Musical Diversity:</strong> From classic hymns to modern worship songs</li>
              <li><strong>Participation:</strong> Everyone is welcome to participate at their comfort level</li>
            </ul>
          </div>
        </section>

        {/* Dress Code */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What to Wear</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              There's no dress code at Bethany Presbyterian Church. Come as you are! 
              You'll see people in a variety of styles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-semibold mb-2">Some people wear:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Business casual</li>
                  <li>Dress shirts and slacks</li>
                  <li>Dresses and skirts</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Others wear:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Jeans and t-shirts</li>
                  <li>Casual attire</li>
                  <li>Whatever is comfortable</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm italic">
              The most important thing is that you're here, not what you're wearing!
            </p>
          </div>
        </section>

        {/* Children's Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Children & Youth</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Nursery (Ages 0-2)</h3>
              <p className="text-gray-700 mb-2">
                Safe, loving care for infants and toddlers during both services. 
                Our trained volunteers provide age-appropriate activities and care.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> First floor, Room 101
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Sunday School (Ages 3-12)</h3>
              <p className="text-gray-700 mb-2">
                Engaging Bible lessons, songs, and activities designed for children. 
                Classes are divided by age groups to ensure age-appropriate teaching.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> During Sunday morning service (9:30 AM)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Youth Programs (Ages 13-18)</h3>
              <p className="text-gray-700 mb-2">
                Dynamic programs designed to help teenagers grow in their faith, 
                build friendships, and serve others.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sunday:</strong> Evening service and youth group<br />
                <strong>Saturday:</strong> Youth fellowship at 3:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* First-Time Visitors */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">First-Time Visitor Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <h4 className="font-semibold mb-2">When You Arrive</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Friendly greeters will welcome you at the main entrance</li>
                <li>Feel free to ask any questions - we're here to help!</li>
                <li>Pick up a welcome packet with information about the church</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">During Service</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>You won't be asked to stand up or introduce yourself</li>
                <li>Offering is for members and regular attendees - guests are not expected to give</li>
                <li>Feel free to participate in singing and prayer at your comfort level</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">After Service</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Join us for coffee and refreshments in the fellowship hall</li>
                <li>Meet our pastor and other members</li>
                <li>Ask questions and learn more about our church</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Accessibility</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              We want everyone to feel welcome and comfortable. Our facilities include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wheelchair accessible entrances and restrooms</li>
              <li>Elevator access to all floors</li>
              <li>Hearing assistance devices available upon request</li>
              <li>Large print bulletins and Bibles</li>
              <li>Designated seating areas for wheelchairs</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              If you have specific accessibility needs, please contact us in advance 
              so we can ensure your visit is comfortable.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Visit?</h2>
          <p className="text-lg mb-6 text-primary-100">
            We'd love to see you this Sunday! If you have any questions before your visit, 
            please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/visit"
              className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Get Directions
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
