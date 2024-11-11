"use client";

import { plans } from "../Data/index"; 

const PricingPlans = () => {

  return (
    <div className="py-20" id="pricing">
      <h1 className="heading text-center">
        Our{" "}
        <span className="text-purple">pricing plans</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {plans.map((plan) => (
          <div
            className="flex flex-col items-center justify-between border border-gray-300 rounded-lg p-6 w-full sm:w-[320px] md:w-[400px] lg:w-[400px] xl:w-[450px] mb-8 shadow-md"
            key={plan.id}
            style={{ borderColor: plan.color }} 
          >
            <div className="text-center mb-6">
              <h2 
                className="font-bold text-2xl mb-2"
                style={{ color: plan.color }} 
              >
                {plan.title} Plan
              </h2>
              <p className="text-lg text-gray-700">{plan.Price}</p>
            </div>

            <div className="text-left text-white-200 mb-6">
              <h3 className="font-semibold text-xl mb-4 text-purple">Services Included:</h3>
              <ul className="list-disc list-inside">
                {plan.services.map((service, index) => (
                  <li key={index} className="text-sm text-white mb-2">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
