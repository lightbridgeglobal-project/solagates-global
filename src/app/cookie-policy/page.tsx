"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-cookie.jpg"
            alt="Cookie Policy"
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
            Cookie Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            How Solagates Global uses cookies and similar tracking technologies across our digital infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-3xl prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-grey-600 prose-a:text-accent hover:prose-a:text-primary">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide statistical data to the owners of the site.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies to understand how you interact with our website, to remember your preferences in our ROI Calculator, and to improve the overall enterprise user experience.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly and cannot be switched off in our systems.</li>
            <li><strong>Performance Cookies:</strong> Allow us to count visits and traffic sources to measure and improve the performance of our site.</li>
            <li><strong>Functional Cookies:</strong> Enable the website to provide enhanced functionality and personalization.</li>
          </ul>

          <h2>4. Managing Your Cookies</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
        </div>
      </section>
    </div>
  );
}
