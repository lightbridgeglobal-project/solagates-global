"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Filter, Zap } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Solar Panels", "Lithium Batteries", "Hybrid Inverters"];

const PRODUCTS = [
  {
    id: 1,
    name: "Enterprise 550W Monocrystalline Panel",
    category: "Solar Panels",
    image: "/commercial_solar_1779840161462.png", // reusing solar images
    desc: "High-efficiency tier-1 solar panel designed for commercial rooftops.",
    specs: ["Efficiency: 21.5%", "Tier-1 OEM", "25-year Warranty"]
  },
  {
    id: 2,
    name: "Residential 450W Solar Panel",
    category: "Solar Panels",
    image: "/residential_solar_1779840142533.png",
    desc: "Aesthetic black-framed panels optimized for luxury residential estates.",
    specs: ["Efficiency: 20.8%", "Anti-reflective coating", "25-year Warranty"]
  },
  {
    id: 3,
    name: "LiFePO4 PowerWall 10kWh",
    category: "Lithium Batteries",
    image: "/lithium_battery_1779840218141.png",
    desc: "Wall-mounted high-density lithium storage for seamless home backup.",
    specs: ["Capacity: 10kWh", "Cycles: 6000+", "10-year Warranty"]
  },
  {
    id: 4,
    name: "Industrial Rack Battery 50kWh",
    category: "Lithium Batteries",
    image: "/lithium_battery_1779840218141.png",
    desc: "Heavy-duty rack-mounted battery bank for commercial grid applications.",
    specs: ["Capacity: 50kWh", "Scalable to 1MWh", "BMS Integrated"]
  },
  {
    id: 5,
    name: "Hybrid Smart Inverter 12kW",
    category: "Hybrid Inverters",
    image: "/hybrid_inverter_1779840201284.png",
    desc: "Three-phase intelligent hybrid inverter with dual MPPT trackers.",
    specs: ["Power: 12kW", "IP65 Rating", "Smart Grid Tie"]
  },
  {
    id: 6,
    name: "Single-Phase Hybrid Inverter 5kW",
    category: "Hybrid Inverters",
    image: "/hybrid_inverter_1779840201284.png",
    desc: "Silent, fanless hybrid inverter perfect for residential applications.",
    specs: ["Power: 5kW", "Fanless cooling", "Wi-Fi Monitoring"]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Tier-1 Authorized Dealership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
          >
            Premium Energy Hardware
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            We supply strictly tier-1, OEM-backed solar panels, hybrid inverters, and lithium storage solutions for enterprise deployment.
          </motion.p>
        </div>
      </section>

      {/* Filter & Marketplace */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50 min-h-screen">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-2 text-primary font-display font-bold text-xl">
              <Filter className="w-6 h-6" />
              Product Categories
            </div>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all min-h-[48px] ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-grey-600 border border-grey-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-grey-200 hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="h-64 bg-grey-100 relative p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-2xl text-primary mb-3">
                      {product.name}
                    </h3>
                    <p className="font-sans text-grey-500 mb-6 leading-relaxed">
                      {product.desc}
                    </p>
                    
                    <ul className="mb-8 space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 font-sans text-sm font-medium text-grey-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-6 border-t border-grey-100 flex gap-4">
                      <a
                        href={`https://wa.me/2348075155862?text=I'm interested in the ${product.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-md min-h-[56px]"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Inquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col items-center">
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] mb-6 tracking-tight">Need Enterprise Volumes?</h2>
          <p className="font-sans text-lg text-grey-400 max-w-2xl mb-10">We supply components at massive scale for government projects, real estate developments, and industrial installations.</p>
          <Link
            href="/enterprise"
            className="bg-white text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-grey-100 transition-colors flex items-center gap-2 min-h-[56px]"
          >
            Explore Enterprise Procurement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
