import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Bethany Presbyterian Church',
  description: 'Get in touch with Bethany Presbyterian Church. Contact us by phone, email, or use our contact form.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Church Street<br />
                  Singapore 123456
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+6561234567" className="text-primary-600 hover:text-primary-700">
                    +65 6123 4567
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700">
                    info@bethanypc.org.sg
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Pastoral Care</h3>
              <p className="text-sm text-gray-600 mb-2">
                For pastoral needs, prayer requests, or spiritual guidance
              </p>
              <a href="mailto:pastor@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                pastor@bethanypc.org.sg
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-600 mb-2">
                Questions about services, events, or church information
              </p>
              <a href="mailto:info@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                info@bethanypc.org.sg
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ministry Questions</h3>
              <p className="text-sm text-gray-600 mb-2">
                Interested in joining a ministry or small group?
              </p>
              <a href="mailto:ministries@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700 text-sm">
                ministries@bethanypc.org.sg
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
