import { Youtube } from "lucide-react";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="container-custom py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-1">Small AI</h3>
            <p className="text-sm font-medium text-brand-purple mb-2">
              A product of Small Group
            </p>
            <p className="text-sm text-gray-600 mb-6">
              We build intelligent AI automations that transform your business
              operations. Our solutions cut hours of manual work, reduce errors,
              and drive growth.
            </p>
          </div>

          {/* Social Media Nodes */}
          <div className="relative mt-8 md:mt-12 col-span-1 md:col-span-2">
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[300px] md:max-w-none">
                {/* SVG Connectors */}
                <svg
                  className="absolute  right-0 w-full"
                  width="160"
                  height="80"
                  viewBox="0 0 160 80"
                  preserveAspectRatio="none"
                >
                  {/* Single curved path connecting all nodes */}
                  <path
                    d="M160,40 C140,40 120,20 90,20 L50,20 C30,20 20,40 10,40 C0,40 0,20 0,0 C0,-20 20,-20 40,-20"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                  {/* Connection point circles */}
                  <circle cx="160" cy="40" r="3" fill="#E2E8F0" />
                  <circle cx="90" cy="20" r="3" fill="#E2E8F0" />
                  <circle cx="10" cy="40" r="3" fill="#E2E8F0" />
                  <circle cx="40" cy="-20" r="3" fill="#E2E8F0" />
                </svg>

                {/* Nodes Container */}
                <div className="flex flex-row justify-center md:justify-end gap-6 md:gap-12 md:pr-24">
                  {/* YouTube Node */}
                  <div className="relative group">
                    <div className="relative z-20">
                      <div className="bg-white border-2 border-gray-200 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#FF0000] group-hover:border-[#FF0000]">
                        <a
                          href="https://www.youtube.com/@smallgrp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#FF0000] transition-colors flex flex-col items-center justify-center h-full gap-1 group-hover:text-[#FF0000]"
                        >
                          <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-[8px] md:text-[10px] font-medium">
                            YouTube
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Discord Node */}
                  <div className="relative group">
                    <div className="relative z-20">
                      <div className="bg-white border-2 border-gray-200 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#5865F2] group-hover:border-[#5865F2]">
                        <a
                          href="https://discord.gg/u6fvHes5CW"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#5865F2] transition-colors flex flex-col items-center justify-center h-full gap-1 group-hover:text-[#5865F2]"
                        >
                          <FaDiscord className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-[8px] md:text-[10px] font-medium">
                            Discord
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Twitter Node */}
                  <div className="relative group">
                    <div className="relative z-20">
                      <div className="bg-white border-2 border-gray-200 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#1DA1F2] group-hover:border-[#1DA1F2]">
                        <a
                          href="https://x.com/smallgrp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#1DA1F2] transition-colors flex flex-col items-center justify-center h-full gap-1 group-hover:text-[#1DA1F2]"
                        >
                          <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-[8px] md:text-[10px] font-medium">
                            Twitter
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Node */}
                  <div className="relative group">
                    <div className="relative z-20">
                      <div className="bg-white border-2 border-gray-200 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0077B5] group-hover:border-[#0077B5]">
                        <a
                          href="https://www.linkedin.com/company/smallgrp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#0077B5] transition-colors flex flex-col items-center justify-center h-full gap-1 group-hover:text-[#0077B5]"
                        >
                          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-[8px] md:text-[10px] font-medium">
                            LinkedIn
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Small AI. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
