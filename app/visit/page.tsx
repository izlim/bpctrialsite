import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit Us | Service Times & Location | Bethany Presbyterian Church',
  description: 'Find our service times, location, directions, and parking information. Plan your visit to Bethany Presbyterian Church.',
};

export default function VisitPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Visit Us</h1>

        {/* Service Times */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Service Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Sunday Morning Service</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Time:</strong> 9:30 AM - 11:00 AM</p>
              <p className="text-gray-600 mb-4">Traditional worship with hymns and contemporary elements</p>
              <p className="text-sm text-gray-500">Children&apos;s Sunday School available during service</p>
            </div>
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Sunday Evening Service</h3>
              <p className="text-lg text-gray-700 mb-2"><strong>Time:</strong> 6:00 PM - 7:30 PM</p>
              <p className="text-gray-600 mb-4">Contemporary worship with modern music</p>
              <p className="text-sm text-gray-500">Youth programs available</p>
            </div>
          </div>
          <div className="mt-6 bg-primary-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Midweek Activities</h4>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Wednesday:</strong> Prayer Meeting - 7:30 PM</li>
              <li><strong>Friday:</strong> Small Groups - Various times and locations</li>
              <li><strong>Saturday:</strong> Youth Fellowship - 3:00 PM</li>
            </ul>
          </div>
        </section>

        {/* Location */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Location</h2>
          <div className="bg-white border-2 border-primary-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Bethany Presbyterian Church</h3>
            <p className="text-lg text-gray-700 mb-2">123 Church Street</p>
            <p className="text-lg text-gray-700 mb-2">Singapore 123456</p>
            <p className="text-gray-600 mb-4">Phone: +65 6123 4567</p>
            <p className="text-gray-600">Email: info@bethanypc.org.sg</p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
            <p className="text-gray-500">Google Maps will be embedded here</p>
          </div>
        </section>

        {/* Directions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Getting Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚇</span>
                By MRT
              </h3>
              <p className="text-gray-700">
                Take the [Line Name] to [Station Name] Station. Exit at [Exit Number] and
                walk approximately 5 minutes. The church is located on the corner of
                Church Street and Main Road.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚌</span>
                By Bus
              </h3>
              <p className="text-gray-700">
                Bus numbers [X], [Y], and [Z] stop near the church. The nearest bus stop
                is &quot;Church Street&quot; which is a 2-minute walk from the building.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚗</span>
                By Car
              </h3>
              <p className="text-gray-700 mb-2">
                Limited parking is available on-site. Additional parking can be found at:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Public parking lot across the street</li>
                <li>Street parking on surrounding roads</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚶</span>
                Walking
              </h3>
              <p className="text-gray-700">
                The church is easily accessible on foot from the surrounding neighborhoods.
                We&apos;re located in a pedestrian-friendly area with sidewalks and crosswalks.
              </p>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Plan Your Visit</h2>
          <p className="text-gray-700 mb-6">
            We&apos;d love to welcome you! If you&apos;re planning to visit for the first time, here&apos;s what to expect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Services typically last about 90 minutes</li>
            <li>Dress code is casual - come as you are</li>
            <li>Children are welcome - we have Sunday School and nursery care</li>
            <li>Free parking available on-site</li>
            <li>Friendly greeters will welcome you at the door</li>
          </ul>
          <a
            href="/what-to-expect"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            Learn More About What to Expect →
          </a>
        </section>
      </div>
    </div>
  );
}
