import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import RecentUpdates from '@/components/RecentUpdates';
import Link from 'next/link';
import { heroContent, skillsContent, ctaContent } from '@/config/content';

// Dynamic import of the 3D scene to avoid SSR issues
const Hero3DScene = dynamic(() => import('@/components/Hero3DScene'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-400 text-center p-4">
        <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p>3D Model Loading...</p>
        <p className="text-sm mt-2">(Requires WebGL)</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [showFancy, setShowFancy] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // This ensures hydration is complete before rendering elements that depend on client-side JS
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Multi-Skilled Portfolio</title>
      </Head>

      <section className="relative bg-white overflow-hidden">
        {/* Hero section with 3D element */}
        <div className={`relative py-24 px-4 sm:px-6 lg:px-8 ${showFancy ? 'min-h-[80vh]' : 'min-h-[50vh]'} flex items-center transition-all duration-500`}>
          <div className="absolute inset-0 z-0">
            {showFancy && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
            )}
          </div>
          
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="block">{heroContent.title.firstLine}</span>
                <span className="block text-primary">{heroContent.title.secondLine}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {heroContent.buttons.map((button, index) => (
                  <Link 
                    key={index}
                    href={button.url}
                    className={`px-6 py-3 rounded-md ${button.primary 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-white text-gray-800 border border-gray-300 hover:border-gray-400'
                    } font-medium transition shadow-sm hover:shadow micro-interaction`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
            
            {showFancy && isClient && (
              <div className="relative h-64 lg:h-full min-h-[300px] z-10">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-50 rounded-lg">
                    <Hero3DScene />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills section */}
        <AnimatedSection animation="fade-up" delay={0.2} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diverse Skillset</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining technical expertise with creative vision to deliver exceptional digital experiences.
            </p>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsContent.map((skill, index) => {
              // Map icons to SVG elements
              let icon;
              switch (skill.icon) {
                case 'cube':
                  icon = (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  );
                  break;
                case 'image':
                  icon = (
                    <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  );
                  break;
                case 'code':
                  icon = (
                    <svg className="w-10 h-10 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  );
                  break;
                case 'paint':
                  icon = (
                    <svg className="w-10 h-10 text-accent2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  );
                  break;
                default:
                  icon = null;
              }
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition micro-interaction"
                >
                  <div className="mb-4">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Recent Updates section */}
        <AnimatedSection animation="fade-up" delay={0.3} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Updates</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check out my latest projects and contributions across different platforms.
              </p>
            </div>
            
            <div className="py-8">
              <RecentUpdates />
            </div>
          </div>
        </AnimatedSection>

        {/* CTA section */}
        <AnimatedSection animation="fade-up" delay={0.4} className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{ctaContent.title}</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              {ctaContent.description}
            </p>
            <Link 
              href={ctaContent.buttonUrl}
              className="px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-gray-100 transition shadow-sm hover:shadow micro-interaction inline-block"
            >
              {ctaContent.buttonText}
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
