const fs = require('fs');

const fixHtml = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // Find all <img ... / loading="lazy" decoding="async"> and fix them to <img ... loading="lazy" decoding="async" />
  // Or just reset them and parse correctly.
  
  // First, undo the broken addition
  html = html.replace(/\/\s*loading="lazy" decoding="async">/g, '/>');
  html = html.replace(/\/\s*decoding="async">/g, '/>');

  // Now, correctly add them.
  html = html.replace(/<img\s([^>]+?)>/g, (match, inner) => {
    // If it's the broken one, we might have already cleaned it.
    // If it already has loading, skip.
    let newInner = inner;
    if (newInner.endsWith('/')) {
        newInner = newInner.slice(0, -1).trim();
    }
    
    if (newInner.includes('logo.png')) {
       if (!newInner.includes('decoding=')) {
          newInner += ' decoding="async"';
       }
    } else {
       if (!newInner.includes('loading=')) {
          newInner += ' loading="lazy"';
       }
       if (!newInner.includes('decoding=')) {
          newInner += ' decoding="async"';
       }
    }
    
    return `<img ${newInner} />`;
  });

  fs.writeFileSync(filename, html);
};

fixHtml('index.html');
fixHtml('ecosystem.html');
console.log('Fixed img tags');
