
export const projects = [
  {
    slug: "agriagent",
    title: "AgriAgent",
    summary:
      "Digital platform designed to help farmers access agricultural services and information.",
    problem:
      "Farmers lack a single place to discover services, schemes and region-specific information.",
    solution:
      "A responsive web platform that centralizes agricultural services with a clean, low-friction interface.",
    features: [
      "Service discovery by region",
      "Responsive layout for low-end devices",
      "REST API integration",
      "Accessible navigation",
    ],
    technologies: ["React", "Node.js", "REST API"],
    github: "https://play.google.com/store/apps/details?id=com.agriagent.app",
    demo: "",
    image: "",
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    summary:
      "This portfolio: a content-driven React app with theme switching and project routing.",
    problem:
      "Recruiters need to evaluate a developer's work quickly and clearly.",
    solution:
      "A fast, accessible portfolio separating content from UI so new projects ship without redesign.",
    features: [
      "Dark / light / system theme",
      "Content-driven architecture",
      "Project detail routing",
      "Accessible navigation",
    ],
    technologies: ["React", "Vite", "CSS"],
    github: "https://github.com/siddhik-reddy/portfolio",
    demo: "",
    image: "",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

