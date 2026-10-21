import { h } from "./html.js"
import { navItems, profile } from "../content.js"

function Navigation({ className = "nav" }) {
  return h("nav", { className, "aria-label": "Primary navigation" },
    navItems.map((item) => h("a", { key: item.href, href: item.href }, item.label)),
  )
}

export function SiteHeader() {
  return h("header", { className: "site-header" },
    h("div", { className: "container header-inner" },
      h("a", { className: "brand", href: "/#top", "aria-label": "Ruslan Abkadirov home" },
        h("span", { className: "brand-copy" }, h("strong", null, profile.name)),
      ),
      h("div", { className: "desktop-navigation" }, h(Navigation)),
      h("details", { className: "mobile-navigation" },
        h("summary", null, "Menu"), h(Navigation, { className: "nav mobile-nav" }),
      ),
    ),
  )
}
