import React from 'react';

export default function MasterclassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="masterclass-layout">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Influencer Masterclass</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/masterclass" className="hover:text-blue-300">Masterclasses</a></li>
              <li><a href="/dashboard" className="hover:text-blue-300">Dashboard</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
} 