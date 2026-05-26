import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the split point
split_marker = '<!-- 2. ABOUT THE FOUNDER / VISION -->'
split_index = content.find(split_marker)
if split_index == -1:
    print('Error: Could not find split marker')
    exit(1)

bottom_content = content[split_index:]

# The new top content
top_content = '''<!doctype html>
<html lang="en" class="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Solagates Global - Premium Enterprise Solar</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/lucide@latest"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: { 
              primary: "#005f2d",
              accent: "#d97736",
              cardbg: "#24344d"
            },
            fontFamily: {
              sans: ["Inter", "sans-serif"],
              display: ["Manrope", "sans-serif"],
              serif: ["\\'Playfair Display\\'", "serif"],
            },
          },
        },
      };
    </script>
    <style>
      .hero-cutout {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 65%;
        height: 280px;
        background-color: white;
        border-top-left-radius: 80px;
      }
      @media (max-width: 1024px) {
        .hero-cutout {
          width: 100%;
          height: auto;
          position: relative;
          border-top-left-radius: 0;
          background-color: transparent;
        }
      }
    </style>
  </head>
  <body class="bg-white text-[#444] font-sans">
    
    <!-- 1. HERO SECTION -->
    <div class="p-4 lg:p-6 w-full max-w-[1600px] mx-auto">
      <div class="relative w-full rounded-[40px] overflow-hidden bg-slate-900" style="min-height: 850px;">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-[url('public/hero-african-family-solar-home.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a2b42]/90 via-[#1a2b42]/60 to-transparent"></div>
        
        <!-- Navbar Inside Hero -->
        <nav class="relative z-20 flex justify-between items-start p-8 md:p-12">
          <a href="#" class="flex items-center gap-3 bg-white text-[#1a2b42] px-5 py-3 rounded-xl font-bold text-xl shadow-lg">
            <img src="public/logo.png" alt="Logo" class="h-6 object-contain hidden" />
            <i data-lucide="sun" class="w-6 h-6 text-accent"></i> Solagates
          </a>
          
          <div class="hidden md:flex flex-col items-end gap-3 text-white text-sm font-medium">
            <a href="#" class="flex items-center gap-3 hover:text-white transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-white"></span> Home
              <span class="absolute w-8 border-b border-white bottom-0 right-0"></span>
            </a>
            <a href="#about" class="text-white/70 hover:text-white transition-colors pr-4">About</a>
            <a href="#solutions" class="text-white/70 hover:text-white transition-colors pr-4">Services</a>
            <a href="#academy" class="text-white/70 hover:text-white transition-colors pr-4">Pricing</a>
          </div>
        </nav>

        <!-- Hero Content -->
        <div class="relative z-20 px-8 md:px-16 mt-12 md:mt-24 max-w-4xl">
          <span class="inline-block border border-white/30 rounded-full px-6 py-2 text-white/90 text-sm font-medium mb-8 backdrop-blur-md">
            Sustainable Energy
          </span>
          <h1 class="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] mb-12">
            Powering a Brighter,<br>
            Greener Future with<br>
            Solar Energy
          </h1>
          <a href="#assessment" class="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#c26526] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Go Solar <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
        </div>

        <!-- Translucent overlay box -->
        <div class="hidden lg:block absolute z-20 bottom-[320px] right-12 bg-[#24344d]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-md text-right shadow-2xl">
          <p class="text-white font-serif text-2xl leading-snug">
            Sustainable power made simple,<br>smart, and affordable.
          </p>
        </div>

        <!-- The White Cutout for Desktop -->
        <div class="hidden lg:block hero-cutout z-10 shadow-[-20px_-20px_40px_rgba(0,0,0,0.1)]"></div>
        
        <!-- Bottom Content overlapping the cutout -->
        <div class="absolute bottom-0 left-0 right-0 z-30 flex flex-col lg:flex-row items-end justify-between px-8 md:px-16 pb-8 lg:pb-0">
          
          <!-- Left Text -->
          <div class="w-full lg:w-[30%] mb-12 lg:mb-16 pr-8 text-white lg:text-[#444] lg:pb-8">
            <p class="text-lg leading-relaxed font-medium mix-blend-luminosity lg:mix-blend-normal">
              Solagates delivers reliable, eco-friendly solar solutions that cut costs and reduce carbon footprints. Join us in building a sustainable future with clean, renewable energy that powers homes and businesses efficiently.
            </p>
          </div>

          <!-- Right Cards (sitting inside the white cutout area) -->
          <div class="w-full lg:w-[65%] flex flex-col sm:flex-row gap-4 relative lg:-top-10">
            <!-- Orange Arrow Button positioned exactly at the curve -->
            <a href="#solutions" class="hidden lg:flex absolute -top-16 -left-16 w-14 h-14 bg-accent text-white rounded-full items-center justify-center shadow-lg hover:bg-[#c26526] transition-colors">
              <i data-lucide="arrow-up-right" class="w-6 h-6"></i>
            </a>

            <!-- Card 1 -->
            <div class="flex-1 bg-cardbg rounded-[2rem] p-8 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 class="font-serif text-2xl font-bold mb-4 leading-tight">Sustainable Green<br>Energy</h3>
              <p class="text-white/70 text-sm leading-relaxed">Harness the unlimited power of the sun to reduce carbon footprint and protect our planet.</p>
            </div>
            
            <!-- Card 2 -->
            <div class="flex-1 bg-cardbg rounded-[2rem] p-8 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 class="font-serif text-2xl font-bold mb-4 leading-tight">Affordable Solar<br>Savings</h3>
              <p class="text-white/70 text-sm leading-relaxed">Cut electricity bills while investing in a sustainable, cost-effective energy solution for tomorrow.</p>
            </div>
            
            <!-- Card 3 -->
            <div class="flex-1 bg-cardbg rounded-[2rem] p-8 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 class="font-serif text-2xl font-bold mb-4 leading-tight">Reliable Solar<br>Power</h3>
              <p class="text-white/70 text-sm leading-relaxed">High-performance solar panels built with advanced technology for long-lasting, efficient energy generation.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(top_content + bottom_content)

print("Done replacing top section.")
