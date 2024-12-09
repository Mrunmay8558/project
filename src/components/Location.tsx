import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-gray-600">
            Strategically located in Nagpur, Maharashtra - The heart of India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28567.287246922095!2d78.985225!3d21.118135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ead278d405c9%3A0xffdd398b6013f035!2sPhoenix%20Amalgams%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1694716162713!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Only Manufacturing Plant in Central India</h3>
                  <p className="text-gray-600">
                    Our state-of-the-art facility in Nagpur serves as the central hub for all our manufacturing operations,
                    strategically positioned to serve both domestic and international markets efficiently.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-2">Strategic Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Central location in India for optimal distribution
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Excellent connectivity to major ports
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Proximity to raw material sources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}