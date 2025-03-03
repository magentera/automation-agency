'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, this would send the data to an API
      // await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Register for the Masterclass
          </h2>
          <p className="text-xl text-center mb-10">
            Secure your spot in our upcoming masterclass and take the first step toward transforming your influence into a profitable business.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white text-gray-800 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
              <p className="mb-6">
                Thank you for registering for our masterclass. We've sent a confirmation email with all the details to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/payment" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Complete Payment
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-transparent hover:bg-white/10 border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white text-gray-800 rounded-lg p-8">
              {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company/Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your company or brand name"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Registering...' : 'Register Now'}
                </button>
                
                <p className="text-sm text-gray-600 mt-4 text-center">
                  By registering, you agree to our{' '}
                  <Link href="/terms" className="text-indigo-600 hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-indigo-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-white/80">
              Have questions? <a href="mailto:support@example.com" className="text-white underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm; 