import AnimationImage from '../assets/animation.jpeg';
import FoodImage from '../assets/delicious_food.jpg';
import DigitalMarketing from '../assets/digital_marketing.jpg';
import GraphicImage from '../assets/graphic_design.jpeg';
import PianoImage from '../assets/piano.jpg';
import WebImage from '../assets/web_development.jpeg';

export const courses = [
  {
    id: 1,
    title: 'Learn food recipes',
    price: '$30',
    url: '/courses/learn-food-recipes',
    duration: '5h',
    enrolledCount: 1000,
    courseImage: FoodImage,
    author: 'James Gosling'
  },
  {
    id: 2,
    title: 'Learn animation basics',
    price: '$40',
    url: '/courses/learn-animation-basics',
    duration: '20h',
    enrolledCount: 1400,
    courseImage: AnimationImage,
    author: 'David Diego'
  },
  {
    id: 3,
    title: 'Learn graphic design',
    price: '$50',
    url: '/courses/learn-graphic-design',
    duration: '15h',
    enrolledCount: 4000,
    courseImage: GraphicImage,
    author: 'Ari Reuter'
  },
  {
    id: 4,
    title: 'Learn web development',
    price: '$120',
    url: '/courses/learn-web-development',
    duration: '40h',
    enrolledCount: 12000,
    courseImage: WebImage,
    author: 'Jonas Morel'
  },
  {
    id: 5,
    title: 'Learn to play piano',
    price: '$40',
    url: '/courses/learn-to-play-piano',
    duration: '20h',
    enrolledCount: 1500,
    courseImage: PianoImage,
    author: 'Juliane Soltveit'
  },
  {
    id: 6,
    title: 'Learn Digital Marketing',
    price: '$1000',
    url: '/courses/learn-digital-marketing',
    duration: '80h',
    enrolledCount: 3570,
    courseImage: DigitalMarketing,
    author: 'Veera Manni'
  }
];
