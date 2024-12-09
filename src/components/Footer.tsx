import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Leading manufacturer of high-quality mineral products since 1990.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#products" className="hover:text-white transition">
                  Magnetite
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Black Iron Oxide
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Micronized Iron
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                N-79 MIDC Hingna, Nagpur - 440016
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 98230 33709
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@phoenixamalgams.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Phoenix Amalgams Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}