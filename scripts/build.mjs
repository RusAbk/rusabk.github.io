import { cp, mkdir, readFile, writeFile } from "node:fs/promises"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { HomePage } from "../src/pages/HomePage.js"
import { ProjectPage } from "../src/pages/ProjectPage.js"
import { homeSeo, profile, projects } from "../src/content.js"
import { structuredData } from "../src/metadata.js"

const root = fileURLToPath(new URL("..", import.meta.url))
const output = resolve(root, "_site")
const pages = [
  { path: "/", seo: homeSeo, component: HomePage, props: {} },
  ...projects.map((project) => ({ path: project.href, seo: project.seo, component: ProjectPage, props: { project } })),
]
const escape = (text) => text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char])
const css = await readFile(resolve(root, "src/styles.css"), "utf8")

await mkdir(resolve(root, "assets"), { recursive: true })
await writeFile(resolve(root, "assets/site.css"), css)
await cp(resolve(root, "src/navigation.js"), resolve(root, "assets/navigation.js"))
await mkdir(output, { recursive: true })
for (const entry of ["assets", "img", "favicon.ico", "CNAME"]) {
  await cp(resolve(root, entry), resolve(output, entry), { recursive: true })
}
// Fail before producing HTML that references a missing social card.
await readFile(resolve(root, "assets/og/ruslan-abkadirov-profile.png"))

for (const page of pages) {
  const body = renderToStaticMarkup(React.createElement(page.component, page.props))
  const canonical = profile.origin + page.path
  const json = JSON.stringify(structuredData(page.path, page.seo.title)).replace(/</g, "\\u003c")
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wugylym735");
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(page.seo.title)}</title>
  <meta name="description" content="${escape(page.seo.description)}">
  <link rel="canonical" href="${escape(canonical)}">
  <meta name="theme-color" content="#f6fbfc">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(page.seo.title)}">
  <meta property="og:description" content="${escape(page.seo.description)}">
  <meta property="og:url" content="${escape(canonical)}">
  <meta property="og:site_name" content="${escape(profile.name)}">
  <meta property="og:locale" content="en_US">
  <meta property="og:image" content="${escape(profile.origin + profile.socialImage)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escape(profile.socialImageAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(page.seo.title)}">
  <meta name="twitter:description" content="${escape(page.seo.description)}">
  <meta name="twitter:image" content="${escape(profile.origin + profile.socialImage)}">
  <meta name="twitter:image:alt" content="${escape(profile.socialImageAlt)}">
  <link rel="icon" href="/favicon.ico">
  <link rel="preload" href="/assets/fonts/manrope-variable.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/assets/site.css">
  <script type="application/ld+json">${json}</script>
</head>
<body>${body}<script src="/assets/navigation.js" defer></script></body>
</html>
`
  const relative = page.path === "/" ? "index.html" : page.path.slice(1) + "index.html"
  const destination = resolve(output, relative)
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, html)
  // Keep the original tracked root HTML usable as a standalone static preview.
  if (page.path === "/") await writeFile(resolve(root, "index.html"), html)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => "  <url><loc>" + escape(profile.origin + page.path) + "</loc></url>").join("\n")}
</urlset>
`
await writeFile(resolve(output, "sitemap.xml"), sitemap)
await writeFile(resolve(output, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + profile.origin + "/sitemap.xml\n")
await writeFile(resolve(output, ".nojekyll"), "")
console.log("Built " + pages.length + " static pages in _site/")
