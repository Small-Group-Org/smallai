
import { ArrowRight, Brain, Rocket, Lightbulb, Zap, Code2, Database } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "AI Automation Engines",
      description: "Revolutionary AI-powered workflows that eliminate manual tasks and boost productivity by 10x with intelligent decision-making capabilities.",
      icon: Brain,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      features: ["Smart Workflow Design", "Real-time Analytics", "Custom AI Models"],
    },
    {
      id: 2,
      title: "AI Strategy & Innovation",
      description: "Strategic AI consultation and implementation roadmaps that transform your business vision into cutting-edge automated reality.",
      icon: Lightbulb,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      features: ["Innovation Roadmaps", "AI Implementation", "Business Intelligence"],
    },
    {
      id: 3,
      title: "Rapid MVP Development",
      description: "Lightning-fast development of AI-powered MVPs using cutting-edge tools and frameworks for maximum market impact.",
      icon: Rocket,
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      features: ["Rapid Prototyping", "AI Integration", "Market-Ready Solutions"],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-semibold">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Supercharge Your Business with
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            We craft intelligent automation solutions that don't just improve efficiency—they revolutionize how your business operates in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transition-all duration-500 ${hoveredCard === service.id ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl py-3 px-6 transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already leveraging AI to drive unprecedented growth and efficiency.
              </p>
              <a
                href="https://calendly.com/prakarshgupta"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold rounded-2xl py-4 px-8 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>Book Your Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
