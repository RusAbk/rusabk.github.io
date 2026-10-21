import { h } from "./html.js"
import { Paragraphs } from "./SiteLayout.js"
import { biography } from "../biography.js"
import { profile } from "../content.js"

export function Hero() {
  return h("section", { className: "profile-hero", "aria-labelledby": "top" },
    h("div", { className: "container profile-hero-layout" },
      h("div", { className: "profile-heading" },
        h("h1", { id: "top" }, profile.name),
        h("p", { className: "profile-role" }, profile.role),
      ),
      h("div", { className: "profile-intro-copy" },
        h(Paragraphs, { texts: biography.intro }),
        h("p", { className: "profile-now" }, biography.now),
      ),
      h("figure", { className: "profile-portrait" },
        h("div", { className: "portrait-frame" }, h("img", { src: profile.image, alt: profile.name, width: 1707, height: 2560, fetchPriority: "high" })),
      ),
    ),
  )
}
