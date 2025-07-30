import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#1d1d1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">Choose the plan that fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              name: "Starter", 
              price: "$19", 
              features: ["5,000 credits", "100 image generations", "Basic clothing catalog"],
              missing: "Priority support",
              popular: false
            },
            { 
              name: "Professional", 
              price: "$49", 
              features: ["25,000 credits", "500 image generations", "Premium clothing catalog", "Priority support"],
              popular: true
            },
            { 
              name: "Enterprise", 
              price: "$149", 
              features: ["100,000 credits", "2,000 image generations", "Full clothing catalog", "24/7 VIP support"],
              popular: false
            }
          ].map((plan, index) => (
            <div 
              key={index} 
              className={`bg-[#1d1d1d] p-8 rounded-xl border ${plan.popular ? 'border-purple-500 shadow-lg transform scale-105' : 'border-white'} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.missing && (
                  <li className="flex items-center text-gray-500">
                    <FontAwesomeIcon icon={faTimes} className="mr-2" />
                    <span>{plan.missing}</span>
                  </li>
                )}
              </ul>
              <button className={`w-full py-3 rounded-md font-medium transition duration-300 ${
                plan.popular 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'bg-black hover:bg-black border-white border'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400">All plans include secure payments, encrypted data processing, and our satisfaction guarantee.</p>
        </div>
      </div>
    </section>
  );
}