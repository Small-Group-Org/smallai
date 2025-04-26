
import { ArrowRight, Youtube, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-pattern pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        <div className="flex gap-6 mb-12">
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-purple transition-colors"
          >
            <Youtube size={32} />
          </a>
          <a 
            href="https://discord.gg/u6fvHes5CW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-purple transition-colors"
          >
            <MessageSquare size={32} />
          </a>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
            Effortless Automation, <br/> Intelligent Results.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            We build AI systems that skip manual work clutter and make your operations easier to manage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary flex items-center justify-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Discovery Call 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Services
            </a>
          </div>
        </div>
        
        <div className="mt-16 w-full max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-black/10 shadow-lg animate-fade-in overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-bold text-black mb-2">30+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-black mb-2">10x</h3>
              <p className="text-gray-600">Average Client ROI</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-black mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
