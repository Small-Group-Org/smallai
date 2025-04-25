
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI Workflow Automation",
      description: "We automate repetitive business processes using custom AI agents, saving you time and reducing errors.",
      icon: "⚙️",
    },
    {
      id: 2,
      title: "Custom AI Solutions",
      description: "Bespoke AI solutions designed specifically for your business challenges and operational requirements.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
      icon: "🔄",
    },
    {
      id: 4,
      title: "AI-Powered MVPs",
      description: "Rapidly develop AI-driven minimum viable products to validate your business ideas.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
