const fs = require('fs');

const fixExtensions = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // The files in public/ that end with .jpeg are:
  const jpegs = [
    'commercial-office-solar-installation',
    'hero-african-family-solar-home',
    'hybrid-inverter-premium',
    'industrial-factory-solar-system',
    'lithium-battery-bank',
    'project-1',
    'project-2',
    'project-3',
    'project-4',
    'solar-maintenance-engineer-service'
  ];

  jpegs.forEach(base => {
    html = html.replace(new RegExp(`public/${base}\\.jpg`, 'g'), `public/${base}.jpeg`);
  });

  fs.writeFileSync(filename, html);
};

fixExtensions('index.html');
fixExtensions('ecosystem.html');
console.log('Fixed extensions to .jpeg');
