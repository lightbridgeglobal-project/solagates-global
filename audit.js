const fs = require('fs');

const auditFile = (file) => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf-8');
  console.log('--- AUDITING: ' + file + ' ---');
  
  // Empty Links
  const emptyLinks = [...content.matchAll(/href=["']#["']/g)].length;
  console.log('Empty links (href="#"): ' + emptyLinks);
  
  // Placeholder text
  const lorem = [...content.matchAll(/lorem/gi)].length;
  console.log('Placeholder text (Lorem): ' + lorem);
  
  // Missing Alt Tags
  const imgTags = content.match(/<img[^>]+>/gi) || [];
  const missingAlt = imgTags.filter(img => !img.includes('alt=')).length;
  console.log('Images missing alt tags: ' + missingAlt);

  // SEO Meta Tags
  const hasMetaDesc = content.includes('name="description"');
  console.log('Has Meta Description: ' + hasMetaDesc);
  const hasOgTitle = content.includes('property="og:title"');
  console.log('Has OpenGraph tags: ' + hasOgTitle);
};

auditFile('index.html');
auditFile('ecosystem.html');
