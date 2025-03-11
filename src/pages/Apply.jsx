import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Apply = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [checkoutDetails, setCheckoutDetails] = useState({
    preExistingConditions: false,
    familySize: 1,
    primaryHolder: '',
    annualIncome: '',
    occupation: '',
    hasExistingInsurance: false,
    preferredHospital: '',
    medicalHistory: '',
    paymentFrequency: 'monthly',
    nomineeDetails: ''
  });

  // Generate a 14-digit unique card number
  const generateCardNumber = () => {
    const timestamp = Date.now().toString().slice(-10);
    const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return timestamp + random;
  };

  useEffect(() => {
    setCardNumber(generateCardNumber());
  }, []);

  const healthCheckouts = [
    {
      id: 1,
      name: "Basic Health Coverage",
      premium: "₹2,000/month",
      coverage: "₹3 lakhs",
      waitingPeriod: "30 days"
    },
    {
      id: 2,
      name: "Standard Health Plan",
      premium: "₹3,500/month",
      coverage: "₹5 lakhs",
      waitingPeriod: "15 days"
    },
    {
      id: 3,
      name: "Premium Health Coverage",
      premium: "₹5,000/month",
      coverage: "₹10 lakhs",
      waitingPeriod: "No waiting period"
    },
    {
      id: 4,
      name: "Family Floater Plan",
      premium: "₹6,000/month",
      coverage: "₹15 lakhs",
      waitingPeriod: "30 days"
    },
    {
      id: 5,
      name: "Senior Citizen Special",
      premium: "₹4,500/month",
      coverage: "₹7 lakhs",
      waitingPeriod: "60 days"
    },
    {
      id: 6,
      name: "Critical Illness Cover",
      premium: "₹3,000/month",
      coverage: "₹8 lakhs",
      waitingPeriod: "90 days"
    },
    {
      id: 7,
      name: "Super Top-up",
      premium: "₹2,500/month",
      coverage: "₹20 lakhs",
      waitingPeriod: "30 days"
    },
    {
      id: 8,
      name: "Accident Coverage Plus",
      premium: "₹1,500/month",
      coverage: "₹5 lakhs",
      waitingPeriod: "No waiting period"
    },
    {
      id: 9,
      name: "Complete Health Shield",
      premium: "₹7,000/month",
      coverage: "₹25 lakhs",
      waitingPeriod: "15 days"
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleInputChange = (e) => {
    setCheckoutDetails({
      ...checkoutDetails,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically submit the data to your backend
    const applicationData = {
      cardNumber,
      selectedPlan,
      checkoutDetails,
      applicationDate: new Date().toISOString()
    };
    console.log('Application submitted:', applicationData);
    // Navigate to success page or show confirmation
    navigate('/success', { state: { cardNumber, plan: selectedPlan } });
  };

  return (
    <div className="relative text-white bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-afacad-flux font-semibold text-center mb-12">
          Health Insurance Application
        </h1>
        
        {/* Plan Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {healthCheckouts.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                selectedPlan?.id === plan.id
                  ? 'border-purple-500 bg-purple-900/20'
                  : 'border-gray-700 hover:border-purple-500'
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-green-400 mb-2">Premium: {plan.premium}</p>
              <p className="text-blue-400 mb-2">Coverage: {plan.coverage}</p>
              <p className="text-gray-400">Waiting Period: {plan.waitingPeriod}</p>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold mb-4">Your Unique Card Number</h2>
              <p className="text-2xl font-mono text-purple-400">{cardNumber}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="primaryHolder"
                placeholder="Primary Holder Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                required
              />
              
              <input
                type="number"
                name="annualIncome"
                placeholder="Annual Income"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                required
              />

              <input
                type="number"
                name="familySize"
                placeholder="Family Size"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="preferredHospital"
                placeholder="Preferred Hospital"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="nomineeDetails"
                placeholder="Nominee Details"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                required
              />

              <textarea
                name="medicalHistory"
                placeholder="Brief Medical History"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                onChange={handleInputChange}
                rows="3"
              />

              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="preExistingConditions"
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span>Pre-existing Conditions</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="hasExistingInsurance"
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span>Existing Insurance</span>
                </label>

                <select
                  name="paymentFrequency"
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                  required
                >
                  <option value="monthly">Monthly Payment</option>
                  <option value="quarterly">Quarterly Payment</option>
                  <option value="annually">Annual Payment</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Apply;