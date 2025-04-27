import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
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
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom prose prose-lg max-w-4xl">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Small AI, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when
              you:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Fill out forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
              <li>Contact us for support</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve our website and user experience</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: privacy@smallai.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
