import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Transform Your Workflow with Our SaaS Solution</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the power of streamlined processes, enhanced collaboration, and data-driven insights. Our platform is designed to elevate your business to new heights.</p>
        <div className="space-x-4">
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-100">Get Started Free</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-500">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
}