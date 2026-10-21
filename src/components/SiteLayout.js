import { h } from "./html.js"
import { SiteHeader } from "./SiteHeader.js"
import { profile } from "../content.js"

function EmphasizedText({ text, emphasis }) {
  const ranges = emphasis.map((phrase) => ({ phrase, start: text.indexOf(phrase) }))
    .filter((range) => range.start >= 0)
    .sort((a, b) => a.start - b.start || b.phrase.length - a.phrase.length)
  const parts = []
  let cursor = 0
  for (const range of ranges) {
    if (range.start < cursor) continue
    parts.push(text.slice(cursor, range.start))
    parts.push(h("strong", { key: range.start }, range.phrase))
    cursor = range.start + range.phrase.length
  }
  parts.push(text.slice(cursor))
  return parts
}

export function Paragraphs({ texts = [], emphasis = [], keyParagraphs = [] }) {
  return texts.map((text) => h("p", { key: text, className: keyParagraphs.includes(text) ? "key-statement" : undefined },
    h(EmphasizedText, { text, emphasis }),
  ))
}

export function EmailLink() {
  return profile.email && h("a", { className: "text-link", href: profile.email }, profile.email.replace("mailto:", ""))
}

function SiteFooter() {
  const links = [...profile.social, ...(profile.email ? [{ label: profile.email.replace("mailto:", ""), href: profile.email }] : [])]
  return h("footer", { className: "site-footer" },
    h("div", { className: "container footer-layout" },
      h("div", null, h("strong", null, profile.name), h("p", null, profile.footerBio)),
      h("nav", { className: "footer-nav", "aria-label": "Public profiles and contact" },
        links.map((item) => h("a", { key: item.href, href: item.href }, item.label)),
      ),
      h("p", { className: "copyright" }, "© " + new Date().getFullYear() + " " + profile.name),
    ),
  )
}

export function SiteLayout({ children }) {
  return h("div", null,
    h("a", { className: "skip-link", href: "#main-content" }, "Skip to content"),
    h(SiteHeader),
    h("main", { id: "main-content", tabIndex: -1 }, children),
    h(SiteFooter),
  )
}
