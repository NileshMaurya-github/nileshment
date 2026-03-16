const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Require the data.js file
const BOOKS = require('./js/data.js');

// 2. Read the book.html template
const templatePath = path.join(__dirname, 'book.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

// 3. Setup Directories
const outDir = path.join(__dirname, 'book');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const siteUrl = 'https://nileshment.in';

// 4. Generate individual book HTML pages
console.log(`Generating ${BOOKS.length} book summary pages...`);

BOOKS.forEach(book => {
  const urlPath = `/book/${book.id}-summary.html`;
  const canonicalUrl = `${siteUrl}${urlPath}`;
  
  // Create JSON-LD schema
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": {
      "@type": "Person",
      "name": book.author
    },
    "image": `${siteUrl}/${book.image}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": book.rating,
      "bestRating": "5",
      "ratingCount": "125" // Example static count, or you could add to data.js
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteUrl
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Books",
      "item": `${siteUrl}/#booksSection`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": `${book.title} Summary`
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${book.title} about?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": book.summary
        }
      },
      ...book.keyInsights.slice(0, 3).map((insight, index) => ({
        "@type": "Question",
        "name": `What is key lesson ${index + 1} from ${book.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": insight
        }
      }))
    ]
  };

  // Build the meta tags block
  const seoHeadContent = `
    <!-- Auto-Generated SEO Tags -->
    <title>${book.title} Summary | Key Lessons & Insights</title>
    <meta name="description" content="Read the ${book.title} summary, key lessons, and main ideas from ${book.author}'s bestselling book in a simple and powerful format." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Nileshment" />
    
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="${book.title} Summary | Key Lessons" />
    <meta property="og:description" content="Complete summary and key lessons from ${book.title} by ${book.author}." />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${siteUrl}/${book.image}" />
    <meta property="og:site_name" content="Nileshment Book Notes" />

    <!-- Schema Markup -->
    <script type="application/ld+json">${JSON.stringify(bookSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `;

  // Pre-rendered HTML content for crawlers to see immediately
  const preRenderedContent = `
    <!-- Pre-rendered for SEO -->
    <div style="display:none;" id="seo-prerender">
      <h1>${book.title} Summary</h1>
      <h2>About the Book</h2>
      <p>${book.summary}</p>
      <h2>Key Lessons</h2>
      <ul>
        ${book.keyInsights.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <h2>Important Quotes</h2>
      <ul>
        ${book.quotes.map(q => `<li>${q}</li>`).join('')}
      </ul>
      <h2>Chapter Summary</h2>
      ${book.chapters ? book.chapters.map(c => `<h3>${c.title}</h3><p>${c.summary}</p>`).join('') : ''}
    </div>
  `;

  let pageHtml = templateHtml;

  // Replace Title and Meta Description (Remove defaults to avoid duplicates)
  pageHtml = pageHtml.replace(/<title[^>]*>.*?<\/title>/gi, '');
  pageHtml = pageHtml.replace(/<meta name="description"[^>]*>/gi, '');
  
  // Inject SEO tags into head
  pageHtml = pageHtml.replace('</head>', `${seoHeadContent}\n</head>`);
  
  // Inject Pre-rendered content into body
  pageHtml = pageHtml.replace('<body>', `<body>\n${preRenderedContent}`);
  
  // SEO optimization for images
  // Replace the empty hero cover with the actual image
  pageHtml = pageHtml.replace(
    /<img id="heroCoverImg"[^>]*>/i, 
    `<img id="heroCoverImg" src="/${book.image}" alt="${book.title} book cover" title="${book.title} summary and key lessons" />`
  );

  // We write to the new file
  const fileName = `${book.id}-summary.html`;
  fs.writeFileSync(path.join(outDir, fileName), pageHtml);
  console.log(`✓ Created ${fileName}`);
});

// 5. Generate Sitemap
let sitemapUrls = `
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

BOOKS.forEach(book => {
  sitemapUrls += `
  <url>
    <loc>${siteUrl}/book/${book.id}-summary.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent.trim());
console.log('✓ Created sitemap.xml');

// 6. Generate Robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt);
console.log('✓ Created robots.txt');

// 7. Ping Search Engines (Best effort, non-blocking)
const sitemapUrlEncode = encodeURIComponent(`${siteUrl}/sitemap.xml`);

console.log("Pinging Google...");
https.get(`https://www.google.com/ping?sitemap=${sitemapUrlEncode}`, res => {
  console.log(`Google ping status: ${res.statusCode}`);
}).on('error', e => console.error(e));

console.log("Pinging Bing...");
https.get(`https://www.bing.com/ping?sitemap=${sitemapUrlEncode}`, res => {
  console.log(`Bing ping status: ${res.statusCode}`);
}).on('error', e => console.error(e));

console.log("SEO build complete! 🚀");
