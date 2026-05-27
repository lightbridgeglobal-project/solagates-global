const fs = require('fs');

const optimizeHtml = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // Regex to find all img tags
  // We want to add loading="lazy" decoding="async" if not present
  // But skip the logo
  html = html.replace(/<img([^>]+)>/gi, (match, attrs) => {
    if (attrs.includes('logo.png')) {
      // Don't lazy load the logo, just add decoding="async"
      if (!attrs.includes('decoding=')) {
        return `<img${attrs} decoding="async">`;
      }
      return match;
    }

    let newAttrs = attrs;
    if (!newAttrs.includes('loading=')) {
      newAttrs += ' loading="lazy"';
    }
    if (!newAttrs.includes('decoding=')) {
      newAttrs += ' decoding="async"';
    }
    return `<img${newAttrs}>`;
  });

  fs.writeFileSync(filename, html);
};

optimizeHtml('index.html');
optimizeHtml('ecosystem.html');

console.log('Successfully optimized images with lazy loading.');
