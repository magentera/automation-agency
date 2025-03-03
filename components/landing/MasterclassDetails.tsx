import React from 'react';

const MasterclassDetails: React.FC = () => {
  return (
    <section id="details" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You&apos;ll Learn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
            <p className="text-gray-600">
              Discover how to position yourself as an authority in your niche and stand out from the competition with a unique value proposition.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Monetization Strategies</h3>
            <p className="text-gray-600">
              Learn proven methods to monetize your influence through multiple revenue streams, from digital products to high-ticket coaching.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Audience Building</h3>
            <p className="text-gray-600">
              Master the art of growing a loyal, engaged audience that&apos;s primed to purchase your offerings and spread your message.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
            <p className="text-gray-600">
              Develop a content strategy that attracts your ideal clients, establishes your expertise, and drives conversions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sales Systems</h3>
            <p className="text-gray-600">
              Implement automated sales systems that convert followers into customers while you focus on creating valuable content.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="text-indigo-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Scaling Strategies</h3>
            <p className="text-gray-600">
              Scale your influence business beyond yourself with team building, systems, and leveraged income opportunities.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Masterclass Schedule</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="font-bold text-indigo-600 w-full md:w-1/4">Day 1</div>
              <div className="w-full md:w-3/4">
                <p className="font-semibold">Foundation: Brand Positioning & Audience Building</p>
                <p className="text-gray-600">April 15, 2023 • 10:00 AM - 12:00 PM EST</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="font-bold text-indigo-600 w-full md:w-1/4">Day 2</div>
              <div className="w-full md:w-3/4">
                <p className="font-semibold">Content Strategy & Engagement Tactics</p>
                <p className="text-gray-600">April 16, 2023 • 10:00 AM - 12:00 PM EST</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="font-bold text-indigo-600 w-full md:w-1/4">Day 3</div>
              <div className="w-full md:w-3/4">
                <p className="font-semibold">Monetization Strategies & Sales Systems</p>
                <p className="text-gray-600">April 17, 2023 • 10:00 AM - 12:00 PM EST</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="font-bold text-indigo-600 w-full md:w-1/4">Day 4</div>
              <div className="w-full md:w-3/4">
                <p className="font-semibold">Scaling Your Business & Implementation Workshop</p>
                <p className="text-gray-600">April 18, 2023 • 10:00 AM - 12:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassDetails; 