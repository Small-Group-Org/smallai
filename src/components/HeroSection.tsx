
import { Youtube, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FEF7CD] to-white pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTUgNWg1MHY1MEg1VjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkMzQTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        <div className="flex gap-8 mb-12 animate-fade-in">
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 bg-red-500 rounded-full blur transition-all group-hover:blur-md"></div>
            <div className="relative bg-white p-4 rounded-full border-2 border-red-500 transition-transform hover:-translate-y-1">
              <Youtube size={32} className="text-red-500" />
            </div>
          </a>
          <a 
            href="https://discord.gg/u6fvHes5CW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#5865F2] rounded-full blur transition-all group-hover:blur-md"></div>
            <div className="relative bg-white p-4 rounded-full border-2 border-[#5865F2] transition-transform hover:-translate-y-1">
              <MessageSquare size={32} className="text-[#5865F2]" />
            </div>
          </a>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#1E40AF] mb-8 animate-fade-in [animation-delay:200ms]">
            Effortless Automation, <br/> Intelligent Results.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in [animation-delay:400ms] max-w-2xl mx-auto">
            We build AI systems that skip manual work clutter and make your operations easier to manage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in [animation-delay:600ms]">
            <a 
              href="#contact" 
              className="btn-primary flex items-center justify-center gap-2 group text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Discovery Call 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#services" 
              className="btn-secondary text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Services
            </a>
          </div>
        </div>
        
        <div className="mt-20 w-full max-w-4xl mx-auto animate-fade-in [animation-delay:800ms]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold text-[#8B5CF6] mb-2">30+</h3>
              <p className="text-gray-600 text-lg">Projects Completed</p>
            </div>
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold text-[#1E40AF] mb-2">10x</h3>
              <p className="text-gray-600 text-lg">Average Client ROI</p>
            </div>
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-4xl font-bold text-[#0D9488] mb-2">95%</h3>
              <p className="text-gray-600 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
