import React from 'react';

interface MetricsProps {
  metrics: {
    totalLeads: number;
    qualifiedLeads: number;
    proposals: number;
    negotiations: number;
    closedWon: number;
    closedLost: number;
    conversionRate: number;
    averageDealSize: number;
    totalRevenue: number;
  };
  changes: {
    totalLeads: number;
    qualifiedLeads: number;
    proposals: number;
    negotiations: number;
    closedWon: number;
    closedLost: number;
    conversionRate: number;
    averageDealSize: number;
    totalRevenue: number;
  };
}

const SalesMetrics: React.FC<MetricsProps> = ({ metrics, changes }) => {
  // Helper function to render change indicator
  const renderChange = (change: number) => {
    const isPositive = change >= 0;
    const arrow = isPositive ? '↑' : '↓';
    const colorClass = isPositive ? 'text-green-600' : 'text-red-600';
    
    return (
      <span className={`text-sm ${colorClass}`}>
        {arrow} {Math.abs(change).toFixed(1)}%
      </span>
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
            {renderChange(changes.totalLeads)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.totalLeads}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Qualified Leads</h3>
            {renderChange(changes.qualifiedLeads)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.qualifiedLeads}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Proposals</h3>
            {renderChange(changes.proposals)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.proposals}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Negotiations</h3>
            {renderChange(changes.negotiations)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.negotiations}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Closed Won</h3>
            {renderChange(changes.closedWon)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.closedWon}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Closed Lost</h3>
            {renderChange(changes.closedLost)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.closedLost}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
            {renderChange(changes.conversionRate)}
          </div>
          <p className="text-xl font-semibold mt-1">{metrics.conversionRate.toFixed(1)}%</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Avg Deal Size</h3>
            {renderChange(changes.averageDealSize)}
          </div>
          <p className="text-xl font-semibold mt-1">${metrics.averageDealSize.toLocaleString()}</p>
        </div>
        
        <div className="p-3 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            {renderChange(changes.totalRevenue)}
          </div>
          <p className="text-xl font-semibold mt-1">${metrics.totalRevenue.toLocaleString()}</p>
        </div>
      </div>
      
      {/* Sales Funnel Visualization */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Sales Funnel</h3>
        <div className="space-y-2">
          <div className="relative h-8">
            <div className="absolute inset-0 bg-blue-100 rounded-md"></div>
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-md" style={{ width: '100%' }}></div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-3 w-full">
              <span className="text-xs font-medium text-blue-900">Total Leads</span>
              <span className="text-xs font-medium text-blue-900">{metrics.totalLeads}</span>
            </div>
          </div>
          
          <div className="relative h-8">
            <div className="absolute inset-0 bg-blue-100 rounded-md"></div>
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-md" style={{ width: `${(metrics.qualifiedLeads / metrics.totalLeads) * 100}%` }}></div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-3 w-full">
              <span className="text-xs font-medium text-blue-900">Qualified</span>
              <span className="text-xs font-medium text-blue-900">{metrics.qualifiedLeads}</span>
            </div>
          </div>
          
          <div className="relative h-8">
            <div className="absolute inset-0 bg-blue-100 rounded-md"></div>
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-md" style={{ width: `${(metrics.proposals / metrics.totalLeads) * 100}%` }}></div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-3 w-full">
              <span className="text-xs font-medium text-blue-900">Proposals</span>
              <span className="text-xs font-medium text-blue-900">{metrics.proposals}</span>
            </div>
          </div>
          
          <div className="relative h-8">
            <div className="absolute inset-0 bg-blue-100 rounded-md"></div>
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-md" style={{ width: `${(metrics.negotiations / metrics.totalLeads) * 100}%` }}></div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-3 w-full">
              <span className="text-xs font-medium text-blue-900">Negotiations</span>
              <span className="text-xs font-medium text-blue-900">{metrics.negotiations}</span>
            </div>
          </div>
          
          <div className="relative h-8">
            <div className="absolute inset-0 bg-blue-100 rounded-md"></div>
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-md" style={{ width: `${(metrics.closedWon / metrics.totalLeads) * 100}%` }}></div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-3 w-full">
              <span className="text-xs font-medium text-blue-900">Closed Won</span>
              <span className="text-xs font-medium text-blue-900">{metrics.closedWon}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesMetrics; 