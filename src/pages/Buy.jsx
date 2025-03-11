import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollFx from "../components/ScrollAnimationComponent";

const Buy = () => {
  const navigate = useNavigate();

  const centralSchemes = [
    {
      title: "Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      coverage: "₹5 lakhs per family per year",
      benefits: [
        "Covers secondary and tertiary care hospitalization",
        "No cap on family size and age",
        "Cashless and paperless treatment at empaneled hospitals",
        "Pre and post hospitalization expenses covered",
      ],
      eligibility: "Families identified based on SECC 2011 database",
      image: "/Pradhan1.png",
    },
    {
      title: "Central Government Health Scheme (CGHS)",
      coverage: "Comprehensive healthcare coverage",
      benefits: [
        "OPD and Indoor treatment",
        "Specialist consultation",
        "Emergency services",
        "Cashless facility at empaneled hospitals",
      ],
      eligibility: "Central government employees, pensioners and their dependents",
      image: "/view-3.png",
    },
  ];

  const stateSchemes = [
    {
      title: "Ayushman Bharat Maharashtra",
      coverage: "₹1.5 lakhs per family per year",
      benefits: [
        "Covers 971 procedures",
        "Cashless treatment",
        "Pre-existing conditions covered",
        "No age limit",
      ],
      eligibility: "Yellow and orange ration card holders",
      image: "/Ayushman.jpeg",
    },
    {
      title: "Chief Minister's Comprehensive Health Insurance",
      coverage: "₹5 lakhs per family per year",
      benefits: [
        "Covers 1,027 procedures",
        "Includes COVID-19 treatment",
        "Follow-up care included",
        "Coverage for newborns",
      ],
      eligibility: "All residents of the state with annual income below ₹5 lakhs",
      image: "/view-3.png",
    },
  ];

  return (
    <div className="relative text-white bg-black flex flex-col">
      <section className="md:w-2/3 mx-auto space-y-6 py-16 px-4 flex-1">
        <ScrollFx duration={1.0}>
          <h1 className="text-5xl font-afacad-flux font-semibold text-center text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text mb-12">
            Health Insurance Schemes
          </h1>
        </ScrollFx>

        {/* Central Schemes */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
            Central Government Schemes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centralSchemes.map((scheme, index) => (
              <ScrollFx key={index} duration={1.0 + index * 0.2}>
                <div className="border border-gray-700 rounded-lg p-6 bg-gradient-to-b from-gray-900 to-black hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  <img src={scheme.image} alt={scheme.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">{scheme.title}</h3>
                  <p className="text-green-400 mb-3">Coverage: {scheme.coverage}</p>
                  <div className="mb-4">
                    <h4 className="text-blue-400 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {scheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-300">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-400">
                    <span className="text-blue-400">Eligibility:</span> {scheme.eligibility}
                  </p>
                  <button 
                    onClick={() => navigate('/apply', { state: { scheme } })}
                    className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </ScrollFx>
            ))}
          </div>
        </div>

        {/* State Schemes */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
            State Government Schemes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stateSchemes.map((scheme, index) => (
              <ScrollFx key={index} duration={1.0 + index * 0.2}>
                <div className="border border-gray-700 rounded-lg p-6 bg-gradient-to-b from-gray-900 to-black hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">
                  <img src={scheme.image} alt={scheme.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">{scheme.title}</h3>
                  <p className="text-green-400 mb-3">Coverage: {scheme.coverage}</p>
                  <div className="mb-4">
                    <h4 className="text-orange-400 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {scheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-300">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-400">
                    <span className="text-orange-400">Eligibility:</span> {scheme.eligibility}
                  </p>
                  <button 
                    onClick={() => navigate('/apply', { state: { scheme } })}
                    className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </ScrollFx>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
