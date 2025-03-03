import React from 'react';
import Image from 'next/image';

interface AppointmentDetails {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  salesRep: {
    id: string;
    name: string;
    title: string;
    photoUrl: string;
    email: string;
    phone: string;
  };
  lead: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  masterclass: {
    id: string;
    title: string;
  };
}

interface ConfirmationDisplayProps {
  appointment: AppointmentDetails;
}

const ConfirmationDisplay: React.FC<ConfirmationDisplayProps> = ({ appointment }) => {
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Format time from 24-hour to 12-hour format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };
  
  return (
    <div className="confirmation-display bg-white rounded-lg shadow-md p-6">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Appointment Details</h2>
        <p className="text-gray-500">Confirmation ID: {appointment.id}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Date & Time</h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{formatDate(appointment.date)}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}</span>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">Masterclass</h3>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="font-medium text-purple-800">{appointment.masterclass.title}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Sales Representative</h3>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image
                  src={appointment.salesRep.photoUrl}
                  alt={appointment.salesRep.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <p className="font-medium">{appointment.salesRep.name}</p>
                <p className="text-sm text-gray-600">{appointment.salesRep.title}</p>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{appointment.salesRep.email}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{appointment.salesRep.phone}</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">Your Information</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-medium">{appointment.lead.name}</p>
            <div className="text-sm mt-2">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{appointment.lead.email}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{appointment.lead.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDisplay; 