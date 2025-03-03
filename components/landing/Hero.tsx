import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Transform Your Influence Into A <span className="text-yellow-300">7-Figure Business</span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-10 max-w-3xl">
          Join our exclusive masterclass and learn proven strategies from top influencers who have built successful businesses around their personal brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#register" 
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Register Now
          </Link>
          <Link 
            href="#details" 
            className="bg-transparent hover:bg-white/10 border-2 border-white py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-2">Next Masterclass Starting In:</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 rounded-lg p-3 w-20">
              <div className="text-3xl font-bold">2</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 w-20">
              <div className="text-3xl font-bold">18</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 w-20">
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm">Minutes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero; 