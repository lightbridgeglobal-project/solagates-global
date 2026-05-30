"use client";

import { motion } from "framer-motion";
import { Home, Building2, Factory, Settings, BatteryCharging, HeadphonesIcon, Store, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: "residential",
    title: "Residential Solar Systems",
    icon: <Home className="w-8 h-8 text-white" />,
    desc: "Luxury home energy architecture designed for zero downtime and aesthetic integration. We eliminate grid dependence for estates and premium households.",
    features: ["Load profiling", "Aesthetic roof mounting", "Smart home integration", "24/7 monitoring"]
  },
  {
    id: "commercial",
    title: "Commercial Infrastructure",
    icon: <Building2 className="w-8 h-8 text-white" />,
    desc: "High-capacity solar grids for corporate headquarters, offices, and commercial real estate to drastically reduce operational OPEX.",
    features: ["Tax incentive compliance", "Three-phase integration", "Scalable architecture", "ROI modeling"]
  },
  {
    id: "industrial",
    title: "Industrial Micro-Grids",
    icon: <Factory className="w-8 h-8 text-white" />,
    desc: "Massive-scale renewable energy deployments for manufacturing plants, hospitals, and heavy-duty industrial complexes.",
    features: ["Heavy load balancing", "High-voltage systems", "Diesel generator hybridization", "Uninterrupted manufacturing"]
  },
  {
    id: "battery",
    title: "Battery Backup Solutions",
    icon: <BatteryCharging className="w-8 h-8 text-white" />,
    desc: "Enterprise-grade lithium-ion storage arrays to ensure continuous power during grid failures or prolonged outages.",
    features: ["Lithium LiFePO4 cells", "Rapid deployment", "Thermal management", "High cycle life"]
  },
  {
    id: "maintenance",
    title: "O&M (Operations & Maintenance)",
    icon: <Settings className="w-8 h-8 text-white" />,
    desc: "Proactive, SLA-backed maintenance contracts to keep your solar assets performing at peak efficiency for 25+ years.",
    features: ["Panel deep cleaning", "Inverter firmware updates", "Thermal imaging", "System recalibration"]
  },
  {
    id: "consultation",
    title: "Energy Consultation",
    icon: <HeadphonesIcon className="w-8 h-8 text-white" />,
    desc: "Technical advisory services for enterprises transitioning to renewable energy. We map out feasibility, costs, and projected savings.",
    features: ["Site shading analysis", "Load profile auditing", "Financial forecasting", "System design"]
  },
  {
    id: "dealership",
    title: "Solar Product Dealership",
    icon: <Store className="w-8 h-8 text-white" />,
    desc: "Direct procurement of tier-1 solar panels, hybrid inverters, and accessories at B2B wholesale volumes.",
    features: ["Tier-1 OEMs", "Warranty backed", "Wholesale pricing", "Nationwide delivery"]
  },
  {
    id: "audits",
    title: "Installation Audits",
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    desc: "Third-party technical verification of existing solar installations to identify faults, inefficiencies, or safety hazards.",
    features: ["Safety compliance checks", "Performance bottlenecking", "Wiring inspections", "Redesign proposals"]
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col bg-grey-50">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services.jpeg"
            alt="Solagates Services"
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
            Engineering Solutions for Every Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed"
          >
            Explore our comprehensive suite of renewable energy services. From precision residential installations to massive industrial micro-grids, we deliver uncompromising quality.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[clamp(5rem,8vw,8rem)]">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-grey-200 hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg mb-8">
                  {service.icon}
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-4">
                  {service.title}
                </h2>
                <p className="font-sans text-grey-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary mb-4">Core Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-sm text-grey-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex bg-primary text-white font-sans font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-accent transition-colors w-full sm:w-auto items-center justify-center min-h-[48px]"
                  >
                    Request Consultation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-white border-t border-grey-200">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-16 tracking-tight">Our Deployment Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Energy Audit", desc: "Detailed analysis of your load profile and energy consumption patterns." },
              { step: "02", title: "System Design", desc: "Custom engineering of the solar array, battery bank, and hybrid inverter logic." },
              { step: "03", title: "Deployment", desc: "Professional installation adhering strictly to international safety standards." },
              { step: "04", title: "Commissioning", desc: "System stress testing, handover, and activation of 24/7 monitoring software." }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 text-accent font-display font-bold text-2xl flex items-center justify-center mb-6">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
                <p className="font-sans text-grey-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
