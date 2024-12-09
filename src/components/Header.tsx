import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-orange-500 transition">Home</a>
            <a href="#about" className="text-gray-800 hover:text-orange-500 transition">About Us</a>
            <a href="#products" className="text-gray-800 hover:text-orange-500 transition">Products</a>
            <a href="#contact" className="text-gray-800 hover:text-orange-500 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+919823033709" className="flex items-center text-gray-800 hover:text-orange-500">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 98230 33709</span>
            </a>
            <a href="mailto:info@phoenixamalgams.com" 
               className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </a>
          </div>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}