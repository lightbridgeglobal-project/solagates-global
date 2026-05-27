const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\c8d8acc2-8c8b-45a4-92ee-05619c000c90';
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const files = fs.readdirSync(brainDir);

const copyLatest = (prefix, targetName) => {
  const matches = files.filter(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (matches.length > 0) {
    // get latest by sorting alphabetically (timestamp is in name)
    matches.sort();
    const latest = matches[matches.length - 1];
    fs.copyFileSync(path.join(brainDir, latest), path.join(publicDir, targetName));
    console.log(`Copied ${latest} to ${targetName}`);
  }
};

copyLatest('logo_', 'logo.png');
copyLatest('hero_family_', 'hero-african-family-solar-home.jpg');
copyLatest('hero_family_', 'hero-african-family-solar-home.jpeg');
copyLatest('residential_solar_', 'residential-rooftop-solar-africa.jpg');
copyLatest('commercial_solar_', 'commercial-office-solar-installation.jpg');
copyLatest('industrial_solar_', 'industrial-factory-solar-system.jpg');
copyLatest('hybrid_inverter_', 'hybrid-inverter-premium.jpg');
copyLatest('lithium_battery_', 'lithium-battery-bank.jpg');
copyLatest('solar_engineer_', 'solar-maintenance-engineer-service.jpg');
copyLatest('project_estate_', 'project-1.jpg');
copyLatest('project_tech_hub_', 'project-2.jpg');
copyLatest('solar_blueprint_', 'solar-system-design-blueprint.jpg');

console.log('All images copied successfully!');
