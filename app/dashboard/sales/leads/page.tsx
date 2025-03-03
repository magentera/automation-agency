'use client';

import React from 'react';
import LeadTable from '@/components/sales/LeadTable';
import LeadDetails from '@/components/sales/LeadDetails';

export default function LeadsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedLeadId = searchParams.leadId as string;
  
  // Mock leads data with proper types
  const leads = [
    { 
      id: '1', 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '555-123-4567',
      company: 'ABC Corp',
      status: 'NEW' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-15T10:30:00Z',
      assignedTo: { id: '1', name: 'Alice Johnson', email: 'alice@example.com', photoUrl: '/images/alice.jpg' }
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      phone: '555-234-5678',
      company: 'XYZ Inc',
      status: 'CONTACTED' as const, 
      source: 'Referral', 
      createdAt: '2023-03-14T09:15:00Z',
      assignedTo: { id: '2', name: 'Bob Smith', email: 'bob@example.com', photoUrl: '/images/bob.jpg' }
    },
    { 
      id: '3', 
      name: 'Michael Brown', 
      email: 'michael.brown@example.com', 
      phone: '555-345-6789',
      company: 'Acme Co',
      status: 'QUALIFIED' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-13T14:45:00Z',
      assignedTo: { id: '3', name: 'Carol Williams', email: 'carol@example.com', photoUrl: '/images/carol.jpg' }
    },
    { 
      id: '4', 
      name: 'Emily Davis', 
      email: 'emily.davis@example.com', 
      phone: '555-456-7890',
      company: 'Tech Solutions',
      status: 'PROPOSAL' as const, 
      source: 'Social Media', 
      createdAt: '2023-03-12T11:20:00Z',
      assignedTo: { id: '1', name: 'Alice Johnson', email: 'alice@example.com', photoUrl: '/images/alice.jpg' }
    },
    { 
      id: '5', 
      name: 'David Wilson', 
      email: 'david.wilson@example.com', 
      phone: '555-567-8901',
      company: 'Global Services',
      status: 'NEGOTIATION' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-11T16:10:00Z',
      assignedTo: { id: '2', name: 'Bob Smith', email: 'bob@example.com', photoUrl: '/images/bob.jpg' }
    },
  ];
  
  // Find the selected lead
  const selectedLead = selectedLeadId ? leads.find(lead => lead.id === selectedLeadId) || null : null;
  
  // Add additional details for the selected lead
  const leadDetails = selectedLead ? {
    ...selectedLead,
    notes: 'Customer is interested in our premium masterclass package. Follow up with more information about the bonuses.',
    activities: [
      {
        id: '1',
        type: 'NOTE' as const,
        content: 'Initial contact made via email.',
        createdAt: '2023-03-15T10:35:00Z',
        createdBy: { id: '1', name: 'Alice Johnson' }
      },
      {
        id: '2',
        type: 'EMAIL' as const,
        content: 'Sent follow-up email with masterclass details.',
        createdAt: '2023-03-16T09:20:00Z',
        createdBy: { id: '1', name: 'Alice Johnson' }
      },
      {
        id: '3',
        type: 'CALL' as const,
        content: 'Discussed pricing options and answered questions.',
        createdAt: '2023-03-17T14:15:00Z',
        createdBy: { id: '1', name: 'Alice Johnson' }
      },
      {
        id: '4',
        type: 'STATUS_CHANGE' as const,
        content: 'Status changed from NEW to CONTACTED',
        createdAt: '2023-03-17T14:20:00Z',
        createdBy: { id: '1', name: 'Alice Johnson' }
      }
    ],
    masterclass: {
      id: '1',
      title: 'Building a 7-Figure Personal Brand',
      price: 10000
    },
    lastContactedAt: '2023-03-17T14:15:00Z'
  } : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Leads Management</h1>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add New Lead
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <LeadTable 
            leads={leads} 
            selectedLeadId={selectedLeadId}
            onLeadSelect={(leadId: string) => {
              // In a real implementation, this would use a router to update the URL
              window.location.href = `/dashboard/sales/leads?leadId=${leadId}`;
            }}
          />
        </div>
        
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          {leadDetails ? (
            <LeadDetails 
              lead={leadDetails}
              onStatusChange={(leadId, newStatus) => console.log(`Changed status of lead ${leadId} to ${newStatus}`)}
              onAddNote={(leadId, note) => console.log(`Added note to lead ${leadId}: ${note}`)}
            />
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Select a lead to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 