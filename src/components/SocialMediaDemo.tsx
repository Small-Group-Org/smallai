import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Play, CheckCircle, AlertCircle, ExternalLink, RefreshCw, Clock, Linkedin, Twitter, Instagram } from "lucide-react";


interface SocialMediaResult {
  linkedin_post: string;
  twitter_post: string;
  instagram_post?: string;
  generated_image: string;
}

interface JobStatus {
  status: 'processing' | 'completed' | 'failed' | 'not_found';
  result?: SocialMediaResult;
  message?: string;
}

interface StoredJobState {
  jobId: string;
  startTime: number;
  pollCount: number;
}

const SocialMediaDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SocialMediaResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pollCount, setPollCount] = useState(0);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);


  // localStorage keys
  const JOB_STORAGE_KEY = 'social_media_job_state';

  const saveJobState = (jobId: string, startTime: number, pollCount: number) => {
    const jobState: StoredJobState = { jobId, startTime, pollCount };
    localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(jobState));
  };

  const loadJobState = (): StoredJobState | null => {
    try {
      const stored = localStorage.getItem(JOB_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load job state from localStorage:', error);
    }
    return null;
  };

  const clearJobState = () => {
    localStorage.removeItem(JOB_STORAGE_KEY);
  };

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

  const checkJobStatus = async (currentJobId: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_N8N_WEBHOOK_SOCIAL_CHECK}/social-media-check?jobId=${currentJobId}`,
        {
          method: 'GET',
        }
      );
      
      if (!response.ok) {
        console.warn('Social media polling failed, will retry...');
        return;
      }

      const data: JobStatus = await response.json();
      const newPollCount = pollCount + 1;
      setPollCount(newPollCount);
      
      // Save current job state
      if (startTimeRef.current) {
        saveJobState(currentJobId, startTimeRef.current, newPollCount);
      }
      
      if (data.status === 'completed' && data.result) {
        clearPolling();
        clearTimer();
        clearJobState();
        // Map the result structure from your workflow
        setResult({
          linkedin_post: data.result.linkedin_post,
          twitter_post: data.result.twitter_post, 
          instagram_post: data.result.instagram_post,
          generated_image: data.result.generated_image
        });
        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);

      } else if (data.status === 'failed') {
        clearPolling();
        clearTimer();
        clearJobState();
        setError(data.message || 'Social media generation failed');
        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);
      } else if (data.status === 'not_found') {
        clearPolling();
        clearTimer();
        clearJobState();
        setError('Job not found. It may have expired.');
        setIsLoading(false);
        setJobId(null);
        setElapsedTime(0);
        setPollCount(0);
      }
    } catch (err) {
      console.warn('Social media polling request failed, will retry...', err);
    }
  };

  const triggerWorkflow = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    setJobId(null);
    setElapsedTime(0);
    setPollCount(0);

    try {
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_SOCIAL}/social-media-start`, {
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
        throw new Error(`Failed to start social media workflow: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.jobId) {
        throw new Error('No job ID returned from social media workflow');
      }

      setJobId(result.jobId);
      startTimer();

      // Save initial job state
      saveJobState(result.jobId, Date.now(), 0);

      // Start polling every 15 seconds for social media (longer process)
      pollingRef.current = setInterval(() => {
        checkJobStatus(result.jobId);
      }, 5000);

      // Initial check after 30 seconds
      setTimeout(() => {
        checkJobStatus(result.jobId);
      }, 30000);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start social media workflow';
      setError(errorMessage);
      setIsLoading(false);
      clearTimer();

    }
  };

  const retryLastJob = () => {
    if (jobId) {
      setError(null);
      setIsLoading(true);
      startTimer();
      pollingRef.current = setInterval(() => {
        checkJobStatus(jobId);
      }, 15000);
      checkJobStatus(jobId);
    }
  };

  useEffect(() => {
    // Check for existing job on component mount
    const existingJob = loadJobState();
    if (existingJob) {
      const timeSinceStart = Date.now() - existingJob.startTime;
      const elapsedSeconds = Math.floor(timeSinceStart / 1000);
      
      // Only resume if the job is less than 10 minutes old
      if (elapsedSeconds < 600) {
        setJobId(existingJob.jobId);
        setPollCount(existingJob.pollCount);
        setElapsedTime(elapsedSeconds);
        setIsLoading(true);
        
        // Restart timer from the saved start time
        startTimeRef.current = existingJob.startTime;
        timerRef.current = setInterval(() => {
          if (startTimeRef.current) {
            setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
          }
        }, 1000);
        
        // Resume polling
        pollingRef.current = setInterval(() => {
          checkJobStatus(existingJob.jobId);
        }, 5000);
        
        // Initial check after 30 seconds
        setTimeout(() => {
          checkJobStatus(existingJob.jobId);
        }, 30000);
        

      } else {
        // Job is too old, clear it
        clearJobState();
      }
    }
    
    return () => {
      clearPolling();
      clearTimer();
    };
  }, []);

  // Auto-stop after 10 minutes (social media takes longer)
  useEffect(() => {
    if (elapsedTime > 600) { // 10 minutes
      clearPolling();
      clearTimer();
      clearJobState();
      setError('Generation timed out after 10 minutes. The process may still be running in the background.');
      setIsLoading(false);
      setJobId(null);
      setElapsedTime(0);
      setPollCount(0);
    }
  }, [elapsedTime]);

  return (
    <div className="space-y-6">
      {/* Social Media Links Section */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-800">
            Check out the post on our socials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a 
              href="https://www.linkedin.com/in/smallgrptest/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://x.com/smallGrpTest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="font-medium">Twitter</span>
            </a>
            
            <a 
              href="https://www.instagram.com/smallgrptest/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </CardContent>
      </Card>

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

            {/* Loading Status */}
            {isLoading && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">
                        Processing... {formatTime(elapsedTime)}
                      </span>
                    </div>
                    <div className="text-sm text-blue-700">
                      <p className="font-medium mb-2">Current Progress:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Searching for trending AI automation news</li>
                        <li>Scraping and analyzing article content</li>
                        <li>Generating platform-specific posts with AI</li>
                        <li>Creating a relevant image</li>
                      </ul>
                      <p className="mt-2 text-blue-600 font-medium">
                        Expected completion: 4-6 minutes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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
                        <p className="text-xs text-red-600 mt-2">
                          This might be due to rate limiting (max 2 requests per 2 hours), workflow maintenance, or API availability.
                        </p>
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
            {!isLoading && !result && !error && (
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>How it works:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                  <li>Workflow starts immediately and runs in background</li>
                  <li>Searches for trending AI business automation news</li>
                  <li>Scrapes and analyzes multiple article sources</li>
                  <li>Generates platform-optimized social media posts</li>
                  <li>Creates relevant AI-generated imagery</li>
                  <li>Content appears automatically when complete</li>
                  <li>Keep this tab open during the 4-6 minute process</li>
                </ul>
                
                <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                  <strong>Note:</strong> Due to rate limiting, only 2 requests are allowed per 2-hour window. 
                  The generation process typically takes 4-6 minutes for comprehensive content.
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
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
                <CardTitle className="text-sm font-medium">
                  <a 
                    href="https://www.linkedin.com/in/smallgrptest/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center justify-between w-full"
                  >
                    LinkedIn Post
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{result.linkedin_post}</p>
              </CardContent>
            </Card>

            {/* Twitter Post */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  <a 
                    href="https://x.com/smallGrpTest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:underline flex items-center justify-between w-full"
                  >
                    Twitter Post
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap">{result.twitter_post}</p>
              </CardContent>
            </Card>

                                     {/* Instagram Post */}
             <Card>
               <CardHeader>
                 <CardTitle className="text-sm font-medium">
                   <a 
                     href="https://www.instagram.com/smallgrptest/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-pink-600 hover:underline flex items-center justify-between w-full"
                   >
                     Instagram Post
                     <ExternalLink className="h-4 w-4" />
                   </a>
                 </CardTitle>
               </CardHeader>
              <CardContent>
                {result.instagram_post ? (
                  <p className="text-sm whitespace-pre-wrap">{result.instagram_post}</p>
                ) : (
                  <p className="text-sm text-gray-500 italic">Instagram post generation is currently being updated in the workflow.</p>
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

      {/* Demo Video Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Watch Demo Video
          </CardTitle>
          <CardDescription>
            See how our Social Media Automation works in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/4E542HDDqbo"
              title="Social Media Automation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaDemo;