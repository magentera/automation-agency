'use client';

import React from 'react';
import PipelineVisualizer from '@/components/sales/PipelineVisualizer';

export default function PipelinePage() {
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
      { id: '3', name: 'Robert Johnson', company: 'Tech Co', value: 8000, stage: 'New Leads', assignedTo: { id: '3', name: 'Carol Williams' } },
      { id: '4', name: 'Sarah Miller', company: 'Global Inc', value: 15000, stage: 'New Leads', assignedTo: { id: '1', name: 'Alice Johnson' } },
    ],
    '2': [
      { id: '5', name: 'Michael Brown', company: 'Acme Co', value: 9000, stage: 'Contacted', assignedTo: { id: '3', name: 'Carol Williams' } },
      { id: '6', name: 'Lisa Davis', company: 'Premier Group', value: 11000, stage: 'Contacted', assignedTo: { id: '2', name: 'Bob Smith' } },
      { id: '7', name: 'James Wilson', company: 'Innovative Solutions', value: 7500, stage: 'Contacted', assignedTo: { id: '1', name: 'Alice Johnson' } },
    ],
    '3': [
      { id: '8', name: 'Emily Davis', company: 'Tech Solutions', value: 15000, stage: 'Qualified', assignedTo: { id: '1', name: 'Alice Johnson' } },
      { id: '9', name: 'Thomas Moore', company: 'Digital Experts', value: 12500, stage: 'Qualified', assignedTo: { id: '3', name: 'Carol Williams' } },
    ],
    '4': [
      { id: '10', name: 'David Wilson', company: 'Global Services', value: 8000, stage: 'Proposal', assignedTo: { id: '2', name: 'Bob Smith' } },
      { id: '11', name: 'Jennifer Taylor', company: 'Marketing Pro', value: 9500, stage: 'Proposal', assignedTo: { id: '1', name: 'Alice Johnson' } },
    ],
    '5': [
      { id: '12', name: 'Sarah Johnson', company: 'Innovative Inc', value: 20000, stage: 'Negotiation', assignedTo: { id: '3', name: 'Carol Williams' } },
    ],
    '6': [
      { id: '13', name: 'Robert Miller', company: 'Premier Group', value: 10000, stage: 'Closed Won', assignedTo: { id: '1', name: 'Alice Johnson' } },
      { id: '14', name: 'Patricia Brown', company: 'Elite Services', value: 15000, stage: 'Closed Won', assignedTo: { id: '2', name: 'Bob Smith' } },
    ],
  };

  // Calculate total pipeline value
  const totalPipelineValue = pipelineStages.reduce((total, stage) => total + stage.value, 0);
  
  // Calculate closed won value
  const closedWonValue = pipelineStages.find(stage => stage.name === 'Closed Won')?.value || 0;
  
  // Calculate conversion rate
  const totalLeads = pipelineStages.reduce((total, stage) => total + stage.count, 0);
  const closedWonCount = pipelineStages.find(stage => stage.name === 'Closed Won')?.count || 0;
  const conversionRate = totalLeads > 0 ? (closedWonCount / totalLeads) * 100 : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sales Pipeline</h1>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Export Pipeline Data
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Pipeline Overview</h2>
        <PipelineVisualizer 
          stages={pipelineStages} 
          leads={leadsByStage} 
          totalValue={totalPipelineValue}
          showLeads={true}
          maxLeadsPerStage={5}
          onStageClick={(stageId) => console.log(`Clicked stage: ${stageId}`)}
        />
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-sm text-blue-600 font-medium">Total Pipeline Value</p>
            <p className="text-2xl font-bold">${(totalPipelineValue / 1000).toFixed(1)}k</p>
          </div>
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-sm text-green-600 font-medium">Closed Won Value</p>
            <p className="text-2xl font-bold">${(closedWonValue / 1000).toFixed(1)}k</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-md">
            <p className="text-sm text-purple-600 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold">{conversionRate.toFixed(1)}%</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Leads by Stage</h2>
          <div className="space-y-4">
            {pipelineStages.map((stage) => (
              <div key={stage.id} className="border-b pb-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{stage.name}</h3>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{stage.count} leads</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Value: ${(stage.value / 1000).toFixed(1)}k</p>
                <a href={`/dashboard/sales/leads?stage=${stage.id}`} className="text-blue-600 text-sm hover:underline">
                  View all leads in this stage →
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pipeline Insights</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium">Highest Value Stage</h3>
              <p className="text-sm text-gray-600">New Leads: ${(pipelineStages[0].value / 1000).toFixed(1)}k</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-3 py-2">
              <h3 className="font-medium">Bottleneck Identified</h3>
              <p className="text-sm text-gray-600">28% drop from Qualified to Proposal stage</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3 py-2">
              <h3 className="font-medium">Top Performer</h3>
              <p className="text-sm text-gray-600">Alice Johnson: 45% of closed deals</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-3 py-2">
              <h3 className="font-medium">Average Deal Cycle</h3>
              <p className="text-sm text-gray-600">32 days from lead to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 