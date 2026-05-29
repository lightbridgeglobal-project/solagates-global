"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Battery, Zap, Sun, Plus, Minus, Send } from "lucide-react";
import Link from "next/link";

const APPLIANCES = [
  { id: "led", name: "LED Bulbs", watts: 15 },
  { id: "tv", name: "Television", watts: 100 },
  { id: "fan", name: "Standing/Ceiling Fan", watts: 70 },
  { id: "fridge", name: "Refrigerator", watts: 200 },
  { id: "ac", name: "Air Conditioner (1HP)", watts: 1200 },
  { id: "pump", name: "Water Pump", watts: 1500 },
  { id: "laptop", name: "Laptop", watts: 65 },
  { id: "microwave", name: "Microwave", watts: 1000 },
];

export default function CalculatorPage() {
  const [load, setLoad] = useState<Record<string, number>>({});

  const handleUpdate = (id: string, delta: number) => {
    setLoad(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalWatts = APPLIANCES.reduce((acc, app) => acc + (load[app.id] || 0) * app.watts, 0);
  const recommendedInverter = totalWatts < 3000 ? 5 : totalWatts < 6000 ? 10 : Math.ceil(totalWatts / 1000) * 1.5;
  const recommendedBattery = Math.ceil((totalWatts * 12) / 1000); // Rough estimate for 12 hours autonomy in kWh

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder-calculator.jpg"
            alt="Solagates Calculator"
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
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-sans font-medium uppercase tracking-widest text-grey-200">
              Interactive ROI Engine
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] mb-6 tracking-tight"
          >
            Engineer Your Independence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-grey-400 leading-relaxed max-w-2xl mx-auto"
          >
            Calculate your exact energy requirements. Our system will automatically dimension the required inverter capacity and lithium storage needed for absolute power autonomy.
          </motion.p>
        </div>
      </section>

      {/* Main Interactive Interface */}
      <section className="py-[clamp(5rem,8vw,8rem)] bg-grey-50">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Appliance Selection */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-grey-200 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-primary mb-8 border-b border-grey-100 pb-4">
              Step 1: Appliance Load Profile
            </h2>
            <div className="space-y-6">
              {APPLIANCES.map((app) => (
                <div key={app.id} className="flex justify-between items-center p-4 bg-grey-50 rounded-2xl border border-grey-100">
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-lg text-primary">{app.name}</span>
                    <span className="font-sans text-sm text-grey-500">{app.watts}W each</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleUpdate(app.id, -1)}
                      className="w-10 h-10 rounded-full bg-white border border-grey-200 flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-display font-bold text-xl w-6 text-center">
                      {load[app.id] || 0}
                    </span>
                    <button
                      onClick={() => handleUpdate(app.id, 1)}
                      className="w-10 h-10 rounded-full bg-white border border-grey-200 flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-primary p-8 md:p-10 rounded-3xl shadow-xl text-white">
                <h2 className="font-display font-bold text-xl mb-8 opacity-80 uppercase tracking-widest">
                  Engineering Blueprint
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="font-sans text-sm text-grey-400 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" /> Total Peak Load
                    </p>
                    <p className="font-display font-bold text-5xl">
                      {totalWatts} <span className="text-xl text-grey-400">Watts</span>
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="font-sans text-sm text-grey-400 mb-2 flex items-center gap-2">
                      <Sun className="w-4 h-4 text-accent" /> Recommended Inverter
                    </p>
                    <p className="font-display font-bold text-4xl">
                      {recommendedInverter} <span className="text-xl text-grey-400">kVA</span>
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="font-sans text-sm text-grey-400 mb-2 flex items-center gap-2">
                      <Battery className="w-4 h-4 text-accent" /> Lithium Storage (12hrs)
                    </p>
                    <p className="font-display font-bold text-4xl">
                      {recommendedBattery} <span className="text-xl text-grey-400">kWh</span>
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <a
                    href={`https://wa.me/2348075155862?text=I've calculated my load at ${totalWatts}W. I need a ${recommendedInverter}kVA inverter and ${recommendedBattery}kWh battery setup.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-accent text-primary font-display font-bold text-sm uppercase tracking-widest py-5 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    Request Official Quote <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-grey-200">
                <p className="font-sans text-sm text-grey-500 leading-relaxed italic">
                  * Note: This is an estimation algorithm based on standard appliance ratings. For industrial loads or motor-heavy operations (elevators, heavy pumps), a physical site audit is required to map inductive surge currents.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
