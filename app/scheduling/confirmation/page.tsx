import React from 'react';
import ConfirmationDisplay from '@/components/scheduling/ConfirmationDisplay';
import Link from 'next/link';

export const metadata = {
  title: 'Booking Confirmation | Influencer Masterclass',
  description: 'Your call has been successfully scheduled.',
};

export default function SchedulingConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // In a real implementation, we would fetch the appointment details using the appointment ID
  const appointmentId = searchParams.appointmentId as string || 'appt_123456';
  
  // Mock appointment data
  const appointment = {
    id: appointmentId,
    date: '2023-04-10',
    startTime: '10:00',
    endTime: '10:30',
    timeZone: 'America/New_York',
    salesRep: {
      id: '1',
      name: 'Alice Johnson',
      title: 'Senior Sales Consultant',
      photoUrl: '/images/alice.jpg',
      email: 'alice.johnson@example.com',
      phone: '+1 (555) 987-6543',
    },
    lead: {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
    },
    masterclass: {
      id: '1',
      title: 'Building a 7-Figure Personal Brand',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Appointment Confirmed!</h1>
          <p className="text-gray-600">Your call with {appointment.salesRep.name} has been scheduled.</p>
        </div>
        
        <ConfirmationDisplay appointment={appointment} />
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={`/masterclass/${appointment.masterclass.id}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-center"
          >
            Go to Masterclass
          </Link>
          <Link 
            href="/dashboard"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 text-center"
          >
            View Dashboard
          </Link>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        <p>A calendar invitation has been sent to your email address.</p>
        <p className="mt-2">If you need to reschedule or cancel, please contact us at support@influencermasterclass.com</p>
      </div>
    </div>
  );
} 