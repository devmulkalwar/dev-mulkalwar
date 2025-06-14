import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPhp, FaGit, FaGithub, FaFigma, 
  FaBootstrap, FaDatabase, FaServer
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiMui, SiExpress, SiMongodb, 
  SiMysql, SiFirebase, SiNextdotjs, SiRedux, SiVercel, SiNetlify, SiVite, SiPostman, SiC, SiCplusplus
} from 'react-icons/si';

export const personalInfo = {
  fullName: "Dev Mulkalwar",
  email: "devmulkalwar95@gmail.com",
  tagline: "Full Stack Developer | Mastering MERN Stack | Crafting Modern Web Solutions",
  socialLinks: {
    github: "https://github.com/devmulkalwar",
    linkedin: "https://www.linkedin.com/in/dev-mulkalwar-b2745a258/",
    twitter: "https://x.com/dev_mulkalwar",
    instagram: "https://www.instagram.com/dev_mulkalwar/",
    facebook: "https://www.facebook.com/dev.mulkalwar",
    leetcode: "https://leetcode.com/u/devmulkalwar95/"
  },
  bio: `Passionate Web Developer | MERN Stack Enthusiast

I’m a dedicated web developer driven by the mission to create impactful digital solutions. My journey began with a fascination for how technology solves real-world problems, evolving into a passion for building scalable, user-friendly applications.

Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), I enjoy working across both frontend and backend to bring ideas to life. I thrive on learning new technologies, optimizing performance, and designing intuitive experiences.

Beyond coding, I explore new tools, contribute to open-source projects, and continuously seek growth. Let’s collaborate to build something meaningful! `,
  education: [
    {
      degree: "BCA",
      level: "UG",
      institution: "RTMNU",
      year: "2024"
    },
    {
      degree: "MCA",
      level: "PG [PURSUING]",
      institution: "GHRCEMN",
      year: ""
    }
  ]
};

export const skills = {
  programmingLanguages: [
    { name: "C", icon: SiC , level: "Intermediate", color: "cyan" },
    { name: "C++", icon: SiCplusplus , level: "Intermediate", color: "cyan" },
    { name: "Java", icon: FaJava , level: "Intermediate", color: "cyan" },
    { name: "JavaScript", icon:SiJavascript , level: "Advanced", color: "cyan" },
    { name: "PHP", icon: FaPhp, level: "Intermediate", color: "cyan" },
    { name: "TypeScript", icon: SiTypescript , level: "Intermediate", color: "cyan" }
  ],
  frontend: [
    { name: "HTML", icon: FaHtml5 , level: "Advanced", color: "purple" },
    { name: "CSS", icon: FaCss3Alt , level: "Advanced", color: "purple" },
    { name: "React", icon: FaReact , level: "Advanced", color: "purple" },
    { name: "Next.js", icon: SiNextdotjs , level: "Intermediate", color: "purple" },
    { name: "Material UI", icon: SiMui , level: "Intermediate", color: "purple" },
    { name: "Tailwind CSS", icon: SiTailwindcss , level: "Advanced", color: "purple" },
    { name: "Bootstrap", icon: FaBootstrap, level: "Advanced", color: "purple" },
    { name: "Redux", icon: SiRedux , level: "Intermediate", color: "purple" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs , level: "Intermediate", color: "mixed" },
    { name: "Express", icon: SiExpress , level: "Intermediate", color: "mixed" }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb , level: "Intermediate", color: "cyan" },
    { name: "Firebase", icon: SiFirebase, level: "Intermediate", color: "cyan" },
    { name: "MySQL", icon: SiMysql , level: "Intermediate", color: "cyan" }
  ],
  tools: [
    { name: "Git", icon: FaGit, level: "Intermediate", color: "purple" },
    { name: "GitHub", icon: FaGithub , level: "Intermediate", color: "purple" },
    { name: "Figma", icon: FaFigma , level: "Intermediate", color: "purple" },
    { name: "Postman", icon: SiPostman , level: "Intermediate", color: "purple" },
    { name: "Vercel", icon: SiVercel , level: "Intermediate", color: "purple" },
    { name: "Netlify", icon: SiNetlify , level: "Intermediate", color: "purple" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills, built using React.js, DaisyUI, and TailwindCSS.",
    image: null, // Will add later
    techStack: ["React", "TailwindCSS", "DaisyUI", "JavaScript"],
    liveLink: "https://dev-mulkalwar-portfolio.netlify.app/",
    github: "https://github.com/devmulkalwar/portfolio"
  },
  {
    id: 2,
    title: "Sticky Notes",
    description: "A web app for organizing thoughts, ideas, and reminders in a simple and intuitive way.",
    image: null, // Will add later
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://devmulkalwar.github.io/stickynotes/",
    github: "https://github.com/devmulkalwar/stickynotes"
  },
  {
    id: 3,
    title: "Matrix Solver",
    description: "A web application for performing various operations on matrices.",
    image: null, // Will add later
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://devmulkalwar.github.io/matrixcalculator/",
    github: "https://github.com/devmulkalwar/matrixcalculator"
  },
  {
    id: 4,
    title: "Rock Paper Scissors",
    description: "A classic game brought to life with HTML, CSS, and JavaScript.",
    image: null, // Will add later
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://devmulkalwar.github.io/rock-paper-scissors/",
    github: "https://github.com/devmulkalwar/rock-paper-scissors"
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description: "A Tic Tac Toe game with Vs Human and Vs Bot modes.",
    image: null, // Will add later
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://devmulkalwar.github.io/tic-tac-toe/",
    github: "https://github.com/devmulkalwar/tic-tac-toe"
  },
  {
    id: 6,
    title: "Speak Genie",
    description: "A platform to convert audio input into text and transform text back into audio.",
    image: null, // Will add later
    techStack: ["React", "Tailwind", "DaisyUI", "JavaScript"],
    liveLink: "https://speak-genie.netlify.app/",
    github: "https://github.com/devmulkalwar/Speak-Genie"
  },
  {
    id: 7,
    title: "Todo App",
    description: "A basic ToDo app to keep track of tasks using HTML, CSS, and JavaScript.",
    image: null, // Will add later
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    liveLink: "https://devmulkalwar.github.io/to-do-list/",
    github: "https://github.com/devmulkalwar/to-do-list"
  }
];

export const certifications = [
  {
    id: 1,
    title: "UpSurge 2k23 Smackathon Certificate",
    image: "smackathonImg", // Will replace with actual image path
    issuer: "",
    date: ""
  },
  {
    id: 2,
    title: "The Complete 2024 Web Development Bootcamp",
    image: "udemyImg", // Will replace with actual image path
    issuer: "Udemy",
    date: ""
  }
]; 