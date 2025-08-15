import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/commons/constant";
import { generateProjectSlug } from "@/lib/utils";


const PortfolioSection = () => {
  const handleViewAllClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our portfolio of AI automation products delivering real
              business results.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              to="/portfolio"
              className="btn-primary flex items-center"
              onClick={handleViewAllClick}
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
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
                  to={`/portfolio/${generateProjectSlug(project.title)}`}
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
