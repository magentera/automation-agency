import React from 'react';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing-layout">
      {/* Landing page specific layout elements can go here */}
      {children}
    </div>
  );
} 