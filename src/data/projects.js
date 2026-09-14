
export const projects = [
  {
    slug: "agriagent",
    title: "AgriAgent",
    summary:
      "Full-stack agri-tech marketplace connecting farmers, labourers, contractors, and buyers for agricultural services.",
    problem:
      "Farmers and other agricultural users need a centralized platform to access services such as equipment rental, produce trading, and crop problem-solving.",
    solution:
      "A full-stack marketplace application with multiple user roles, authentication, REST APIs, database-backed services, and an admin dashboard.",
    features: [
      "Equipment rental and produce trading",
      "Multi-provider authentication",
      "Role-based access control",
      "Admin dashboard for moderation and analytics",
      "REST API with MongoDB",
      "Security with Helmet, CORS, and rate limiting",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "OAuth2",
      "JWT",
    ],
    github:
      "https://play.google.com/store/apps/details?id=com.agriagent.app",
    demo: "",
    image: "",
    featured: true,
  },

  {
    slug: "jntuh-results-whatsapp-bot",
    title: "JNTUH Results WhatsApp Bot",
    summary:
      "Automated WhatsApp bot that fetches academic results, CGPA, and backlog details for JNTUH students.",
    problem:
      "Students need a quick way to access academic results and related information without manually navigating the university portal.",
    solution:
      "An automated WhatsApp bot that accepts a hall ticket number, retrieves information from the JNTUH portal, and returns parsed academic results.",
    features: [
      "Academic result lookup",
      "CGPA and backlog information",
      "Automated JNTUH portal scraping",
      "Subject-wise result parsing",
      "Under 3-second response processing",
      "Rate limiting and session handling",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "Puppeteer",
      "Axios",
    ],
    github: "https://github.com/siddhik-reddy",
    demo: "",
    image: "",
    featured: true,
  },

  {
    slug: "health-monitoring-social-media",
    title: "Health Monitoring on Social Media Over Time",
    summary:
      "A system for detecting and predicting public health trends using temporal topic modeling on Twitter data.",
    problem:
      "Public health trends can emerge over time through social media discussions, creating an opportunity to identify patterns before they become more visible through traditional indicators.",
    solution:
      "A temporal topic modeling system using TM-ATAM to analyze Twitter data and identify evolving public health trends.",
    features: [
      "Temporal topic modeling",
      "Public health trend detection",
      "Trend prediction",
      "Twitter data analysis",
      "Validation against CDC data",
      "Comparison with Google Flu Trends",
    ],
    technologies: [
      "Python",
      "NLP",
      "Topic Modeling",
      "TM-ATAM",
    ],
    github: "https://github.com/siddhik-reddy",
    demo: "",
    image: "",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

