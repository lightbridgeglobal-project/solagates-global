"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/terms.jpeg"
            alt="Terms of Service"
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            Effective Date: May 28, 2026. Please read these terms carefully before accessing or using our services.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-3xl prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-grey-600 prose-a:text-accent hover:prose-a:text-primary">
          <p className="font-bold">
            These Terms of Service (“Terms”) govern your access to and use of the website, services, products, consultations, training programs, installations, and platforms provided by Solagates Global (“Company”, “we”, “our”, or “us”).
          </p>
          <p>
            By accessing or using our website or services, you agree to comply with and be legally bound by these Terms.
          </p>
          <p>
            If you do not agree to these Terms, you should discontinue use immediately.
          </p>

          <hr />

          <h2>1. COMPANY SERVICES</h2>
          <p>Solagates Global provides services including but not limited to:</p>
          <ul>
            <li>Residential solar installations</li>
            <li>Commercial solar infrastructure</li>
            <li>Industrial renewable energy systems</li>
            <li>Solar maintenance services</li>
            <li>Solar accessories and product sales</li>
            <li>Renewable energy consultations</li>
            <li>Solar training and mentorship programs</li>
            <li>Technical support services</li>
          </ul>

          <hr />

          <h2>2. ELIGIBILITY</h2>
          <p>You must be at least 18 years old or possess legal parental or guardian consent to use our services.</p>
          <p>By using our services, you represent that all information provided is accurate and lawful.</p>

          <hr />

          <h2>3. CONSULTATIONS & QUOTATIONS</h2>
          <p>All consultations, proposals, quotations, and project estimates are subject to:</p>
          <ul>
            <li>Site assessments</li>
            <li>Technical feasibility</li>
            <li>Product availability</li>
            <li>Pricing adjustments</li>
            <li>Operational considerations</li>
          </ul>
          <p>Project quotations may expire after the validity period specified in the quotation.</p>

          <hr />

          <h2>4. PAYMENTS</h2>
          <p>Payments for products, services, installations, consultations, or training programs must be made according to agreed payment terms.</p>
          <p>Failure to complete payments may result in:</p>
          <ul>
            <li>Suspension of services</li>
            <li>Delay of installations</li>
            <li>Cancellation of enrollment</li>
            <li>Additional administrative charges</li>
          </ul>
          <p>All fees are generally non-refundable except where otherwise stated in writing.</p>

          <hr />

          <h2>5. INSTALLATION SERVICES</h2>
          <p>Installation timelines may vary due to:</p>
          <ul>
            <li>Site conditions</li>
            <li>Weather</li>
            <li>Logistics</li>
            <li>Regulatory requirements</li>
            <li>Material availability</li>
            <li>Technical adjustments</li>
          </ul>
          <p>Clients are responsible for ensuring safe and lawful access to installation sites.</p>

          <hr />

          <h2>6. WARRANTIES</h2>
          <p>Warranty coverage may apply to eligible products and installations according to manufacturer and company terms.</p>
          <p>Warranty coverage does not apply to damages caused by:</p>
          <ul>
            <li>Misuse</li>
            <li>Unauthorized modification</li>
            <li>Improper handling</li>
            <li>Accidents</li>
            <li>Natural disasters</li>
            <li>Electrical faults outside system design specifications</li>
          </ul>

          <hr />

          <h2>7. TRAINING & ACADEMY PROGRAMS</h2>
          <p>Enrollment into training programs does not guarantee employment or business success.</p>
          <p>Participants are expected to:</p>
          <ul>
            <li>Attend sessions responsibly</li>
            <li>Follow safety protocols</li>
            <li>Respect instructors and participants</li>
            <li>Use training materials ethically</li>
          </ul>
          <p>Solagates Global reserves the right to suspend or remove participants for misconduct.</p>

          <hr />

          <h2>8. INTELLECTUAL PROPERTY</h2>
          <p>All website content, branding, designs, documents, materials, visuals, logos, training materials, and intellectual property belong to Solagates Global unless otherwise stated.</p>
          <p>Unauthorized reproduction, distribution, or commercial use is prohibited.</p>

          <hr />

          <h2>9. WEBSITE USAGE</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Attempt unauthorized access</li>
            <li>Interfere with website functionality</li>
            <li>Distribute malicious software</li>
            <li>Abuse communication channels</li>
            <li>Engage in fraudulent activity</li>
            <li>Misrepresent identity or information</li>
          </ul>

          <hr />

          <h2>10. LIMITATION OF LIABILITY</h2>
          <p>To the fullest extent permitted by law, Solagates Global shall not be liable for:</p>
          <ul>
            <li>Indirect damages</li>
            <li>Business interruption</li>
            <li>Loss of profits</li>
            <li>Data loss</li>
            <li>Operational downtime</li>
            <li>Third-party service failures</li>
            <li>Delays outside reasonable control</li>
          </ul>
          <p>Our liability shall not exceed the amount paid for the relevant service where legally permitted.</p>

          <hr />

          <h2>11. THIRD-PARTY PRODUCTS & SERVICES</h2>
          <p>Some products or services may involve third-party manufacturers, vendors, or providers.</p>
          <p>We are not responsible for the independent actions or policies of third parties.</p>

          <hr />

          <h2>12. TERMINATION</h2>
          <p>We reserve the right to suspend or terminate access to services or platforms for:</p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Fraudulent activity</li>
            <li>Misconduct</li>
            <li>Abuse of services</li>
            <li>Non-payment</li>
          </ul>

          <hr />

          <h2>13. GOVERNING LAW</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.</p>
          <p>Any disputes shall be subject to the jurisdiction of competent Nigerian courts.</p>

          <hr />

          <h2>14. MODIFICATIONS</h2>
          <p>We reserve the right to update or modify these Terms at any time without prior notice.</p>
          <p>Continued use of our services constitutes acceptance of revised Terms.</p>

          <hr />

          <h2>15. CONTACT INFORMATION</h2>
          <p>For legal or service inquiries, contact:</p>
          <p>
            <strong>SOLAGATES GLOBAL</strong><br />
            Email: <a href="mailto:legal@solagates.com">legal@solagates.com</a><br />
            Support: <a href="mailto:support@solagates.com">support@solagates.com</a><br />
            Website: <a href="http://www.solagates.com">www.solagates.com</a>
          </p>

          <hr />

          <h2>16. ACKNOWLEDGEMENT</h2>
          <p>By using Solagates Global’s website, services, consultations, products, or training programs, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>

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
