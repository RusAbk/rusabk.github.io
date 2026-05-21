import { mkdir, readFile, writeFile } from "node:fs/promises"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { HomePage } from "../src/pages/HomePage.js"

const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8")
const body = renderToStaticMarkup(React.createElement(HomePage))

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
    <meta name="description" content="Ruslan Abkadirov helps companies optimize business processes and implement practical AI workflows across operations, sales, support, education, and back office.">
    <meta name="theme-color" content="#17212b">
    <title>Ruslan Abkadirov | Process Optimization & AI Implementation</title>
    <link rel="icon" href="/favicon.ico">
    <link rel="preload" href="/img/profile-image.jpg" as="image">
    <link rel="stylesheet" href="/assets/site.css">
  </head>
  <body>
    <div id="root">${body}</div>
  </body>
</html>
`

await mkdir(new URL("../assets", import.meta.url), { recursive: true })
await writeFile(new URL("../assets/site.css", import.meta.url), css)
await writeFile(new URL("../index.html", import.meta.url), html)
