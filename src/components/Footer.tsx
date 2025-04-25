
import { Instagram, Youtube, Mail, Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Small AI</h3>
            <p className="text-gray-300 mb-4">
              We build automations that cut hours of manual work from your ops.
              Schedule a quick call to see what's possible.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/small_ai_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@smallgrp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-purple transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="mailto:prakarshgupta02051@gmail.com" 
                className="text-gray-300 hover:text-brand-purple transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.smallgrp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-purple transition-colors"
              >
                <Link size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <RouterLink to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </RouterLink>
              <RouterLink to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Our Work
              </RouterLink>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Email: prakarshgupta02051@gmail.com</p>
              <p className="mb-2">Website: www.smallgrp.com</p>
            </address>
            <div className="mt-4">
              <a 
                href="#contact" 
                className="inline-block bg-brand-purple text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Small AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
