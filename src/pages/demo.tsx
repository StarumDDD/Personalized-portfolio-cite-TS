import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import TextAnalyzer from '@/components/TextAnalyzer';

export default function Demo() {
  return (
    <Layout title="Demo | Multi-Skilled Portfolio" skipIntro={true}>
      <Head>
        <title>Demo | Multi-Skilled Portfolio</title>
      </Head>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Demo</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience my backend Python development skills with this interactive text analysis tool.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={0.2}>
            <TextAnalyzer />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6" delay={0.3}>
            <h2 className="text-2xl font-semibold mb-4">About This Demo</h2>
            <p className="text-gray-600 mb-4">
              This demo showcases a Python-powered text analysis engine that can extract useful information from any text input. It demonstrates my backend development skills, including:
            </p>
            
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
              <li>Text processing and natural language analysis</li>
              <li>Building efficient algorithms for data extraction</li>
              <li>Creating RESTful APIs with proper error handling</li>
              <li>Integrating backend services with frontend interfaces</li>
            </ul>
            
            <p className="text-gray-600">
              In a real-world application, this technology could be used for content analysis, document processing, or as part of a larger data processing pipeline. The implementation uses modern API design patterns and follows best practices for performance and security.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
