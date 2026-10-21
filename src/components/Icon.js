import { h } from "./html.js"

const paths = {
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  diagonal: ["M6 18 18 6", "M6 6h12v12"],
  mail: ["M4 5h16v14H4z", "m4 6 8 7 8-7"],
  globe: ["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M3 12h18", "M12 3c4 4 4 14 0 18-4-4-4-14 0-18Z"],
  book: ["M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z", "M12 6v14"],
}

export function Icon({ name = "arrow", className = "" }) {
  return h("svg", { className: "icon " + className, viewBox: "0 0 24 24", width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
    (paths[name] || paths.arrow).map((d) => h("path", { key: d, d })),
  )
}
