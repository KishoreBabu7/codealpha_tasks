import { useState, useCallback, useMemo } from 'react';
import { ImageData } from '../data/images';

export function useGallery(initialImages: ImageData[]) {
  const [images, setImages] = useState(initialImages);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredImages = useMemo(() => {
    if (!selectedCategory) return images;
    return images.filter(img => img.category === selectedCategory);
  }, [images, selectedCategory]);
  
  const selectedImageIndex = useMemo(() => {
    if (selectedImageId === null) return -1;
    return filteredImages.findIndex(img => img.id === selectedImageId);
  }, [filteredImages, selectedImageId]);
  
  const selectedImage = useMemo(() => {
    if (selectedImageIndex === -1) return null;
    return filteredImages[selectedImageIndex];
  }, [filteredImages, selectedImageIndex]);
  
  const toggleLike = useCallback((id: number) => {
    setImages(prevImages => 
      prevImages.map(img => 
        img.id === id ? { ...img, featured: !img.featured } : img
      )
    );
  }, []);

  const downloadImage = useCallback(async (imageUrl: string, imageName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  }, []);
  
  const selectImage = useCallback((id: number) => {
    setSelectedImageId(id);
  }, []);
  
  const closeImage = useCallback(() => {
    setSelectedImageId(null);
  }, []);
  
  const selectCategory = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setSelectedImageId(null);
  }, []);
  
  const hasPrevImage = selectedImageIndex > 0;
  const hasNextImage = selectedImageIndex < filteredImages.length - 1 && selectedImageIndex !== -1;
  
  const selectPrevImage = useCallback(() => {
    if (!hasPrevImage) return;
    setSelectedImageId(filteredImages[selectedImageIndex - 1].id);
  }, [filteredImages, selectedImageIndex, hasPrevImage]);
  
  const selectNextImage = useCallback(() => {
    if (!hasNextImage) return;
    setSelectedImageId(filteredImages[selectedImageIndex + 1].id);
  }, [filteredImages, selectedImageIndex, hasNextImage]);

  return {
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
  };
}