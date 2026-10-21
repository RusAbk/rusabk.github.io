import { h } from "../components/html.js"
import { EmailLink, Paragraphs, SiteLayout } from "../components/SiteLayout.js"

export function ProjectPage({ project }) {
  return h(SiteLayout, null,
    h("article", { className: "project-page reading-column", "data-project": project.slug },
      h("a", { className: "text-link back-link", href: "/#current" }, "Current work"),
      h("header", { className: "project-page-header" },
        h("span", { className: "status" }, project.status),
        h("h1", null, project.pageTitle),
        project.slug === "noomic" && h("p", { className: "project-deck" }, project.subtitle),
        h(Paragraphs, { texts: project.introduction }),
      ),
      project.sections.map((section) => h("section", { key: section.title },
        h("h2", null, section.title),
        section.areas?.map(([label, text]) => h("p", { key: label }, h("strong", null, label), " ", text)),
        h(Paragraphs, { texts: section.paragraphs }),
        section.items && h("ul", null, section.items.map((item) => h("li", { key: item }, item))),
        section.contact && h(EmailLink),
        section.writing && h("a", { className: "text-link", href: "/blog/" }, "More writing"),
      )),
    ),
  )
}
