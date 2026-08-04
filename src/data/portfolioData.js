// ============================================================
// portfolioData.js — Centralized configuration for Asir Rafique's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Asir Rafique",
  firstName: "Asir",
  brandName: "Asir Rafique",
  title: "Full Stack Developer",
  location: "Patna, India",
  phone: "+91 82105-04882",
  emails: {
    primary: "asirrafique1@gmail.com",
    secondary: "asirrafique@gmail.com",
  },
  summary:
    "Computer Science graduate and aspiring Software Developer with strong skills in Full-Stack Web Development and modern web applications. Experienced in building scalable solutions using React, Node.js, Express.js, MongoDB, and integrating intelligent features to create user-focused products. Passionate about solving real-world problems, writing clean and maintainable code, and continuously learning modern technologies.",
  resumeUrl: "/MY_RESUME.pdf",
};

export const socialLinks = {
  github: "https://github.com/asirrafique",
  linkedin: "https://www.linkedin.com/in/asir-rafique07/",
  instagram: "https://www.instagram.com/iam.asirr/",
};

export const heroContent = {
  greeting: "Hi, I'm Asir Rafique",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "Building modern full-stack web applications and AI-powered solutions with clean code, scalable architecture and great user experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:asirrafique1@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Asir Rafique,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/MY_RESUME.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Asir Rafique</span>, a Computer Science graduate and Full Stack Developer passionate about building modern web applications and intelligent digital experiences. I enjoy creating scalable, user-centric applications with clean, efficient, and maintainable code.`,
  techStack: ["Python", "JavaScript", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I bring ideas to life",
  description:
    "I follow a structured approach to transform ideas into modern, scalable, and user-friendly web applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I begin by understanding the project goals, user needs, and technical requirements to create a clear development roadmap.",
    },
    {
      number: "02",
      title: "Plan & Design",
      text: "I design intuitive user interfaces, organize application architecture, and choose the right technologies for the project.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build responsive frontends, scalable backends, and integrate APIs and AI features using modern development practices.",
    },
    {
      number: "04",
      title: "Test & Deploy",
      text: "I thoroughly test the application, optimize performance, fix bugs, and deploy it for a reliable user experience.",
    },
  ],
  endText: "Turning ideas into reality.",
};

// Technical Skills
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Material UI", level: 85 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "JWT Authentication", level: 88 },
        { name: "Socket.IO", level: 88 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Render", level: 90 }
      ]
    },
    {
      title: "Core CS",
      skills: [
        { name: "Data Structures", level: 82 },
        { name: "Algorithms", level: 80 },
        { name: "DBMS", level: 82 },
        { name: "OOP", level: 85 },
        { name: "Operating Systems", level: 80 },
        { name: "Computer Networks", level: 78 }
      ]
    }
  ]
};

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Enjoy solving real-world problems through logical thinking and efficient software solutions."
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Work effectively with teammates to build projects, share ideas, and achieve common goals."
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Able to communicate technical ideas clearly while collaborating on projects and presentations."
  },
  {
    name: "Adaptability",
    icon: "🚀",
    desc: "Quick to learn new technologies, frameworks, and modern development practices to stay up to date."
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Passionate about improving skills by building projects and exploring modern technologies."
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Enjoy designing clean user interfaces and building engaging digital experiences."
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balance learning, project development, and personal growth while meeting deadlines."
  },
  {
    name: "Attention to Detail",
    icon: "✨",
    desc: "Focus on writing clean, maintainable code and delivering polished user experiences."
  }
];

export const projects = [
  {
    id: "novagpt",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "NovaGPT",
    description:
      "An AI-powered full-stack web application that delivers intelligent conversations with modern AI capabilities. Features secure authentication, responsive UI, real-time chat experience, and a scalable architecture built with modern web technologies.",
    techTags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
    ],
    links: {
      github: "https://github.com/asirrafique/NovaGPT",
      demo: "https://novagpt-frontend-4fht.onrender.com/",
    },
    isFlagship: true,
  },
    {
    id: "meetlify",
    number: "02",
    title: "Meetlify",
    description:
      "A video conferencing platform with secure authentication, meeting rooms, video/audio controls, screen sharing, and real-time communication designed for seamless online collaboration.",
    techTags: [
      "React",
      "Node.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/asirrafique/Meetlify",
      demo: "https://meetlify-frontend.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "wanderlust",
    number: "03",
    title: "Wanderlust",
    description:
      "A full-stack hotel booking platform inspired by Airbnb. Users can create, edit, and manage property listings with secure authentication, interactive maps, cloud image uploads, and RESTful APIs.",
    techTags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Cloudinary",
      "Mapbox",
    ],
    links: {
      github: "https://github.com/asirrafique/Wanderlust",
      demo: "https://wanderlust-ne0q.onrender.com/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Delta – Full Stack Web Development",
      issuer: "Apna College",
      icon: "💻",
    },
    {
      name: "Build & Deploy AI Apps with Google AI Studio",
      issuer: "GUVI x HCL",
      icon: "🤖",
    },
    {
      name: "An Introduction to Interactive Programming in Python (Part 1)",
      issuer: "Rice University (Coursera)",
      icon: "🐍",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte (Forage)",
      icon: "💼",
    },
    {
      name: "AI-ML Virtual Internship",
      issuer: "Google for Developers × EduSkills × AICTE",
      icon: "🧠",
    },
    {
      name: "1st Place – Waste Management Project Competition",
      issuer: "Narula Institute of Technology",
      icon: "🏆",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1mMMsK8T0aISJBiLzlyxranGN_--zBfFu?usp=sharing",
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science & Engineering (AI & ML)",
  institution: "Narula Institute of Technology",
  cgpa: "7.76",
  graduation: "2026",
  twelfth: "Higher Secondary (Science) • 63.6%",
  tenth: "Secondary (CBSE) • 74.8%",
};

export const footerContent = {
  taglines: [
    "Full Stack Developer",
    "React • Node.js • MongoDB",
    "Building Scalable Web Applications",
  ],
  credential: "B.Tech CSE (AI & ML) • CGPA 7.76",
  copyright: `© ${new Date().getFullYear()} Asir Rafique. All Rights Reserved.`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};