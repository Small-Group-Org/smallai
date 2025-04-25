
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Automated SEO for Coaches",
      description: "AI-powered content generation and keyword optimization system for coaching businesses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["SEO", "AI Content", "Automation"],
    },
    {
      id: 2,
      title: "Customer Support AI Agent",
      description: "Intelligent AI system that handles routine customer inquiries and routes complex issues to human operators.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Customer Service", "AI Agent", "Natural Language Processing"],
    },
    {
      id: 3,
      title: "Social Media Automation",
      description: "End-to-end system for content planning, creation, and scheduling across multiple social platforms.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      tags: ["Social Media", "Content Creation", "Scheduling"],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our portfolio of AI automation projects delivering real business results.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link 
              to="/portfolio" 
              className="btn-primary flex items-center"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-brand-purple font-medium hover:underline"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
