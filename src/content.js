export const profile = {
  name: "Ruslan Abkadirov",
  alternateName: "Руслан Абкадиров",
  role: "Education product leader with a background in software development.",
  description: "Education product leader with a background in software development.",
  bio: "Ruslan Abkadirov develops educational programs and digital learning products for children and adults. A professional software developer by background, he has authored seven school-age courses, led curriculum development for audiences in Europe and helped build a technology school in Vietnam.",
  compactBio: "Education product leader with a background in software development.",
  blogDescription: "Writing on education, software and the development of learning products.",
  email: "mailto:hello@ruslanabkadirov.me",
  image: "/img/profile-image.jpg",
  origin: "https://ruslanabkadirov.me",
  social: [
    { label: "GitHub", href: "https://github.com/RusAbk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ruslan-abkadirov-460229294/" },
  ],
  socialImage: "/assets/og/ruslan-abkadirov-profile.png",
  socialImageAlt: "Ruslan Abkadirov — education product leader with a background in software development.",
  footerBio: "Education products, curriculum and software.",
}

export const navItems = [
  { label: "Current work", href: "/#current" },
  { label: "Education", href: "/#experience" },
  { label: "Writing", href: "/blog/" },
]

export const homeSeo = {
  title: "Ruslan Abkadirov | Education Product Leader",
  description: "Education product leader with a background in software development. Courses for children and adults, school development in Vietnam and current projects.",
}

export const projects = [
  {
    slug: "sit",
    title: "SIT Programming School",
    pageTitle: "Education programs with SIT Programming School",
    subtitle: "Education programs, AI and school partnerships",
    status: "Current work",
    href: "/work/sit/",
    linkLabel: "More about this work",
    paragraphs: [
      "I work with SIT Programming School on developing education programs and exploring school partnerships in Latin America.",
      "My work brings together the learning experience, the technology behind it and the practical questions of implementation: what schools need, how teachers can use the program and why families would value it.",
    ],
    introduction: [
      "I work with SIT Programming School on developing education programs and exploring school partnerships in Latin America.",
      "The work connects the educational offer with the practical conditions of implementation: what students should learn, what teachers need and how the program can fit into a school.",
    ],
    sections: [
      {
        title: "My work",
        paragraphs: [
          "My work includes shaping the product offer, researching school needs, exploring partnership models and adapting the proposal for different markets.",
          "I also work through the relationship between the learning experience, the supporting technology and the business model.",
        ],
      },
      {
        title: "Current areas of development",
        areas: [
          ["Learning to use AI.", "Developing program ideas in which students build projects and learn to use AI tools with understanding and responsibility."],
          ["Using AI to support learning.", "Exploring how guided practice, explanations and feedback can support learning in school subjects."],
          ["Working with AI in school.", "Exploring ways to help teachers and students use AI deliberately, including how assignments can make understanding and AI use visible."],
        ],
        paragraphs: ["These areas are at different stages of development. They describe the work I am doing, rather than a fixed catalogue of available products."],
      },
      {
        title: "International development",
        paragraphs: [
          "My recent work has included research, conversations and partnership exploration in Colombia and Argentina.",
          "The aim is to understand the conditions for a useful and workable offer: the priorities of schools, the expectations of families and the resources available for delivery.",
        ],
      },
      {
        title: "Questions guiding the work",
        items: [
          "What should students be able to understand and do?",
          "What would make a school choose this program?",
          "What does implementation require from teachers and the school?",
          "Who pays, and what value do they expect?",
          "What needs to be tested before a larger commitment?",
        ],
      },
      { title: "Contact", paragraphs: ["I am interested in conversations with schools, education teams and partners working on these questions."], contact: true },
    ],
    seo: {
      title: "Education Programs with SIT | Ruslan Abkadirov",
      description: "Ruslan Abkadirov's work with SIT Programming School: developing education programs, exploring AI in learning and school partnerships in Latin America.",
    },
  },
  {
    slug: "noomic",
    title: "Noomic",
    pageTitle: "Noomic",
    subtitle: "A learning game for early primary school",
    status: "In development",
    href: "/work/noomic/",
    linkLabel: "Explore the project",
    paragraphs: [
      "I am developing Noomic, a browser-based learning game where children explore mathematical ideas through building, solving problems and interacting with a playful world.",
      "The work combines learning design, game mechanics and technical development. A central question is how to make mathematical thinking part of the play itself.",
    ],
    introduction: ["I am developing Noomic, a browser-based game in which children explore mathematical ideas through building, solving problems and interacting with a playful world."],
    sections: [
      {
        title: "The idea",
        paragraphs: [
          "The project explores how mathematical thinking can become part of what a child does in the game.",
          "The learning experience is being designed around concrete actions and visible changes in the world: noticing what is missing, making a choice, placing an object and seeing what happens.",
        ],
      },
      {
        title: "My work",
        paragraphs: [
          "My work on Noomic brings together learning design, game mechanics, visual direction and technical development.",
          "The project involves decisions about the tasks children encounter, the feedback they receive and how the game can run in a browser.",
        ],
      },
      {
        title: "What I am exploring",
        items: [
          "How a task can be understandable through the game world.",
          "How actions and feedback can help a child notice mathematical relationships.",
          "How to keep the experience engaging while preserving the learning purpose.",
          "How to make the interaction clear and manageable for young children.",
        ],
      },
      { title: "Current stage", paragraphs: ["Noomic is in development. The learning activities, interactions and visual world are being refined through prototypes."] },
      { title: "Follow the work", paragraphs: ["I share selected decisions and observations about the project in my writing."], writing: true },
    ],
    seo: {
      title: "Noomic: A Learning Game in Development | Ruslan Abkadirov",
      description: "Noomic is a browser-based learning game in development. Ruslan Abkadirov explores how building and play can support mathematical thinking.",
    },
  },
]
