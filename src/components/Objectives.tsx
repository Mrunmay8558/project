import React from 'react';
import { Target, Beaker, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Efficient, Responsible & Profitable",
    description: "We aim to participate in the research and development of possibilities to meet evolving customer needs and the world's growing demand."
  },
  {
    icon: Beaker,
    title: "High-Quality Products",
    description: "PAPL provides world-class grade in all its products to major industrial clients in diverse markets all over the world."
  },
  {
    icon: Clock,
    title: "Consistency & Reliability",
    description: "We understand the needs of our customers and their premium choice for cleaner coal. Our proprietary production process yields a heavy media separation that delivers a superior coal product."
  },
  {
    icon: Users,
    title: "Best Standards",
    description: "We are persistently working on improving the grades of many other minerals as well in our ongoing projects and methods, focusing our attention on quality and costs."
  }
];

export default function Objectives() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Objectives</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}