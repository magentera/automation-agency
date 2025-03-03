import React from 'react';
import Link from 'next/link';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface InvoiceDetails {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  customerName: string;
  customerEmail: string;
  customerAddress?: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  currency: string;
  status: 'PENDING' | 'PAID' | 'OVERDUE' | 'CANCELLED';
}

interface InvoiceDisplayProps {
  invoice: InvoiceDetails;
}

const InvoiceDisplay: React.FC<InvoiceDisplayProps> = ({ invoice }) => {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'OVERDUE':
        return 'bg-red-100 text-red-800';
      case 'CANCELLED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Invoice</h1>
          <p className="text-gray-600">#{invoice.invoiceNumber}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(invoice.status)}`}>
            {invoice.status}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
          <p className="font-medium">{invoice.customerName}</p>
          <p className="text-gray-600">{invoice.customerEmail}</p>
          {invoice.customerAddress && (
            <p className="text-gray-600 whitespace-pre-line">{invoice.customerAddress}</p>
          )}
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Invoice Date:</p>
              <p className="font-medium">{formatDate(invoice.date)}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Due Date:</p>
              <p className="font-medium">{formatDate(invoice.dueDate)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2">Description</th>
              <th className="text-center py-3 px-2">Quantity</th>
              <th className="text-right py-3 px-2">Unit Price</th>
              <th className="text-right py-3 px-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-3 px-2">{item.description}</td>
                <td className="text-center py-3 px-2">{item.quantity}</td>
                <td className="text-right py-3 px-2">{formatCurrency(item.unitPrice, invoice.currency)}</td>
                <td className="text-right py-3 px-2">{formatCurrency(item.total, invoice.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-end mb-8">
        <div className="w-full md:w-1/3">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal:</span>
            <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Tax:</span>
            <span>{formatCurrency(invoice.tax, invoice.currency)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-lg">
            <span>Total:</span>
            <span>{formatCurrency(invoice.total, invoice.currency)}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              Questions? Contact us at <a href="mailto:support@example.com" className="text-indigo-600">support@example.com</a>
            </p>
          </div>
          
          {invoice.status === 'PENDING' && (
            <Link 
              href={`/payment?invoiceId=${invoice.id}`}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Pay Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceDisplay; 