import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Revolutionize Your Workflow?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have transformed their businesses with our powerful SaaS solution. Start your journey today and experience the difference.</p>
        <div className="space-x-4">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">Start Free Trial</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-500">Schedule a Demo</Button>
        </div>
        <p className="mt-8 text-sm">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
}