import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';
  source: string;
  notes?: string;
  assignedTo?: {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
  };
  masterclass?: {
    id: string;
    title: string;
    price: number;
  };
  createdAt: string;
  lastContactedAt?: string;
  activities?: {
    id: string;
    type: 'NOTE' | 'EMAIL' | 'CALL' | 'MEETING' | 'STATUS_CHANGE';
    content: string;
    createdAt: string;
    createdBy: {
      id: string;
      name: string;
    };
  }[];
}

interface LeadDetailsProps {
  lead: Lead | null;
  isLoading?: boolean;
  onStatusChange?: (leadId: string, newStatus: Lead['status']) => void;
  onAddNote?: (leadId: string, note: string) => void;
}

const LeadDetails: React.FC<LeadDetailsProps> = ({
  lead,
  isLoading = false,
  onStatusChange,
  onAddNote,
}) => {
  const [newNote, setNewNote] = useState('');
  const [showAddNote, setShowAddNote] = useState(false);
  
  // Status options with colors
  const statusOptions = [
    { value: 'NEW', label: 'New', color: 'bg-blue-100 text-blue-800' },
    { value: 'CONTACTED', label: 'Contacted', color: 'bg-purple-100 text-purple-800' },
    { value: 'QUALIFIED', label: 'Qualified', color: 'bg-indigo-100 text-indigo-800' },
    { value: 'PROPOSAL', label: 'Proposal', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'NEGOTIATION', label: 'Negotiation', color: 'bg-orange-100 text-orange-800' },
    { value: 'CLOSED_WON', label: 'Closed Won', color: 'bg-green-100 text-green-800' },
    { value: 'CLOSED_LOST', label: 'Closed Lost', color: 'bg-red-100 text-red-800' },
  ];
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Handle status change
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (lead && onStatusChange) {
      onStatusChange(lead.id, e.target.value as Lead['status']);
    }
  };
  
  // Handle add note
  const handleAddNote = () => {
    if (lead && newNote.trim() && onAddNote) {
      onAddNote(lead.id, newNote.trim());
      setNewNote('');
      setShowAddNote(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="lead-details bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }
  
  if (!lead) {
    return (
      <div className="lead-details bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-8 text-gray-500">
          Select a lead to view details
        </div>
      </div>
    );
  }
  
  return (
    <div className="lead-details bg-white rounded-lg shadow-md">
      <div className="border-b p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{lead.name}</h2>
            {lead.company && (
              <p className="text-gray-500">{lead.company}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <select
              className="mr-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
              value={lead.status}
              onChange={handleStatusChange}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <Link 
              href={`/scheduling?leadId=${lead.id}`}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
            >
              Schedule Call
            </Link>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{lead.email}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{lead.phone}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Lead Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Created: {formatDate(lead.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Source: {lead.source}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Status: <span className={`px-2 py-0.5 text-xs rounded-full ${statusOptions.find(s => s.value === lead.status)?.color}`}>{lead.status.replace('_', ' ')}</span></span>
              </div>
            </div>
          </div>
        </div>
        
        {lead.assignedTo && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Assigned To</h3>
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={lead.assignedTo.photoUrl}
                  alt={lead.assignedTo.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <p className="font-medium text-sm">{lead.assignedTo.name}</p>
                <p className="text-xs text-gray-500">{lead.assignedTo.email}</p>
              </div>
            </div>
          </div>
        )}
        
        {lead.masterclass && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Interested In</h3>
            <div className="bg-purple-50 p-3 rounded-md">
              <p className="font-medium">{lead.masterclass.title}</p>
              <p className="text-sm text-purple-800">${lead.masterclass.price.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Activity</h3>
          <button 
            className="text-sm text-blue-600 hover:text-blue-800"
            onClick={() => setShowAddNote(!showAddNote)}
          >
            {showAddNote ? 'Cancel' : 'Add Note'}
          </button>
        </div>
        
        {showAddNote && (
          <div className="mb-4 bg-gray-50 p-3 rounded-md">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Add a note about this lead..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button 
                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                onClick={handleAddNote}
                disabled={!newNote.trim()}
              >
                Save Note
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {lead.activities && lead.activities.length > 0 ? (
            lead.activities.map((activity) => (
              <div key={activity.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <div className={`
                      mt-1 mr-3 w-8 h-8 rounded-full flex items-center justify-center
                      ${activity.type === 'NOTE' ? 'bg-blue-100 text-blue-600' : 
                        activity.type === 'EMAIL' ? 'bg-purple-100 text-purple-600' :
                        activity.type === 'CALL' ? 'bg-green-100 text-green-600' :
                        activity.type === 'MEETING' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-gray-100 text-gray-600'}
                    `}>
                      {activity.type === 'NOTE' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      ) : activity.type === 'EMAIL' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : activity.type === 'CALL' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ) : activity.type === 'MEETING' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {activity.type === 'STATUS_CHANGE' ? 'Status changed' : activity.type.charAt(0) + activity.type.slice(1).toLowerCase()}
                        <span className="font-normal text-gray-500"> by {activity.createdBy.name}</span>
                      </p>
                      <p className="text-sm mt-1">{activity.content}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(activity.createdAt)}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No activity recorded yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadDetails; 