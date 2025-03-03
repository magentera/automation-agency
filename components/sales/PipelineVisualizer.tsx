import React from 'react';
import Link from 'next/link';

interface PipelineStage {
  id: string;
  name: string;
  count: number;
  value: number;
  color: string;
}

interface Lead {
  id: string;
  name: string;
  company?: string;
  value: number;
  stage: string;
  assignedTo?: {
    id: string;
    name: string;
  };
}

interface PipelineVisualizerProps {
  stages: PipelineStage[];
  leads: Record<string, Lead[]>;
  totalValue: number;
  showLeads?: boolean;
  maxLeadsPerStage?: number;
  onStageClick?: (stageId: string) => void;
}

const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({
  stages,
  leads,
  totalValue,
  showLeads = true,
  maxLeadsPerStage = 3,
  onStageClick,
}) => {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  // Calculate percentage of total value
  const calculatePercentage = (value: number) => {
    if (totalValue === 0) return 0;
    return (value / totalValue) * 100;
  };
  
  return (
    <div className="pipeline-visualizer">
      <div className="flex flex-col space-y-6">
        {/* Pipeline Funnel Visualization */}
        <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
          {stages.map((stage, index) => {
            const percentage = calculatePercentage(stage.value);
            const previousStagesWidth = stages
              .slice(0, index)
              .reduce((sum, s) => sum + calculatePercentage(s.value), 0);
            
            return (
              <div
                key={stage.id}
                className={`absolute h-full ${stage.color}`}
                style={{
                  left: `${previousStagesWidth}%`,
                  width: `${percentage}%`,
                }}
                onClick={() => onStageClick && onStageClick(stage.id)}
              >
                <div className="h-full flex flex-col justify-center items-center text-white">
                  <span className="font-medium text-xs md:text-sm truncate px-2">
                    {stage.name}
                  </span>
                  <span className="text-xs">
                    {stage.count > 0 ? `${stage.count}` : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {stages.map((stage) => (
            <div 
              key={stage.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div 
                className={`${stage.color} px-4 py-2 text-white`}
                onClick={() => onStageClick && onStageClick(stage.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{stage.name}</h3>
                  <span className="text-sm">{stage.count}</span>
                </div>
                <p className="text-sm">{formatCurrency(stage.value)}</p>
              </div>
              
              {showLeads && leads[stage.id] && (
                <div className="p-2">
                  {leads[stage.id].slice(0, maxLeadsPerStage).map((lead) => (
                    <Link 
                      key={lead.id}
                      href={`/dashboard/sales/leads?leadId=${lead.id}`}
                      className="block p-2 hover:bg-gray-50 rounded-md"
                    >
                      <div className="font-medium text-sm text-gray-900 truncate">
                        {lead.name}
                      </div>
                      {lead.company && (
                        <div className="text-xs text-gray-500 truncate">
                          {lead.company}
                        </div>
                      )}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">
                          {lead.assignedTo?.name || 'Unassigned'}
                        </span>
                        <span className="text-xs font-medium text-gray-900">
                          {formatCurrency(lead.value)}
                        </span>
                      </div>
                    </Link>
                  ))}
                  
                  {leads[stage.id].length > maxLeadsPerStage && (
                    <Link 
                      href={`/dashboard/sales/pipeline?stage=${stage.id}`}
                      className="block text-center text-xs text-blue-600 hover:text-blue-800 mt-2"
                    >
                      View all {leads[stage.id].length} leads
                    </Link>
                  )}
                  
                  {leads[stage.id].length === 0 && (
                    <div className="text-center py-4 text-sm text-gray-500">
                      No leads in this stage
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Pipeline Summary */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Pipeline Value</h3>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Average Deal Size</h3>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(
                totalValue / 
                Object.values(leads).reduce((sum, stageLeads) => sum + stageLeads.length, 0) || 0
              )}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Deals</h3>
            <p className="text-2xl font-bold text-gray-900">
              {Object.values(leads).reduce((sum, stageLeads) => sum + stageLeads.length, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineVisualizer; 