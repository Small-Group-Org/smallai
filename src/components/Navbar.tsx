
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="Small AI" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`relative text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled ? "text-white hover:text-purple-300" : "text-white hover:text-purple-200"
            } group`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/portfolio" 
            className={`relative text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled ? "text-white hover:text-purple-300" : "text-white hover:text-purple-200"
            } group`}
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <a 
            href="#services" 
            className={`relative text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled ? "text-white hover:text-purple-300" : "text-white hover:text-purple-200"
            } group`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full py-2.5 px-6 text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-2xl border-b border-white/10">
          <nav className="container-custom py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-purple-300 font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/portfolio" 
              className="block text-white hover:text-purple-300 font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <a 
              href="#services" 
              className="block text-white hover:text-purple-300 font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
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
              className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-center py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 mx-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
