import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, BarChart3 } from 'lucide-react';

interface KeywordData {
  keyword: string;
  count: number;
  density: number;
}

interface BlogKeywordDensityProps {
  content: string;
  className?: string;
}

const BlogKeywordDensity: React.FC<BlogKeywordDensityProps> = ({ 
  content, 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState('2-word');

  // Function to clean and normalize text for keyword analysis
  const cleanText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove punctuation
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  };

  // Function to extract stop words (common words to exclude)
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 'in', 'is', 'it', 'its',
    'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with', 'this', 'these', 'they', 'them', 'their',
    'there', 'then', 'than', 'or', 'but', 'not', 'have', 'had', 'has', 'having', 'do', 'does', 'did',
    'doing', 'can', 'could', 'should', 'would', 'may', 'might', 'must', 'shall', 'will', 'would',
    'i', 'you', 'we', 'us', 'our', 'my', 'me', 'him', 'her', 'his', 'hers', 'your', 'yours',
    'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
    'so', 'too', 'very', 'just', 'now', 'here', 'where', 'when', 'why', 'how', 'what', 'who',
    'which', 'whom', 'whose', 'if', 'because', 'although', 'though', 'unless', 'until', 'while',
    'after', 'before', 'during', 'through', 'under', 'over', 'above', 'below', 'up', 'down',
    'out', 'off', 'away', 'back', 'again', 'once', 'twice', 'always', 'never', 'often', 'sometimes',
    'usually', 'rarely', 'hardly', 'barely', 'almost', 'quite', 'rather', 'pretty', 'fairly',
    'enough', 'too', 'also', 'either', 'neither', 'both', 'all', 'every', 'each', 'some', 'any',
    'much', 'many', 'little', 'few', 'several', 'various', 'different', 'same', 'similar',
    'new', 'old', 'good', 'bad', 'big', 'small', 'large', 'huge', 'tiny', 'great', 'better',
    'best', 'worse', 'worst', 'first', 'last', 'next', 'previous', 'final', 'initial'
  ]);

  // Function to extract n-grams (n-word phrases) with stop word filtering
  const extractNGrams = (words: string[], n: number): string[] => {
    const ngrams: string[] = [];
    for (let i = 0; i <= words.length - n; i++) {
      const ngram = words.slice(i, i + n);
      // Filter out n-grams that contain any stop words
      const hasStopWord = ngram.some(word => stopWords.has(word));
      if (!hasStopWord) {
        ngrams.push(ngram.join(' '));
      }
    }
    return ngrams;
  };

  // Function to calculate keyword density
  const calculateKeywordDensity = (keywords: string[]): KeywordData[] => {
    const totalWords = keywords.length;
    const keywordCounts: { [key: string]: number } = {};

    // Count occurrences
    keywords.forEach(keyword => {
      if (keyword.trim()) {
        keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
      }
    });

    // Convert to array and calculate density
    return Object.entries(keywordCounts)
      .map(([keyword, count]) => ({
        keyword,
        count,
        density: (count / totalWords) * 100
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Top 5 for compact display
  };

  // Memoized keyword analysis
  const keywordAnalysis = useMemo(() => {
    if (!content.trim()) return { '2-word': [], '3-word': [], '4-word': [] };

    const cleanedText = cleanText(content);
    const words = cleanedText.split(' ').filter(word => word.length > 0);

    return {
      '2-word': calculateKeywordDensity(extractNGrams(words, 2)),
      '3-word': calculateKeywordDensity(extractNGrams(words, 3)),
      '4-word': calculateKeywordDensity(extractNGrams(words, 4))
    };
  }, [content]);

  const currentKeywords = keywordAnalysis[activeTab as keyof typeof keywordAnalysis] || [];

  const getDensityColor = (density: number): string => {
    if (density >= 3) return 'bg-red-100 text-red-800 border-red-200';
    if (density >= 2) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (density >= 1) return 'bg-green-100 text-green-800 border-green-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getDensityLabel = (density: number): string => {
    if (density >= 3) return 'High';
    if (density >= 2) return 'Medium';
    if (density >= 1) return 'Good';
    return 'Low';
  };

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Keyword Density
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Keyword Analysis Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="2-word" className="text-xs px-2">
              <Search className="h-3 w-3 mr-1" />
              2-Word
            </TabsTrigger>
            <TabsTrigger value="3-word" className="text-xs px-2">
              <TrendingUp className="h-3 w-3 mr-1" />
              3-Word
            </TabsTrigger>
            <TabsTrigger value="4-word" className="text-xs px-2">
              <BarChart3 className="h-3 w-3 mr-1" />
              4-Word
            </TabsTrigger>
          </TabsList>

          <TabsContent value="2-word" className="mt-3">
            <KeywordResults 
              keywords={currentKeywords} 
              type="2-word" 
              getDensityColor={getDensityColor}
              getDensityLabel={getDensityLabel}
            />
          </TabsContent>

          <TabsContent value="3-word" className="mt-3">
            <KeywordResults 
              keywords={currentKeywords} 
              type="3-word" 
              getDensityColor={getDensityColor}
              getDensityLabel={getDensityLabel}
            />
          </TabsContent>

          <TabsContent value="4-word" className="mt-3">
            <KeywordResults 
              keywords={currentKeywords} 
              type="4-word" 
              getDensityColor={getDensityColor}
              getDensityLabel={getDensityLabel}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Compact Keyword Results Component
interface KeywordResultsProps {
  keywords: KeywordData[];
  type: string;
  getDensityColor: (density: number) => string;
  getDensityLabel: (density: number) => string;
}

const KeywordResults: React.FC<KeywordResultsProps> = ({ 
  keywords, 
  type, 
  getDensityColor, 
  getDensityLabel 
}) => {
  if (keywords.length === 0) {
    return (
      <div className="text-center py-4 text-muted-foreground">
        <Search className="h-6 w-6 mx-auto mb-2 opacity-50" />
        <p className="text-xs">No {type} phrases found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        {keywords.map((keyword, index) => (
          <div
            key={keyword.keyword}
            className="flex items-center justify-between p-2 rounded border bg-card hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-xs font-mono text-muted-foreground w-4">
                {index + 1}
              </span>
              <span className="font-medium text-xs truncate">
                {keyword.keyword}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-xs px-1 py-0 h-5">
                {keyword.count}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs px-1 py-0 h-5 ${getDensityColor(keyword.density)}`}
              >
                {keyword.density.toFixed(1)}%
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogKeywordDensity;
