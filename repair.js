const fs = require('fs');

const metaTagsIndex = `
    <meta name="description" content="Solagates Global - Enterprise-grade renewable energy infrastructure, high-performance microgrids, and commercial solar installations tailored to your power requirements." />
    <meta name="keywords" content="Solar, Renewable Energy, Microgrids, Enterprise Solar, Commercial Power, Solagates" />
    <meta property="og:title" content="Solagates Global | Premium Renewable Energy" />
    <meta property="og:description" content="Scalable, high-performance clean energy infrastructure tailored to your specific power requirements." />
    <meta property="og:image" content="https://solagates.com/public/logo.png" />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/png" href="public/logo.png" />`;

const metaTagsEco = `
    <meta name="description" content="Solagates Academy - Premium Clean Energy Education. Join the next generation of certified renewable energy engineers and enterprise solar architects." />
    <meta name="keywords" content="Solar Academy, Renewable Energy Training, Engineering Certification, Solagates Education" />
    <meta property="og:title" content="Solagates Academy | Premium Clean Energy Education" />
    <meta property="og:description" content="Master the future of energy infrastructure with elite, hands-on training." />
    <meta property="og:image" content="https://solagates.com/public/logo.png" />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/png" href="public/logo.png" />`;

const processFile = (file, isEco) => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf-8');

  // Inject Meta tags if missing
  if (!html.includes('name="description"')) {
    const meta = isEco ? metaTagsEco : metaTagsIndex;
    html = html.replace(/<title>/, meta + '\n    <title>');
  }

  // General routing replacements for the Navigation Links
  // We look for href="#" before >Text</a>
  html = html.replace(/href=["']#["']([^>]*)>Home<\/a>/gi, 'href="index.html"$1>Home</a>');
  html = html.replace(/href=["']#["']([^>]*)>Academy<\/a>/gi, 'href="ecosystem.html"$1>Academy</a>');
  html = html.replace(/href=["']#["']([^>]*)>Solutions<\/a>/gi, 'href="index.html#solutions"$1>Solutions</a>');
  html = html.replace(/href=["']#["']([^>]*)>Company<\/a>/gi, 'href="index.html#company"$1>Company</a>');
  html = html.replace(/href=["']#["']([^>]*)>Contact<\/a>/gi, 'href="#footer"$1>Contact</a>');
  html = html.replace(/href=["']#["']([^>]*)>Get Started<\/a>/gi, 'href="#footer"$1>Get Started</a>');
  html = html.replace(/href=["']#["']([^>]*)>Explore Solutions<\/a>/gi, 'href="index.html#solutions"$1>Explore Solutions</a>');
  html = html.replace(/href=["']#["']([^>]*)>View all projects<\/a>/gi, 'href="index.html#solutions"$1>View all projects</a>');
  
  // Specific Button routings (Learn more)
  html = html.replace(/href=["']#["']([^>]*)>Learn more/gi, 'href="index.html#solutions"$1>Learn more');
  
  // Newsletter action
  html = html.replace(/<form\s+class="([^"]*)"\s*>/g, '<form class="$1" action="mailto:solagateglobal@gmail.com" method="post" enctype="text/plain">');

  fs.writeFileSync(file, html);
};

processFile('index.html', false);
processFile('ecosystem.html', true);
