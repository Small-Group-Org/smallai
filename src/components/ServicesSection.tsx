
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI Automations",
      description: "We automate repetitive business processes using custom AI agents, saving you time and reducing errors.",
      icon: "🤖",
    },
    {
      id: 2,
      title: "AI Consultancy",
      description: "Expert guidance on implementing AI solutions and optimizing your business processes.",
      icon: "💡",
    },
    {
      id: 3,
      title: "SaaS/MVP Building",
      description: "Rapid development of AI-powered MVPs using modern tools like Lovable, Bolt, and Replit.",
      icon: "🚀",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We design and build intelligent automation solutions that streamline your workflows,
            reduce manual labor, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md p-6 card-hover border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-brand-purple font-medium hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
