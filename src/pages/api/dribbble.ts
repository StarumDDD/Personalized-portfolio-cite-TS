import type { NextApiRequest, NextApiResponse } from 'next';

type DribbbleShot = {
  id: number;
  title: string;
  description: string | null;
  images: {
    normal: string;
  };
  html_url: string;
  published_at: string;
};

type DribbbleApiResponse = {
  shots: DribbbleShot[];
};

// This is a mock function to simulate getting data from Dribbble
// In a real implementation, you would fetch from the Dribbble API
function getMockDribbbleShots(): DribbbleShot[] {
  return [
    {
      id: 1,
      title: 'Modern Dashboard UI',
      description: 'A modern dashboard interface with dark mode',
      images: {
        normal: 'https://via.placeholder.com/800x600/4285F4/FFFFFF?text=Dashboard+UI',
      },
      html_url: 'https://dribbble.com/shots/1',
      published_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: '3D Character Design',
      description: 'Character design for an animated short film',
      images: {
        normal: 'https://via.placeholder.com/800x600/EA4335/FFFFFF?text=3D+Character',
      },
      html_url: 'https://dribbble.com/shots/2',
      published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 3,
      title: 'App Icon Collection',
      description: 'Collection of app icons for various projects',
      images: {
        normal: 'https://via.placeholder.com/800x600/FBBC05/000000?text=App+Icons',
      },
      html_url: 'https://dribbble.com/shots/3',
      published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DribbbleApiResponse | { error: string }>
) {
  try {
    // In a real implementation, you would make a fetch call to the Dribbble API
    // with proper authentication
    const shots = getMockDribbbleShots();
    
    res.status(200).json({ shots });
  } catch (error) {
    console.error('Error fetching Dribbble data:', error);
    res.status(500).json({ error: 'Failed to fetch Dribbble data' });
  }
}
