
import { ArrowRight, Youtube, Sparkles, Zap, Code, Brain } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <div
      className={`absolute animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );

  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} className="top-20 left-10 z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <Brain className="w-8 h-8 text-white" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} className="top-40 right-20 z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <Code className="w-6 h-6 text-white" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} className="bottom-40 left-20 z-10">
        <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <Zap className="w-7 h-7 text-white" />
        </div>
      </FloatingElement>

      <FloatingElement delay={0.5} className="top-60 right-40 z-10">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      </FloatingElement>

      <div className="container-custom relative z-20 flex flex-col items-center justify-center py-20 md:py-32">
        {/* Social Media Nodes */}
        <div className={`absolute right-4 md:right-20 top-10 md:top-24 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <div className="relative">
            {/* Curved Connection Lines */}
            <svg className="absolute top-12 -left-20 w-24 h-16 hidden md:block" viewBox="0 0 100 60">
              <path
                d="M 0 30 Q 25 10 50 30 Q 75 50 100 30"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-line"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col gap-6">
              {/* YouTube Node */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <a
                    href="https://www.youtube.com/@smallgrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center h-full text-white hover:text-red-400 transition-colors group"
                  >
                    <Youtube className="w-7 h-7 md:w-9 md:h-9 mb-1" />
                    <span className="text-[8px] md:text-[10px] font-medium opacity-90">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Discord Node */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <a
                    href="https://discord.gg/u6fvHes5CW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center h-full text-white hover:text-indigo-400 transition-colors group"
                  >
                    <FaDiscord className="w-7 h-7 md:w-9 md:h-9 mb-1" />
                    <span className="text-[8px] md:text-[10px] font-medium opacity-90">Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-8 hover:bg-white/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">AI-Powered Business Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Business Today
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of AI automation to streamline operations, boost efficiency, and accelerate growth with cutting-edge intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://calendly.com/prakarshgupta"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl py-4 px-8 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              target="_blank"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl py-4 px-8 text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Explore Solutions</span>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "AI Projects Delivered", color: "from-purple-500 to-pink-500" },
              { number: "300%", label: "Average ROI Increase", color: "from-blue-500 to-cyan-500" },
              { number: "24/7", label: "Automated Operations", color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? "animate-fade-in" : ""}`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <h3 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </h3>
                  <p className="text-white/70 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
