"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, BookMarked, Zap } from "lucide-react";
import Link from "next/link";
import { ArticleData } from "@/lib/articles";

const CATEGORIES = ["All", "Solar Education", "Energy Savings", "Installation Guides", "Business Solutions", "Battery Systems"];

export default function ResourcesClient({ articles }: { articles: Omit<ArticleData, 'content'>[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? articles 
    : articles.filter(post => post.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-blog.jpg"
            alt="Solagates Resources"
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
            <BookMarked className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Engineering Insights Hub
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
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
                <Link key={post.slug} href={`/resources/${post.slug}`} passHref>
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl overflow-hidden border border-grey-200 hover:shadow-xl transition-shadow flex flex-col group cursor-pointer h-full"
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
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Ready for Integration CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto max-w-2xl">
          <Zap className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] mb-6 tracking-tight">Ready for Premium Integration?</h2>
          <p className="font-sans text-lg text-grey-400 mb-10">Whether you are powering a luxury residential estate or a commercial facility, our engineering desk is ready to dimension your system.</p>
          <Link href="/contact" className="inline-block bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white transition-colors min-h-[56px] shadow-lg">
            Consult With Our Engineers
          </Link>
        </div>
      </section>
    </div>
  );
}
