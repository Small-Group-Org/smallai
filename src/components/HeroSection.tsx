
import { ArrowRight } from "lucide-react";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A0C1B] pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0C1B]/95"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        {/* Social Icons */}
        <div className="mb-12">
          <SocialIcons />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Effortless Automation, <br/> Intelligent Results.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12">
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
        
        <div className="mt-16 w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">30+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">10x</h3>
              <p className="text-gray-300">Average Client ROI</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
