"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Globe2, Target, PenTool } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col overflow-hidden bg-white">
      {/* Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary text-white pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-black" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
        
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight mb-6"
          >
            Engineering <span className="text-accent">Africa’s</span> Energy Independence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are Solagates Global—a premium renewable energy infrastructure company dedicated to bridging the continent's power deficit with tier-1 engineering and uncompromising quality.
          </motion.p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-[clamp(5rem,8vw,8rem)]">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Our Engineering Philosophy</h2>
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <p className="font-sans text-lg text-grey-600 leading-relaxed">
                At Solagates Global, we don't just "install solar panels." We architect intelligent, resilient micro-grids. Every system we deploy is meticulously sized, load-balanced, and engineered for worst-case scenarios, ensuring zero-downtime performance for our enterprise and residential clients.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">The Solagates Story</h2>
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <p className="font-sans text-lg text-grey-600 leading-relaxed">
                Founded on the premise that Africa's economic potential is heavily throttled by unstable power infrastructure, we set out to build a highly technical engineering firm capable of executing massive industrial projects while bringing the exact same tier-1 standards to residential estates.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6 mt-12">
              <div className="bg-grey-50 p-8 rounded-3xl border border-grey-100 flex flex-col items-center text-center">
                <Target className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display font-bold text-4xl text-primary mb-2">99.9%</h3>
                <p className="text-sm font-sans text-grey-500 uppercase tracking-wider">Uptime Reliability</p>
              </div>
              <div className="bg-grey-50 p-8 rounded-3xl border border-grey-100 flex flex-col items-center text-center">
                <Globe2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display font-bold text-4xl text-primary mb-2">3+</h3>
                <p className="text-sm font-sans text-grey-500 uppercase tracking-wider">Nations Serviced</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-grey-50 p-8 rounded-3xl border border-grey-100 flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display font-bold text-4xl text-primary mb-2">500+</h3>
                <p className="text-sm font-sans text-grey-500 uppercase tracking-wider">Enterprise Clients</p>
              </div>
              <div className="bg-grey-50 p-8 rounded-3xl border border-grey-100 flex flex-col items-center text-center">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display font-bold text-4xl text-primary mb-2">Tier-1</h3>
                <p className="text-sm font-sans text-grey-500 uppercase tracking-wider">Certifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-primary text-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 tracking-tight">Our Corporate DNA</h2>
            <p className="font-sans text-lg text-grey-400 max-w-2xl mx-auto">The principles that drive every engineering decision, procurement cycle, and installation project at Solagates Global.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Quality",
                desc: "We exclusively procure tier-1 components. No shortcuts, no substandard batteries. Only infrastructure built to last 25+ years."
              },
              {
                title: "Safety & Compliance",
                desc: "Every system is installed strictly adhering to IEEE and international solar electrical safety codes."
              },
              {
                title: "Data-Driven Sizing",
                desc: "We utilize advanced load analysis and simulation software to design systems that guarantee absolute energy security."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl"
              >
                <CheckCircle2 className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">{value.title}</h3>
                <p className="font-sans text-grey-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team Placeholder */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6 tracking-tight">Executive Leadership</h2>
            <p className="font-sans text-lg text-grey-600 max-w-2xl mx-auto">Led by veterans in electrical engineering, supply chain logistics, and renewable energy policy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: member * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 bg-grey-200 rounded-full mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-primary/10" />
                  <PenTool className="absolute inset-0 m-auto w-12 h-12 text-grey-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-2">Executive Name</h3>
                <p className="font-sans text-accent font-medium uppercase tracking-widest text-sm mb-4">Board Position</p>
                <p className="font-sans text-grey-500 text-sm leading-relaxed">
                  Over 15 years of experience architecting high-tension grids and managing international renewable energy portfolios.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-grey-50 border-t border-grey-100">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">Join the Energy Revolution</h2>
          <p className="font-sans text-lg text-grey-600 max-w-2xl mb-10">Whether you are looking to power your facility or join our elite engineering academy, our team is ready.</p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors min-h-[56px] flex items-center justify-center shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
