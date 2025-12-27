function generateSEO() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const url = document.getElementById("url").value;
  const siteName = document.getElementById("siteName").value;
  const image = document.getElementById("image").value;
  const twitter = document.getElementById("twitter").value;
  const publisher = document.getElementById("publisher").value;

  const date = new Date().toISOString();

  const seo = `
<!-- SEO GENERATED LIKE YOAST -->
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">

<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${siteName}">
<meta property="article:publisher" content="${publisher}">
<meta property="article:modified_time" content="${date}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="${twitter}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<!-- / SEO GENERATED -->
  `.trim();

  document.getElementById("output").value = seo;
}
