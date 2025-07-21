import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 max-w-4xl mt-32">
  <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

  <div className="prose max-w-none">
    <p className="text-gray-600 mb-8">Last updated: 7/19/2025</p>

    {/* Section 1: Introduction */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
      <p className="mb-4">
        Crashfree India ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
      </p>
    </section>

    {/* Section 2: Information We Collect */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
      <p className="mb-4">We may collect personal information such as:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name and contact information</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Educational or professional background</li>
        <li>Information provided in applications or registrations</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Non-Personal Information</h3>
      <p className="mb-4">We may collect non-personal information such as:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>IP address</li>
        <li>Website usage patterns</li>
      </ul>
    </section>

    {/* Section 3: How We Use Your Information */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">We use collected information for:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Processing applications and registrations</li>
        <li>Communicating about our programs and initiatives</li>
        <li>Improving our website and services</li>
        <li>Sending newsletters and updates (with your consent)</li>
        <li>Compliance with legal obligations</li>
        <li>Research and analysis for road safety advocacy</li>
      </ul>
    </section>

    {/* Section 4: Information Sharing */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>With your explicit consent</li>
        <li>To comply with legal requirements</li>
        <li>With trusted partners who assist in our operations (under strict confidentiality agreements)</li>
        <li>In anonymized form for research and advocacy purposes</li>
      </ul>
    </section>

    {/* Section 5: Data Security */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
      </p>
    </section>

    {/* Section 6: Your Rights */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of communications</li>
        <li>Withdraw consent where applicable</li>
      </ul>
    </section>

    {/* Section 7: Cookies and Tracking */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
      <p className="mb-4">
        Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookie settings through your browser preferences.
      </p>
    </section>

    {/* Section 8: Changes to This Policy */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on our website with an updated date.
      </p>
    </section>

    {/* Section 9: Contact Us */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy or our privacy practices, please contact us at:
      </p>
      <p className="mb-2">Email: hello@crashfreeindia.org</p>
      <p className="mb-2">
        Address: Cars24 Services Private Limited, Tower C, 7th Floor, SAS Towers, Medanta the Medicity, Sector 38, Gurugram, Haryana 122001
      </p>
    </section>
  </div>
</div>

  )
}

export default PrivacyPolicy