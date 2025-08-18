import { useState, useRef, useEffect } from "react";
import { Play, Loader2, Clock, CheckCircle, AlertCircle, RefreshCw, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { FALLBACK_BLOG } from "@/commons/constant";

interface SeoBlogResult {
  "blog-title": string;
  blog_content: string;
}

interface JobStatus {
  status: 'processing' | 'completed' | 'failed' | 'not_found';
  result?: SeoBlogResult;
  message?: string;
}

interface PreviousBlog {
  result_title: string;
  result_content: string;
}

const SeoBlogDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pollCount, setPollCount] = useState(0);
  const [previousBlogs, setPreviousBlogs] = useState<PreviousBlog[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const clearPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      if (startTimeRef.current) {
        setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const fetchPreviousBlogs = async () => {
    setBlogsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_LIST_BLOG}/list-blog`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch previous blogs: ${response.status}`);
      }

      const data = await response.json();
      // The API returns an array directly, not wrapped in resultArray
      if (Array.isArray(data)) {
        setPreviousBlogs(data);
      } else {
        console.warn('Unexpected response format:', data);
        setPreviousBlogs([]);
      }
    } catch (err) {
      console.warn('Failed to fetch previous blogs:', err);
      // Silently fail - this is not critical functionality
      setPreviousBlogs([]);
    } finally {
      setBlogsLoading(false);
    }
  };

  const navigateToBlog = (blog: PreviousBlog) => {
    const slug = blog.result_title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    navigate(`/portfolio/seo-blog-writer/${slug}`, { 
      state: { 
        blogTitle: blog.result_title, 
        blogContent: blog.result_content 
      } 
    });
  };

  const checkJobStatus = async (currentJobId: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_N8N_WEBHOOK_BLOG_CHECK}/seo-blog-check?jobId=${currentJobId}`,
        {
          method: 'GET',
        }
      );
      
      if (!response.ok) {
        console.warn('Polling failed, will retry...');
        return;
      }

      const data: JobStatus = await response.json();
      setPollCount(prev => prev + 1);
      
      if (data.status === 'completed' && data.result) {
        clearPolling();
        clearTimer();
        
        const cleanTitle = data.result["blog-title"].replace(/^"|"$/g, '');
        
        const slug = cleanTitle
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();

        navigate(`/portfolio/seo-blog-writer/${slug}`, { 
          state: { 
            blogTitle: cleanTitle, 
            blogContent: data.result.blog_content 
          } 
        });

        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);
        toast({
          title: "Success!",
          description: "SEO blog generated successfully",
        });
      } else if (data.status === 'failed') {
        clearPolling();
        clearTimer();
        setError(data.message || 'Blog generation failed');
        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);
      } else if (data.status === 'not_found') {
        clearPolling();
        clearTimer();
        setError('Job not found. It may have expired.');
        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);
      }
    } catch (err) {
      console.warn('Polling request failed, will retry...', err);
    }
  };

  const triggerWorkflow = async () => {
    setIsLoading(true);
    setError(null);
    setJobId(null);
    setElapsedTime(0);
    setPollCount(0);

    try {
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_URL_BLOG}/seo-blog-start`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to start workflow: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.jobId) {
        throw new Error('No job ID returned from workflow');
      }

      setJobId(result.jobId);
      startTimer();

      // Start polling every 10 seconds
      pollingRef.current = setInterval(() => {
        checkJobStatus(result.jobId);
      }, 10000);

      // Initial check after 3 seconds
      setTimeout(() => {
        checkJobStatus(result.jobId);
      }, 5000);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start workflow';
      setError(errorMessage);
      setIsLoading(false);
      clearTimer();
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };



  const retryLastJob = () => {
    if (jobId) {
      setError(null);
      setIsLoading(true);
      startTimer();
      pollingRef.current = setInterval(() => {
        checkJobStatus(jobId);
      }, 5000);
      checkJobStatus(jobId);
    }
  };

  useEffect(() => {
    fetchPreviousBlogs();
    return () => {
      clearPolling();
      clearTimer();
    };
  }, []);

  // Auto-stop after 7 minutes (safety net)
  useEffect(() => {
    if (elapsedTime > 420) { // 7 minutes
      clearPolling();
      clearTimer();
      
      // Navigate to fallback blog instead of showing error
      const slug = FALLBACK_BLOG.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      navigate(`/portfolio/seo-blog-writer/${slug}`, { 
        state: { 
          blogTitle: FALLBACK_BLOG.title, 
          blogContent: FALLBACK_BLOG.content,
          isFallback: true
        } 
      });

      setIsLoading(false);
      setJobId(null);
      setElapsedTime(0);
      setPollCount(0);
      
    }
  }, [elapsedTime, navigate, toast]);

  return (
    <div className="space-y-6">
      {/* Previous Blogs Section */}
      {previousBlogs.length > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Check out our previous blogs
            </CardTitle>
            <CardDescription className="text-green-700">
              Explore recently generated SEO-optimized blog posts created by our AI automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            {blogsLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-green-600" />
                <span className="ml-2 text-green-700">Loading previous blogs...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {previousBlogs.map((blog, index) => (
                  <Card 
                    key={index}
                    className="cursor-pointer hover:shadow-md transition-shadow border-green-300 bg-white"
                    onClick={() => navigateToBlog(blog)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-green-800 flex items-center justify-between">
                        <span className="line-clamp-2">{blog.result_title}</span>
                        <ExternalLink className="h-4 w-4 flex-shrink-0 ml-2" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-green-600 line-clamp-3">
                        {blog.result_content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                      </p>
                      <Badge variant="outline" className="mt-2 text-green-700 border-green-300">
                        SEO Optimized
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

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

            {/* Error Section */}
            {error && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-red-800 mb-1">Generation Failed</h4>
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                    
                    {jobId && (
                      <div className="flex gap-2">
                        <Button 
                          onClick={retryLastJob}
                          variant="outline"
                          size="sm"
                          className="text-red-700 border-red-300 hover:bg-red-100"
                        >
                          <RefreshCw className="mr-1 h-3 w-3" />
                          Retry Check
                        </Button>
                        <Button 
                          onClick={triggerWorkflow}
                          variant="outline"  
                          size="sm"
                          className="text-red-700 border-red-300 hover:bg-red-100"
                        >
                          Start New Job
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Info Section */}
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>How it works:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Workflow starts immediately and runs in background</li>
                <li>System researches trending topics in your industry</li>
                <li>Generates comprehensive, SEO-optimized content</li>
                <li>Creates meta descriptions and proper heading structure</li>
                <li>Adds relevant images and external authoritative links</li>
                <li>You'll be automatically redirected when complete</li>
                <li>Keep this tab open during the 6-7 minute process</li>
              </ul>
              
              {!isLoading && (
                <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                  <strong>Tip:</strong> The generation process typically takes 6-7 minutes. 
                  You can safely keep this tab open and browse other tabs while waiting.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeoBlogDemo;