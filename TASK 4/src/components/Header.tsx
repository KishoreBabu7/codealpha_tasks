import React from 'react';
import { Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Music className="w-6 h-6 text-purple-500" />
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Music Player
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;