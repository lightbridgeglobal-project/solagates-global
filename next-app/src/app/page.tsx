"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Factory, GraduationCap, Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_family_1779840127369.png"
            alt="Premium Solar Installation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Africa's Premier Energy Infrastructure
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] tracking-tight mb-6 max-w-5xl"
          >
            Powering The Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Intelligent Energy</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 max-w-3xl mb-12 leading-relaxed"
          >
            Solagates Global designs, deploys, and maintains high-performance renewable energy systems for residential estates, commercial facilities, and industrial complexes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link
              href="/calculator"
              className="bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors min-h-[56px] flex items-center justify-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border border-white/30 text-white font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-colors min-h-[56px] flex items-center justify-center"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-grey-100">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <p className="text-center font-sans text-sm font-semibold text-grey-400 uppercase tracking-[0.2em] mb-8">
            Trusted by Enterprise Leaders & Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-60 grayscale">
            {/* Placeholder for logos */}
            <Building2 className="w-12 h-12" />
            <Factory className="w-12 h-12" />
            <ShieldCheck className="w-12 h-12" />
            <Zap className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Ecosystem Preview */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-primary leading-[1.1] mb-6 tracking-tight">
                An Ecosystem Built For Scale
              </h2>
              <p className="font-sans text-lg text-grey-600 leading-relaxed">
                From luxury residential installations to massive industrial grids, our infrastructure is engineered for zero-downtime performance.
              </p>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-2 font-sans font-semibold text-accent hover:text-primary transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Solutions",
                desc: "High-capacity solar grids and backup systems for corporate headquarters, hospitals, and industrial plants.",
                icon: <Building2 className="w-8 h-8 text-accent" />,
                href: "/enterprise"
              },
              {
                title: "Tier-1 Products",
                desc: "Authorized dealership for the world's leading tier-1 solar panels, lithium batteries, and hybrid inverters.",
                icon: <Zap className="w-8 h-8 text-accent" />,
                href: "/products"
              },
              {
                title: "Solagates Academy",
                desc: "Elite engineering training programs bridging the gap between theoretical knowledge and field execution.",
                icon: <GraduationCap className="w-8 h-8 text-accent" />,
                href: "/academy"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-grey-100 hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-4">{item.title}</h3>
                <p className="font-sans text-grey-600 mb-8 flex-grow">{item.desc}</p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 font-sans font-semibold text-primary hover:text-accent transition-colors"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent via-primary to-primary" />
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 max-w-4xl tracking-tight">
            Ready to Engineer Your Energy Independence?
          </h2>
          <p className="font-sans text-xl text-grey-400 max-w-2xl mb-12">
            Speak directly with our senior engineers to architect a custom renewable energy solution for your specific load requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              href="/calculator"
              className="bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors min-h-[56px] flex items-center justify-center"
            >
              Calculate Your ROI
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/20 transition-colors min-h-[56px] flex items-center justify-center"
            >
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
