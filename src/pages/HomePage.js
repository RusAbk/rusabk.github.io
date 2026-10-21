import { h } from "../components/html.js"
import { Hero } from "../components/Hero.js"
import { Icon } from "../components/Icon.js"
import { Paragraphs, SiteLayout } from "../components/SiteLayout.js"
import { biography } from "../biography.js"

function ExternalLink({ href, children, className = "source-link" }) {
  return h("a", { href, className }, children, h(Icon, { name: "diagonal" }))
}

function Experience() {
  const { education, vietnam } = biography
  return h("section", { id: "experience", className: "experience-section section-space", "aria-labelledby": "experience-heading" },
    h("div", { className: "container" },
      h("header", { className: "section-heading" }, h("h2", { id: "experience-heading" }, "Education and product development")),
      h("article", { id: "education", className: "curriculum-entry", "aria-labelledby": "education-heading" },
        h("header", { className: "entry-heading" },
          h("p", { className: "eyebrow" }, education.label),
          h("h3", { id: "education-heading" }, education.title),
        ),
        h("div", { className: "entry-copy" }, h(Paragraphs, { texts: education.paragraphs, emphasis: education.emphasis })),
      ),
      h("article", { id: "vietnam", className: "vietnam-entry surface", "aria-labelledby": "vietnam-heading", "data-arrive": true },
        h("header", { className: "vietnam-heading" },
          h("p", { className: "eyebrow" }, vietnam.organization),
          h("h3", { id: "vietnam-heading" }, vietnam.title),
        ),
        h("div", { className: "vietnam-content" },
          h("p", { className: "vietnam-introduction" }, vietnam.introduction),
          h("div", { className: "responsibilities" }, vietnam.responsibilities.map((item) =>
            h("section", { key: item.title, className: "responsibility" },
              h("h4", null, item.title),
              h(Paragraphs, { texts: [item.text], emphasis: item.emphasis }),
            ),
          )),
          h("p", { className: "vietnam-context" }, vietnam.context),
        ),
        h("aside", { className: "school-materials", "aria-label": "Public materials from the school" },
          h("p", { className: "detail-label" }, "From the school"),
          h("ul", null, vietnam.references.map((reference) => h("li", { key: reference.href },
            h(ExternalLink, { href: reference.href }, reference.label),
            reference.note && h("p", null, reference.note),
          ))),
        ),
      ),
    ),
  )
}

function CurrentWork() {
  const { current, noomic, juncta } = biography
  return h("section", { id: "current", className: "current-section section-space", "aria-labelledby": "current-heading" },
    h("div", { className: "container" },
      h("header", { className: "section-heading" }, h("h2", { id: "current-heading" }, "Current work")),
      h("div", { className: "current-grid" },
        h("article", { className: "current-project sit-project surface", "aria-labelledby": "sit-heading", "data-arrive": true },
          h("header", null,
            h("p", { className: "eyebrow" }, current.organization),
            h("h3", { id: "sit-heading" }, current.title),
          ),
          h("p", null, current.introduction),
          h("div", { className: "learning-example" }, h("p", null, current.example)),
          h(Paragraphs, { texts: current.paragraphs }),
        ),
        h("article", { id: "noomic", className: "current-project noomic-project surface", "aria-labelledby": "noomic-heading", "data-arrive": true },
          h("header", null,
            h("span", { className: "status" }, noomic.status),
            h("h3", { id: "noomic-heading" }, noomic.title),
            h("p", { className: "project-subtitle" }, noomic.subtitle),
          ),
          h("p", null, noomic.introduction),
          h(Paragraphs, { texts: noomic.paragraphs }),
        ),
        h("article", { id: "juncta", className: "current-project juncta-project surface", "aria-labelledby": "juncta-heading", "data-arrive": true },
          h("div", { className: "juncta-copy" },
            h("header", null,
              h("p", { className: "eyebrow" }, juncta.label),
              h("h3", { id: "juncta-heading" }, juncta.title),
              h("p", { className: "project-subtitle" }, juncta.subtitle),
            ),
            h(Paragraphs, { texts: juncta.paragraphs }),
            h(ExternalLink, { className: "text-link", href: juncta.href }, "Visit Juncta"),
          ),
          h("figure", { className: "juncta-media" },
            h("a", { className: "juncta-preview", href: juncta.image, "aria-label": "View full-size screenshot of the Juncta workspace" },
              h("img", { src: juncta.image, alt: juncta.imageAlt, width: 1440, height: 1000, loading: "lazy", decoding: "async" }),
              h("span", { className: "preview-action" }, "View screenshot", h(Icon, { name: "diagonal" })),
            ),
            h("figcaption", null, juncta.imageCaption),
          ),
        ),
      ),
    ),
  )
}

function PublicWork() {
  const { writing } = biography
  return h("section", { id: "writing", className: "public-work-section section-space", "aria-labelledby": "writing-heading" },
    h("div", { className: "container public-work-layout" },
      h("div", { className: "writing-introduction" },
        h("h2", { id: "writing-heading" }, writing.title),
        h("p", null, writing.text),
        h("a", { className: "text-link", href: "/blog/" }, "Read the blog", h(Icon, { name: "arrow" })),
      ),
      h("div", { id: "background", className: "software-works", "aria-labelledby": "software-heading" },
        h("h3", { id: "software-heading", className: "detail-label" }, "Selected software projects"),
        writing.software.map((work) => h("article", { key: work.name, className: "software-work" },
          h("h4", null, work.name),
          h("p", null, work.description),
          h("div", { className: "software-links" }, work.links.map((link) => h(ExternalLink, { key: link.href, href: link.href }, link.label))),
        )),
      ),
    ),
  )
}

export function HomePage() {
  return h(SiteLayout, null, h(Hero), h(CurrentWork), h(Experience), h(PublicWork))
}
