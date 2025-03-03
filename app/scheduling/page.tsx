'use client'

import React, { useState } from 'react';
import CalendarInterface from '@/components/scheduling/CalendarInterface';
import TimeSlotSelector from '@/components/scheduling/TimeSlotSelector';
import SalesRepSelector from '@/components/scheduling/SalesRepSelector';


export default function SchedulingPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // In a real implementation, we would fetch the lead information using the lead ID
  const leadId = searchParams.leadId as string || '123';
  
  // Mock lead data
  const lead = {
    id: leadId,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    masterclassId: '1',
    masterclassTitle: 'Building a 7-Figure Personal Brand',
  };
  
  // Mock available sales reps
  const salesReps = [
    { 
      id: '1', 
      name: 'Alice Johnson', 
      title: 'Senior Sales Consultant',
      photoUrl: '/images/alice.jpg',
      specialization: 'Personal Branding', 
      experience: 5,
      available: true
    },
    { 
      id: '2', 
      name: 'Bob Smith', 
      title: 'Sales Manager',
      photoUrl: '/images/bob.jpg',
      specialization: 'Monetization Strategies', 
      experience: 7,
      available: true
    },
    { 
      id: '3', 
      name: 'Carol Williams', 
      title: 'Sales Associate',
      photoUrl: '/images/carol.jpg',
      specialization: 'Content Creation', 
      experience: 3,
      available: true
    },
  ];
  
  // Mock time slots (would be dynamically generated based on sales rep availability)
  const timeSlots = [
    { id: '1', date: '2023-04-10', startTime: '09:00', endTime: '09:30', available: true },
    { id: '2', date: '2023-04-10', startTime: '10:00', endTime: '10:30', available: true },
    { id: '3', date: '2023-04-10', startTime: '14:00', endTime: '14:30', available: true },
    { id: '4', date: '2023-04-11', startTime: '11:00', endTime: '11:30', available: true },
    { id: '5', date: '2023-04-11', startTime: '15:00', endTime: '15:30', available: true },
    { id: '6', date: '2023-04-12', startTime: '10:00', endTime: '10:30', available: true },
    { id: '7', date: '2023-04-12', startTime: '16:00', endTime: '16:30', available: true },
  ];

  // State management
  const [selectedDate, setSelectedDate] = useState<string | null>('2023-04-10');
  const [selectedSalesRep, setSelectedSalesRep] = useState<string | null>('1');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>('1');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Schedule a Call</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-medium">{lead.name}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{lead.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="font-medium">{lead.phone}</p>
            </div>
            <div>
              <p className="text-gray-600">Masterclass</p>
              <p className="font-medium">{lead.masterclassTitle}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <SalesRepSelector 
            salesReps={salesReps} 
            selectedSalesRep={selectedSalesRep}
            onSalesRepSelect={(id: string) => setSelectedSalesRep(id)}
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Select a Date and Time</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <CalendarInterface 
                selectedDate={selectedDate}
                onDateSelect={(date: string) => setSelectedDate(date)}
                disabledDates={[]}
              />
            </div>
            <div className="lg:col-span-2">
              <TimeSlotSelector 
                timeSlots={timeSlots} 
                selectedTimeSlot={selectedTimeSlot}
                onTimeSlotSelect={(id: string) => setSelectedTimeSlot(id)}
                selectedDate={selectedDate}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            onClick={() => {
              // In a real implementation, this would submit the booking
              window.location.href = '/scheduling/confirmation';
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>By booking a call, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
      </div>
    </div>
  );
} 