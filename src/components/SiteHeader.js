import { h } from "./html.js"
import { navItems, profile } from "../content.js"

export function SiteHeader() {
  return h(
    "header",
    { className: "site-header" },
    h(
      "div",
      { className: "container header-inner" },
      h(
        "a",
        { className: "brand", href: "#top", "aria-label": "Ruslan Abkadirov home" },
        h("span", { className: "logo", "aria-hidden": "true" }, "R"),
        h("span", { className: "brand-copy" }, h("strong", null, profile.name), h("small", null, profile.role)),
      ),
      h(
        "nav",
        { className: "nav", "aria-label": "Primary navigation" },
        navItems.map((item) => h("a", { key: item.href, href: item.href }, item.label)),
      ),
      h("a", { className: "contact-btn", href: profile.email }, "Contact"),
    ),
  )
}
