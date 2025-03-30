import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';

const skills = [
  {
    category: '3D Modeling & Animation',
    items: [
      { name: 'Blender', level: 90 },
      { name: 'ZBrush', level: 85 },
      { name: 'Cinema 4D', level: 80 },
      { name: '3ds Max', level: 75 },
      { name: 'Maya', level: 70 },
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
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Flask/FastAPI', level: 85 },
      { name: 'Three.js', level: 75 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Photoshop', level: 90 },
      { name: 'Illustrator', level: 85 },
      { name: 'After Effects', level: 80 },
      { name: 'Figma', level: 85 },
      { name: 'Premiere Pro', level: 70 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <Layout title="Skills | Multi-Skilled Portfolio" skipIntro={true}>
      <Head>
        <title>Skills | Multi-Skilled Portfolio</title>
      </Head>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My multi-disciplinary skillset allows me to tackle projects from multiple angles,
              bringing together technical and creative solutions.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skillGroup, index) => (
              <AnimatedSection
                key={skillGroup.category}
                animation="fade-up"
                delay={0.1 * index}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                  {skillGroup.category}
                </h2>
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Work Experience</h3>
              <p className="text-gray-600 text-center">
                Over 5 years of professional experience working on diverse projects across multiple industries.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Education</h3>
              <p className="text-gray-600 text-center">
                Formal education in Computer Science and continuous self-learning in design and 3D visualization.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-accent1/10 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Always Learning</h3>
              <p className="text-gray-600 text-center">
                Constantly expanding my skillset through courses, tutorials, and hands-on project experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
