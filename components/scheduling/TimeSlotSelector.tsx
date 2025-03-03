import React from 'react';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

interface TimeSlotSelectorProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: string | null;
  onTimeSlotSelect: (timeSlotId: string) => void;
  selectedDate: string | null;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  timeSlots,
  selectedTimeSlot,
  onTimeSlotSelect,
  selectedDate,
}) => {
  // Format time from 24-hour to 12-hour format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Group time slots into morning, afternoon, and evening
  const groupedTimeSlots = timeSlots.reduce((acc, slot) => {
    const hour = parseInt(slot.startTime.split(':')[0], 10);
    
    if (hour < 12) {
      acc.morning.push(slot);
    } else if (hour < 17) {
      acc.afternoon.push(slot);
    } else {
      acc.evening.push(slot);
    }
    
    return acc;
  }, { morning: [] as TimeSlot[], afternoon: [] as TimeSlot[], evening: [] as TimeSlot[] });

  // Render a group of time slots
  const renderTimeSlotGroup = (title: string, slots: TimeSlot[]) => {
    if (slots.length === 0) return null;
    
    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {slots.map((slot) => (
            <button
              key={slot.id}
              className={`
                py-2 px-3 rounded-md text-sm font-medium
                ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 
                  slot.id === selectedTimeSlot ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50'}
              `}
              onClick={() => slot.available && onTimeSlotSelect(slot.id)}
              disabled={!slot.available}
            >
              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="time-slot-selector">
      {!selectedDate ? (
        <div className="text-center py-8 text-gray-500">
          Please select a date to view available time slots
        </div>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-4">Available Time Slots for {selectedDate}</h2>
          
          {timeSlots.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No time slots available for the selected date
            </div>
          ) : (
            <>
              {renderTimeSlotGroup('Morning', groupedTimeSlots.morning)}
              {renderTimeSlotGroup('Afternoon', groupedTimeSlots.afternoon)}
              {renderTimeSlotGroup('Evening', groupedTimeSlots.evening)}
              
              <div className="mt-4 text-xs text-gray-500">
                <p>• All times are displayed in your local timezone</p>
                <p>• Calls are scheduled for 30 minutes</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TimeSlotSelector; 