'use client';

import React from 'react';

interface PaymentDetails {
  id: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  date: string;
  masterclassId: string;
  masterclassTitle: string;
  customerName: string;
  customerEmail: string;
}

interface PaymentConfirmationProps {
  payment: PaymentDetails;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({ payment }) => {
  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount / 100); // Assuming amount is in cents
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="payment-confirmation">
      <div className="border-t border-b border-gray-200 py-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 text-sm">Payment ID</p>
            <p className="font-medium">{payment.id}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Invoice Number</p>
            <p className="font-medium">{payment.invoiceNumber}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Amount</p>
            <p className="font-medium text-green-600">{formatCurrency(payment.amount, payment.currency)}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Date</p>
            <p className="font-medium">{formatDate(payment.date)}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Masterclass Details</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">{payment.masterclassTitle}</p>
          <p className="text-sm text-gray-600">You now have full access to this masterclass</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">{payment.customerName}</p>
          <p className="text-sm text-gray-600">{payment.customerEmail}</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p>Secure payment processed via Stripe</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation; 