import assert from "node:assert/strict"
import { readFile, access } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { profile, projects, homeSeo } from "../src/content.js"
import { biography } from "../src/biography.js"

const root = fileURLToPath(new URL("../_site/", import.meta.url))
const read = (path) => readFile(new URL("../_site/" + path, import.meta.url), "utf8")
const routes = ["/", ...projects.map((project) => project.href)]
const titles = new Set()
for (const route of routes) {
  const html = await read(route === "/" ? "index.html" : route.slice(1) + "index.html")
  assert.match(html, /<html lang="en">/)
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route + ": exactly one H1")
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert.ok(title, route + ": title exists")
  assert.ok(!titles.has(title), route + ": unique title")
  titles.add(title)
  assert.ok(html.includes('rel="canonical" href="' + profile.origin + route + '"'), route + ": self canonical")
  assert.ok(html.includes('property="og:url" content="' + profile.origin + route + '"'))
  assert.doesNotMatch(html, /noindex|Process Optimization|AI Implementation|AI workflows|entrepreneur|founder|HOME-INTRO|\{current_year\}/i)
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])["@graph"]
  assert.equal(graph.filter((node) => node["@type"] === "Person").length, 1)
  assert.equal(graph[0]["@id"], profile.origin + "/#person")
  assert.equal(graph[0].description, profile.description)
  assert.match(html, /href="\/#experience"/)
  assert.match(html, /href="\/#current"/)
  assert.ok(html.includes(profile.email))
  assert.ok(html.includes('property="og:image" content="' + profile.origin + profile.socialImage + '"'))
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    if (href.startsWith("/blog")) continue // Existing blog has its own deployment.
    const path = href.split(/[?#]/)[0]
    const destination = path.endsWith("/") ? path + "index.html" : path
    await access(root + destination)
  }
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes('id="' + anchor + '"'), route + ": anchor " + anchor)
  }
}
const home = await read("index.html")
const main = home.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
assert.ok(main, "Main content is present")
const homeText = main.replace(/<\/?(?:p|h1|h2|h3|section|article|div|li|header|footer|nav)\b[^>]*>/g, " ").replace(/<[^>]*>/g, "").replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16))).replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code))).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ")
for (const id of ["top", "experience", "education", "vietnam", "current", "noomic", "background", "writing"]) assert.ok(home.includes('id="' + id + '"'))
for (const paragraph of [...biography.intro, biography.now]) assert.ok(homeText.includes(paragraph), "Introduction missing: " + paragraph.slice(0, 75))
assert.doesNotMatch(home, /How I work|Explore my work|Get in touch|27\+/)
assert.equal((home.match(/<details[ >]/g) || []).length, 1, "Only the mobile menu may use details")
assert.ok(homeText.includes("seven courses that are still being taught"))
assert.ok(homeText.includes("more than twenty courses"))
assert.ok(homeText.includes("fifty students began studying"))
for (const fact of ["professional software development", "Chief Product Officer", "Managing Director", "subject-matter expert", "educational designer", "sales function", "marketing and operating processes", "Colombia and Argentina", "children around seven or eight years old", "missing blocks", "In development"]) {
  assert.ok(homeText.includes(fact), "Essential profile fact missing: " + fact)
}
let previousSection = -1
for (const id of ["current", "noomic", "experience", "education", "vietnam", "writing", "background"]) {
  const position = main.indexOf('id="' + id + '"')
  assert.ok(position > previousSection, "Narrative order: " + id)
  previousSection = position
}
assert.doesNotMatch(home, /Task schematic|task-diagram|NoomicTask/)
assert.ok(home.includes("https://github.com/RusAbk/PyNotio-Package"))
assert.ok(home.includes("https://github.com/RusAbk/AchieveBoard"))
assert.ok(home.includes(homeSeo.description))
const card = await readFile(new URL("../_site" + profile.socialImage, import.meta.url))
assert.equal(card.subarray(1, 4).toString(), "PNG")
assert.equal(card.readUInt32BE(16), 1200)
assert.equal(card.readUInt32BE(20), 630)
const sitemap = await read("sitemap.xml")
for (const route of routes) assert.ok(sitemap.includes("<loc>" + profile.origin + route + "</loc>"))
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length)
assert.doesNotMatch(sitemap, /lastmod/)
assert.match(await read("robots.txt"), /Allow: \/\n/)
console.log("Verified 3 static pages: profile facts and narrative order, metadata, JSON-LD, links, anchors, social card, sitemap and robots.txt.")
