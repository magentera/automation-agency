import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Masterclass Sessions',
  description: 'Browse and join our exclusive masterclass sessions.',
};

export default function MasterclassPage() {
  // This would be fetched from an API in a real implementation
  const upcomingMasterclasses = [
    {
      id: '1',
      title: 'Building a 7-Figure Personal Brand',
      host: 'Jane Smith',
      date: '2023-04-15T18:00:00Z',
      price: '$10,000',
      spots: 20,
    },
    {
      id: '2',
      title: 'Scaling Your Influence to Multiple Platforms',
      host: 'John Doe',
      date: '2023-04-22T18:00:00Z',
      price: '$10,000',
      spots: 15,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Masterclasses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingMasterclasses.map((masterclass) => (
          <div key={masterclass.id} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{masterclass.title}</h2>
            <p className="mb-2">Host: {masterclass.host}</p>
            <p className="mb-2">Date: {new Date(masterclass.date).toLocaleString()}</p>
            <p className="mb-2">Price: {masterclass.price}</p>
            <p className="mb-4">Available Spots: {masterclass.spots}</p>
            <Link 
              href={`/masterclass/${masterclass.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
} 