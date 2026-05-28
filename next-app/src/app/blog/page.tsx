"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, BookMarked } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Solar Education", "Energy Savings", "Installation Guides", "Business Solutions", "Battery Systems"];

const POSTS = [
  {
    id: 1,
    title: "The Ultimate Guide to Lithium LiFePO4 Depth of Discharge",
    category: "Battery Systems",
    date: "May 20, 2026",
    readTime: "8 min read",
    image: "/lithium_battery_1779840218141.png",
    excerpt: "Understanding the true cycle life of modern lithium storage systems and why pushing beyond 80% DoD impacts long-term enterprise ROI."
  },
  {
    id: 2,
    title: "How Manufacturing Plants Are Slashing Diesel Costs by 70%",
    category: "Business Solutions",
    date: "May 15, 2026",
    readTime: "12 min read",
    image: "/commercial_solar_1779840161462.png",
    excerpt: "A deep dive into industrial load hybridization. See how heavy machinery can seamlessly transition between solar and grid without voltage drops."
  },
  {
    id: 3,
    title: "Monocrystalline vs Polycrystalline: The 2026 Engineering Consensus",
    category: "Solar Education",
    date: "May 10, 2026",
    readTime: "6 min read",
    image: "/residential_solar_1779840142533.png",
    excerpt: "With efficiency ratings pushing past 22%, is there still a use case for polycrystalline panels in modern grid-tie applications?"
  },
  {
    id: 4,
    title: "Maximizing Solar Output During the African Rainy Season",
    category: "Energy Savings",
    date: "May 05, 2026",
    readTime: "5 min read",
    image: "/hero_family_1779840127369.png",
    excerpt: "Cloud cover doesn't mean zero power. Learn how to dimension your battery bank to comfortably survive three days of continuous rain."
  },
  {
    id: 5,
    title: "Three-Phase Inverter Programming for Commercial Real Estate",
    category: "Installation Guides",
    date: "April 28, 2026",
    readTime: "15 min read",
    image: "/hybrid_inverter_1779840201284.png",
    excerpt: "A technical walkthrough for engineers on balancing massive loads across three phases using tier-1 hybrid inverter firmware."
  },
  {
    id: 6,
    title: "Why Solar Real Estate Integration Increases Property Value by 25%",
    category: "Business Solutions",
    date: "April 20, 2026",
    readTime: "7 min read",
    image: "/project_estate_1779840249013.png",
    excerpt: "Property developers are moving away from noisy generator houses to centralized solar micro-grids. Here is the financial justification."
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? POSTS 
    : POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <BookMarked className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Engineering Insights Hub
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
          >
            Renewable Energy Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            Deep technical deep dives, industry trends, and engineering case studies from the minds behind Africa's most robust solar infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50 min-h-screen">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
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

          {/* Posts Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-grey-200 hover:shadow-xl transition-shadow flex flex-col group cursor-pointer"
                >
                  <div className="h-56 relative overflow-hidden bg-grey-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 font-sans text-xs text-grey-500 mb-4 font-medium uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="font-sans text-grey-600 mb-8 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-grey-100 flex items-center font-sans font-bold text-sm uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-2xl">
          <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] mb-6 tracking-tight">Stay Ahead of the Grid</h2>
          <p className="font-sans text-lg text-grey-400 mb-10">Subscribe to our engineering newsletter for deep technical insights, industry news, and exclusive academy discounts.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your corporate email" 
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-grey-400 focus:outline-none focus:border-accent min-h-[56px] font-sans"
            />
            <button className="bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors min-h-[56px] whitespace-nowrap shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
