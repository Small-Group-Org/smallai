
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-pattern pt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered <span className="gradient-text">Automation</span> For Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We build intelligent automations that cut hours of manual work from your operations.
            Transform your workflow with AI systems tailored to your business needs.
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
        
        <div className="mt-16 w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-3xl font-bold text-white mb-2">30+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-3xl font-bold text-white mb-2">10x</h3>
              <p className="text-gray-300">Average Client ROI</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/e07c2248-2017-4eb5-a299-f4af4daa0643.png" 
            alt="Prakarsh Gupta - Small AI" 
            className="w-32 h-32 rounded-full border-4 border-white/20 object-cover animate-scale-in"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
