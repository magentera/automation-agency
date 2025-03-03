'use client';

import React from 'react';
import LeadTable from '@/components/sales/LeadTable';
import PipelineVisualizer from '@/components/sales/PipelineVisualizer';
import SalesMetrics from '@/components/sales/SalesMetrics';

export default function SalesDashboardPage() {
  // Mock sales metrics data
  const salesMetrics = {
    totalLeads: 120,
    qualifiedLeads: 85,
    proposals: 42,
    negotiations: 18,
    closedWon: 12,
    closedLost: 8,
    conversionRate: 10.0,
    averageDealSize: 10000,
    totalRevenue: 120000,
  };

  // Mock changes for metrics (compared to previous period)
  const metricChanges = {
    totalLeads: 15,
    qualifiedLeads: 10,
    proposals: 5,
    negotiations: 2,
    closedWon: 3,
    closedLost: -1,
    conversionRate: 1.5,
    averageDealSize: 500,
    totalRevenue: 30000,
  };

  // Mock pipeline data
  const pipelineStages = [
    { id: '1', name: 'New Leads', count: 35, value: 350000, color: '#60A5FA' },
    { id: '2', name: 'Contacted', count: 28, value: 280000, color: '#34D399' },
    { id: '3', name: 'Qualified', count: 22, value: 220000, color: '#FBBF24' },
    { id: '4', name: 'Proposal', count: 15, value: 150000, color: '#F87171' },
    { id: '5', name: 'Negotiation', count: 8, value: 80000, color: '#A78BFA' },
    { id: '6', name: 'Closed Won', count: 12, value: 120000, color: '#10B981' },
  ];

  // Mock leads by stage
  const leadsByStage = {
    '1': [
      { id: '1', name: 'John Doe', company: 'ABC Corp', value: 10000, stage: 'New Leads', assignedTo: { id: '1', name: 'Alice Johnson' } },
      { id: '2', name: 'Jane Smith', company: 'XYZ Inc', value: 12000, stage: 'New Leads', assignedTo: { id: '2', name: 'Bob Smith' } },
    ],
    '2': [
      { id: '3', name: 'Michael Brown', company: 'Acme Co', value: 9000, stage: 'Contacted', assignedTo: { id: '3', name: 'Carol Williams' } },
    ],
    '3': [
      { id: '4', name: 'Emily Davis', company: 'Tech Solutions', value: 15000, stage: 'Qualified', assignedTo: { id: '1', name: 'Alice Johnson' } },
    ],
    '4': [
      { id: '5', name: 'David Wilson', company: 'Global Services', value: 8000, stage: 'Proposal', assignedTo: { id: '2', name: 'Bob Smith' } },
    ],
    '5': [
      { id: '6', name: 'Sarah Johnson', company: 'Innovative Inc', value: 20000, stage: 'Negotiation', assignedTo: { id: '3', name: 'Carol Williams' } },
    ],
    '6': [
      { id: '7', name: 'Robert Miller', company: 'Premier Group', value: 10000, stage: 'Closed Won', assignedTo: { id: '1', name: 'Alice Johnson' } },
    ],
  };

  // Mock recent leads with proper status types
  const recentLeads = [
    { 
      id: '1', 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '555-123-4567',
      status: 'NEW' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-15',
      company: 'ABC Corp',
      assignedTo: { id: '1', name: 'Alice Johnson' }
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      phone: '555-234-5678',
      status: 'CONTACTED' as const, 
      source: 'Referral', 
      createdAt: '2023-03-14',
      company: 'XYZ Inc',
      assignedTo: { id: '2', name: 'Bob Smith' }
    },
    { 
      id: '3', 
      name: 'Michael Brown', 
      email: 'michael.brown@example.com', 
      phone: '555-345-6789',
      status: 'QUALIFIED' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-13',
      company: 'Acme Co',
      assignedTo: { id: '3', name: 'Carol Williams' }
    },
    { 
      id: '4', 
      name: 'Emily Davis', 
      email: 'emily.davis@example.com', 
      phone: '555-456-7890',
      status: 'PROPOSAL' as const, 
      source: 'Social Media', 
      createdAt: '2023-03-12',
      company: 'Tech Solutions',
      assignedTo: { id: '1', name: 'Alice Johnson' }
    },
    { 
      id: '5', 
      name: 'David Wilson', 
      email: 'david.wilson@example.com', 
      phone: '555-567-8901',
      status: 'NEGOTIATION' as const, 
      source: 'Landing Page', 
      createdAt: '2023-03-11',
      company: 'Global Services',
      assignedTo: { id: '2', name: 'Bob Smith' }
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SalesMetrics metrics={salesMetrics} changes={metricChanges} />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Sales Pipeline</h2>
        <PipelineVisualizer 
          stages={pipelineStages} 
          leads={leadsByStage} 
          totalValue={1200000}
          showLeads={true}
          maxLeadsPerStage={3}
          onStageClick={(stageId) => console.log(`Clicked stage: ${stageId}`)}
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Leads</h2>
          <a href="/dashboard/sales/leads" className="text-blue-600 hover:underline">View All</a>
        </div>
        <LeadTable 
          leads={recentLeads} 
          onLeadSelect={(leadId) => console.log(`Selected lead: ${leadId}`)}
          showFilters={false}
          showPagination={false}
        />
      </div>
    </div>
  );
} 