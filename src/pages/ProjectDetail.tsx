import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import SocialMediaDemo from "@/components/SocialMediaDemo";
import SeoBlogDemo from "@/components/SeoBlogDemo";
import NotFound from "./NotFound";
import { projects } from "@/commons/constant";
import { generateProjectSlug } from "@/lib/utils";

const ProjectDetail = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the project by matching the slug
  const project = projects.find(p => generateProjectSlug(p.title) === projectSlug);

  // If project not found, show 404 page
  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 md:py-20">
          <div className="container-custom">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Project Image */}
              <div className="h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-8">
                {/* Tags */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Interactive Demo for Social Media Automation */}
                {generateProjectSlug(project.title) === 'social-media-automation' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Interactive Demo</h3>
                    <SocialMediaDemo />
                  </div>
                )}

                {/* Interactive Demo for SEO Blog Writer */}
                {generateProjectSlug(project.title) === 'seo-blog-writer' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Interactive Demo</h3>
                    <SeoBlogDemo />
                  </div>
                )}

                {/* Video Link */}
                {project.videoLink && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Demo Video</h3>
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-purple font-medium hover:underline text-lg"
                    >
                      Watch Demo Video <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Interested in Similar Solutions?</h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss how we can build custom AI automation solutions for your business.
                  </p>
                  <BookCallButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail; 