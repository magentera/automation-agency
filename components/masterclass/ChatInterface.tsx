'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    isHost: boolean;
    photoUrl?: string;
  };
  content: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  masterclassId: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ masterclassId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Mock user data
  const currentUser = {
    id: 'user-1',
    name: 'You',
    isHost: false,
    photoUrl: '/images/default-avatar.jpg'
  };
  
  // Simulate loading chat history
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock chat history
      const mockMessages: Message[] = [
        {
          id: '1',
          sender: {
            id: 'host-1',
            name: 'Jane Smith',
            isHost: true,
            photoUrl: '/images/jane-smith.jpg'
          },
          content: 'Welcome everyone to the masterclass! We\'ll be starting in a few minutes.',
          timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString()
        },
        {
          id: '2',
          sender: {
            id: 'user-2',
            name: 'Michael Brown',
            isHost: false,
            photoUrl: '/images/michael-brown.jpg'
          },
          content: 'Looking forward to learning about personal branding!',
          timestamp: new Date(Date.now() - 1000 * 60 * 14).toISOString()
        },
        {
          id: '3',
          sender: {
            id: 'user-3',
            name: 'Sarah Johnson',
            isHost: false,
            photoUrl: '/images/sarah-johnson.jpg'
          },
          content: 'Is there a workbook for this masterclass?',
          timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString()
        },
        {
          id: '4',
          sender: {
            id: 'host-1',
            name: 'Jane Smith',
            isHost: true,
            photoUrl: '/images/jane-smith.jpg'
          },
          content: 'Yes, Sarah! You can download the workbook from the resources section below the video.',
          timestamp: new Date(Date.now() - 1000 * 60 * 9).toISOString()
        },
        {
          id: '5',
          sender: {
            id: 'user-4',
            name: 'David Wilson',
            isHost: false,
            photoUrl: '/images/david-wilson.jpg'
          },
          content: 'I\'m having trouble with the audio. Anyone else?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
        },
        {
          id: '6',
          sender: {
            id: 'user-5',
            name: 'Emily Davis',
            isHost: false,
            photoUrl: '/images/emily-davis.jpg'
          },
          content: 'Audio is working fine for me, David. Try refreshing the page.',
          timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString()
        },
      ];
      
      setMessages(mockMessages);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [masterclassId]);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Simulate receiving new messages periodically
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      // 20% chance of receiving a new message
      if (Math.random() < 0.2) {
        const mockUsers = [
          {
            id: 'user-2',
            name: 'Michael Brown',
            isHost: false,
            photoUrl: '/images/michael-brown.jpg'
          },
          {
            id: 'user-3',
            name: 'Sarah Johnson',
            isHost: false,
            photoUrl: '/images/sarah-johnson.jpg'
          },
          {
            id: 'user-4',
            name: 'David Wilson',
            isHost: false,
            photoUrl: '/images/david-wilson.jpg'
          },
          {
            id: 'user-5',
            name: 'Emily Davis',
            isHost: false,
            photoUrl: '/images/emily-davis.jpg'
          },
          {
            id: 'host-1',
            name: 'Jane Smith',
            isHost: true,
            photoUrl: '/images/jane-smith.jpg'
          }
        ];
        
        const mockMessages = [
          'This is really insightful!',
          'Could you explain that last point again?',
          'I\'ve been implementing this strategy for a month now and seeing great results.',
          'What tools do you recommend for content creation?',
          'How often should we post on social media?',
          'Thanks for sharing that tip!',
          'I\'m taking so many notes right now.',
          'Will this recording be available after the masterclass?',
          'Remember everyone, consistency is key for building your brand.',
          'Make sure to engage with your audience regularly!'
        ];
        
        const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
        const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)];
        
        const newMsg: Message = {
          id: `msg-${Date.now()}`,
          sender: randomUser,
          content: randomMessage,
          timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, newMsg]);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLoading, masterclassId]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: `msg-${Date.now()}`,
      sender: currentUser,
      content: newMessage.trim(),
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };
  
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3">
        <h2 className="font-semibold">Live Chat</h2>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                      {message.sender.photoUrl ? (
                        <img 
                          src={message.sender.photoUrl} 
                          alt={message.sender.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                          {message.sender.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <span className="font-medium mr-2">
                        {message.sender.name}
                        {message.sender.isHost && (
                          <span className="ml-1 text-xs bg-blue-600 text-white px-1 py-0.5 rounded">Host</span>
                        )}
                      </span>
                      <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-gray-800">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t p-2">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface; 