export default function ThreeDayFunnelFix() {
    return (
      <main className="min-h-screen bg-white text-black px-6 py-12 max-w-3xl mx-auto">
        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Fix Your Sales Funnel in 3 Days — Flat Rate, No Meetings
          </h1>
          <p className="text-lg mb-6">
            Uncover revenue leaks, automation gaps, and ops chaos. You’ll get a full teardown, a clarity map, and an async implementation plan.
          </p>
          <a
            href="https://tally.so/r/your-form-id" // replace with your form URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Get the Audit
          </a>
        </section>
  
        {/* PROBLEMS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">You’re probably dealing with this:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>You’re leaking leads.</li>
            <li>Your team’s slowed by duct-taped ops.</li>
            <li>You’re automating the wrong stuff—or nothing at all.</li>
          </ul>
          <p className="mt-4">You don’t need an agency. You need a map and a fast fix.</p>
        </section>
  
        {/* WHAT YOU GET */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What You’ll Get</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Full audit of your sales & ops workflows</li>
            <li>Click-by-click teardown video</li>
            <li>Automation map & async implementation plan</li>
            <li>Tool recommendations and top fixes</li>
          </ul>
        </section>
  
        {/* OFFER */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">The Offer</h2>
          <p className="mb-2">Flat-rate teardown audit — delivered in 3 days</p>
          <p className="mb-4 font-bold text-lg">$XXX One-Time</p>
          <a
            href="https://tally.so/r/your-form-id" // replace with your form URL
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Book My Audit
          </a>
        </section>
  
        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Can I get on a call first?</strong><br />
              No calls. This is async by design for speed and clarity. You get a Loom walkthrough and action map.
            </li>
            <li>
              <strong>What tools do you work with?</strong><br />
              Zapier, Airtable, Hubspot, Notion, Pipedrive, Slack, and more. If it has an API, it’s fair game.
            </li>
            <li>
              <strong>What happens after I buy?</strong><br />
              Fill out the intake form. In 3 business days, you get the teardown, map, and action steps.
            </li>
          </ul>
        </section>
      </main>
    );
  }
  