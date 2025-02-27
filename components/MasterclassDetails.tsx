export function MasterclassDetails() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What You&apos;ll Learn</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Masterclass Overview</h3>
            <p className="mb-4">
              Our real estate automation masterclass is designed to give you actionable tips and real-life examples to
              revolutionize your business. You&apos;ll learn how to leverage technology to save time, increase efficiency,
              and grow your profits.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lead capture automation strategies</li>
              <li>Streamlined appointment scheduling systems</li>
              <li>Property management automation techniques</li>
              <li>Client communication and follow-up automation</li>
              <li>Data analysis and reporting automation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Agenda</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Introduction to Real Estate Automation</li>
              <li>Identifying Automation Opportunities in Your Business</li>
              <li>Tools and Platforms for Effective Automation</li>
              <li>Step-by-Step Implementation Strategies</li>
              <li>Case Studies and Success Stories</li>
              <li>Q&A Session</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

