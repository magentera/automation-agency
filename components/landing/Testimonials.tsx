import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                MJ
              </div>
              <div>
                <h3 className="font-bold">Michael Johnson</h3>
                <p className="text-gray-600 text-sm">Fitness Influencer</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;Before this masterclass, I was struggling to monetize my fitness content beyond sponsored posts. Jane&apos;s strategies helped me launch a coaching program that generated $127,000 in its first quarter. The ROI on this masterclass has been incredible!&quot;
            </p>
            <div className="text-indigo-600 font-semibold">
              Results: $127K in 3 months
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                SR
              </div>
              <div>
                <h3 className="font-bold">Sarah Rodriguez</h3>
                <p className="text-gray-600 text-sm">Parenting Content Creator</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;I had a decent following but no clear monetization strategy. After implementing Jane&apos;s content framework and sales system, I launched a digital product that sold 1,500 copies in the first month. This masterclass changed my entire business model!&quot;
            </p>
            <div className="text-indigo-600 font-semibold">
              Results: $75K in digital product sales
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                DT
              </div>
              <div>
                <h3 className="font-bold">David Thompson</h3>
                <p className="text-gray-600 text-sm">Business Coach</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;I was already making good money as a coach, but Jane&apos;s scaling strategies helped me create a group program that tripled my revenue while reducing my working hours. The systems she teaches are game-changing for service providers.&quot;
            </p>
            <div className="text-indigo-600 font-semibold">
              Results: 3x revenue, 50% less work
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-4">Join 10,000+ creators who have transformed their influence into profitable businesses</p>
          <a 
            href="#register" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 