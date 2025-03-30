import { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { siteConfig } from '@/config/content';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  skipIntro?: boolean;
}

const Layout = ({
  children,
  title = siteConfig.siteName,
  description = siteConfig.siteDescription,
  skipIntro = false,
}: LayoutProps) => {
  const [showFancy, setShowFancy] = useState(!skipIntro);
  
  // Handle skip intro URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('fast') === '1') {
      setShowFancy(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showFancy={showFancy} />
      
      {showFancy && (
        <a 
          href="#main-content" 
          className="skip-link" 
          onClick={() => setShowFancy(false)}
        >
          Skip Intro
        </a>
      )}

      <main 
        id="main-content" 
        className="flex-grow"
        style={{
          transition: 'opacity 0.5s ease-in-out',
          opacity: 1,
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
