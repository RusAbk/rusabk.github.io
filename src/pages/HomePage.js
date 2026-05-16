import { h } from "../components/html.js"
import { Hero } from "../components/Hero.js"
import { SiteHeader } from "../components/SiteHeader.js"
import { method, problems, profile, proof, services } from "../content.js"

function SectionIntro({ eyebrow, title, text }) {
  return h(
    "div",
    { className: "section-intro" },
    h("p", { className: "eyebrow" }, eyebrow),
    h("h2", null, title),
    text && h("p", null, text),
  )
}

export function HomePage() {
  return h(
    "main",
    null,
    h(SiteHeader),
    h(Hero),
    h(
      "section",
      { id: "problems", className: "section problems-section" },
      h(
        "div",
        { className: "container split" },
        h(SectionIntro, {
          eyebrow: "When I help",
          title: "The work starts when operations become too manual to scale.",
          text: "Most companies do not need a generic chatbot. They need cleaner processes, fewer handoffs, better data flow, and AI placed exactly where it changes the economics of work.",
        }),
        h("div", { className: "problem-list" }, problems.map((item) => h("article", { key: item }, h("span", null), h("p", null, item)))),
      ),
    ),
    h(
      "section",
      { id: "work", className: "section work-section" },
      h(
        "div",
        { className: "container" },
        h(SectionIntro, {
          eyebrow: "What I do",
          title: "From process diagnosis to AI implementation.",
          text: "I combine operator experience, technical implementation, and practical customer discovery. The goal is not to add AI everywhere, but to build workflows that teams actually use.",
        }),
        h(
          "div",
          { className: "service-grid" },
          services.map((service) => h("article", { key: service.title, className: "service-card" }, h("h3", null, service.title), h("p", null, service.text))),
        ),
      ),
    ),
    h(
      "section",
      { id: "method", className: "section method-section" },
      h(
        "div",
        { className: "container" },
        h(SectionIntro, {
          eyebrow: "Method",
          title: "A simple implementation loop.",
          text: "Each engagement is designed to create visible operational improvement before committing to a heavy product build.",
        }),
        h(
          "div",
          { className: "method-grid" },
          method.map((item) =>
            h("article", { key: item.step, className: "method-card" }, h("span", null, item.step), h("h3", null, item.title), h("p", null, item.text)),
          ),
        ),
      ),
    ),
    h(
      "section",
      { className: "section proof-section" },
      h(
        "div",
        { className: "container split" },
        h(SectionIntro, {
          eyebrow: "Background",
          title: "Built from real operating experience.",
          text: "My work is grounded in launching and managing businesses, not only in AI experimentation.",
        }),
        h("ul", { className: "proof-list" }, proof.map((item) => h("li", { key: item }, item))),
      ),
    ),
    h(
      "section",
      { id: "contact", className: "contact-section" },
      h(
        "div",
        { className: "container contact-layout" },
        h(
          "div",
          null,
          h("p", { className: "eyebrow" }, "Contact"),
          h("h2", null, "Have a process that should be faster, cheaper, or more reliable?"),
          h("p", null, "Send a short description of the workflow, team, tools, and current bottleneck. I can help define the implementation scope and the first measurable pilot."),
        ),
        h("a", { className: "btn primary", href: profile.email }, "Email Ruslan"),
      ),
    ),
  )
}
