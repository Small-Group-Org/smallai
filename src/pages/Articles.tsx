import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Search, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import BookCallModal from "@/components/BookCallModal";

interface Article {
  title: string;
  content: string;
  created_at: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles();
  }, []);

  useEffect(() => {
    // Filter articles based on search term
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchTerm, articles]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_N8N_WEBHOOK_ALL_BLOGS}/all-blogs`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      
      const data = await response.json();
      
      // Sort articles by date (latest first)
      const sortedArticles = data.sort((a: Article, b: Article) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA; // Descending order (latest first)
      });
      
      setArticles(sortedArticles);
      setFilteredArticles(sortedArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast({
        title: "Error",
        description: "Failed to load articles. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Unknown date';
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const truncateContent = (content: string, maxLength: number = 150) => {
    // Remove HTML tags for preview
    let plainText = content.replace(/<[^>]*>/g, '');
    // Remove common "Read more" text variations
    plainText = plainText.replace(/read\s*more/gi, '');
    plainText = plainText.replace(/continue\s*reading/gi, '');
    plainText = plainText.replace(/→/g, '');
    plainText = plainText.replace(/>>/g, '');
    plainText = plainText.replace(/click\s*here/gi, '');
    plainText = plainText.replace(/learn\s*more/gi, '');
    
    // Clean up extra whitespace
    plainText = plainText.replace(/\s+/g, ' ').trim();
    
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <div className="container-custom py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-purple mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-black text-white py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/portfolio/seo-blog-writer"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to SEO Blog Writer
              </Link>
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  All Articles
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                  Explore our collection of AI-generated SEO blog posts and articles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-black">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles by title or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container-custom">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {searchTerm ? 'No articles found' : 'No articles available'}
                </h3>
                <p className="text-gray-600">
                  {searchTerm 
                    ? 'Try adjusting your search terms' 
                    : 'Check back later for new articles'
                  }
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={`/portfolio/articles/${generateSlug(article.title)}`}
                    state={{
                      blogTitle: article.title,
                      blogContent: article.content,
                      created_at: article.created_at
                    }}
                    className="block"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.created_at)}</span>
                        </div>
                        <CardTitle className="text-lg font-semibold line-clamp-2 hover:text-brand-purple transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        <p className="text-gray-600 flex-grow line-clamp-3">
                          {truncateContent(article.content)}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-black">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Want More Content Like This?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Our AI Blog Writer can generate high-quality SEO content for your business. 
              Let's discuss how we can help automate your content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio/seo-blog-writer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Learn About SEO Blog Writer
              </Link>
              <BookCallModal>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-black border-2 border-white text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Book a Discovery Call
                </button>
              </BookCallModal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles; 