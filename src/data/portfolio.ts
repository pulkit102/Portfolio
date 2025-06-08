import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform (EliteBazaar)',
    description: 'Full-stack e-commerce solution with modern UI and secure payments',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with RazorPay, order management, and admin dashboard. Implemented responsive design and optimized for performance.',
    technologies: ['React','Tailwind CSS','Node.js','Express.js','MongoDB','Postman','Vite' ],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/pulkit102/E-Commerce',
    featured: true,
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'Wanderlust app',
    description: 'Full-stack travel booking platform inspired by Airbnb, enabling users to explore, list, and book stays with secure authentication and seamless UI.',
    longDescription: 'Built a full-stack travel accommodation platform inspired by Airbnb, enabling users to explore, book, and list stays with features like user authentication, dynamic property listings, image uploads, and location-based search. Integrated secure backend APIs using Node.js and Express, and managed data with MongoDB. The frontend was developed using EJS templates for seamless UI rendering. Implemented CRUD functionalities for property management and ensured responsive design for smooth cross-device experience.',
    technologies: ['HTML','JavaScript','EJS','BootStrap','Node.js','Express.js','MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/30898458/pexels-photo-30898458/free-photo-of-modern-luxury-hotel-room-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://majorproject-h73z.onrender.com/listings',
    featured: true,
    status: 'completed'
  },
 /* {
    id: '3',
    title: 'Virtual Herbal Garden',
    description: 'Beautiful weather app with location-based forecasts',
    longDescription: 'Created an intuitive weather dashboard featuring current conditions, 7-day forecasts, interactive maps, location search, and personalized weather alerts with beautiful animations.',
    technologies: ['React', 'Weather API', 'Chart.js', 'CSS Animations'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false
  }*/
];


export const skills: Skill[] = [
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'CSS', level: 95, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 20, category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'frontend' },
  { name: 'BootStrap CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'Express.js', level: 70, category: 'backend' },
  { name: 'SQL', level: 50, category: 'backend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'GitHub', level: 70, category: 'tools' },
];