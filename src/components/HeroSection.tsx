import { ArrowRight, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden hero-pattern pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95"></div>

      <div
        ref={observerRef}
        className="container-custom relative z-10 flex flex-col items-center justify-center py-20 md:py-32"
      >
        {/* Social Media Nodes */}
        <div
          className={`absolute md:right-[-150px] right-[-30px] top-[-25px] md:top-24 z-50 transition-all duration-500 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative">
            {/* SVG Connectors for Desktop */}
            <svg
              className="absolute top-0 right-[-56px] md:right-[-76px] h-full hidden md:block"
              width="240"
              height="160"
              viewBox="0 0 240 160"
              preserveAspectRatio="none"
            >
              {/* Common starting point and first curve */}
              <path
                d="M120,80 C100,80 80,30 10,30"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 hover:stroke-red-500"
              />
              {/* Second curve from the same point */}
              <path
                d="M120,80 C100,80 80,110 10,110"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300 hover:stroke-[#5865F2]"
              />
              {/* Connection point circle */}
              <circle cx="120" cy="80" r="3" fill="#E2E8F0" />
            </svg>

            {/* Mobile Connectors - Horizontal */}
            <svg
              className="absolute top-[30px] right-0 w-full block md:hidden"
              width="160"
              height="80"
              viewBox="0 0 160 80"
              preserveAspectRatio="none"
            >
              {/* Common starting point and sequential connection */}
              <path
                d="M160,40 C140,40 120,30 90,30 L50,30"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300"
              />
              {/* Connection to second node */}
              <path
                d="M90,30 C70,30 60,30 10,30"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
                className="transition-all duration-300"
              />
              {/* Connection point circle */}
              <circle cx="160" cy="40" r="3" fill="#E2E8F0" />
            </svg>

            {/* Nodes Container */}
            <div className="flex md:flex-col flex-row md:gap-8 gap-12 pt-8 md:pt-0 pr-24 md:pr-[150px]">
              {/* YouTube Node */}
              <div className="relative group">
                <div className="relative z-20">
                  <div className="bg-white border-2 border-gray-200 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-500 group-hover:border-red-500">
                    <a
                      href="https://www.youtube.com/@smallgrp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-red-500 transition-colors flex flex-col items-center justify-center h-full gap-1 md:gap-2 group-hover:text-red-500"
                    >
                      <Youtube className="w-6 h-6 md:w-8 md:h-8" />
                      <span className="text-[10px] md:text-xs font-medium">
                        YouTube
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Discord Node */}
              <div className="relative group">
                <div className="relative z-20">
                  <div className="bg-white border-2 border-gray-200 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#5865F2] group-hover:border-[#5865F2]">
                    <a
                      href="https://discord.gg/u6fvHes5CW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#5865F2] transition-colors flex flex-col items-center justify-center h-full gap-1 md:gap-2 group-hover:text-[#5865F2]"
                    >
                      <FaDiscord className="w-6 h-6 md:w-8 md:h-8" />
                      <span className="text-[10px] md:text-xs font-medium">
                        Discord
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
            Streamline. Scale. Succeed.
          </h1>
          <p className="text-3xl md:text-5xl font-extrabold text-black mb-6">
            Power Your Business with AI today.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Transform your operations with intelligent AI solutions that drive
            efficiency, reduce costs, and accelerate your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
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
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
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
