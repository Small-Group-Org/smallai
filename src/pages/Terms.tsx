import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  React.useEffect(() => {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom prose prose-lg max-w-4xl">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using Small AI's website and services, you agree
              to be bound by these Terms of Service and all applicable laws and
              regulations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Small
              AI's website for personal, non-commercial use only.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Services</h2>
            <p>
              Small AI provides AI automation services for businesses. We
              reserve the right to modify, suspend, or discontinue any part of
              our services at any time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of our website are owned
              by Small AI and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
