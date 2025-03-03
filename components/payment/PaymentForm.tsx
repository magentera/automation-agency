'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PaymentDetails {
  masterclassId: string;
  masterclassTitle: string;
  amount: number;
  currency: string;
  invoiceNumber: string;
}

interface PaymentFormProps {
  paymentDetails: PaymentDetails;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentDetails }) => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  });

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount / 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');
    
    try {
      // In a real implementation, this would send the data to a payment processor like Stripe
      // await fetch('/api/process-payment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...cardDetails,
      //     amount: paymentDetails.amount,
      //     currency: paymentDetails.currency,
      //     invoiceNumber: paymentDetails.invoiceNumber,
      //     masterclassId: paymentDetails.masterclassId,
      //   })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to confirmation page
      router.push(`/payment/confirmation?paymentId=pay_${Date.now()}&invoiceId=${paymentDetails.invoiceNumber}`);
    } catch (err) {
      setError('There was an error processing your payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Payment Summary</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Masterclass:</span>
            <span className="font-medium">{paymentDetails.masterclassTitle}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Invoice Number:</span>
            <span className="font-medium">{paymentDetails.invoiceNumber}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Amount:</span>
            <span className="font-bold text-lg">{formatCurrency(paymentDetails.amount, paymentDetails.currency)}</span>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        
        <div className="mb-4">
          <label htmlFor="cardholderName" className="block text-gray-700 font-medium mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={cardDetails.cardholderName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{13,19}"
            maxLength={19}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="4242 4242 4242 4242"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              required
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              maxLength={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="MM/YY"
            />
          </div>
          
          <div>
            <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              required
              pattern="[0-9]{3,4}"
              maxLength={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="123"
            />
          </div>
        </div>
        
        <div className="flex items-center mb-6">
          <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-600 text-sm">
            Your payment is secured with SSL encryption. We do not store your card details.
          </span>
        </div>
        
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isProcessing ? 'Processing...' : `Pay ${formatCurrency(paymentDetails.amount, paymentDetails.currency)}`}
        </button>
        
        <p className="text-sm text-gray-600 mt-4 text-center">
          By completing this payment, you agree to our{' '}
          <Link href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PaymentForm; 