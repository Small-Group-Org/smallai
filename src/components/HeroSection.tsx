
import { Youtube, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-pattern pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        <div className="flex gap-8 mb-12">
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <Youtube size={40} className="relative z-10 text-white" />
          </a>
          <a 
            href="https://discord.gg/u6fvHes5CW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <MessageSquare size={40} className="relative z-10 text-white" />
          </a>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Effortless Automation, <br/> Intelligent Results.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We build AI systems that skip manual work clutter and make your operations easier to manage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="btn-primary text-lg flex items-center justify-center gap-2 group px-8 py-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Discovery Call 
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              className="btn-secondary text-lg px-8 py-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Services
            </a>
          </div>
        </div>
        
        <div className="mt-20 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "30+", label: "Projects Completed" },
              { number: "10x", label: "Average Client ROI" },
              { number: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
