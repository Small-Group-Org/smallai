import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          At Small AI, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website and use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Register for our services</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us through our website</li>
          <li>Participate in our surveys or feedback forms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve our website and user experience</li>
          <li>Communicate with you about updates and changes</li>
          <li>Send you marketing communications (with your consent)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational security
          measures to protect your personal information. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@smallai.com
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
