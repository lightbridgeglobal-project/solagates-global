const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Remove Newsletter Section
const newsletterStart = '        <!-- Newsletter Row -->';
const newsletterEnd = '        <!-- Links Row -->';
const startIndex = html.indexOf(newsletterStart);
const endIndex = html.indexOf(newsletterEnd);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + html.substring(endIndex);
}

// 2. Update Tailwind Config Colors
html = html.replace('primary: "#0d281e",', 'primary: "#0b1120",'); // Navy blue
html = html.replace('palegreen: "#eef4d4",', 'accent: "#f97316",'); // Bright Orange

// 3. Replace all palegreen references with accent
html = html.replace(/palegreen/g, 'accent');

// 4. Update hardcoded #101928 backgrounds to primary
html = html.replace(/bg-\[\#101928\]/g, 'bg-primary');

// 5. Update Service Center to match the Orange block inspiration
// We will change the bg-white of the section to bg-accent and text to white
html = html.replace(
  '<section id="dealership" class="py-18 md:py-24 bg-white">',
  '<section id="dealership" class="py-18 md:py-24 bg-accent text-white">'
);
// And change text-primary inside it to text-white, text-grey-900 to text-white
html = html.replace(
  '<h3 class="text-sm font-semibold tracking-widest text-primary uppercase">Partnerships & Education</h3>',
  '<h3 class="text-sm font-semibold tracking-widest text-white/90 uppercase">Partnerships & Education</h3>'
);
html = html.replace(
  '<h2 class="text-grey-900 text-3xl md:text-4xl font-display font-bold uppercase text-center">Join The Solagates Ecosystem</h2>',
  '<h2 class="text-white text-3xl md:text-4xl font-display font-bold uppercase text-center">Join The Solagates Ecosystem</h2>'
);

// The dealership card had bg-primary, let's keep it bg-primary (Navy) which looks great on Orange
// The Academy card had bg-grey-900, let's change it to bg-white text-primary
html = html.replace(
  '<div class="flex-1 bg-grey-900 rounded-2xl p-10 md:p-14 flex flex-col relative overflow-hidden group">',
  '<div class="flex-1 bg-white rounded-2xl p-10 md:p-14 flex flex-col relative overflow-hidden group text-primary">'
);
html = html.replace(
  '<h3 class="text-3xl font-display font-bold text-white uppercase mb-4">Solagates Academy</h3>',
  '<h3 class="text-3xl font-display font-bold text-primary uppercase mb-4">Solagates Academy</h3>'
);
html = html.replace(
  '<p class="text-white/80 font-medium text-lg mb-10 max-w-md">\n                Elite technical training',
  '<p class="text-primary/80 font-medium text-lg mb-10 max-w-md">\n                Elite technical training'
);

fs.writeFileSync('index.html', html);
console.log('Successfully updated theme and removed newsletter');
