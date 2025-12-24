export const siteConfig = {
  name: "Rushabh Rathod",
  title: "RUSHABH",
  tagline: "Full Stack Developer & Problem Solver",
  description:
    "Building scalable full-stack applications with the MERN stack, covering backend architecture, APIs, and modern React-based user interfaces.",
  availability: "Available for Work",
  location: "Kadi, Gujarat, India",
  locationNote: "Available for remote work",
  responseTime: "Usually within 24 hours",
  copyright: "© 2025 All Rights Reserved",
  builtWith: "Designed & Built with Next.js",
  resumePath: "/resume.pdf",

  social: {
    github: "https://github.com/rushabhrathod7",
    linkedin: "https://www.linkedin.com/in/rushabhrathod-dev/",
    twitter: "https://x.com/Rhushabh_Rathod",
    email: "mailto:rushabhrathod.dev@gmail.com",
  },

  workExperience: [
    {
      period: "May 2024 — Nov 2025",
      company: "Mannix Infotech Solutions Pvt. Ltd.",
      role: "MERN Stack Developer",
      // description:
      //   "Developed and maintained full-stack MERN applications with React, Node.js, Express, and MongoDB. ",
      technologies: [
        "React js",
        "Node js",
        "Express js",
        "Mongodb",
        "Docker",
        "TypeScript",
        "Next js",
      ],
    },
    {
      period: "Jan 2024 — Apr 2024",
      company: "Maxgen Technologies",
      role: "React Developer Intern",
      // description:
      //   "Developed e-commerce platform serving 100K+ users. Implemented CI/CD pipelines and migrated legacy systems to modern React architecture with 40% performance improvement.",
      technologies: ["React", "Redux"],
    },
  ],

  projects: [
    {
      title: "BlogSpace - Blogging Platform",
      category: "Full Stack",
      description:
        "Full-stack blogging platform with authentication, content publishing, image uploads, and interactive features.",
      fullDescription:
        "A full-stack blogging platform built with modern web technologies, featuring secure authentication, blog creation and publishing, image uploads, commenting, and blog liking functionality. Designed with a minimalistic and fully responsive UI to deliver a clean, distraction-free reading experience across all devices.",
      stack: [
        "Node.js",
        "React Js",
        "Cloudinary",
        "MongoDB",
        "Express.js",
        "Zustand",
        "Firebase Auth",
      ],
      year: "2024",
      span: "col-span-2 row-span-2",
      liveLink: "https://blogspace-by-rhushabh.vercel.app/",
      githubLink: "https://github.com/rushabhrathod7/BlogSpace",
    },
    {
      title: "Realtime Chat Application",
      category: "Full Stack",
      description:
        "Privacy-focused real-time chat application with self-destructing messages and low-latency communication.",
      fullDescription:
        "A privacy-focused, real-time chat application built with modern web technologies, enabling instant messaging with self-destructing conversations for enhanced user privacy. Designed for low-latency communication using a scalable real-time architecture powered by Redis and Upstash Realtime, ensuring fast and reliable message delivery.",
      stack: ["TypeScript", "Redis", "Next.js", "Elysia.js"],
      year: "2025",
      span: "col-span-1 row-span-1",
      liveLink: "realtime-chat-xi-opal.vercel.app",
      githubLink: "https://github.com/rushabhrathod7/realtime_chat",
    },
    {
      title: "Movie Information Web App",
      category: "Frontend",
      description:
        "React-based movie app using Redux and TMDB API with seamless infinite scrolling.",
      fullDescription:
        "A movie information web application that delivers rich and up-to-date movie details using the TMDB API. Features seamless infinite scrolling in search results, allowing users to continuously browse and discover movies without page reloads. Built with a responsive and intuitive UI to ensure a smooth browsing experience.",
      stack: ["React", "Redux", "TMDB Api"],
      year: "2024",
      span: "col-span-1 row-span-2",
      liveLink: "https://analytics-dashboard.vercel.app",
      githubLink: "https://github.com/yourusername/analytics-dashboard",
    },
    // {
    //   title: "Task Management API",
    //   category: "Backend",
    //   description:
    //     "RESTful API with authentication, rate limiting, and comprehensive documentation.",
    //   fullDescription:
    //     "A robust RESTful API for task management with JWT authentication, role-based access control, and rate limiting. Built with Node.js and Express, featuring MongoDB for data persistence, comprehensive API documentation with Swagger, automated testing with Jest, and Docker containerization for easy deployment.",
    //   stack: ["Node.js", "Express", "MongoDB"],
    //   year: "2023",
    //   span: "col-span-1 row-span-1",
    //   liveLink: "https://task-api-docs.vercel.app",
    //   githubLink: "https://github.com/yourusername/task-management-api",
    // },
    // {
    //   title: "Design System",
    //   category: "UI/UX",
    //   description:
    //     "Component library with theming, accessibility, and Storybook documentation.",
    //   fullDescription:
    //     "A comprehensive design system and component library built with React and Tailwind CSS. Includes 50+ accessible components following WCAG guidelines, built on Radix UI primitives, full Storybook documentation with interactive examples, dark mode support, and customizable theming system. Published as an npm package for easy integration.",
    //   stack: ["React", "Tailwind", "Radix UI"],
    //   year: "2024",
    //   span: "col-span-2 row-span-1",
    //   liveLink: "https://design-system-demo.vercel.app",
    //   githubLink: "https://github.com/yourusername/design-system",
    // },
  ],

  techStack: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"],
    },
    {
      category: "Tools",
      items: ["Git", "WebStorm", "Figma", "Postman"],
      // items: ["Git", "VS Code", "Figma", "Postman", "Linear"],
    },
  ],

  education: [
    {
      degree: "Master of Computer Application",
      school: "Indus University",
      period: "2022 — 2024",
      // focus: "Software Engineering & Distributed Systems",
      achievements: [
        // "Thesis: Scalable Microservices Architecture",
        // "GPA: 3.9/4.0",
        // "Teaching Assistant for Advanced Algorithms",
      ],
    },
    {
      degree: "Bachelor of Commerce",
      school: "KSV University",
      period: "2019 — 2022",
      // focus: "Software Development & Database Systems",
      achievements: [
        // "Graduated Summa",
        // "Dean's List all semesters",
        // "Capstone: Mobile Health Tracking App",
      ],
    },
  ],

  certifications: [
    "Node JS Certification, Scaler",
    "Python Certification, HackerRank",
    "Responsive Web Design Certification, FreeCodeCamp, 2023",
    // "AWS Certified Solutions Architect",
    // "Google Cloud Professional Developer",
    // "MongoDB Certified Developer",
    // "Kubernetes Application Developer",
  ],
};
