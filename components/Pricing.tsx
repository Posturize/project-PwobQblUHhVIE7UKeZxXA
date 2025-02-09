import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    { 
      name: 'Starter', 
      price: '$29', 
      features: ['Up to 5 team members', '5GB storage', 'Basic analytics', 'Email support'],
      highlighted: false
    },
    { 
      name: 'Pro', 
      price: '$79', 
      features: ['Up to 20 team members', '50GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations'],
      highlighted: true
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      features: ['Unlimited team members', 'Unlimited storage', 'Advanced analytics', '24/7 dedicated support', 'Custom development'],
      highlighted: false
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Choose the Perfect Plan for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`border rounded-lg p-8 text-center ${plan.highlighted ? 'bg-purple-600 text-white shadow-xl scale-105' : 'bg-white'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`}>{plan.name}</h3>
              <p className={`text-4xl font-bold mb-6 ${plan.highlighted ? 'text-white' : 'text-purple-800'}`}>{plan.price}<span className="text-base font-normal">/month</span></p>
              <ul className="mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <Check className={`mr-2 h-5 w-5 ${plan.highlighted ? 'text-purple-200' : 'text-purple-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={plan.highlighted ? 'bg-white text-purple-600 hover:bg-purple-100' : 'bg-purple-600 text-white hover:bg-purple-700'} size="lg">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}