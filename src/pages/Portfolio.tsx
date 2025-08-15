import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import { projects } from "@/commons/constant";
import { generateProjectSlug } from "@/lib/utils";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="bg-black text-white py-12 md:py-20">
          <div className="container-custom">
            <Link
              to="/"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Explore our portfolio of AI automation projects that have
              delivered tangible business results for our clients across various
              industries.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Featured Projects
            </h2>
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
                    <Link 
                      to={`/portfolio/${generateProjectSlug(project.title)}`}
                      className="block"
                    >
                      <h3 className="text-xl font-bold mb-2 hover:text-brand-purple transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
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
                    <div className="flex items-center mt-4">
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-purple font-medium hover:underline inline-flex items-center"
                      >
                        Watch Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact" className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Book a free discovery call to discuss how we can help automate
              your business processes.
            </p>
            <BookCallButton className="text-lg" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
