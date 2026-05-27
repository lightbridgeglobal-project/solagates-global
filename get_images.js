const fs = require('fs');
const getImages = (file) => {
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf-8');
  const srcMatches = [...content.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
  const bgMatches = [...content.matchAll(/bg-\[url\(['"]?([^'"\)]+)['"]?\)/gi)].map(m => m[1]);
  return [...srcMatches, ...bgMatches];
};
const all = [...new Set([...getImages('index.html'), ...getImages('ecosystem.html')])];
console.log(JSON.stringify(all, null, 2));
