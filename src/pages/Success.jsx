import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { cardNumber, plan } = location.state || {};

  return (
    <div className="relative text-white bg-black min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full w-16 h-16 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-afacad-flux font-semibold mb-6">
          Application Submitted Successfully!
        </h1>
        
        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-xl mb-4">Your Card Number</h2>
          <p className="text-2xl font-mono text-purple-400">{cardNumber}</p>
        </div>
        
        {plan && (
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl mb-4">Selected Plan</h2>
            <p className="text-lg text-purple-400">{plan.title}</p>
            <p className="text-gray-400">Coverage: {plan.coverage}</p>
          </div>
        )}
        
        <p className="text-gray-300 mb-8">
          Thank you for choosing our health insurance services. We will review your
          application and contact you within 2-3 business days.
        </p>
        
        <div className="space-x-4">
          <Link
            to="/profile"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Application Status
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;