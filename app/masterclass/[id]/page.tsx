import React from 'react';
import VideoPlayer from '@/components/masterclass/VideoPlayer';
import ChatInterface from '@/components/masterclass/ChatInterface';
import NotificationSystem from '@/components/masterclass/NotificationSystem';
import TranscriptDisplay from '@/components/masterclass/TranscriptDisplay';
import EngagementMetrics from '@/components/masterclass/EngagementMetrics';

type MasterclassPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: MasterclassPageProps) {
  // This would fetch the masterclass data from an API in a real implementation
  const masterclassId = params.id;
  const masterclass = {
    title: 'Building a 7-Figure Personal Brand',
    description: `Learn how to build and monetize your personal brand. Masterclass ID: ${masterclassId}`,
  };

  return {
    title: `${masterclass.title} | Influencer Masterclass`,
    description: masterclass.description,
  };
}

export default function MasterclassPage({ params }: MasterclassPageProps) {
  const { id } = params;

  // This would be fetched from an API in a real implementation
  const masterclass = {
    id,
    title: 'Building a 7-Figure Personal Brand',
    host: 'Jane Smith',
    description: 'Learn how to build and monetize your personal brand with proven strategies from top influencers.',
    isLive: true,
  };

  // Mock notifications that would be triggered at specific timestamps
  const notifications = [
    { id: '1', message: 'Special offer: Book a call now for 20% off!', triggerTime: 900 }, // 15 minutes in
    { id: '2', message: 'Download the free resources mentioned in this section', triggerTime: 1800 }, // 30 minutes in
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{masterclass.title}</h1>
      <p className="text-xl mb-6">Hosted by {masterclass.host}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer isLive={masterclass.isLive} />
          <div className="mt-4">
            <NotificationSystem notifications={notifications} />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">About This Masterclass</h2>
            <p className="mb-4">{masterclass.description}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <ChatInterface masterclassId={id} />
          <TranscriptDisplay masterclassId={id} />
          <EngagementMetrics masterclassId={id} />
        </div>
      </div>
    </div>
  );
} 