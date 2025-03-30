import type { NextApiRequest, NextApiResponse } from 'next';

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
};

type GitHubApiResponse = {
  repos: GitHubRepo[];
};

// This is a mock function to simulate getting data from GitHub
// In a real implementation, you would fetch from the GitHub API
function getMockGitHubRepos(): GitHubRepo[] {
  return [
    {
      name: 'portfolio-website',
      description: 'My personal portfolio website showcasing 3D and design skills',
      html_url: 'https://github.com/username/portfolio-website',
      updated_at: new Date().toISOString(),
      language: 'TypeScript',
      stargazers_count: 12,
    },
    {
      name: 'python-data-parser',
      description: 'A Python utility for parsing and analyzing text data',
      html_url: 'https://github.com/username/python-data-parser',
      updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      language: 'Python',
      stargazers_count: 8,
    },
    {
      name: '3d-model-viewer',
      description: 'WebGL-based 3D model viewer for the web',
      html_url: 'https://github.com/username/3d-model-viewer',
      updated_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      language: 'JavaScript',
      stargazers_count: 23,
    },
  ];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GitHubApiResponse | { error: string }>
) {
  try {
    // In a real implementation, you would make a fetch call to the GitHub API
    // with proper authentication
    const repos = getMockGitHubRepos();
    
    res.status(200).json({ repos });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}
