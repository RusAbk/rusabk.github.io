import { profile } from "./content.js"

export const person = {
  "@type": "Person",
  "@id": profile.origin + "/#person",
  name: profile.name,
  alternateName: profile.alternateName,
  url: profile.origin + "/",
  description: profile.description,
  image: profile.origin + profile.image,
}

export function structuredData(path, title) {
  const website = {
    "@type": "WebSite",
    "@id": profile.origin + "/#website",
    url: profile.origin + "/",
    name: profile.name,
    inLanguage: "en",
    publisher: { "@id": person["@id"] },
  }
  const graph = [person, website]
  if (path === "/") graph.push({
    "@type": "ProfilePage",
    "@id": profile.origin + "/#profile",
    url: profile.origin + "/",
    name: profile.name,
    inLanguage: "en",
    mainEntity: { "@id": person["@id"] },
    isPartOf: { "@id": website["@id"] },
  })
  if (path !== "/") graph.push({
    "@type": "WebPage",
    "@id": profile.origin + path + "#webpage",
    url: profile.origin + path,
    name: title,
    inLanguage: "en",
    isPartOf: { "@id": website["@id"] },
    author: { "@id": person["@id"] },
  })
  return { "@context": "https://schema.org", "@graph": graph }
}
