'use client';

import React, { useState, useEffect } from 'react';

interface Notification {
  id: string;
  message: string;
  triggerTime: number; // in seconds
  link?: {
    text: string;
    url: string;
  };
}

interface NotificationSystemProps {
  notifications: Notification[];
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ notifications }) => {
  const [activeNotifications, setActiveNotifications] = useState<Notification[]>([]);
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  
  // Simulate video playback time progression
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Check for notifications that should be triggered
  useEffect(() => {
    const newNotifications = notifications.filter(
      notification => 
        notification.triggerTime === currentTime && 
        !activeNotifications.some(active => active.id === notification.id)
    );
    
    if (newNotifications.length > 0) {
      setActiveNotifications(prev => [...prev, ...newNotifications]);
      
      // Auto-dismiss notifications after 10 seconds
      newNotifications.forEach(notification => {
        setTimeout(() => {
          setActiveNotifications(prev => 
            prev.filter(active => active.id !== notification.id)
          );
        }, 10000);
      });
    }
  }, [currentTime, notifications, activeNotifications]);
  
  const dismissNotification = (id: string) => {
    setActiveNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };
  
  if (activeNotifications.length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-2">
      {activeNotifications.map(notification => (
        <div 
          key={notification.id}
          className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded shadow-md relative animate-fadeIn"
        >
          <button 
            onClick={() => dismissNotification(notification.id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss notification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-700">{notification.message}</p>
              {notification.link && (
                <div className="mt-2">
                  <a 
                    href={notification.link.url}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    {notification.link.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem; 