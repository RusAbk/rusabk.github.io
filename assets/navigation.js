// Progressive enhancement: native <details> remains usable without JavaScript.
const menu = document.querySelector(".mobile-navigation")
const summary = menu?.querySelector("summary")

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) menu.open = false
})
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.open) {
    menu.open = false
    summary.focus()
  }
})
document.addEventListener("click", (event) => {
  if (menu?.open && !menu.contains(event.target)) menu.open = false
})

// A small, one-time movement. Content is always visible, including without JS.
const motion = matchMedia("(prefers-reduced-motion: reduce)")
if (!motion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add("is-arriving")
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.08 })
  document.querySelectorAll("[data-arrive]").forEach((element) => observer.observe(element))
  motion.addEventListener("change", (event) => {
    if (event.matches) observer.disconnect()
  }, { once: true })
}
