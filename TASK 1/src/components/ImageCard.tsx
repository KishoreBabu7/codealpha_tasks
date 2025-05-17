import React from 'react';
import { ImageData } from '../data/images';
import { Heart, Expand } from 'lucide-react';

interface ImageCardProps {
  image: ImageData;
  onClick: (id: number) => void;
  onLike?: (id: number) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, onLike }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
    >
      <div 
        className="aspect-[4/5] overflow-hidden cursor-pointer"
        onClick={() => onClick(image.id)}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
        <span className="inline-block mt-3 text-xs text-indigo-300 bg-black/30 px-3 py-1 rounded-full">
          {image.category}
        </span>
      </div>
      
      <button 
        className={`absolute top-4 right-4 rounded-full p-3 backdrop-blur-sm transition-all duration-300 ${
          image.featured 
            ? 'bg-indigo-600/90 text-white' 
            : 'bg-white/80 text-gray-700 opacity-0 group-hover:opacity-100'
        } hover:scale-110`}
        onClick={(e) => {
          e.stopPropagation();
          onLike?.(image.id);
        }}
      >
        <Heart className="h-5 w-5" fill={image.featured ? 'currentColor' : 'none'} />
      </button>
      
      <button 
        className="absolute top-4 left-4 bg-white/80 hover:bg-white text-indigo-600 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onClick={() => onClick(image.id)}
      >
        <Expand className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ImageCard;