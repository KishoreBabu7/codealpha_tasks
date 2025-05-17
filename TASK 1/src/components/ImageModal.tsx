import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react';
import { ImageData } from '../data/images';

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onLike?: (id: number) => void;
  onDownload?: (url: string, name: string) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  image, 
  onClose, 
  onPrev, 
  onNext, 
  hasNext, 
  hasPrev,
  onLike,
  onDownload
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-4 z-50 flex space-x-2">
          <button 
            className={`rounded-full p-2 transition-colors ${
              image.featured 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-white text-gray-800 hover:bg-gray-200'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onLike?.(image.id);
            }}
          >
            <Heart size={20} fill={image.featured ? 'white' : 'none'} />
          </button>
          <button 
            className="rounded-full bg-white p-2 text-gray-800 hover:bg-gray-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onDownload?.(image.src, image.title);
            }}
          >
            <Download size={20} />
          </button>
          <button 
            className="rounded-full bg-white p-2 text-gray-800 hover:bg-gray-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={20} />
          </button>
        </div>
        
        {hasPrev && (
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 hover:bg-white transition-colors"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {hasNext && (
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 hover:bg-white transition-colors"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <ChevronRight size={24} />
          </button>
        )}
        
        <div 
          className="h-full w-full flex items-center justify-center p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="max-h-full max-w-full object-contain rounded shadow-2xl" 
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">{image.title}</h2>
          <p className="text-gray-200 mt-1">{image.description}</p>
          <p className="text-indigo-300 text-sm mt-2">Category: {image.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;