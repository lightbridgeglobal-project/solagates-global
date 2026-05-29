import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-grey-50 pt-[clamp(4.5rem,8vw,6rem)] pb-12 border-t border-grey-200">
      <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Solagates Logo"
                className="h-8 object-contain"
                loading="lazy"
              />
              <span className="font-display font-bold text-xl tracking-tight uppercase">
                Solagates
              </span>
            </Link>
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-grey-500 pr-4">
              Africa's leading renewable energy engineering firm. We design,
              deploy, and maintain high-performance energy infrastructure for
              enterprise and commercial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans font-semibold text-[16px] uppercase tracking-[0.08em] text-primary">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Our Services
              </Link>
              <Link
                href="/projects"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Project Portfolio
              </Link>
              <Link
                href="/calculator"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Solar ROI Calculator
              </Link>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans font-semibold text-[16px] uppercase tracking-[0.08em] text-primary">
              Ecosystem
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                href="/enterprise"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="/academy"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Solagates Academy
              </Link>
              <Link
                href="/products"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Tier-1 Components
              </Link>
              <Link
                href="/resources"
                className="font-sans font-normal text-[15px] text-grey-500 hover:text-accent transition-colors block py-2 min-h-[48px] flex items-center"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans font-semibold text-[16px] uppercase tracking-[0.08em] text-primary">
              Contact Us
            </h4>
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-grey-500 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" /> 14,
              Ire-Akari Estate, Apete, Ibadan, Oyo State
            </p>
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-grey-500 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              hello@solagates.com <br />
              solagateglobal@gmail.com
            </p>
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-grey-500 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" /> +234
              8075155862
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-grey-200 flex flex-col md:flex-row justify-between items-center gap-4 font-sans font-normal text-[14px] text-grey-400">
          <p>&copy; 2026 Solagates Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-grey-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-grey-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-grey-900 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
