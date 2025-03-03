import React from 'react';
import Hero from '@/components/landing/Hero';
import AboutHost from '@/components/landing/AboutHost';
import MasterclassDetails from '@/components/landing/MasterclassDetails';
import Testimonials from '@/components/landing/Testimonials';
import LeadCaptureForm from '@/components/landing/LeadCaptureForm';
import Footer from '@/components/landing/Footer';

export const metadata = {
  title: 'Influencer Masterclass - Transform Your Business',
  description: 'Join our exclusive masterclass to learn proven strategies from top influencers.',
};

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <MasterclassDetails />
      <AboutHost />
      <Testimonials />
      <LeadCaptureForm />
      <Footer />
    </main>
  );
} 