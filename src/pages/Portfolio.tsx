import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Automated SEO for Coaches",
      description: "AI-powered content generation and keyword optimization system for coaching businesses that improved organic traffic by 215% within 3 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["SEO", "AI Content", "Automation"],
      videoLink: "https://youtube.com/@smallgrp",
    },
    {
      id: 2,
      title: "Customer Support AI Agent",
      description: "Intelligent AI system that handles routine customer inquiries and routes complex issues to human operators. Reduced support workload by 70% and improved response time by 85%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Customer Service", "AI Agent", "Natural Language Processing"],
      videoLink: "https://youtube.com/@smallgrp",
    },
    {
      id: 3,
      title: "Social Media Automation",
      description: "End-to-end system for content planning, creation, and scheduling across multiple social platforms. Increased posting consistency by 300% and engagement by 45%.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Social Media", "Content Creation", "Scheduling"],
      videoLink: "https://youtube.com/@smallgrp",
    },
    {
      id: 4,
      title: "Lead Generation Automation",
      description: "AI-powered system that identifies, qualifies, and engages potential leads across multiple channels. Generated 3x more qualified leads with 40% less manual effort.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Lead Generation", "Sales", "AI"],
      videoLink: "https://youtube.com/@smallgrp",
    },
    {
      id: 5,
      title: "Data Analysis Automation",
      description: "Automated data processing and analysis system that transforms raw data into actionable business insights. Reduced analysis time by 90%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Data Analysis", "Business Intelligence", "Automation"],
      videoLink: "https://youtube.com/@smallgrp",
    },
    {
      id: 6,
      title: "E-commerce Inventory Management",
      description: "AI-driven inventory forecasting and management system for e-commerce businesses. Reduced stockouts by 85% and optimized inventory levels.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["E-commerce", "Inventory", "AI Forecasting"],
      videoLink: "https://youtube.com/@smallgrp",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Getting Started with AI Automation",
      description: "Learn the basics of implementing AI automation in your business.",
      link: "https://youtube.com/@smallgrp",
      type: "Video",
    },
    {
      id: 2,
      title: "10 AI Tools Every Business Should Use",
      description: "A curated list of the most impactful AI tools for business operations.",
      link: "https://youtube.com/@smallgrp",
      type: "Guide",
    },
    {
      id: 3,
      title: "How to Calculate ROI on AI Investments",
      description: "A practical framework for measuring the return on your AI automation projects.",
      link: "https://youtube.com/@smallgrp",
      type: "Spreadsheet",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-black text-white py-12 md:py-20">
          <div className="container-custom">
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Explore our portfolio of AI automation projects that have delivered 
              tangible business results for our clients across various industries.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-purple font-medium hover:underline inline-flex items-center"
                      >
                        Watch Demo
                      </a>
                      <a
                        href="#contact"
                        className="btn-primary text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Request Similar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 card-hover"
                >
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-purple text-white rounded-full mb-4">
                    {resource.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-purple font-medium hover:underline"
                  >
                    Access Resource
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-brand-purple to-brand-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can build custom AI automation solutions to enhance
              your business operations and drive growth.
            </p>
            <a
              href="#contact"
              className="btn-primary bg-white text-brand-purple"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Your Discovery Call
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
