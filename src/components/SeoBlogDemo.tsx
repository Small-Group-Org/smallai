import { useState } from "react";
import { Play, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface SeoBlogResult {
  "blog-title": string;
  blog_content: string;
}

const SeoBlogDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const triggerWorkflow = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_URL}/seo-blog`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SeoBlogResult = await response.json();
      console.log(data);
      
      if (!data["blog-title"] || !data.blog_content) {
        throw new Error('Invalid response format');
      }

      // Create URL-friendly slug from blog title
      const slug = data["blog-title"]
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Navigate to the new blog page with the generated content
      navigate(`/portfolio/seo-blog-writer/${slug}`, { 
        state: { 
          blogTitle: data["blog-title"], 
          blogContent: data.blog_content 
        } 
      });

      toast({
        title: "Success!",
        description: "SEO blog generated successfully",
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
            Try the SEO Blog Writer
          </CardTitle>
          <CardDescription>
            This demo will automatically research a trending topic, generate an SEO-optimized blog post with proper structure, 
            keywords, meta descriptions, and even add relevant images and external links.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Topic Research</Badge>
              <Badge variant="secondary">SEO Optimization</Badge>
              <Badge variant="secondary">Content Generation</Badge>
              <Badge variant="secondary">Image Selection</Badge>
              <Badge variant="secondary">Link Building</Badge>
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
                  Generating Blog Post...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Generate SEO Blog Post
                </>
              )}
            </Button>

            {error && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-6">
                  <div className="text-red-800">
                    <h4 className="font-medium mb-2">Generation Failed</h4>
                    <p className="text-sm">{error}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>What happens next:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>System researches trending topics in your industry</li>
                <li>Generates comprehensive, SEO-optimized content</li>
                <li>Creates meta descriptions and proper heading structure</li>
                <li>Adds relevant images and external authoritative links</li>
                <li>You'll be redirected to view the complete blog post</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeoBlogDemo; 