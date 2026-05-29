"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-privacy.jpg"
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Legal Information
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            Effective Date: May 28, 2026. We respect your privacy and are committed to protecting your personal data.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-3xl prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-grey-600 prose-a:text-accent hover:prose-a:text-primary">
          <p className="font-bold">Welcome to Solagates Global (“Company”, “we”, “our”, or “us”).</p>

          <p>
            We are committed to protecting the privacy, confidentiality, and security of our clients, partners, visitors, and users across all our digital platforms, services, installations, consultations, training programs, and operational systems.
          </p>
          <p>
            This Privacy Policy explains how Solagates Global collects, uses, stores, protects, and discloses information when you interact with our website, products, services, consultations, training programs, support systems, and communication channels.
          </p>
          <p>
            By accessing or using our website or services, you agree to the practices described in this Privacy Policy.
          </p>

          <hr />

          <h2>1. INFORMATION WE COLLECT</h2>
          <p>We may collect the following categories of information:</p>

          <h3>A. Personal Information</h3>
          <p>Including but not limited to:</p>
          <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Residential or business address</li>
            <li>Company or organization details</li>
            <li>Project location</li>
            <li>Payment information</li>
            <li>Training enrollment information</li>
          </ul>

          <h3>B. Technical Information</h3>
          <p>When you access our website, we may automatically collect:</p>
          <ul>
            <li>Device information</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Website usage data</li>
            <li>Referral sources</li>
            <li>Cookies and analytics data</li>
          </ul>

          <h3>C. Service & Consultation Information</h3>
          <p>We may collect information related to:</p>
          <ul>
            <li>Energy requirements</li>
            <li>Property details</li>
            <li>Solar installation requests</li>
            <li>Consultation requests</li>
            <li>Maintenance records</li>
            <li>Product inquiries</li>
            <li>Training participation</li>
          </ul>

          <hr />

          <h2>2. HOW WE USE YOUR INFORMATION</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide renewable energy services</li>
            <li>Process consultations and quotations</li>
            <li>Deliver installation and maintenance services</li>
            <li>Manage customer support</li>
            <li>Process training enrollment</li>
            <li>Improve website performance</li>
            <li>Communicate updates and project information</li>
            <li>Provide customer assistance</li>
            <li>Improve operational efficiency</li>
            <li>Conduct internal analytics and reporting</li>
            <li>Ensure security and fraud prevention</li>
            <li>Comply with legal obligations</li>
          </ul>

          <hr />

          <h2>3. COMMUNICATIONS</h2>
          <p>By providing your contact information, you consent to receiving:</p>
          <ul>
            <li>Consultation updates</li>
            <li>Service notifications</li>
            <li>Installation scheduling information</li>
            <li>Maintenance reminders</li>
            <li>Promotional campaigns</li>
            <li>Educational resources</li>
            <li>Training announcements</li>
            <li>Business communications</li>
          </ul>
          <p>You may opt out of marketing communications at any time.</p>

          <hr />

          <h2>4. COOKIES & ANALYTICS</h2>
          <p>Our website may use cookies, analytics tools, and related technologies to:</p>
          <ul>
            <li>Improve user experience</li>
            <li>Analyze website traffic</li>
            <li>Enhance functionality</li>
            <li>Optimize performance</li>
            <li>Understand visitor behavior</li>
          </ul>
          <p>You may disable cookies through your browser settings; however, some features may become unavailable.</p>

          <hr />

          <h2>5. DATA SECURITY</h2>
          <p>We implement commercially reasonable administrative, technical, and organizational safeguards designed to protect your information from:</p>
          <ul>
            <li>Unauthorized access</li>
            <li>Misuse</li>
            <li>Disclosure</li>
            <li>Alteration</li>
            <li>Loss</li>
            <li>Cybersecurity threats</li>
          </ul>
          <p>Despite our efforts, no online transmission or storage system can be guaranteed completely secure.</p>

          <hr />

          <h2>6. INFORMATION SHARING</h2>
          <p>We do not sell personal information.</p>
          <p>We may share information with:</p>
          <ul>
            <li>Authorized employees</li>
            <li>Installation partners</li>
            <li>Service providers</li>
            <li>Payment processors</li>
            <li>Legal authorities where required</li>
            <li>Technical support providers</li>
          </ul>
          <p>All third parties are expected to maintain confidentiality and appropriate data protection standards.</p>

          <hr />

          <h2>7. THIRD-PARTY SERVICES</h2>
          <p>Our website may contain links or integrations involving third-party services, including:</p>
          <ul>
            <li>Payment platforms</li>
            <li>Communication platforms</li>
            <li>Analytics providers</li>
            <li>Social media platforms</li>
          </ul>
          <p>We are not responsible for the privacy practices of third-party services.</p>

          <hr />

          <h2>8. DATA RETENTION</h2>
          <p>We retain information for as long as necessary to:</p>
          <ul>
            <li>Provide services</li>
            <li>Maintain operational records</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </ul>

          <hr />

          <h2>9. YOUR RIGHTS</h2>
          <p>Depending on applicable laws, you may have rights to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request corrections</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>Restrict processing</li>
            <li>Request data portability</li>
          </ul>
          <p>Requests may be submitted through our official communication channels.</p>

          <hr />

          <h2>10. CHILDREN’S PRIVACY</h2>
          <p>Our services are not directed toward children under the age of 13 without parental or guardian supervision.</p>
          <p>We do not knowingly collect personal information from children without appropriate consent.</p>

          <hr />

          <h2>11. INTERNATIONAL USERS</h2>
          <p>By accessing our services from outside Nigeria, you acknowledge that your information may be processed and stored in jurisdictions where data protection laws may differ.</p>

          <hr />

          <h2>12. CHANGES TO THIS POLICY</h2>
          <p>We reserve the right to update or modify this Privacy Policy at any time.</p>
          <p>Changes become effective immediately upon publication on our website.</p>
          <p>Users are encouraged to review this policy periodically.</p>

          <hr />

          <h2>13. CONTACT INFORMATION</h2>
          <p>For privacy-related inquiries, contact:</p>
          <p>
            <strong>SOLAGATES GLOBAL</strong><br />
            Email: <a href="mailto:privacy@solagates.com">privacy@solagates.com</a><br />
            Support: <a href="mailto:support@solagates.com">support@solagates.com</a><br />
            Website: <a href="http://www.solagates.com">www.solagates.com</a>
          </p>

          <hr />

          <h2>14. ACKNOWLEDGEMENT</h2>
          <p>By using our website, services, training programs, consultations, or platforms, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>

          <hr />

          <p className="font-bold text-center text-primary mt-12">
            SOLAGATES GLOBAL<br />
            Powering Africa’s Future with Intelligent Energy Systems.
          </p>
        </div>
      </section>
    </div>
  );
}
