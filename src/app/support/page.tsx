"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textMessage = `*🚨 URGENT TECHNICAL SUPPORT REQUIRED 🚨*

*Client Name:* ${formData.name}
*System Location:* ${formData.company || 'N/A'}
*Contact Number:* ${formData.phone}
*Email:* ${formData.email}

*Issue Description:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/2348075155862?text=${encodedMessage}`;
    
    // Redirect in the same window to avoid popup blockers on mobile
    window.location.href = whatsappUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact.jpeg"
            alt="Technical Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 mb-8"
          >
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span className="text-sm font-sans font-bold uppercase tracking-widest text-red-100">
              Priority Engineering Desk
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight text-red-500"
          >
            Urgent Technical Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-300 leading-relaxed max-w-2xl mx-auto"
          >
            For existing clients experiencing critical power failure or requiring immediate maintenance. Fill out the form below to directly dispatch our engineering team.
          </motion.p>
        </div>
      </section>

      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-primary mb-4">Redirecting to WhatsApp...</h3>
                  <p className="font-sans text-grey-600 max-w-md mx-auto mb-8">
                    Your urgent request has been drafted. Please complete your submission by clicking "Send" in your WhatsApp application to immediately alert our engineers.
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const textMessage = `*🚨 URGENT TECHNICAL SUPPORT REQUIRED 🚨*\n\n*Client Name:* ${formData.name}\n*System Location:* ${formData.company || 'N/A'}\n*Contact Number:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Issue Description:*\n${formData.message}`;
                      window.location.href = `https://wa.me/2348075155862?text=${encodeURIComponent(textMessage)}`;
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1EBE5D] transition-colors shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" /> Open WhatsApp Manually
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="font-display font-bold text-2xl text-primary flex items-center gap-2">
                      <span className="text-red-500 mr-2 text-3xl">🚨</span>
                      {step === 1 ? "Client Information" : "Emergency Specifications"}
                    </h2>
                    <div className="font-sans font-bold text-sm text-red-500 uppercase tracking-widest">
                      Step {step} of 2
                    </div>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-2">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-2">Contact Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-2">System Location / Estate Name</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          />
                        </div>
                      </div>
                      <div className="pt-6">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="w-full bg-red-600 text-white font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-red-700 transition-colors min-h-[56px] shadow-lg shadow-red-600/30"
                        >
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label className="block font-sans font-semibold text-sm text-primary mb-2">Describe the Critical Issue</label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full border border-red-200 bg-red-50/30 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none"
                          placeholder="Please describe the power failure or issue you are experiencing in detail..."
                        ></textarea>
                      </div>
                      <div className="pt-6 flex gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="w-1/3 bg-grey-100 text-primary font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-grey-200 transition-colors min-h-[56px]"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 bg-red-600 text-white font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center gap-2 min-h-[56px] shadow-lg shadow-red-600/30"
                        >
                          Dispatch Team <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
