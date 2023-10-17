// ./components/Pricing.tsx
import React from 'react';

type PricingProps = {
  pricingTypes: {
    type: string;
    price: number;
    features: string[];
    cta: string;
  }[];
};

const Pricing: React.FC<PricingProps> = ({ pricingTypes }) => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200 p-10 rounded-lg w-1/2 mx-auto">
      <div className="flex justify-between">
        <button
          className={`px-4 py-2 rounded-lg ${isAnnual ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setIsAnnual(true)}
        >
          Annual
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${!isAnnual ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {pricingTypes.map((pricingType) => (
          <div key={pricingType.type} className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-200">
            <h2 className="text-2xl font-bold mb-2">{pricingType.type}</h2>
            <p className="text-xl font-semibold mb-4">${isAnnual ? pricingType.price * 12 : pricingType.price} / {isAnnual ? 'year' : 'month'}</p>
            <ul className="mb-4">
              {pricingType.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">{pricingType.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;