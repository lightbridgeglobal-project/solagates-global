const fs = require('fs');

const processFile = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // 1. Font Links & Tailwind Config
  html = html.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />',
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />\n    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,600&display=swap" rel="stylesheet" />'
  );
  html = html.replace('display: ["Outfit", "sans-serif"]', 'display: ["Satoshi", "sans-serif"]');

  // 2. Navbar Typography
  html = html.replace(
    'font-display font-bold text-2xl tracking-tight uppercase',
    'font-display font-bold text-2xl tracking-tight uppercase' // Satoshi applies automatically
  );
  html = html.replace(
    'font-medium text-sm uppercase tracking-widest font-display',
    'font-sans font-medium text-[14px] uppercase tracking-[0.08em]' // Inter Medium 14px
  );

  // 3. Hero Typography
  html = html.replace(
    'text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white w-full xl:w-[90%] leading-tight tracking-tight uppercase',
    'font-display font-bold text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.05] text-white w-full max-w-[12ch] xl:max-w-none'
  );
  html = html.replace(
    'text-white/90 font-medium text-lg md:text-xl max-w-2xl mt-4',
    'text-white/90 font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.65] max-w-[700px] mt-4'
  );
  // Hero CTA
  html = html.replace(
    'font-bold font-display uppercase tracking-widest bg-accent text-primary h-[60px] text-xs px-8',
    'font-sans font-semibold text-[15px] md:text-[16px] bg-accent text-primary px-[32px] py-[18px] rounded-[14px]'
  );
  html = html.replace(
    'font-bold font-display uppercase tracking-widest text-xs h-[60px] px-8',
    'font-sans font-semibold text-[15px] md:text-[16px] px-[32px] py-[18px] rounded-[14px]'
  );

  // 4. Metrics Section
  html = html.replace(/text-4xl md:text-5xl font-bold text-primary font-display/g, 'font-display font-bold text-[42px] md:text-[48px] lg:text-[56px] text-primary');
  html = html.replace(/text-sm text-grey-500 font-medium uppercase tracking-wider/g, 'font-sans font-medium text-[14px] md:text-[16px] text-grey-500');

  // 5. Section Headings (Global)
  html = html.replace(/text-3xl md:text-4xl font-display font-bold uppercase/g, 'font-display font-bold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.15]');
  html = html.replace(/text-grey-500 font-medium text-base max-w-xl/g, 'text-grey-500 font-sans font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-[700px]');
  html = html.replace(/text-grey-500 font-medium text-base max-w-lg/g, 'text-grey-500 font-sans font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-[700px]');
  html = html.replace(/text-sm font-semibold tracking-widest text-primary uppercase/g, 'font-sans font-medium text-[12px] md:text-[13px] lg:text-[14px] uppercase tracking-[0.12em] text-grey-500');

  // 6. Service Cards
  html = html.replace(/text-xl font-display font-bold text-grey-900 uppercase tracking-tight/g, 'font-display font-semibold text-[20px] md:text-[22px] lg:text-[24px] text-grey-900');
  html = html.replace(/text-grey-500 text-sm font-medium line-clamp-3 mb-4/g, 'font-sans font-normal text-[15px] lg:text-[16px] leading-[1.7] text-grey-500 mb-4');

  // 7. Enterprise / Target Sectors
  html = html.replace(
    'text-3xl md:text-5xl font-bold font-display uppercase tracking-tight',
    'font-display font-bold text-[38px] md:text-[48px] lg:text-[60px] leading-[1.1]'
  );
  html = html.replace(
    'text-white/70 text-lg',
    'text-white/70 font-sans font-normal text-[16px] lg:text-[20px] leading-[1.75]'
  );
  // Sector icons text
  html = html.replace(/font-display font-bold text-lg uppercase mb-2/g, 'font-display font-semibold text-[20px] md:text-[22px] lg:text-[24px] mb-2');
  html = html.replace(/text-sm text-white\/70 font-medium/g, 'font-sans font-normal text-[15px] lg:text-[16px] leading-[1.7] text-white/70');

  // 8. ROI Calculator Typography
  html = html.replace(
    'text-3xl md:text-4xl font-display font-bold text-grey-900 uppercase tracking-tight mb-6',
    'font-display font-bold text-[34px] md:text-[44px] lg:text-[52px] leading-[1.15] text-grey-900 mb-6'
  );

  // 9. Ecosystem Cards (Dealership/Academy)
  html = html.replace(/text-3xl font-display font-bold text-white uppercase mb-4/g, 'font-display font-bold text-[28px] lg:text-[34px] text-white mb-4');
  html = html.replace(/text-3xl font-display font-bold text-primary uppercase mb-4/g, 'font-display font-bold text-[28px] lg:text-[34px] text-primary mb-4');
  html = html.replace(/text-white\/80 font-medium text-lg mb-10 max-w-md/g, 'text-white/80 font-sans font-normal text-[16px] lg:text-[20px] leading-[1.75] mb-10 max-w-md');
  html = html.replace(/text-primary\/80 font-medium text-lg mb-10 max-w-md/g, 'text-primary/80 font-sans font-normal text-[16px] lg:text-[20px] leading-[1.75] mb-10 max-w-md');

  // 10. Testimonials
  html = html.replace(/text-base text-grey-700 mb-8 font-medium/g, 'font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.75] text-grey-700 mb-8');
  html = html.replace(/text-base text-grey-900 font-bold font-display uppercase tracking-wider/g, 'font-display font-medium text-[18px] text-grey-900');

  // 11. Footer
  html = html.replace(/text-3xl font-display font-bold uppercase mb-4 text-grey-900/g, 'font-display font-bold text-[34px] md:text-[44px] text-grey-900 mb-4');
  html = html.replace(/font-display font-bold uppercase tracking-widest text-sm mb-2 text-grey-900/g, 'font-display font-medium text-[18px] text-grey-900 mb-4');
  html = html.replace(/text-grey-500 hover:text-primary font-medium transition-colors text-sm/g, 'font-sans font-normal text-[15px] leading-[1.8] text-grey-500 hover:text-primary transition-colors');
  html = html.replace(/text-grey-500 text-sm font-medium flex items-center gap-2/g, 'font-sans font-normal text-[15px] leading-[1.8] text-grey-500 flex items-center gap-2');
  html = html.replace(/text-xs font-medium text-grey-400/g, 'font-sans font-normal text-[14px] text-grey-400');

  fs.writeFileSync(filename, html);
};

processFile('index.html');
processFile('ecosystem.html');

console.log('Successfully applied premium typography system');
