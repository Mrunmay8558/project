import React from 'react';
import { Users, Award, Factory, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '18+', label: 'Expert Team Members' },
  { icon: Award, value: '30+', label: 'Years of Excellence' },
  { icon: Factory, value: '7', label: 'Production Units' },
  { icon: Globe, value: '100+', label: 'Global Clients' },
];

export default function Stats() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}