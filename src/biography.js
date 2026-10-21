export const biography = {
  intro: [
    "I develop educational products for children and adults across different markets and cultural contexts. I work on the learning experience, the software and the practical questions of making a program work for students, teachers and schools.",
    "I came to education from professional software development. My work now brings together product discovery, instructional design and curriculum development, while keeping me directly involved in building software.",
  ],
  now: "My current projects include AI and school programs with SIT Programming School, the mathematics game Noomic, and Juncta, a shared workspace for team communication.",
  education: {
    title: "Programs for school-age learners",
    label: "School-age education",
    paragraphs: [
      "I personally authored seven courses that are still being taught. They cover programming, web development, software engineering, mathematics and cybersecurity.",
      "I also led a team that developed more than twenty courses for school-age students, including international programs in Europe. Alongside the educational content, I was responsible for coordinating the authors’ work and bringing individual courses into a coherent program.",
      "That work involves aligning learning objectives, practice and assessment: deciding what students should understand, building a sequence of activities and giving them ways to demonstrate that understanding.",
    ],
    emphasis: ["seven courses that are still being taught", "led a team that developed more than twenty courses"],
  },
  vietnam: {
    title: "A technology school for adults",
    organization: "Swiss Coding Academy · SIT Programming School",
    introduction: "At Swiss Coding Academy, SIT Programming School’s operation in Vietnam, I helped build a school for adults preparing to move into IT. I moved to Ho Chi Minh City for this work in 2022 and held roles including Chief Product Officer and Managing Director.",
    responsibilities: [
      {
        title: "Curriculum and learning design",
        text: "I led the development of a data analysis course and contributed as both a subject-matter expert and an educational designer. I worked on the subject content, practical assignments and the structure of the learning experience.",
        emphasis: ["led the development of a data analysis course", "subject-matter expert", "educational designer"],
      },
      {
        title: "The product and its delivery",
        text: "I led the development of the sales function and worked directly on marketing and operating processes. This included the program’s value proposition, how we communicated it to prospective students and the delivery model needed to support their learning.",
        emphasis: ["sales function", "marketing and operating processes"],
      },
    ],
    context: "Adult learners were often studying alongside existing commitments, with a career change in mind. That made the connection between the curriculum, practical work and their goals central to the product. We also had to adapt the program and the school to the local language and context.",
    references: [
      {
        label: "Product and curriculum work in Vietnam",
        href: "https://blog.swisscoding.edu.vn/news/methodology-team-cpo-relocation-localizing-it-education-vietnam.html",
      },
      {
        label: "Student project presentations",
        href: "https://blog.swisscoding.edu.vn/news/first-data-analysis-zero-to-hero-projects-presentation.html",
      },
      {
        label: "School report · Q1 2024",
        href: "https://blog.swisscoding.edu.vn/news/q1-2024-data-analyst-programming-school-vietnam-report.html",
        note: "The report describes a six-month Data Analyst Professional program launched in late 2023; fifty students began studying between January and March 2024.",
      },
    ],
  },
  current: {
    title: "AI and school programs",
    organization: "SIT Programming School",
    introduction: "I work with SIT Programming School on developing school programs and exploring partnerships in Latin America, particularly Colombia and Argentina.",
    example: "A student can use AI to produce working code. I am interested in what happens next: can they explain it, predict what a change will do and find the cause of an error?",
    paragraphs: [
      "That question guides my work on assignments and assessment when AI is part of the learning process. I am also exploring how AI-supported practice and feedback can help with school subjects, and how teachers can use these tools in everyday assignments.",
      "The work is in development and includes program design, research and conversations with schools.",
    ],
  },
  noomic: {
    title: "Noomic",
    subtitle: "A mathematics game for children",
    status: "In development",
    introduction: "I am developing Noomic, a browser-based mathematics game for children around seven or eight years old. The aim is for mathematical thinking to be part of the play itself.",
    paragraphs: [
      "I design the learning activities and game interactions, and work directly on the software and visual development.",
      "In one prototype, children find and replace missing blocks in two houses, working with objects, quantities and spatial relationships they can change and observe.",
    ],
  },
  juncta: {
    title: "Juncta",
    label: "Communication software",
    subtitle: "A shared workspace for team conversations",
    paragraphs: [
      "I am developing Juncta, a workspace for teams working across messaging channels and website chat. It brings conversations, customer context and files into one interface.",
      "The project includes shared access to conversations and an AI assistant for summaries, translation and reply drafts.",
    ],
    href: "https://juncta.spot/",
    image: "/assets/projects/juncta-workspace.webp",
    imageAlt: "Juncta workspace with conversations from several messaging channels grouped in a project folder.",
    imageCaption: "Juncta interface with fictional demo data.",
  },
  writing: {
    title: "Writing and code",
    text: "I write about education, software and AI, including product decisions, feedback and the experience of building with new tools.",
    software: [
      {
        name: "PyNotio",
        description: "A Python wrapper for the Notion API, published on PyPI in 2022.",
        links: [
          { label: "PyPI", href: "https://pypi.org/project/pynotio/0.0.3/" },
          { label: "Source code", href: "https://github.com/RusAbk/PyNotio-Package" },
        ],
      },
      {
        name: "AchieveBoard",
        description: "An achievement dashboard using Google Sheets, for education and team projects.",
        links: [{ label: "Source code", href: "https://github.com/RusAbk/AchieveBoard" }],
      },
    ],
  },
}
