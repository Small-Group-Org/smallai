
import { Youtube, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <div className="relative w-full max-w-[300px] h-[120px]">
      {/* Decorative curved lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120">
        <path
          className="text-brand-purple/30"
          d="M50,60 Q150,20 250,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          className="text-brand-purple/20"
          d="M50,80 Q150,120 250,80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Social Icons */}
      <div className="relative flex justify-between items-center w-full h-full px-8">
        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com/@smallgrp"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110">
            <Youtube 
              size={32} 
              className="text-white transform transition-transform group-hover:rotate-12" 
            />
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>

        {/* Discord Icon */}
        <a
          href="https://discord.gg/u6fvHes5CW"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110">
            <MessageSquare 
              size={32} 
              className="text-white transform transition-transform group-hover:rotate-12" 
            />
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
