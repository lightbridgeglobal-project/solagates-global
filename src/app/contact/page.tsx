"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "residential",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textMessage = `*New Lead from Solagates Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || 'N/A'}
*Interest:* ${formData.interest}

*Project Details:*
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
            src="/placeholder-contact.jpg"
            alt="Contact Solagates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
          >
            Connect With Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you need a massive industrial grid or a luxury residential setup, our technical team is ready to architect your solution.
          </motion.p>
        </div>
      </section>

      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6">Corporate Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-primary mb-1">Address</h4>
                    <p className="font-sans text-grey-600 leading-relaxed">
                      14, Ire-Akari Estate,<br />
                      Apete, Ibadan,<br />
                      Oyo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-primary mb-1">Direct Line</h4>
                    <p className="font-sans text-grey-600 leading-relaxed">
                      +234 8075155862
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-primary mb-1">Email Desks</h4>
                    <p className="font-sans text-grey-600 leading-relaxed">
                      hello@solagates.com<br />
                      solagateglobal@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white">
              <h3 className="font-display font-bold text-2xl mb-4">Urgent Technical Support?</h3>
              <p className="font-sans text-grey-300 mb-8 leading-relaxed">
                For existing clients experiencing critical power failure or requiring immediate maintenance.
              </p>
              <Link
                href="/support"
                className="w-full bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direct
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7" id="contact-form">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-grey-200 shadow-sm relative overflow-hidden">
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
                      Your inquiry has been drafted. Please complete your submission by clicking "Send" in your WhatsApp application.
                    </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const textMessage = `*New Lead from Solagates Website*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || 'N/A'}\n*Interest:* ${formData.interest}\n\n*Project Details:*\n${formData.message}`;
                        window.location.href = `https://wa.me/2348075155862?text=${encodeURIComponent(textMessage)}`;
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1EBE5D] transition-colors shadow-md"
                    >
                      <MessageCircle className="w-5 h-5" /> Open WhatsApp Manually
                    </a>
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
                      <h2 className="font-display font-bold text-2xl text-primary">
                        {step === 1 ? "Basic Details" : "Project Specifications"}
                      </h2>
                      <div className="font-sans font-bold text-sm text-accent uppercase tracking-widest">
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
                              className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block font-sans font-semibold text-sm text-primary mb-2">Email Address</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block font-sans font-semibold text-sm text-primary mb-2">Phone Number</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block font-sans font-semibold text-sm text-primary mb-2">Company / Estate Name</label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                        <div className="pt-6">
                          <button
                            type="button"
                            onClick={handleNext}
                            className="w-full bg-primary text-white font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-accent transition-colors min-h-[56px]"
                          >
                            Continue to Specifications
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-4">Area of Interest</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                              { id: "residential", label: "Residential Estate" },
                              { id: "commercial", label: "Commercial Facility" },
                              { id: "industrial", label: "Industrial Micro-Grid" },
                              { id: "academy", label: "Academy Enrollment" }
                            ].map((type) => (
                              <label key={type.id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${formData.interest === type.id ? "border-accent bg-orange-50" : "border-grey-200 hover:border-primary"}`}>
                                <input
                                  type="radio"
                                  name="interest"
                                  checked={formData.interest === type.id}
                                  onChange={() => setFormData({...formData, interest: type.id})}
                                  className="accent-accent w-4 h-4"
                                />
                                <span className="font-sans font-medium text-primary">{type.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block font-sans font-semibold text-sm text-primary mb-2">Project Details & Load Requirements</label>
                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full border border-grey-200 rounded-xl px-4 py-3 font-sans text-grey-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                            placeholder="Tell us about your current energy setup and your load requirements..."
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
                            className="w-2/3 bg-primary text-white font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-accent transition-colors flex items-center justify-center gap-2 min-h-[56px]"
                          >
                            Submit Inquiry <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-grey-200 relative">
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Ibadan,Oyo,Nigeria&zoom=12&size=1920x400&maptype=roadmap&style=feature:all|element:geometry.fill|color:0xeeeeee&style=feature:all|element:labels.text.fill|color:0x333333')] bg-cover bg-center opacity-50 grayscale" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-bounce">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-display font-bold text-primary">Solagates HQ</h4>
              <p className="font-sans text-sm text-grey-500">Ibadan, Oyo State</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
