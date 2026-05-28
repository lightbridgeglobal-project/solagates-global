"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Wrench, ShieldCheck, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    id: "foundation",
    title: "Foundation Program",
    subtitle: "Basic Solar Installation Training",
    fee: "₦85,000 – ₦120,000",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    desc: "An intensive introductory course designed for beginners with no prior electrical background. Master the fundamentals of photovoltaic systems.",
    curriculum: [
      "Introduction to Renewable Energy",
      "Basic Electrical Concepts (DC vs AC)",
      "Solar Panel Types & Technologies",
      "Basic Inverter & Battery Connections",
      "Roof Mounting Fundamentals",
      "Safety Protocols & Gear"
    ]
  },
  {
    id: "professional",
    title: "Professional Installer",
    subtitle: "Advanced Solar Engineering Masterclass",
    fee: "₦250,000 – ₦350,000",
    icon: <Wrench className="w-8 h-8 text-white" />,
    desc: "For intermediate technicians wanting to master complex load profiling, three-phase systems, and lithium battery configurations.",
    curriculum: [
      "Advanced Load Profiling & System Sizing",
      "Lithium Battery Management Systems (BMS)",
      "Three-Phase Inverter Programming",
      "Grid-Tie & Hybrid System Design",
      "Fault Diagnostics & Troubleshooting",
      "National Electrical Code (NEC) Compliance"
    ],
    highlight: true
  },
  {
    id: "executive",
    title: "Executive Entrepreneur",
    subtitle: "Solar Business Leadership Mentorship",
    fee: "₦500,000 – ₦850,000",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    desc: "A premium mentorship track for business owners. Learn supply chain logistics, high-ticket sales, and how to scale an EPC solar company.",
    curriculum: [
      "Global Supply Chain & OEM Procurement",
      "B2B Enterprise Sales & Contract Negotiation",
      "Project Financing & ROI Modeling",
      "Scaling Engineering & Operations Teams",
      "Brand Positioning & Marketing",
      "1-on-1 Mentorship with Solagates Founders"
    ]
  }
];

export default function AcademyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/solar_blueprint_1779840293765.png" // placeholder image
            alt="Solagates Academy Engineering"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>
        
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Elite Engineering Training
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-tight mb-6"
          >
            Master The Grid. <br /> <span className="text-accent">Engineer The Future.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 mb-12 leading-relaxed"
          >
            Solagates Academy is Africa's premier renewable energy institution. We don't just teach theory; we build world-class solar engineers and entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* Tiers Pricing Section */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6 tracking-tight">Certification Pathways</h2>
            <p className="font-sans text-lg text-grey-500 max-w-2xl mx-auto">
              Select the program that matches your career trajectory. Our curriculum is 70% practical, ensuring you leave field-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                  tier.highlight
                    ? "bg-primary text-white shadow-2xl scale-105 z-10 border border-accent/30"
                    : "bg-white text-primary border border-grey-200 shadow-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${tier.highlight ? "bg-white/10" : "bg-primary"}`}>
                  {tier.icon}
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-2">{tier.title}</h3>
                <p className={`font-sans text-sm uppercase tracking-wider mb-6 ${tier.highlight ? "text-accent" : "text-grey-500"}`}>
                  {tier.subtitle}
                </p>
                <div className="mb-6">
                  <span className="font-display font-bold text-3xl">{tier.fee}</span>
                </div>
                
                <p className={`font-sans leading-relaxed mb-8 ${tier.highlight ? "text-grey-300" : "text-grey-600"}`}>
                  {tier.desc}
                </p>
                
                <div className="flex-grow">
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 opacity-80">Curriculum Structure</h4>
                  <ul className="space-y-4 mb-8">
                    {tier.curriculum.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-sans text-sm">
                        <ShieldCheck className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-accent" : "text-primary"}`} />
                        <span className={tier.highlight ? "text-grey-200" : "text-grey-700"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={`https://wa.me/2348075155862?text=I'm interested in enrolling for the ${tier.title} program.`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto w-full font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-colors flex items-center justify-center gap-2 min-h-[56px] ${
                    tier.highlight
                      ? "bg-accent text-primary hover:bg-white"
                      : "bg-primary text-white hover:bg-accent hover:text-primary"
                  }`}
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
