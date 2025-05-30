import React from "react";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing and using Small AI's website and services, you agree to
          be bound by these Terms of Service and all applicable laws and
          regulations. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily access the materials (information
          or software) on Small AI's website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>
            Attempt to decompile or reverse engineer any software contained on
            the website
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on Small AI's website are provided on an 'as is' basis.
          Small AI makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall Small AI or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on Small AI's website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Accuracy of Materials
        </h2>
        <p className="mb-4">
          The materials appearing on Small AI's website could include technical,
          typographical, or photographic errors. Small AI does not warrant that
          any of the materials on its website are accurate, complete, or
          current.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
        <p className="mb-4">
          Small AI has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Small AI of the
          site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
        <p className="mb-4">
          Small AI may revise these terms of service for its website at any time
          without notice. By using this website, you are agreeing to be bound by
          the then current version of these terms of service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws and you irrevocably submit to the exclusive jurisdiction
          of the courts in that location.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
