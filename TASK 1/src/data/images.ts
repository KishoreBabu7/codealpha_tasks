export interface ImageData {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

export const images: ImageData[] = [
  {
    id: 1,
    title: 'Mountain Landscape',
    description: 'Stunning view of mountains during sunset',
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Mountain landscape at sunset',
    category: 'nature',
    featured: true
  },
  {
    id: 2,
    title: 'Ocean Waves',
    description: 'Peaceful ocean waves crashing on shore',
    src: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Ocean waves on beach',
    category: 'nature'
  },
  {
    id: 3,
    title: 'City Skyline',
    description: 'Modern city skyline at night with lights',
    src: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'City skyline at night',
    category: 'urban',
    featured: true
  },
  {
    id: 4,
    title: 'Forest Path',
    description: 'Serene path through a dense forest',
    src: 'https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Path through forest',
    category: 'nature'
  },
  {
    id: 5,
    title: 'Desert Landscape',
    description: 'Beautiful desert landscape with sand dunes',
    src: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Desert landscape with dunes',
    category: 'nature'
  },
  {
    id: 6,
    title: 'Coffee Shop',
    description: 'Cozy interior of a modern coffee shop',
    src: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Coffee shop interior',
    category: 'urban'
  },
  {
    id: 7,
    title: 'Street Art',
    description: 'Colorful street art on urban wall',
    src: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Colorful street art mural',
    category: 'urban'
  },
  {
    id: 8,
    title: 'Autumn Path',
    description: 'Beautiful autumn path with fallen leaves',
    src: 'https://images.pexels.com/photos/1171534/pexels-photo-1171534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Autumn path with colorful leaves',
    category: 'nature',
    featured: true
  },
  {
    id: 9,
    title: 'Modern Architecture',
    description: 'Striking example of modern architecture',
    src: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Modern architectural building',
    category: 'urban'
  },
  {
    id: 10,
    title: 'Waterfall',
    description: 'Majestic waterfall in tropical setting',
    src: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Tropical waterfall',
    category: 'nature',
    featured: true
  },
  {
    id: 11,
    title: 'Urban Street',
    description: 'Busy urban street with people',
    src: 'https://images.pexels.com/photos/1023692/pexels-photo-1023692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Urban street scene',
    category: 'urban'
  },
  {
    id: 12,
    title: 'Northern Lights',
    description: 'Spectacular aurora borealis display',
    src: 'https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Northern lights in night sky',
    category: 'nature',
    featured: true
  }
];

export const categories = Array.from(new Set(images.map(img => img.category)));