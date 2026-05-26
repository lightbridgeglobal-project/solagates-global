const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');

// The section starts around line 733 and ends before line 809
const sectionStartTag = '<!-- 7. SERVICE CENTER (Dealership & Academy) -->';
const sectionEndTag = '<!-- 8. FEATURED PROJECTS -->';

const startIndex = indexHtml.indexOf(sectionStartTag);
const endIndex = indexHtml.indexOf(sectionEndTag);

if (startIndex !== -1 && endIndex !== -1) {
  let sectionContent = indexHtml.substring(startIndex, endIndex);

  // Fix the text colors in the section content
  sectionContent = sectionContent.replace('text-primary uppercase', 'text-white/90 uppercase');
  sectionContent = sectionContent.replace('text-grey-900 text-3xl', 'text-white text-3xl');
  
  // Extract head, nav, footer from index.html to build ecosystem.html
  // Header up to Hero Content (pt-20)
  const navEndStr = '<!-- Hero Content -->';
  const navEndIndex = indexHtml.indexOf(navEndStr);
  let headerPart = indexHtml.substring(0, navEndIndex);
  
  // Make the hero section much shorter for the subpage
  // Find <section class="relative flex flex-col h-[95vh] justify-center overflow-x-hidden">
  headerPart = headerPart.replace('h-[95vh]', 'h-[40vh]');
  
  // Add a simple subpage hero content
  let subpageHero = `
      <div class="w-[90%] 2xl:w-[75%] mx-auto z-40 flex flex-col pt-24 pb-12">
        <h1 class="text-4xl md:text-5xl font-bold font-display text-white uppercase tracking-tight">Solagates Ecosystem</h1>
      </div>
    </section>
  `;

  // Get Footer
  const footerStartStr = '<!-- 10. FOOTER -->';
  const footerIndex = indexHtml.indexOf(footerStartStr);
  let footerPart = indexHtml.substring(footerIndex);

  // Build ecosystem.html
  let ecosystemHtml = headerPart + subpageHero + '\n' + sectionContent + '\n' + footerPart;

  // Now remove the section from index.html
  indexHtml = indexHtml.substring(0, startIndex) + indexHtml.substring(endIndex);

  // Update navigation links in both files
  // Products -> ecosystem.html#dealership
  // Academy -> ecosystem.html#academy
  // Also change the "active" or just the hrefs
  
  const updateLinks = (html) => {
    return html
      .replace(/href="#dealership"/g, 'href="ecosystem.html#dealership"')
      .replace(/href="#academy"/g, 'href="ecosystem.html#academy"');
  };

  indexHtml = updateLinks(indexHtml);
  // for ecosystem.html, the links to #vision, #solutions, #projects should point to index.html
  let ecosystemUpdated = updateLinks(ecosystemHtml);
  ecosystemUpdated = ecosystemUpdated
    .replace(/href="#vision"/g, 'href="index.html#vision"')
    .replace(/href="#solutions"/g, 'href="index.html#solutions"')
    .replace(/href="#projects"/g, 'href="index.html#projects"');

  fs.writeFileSync('ecosystem.html', ecosystemUpdated);
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully extracted ecosystem section to new page');
} else {
  console.log('Could not find section boundaries');
}
