import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/commons/constant";
import { generateProjectSlug } from "@/lib/utils";
import { useState, useRef } from "react";

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleViewAllClick = () => {
    window.scrollTo(0, 0);
  };

  const scrollToNext = () => {
    if (currentIndex < featuredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToProject(currentIndex + 1);
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToProject(currentIndex - 1);
    }
  };

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const projectWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      container.scrollTo({
        left: index * (projectWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < featuredProjects.length - 1;
  
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

        {/* Navigation Buttons and Projects Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={scrollToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:shadow-xl text-gray-700"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={scrollToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:shadow-xl text-gray-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          )}

          {/* Projects Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-16 hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${generateProjectSlug(project.title)}`}
                className="block"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100 flex-shrink-0 w-80 h-96 cursor-pointer flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-2 min-h-[3rem]">
                      {project.description.split(' ').slice(0, 10).join(' ')}
                      {project.description.split(' ').length > 10 ? '...' : ''}
                    </p>
                                        <div className="flex flex-nowrap gap-2 mb-4 h-7 overflow-hidden">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center text-brand-purple font-medium mt-auto">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
