import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Believe | Statement of Faith | Bethany Presbyterian Church',
  description: 'Learn about our core beliefs, statement of faith, and doctrinal positions at Bethany Presbyterian Church.',
};

export default function BeliefsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">What We Believe</h1>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
          <p className="text-lg text-gray-700">
            Our beliefs are grounded in the Bible, which we believe to be the inspired,
            inerrant Word of God. As a Presbyterian church, we hold to the historic
            Christian faith as expressed in the Reformed tradition.
          </p>
        </div>

        {/* Core Beliefs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Core Beliefs</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">The Bible</h3>
              <p className="text-gray-700">
                It is our ultimate authority for faith and life, and it reveals God&apos;s plan
                for salvation and His will for how we should live.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">God</h3>
              <p className="text-gray-700">
                We believe in one God who exists eternally in three persons: Father, Son,
                and Holy Spirit. God is sovereign, holy, loving, and just. He created all
                things and sustains all things by His power.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Jesus Christ</h3>
              <p className="text-gray-700">
                We believe Jesus Christ is fully God and fully man. He was born of a virgin,
                lived a sinless life, died on the cross to pay for our sins, and rose again
                on the third day. He is the only way to salvation and will return one day
                to judge the living and the dead.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">The Holy Spirit</h3>
              <p className="text-gray-700">
                We believe the Holy Spirit convicts people of sin, regenerates believers,
                indwells all Christians, and empowers us to live godly lives. The Spirit
                also gives spiritual gifts for the building up of the church.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Salvation</h3>
              <p className="text-gray-700">
                We believe salvation is by grace alone through faith alone in Christ alone.
                It is not earned by good works, but is a free gift from God. Those who
                repent of their sins and trust in Jesus Christ are saved and receive
                eternal life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">The Church</h3>
              <p className="text-gray-700">
                We believe the church is the body of Christ, made up of all true believers.
                The local church exists to worship God, build up believers, and reach out
                to the world with the Gospel. We practice baptism and the Lord&apos;s Supper
                as sacraments instituted by Christ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">The Return of Christ</h3>
              <p className="text-gray-700">
                We believe Jesus Christ will return visibly and bodily to earth to establish
                His kingdom. All people will be raised from the dead - believers to eternal
                life with God, and unbelievers to eternal separation from God.
              </p>
            </div>
          </div>
        </section>

        {/* Presbyterian Distinctives */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Presbyterian Distinctives</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              As a Presbyterian church, we hold to several distinctive beliefs:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>The Sovereignty of God:</strong> God is in complete control of all things and works all things according to His will</li>
              <li><strong>Election:</strong> God chose us in Christ before the foundation of the world, not because of anything we have done</li>
              <li><strong>Covenant Theology:</strong> God relates to His people through covenants, and the church is the continuation of God&apos;s covenant people</li>
              <li><strong>Elder-Led Governance:</strong> The church is led by elders (presbyters) who are elected by the congregation</li>
              <li><strong>Connectionalism:</strong> We are connected to other Presbyterian churches for mutual support and accountability</li>
            </ul>
          </div>
        </section>

        {/* Confessional Standards */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Confessional Standards</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Our church subscribes to the historic confessions of the Presbyterian tradition:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Westminster Confession of Faith</strong> - Our primary doctrinal standard</li>
              <li><strong>Westminster Larger Catechism</strong> - Detailed explanation of Christian doctrine</li>
              <li><strong>Westminster Shorter Catechism</strong> - Summary of Christian beliefs in question and answer format</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              These documents, written in the 17th century, remain faithful summaries of
              biblical teaching and continue to guide our understanding of Scripture.
            </p>
          </div>
        </section>

        {/* Statement of Faith */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Statement of Faith</h2>
          <div className="bg-primary-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              We believe in one God, the Father Almighty, Maker of heaven and earth,
              and of all things visible and invisible.
            </p>
            <p className="text-gray-700 mb-4">
              And in one Lord Jesus Christ, the only-begotten Son of God, begotten of
              the Father before all worlds, God of God, Light of Light, very God of
              very God, begotten, not made, being of one substance with the Father;
              by whom all things were made.
            </p>
            <p className="text-gray-700 mb-4">
              And in the Holy Ghost, the Lord and Giver of Life, who proceedeth from
              the Father and the Son; who with the Father and the Son together is
              worshipped and glorified; who spake by the prophets.
            </p>
            <p className="text-gray-700">
              And we believe one holy catholic and apostolic Church. We acknowledge one
              baptism for the remission of sins; and we look for the resurrection of
              the dead, and the life of the world to come. Amen.
            </p>
          </div>
        </section>

        {/* Questions */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about what we believe or would like to discuss our
            doctrinal positions, we&apos;d love to talk with you. Our pastors are available
            to answer questions and provide resources for further study.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
