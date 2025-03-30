import type { NextApiRequest, NextApiResponse } from 'next';

type AnalysisResponse = {
  wordCount: number;
  characterCount: number;
  topWords: { word: string; count: number }[];
  sentenceCount: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalysisResponse | { error: string }>
) {
  try {
    const { text } = req.query;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text parameter is required' });
    }

    // Text analysis logic
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const characterCount = text.length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    
    // Calculate top words (excluding common words)
    const commonWords = new Set(['the', 'and', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'is', 'are', 'was', 'were', 'be', 'been', 'being']);
    const wordFrequency: Record<string, number> = {};
    
    text.toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 2) // Filter out short words
      .map(word => word.replace(/[^a-z0-9]/gi, '')) // Remove punctuation
      .filter(word => !commonWords.has(word.toLowerCase()) && word.length > 0)
      .forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      });
    
    const topWords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({ word, count }));

    return res.status(200).json({
      wordCount,
      characterCount,
      topWords,
      sentenceCount,
    });
  } catch (error) {
    console.error('Error in text analysis API:', error);
    return res.status(500).json({ error: 'Failed to analyze text' });
  }
}
