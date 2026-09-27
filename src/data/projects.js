export const projects = [
{
slug: "active-directory-homelab",
title: "Active Directory Homelab",
summary:
"Windows Server lab environment for practicing Active Directory, domain management, user administration, authentication, and troubleshooting.",
problem:
"IT support environments require practical experience managing users, domains, authentication, permissions, and Windows infrastructure.",
solution:
"Built a virtualized Windows Server environment with Active Directory Domain Services and configured a custom domain for hands-on administration and troubleshooting.",
features: [
"Windows Server domain controller",
"Active Directory Domain Services",
"Domain and user management",
"User creation and password management",
"Domain authentication testing",
"Group and access management",
"PowerShell administration",
"Domain logon troubleshooting",
],
technologies: [
"Windows Server",
"Active Directory",
"PowerShell",
"VMware",
"DNS",
"Group Policy",
],
github: "https://github.com/siddhik-reddy",
demo: "",
image: "",
featured: true,
},

{
slug: "windows-server-iis-lab",
title: "Windows Server & IIS Lab",
summary:
"Hands-on Windows Server environment for configuring IIS, authentication, web services, and troubleshooting server connectivity.",
problem:
"IT support and system administration often require diagnosing web services, authentication failures, network connectivity, and Windows server components.",
solution:
"Configured IIS on a Windows Server VM and integrated an authentication service with the Active Directory environment to test domain-based authentication and web connectivity.",
features: [
"IIS web server configuration",
"Windows Authentication",
"SWAuth configuration",
"Active Directory authentication",
"HTTP connectivity testing",
"IIS service troubleshooting",
"HTTP 401, 500 and 503 troubleshooting",
"PowerShell and IIS administration",
],
technologies: [
"Windows Server",
"IIS",
"Active Directory",
"PowerShell",
"HTTP",
"VMware",
],
github: "https://github.com/siddhik-reddy",
demo: "",
image: "",
featured: true,
},

{
slug: "network-troubleshooting-lab",
title: "Network Troubleshooting Lab",
summary:
"Virtualized networking lab for practicing IP configuration, connectivity testing, DNS, ports, routing, and troubleshooting.",
problem:
"Network connectivity issues are common in IT support and require a structured approach to identify whether the problem is related to the device, network, DNS, firewall, or service.",
solution:
"Built and tested a VMware-based Windows environment while troubleshooting connectivity between the host system, virtual machines, Windows Server, and web services.",
features: [
"IPv4 configuration",
"Subnet and gateway verification",
"Ping testing",
"Port connectivity testing",
"DNS troubleshooting",
"Network adapter troubleshooting",
"VMware network configuration",
"TCP port testing with PowerShell",
],
technologies: [
"Windows",
"PowerShell",
"VMware",
"TCP/IP",
"DNS",
"Networking",
],
github: "https://github.com/siddhik-reddy",
demo: "",
image: "",
featured: true,
},

{
slug: "it-support-troubleshooting-lab",
title: "IT Support Troubleshooting Lab",
summary:
"Hands-on troubleshooting environment covering Windows issues, user accounts, authentication, services, networking, and system administration.",
problem:
"IT support requires a structured troubleshooting process rather than simply applying random fixes.",
solution:
"Created practical troubleshooting scenarios in a virtual Windows environment and documented the process of identifying, isolating, testing, and resolving technical issues.",
features: [
"Windows troubleshooting",
"User account troubleshooting",
"Authentication troubleshooting",
"Service management",
"PowerShell diagnostics",
"Network troubleshooting",
"IIS troubleshooting",
"Issue verification and documentation",
],
technologies: [
"Windows",
"PowerShell",
"Active Directory",
"IIS",
"Networking",
"VMware",
],
github: "https://github.com/siddhik-reddy",
demo: "",
image: "",
featured: true,
},

{
slug: "agriagent",
title: "AgriAgent",
summary:
"Full-stack agri-tech marketplace connecting farmers, labourers, contractors, and buyers.",
problem:
"Farmers and agricultural users need a centralized platform to access services such as equipment rental, produce trading, and crop problem-solving.",
solution:
"Built a full-stack marketplace application with multiple user roles, authentication, REST APIs, database-backed services, and an administration layer.",
features: [
"Equipment rental and produce trading",
"Multi-provider authentication",
"Role-based access control",
"Admin dashboard",
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
featured: false,
},

{
slug: "jntuh-results-whatsapp-bot",
title: "JNTUH Results WhatsApp Bot",
summary:
"Automated WhatsApp bot that retrieves academic results, CGPA, and backlog information.",
problem:
"Students need a faster way to access academic results without manually navigating the university portal.",
solution:
"Built an automated bot that accepts a hall ticket number, retrieves information from the university portal, and returns parsed results.",
features: [
"Academic result lookup",
"CGPA and backlog information",
"Automated portal interaction",
"Subject-wise result parsing",
"Response processing",
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
featured: false,
},
];

export const featuredProjects = projects.filter((p) => p.featured);
