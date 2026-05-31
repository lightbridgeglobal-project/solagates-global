"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Academy", href: "/academy" },
  { name: "Projects", href: "/projects" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Resources", href: "/resources" },
  { name: "Calculator", href: "/calculator" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg h-20" : "bg-transparent h-24"
        )}
      >
        <div className="flex justify-between items-center mx-auto w-[90%] 2xl:w-[75%] h-full text-white">
          <Link href="/" className="flex items-center gap-3 relative z-[60] shrink-0">
            <img src="/logo.png" alt="Solagates Logo" className="h-14 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex flex-1 justify-center gap-x-6 2xl:gap-x-8 list-none font-sans font-medium text-[13px] uppercase tracking-[0.08em] px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Removed Get Free Consultation button from header */}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white focus:outline-none ml-auto relative z-[60]"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-50 flex flex-col pt-32 px-8"
          >
            <ul className="flex flex-col gap-y-6 list-none font-sans font-semibold text-[20px] uppercase tracking-[0.08em] text-white">
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            {/* Removed Get Free Consultation button from mobile menu */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
