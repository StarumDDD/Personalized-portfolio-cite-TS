/**
 * Content Configuration File
 * 
 * This file contains all the content for the portfolio website.
 * Edit this file to update the content on your website without touching the code.
 */

export const siteConfig = {
  // Basic Site Information
  siteName: 'Multi-Skilled Portfolio',
  siteDescription: 'Portfolio showcasing 3D modeling, CG generalism, Python development, and Adobe Suite design skills',
  siteUrl: 'https://yourportfolio.com',
  
  // Contact Information
  contact: {
    email: 'starum3d@gmail.com',
    location: 'Belgrade, Serbia/Remote',
    workingHours: 'Monday - Friday: 11AM - 7PM',
    social: {
      github: 'https://github.com/StarumDDD',
      linkedin: 'https://www.linkedin.com/in/ilia-sirotkin-829b2227a/',
      dribbble: 'https://dribbble.com',
      twitter: 'https://x.com/Starum_DD',
    },
  },
};

// Home Page Hero Section
export const heroContent = {
  title: {
    firstLine: 'Multi-Skilled',
    secondLine: 'Creative Developer',
  },
  description: 'Blending 3D modeling, CG generalism, backend Python development, and Adobe Suite design skills to create engaging digital experiences.',
  buttons: [
    {
      text: 'View Projects',
      url: '/projects',
      primary: true,
    },
    {
      text: 'Contact Me',
      url: '/contact',
      primary: false,
    },
  ],
};

// Skills Section (Homepage)
export const skillsContent = [
  {
    title: '3D Modeling',
    icon: 'cube', // This is mapped to an SVG icon
    description: 'Creating detailed 3D models and scenes with precision and artistic flair.',
  },
  {
    title: 'CG Generalism',
    icon: 'image',
    description: 'Mastering the full CG pipeline from modeling to lighting, texturing, and rendering.',
  },
  {
    title: 'Python Development',
    icon: 'code',
    description: 'Building robust backend systems, data processing tools, and automation scripts.',
  },
  {
    title: 'UI/UX Design',
    icon: 'paint',
    description: 'Creating intuitive, attractive interfaces with Adobe Suite for exceptional user experiences.',
  },
];

// Homepage CTA Section
export const ctaContent = {
  title: 'Ready to Start a Project?',
  description: "Let's collaborate to bring your vision to life with cutting-edge technology and design.",
  buttonText: 'Get in Touch',
  buttonUrl: '/contact',
};

// Projects Page
export const projectsContent = {
  title: 'Projects',
  description: 'A selection of my recent work across different disciplines and technologies.',
  categories: [
    'All',
    '3D Modeling',
    'CG Generalism',
    'Python Development',
    'UI/UX Design',
  ],
  projects: [
    {
      id: 1,
      title: '3D Character Design',
      category: '3D Modeling',
      image: 'https://via.placeholder.com/800x600/4285F4/FFFFFF?text=3D+Character',
      description: 'A detailed 3D character created for an animated short film, featuring advanced rigging and realistic texturing.',
      tags: ['Blender', 'ZBrush', 'Character Design', 'Rigging'],
    },
    {
      id: 2,
      title: 'Data Visualization Dashboard',
      category: 'UI/UX & Python',
      image: 'https://via.placeholder.com/800x600/EA4335/FFFFFF?text=Dashboard',
      description: 'Interactive dashboard built with React frontend and Python backend for visualizing complex datasets in real-time.',
      tags: ['Python', 'React', 'D3.js', 'Data Visualization'],
    },
    {
      id: 3,
      title: 'Architectural Visualization',
      category: 'CG Generalism',
      image: 'https://via.placeholder.com/800x600/FBBC05/000000?text=Architecture',
      description: 'Photorealistic architectural visualization of a modern residential complex, featuring interior and exterior scenes.',
      tags: ['3ds Max', 'V-Ray', 'Architectural Design', 'Lighting'],
    },
    {
      id: 4,
      title: 'E-commerce Website Redesign',
      category: 'UI/UX Design',
      image: 'https://via.placeholder.com/800x600/34A853/FFFFFF?text=E-commerce',
      description: 'Complete redesign of an e-commerce platform with a focus on mobile responsiveness and improved user experience.',
      tags: ['Adobe XD', 'Photoshop', 'UI Design', 'User Experience'],
    },
    {
      id: 5,
      title: 'Text Analysis API',
      category: 'Python Development',
      image: 'https://via.placeholder.com/800x600/4285F4/FFFFFF?text=Python+API',
      description: 'Robust API for text analysis, sentiment detection, and keyword extraction built with Python and Flask.',
      tags: ['Python', 'Flask', 'NLP', 'API Development'],
    },
    {
      id: 6,
      title: 'Product Animation',
      category: '3D & Animation',
      image: 'https://via.placeholder.com/800x600/EA4335/FFFFFF?text=Animation',
      description: 'Dynamic product animation showcasing a new tech gadget with detailed close-ups and feature highlights.',
      tags: ['Blender', 'After Effects', 'Motion Design', '3D Animation'],
    },
  ],
};

// Skills Page
export const skillsPageContent = {
  title: 'Skills & Expertise',
  description: 'My multi-disciplinary skillset allows me to tackle projects from multiple angles, bringing together technical and creative solutions.',
  skillCategories: [
    {
      category: '3D Modeling & Animation',
      items: [
        { name: 'Blender', level: 90 },
        { name: 'ZBrush', level: 85 },
        { name: 'Cinema 4D', level: 80 },
        { name: '3ds Max', level: 75 },
        { name: 'Maya', level: 50 },
      ],
    },
    {
      category: 'CG & Visualization',
      items: [
        { name: 'Lighting', level: 90 },
        { name: 'Texturing', level: 85 },
        { name: 'Compositing', level: 80 },
        { name: 'Rendering', level: 85 },
        { name: 'UV Mapping', level: 75 },
      ],
    },
    {
      category: 'Programming',
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 65 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'SQL', level: 65 },
      ],
    },
    {
      category: 'Frameworks & Tools',
      items: [
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 70 },
        { name: 'Flask/FastAPI', level: 75 },
        { name: 'Three.js', level: 65 },
        { name: 'Git', level: 90 },
      ],
    },
    {
      category: 'Design',
      items: [
        { name: 'Photoshop', level: 90 },
        { name: 'Illustrator', level: 65 },
        { name: 'After Effects', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'Premiere Pro', level: 70 },
        { name: 'Davinchi Resolve', level: 70 },
      ],
    },
  ],
  additionalInfo: [
    {
      title: 'Work Experience',
      icon: 'briefcase',
      description: 'Over 5 years of professional experience working on diverse projects across multiple industries.',
    },
    {
      title: 'Education',
      icon: 'building',
      description: 'Formal education in Computer Science and continuous self-learning in design and 3D visualization.',
    },
    {
      title: 'Always Learning',
      icon: 'lightbulb',
      description: 'Constantly expanding my skillset through courses, tutorials, and hands-on project experience.',
    },
  ],
};

// Demo Page
export const demoContent = {
  title: 'Interactive Demo',
  description: 'Experience my backend Python development skills with this interactive text analysis tool.',
  aboutTitle: 'About This Demo',
  aboutDescription: 'This demo showcases a Python-powered text analysis engine that can extract useful information from any text input. It demonstrates my backend development skills.',
  features: [
    'Text processing and natural language analysis',
    'Building efficient algorithms for data extraction',
    'Creating RESTful APIs with proper error handling',
    'Integrating backend services with frontend interfaces',
  ],
  conclusion: 'In a real-world application, this technology could be used for content analysis, document processing, or as part of a larger data processing pipeline. The implementation uses modern API design patterns and follows best practices for performance and security.',
};

// Contact Page
export const contactContent = {
  title: 'Get in Touch',
  description: "Have a project in mind or want to discuss a collaboration? I'd love to hear from you!",
  formTitle: 'Send a Message',
  formFields: {
    name: 'Your Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Message',
  },
  formSubjects: [
    { value: 'project', label: 'Project Inquiry' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'job', label: 'Job Opportunity' },
    { value: 'other', label: 'Other' },
  ],
  contactInfoTitle: 'Contact Information',
  connectTitle: 'Connect on Social Media',
};