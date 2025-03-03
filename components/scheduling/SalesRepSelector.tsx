import React from 'react';
import Image from 'next/image';

interface SalesRep {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  specialization: string;
  experience: number;
  available: boolean;
}

interface SalesRepSelectorProps {
  salesReps: SalesRep[];
  selectedSalesRep: string | null;
  onSalesRepSelect: (salesRepId: string) => void;
}

const SalesRepSelector: React.FC<SalesRepSelectorProps> = ({
  salesReps,
  selectedSalesRep,
  onSalesRepSelect,
}) => {
  return (
    <div className="sales-rep-selector">
      <h2 className="text-lg font-semibold mb-4">Select a Sales Representative</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {salesReps.map((rep) => (
          <div
            key={rep.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${!rep.available ? 'opacity-50 cursor-not-allowed' : 
                rep.id === selectedSalesRep ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}
            `}
            onClick={() => rep.available && onSalesRepSelect(rep.id)}
          >
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={rep.photoUrl}
                  alt={rep.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">{rep.name}</h3>
                <p className="text-sm text-gray-500">{rep.title}</p>
                <div className="mt-1 flex items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    {rep.specialization}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {rep.experience}+ years exp.
                  </span>
                </div>
              </div>
              
              {rep.id === selectedSalesRep && (
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            
            {!rep.available && (
              <div className="mt-2 text-xs text-red-500">
                Not available for the selected date/time
              </div>
            )}
          </div>
        ))}
      </div>
      
      {salesReps.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No sales representatives available
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>• All our sales representatives are certified masterclass consultants</p>
        <p>• You can request a specific representative if you have a preference</p>
      </div>
    </div>
  );
};

export default SalesRepSelector; 