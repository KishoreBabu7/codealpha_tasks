import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import CategoryFilter from './CategoryFilter';
import { useGallery } from '../hooks/useGallery';
import { images, categories } from '../data/images';
import { Loader } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    images: filteredImages, 
    selectedImage,
    selectedCategory,
    hasPrevImage,
    hasNextImage,
    selectImage,
    closeImage,
    selectCategory,
    selectPrevImage,
    selectNextImage,
    toggleLike,
    downloadImage
  } = useGallery(images);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const featuredImages = filteredImages.filter(img => img.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <section id="gallery" className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Discover Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collection of stunning images from around the world
          </p>
        </div>
        
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={selectCategory} 
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-12 w-12 text-indigo-600 animate-spin" />
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredImages.map((image) => (
              <ImageCard 
                key={image.id} 
                image={image} 
                onClick={selectImage}
                onLike={toggleLike}
              />
            ))}
          </div>
        )}
      </section>

      <section id="featured" className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our most captivating and popular photographs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredImages.map((image) => (
            <ImageCard 
              key={image.id} 
              image={image} 
              onClick={selectImage}
              onLike={toggleLike}
            />
          ))}
        </div>
      </section>
      
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeImage}
          onPrev={selectPrevImage}
          onNext={selectNextImage}
          hasPrev={hasPrevImage}
          hasNext={hasNextImage}
          onLike={toggleLike}
          onDownload={downloadImage}
        />
      )}
    </div>
  );
};

export default Gallery;