import React from 'react';
import { Shield, Leaf, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure consistent product excellence"
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to environmentally responsible mining and processing methods"
  },
  {
    icon: Award,
    title: "Industry Leadership",
    description: "Setting benchmarks in mineral processing with innovative technologies"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated support and customized solutions for every client's needs"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Phoenix Amalgams?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With decades of experience and continuous innovation, we deliver excellence in every aspect of our operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800 transition">
              <feature.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}