const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const cards = [
  {
    title: "Residential Microgrids",
    desc: "Complete home energy autonomy. Say goodbye to noisy generators and unstable grid power with our smart home solar integrations."
  },
  {
    title: "Commercial Power",
    desc: "Slash operational costs. High-capacity rooftop arrays designed to power offices, retail spaces, and commercial real estate."
  },
  {
    title: "Industrial Scale",
    desc: "Megawatt-class installations for manufacturing, agriculture, and heavy industry requiring massive, stable power loads."
  },
  {
    title: "Hybrid Inverters",
    desc: "Intelligent power routing. Seamlessly switch between solar, battery, and grid power with zero interruption to your operations."
  },
  {
    title: "High-Density Storage",
    desc: "Enterprise-grade lithium battery banks offering deep discharge cycles, thermal stability, and decades of reliable storage."
  },
  {
    title: "O&M Services",
    desc: "Comprehensive operations and maintenance. Preventive diagnostics, panel cleaning, and rapid-response technical support."
  }
];

let index = 0;
// We know that `target="_blank"` was added right after `href="https://wa.me/2348075155862"`
html = html.replace(/href="https:\/\/wa\.me\/2348075155862"[\s\S]*?>Learn more/gi, (match) => {
  if (index >= cards.length) return match;
  const card = cards[index];
  const msg = `Hello Solagates! I would like to learn more about your services.\n\n*${card.title}*\n${card.desc}\n\n*Name/Company:* \n*Email:* \n*Phone:* \n*Property Type:* `;
  const uri = `https://wa.me/2348075155862?text=${encodeURIComponent(msg)}`;
  index++;
  
  // replace the old wa.me link with the new one
  return match.replace('https://wa.me/2348075155862', uri);
});

fs.writeFileSync('index.html', html);
