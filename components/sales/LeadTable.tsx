import React, { useState } from 'react';
import Link from 'next/link';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';
  source: string;
  assignedTo?: {
    id: string;
    name: string;
  };
  masterclass?: {
    id: string;
    title: string;
  };
  createdAt: string;
  lastContactedAt?: string;
}

interface LeadTableProps {
  leads: Lead[];
  onLeadSelect?: (leadId: string) => void;
  selectedLeadId?: string;
  showFilters?: boolean;
  showPagination?: boolean;
  isLoading?: boolean;
}

const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  onLeadSelect,
  selectedLeadId,
  showFilters = true,
  showPagination = true,
  isLoading = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [sortField, setSortField] = useState<keyof Lead>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Status badge color mapping
  const statusColors = {
    NEW: 'bg-blue-100 text-blue-800',
    CONTACTED: 'bg-purple-100 text-purple-800',
    QUALIFIED: 'bg-indigo-100 text-indigo-800',
    PROPOSAL: 'bg-yellow-100 text-yellow-800',
    NEGOTIATION: 'bg-orange-100 text-orange-800',
    CLOSED_WON: 'bg-green-100 text-green-800',
    CLOSED_LOST: 'bg-red-100 text-red-800',
  };
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Handle sort change
  const handleSort = (field: keyof Lead) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Filter and sort leads
  const filteredAndSortedLeads = leads
    .filter(lead => {
      // Apply search filter
      const searchMatch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Apply status filter
      const statusMatch = statusFilter === 'ALL' || lead.status === statusFilter;
      
      return searchMatch && statusMatch;
    })
    .sort((a, b) => {
      // Handle different field types
      if (sortField === 'createdAt' || sortField === 'lastContactedAt') {
        const dateA = new Date(a[sortField] || '').getTime();
        const dateB = new Date(b[sortField] || '').getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
      
      // String comparison
      const valueA = String(a[sortField] || '').toLowerCase();
      const valueB = String(b[sortField] || '').toLowerCase();
      
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  
  // Render sort indicator
  const renderSortIndicator = (field: keyof Lead) => {
    if (field !== sortField) return null;
    
    return (
      <span className="ml-1">
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };
  
  return (
    <div className="lead-table">
      {showFilters && (
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex-1 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <select
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="QUALIFIED">Qualified</option>
              <option value="PROPOSAL">Proposal</option>
              <option value="NEGOTIATION">Negotiation</option>
              <option value="CLOSED_WON">Closed Won</option>
              <option value="CLOSED_LOST">Closed Lost</option>
            </select>
            
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add Lead
            </button>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name {renderSortIndicator('name')}
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('email')}
              >
                Contact {renderSortIndicator('email')}
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('status')}
              >
                Status {renderSortIndicator('status')}
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('source')}
              >
                Source {renderSortIndicator('source')}
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('createdAt')}
              >
                Created {renderSortIndicator('createdAt')}
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                  Loading leads...
                </td>
              </tr>
            ) : filteredAndSortedLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                  No leads found
                </td>
              </tr>
            ) : (
              filteredAndSortedLeads.map((lead) => (
                <tr 
                  key={lead.id} 
                  className={`hover:bg-gray-50 ${lead.id === selectedLeadId ? 'bg-blue-50' : ''}`}
                  onClick={() => onLeadSelect && onLeadSelect(lead.id)}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    {lead.company && (
                      <div className="text-sm text-gray-500">{lead.company}</div>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.phone}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[lead.status]}`}>
                      {lead.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {lead.source}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(lead.createdAt)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/dashboard/sales/leads?leadId=${lead.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                      View
                    </Link>
                    <Link href={`/scheduling?leadId=${lead.id}`} className="text-green-600 hover:text-green-900">
                      Schedule
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {showPagination && filteredAndSortedLeads.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredAndSortedLeads.length}</span> of{' '}
            <span className="font-medium">{leads.length}</span> leads
          </div>
          
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadTable; 