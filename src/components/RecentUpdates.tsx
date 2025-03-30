import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedSection from './AnimatedSection';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
}

interface DribbbleShot {
  id: number;
  title: string;
  description: string | null;
  images: {
    normal: string;
  };
  html_url: string;
  published_at: string;
}

const RecentUpdates = () => {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [dribbbleShots, setDribbbleShots] = useState<DribbbleShot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [githubResponse, dribbbleResponse] = await Promise.all([
          axios.get('/api/github'),
          axios.get('/api/dribbble'),
        ]);

        setGithubRepos(githubResponse.data.repos);
        setDribbbleShots(dribbbleResponse.data.shots);
        setError('');
      } catch (err) {
        console.error('Error fetching updates:', err);
        setError('Failed to load recent updates');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format date to relative time (e.g., "2 days ago")
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  };

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2 text-gray-600">Loading recent updates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="text-center text-gray-600">
          <p>Unable to load recent updates. Please check back later.</p>
          <p className="mt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Github Profile
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection animation="slide-left" className="space-y-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-700 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold">Recent GitHub Activity</h3>
          </div>
          
          <div className="space-y-4">
            {githubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition micro-interaction"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-primary">{repo.name}</h4>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {repo.language || 'No language'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count} stars
                  </div>
                  <span>Updated {getRelativeTime(repo.updated_at)}</span>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-right" className="space-y-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-700 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold">Recent Design Work</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {dribbbleShots.map((shot) => (
              <a
                key={shot.id}
                href={shot.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition micro-interaction"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src={shot.images.normal} 
                    alt={shot.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-primary">{shot.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                    {shot.description || 'No description available'}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    Posted {getRelativeTime(shot.published_at)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default RecentUpdates;
