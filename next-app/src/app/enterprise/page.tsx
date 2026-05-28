"use client";

import { motion } from "framer-motion";
import { Building, Landmark, Stethoscope, GraduationCap, Map, ArrowRight, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

const SECTORS = [
  {
    icon: <Landmark className="w-8 h-8 text-accent" />,
    title: "Government & NGOs",
    desc: "Large-scale rural electrification and municipal grid backup systems designed to meet rigorous public sector procurement standards."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-accent" />,
    title: "Hospitals & Healthcare",
    desc: "Zero-downtime medical-grade hybrid systems. We ensure ventilators, ICUs, and cold-chain storage never experience a power interruption."
  },
  {
    icon: <Building className="w-8 h-8 text-accent" />,
    title: "Real Estate Developers",
    desc: "Estate-wide micro-grids and smart home solar integration for luxury property developments, drastically increasing property value."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-accent" />,
    title: "Educational Institutions",
    desc: "Campus-wide solar arrays to eliminate diesel costs, providing clean, uninterrupted power for labs, dormitories, and lecture halls."
  },
  {
    icon: <Factory className="w-8 h-8 text-accent" />,
    title: "Industrial & Manufacturing",
    desc: "High-voltage load balancing for heavy machinery, hybridizing grid and diesel with solar to slash operational expenditures."
  },
  {
    icon: <Map className="w-8 h-8 text-accent" />,
    title: "Agricultural Complexes",
    desc: "Solar-powered irrigation, processing mills, and off-grid cold storage facilities to secure agricultural supply chains."
  }
];

export default function EnterprisePage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-white pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/project_tech_hub_1779840264129.png" // using placeholder industrial image
            alt="Enterprise Solar Infrastructure"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <Building className="w-4 h-4 text-accent" />
              <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
                Solagates Commercial & Industrial
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-tight mb-6"
            >
              Infrastructure At <br /> <span className="text-accent">Massive Scale.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 mb-12 leading-relaxed"
            >
              We engineer, procure, and construct (EPC) MW-scale solar farms, commercial rooftop arrays, and industrial hybrid micro-grids. Powering the backbone of Africa's economy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact?type=enterprise"
                className="bg-white text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-grey-100 transition-colors inline-flex items-center gap-2 min-h-[56px]"
              >
                Request Corporate Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6 tracking-tight">Sectors We Power</h2>
            <p className="font-sans text-lg text-grey-500 max-w-2xl mx-auto">
              Our engineering division handles the complex load profiling required to stabilize power for critical sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-grey-200 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {sector.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-4">{sector.title}</h3>
                <p className="font-sans text-grey-600 leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The EPC Process */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-primary text-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 tracking-tight">Our Enterprise EPC Framework</h2>
            <p className="font-sans text-lg text-grey-400 mb-8 leading-relaxed">
              Engineering, Procurement, and Construction (EPC) at an enterprise scale requires more than just installing panels. It demands meticulous financial modeling, supply chain logistics, and rigorous civil and electrical engineering.
            </p>
            <ul className="space-y-6">
              {[
                "Comprehensive Feasibility & Load Flow Studies",
                "Direct OEM Procurement (Tier-1 Panels & LiFePO4)",
                "Civil, Structural & Electrical Engineering",
                "Grid Integration & Diesel Generator Hybridization",
                "24/7 SCADA Monitoring & O&M Contracts"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-sans text-grey-300">
                  <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
             <img
              src="/commercial_solar_1779840161462.png"
              alt="EPC Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6 tracking-tight">Initiate A Project</h2>
          <p className="font-sans text-lg text-grey-600 max-w-2xl mb-10">
            Schedule a high-level technical meeting with our Chief Engineers to discuss your facility's energy transition.
          </p>
          <Link
            href="/contact?type=enterprise"
            className="bg-primary text-white font-display font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-accent transition-colors shadow-xl min-h-[56px] flex items-center justify-center"
          >
            Contact the Enterprise Division
          </Link>
        </div>
      </section>
    </div>
  );
}
