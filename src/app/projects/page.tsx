"use client";

import { motion } from "framer-motion";
import { Zap, MapPin, Target, CheckCircle2, Factory, Home, Building } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    client: "Zenith Manufacturing Hub",
    category: "Industrial",
    icon: <Factory className="w-5 h-5" />,
    image: "/industrial-factory-solar-system.jpeg",
    location: "Ibadan, Oyo State",
    metrics: {
      capacity: "500kWp",
      storage: "1.2MWh Lithium",
      savings: "₦140M / Year",
      roi: "2.4 Years"
    },
    desc: "Complete hybridization of heavy manufacturing loads, eliminating grid instability and drastically reducing diesel dependency."
  },
  {
    id: 2,
    client: "Victoria Island Corporate HQ",
    category: "Commercial",
    icon: <Building className="w-5 h-5" />,
    image: "/project-2.jpeg",
    location: "Lagos State",
    metrics: {
      capacity: "150kWp",
      storage: "400kWh Lithium",
      savings: "₦45M / Year",
      roi: "3.1 Years"
    },
    desc: "Rooftop solar integration for a 12-story corporate headquarters ensuring zero downtime for servers and operations."
  },
  {
    id: 3,
    client: "Lekki Luxury Estate",
    category: "Residential",
    icon: <Home className="w-5 h-5" />,
    image: "/project-1.jpeg",
    location: "Lagos State",
    metrics: {
      capacity: "80kWp",
      storage: "250kWh Lithium",
      savings: "₦18M / Year",
      roi: "3.5 Years"
    },
    desc: "Community micro-grid powering 15 luxury villas with intelligent load shedding and individual smart meters."
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary text-white pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-projects.jpg"
            alt="Solagates Projects"
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
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Proven Execution
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,5rem)] leading-[1.1] tracking-tight mb-6"
          >
            Engineering Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 leading-relaxed max-w-3xl mx-auto"
          >
            Explore our footprint. From luxury residential estates to massive industrial manufacturing plants, we deliver uncompromising results.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto space-y-24">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Visuals */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-primary shadow-lg flex items-center gap-2">
                    {project.icon} {project.category}
                  </div>
                </div>
                {/* Decorative element */}
                <div className={`absolute -z-10 w-full h-full bg-accent/10 rounded-3xl top-6 ${i % 2 === 1 ? "-left-6" : "-right-6"}`} />
              </div>

              {/* Data */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                    {project.client}
                  </h2>
                  <p className="flex items-center gap-2 font-sans font-medium text-grey-500 uppercase tracking-widest text-sm">
                    <MapPin className="w-4 h-4 text-accent" /> {project.location}
                  </p>
                </div>

                <p className="font-sans text-lg text-grey-600 leading-relaxed">
                  {project.desc}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl border border-grey-200 shadow-sm">
                    <p className="font-sans text-sm text-grey-500 mb-2 uppercase tracking-wider">System Capacity</p>
                    <p className="font-display font-bold text-2xl text-primary flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" /> {project.metrics.capacity}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-grey-200 shadow-sm">
                    <p className="font-sans text-sm text-grey-500 mb-2 uppercase tracking-wider">Energy Storage</p>
                    <p className="font-display font-bold text-2xl text-primary flex items-center gap-2">
                      <Target className="w-5 h-5 text-accent" /> {project.metrics.storage}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-accent shadow-md bg-orange-50">
                    <p className="font-sans text-sm text-accent mb-2 uppercase tracking-wider">Annual Savings</p>
                    <p className="font-display font-bold text-2xl text-primary">
                      {project.metrics.savings}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-grey-200 shadow-sm">
                    <p className="font-sans text-sm text-grey-500 mb-2 uppercase tracking-wider">Projected ROI</p>
                    <p className="font-display font-bold text-2xl text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> {project.metrics.roi}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col items-center">
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] mb-6 tracking-tight">Become Our Next Success Story</h2>
          <p className="font-sans text-lg text-grey-400 max-w-2xl mb-10">We engineer solutions that pay for themselves. Request a free engineering consultation and load audit today.</p>
          <Link
            href="/contact"
            className="bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white transition-colors shadow-xl min-h-[56px] flex items-center justify-center"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
