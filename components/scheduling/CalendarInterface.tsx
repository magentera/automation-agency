'use client'

import React, { useState } from 'react';

interface CalendarInterfaceProps {
  onDateSelect: (date: string) => void;
  selectedDate: string | null;
  disabledDates?: string[];
  minDate?: string;
  maxDate?: string;
}

const CalendarInterface: React.FC<CalendarInterfaceProps> = ({
  onDateSelect,
  selectedDate,
  disabledDates = [],
  minDate = new Date().toISOString().split('T')[0], // Today as default min date
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0], // 2 months from now as default max date
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Generate days for the current month view
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();
    
    // Total days in the month
    const daysInMonth = lastDay.getDate();
    
    // Array to hold all calendar cells
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      
      const isDisabled = 
        disabledDates.includes(dateString) || 
        date < new Date(minDate) || 
        date > new Date(maxDate) ||
        [0, 6].includes(date.getDay()); // Disable weekends (0 = Sunday, 6 = Saturday)
      
      days.push({
        day,
        date: dateString,
        isDisabled,
        isSelected: dateString === selectedDate,
        isToday: dateString === new Date().toISOString().split('T')[0],
      });
    }
    
    return days;
  };
  
  const days = generateCalendarDays();
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Format month name
  const formatMonth = () => {
    return currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  };
  
  // Handle date selection
  const handleDateClick = (dateString: string, isDisabled: boolean) => {
    if (!isDisabled) {
      onDateSelect(dateString);
    }
  };
  
  return (
    <div className="calendar-interface">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={goToPreviousMonth}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Previous month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">{formatMonth()}</h2>
        <button 
          onClick={goToNextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Next month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`
              h-10 flex items-center justify-center rounded-md text-sm
              ${!day ? 'invisible' : ''}
              ${day?.isDisabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-50'}
              ${day?.isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
              ${day?.isToday && !day.isSelected ? 'border border-blue-500' : ''}
            `}
            onClick={() => day && handleDateClick(day.date, day.isDisabled)}
          >
            {day?.day}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>• Weekend days are not available for scheduling</p>
        <p>• You can schedule calls up to 2 months in advance</p>
      </div>
    </div>
  );
};

export default CalendarInterface; 