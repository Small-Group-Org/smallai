
import { ArrowRight, Youtube, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-pattern pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95"></div>
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img 
            src="/lovable-uploads/a73d0f46-6208-4adc-8fae-6bd4cdf546d2.png" 
            alt="Small AI Founder" 
            className="w-40 h-40 rounded-full border-8 border-white shadow-2xl mb-4 hover:transform hover:scale-105 transition-all duration-300"
          />
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 mb-16"
        >
          <a 
            href="https://www.youtube.com/@smallgrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg text-gray-600 hover:text-red-500 hover:shadow-xl transition-all transform hover:scale-110 duration-200"
          >
            <Youtube size={36} />
          </a>
          <a 
            href="https://discord.gg/u6fvHes5CW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg text-gray-600 hover:text-[#7289da] hover:shadow-xl transition-all transform hover:scale-110 duration-200"
          >
            <MessageSquare size={36} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            Effortless Automation, <br/> Intelligent Results.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            We build AI systems that skip manual work clutter and make your operations easier to manage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn-primary flex items-center justify-center gap-2 group text-lg px-8 py-4 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Discovery Call 
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="btn-secondary text-lg px-8 py-4 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Services
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-black/10 shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-4xl font-bold text-black mb-3">30+</h3>
              <p className="text-gray-600 text-lg">Projects Completed</p>
            </div>
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-4xl font-bold text-black mb-3">10x</h3>
              <p className="text-gray-600 text-lg">Average Client ROI</p>
            </div>
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-4xl font-bold text-black mb-3">95%</h3>
              <p className="text-gray-600 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
