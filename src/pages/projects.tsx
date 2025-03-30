import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

// Project data
const projects = [
  {
    id: 1,
    title: "3D Character Design",
    category: "3D Modeling",
    image: "https://via.placeholder.com/800x600/4285F4/FFFFFF?text=3D+Character",
    description: "A detailed 3D character created for an animated short film, featuring advanced rigging and realistic texturing.",
    tags: ["Blender", "ZBrush", "Character Design", "Rigging"],
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    category: "UI/UX & Python",
    image: "https://via.placeholder.com/800x600/EA4335/FFFFFF?text=Dashboard",
    description: "Interactive dashboard built with React frontend and Python backend for visualizing complex datasets in real-time.",
    tags: ["Python", "React", "D3.js", "Data Visualization"],
  },
  {
    id: 3,
    title: "Architectural Visualization",
    category: "CG Generalism",
    image: "https://via.placeholder.com/800x600/FBBC05/000000?text=Architecture",
    description: "Photorealistic architectural visualization of a modern residential complex, featuring interior and exterior scenes.",
    tags: ["3ds Max", "V-Ray", "Architectural Design", "Lighting"],
  },
  {
    id: 4,
    title: "E-commerce Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/800x600/34A853/FFFFFF?text=E-commerce",
    description: "Complete redesign of an e-commerce platform with a focus on mobile responsiveness and improved user experience.",
    tags: ["Adobe XD", "Photoshop", "UI Design", "User Experience"],
  },
  {
    id: 5,
    title: "Text Analysis API",
    category: "Python Development",
    image: "https://via.placeholder.com/800x600/4285F4/FFFFFF?text=Python+API",
    description: "Robust API for text analysis, sentiment detection, and keyword extraction built with Python and Flask.",
    tags: ["Python", "Flask", "NLP", "API Development"],
  },
  {
    id: 6,
    title: "Product Animation",
    category: "3D & Animation",
    image: "https://via.placeholder.com/800x600/EA4335/FFFFFF?text=Animation",
    description: "Dynamic product animation showcasing a new tech gadget with detailed close-ups and feature highlights.",
    tags: ["Cinema 4D", "After Effects", "Motion Design", "3D Animation"],
  },
];

// Filter categories
const categories = [
  "All",
  "3D Modeling",
  "CG Generalism",
  "Python Development",
  "UI/UX Design",
];

export default function Projects() {
  return (
    <Layout title="Projects | Multi-Skilled Portfolio" skipIntro={true}>
      <Head>
        <title>Projects | Multi-Skilled Portfolio</title>
      </Head>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work across different disciplines and technologies.
            </p>
          </AnimatedSection>
          
          {/* Project filters */}
          <AnimatedSection animation="fade-up" className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="fade-up"
                delay={0.1 * index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition micro-interaction"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-primary transition">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition"
                  >
                    View Details
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
