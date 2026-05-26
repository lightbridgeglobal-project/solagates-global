const fs = require('fs');

const processFile = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf-8');

  // Update Currency
  html = html.replace('~$142,500', '~₦142.5M');

  // Update contact to add email. The contact block looks like:
  /*
            <p
              class="font-sans font-normal text-[15px] leading-[1.8] text-grey-500 flex items-center gap-2"
            >
              <i data-lucide="mail" class="w-4 h-4 text-primary"></i>
              hello@solagates.com
            </p>
  */
  // I will just replace the inner text.
  html = html.replace(
    /<i data-lucide="mail" class="w-4 h-4 text-primary"><\/i>\s*hello@solagates\.com/,
    '<i data-lucide="mail" class="w-4 h-4 text-primary"></i> hello@solagates.com <br> solagateglobal@gmail.com'
  );

  fs.writeFileSync(filename, html);
};

processFile('index.html');
processFile('ecosystem.html');

console.log('Successfully updated currency and contact info');
