import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src="https://cdn.pixabay.com/video/2020/05/24/40030-424911975_large.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Beneficiation Standards
            <span className="block mt-2">Begin with Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Leading the industry with cutting-edge mining solutions and sustainable practices. 
            We're committed to excellence in mineral processing and beneficiation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" 
               className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition flex items-center justify-center group">
              Explore Products
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" 
               className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition flex items-center justify-center">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32" />
    </div>
  );
}