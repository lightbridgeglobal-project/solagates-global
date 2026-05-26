const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
let ecoHtml = fs.readFileSync('ecosystem.html', 'utf-8');

// --- HELPER STRINGS ---
const manifestoBlock = `
    <!-- 2.5 BRAND MANIFESTO -->
    <section class="py-18 md:py-24 bg-white border-b border-grey-200">
      <div class="w-[90%] 2xl:w-[75%] mx-auto flex flex-col items-center text-center max-w-4xl">
        <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">Our Manifesto</h3>
        <h2 class="font-display font-bold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.15] text-grey-900 mb-8 uppercase tracking-tight">Eliminating the Generator Culture</h2>
        <p class="font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.75] text-grey-700">
          For decades, African businesses and households have been held hostage by unreliable power grids and the toxic, expensive reliance on diesel generators. We are here to dismantle this standard. By engineering premium, scalable microgrids, we provide total energy sovereignty, slashing operational costs and eliminating downtime for good.
        </p>
      </div>
    </section>
`;

const coverageMapBlock = `
    <!-- 4.5 COVERAGE MAP -->
    <section class="py-18 md:py-24 bg-primary text-white overflow-hidden relative">
      <div class="absolute inset-0 bg-[url('public/project-1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div class="w-[90%] 2xl:w-[75%] mx-auto relative z-10">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="flex-1">
            <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">National Reach</h3>
            <h2 class="font-display font-bold text-[38px] md:text-[48px] lg:text-[60px] leading-[1.1] uppercase tracking-tight mb-6">Serving All 36 States & Beyond</h2>
            <p class="font-sans font-normal text-[16px] lg:text-[20px] leading-[1.75] text-white/80 mb-8 max-w-xl">
              From high-density commercial centers in Lagos to remote industrial mining operations in the North, our logistics network and authorized installer base ensure rapid deployment and robust maintenance everywhere.
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <p class="font-display font-bold text-[42px] text-accent">18+</p>
                <p class="font-sans font-medium text-[14px] text-white/80 uppercase">Active State Hubs</p>
              </div>
              <div>
                <p class="font-display font-bold text-[42px] text-accent">48Hrs</p>
                <p class="font-sans font-medium text-[14px] text-white/80 uppercase">Max Deployment Time</p>
              </div>
            </div>
          </div>
          <div class="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center relative">
            <!-- Simulated Map Visual -->
            <div class="absolute inset-0 m-12 border border-accent/30 rounded-full animate-pulse"></div>
            <div class="absolute inset-0 m-24 border border-accent/20 rounded-full"></div>
            <div class="relative z-10 text-center">
              <i data-lucide="map-pin" class="w-16 h-16 text-accent mx-auto mb-4"></i>
              <p class="font-display font-bold text-[24px] uppercase text-white">Full Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

const pricingTiersBlock = `
    <!-- 5.5 PREMIUM ENERGY TIERS -->
    <section class="py-18 md:py-24 bg-white">
      <div class="w-[90%] 2xl:w-[75%] mx-auto flex flex-col">
        <div class="text-center mb-16">
          <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">Clear Investment</h3>
          <h2 class="font-display font-bold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.15] text-grey-900 uppercase">Premium Energy Tiers</h2>
          <p class="font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.7] text-grey-500 max-w-2xl mx-auto mt-4">Scalable infrastructure packages engineered for specific load requirements.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Starter -->
          <div class="bg-grey-50 border border-grey-200 rounded-2xl p-8 flex flex-col hover:border-accent transition-colors">
            <h3 class="font-display font-semibold text-[24px] text-grey-900 uppercase mb-2">Starter Package</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500 mb-6">Essential home backup.</p>
            <p class="font-display font-bold text-[42px] text-primary mb-8">5kW</p>
            <ul class="flex flex-col gap-4 font-sans font-normal text-[16px] text-grey-700 mb-8 flex-1">
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Premium 5kVA Hybrid Inverter</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> 5kWh Lithium Storage</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Tier-1 Solar Array</li>
            </ul>
            <button class="w-full font-sans font-semibold text-[15px] bg-primary text-white py-[14px] rounded-[10px] hover:bg-primary/90 transition-colors uppercase">Get Quote</button>
          </div>
          <!-- Professional -->
          <div class="bg-primary border-2 border-accent rounded-2xl p-8 flex flex-col relative transform lg:-translate-y-4 shadow-2xl">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white font-sans font-bold text-[12px] uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
            <h3 class="font-display font-semibold text-[24px] text-white uppercase mb-2">Professional</h3>
            <p class="font-sans font-normal text-[15px] text-white/70 mb-6">Large residential & small business.</p>
            <p class="font-display font-bold text-[42px] text-white mb-8">10kW</p>
            <ul class="flex flex-col gap-4 font-sans font-normal text-[16px] text-white/90 mb-8 flex-1">
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> 10kVA Heavy-Duty Inverter</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> 10kWh-15kWh Scalable Storage</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> High-Yield Monocrystalline Array</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> 24/7 Remote Monitoring</li>
            </ul>
            <button class="w-full font-sans font-semibold text-[15px] bg-accent text-primary py-[14px] rounded-[10px] hover:bg-white transition-colors uppercase">Get Quote</button>
          </div>
          <!-- Business -->
          <div class="bg-grey-50 border border-grey-200 rounded-2xl p-8 flex flex-col hover:border-accent transition-colors">
            <h3 class="font-display font-semibold text-[24px] text-grey-900 uppercase mb-2">Business</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500 mb-6">Commercial facilities & clinics.</p>
            <p class="font-display font-bold text-[42px] text-primary mb-8">30kW</p>
            <ul class="flex flex-col gap-4 font-sans font-normal text-[16px] text-grey-700 mb-8 flex-1">
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Three-Phase Commercial Inverter</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> High-Voltage Rack Storage</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Commercial Roof Array</li>
            </ul>
            <button class="w-full font-sans font-semibold text-[15px] bg-primary text-white py-[14px] rounded-[10px] hover:bg-primary/90 transition-colors uppercase">Get Quote</button>
          </div>
          <!-- Enterprise -->
          <div class="bg-grey-50 border border-grey-200 rounded-2xl p-8 flex flex-col hover:border-accent transition-colors">
            <h3 class="font-display font-semibold text-[24px] text-grey-900 uppercase mb-2">Enterprise</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500 mb-6">Industrial grids & estates.</p>
            <p class="font-display font-bold text-[42px] text-primary mb-8">100kW+</p>
            <ul class="flex flex-col gap-4 font-sans font-normal text-[16px] text-grey-700 mb-8 flex-1">
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Containerized Microgrid</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Utility-Grade Storage</li>
              <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i> Custom Engineering</li>
            </ul>
            <button class="w-full font-sans font-semibold text-[15px] bg-primary text-white py-[14px] rounded-[10px] hover:bg-primary/90 transition-colors uppercase">Consultation</button>
          </div>
        </div>
      </div>
    </section>
`;

const deploymentProcessBlock = `
    <!-- 5.7 DEPLOYMENT PROCESS -->
    <section class="py-18 md:py-24 bg-[#F7F9FC]">
      <div class="w-[90%] 2xl:w-[75%] mx-auto">
        <div class="text-center mb-16">
          <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">Methodology</h3>
          <h2 class="font-display font-bold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.15] text-grey-900 uppercase">Our Premium Deployment Process</h2>
        </div>
        
        <div class="flex flex-col lg:flex-row justify-between gap-8 relative">
          <!-- Desktop line connector -->
          <div class="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-grey-200 z-0"></div>
          
          <div class="flex-1 relative z-10 flex flex-col items-center text-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-grey-200 flex items-center justify-center mb-6 group-hover:border-accent transition-colors shadow-lg">
              <i data-lucide="clipboard-list" class="w-10 h-10 text-primary"></i>
            </div>
            <h3 class="font-display font-semibold text-[22px] text-grey-900 uppercase mb-2">1. Assessment</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500">Comprehensive load profiling and site energy audit.</p>
          </div>
          
          <div class="flex-1 relative z-10 flex flex-col items-center text-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-grey-200 flex items-center justify-center mb-6 group-hover:border-accent transition-colors shadow-lg">
              <i data-lucide="pen-tool" class="w-10 h-10 text-primary"></i>
            </div>
            <h3 class="font-display font-semibold text-[22px] text-grey-900 uppercase mb-2">2. Design</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500">Custom engineering of array, storage, and inverter topology.</p>
          </div>
          
          <div class="flex-1 relative z-10 flex flex-col items-center text-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-grey-200 flex items-center justify-center mb-6 group-hover:border-accent transition-colors shadow-lg">
              <i data-lucide="hammer" class="w-10 h-10 text-primary"></i>
            </div>
            <h3 class="font-display font-semibold text-[22px] text-grey-900 uppercase mb-2">3. Installation</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500">Tier-1 hardware deployment by certified technicians.</p>
          </div>
          
          <div class="flex-1 relative z-10 flex flex-col items-center text-center group">
            <div class="w-24 h-24 rounded-full bg-white border-4 border-grey-200 flex items-center justify-center mb-6 group-hover:border-accent transition-colors shadow-lg">
              <i data-lucide="power" class="w-10 h-10 text-primary"></i>
            </div>
            <h3 class="font-display font-semibold text-[22px] text-grey-900 uppercase mb-2">4. Commissioning</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500">Rigorous safety testing and grid integration.</p>
          </div>
          
          <div class="flex-1 relative z-10 flex flex-col items-center text-center group">
            <div class="w-24 h-24 rounded-full bg-primary border-4 border-accent flex items-center justify-center mb-6 shadow-lg">
              <i data-lucide="activity" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="font-display font-semibold text-[22px] text-primary uppercase mb-2">5. Monitoring</h3>
            <p class="font-sans font-normal text-[15px] text-grey-500">24/7 telemetry tracking and preventative O&M.</p>
          </div>
        </div>
      </div>
    </section>
`;

const extraCaseStudiesBlock = `
          <!-- Extracted Case Study 3 -->
          <div class="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-grey-200">
            <img src="public/hero-african-family-solar-home.jpeg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project 3" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-display font-bold text-[24px] uppercase tracking-tight">Premium Medical Backup</h3>
              <p class="text-white/80 font-sans font-normal text-[16px] mt-2">30kW | Zero-Interruption Surgical Grid</p>
            </div>
          </div>
          <!-- Extracted Case Study 4 -->
          <div class="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-grey-200">
            <img src="public/solar-system-design-blueprint.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project 4" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 class="text-white font-display font-bold text-[24px] uppercase tracking-tight">Commercial Center Grid</h3>
              <p class="text-white/80 font-sans font-normal text-[16px] mt-2">85kW | 100kWh Rack Storage</p>
            </div>
          </div>
`;

const faqAndLeadGenBlock = `
    <!-- 8.5 FREQUENTLY ASKED QUESTIONS -->
    <section class="py-18 md:py-24 bg-white border-t border-grey-200">
      <div class="w-[90%] 2xl:w-[75%] mx-auto flex flex-col md:flex-row gap-16">
        <div class="md:w-1/3">
          <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">Support</h3>
          <h2 class="font-display font-bold text-[34px] md:text-[44px] leading-[1.15] text-grey-900 uppercase tracking-tight mb-6">Frequently Asked Questions</h2>
          <p class="font-sans font-normal text-[16px] leading-[1.7] text-grey-500 mb-8">Everything you need to know about migrating your enterprise to premium solar infrastructure.</p>
          <button class="font-sans font-semibold text-[15px] bg-primary text-white px-[32px] py-[18px] rounded-[14px] hover:bg-primary/90 transition-colors uppercase">View All FAQs</button>
        </div>
        <div class="md:w-2/3 flex flex-col gap-4">
          <div class="border border-grey-200 rounded-xl p-6 bg-grey-50">
            <h3 class="font-display font-semibold text-[20px] text-grey-900 mb-2">What is the lifespan of your lithium storage solutions?</h3>
            <p class="font-sans font-normal text-[16px] leading-[1.7] text-grey-700">Our premium lithium iron phosphate (LiFePO4) batteries are engineered for 6,000+ cycles, equating to 10-15 years of rigorous daily deep cycling, backed by a comprehensive warranty.</p>
          </div>
          <div class="border border-grey-200 rounded-xl p-6">
            <h3 class="font-display font-semibold text-[20px] text-grey-900 mb-2">Do you handle commercial load separation?</h3>
            <p class="font-sans font-normal text-[16px] leading-[1.7] text-grey-700">Yes. Our engineering team conducts thorough site audits to separate critical loads (servers, HVAC, machinery) from non-essential circuits to optimize inverter sizing and battery autonomy.</p>
          </div>
          <div class="border border-grey-200 rounded-xl p-6">
            <h3 class="font-display font-semibold text-[20px] text-grey-900 mb-2">How fast is the installation process?</h3>
            <p class="font-sans font-normal text-[16px] leading-[1.7] text-grey-700">Standard residential deployments are completed within 48 hours. Commercial microgrids scale depending on capacity, typically taking 1-3 weeks from commissioning to full grid integration.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8.7 LEAD GENERATION -->
    <section class="py-18 md:py-24 bg-primary text-white">
      <div class="w-[90%] 2xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Audit Form -->
        <div class="bg-white rounded-2xl p-10 md:p-14 text-grey-900">
          <h2 class="font-display font-bold text-[34px] md:text-[44px] uppercase mb-4">Get Your Free Solar Audit</h2>
          <p class="font-sans font-normal text-[16px] leading-[1.7] text-grey-500 mb-8">Our engineers will evaluate your load profile and provide a custom ROI roadmap.</p>
          <form class="flex flex-col gap-4">
            <input type="text" placeholder="Full Name or Company" class="bg-grey-50 border border-grey-200 rounded-lg px-6 py-4 font-sans focus:outline-none focus:border-accent" />
            <input type="email" placeholder="Email Address" class="bg-grey-50 border border-grey-200 rounded-lg px-6 py-4 font-sans focus:outline-none focus:border-accent" />
            <input type="tel" placeholder="Phone Number" class="bg-grey-50 border border-grey-200 rounded-lg px-6 py-4 font-sans focus:outline-none focus:border-accent" />
            <select class="bg-grey-50 border border-grey-200 rounded-lg px-6 py-4 font-sans focus:outline-none focus:border-accent text-grey-500">
              <option>Select Property Type</option>
              <option>Residential Estate</option>
              <option>Commercial Facility</option>
              <option>Industrial/Factory</option>
            </select>
            <button type="button" class="mt-4 font-sans font-semibold text-[16px] bg-accent text-primary px-[32px] py-[18px] rounded-[14px] hover:bg-white border border-accent transition-colors uppercase w-full">Request Audit</button>
          </form>
        </div>
        <!-- Energy Guide -->
        <div class="flex flex-col justify-center">
          <h3 class="font-sans font-medium text-[14px] uppercase tracking-[0.12em] text-accent mb-4">Free Resource</h3>
          <h2 class="font-display font-bold text-[38px] md:text-[48px] leading-[1.1] uppercase mb-6">The Enterprise Energy Guide</h2>
          <p class="font-sans font-normal text-[18px] leading-[1.75] text-white/80 mb-8">Download our comprehensive blueprint on migrating commercial operations to sustainable microgrids, including ROI metrics and hardware specifications.</p>
          <div class="flex items-center gap-4 border border-white/20 bg-white/5 rounded-xl p-6 mb-8 w-max">
            <i data-lucide="file-text" class="w-12 h-12 text-accent"></i>
            <div>
              <p class="font-display font-semibold text-[18px] text-white">2026 Executive Playbook</p>
              <p class="font-sans font-normal text-[14px] text-white/60">PDF Document (4.2 MB)</p>
            </div>
          </div>
          <button class="font-sans font-semibold text-[16px] bg-transparent border-2 border-accent text-white px-[32px] py-[18px] rounded-[14px] hover:bg-accent hover:text-primary transition-colors uppercase w-max flex items-center gap-2">
            Download Guide <i data-lucide="download" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </section>
`;

const ecoAcademyDeepDiveBlock = `
        <!-- ACADEMY DEEP DIVE OUTCOMES -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-16 border-t border-white/10">
          <div>
            <h3 class="font-display font-bold text-[28px] lg:text-[34px] text-white uppercase mb-6">Comprehensive Curriculum</h3>
            
            <div class="flex flex-col gap-8">
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <i data-lucide="sun" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                  <p class="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-accent mb-1">FOUNDATION</p>
                  <h4 class="font-display font-bold text-[22px] text-white mb-2">Basic Solar Installation</h4>
                  <p class="font-sans font-normal text-[16px] leading-[1.75] text-white/70">Master fundamental PV concepts, series/parallel array wiring, safety protocols, and tier-1 residential deployments.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <i data-lucide="zap" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                  <p class="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-accent mb-1">ADVANCED</p>
                  <h4 class="font-display font-bold text-[22px] text-white mb-2">Advanced Masterclass</h4>
                  <p class="font-sans font-normal text-[16px] leading-[1.75] text-white/70">Enterprise microgrid design, heavy-duty three-phase inverter topology, and high-voltage lithium rack integration.</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <i data-lucide="briefcase" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                  <p class="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-accent mb-1">COMMERCIAL</p>
                  <h4 class="font-display font-bold text-[22px] text-white mb-2">Business Mentorship</h4>
                  <p class="font-sans font-normal text-[16px] leading-[1.75] text-white/70">Learn how to procure enterprise contracts, manage supply chains, and build a profitable renewable energy firm.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col">
            <h3 class="font-display font-bold text-[28px] lg:text-[34px] text-white uppercase mb-4">ISO 9001:2015 Outcomes</h3>
            <p class="font-sans font-normal text-[16px] leading-[1.75] text-white/70 mb-8">Graduates emerge fully capable of designing and commissioning systems that meet global quality management standards.</p>
            <div class="bg-primary border border-accent p-6 rounded-xl flex-1 flex flex-col justify-center items-center text-center">
              <p class="font-sans font-semibold text-[14px] uppercase tracking-[0.08em] text-accent mb-2">Next Cohort</p>
              <h4 class="font-display font-bold text-[34px] text-white mb-4">Starts Next Month</h4>
              <p class="font-display font-bold text-[48px] text-accent mb-6">₦350,000</p>
              <button class="w-full font-sans font-semibold text-[16px] bg-accent text-primary py-[18px] rounded-[14px] hover:bg-white transition-colors uppercase">Reserve Your Seat</button>
            </div>
          </div>
        </div>
`;

// --- INJECTIONS ---

// 1. Index.html Injections
// Inject Manifesto after Hero (which ends at closing section tag before '<!-- 3. SERVICES GRID -->')
const servicesStr = '<!-- 3. SERVICES GRID -->';
indexHtml = indexHtml.replace(servicesStr, manifestoBlock + '\n    ' + servicesStr);

// Inject Coverage Map after Services (before '<!-- 5. ROI CALCULATOR -->')
const roiStr = '<!-- 5. ROI CALCULATOR -->';
indexHtml = indexHtml.replace(roiStr, coverageMapBlock + '\n    ' + roiStr);

// Inject Pricing & Deployment after ROI Calculator (before '<!-- 8. FEATURED PROJECTS -->')
const projectsStr = '<!-- 8. FEATURED PROJECTS -->';
indexHtml = indexHtml.replace(projectsStr, pricingTiersBlock + '\n' + deploymentProcessBlock + '\n    ' + projectsStr);

// Expand Case Studies
const gridEndStr = '</div>\n      </div>\n    </section>\n\n    <!-- 9. TESTIMONIALS (Slider style grid) -->';
indexHtml = indexHtml.replace(gridEndStr, extraCaseStudiesBlock + '\n' + gridEndStr);
// Update the grid classes for projects from grid-cols-2 to grid-cols-2 lg:grid-cols-4 or just 2 cols, 2 rows
// It was grid-cols-1 md:grid-cols-2, so with 4 items it will automatically become a 2x2 grid on desktop, which is perfect.

// Inject FAQ & Lead Gen before Footer
const footerStr = '<!-- 10. FOOTER -->';
indexHtml = indexHtml.replace(footerStr, faqAndLeadGenBlock + '\n    ' + footerStr);

// 2. Ecosystem.html Injections
const academyEndStr = 'View Curriculum\n                <i data-lucide="graduation-cap" class="w-5 h-5 ml-2"></i>\n              </a>\n            </div>\n          </div>\n        </div>';
ecoHtml = ecoHtml.replace(academyEndStr, academyEndStr + '\n' + ecoAcademyDeepDiveBlock);


fs.writeFileSync('index.html', indexHtml);
fs.writeFileSync('ecosystem.html', ecoHtml);

console.log('Successfully injected all missing infrastructure sections.');
