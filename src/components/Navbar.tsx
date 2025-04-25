
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Small AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-900 hover:text-brand-purple">
            Home
          </Link>
          <Link to="/portfolio" className="font-medium text-gray-900 hover:text-brand-purple">
            Work
          </Link>
          <a 
            href="#services" 
            className="font-medium text-gray-900 hover:text-brand-purple"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Call
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 rounded-b-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-900 hover:text-brand-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className="font-medium text-gray-900 hover:text-brand-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <a 
              href="#services" 
              className="font-medium text-gray-900 hover:text-brand-purple p-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
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
