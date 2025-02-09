import { CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    { title: 'Seamless Integration', description: 'Effortlessly connect with your existing tools and workflows for a smooth transition.' },
    { title: 'Advanced Analytics', description: 'Gain valuable insights with our powerful analytics dashboard, driving data-informed decisions.' },
    { title: 'Enterprise-Grade Security', description: 'Rest easy knowing your data is protected by state-of-the-art security measures.' },
    { title: 'Scalable Infrastructure', description: 'Grow your business without worries. Our platform scales with you, handling increased loads with ease.' },
    { title: '24/7 Expert Support', description: 'Our dedicated team is always available to assist you, ensuring smooth operations around the clock.' },
    { title: 'Customizable Workflows', description: 'Tailor the platform to your specific needs with our flexible and adaptable workflow engine.' },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Powerful Features for Your Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
              <CheckCircle className="text-purple-600 mb-4 h-8 w-8" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}