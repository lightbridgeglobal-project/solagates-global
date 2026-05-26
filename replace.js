const fs = require('fs');

const processFile = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // 1. Remove Social Icons Placeholder
  // We'll regex match the exact div block
  const socialRegex = /<div class="flex gap-4">\s*<!-- Social Icons Placeholder -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  // Actually, easier to replace everything from '<div class="flex gap-4">\s*<!-- Social Icons Placeholder -->'
  // to the closing '</div>' of that flex gap-4 container. Let's just find the exact string if possible.
  
  const socialStart = '<!-- Social Icons Placeholder -->';
  const socialIndex = html.indexOf(socialStart);
  if (socialIndex !== -1) {
     const flexGapStart = html.lastIndexOf('<div class="flex gap-4">', socialIndex);
     // find the end of the flex gap-4 div. It contains 3 divs inside it. 
     // We can just use a regex for this specific block:
     const regex = /<div class="flex gap-4">\s*<!-- Social Icons Placeholder -->[\s\S]*?<i data-lucide="instagram" class="w-4 h-4"><\/i>\s*<\/div>\s*<\/div>/;
     html = html.replace(regex, '');
  }

  // 2. Update Contact Information
  // Address
  html = html.replace(
    /<i data-lucide="map-pin"[^>]*><\/i>\s*Lagos,\s*Nigeria/,
    '<i data-lucide="map-pin" class="w-4 h-4 text-primary"></i> 14, Ire-Akari Estate, Apete, Ibadan, Oyo State'
  );
  
  // Phone
  html = html.replace(
    /<i data-lucide="phone"[^>]*><\/i>\s*\+234 800\s*SOLAGATES/,
    '<i data-lucide="phone" class="w-4 h-4 text-primary"></i> +234 8075155862'
  );

  fs.writeFileSync(filename, html);
};

processFile('index.html');
processFile('ecosystem.html');

console.log('Successfully updated contact info and removed social icons');
