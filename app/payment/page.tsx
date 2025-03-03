import React from 'react';
import PaymentForm from '@/components/payment/PaymentForm';

export const metadata = {
  title: 'Payment | Influencer Masterclass',
  description: 'Secure payment processing for your masterclass registration.',
};

export default function PaymentPage() {
  // This would be fetched from an API or query parameters in a real implementation
  const paymentDetails = {
    masterclassId: '1',
    masterclassTitle: 'Building a 7-Figure Personal Brand',
    amount: 10000,
    currency: 'USD',
    invoiceNumber: 'INV-2023-001',
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>
      <PaymentForm paymentDetails={paymentDetails} />
    </div>
  );
} 