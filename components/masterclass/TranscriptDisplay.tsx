'use client';

import React, { useState, useEffect } from 'react';

interface TranscriptSegment {
  id: string;
  speaker: string;
  content: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
}

interface TranscriptDisplayProps {
  masterclassId: string;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ masterclassId }) => {
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Simulate video playback time progression
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Simulate loading transcript data
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock transcript data
      const mockTranscript: TranscriptSegment[] = [
        {
          id: '1',
          speaker: 'Jane Smith',
          content: 'Welcome everyone to our masterclass on building a 7-figure personal brand. I\'m excited to share my journey and strategies with you today.',
          startTime: 0,
          endTime: 10
        },
        {
          id: '2',
          speaker: 'Jane Smith',
          content: 'Before we dive in, I want to emphasize that building a personal brand takes time and consistency. There\'s no overnight success in this field.',
          startTime: 11,
          endTime: 20
        },
        {
          id: '3',
          speaker: 'Jane Smith',
          content: 'Let\'s start by defining what a personal brand actually is. It\'s not just your logo or your website design.',
          startTime: 21,
          endTime: 30
        },
        {
          id: '4',
          speaker: 'Jane Smith',
          content: 'Your personal brand is the unique combination of skills, experiences, and personality that you want the world to see. It\'s the telling of your story.',
          startTime: 31,
          endTime: 45
        },
        {
          id: '5',
          speaker: 'Jane Smith',
          content: 'The first step in building your personal brand is identifying your unique value proposition. What makes you different from others in your field?',
          startTime: 46,
          endTime: 60
        },
        {
          id: '6',
          speaker: 'Jane Smith',
          content: 'Ask yourself: What problems do I solve? Who do I serve? What unique perspective do I bring to the table?',
          startTime: 61,
          endTime: 75
        },
        {
          id: '7',
          speaker: 'Jane Smith',
          content: 'Once you\'ve identified your unique value proposition, you need to create content that showcases your expertise and personality.',
          startTime: 76,
          endTime: 90
        },
        {
          id: '8',
          speaker: 'Jane Smith',
          content: 'Consistency is key here. You need to show up regularly and provide value to your audience.',
          startTime: 91,
          endTime: 100
        },
        {
          id: '9',
          speaker: 'Jane Smith',
          content: 'Now let\'s talk about monetization strategies. There are multiple ways to monetize your personal brand.',
          startTime: 101,
          endTime: 110
        },
        {
          id: '10',
          speaker: 'Jane Smith',
          content: 'These include digital products, coaching services, speaking engagements, brand partnerships, and more.',
          startTime: 111,
          endTime: 120
        },
      ];
      
      setTranscript(mockTranscript);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [masterclassId]);
  
  // Get current transcript segment based on video time
  const getCurrentSegment = () => {
    return transcript.find(segment => 
      currentTime >= segment.startTime && currentTime <= segment.endTime
    );
  };
  
  // Filter transcript based on search query
  const filteredTranscript = searchQuery
    ? transcript.filter(segment => 
        segment.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : transcript;
  
  // Format time from seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Jump to specific time in the video (would integrate with video player in real implementation)
  const jumpToTime = (time: number) => {
    setCurrentTime(time);
    console.log(`Jumping to ${formatTime(time)}`);
    // In a real implementation, this would control the video player
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <h2 className="font-semibold">Transcript</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white focus:outline-none"
          aria-label={isExpanded ? "Collapse transcript" : "Expand transcript"}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4">
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transcript..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="h-64 overflow-y-auto">
              {filteredTranscript.length > 0 ? (
                <div className="space-y-4">
                  {filteredTranscript.map((segment) => (
                    <div 
                      key={segment.id} 
                      className={`p-2 rounded ${getCurrentSegment()?.id === segment.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{segment.speaker}</span>
                        <button
                          onClick={() => jumpToTime(segment.startTime)}
                          className="text-blue-600 text-xs hover:underline"
                        >
                          {formatTime(segment.startTime)}
                        </button>
                      </div>
                      <p className="text-gray-700">{segment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {!isExpanded && !isLoading && (
        <div className="p-4 border-t">
          <div className="text-sm text-gray-600 mb-2">
            Current segment:
          </div>
          {getCurrentSegment() ? (
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">{getCurrentSegment()?.speaker}</span>
                <span className="text-gray-500 text-xs">
                  {formatTime(getCurrentSegment()?.startTime || 0)}
                </span>
              </div>
              <p className="text-gray-700">{getCurrentSegment()?.content}</p>
            </div>
          ) : (
            <p className="text-gray-500 italic">No transcript available for current time.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TranscriptDisplay; 