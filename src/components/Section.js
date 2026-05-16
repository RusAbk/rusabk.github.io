import { h } from "./html.js"

export function Section({ id, eyebrow, title, children, className = "" }) {
  return h(
    "section",
    { id, className: `section ${className}`.trim() },
    h(
      "div",
      { className: "container section-grid" },
      h("div", { className: "section-heading" }, eyebrow && h("p", { className: "eyebrow" }, eyebrow), h("h2", null, title)),
      h("div", { className: "section-body" }, children),
    ),
  )
}
