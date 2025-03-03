'use client';

import React, { useState, useEffect } from 'react';

interface EngagementData {
  viewerCount: number;
  questions: number;
  reactions: {
    likes: number;
    hearts: number;
    insights: number;
  };
  pollResults?: {
    question: string;
    options: {
      text: string;
      count: number;
      percentage: number;
    }[];
  };
}

interface EngagementMetricsProps {
  masterclassId: string;
}

const EngagementMetrics: React.FC<EngagementMetricsProps> = ({ masterclassId }) => {
  const [data, setData] = useState<EngagementData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [showPoll, setShowPoll] = useState(false);
  const [selectedPollOption, setSelectedPollOption] = useState<number | null>(null);
  
  // Simulate loading engagement data
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock engagement data
      const mockData: EngagementData = {
        viewerCount: 127,
        questions: 15,
        reactions: {
          likes: 78,
          hearts: 42,
          insights: 36
        },
        pollResults: {
          question: "Which topic would you like me to cover next?",
          options: [
            { text: "Content Creation Strategies", count: 45, percentage: 45 },
            { text: "Monetization Methods", count: 32, percentage: 32 },
            { text: "Building an Audience", count: 18, percentage: 18 },
            { text: "Personal Brand Design", count: 5, percentage: 5 }
          ]
        }
      };
      
      setData(mockData);
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, [masterclassId]);
  
  // Simulate updating viewer count periodically
  useEffect(() => {
    if (isLoading || !data) return;
    
    const interval = setInterval(() => {
      // Randomly increase or decrease viewer count slightly
      const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
      
      setData(prevData => {
        if (!prevData) return null;
        
        const newCount = Math.max(100, prevData.viewerCount + change);
        return {
          ...prevData,
          viewerCount: newCount
        };
      });
    }, 10000);
    
    return () => clearInterval(interval);
  }, [isLoading, data]);
  
  const handleReaction = (type: string) => {
    if (selectedReaction === type) {
      // User is un-selecting their reaction
      setSelectedReaction(null);
      
      setData(prevData => {
        if (!prevData) return null;
        
        return {
          ...prevData,
          reactions: {
            ...prevData.reactions,
            [type]: prevData.reactions[type as keyof typeof prevData.reactions] - 1
          }
        };
      });
    } else {
      // User is changing their reaction
      if (selectedReaction) {
        // Remove previous reaction
        setData(prevData => {
          if (!prevData) return null;
          
          return {
            ...prevData,
            reactions: {
              ...prevData.reactions,
              [selectedReaction]: prevData.reactions[selectedReaction as keyof typeof prevData.reactions] - 1
            }
          };
        });
      }
      
      // Add new reaction
      setSelectedReaction(type);
      
      setData(prevData => {
        if (!prevData) return null;
        
        return {
          ...prevData,
          reactions: {
            ...prevData.reactions,
            [type]: prevData.reactions[type as keyof typeof prevData.reactions] + 1
          }
        };
      });
    }
  };
  
  const handlePollVote = (index: number) => {
    if (selectedPollOption !== null) return; // Already voted
    
    setSelectedPollOption(index);
    
    setData(prevData => {
      if (!prevData || !prevData.pollResults) return prevData;
      
      const updatedOptions = prevData.pollResults.options.map((option, i) => {
        if (i === index) {
          const newCount = option.count + 1;
          return { ...option, count: newCount };
        }
        return option;
      });
      
      // Recalculate percentages
      const totalVotes = updatedOptions.reduce((sum, option) => sum + option.count, 0);
      const optionsWithUpdatedPercentages = updatedOptions.map(option => ({
        ...option,
        percentage: Math.round((option.count / totalVotes) * 100)
      }));
      
      return {
        ...prevData,
        pollResults: {
          ...prevData.pollResults,
          options: optionsWithUpdatedPercentages
        }
      };
    });
  };
  
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  
  if (!data) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-500 text-center">Unable to load engagement metrics.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3">
        <h2 className="font-semibold">Engagement</h2>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">{data.viewerCount} viewers</span>
          </div>
          <div className="text-sm text-gray-500">
            {data.questions} questions
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">React to this masterclass:</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleReaction('likes')}
              className={`flex flex-col items-center ${selectedReaction === 'likes' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="text-xs mt-1">{data.reactions.likes}</span>
            </button>
            <button 
              onClick={() => handleReaction('hearts')}
              className={`flex flex-col items-center ${selectedReaction === 'hearts' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs mt-1">{data.reactions.hearts}</span>
            </button>
            <button 
              onClick={() => handleReaction('insights')}
              className={`flex flex-col items-center ${selectedReaction === 'insights' ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-xs mt-1">{data.reactions.insights}</span>
            </button>
          </div>
        </div>
        
        {data.pollResults && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-700">Poll:</h3>
              <button 
                onClick={() => setShowPoll(!showPoll)}
                className="text-xs text-blue-600 hover:underline"
              >
                {showPoll ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {showPoll && (
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm font-medium mb-3">{data.pollResults.question}</p>
                <div className="space-y-2">
                  {data.pollResults.options.map((option, index) => (
                    <div key={index} className="relative">
                      <div 
                        className={`
                          p-2 rounded-md border text-sm relative z-10 
                          ${selectedPollOption === index ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200 hover:border-gray-300 cursor-pointer'}
                        `}
                        onClick={() => handlePollVote(index)}
                      >
                        <div className="flex justify-between">
                          <span>{option.text}</span>
                          <span className="font-medium">{option.percentage}%</span>
                        </div>
                      </div>
                      <div 
                        className="absolute top-0 left-0 h-full bg-blue-100 rounded-md"
                        style={{ width: `${option.percentage}%`, opacity: 0.5, zIndex: 0 }}
                      ></div>
                    </div>
                  ))}
                </div>
                {selectedPollOption !== null && (
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Thank you for your vote!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EngagementMetrics; 