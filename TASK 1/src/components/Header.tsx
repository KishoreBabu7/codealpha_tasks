import React from 'react';
import { GalleryVertical as Gallery, Camera } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gallery className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold">GalleryView</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#gallery" 
                className="flex items-center hover:text-indigo-200 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Gallery className="h-5 w-5 mr-1" />
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a 
                href="#featured" 
                className="flex items-center hover:text-indigo-200 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Camera className="h-5 w-5 mr-1" />
                <span>Featured</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;