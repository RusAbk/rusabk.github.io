import { h } from "./html.js"
import { hero, profile } from "../content.js"

export function Hero() {
  return h(
    "section",
    { id: "top", className: "hero" },
    h(
      "div",
      { className: "container hero-layout" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "eyebrow" }, hero.eyebrow),
        h("h1", null, hero.title),
        h("p", { className: "lead" }, hero.text),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "btn primary", href: "#contact" }, "Discuss an implementation"),
          h("a", { className: "btn secondary", href: "#work" }, "What I do"),
        ),
        h("ul", { className: "signal-list" }, hero.bullets.map((item) => h("li", { key: item }, item))),
      ),
      h(
        "aside",
        { className: "hero-panel", "aria-label": "Ruslan Abkadirov profile" },
        h("img", { src: profile.image, alt: "Ruslan Abkadirov", width: "520", height: "520" }),
        h(
          "div",
          { className: "panel-note" },
          h("strong", null, profile.name),
          h("span", null, profile.role),
        ),
      ),
    ),
  )
}
