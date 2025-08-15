import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Play, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialMediaResult {
  linkedin_post: string;
  twitter_post: string;
  instagram_post?: string;
  generated_image: string;
}

const SocialMediaDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SocialMediaResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const triggerWorkflow = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_URL}/social-media`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      setResult(data);
      toast({
        title: "Success!",
        description: "Social media content generated successfully",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Try the Social Media Automation
          </CardTitle>
          <CardDescription>
            This demo will automatically find trending AI business automation news, analyze the content, 
            and generate engaging posts for LinkedIn, Twitter, and Instagram, complete with an AI-generated image.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">News Scraping</Badge>
              <Badge variant="secondary">AI Content Analysis</Badge>
              <Badge variant="secondary">Multi-Platform Posts</Badge>
              <Badge variant="secondary">Image Generation</Badge>
            </div>
            
            <Button 
              onClick={triggerWorkflow} 
              disabled={isLoading}
              size="lg"
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Content...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Generate Social Media Content
                </>
              )}
            </Button>

            {isLoading && (
              <div className="text-sm text-gray-600">
                <p>⏳ This may take 30-60 seconds as we:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Search for trending AI automation news</li>
                  <li>Scrape and analyze article content</li>
                  <li>Generate platform-specific posts</li>
                  <li>Create a relevant image</li>
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">Error occurred:</p>
            </div>
            <p className="text-red-600 mt-1">{error}</p>
                         <p className="text-sm text-red-500 mt-2">
               This might be due to rate limiting (max 2 requests per 2 hours), workflow maintenance, or API availability. 
               Please try again later or <strong>contact us for a live demo</strong>.
             </p>
          </CardContent>
        </Card>
      )}

      {result && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Generated Content</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* LinkedIn Post */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-blue-600">LinkedIn Post</CardTitle>
              </CardHeader>
                             <CardContent>
                 <p className="text-sm whitespace-pre-wrap">{result.linkedin_post}</p>
               </CardContent>
            </Card>

            {/* Twitter Post */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-sky-500">Twitter Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{result.twitter_post}</p>
              </CardContent>
            </Card>

                         {/* Instagram Post */}
             <Card>
               <CardHeader>
                 <CardTitle className="text-sm font-medium text-pink-600">Instagram Post</CardTitle>
               </CardHeader>
               <CardContent>
                 {result.instagram_post ? (
                   <p className="text-sm whitespace-pre-wrap">{result.instagram_post}</p>
                 ) : (
                   <p className="text-sm text-gray-500 italic">Instagram post generation is currently being updated in the workflow.</p>
                 )}
               </CardContent>
             </Card>

            {/* Generated Image */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-purple-600">Generated Image</CardTitle>
              </CardHeader>
                             <CardContent>
                 {result.generated_image ? (
                   <div className="space-y-2">
                     <img 
                       src={result.generated_image} 
                       alt="Generated social media image" 
                       className="w-full h-48 object-cover rounded-lg"
                     />
                     <a 
                       href={result.generated_image} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center text-sm text-purple-600 hover:underline"
                     >
                       View full image <ExternalLink className="ml-1 h-3 w-3" />
                     </a>
                   </div>
                 ) : (
                   <p className="text-sm text-gray-500">No image generated</p>
                 )}
               </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-sm text-blue-700">
                <strong>🚀 Impressed?</strong> This is just one example of what our AI automation can do. 
                We can build custom workflows for your specific business needs, integrating with your existing tools and platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SocialMediaDemo; 