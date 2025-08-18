import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Small AI" 
            className="h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-black hover:text-brand-purple transition-colors">
            Home
          </Link>
          {/* <Link to="/portfolio" className="text-sm font-medium text-black hover:text-brand-purple transition-colors">
            What We've Built
          </Link> */}
          <Link to="/portfolio/seo-blog-writer" className="text-sm font-medium text-black hover:text-brand-purple transition-colors">
            SEO Blog Writer
          </Link>
          <Link to="/portfolio/social-media-automation" className="text-sm font-medium text-black hover:text-brand-purple transition-colors">
            Social Media Automation
          </Link>
          <Link to="/portfolio/small-ai-voice-agent" className="text-sm font-medium text-black hover:text-brand-purple transition-colors">
            Small AI Voice Agent
          </Link>
          {/* <a 
            href="#services" 
            className="text-sm font-medium text-black hover:text-brand-purple transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Why Us
          </a> */}
          <a 
            href="#contact" 
            className="btn-primary text-sm px-4 py-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Call
          </a>
        </nav>
        
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-black/5 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-black hover:text-brand-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className="text-sm font-medium text-black hover:text-brand-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              What We've Built
            </Link>
            <Link 
              to="/portfolio/small-ai-voice-agent" 
              className="text-sm font-medium text-black hover:text-brand-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Voice Agent
            </Link>
            <a 
              href="#services" 
              className="text-sm font-medium text-black hover:text-brand-purple p-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
