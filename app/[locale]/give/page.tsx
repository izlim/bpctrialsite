import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give | Support Our Ministry | Bethany Presbyterian Church',
  description: 'Learn about giving and support the ministry of Bethany Presbyterian Church through your financial contributions.',
};

export default function GivePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Give</h1>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12">
          <p className="text-lg text-gray-700">
            Thank you for your heart to support the ministry of Bethany Presbyterian Church.
            Your generous giving enables us to serve our community, support missions, and
            share the love of Christ.
          </p>
        </div>

        {/* Why We Give */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why We Give</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Giving is an act of worship and a response to God&apos;s grace in our lives.
              The Bible teaches us that everything we have comes from God, and we are
              called to be good stewards of His resources.
            </p>
            <p className="text-gray-700 mb-4">
              When we give, we:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Express our trust in God&apos;s provision</li>
              <li>Participate in God&apos;s work in the world</li>
              <li>Support the ministry of the local church</li>
              <li>Help those in need in our community and beyond</li>
              <li>Invest in the next generation of believers</li>
            </ul>
            <p className="text-gray-600 text-sm italic">
              &quot;Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
              - 2 Corinthians 9:7
            </p>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">💳</span>
                Online Giving
              </h3>
              <p className="text-gray-700 mb-4">
                Give securely online using your credit card or bank account.
                Set up one-time or recurring donations.
              </p>
              <a
                href="#"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
              >
                Give Online →
              </a>
              <p className="text-xs text-gray-500 mt-2">
                (Online giving platform will be integrated here)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🏦</span>
                Bank Transfer
              </h3>
              <p className="text-gray-700 mb-4">
                Transfer directly to our church account:
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                <p className="font-mono">Bank: [Bank Name]</p>
                <p className="font-mono">Account: [Account Number]</p>
                <p className="font-mono">Name: Bethany Presbyterian Church</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                Check or Cash
              </h3>
              <p className="text-gray-700 mb-4">
                You can give by check or cash during our Sunday services.
                Place your offering in the collection plate or drop it off
                at the church office during office hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📱</span>
                Mobile App
              </h3>
              <p className="text-gray-700 mb-4">
                Give on the go using our mobile app. Available for iOS and Android.
              </p>
              <p className="text-xs text-gray-500">
                (Mobile app will be available in the future)
              </p>
            </div>
          </div>
        </section>

        {/* What Your Giving Supports */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What Your Giving Supports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Local Ministry</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Sunday worship services</li>
                <li>Children&apos;s and youth programs</li>
                <li>Small groups and Bible studies</li>
                <li>Pastoral care and counseling</li>
                <li>Facility maintenance and operations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Outreach & Missions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Community service projects</li>
                <li>Local evangelism efforts</li>
                <li>Global missions support</li>
                <li>Disaster relief and aid</li>
                <li>Church planting initiatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Financial Transparency</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              We are committed to financial integrity and transparency. Our finances are
              overseen by our board of elders and audited annually. If you have questions
              about our financial practices or would like to see our annual report, please
              contact the church office.
            </p>
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Contact Us for More Information →
            </a>
          </div>
        </section>

        {/* Tax Deductible */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Tax-Deductible Giving</h2>
          <p className="text-gray-700 mb-4">
            All contributions to Bethany Presbyterian Church are tax-deductible in Singapore.
            You will receive a receipt for your giving that can be used for tax purposes.
          </p>
          <p className="text-gray-600 text-sm">
            For questions about giving receipts or tax documentation, please contact
            our finance office at <a href="mailto:finance@bethanypc.org.sg" className="text-primary-600 hover:text-primary-700">finance@bethanypc.org.sg</a>
          </p>
        </section>
      </div>
    </div>
  );
}
