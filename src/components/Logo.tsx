import React from 'react';
import { Gem } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Gem className="w-8 h-8 text-orange-500" />
      <div>
        <h1 className="text-xl font-bold text-gray-900">Phoenix</h1>
        <p className="text-sm text-gray-600">Amalgams</p>
      </div>
    </div>
  );
}