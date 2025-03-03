import React from 'react';
import InvoiceDisplay from '@/components/payment/InvoiceDisplay';
import Link from 'next/link';

type InvoicePageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: InvoicePageProps) {
  return {
    title: `Invoice #${params.id} | Influencer Masterclass`,
    description: 'View and pay your invoice for the Influencer Masterclass.',
  };
}

export default function InvoicePage({ params }: InvoicePageProps) {
  const { id } = params;

  // This would be fetched from an API in a real implementation
  const invoice = {
    id,
    invoiceNumber: `INV-2023-${id}`,
    date: new Date().toISOString(),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    customerAddress: '123 Main St\nAnytown, CA 12345\nUnited States',
    items: [
      {
        id: '1',
        description: 'Building a 7-Figure Personal Brand Masterclass',
        quantity: 1,
        unitPrice: 10000,
        total: 10000,
      }
    ],
    subtotal: 10000,
    tax: 0,
    total: 10000,
    currency: 'USD',
    status: 'PENDING' as const,
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-800 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
      
      <InvoiceDisplay invoice={invoice} />
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Need help? Contact our support team at <a href="mailto:support@example.com" className="text-indigo-600">support@example.com</a>
        </p>
      </div>
    </div>
  );
} 