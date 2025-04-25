
import { Instagram, Youtube, Mail, Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Small AI</h3>
            <p className="text-sm text-gray-600 mb-6">
              We build automations that cut hours of manual work from your ops.
              Schedule a quick call to see what's possible.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/small_ai_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@smallgrp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Product</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#services" className="text-sm text-gray-600 hover:text-black transition-colors">Features</a>
              <RouterLink to="/portfolio" className="text-sm text-gray-600 hover:text-black transition-colors">
                Our Work
              </RouterLink>
              <a href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</a>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Company</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">About</a>
              <a href="#blog" className="text-sm text-gray-600 hover:text-black transition-colors">Blog</a>
              <a href="#careers" className="text-sm text-gray-600 hover:text-black transition-colors">Careers</a>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">Stay Updated</h4>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-black/10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
              />
              <button className="btn-primary text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Small AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
