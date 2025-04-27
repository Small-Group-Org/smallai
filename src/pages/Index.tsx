import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import BookCallButton from "@/components/BookCallButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PartnersSection />
        <section id="contact" className="section-padding bg-gray-50">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
