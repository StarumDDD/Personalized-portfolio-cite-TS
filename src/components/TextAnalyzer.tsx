import { useState } from 'react';
import axios from 'axios';

interface AnalysisResult {
  wordCount: number;
  characterCount: number;
  topWords: { word: string; count: number }[];
  sentenceCount: number;
}

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.get<AnalysisResult>('/api/analyze', {
        params: { text },
      });
      
      setResult(response.data);
    } catch (err) {
      console.error('Error analyzing text:', err);
      setError('Failed to analyze text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Text Analysis Demo</h3>
      <p className="text-gray-600 mb-6">
        Enter any text below to analyze it with our Python-powered text analyzer.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 h-36 focus:ring-2 focus:ring-primary focus:border-primary transition"
            placeholder="Enter text to analyze..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            {isLoading ? 'Analyzing...' : 'Analyze Text'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-lg mb-3">Analysis Results</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-white rounded border border-gray-200">
              <div className="text-gray-500 text-sm">Word Count</div>
              <div className="text-2xl font-semibold">{result.wordCount}</div>
            </div>
            
            <div className="p-3 bg-white rounded border border-gray-200">
              <div className="text-gray-500 text-sm">Character Count</div>
              <div className="text-2xl font-semibold">{result.characterCount}</div>
            </div>
            
            <div className="p-3 bg-white rounded border border-gray-200">
              <div className="text-gray-500 text-sm">Sentence Count</div>
              <div className="text-2xl font-semibold">{result.sentenceCount}</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h5 className="font-medium mb-2">Top Words</h5>
            <div className="space-y-2">
              {result.topWords.length > 0 ? (
                result.topWords.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-800">{item.word}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      {item.count} {item.count === 1 ? 'occurrence' : 'occurrences'}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No significant words found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;
