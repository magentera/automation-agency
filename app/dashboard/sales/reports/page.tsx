'use client';

import React from 'react';
import SalesMetrics from '@/components/sales/SalesMetrics';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function SalesReportsPage() {
  // Mock sales metrics data
  const salesMetrics = {
    totalLeads: 245,
    qualifiedLeads: 128,
    proposals: 76,
    negotiations: 42,
    closedWon: 28,
    closedLost: 14,
    conversionRate: 11.4,
    averageDealSize: 8750,
    totalRevenue: 245000
  };

  // Mock changes for metrics compared to previous period
  const metricChanges = {
    totalLeads: 12.5,
    qualifiedLeads: 8.3,
    proposals: 15.2,
    negotiations: -3.1,
    closedWon: 22.7,
    closedLost: -8.4,
    conversionRate: 1.2,
    averageDealSize: 5.8,
    totalRevenue: 18.3
  };

  // Mock data for sales rep performance
  const salesRepPerformance = [
    { name: 'Alice Johnson', deals: 12, revenue: 105000, conversionRate: 14.2 },
    { name: 'Bob Smith', deals: 8, revenue: 72000, conversionRate: 10.8 },
    { name: 'Carol Williams', deals: 5, revenue: 43500, conversionRate: 8.9 },
    { name: 'David Brown', deals: 3, revenue: 24500, conversionRate: 7.5 },
  ];

  // Mock data for monthly revenue
  const monthlyRevenue = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [65000, 59000, 80000, 81000, 56000, 85000],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Target',
        data: [70000, 70000, 75000, 75000, 80000, 80000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sales Reports</h1>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2">
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="thisYear">This Year</option>
            <option value="lastYear">Last Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <SalesMetrics metrics={salesMetrics} changes={metricChanges} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <Bar options={chartOptions} data={monthlyRevenue} />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Rep Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales Rep
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deals Closed
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversion Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salesRepPerformance.map((rep, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{rep.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{rep.deals}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${rep.revenue.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{rep.conversionRate}%</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 