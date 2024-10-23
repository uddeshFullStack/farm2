export const cardsData = [
  {
    image: require('../public/aboutUs/Sustainability.jpg').default,
    heading: 'Sustainability:',
    description:
      'We are committed to promoting sustainable farming practices that protect the environment, conserve natural resources and ensure the long-term viability of agriculture.',
  },
  {
    image: require('../public/aboutUs/Instagram Verification Badge.jpg').default,
    heading: 'Community',
    description:
      'We believe in the strength of community and actively engage with local farmers, artisans and villagers to foster meaningful connections and support local economies.',
  },
  {
    image: require('../public/aboutUs/Education.jpg').default,
    heading: 'Education',
    description:
      'We aim to educate visitors about the importance of agriculture, organic farming and sustainable food production through workshops, guided tours and hands-on activities.',
  },
  {
    image: require('../public/aboutUs/User Groups.jpg').default,
    heading: 'Authenticity',
    description:
      'We strive to provide genuine and immersive farm experiences that allow visitors to connect with nature, learn about farming practices and experience the rural lifestyle firsthand.',
  },
  {
    image: require('../public/aboutUs/Facebook Like.jpg').default,
    heading: 'Responsibility',
    description:
      'We are dedicated to responsible tourism, minimizing our environmental impact and supporting the well-being of farmers and local communities.',
  },
];
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const profileCards = [
  {
    image: require('../public/aboutUs/Ellipse 391.jpg').default,
    name: 'Courtney Henry',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39.jpg').default,
    name: 'Theresa Webb',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (1).jpg').default,
    name: 'Esther Howard',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (2).jpg').default,
    name: 'Jacob Jones',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (3).jpg').default,
    name: 'Cody Fisher',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (4).jpg').default,
    name: 'Guy Hawkins',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (5).jpg').default,
    name: 'Dianne Russell',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
  {
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default,
    name: 'Leslie Alexander',
    description:
      'Co-Founder and Creative Director with 3 years of experience in the industry. Inspired and motivated daily to help brands grow.',
    socialLinks: [
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
    ],
  },
];

export const TeamProfileCard = 
[
  {
    // Rahul Choudhary details
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default, // Alternative image for Rahul
    name: 'Rahul Choudhary',
    position: 'Founder/CEO',
    description: 'Rahul is the Founder and CEO of Saran Farm with a vision to connect farmers, consumers, and nature enthusiasts.',
    socialLinks: [
      { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rahul-choudhary-761986199/' },
      { icon: <FaEnvelope />, url: 'mailto:rahul.choudharysaranfarm@gmail.com' },
    ],
  },
  {
    // Priyanka Kaswan details
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default, // Alternative image for Priyanka
    name: 'Priyanka Kaswan',
    position: 'Co-Founder/CMO',
    description: 'Priyanka serves as the Chief Marketing Officer, driving the company’s brand and marketing strategy.',
    socialLinks: [
      { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/priyanka-kaswan-78873226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: <FaEnvelope />, url: 'mailto:saranfarmoffice@gmail.com' },
    ],
  },
  {
    // Pawan details
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default, // Alternative image for Pawan
    name: 'Pawan',
    position: 'CTO',
    description: 'As the Chief Technology Officer, Pawan oversees the technical strategy and implementation of innovative solutions at Saran Farm.',
    socialLinks: [
      // LinkedIn to be provided
    ],
  },
  {
    // Hema Ram details
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default, // Alternative image for Hema Ram
    name: 'Hema Ram',
    position: 'COO',
    description: 'Hema Ram is the Chief Operating Officer, managing the daily operations and ensuring efficiency at Saran Farm.',
    socialLinks: [
      { icon: <FaLinkedin />, url: 'https://linkedin.com/in/hema-ram-0489b3145' },
      { icon: <FaEnvelope />, url: 'mailto:saranfarmoffice@gmail.com' },
    ],
  },
  {
    // Manoj Ghotiya details
    image: require('../public/aboutUs/Ellipse 39 (6).jpg').default, // Alternative image for Manoj Ghotiya
    name: 'Manoj Ghotiya',
    position: 'CFO',
    description: 'As the Chief Financial Officer, Manoj is responsible for the financial planning and sustainability of Saran Farm.',
    socialLinks: [
      { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/manoj-ghotiya-5a4361271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ],
  },
];
