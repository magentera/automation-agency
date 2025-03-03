import React from 'react';
import PaymentConfirmation from '@/components/payment/PaymentConfirmation';
import Link from 'next/link';

export const metadata = {
  title: 'Payment Confirmation | Influencer Masterclass',
  description: 'Your payment has been successfully processed.',
};

export default function PaymentConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // In a real implementation, we would verify the payment using the payment ID
  // and fetch the payment details from the database
  const paymentId = searchParams.paymentId as string;
  const invoiceId = searchParams.invoiceId as string;

  // Mock payment details
  const paymentDetails = {
    id: paymentId || 'pay_123456789',
    invoiceNumber: invoiceId ? `INV-2023-${invoiceId}` : 'INV-2023-001',
    amount: 10000,
    currency: 'USD',
    date: new Date().toISOString(),
    masterclassId: '1',
    masterclassTitle: 'Building a 7-Figure Personal Brand',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-gray-600">Thank you for your payment. Your transaction has been completed successfully.</p>
        </div>
        
        <PaymentConfirmation payment={paymentDetails} />
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={`/masterclass/${paymentDetails.masterclassId}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-center"
          >
            Go to Masterclass
          </Link>
          <Link 
            href="/dashboard"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 text-center"
          >
            View Dashboard
          </Link>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        <p>A receipt has been sent to your email address.</p>
        <p className="mt-2">If you have any questions, please contact our support team at support@influencermasterclass.com</p>
      </div>
    </div>
  );
} 