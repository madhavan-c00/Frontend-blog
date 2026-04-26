export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "Frontend" | "Backend" | "Mobile" | "DevOps" | "Database" | "Stack";
  comingSoon?: boolean;
  stats: {
    blogs: number;
    questions: number;
    challenges: number;
  };
}

export const technologies: Technology[] = [
  // Languages
  {
    id: "javascript",
    name: "JavaScript",
    description: "The programming language of the Web. Learn everything from basic syntax to advanced ES6+ features.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
    stats: { blogs: 15, questions: 60, challenges: 25 }
  },
  // Frontend
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces with components.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    stats: { blogs: 12, questions: 45, challenges: 15 }
  },
  {
    id: "angular",
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frontend",
    stats: { blogs: 8, questions: 32, challenges: 10 }
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React framework for the web, enabling SSR and static generation.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    stats: { blogs: 8, questions: 30, challenges: 10 }
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Strongly typed programming language that builds on JavaScript.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
    stats: { blogs: 9, questions: 35, challenges: 8 }
  },
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    description: "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
    stats: { blogs: 10, questions: 40, challenges: 12 }
  },
  {
    id: "expressjs",
    name: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
    stats: { blogs: 7, questions: 28, challenges: 9 }
  },
  {
    id: "python",
    name: "Python",
    description: "Versatile programming language known for readability and AI/ML support.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
    stats: { blogs: 15, questions: 60, challenges: 20 }
  },
  {
    id: "django",
    name: "Django",
    description: "High-level Python web framework that encourages rapid development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    category: "Backend",
    stats: { blogs: 6, questions: 24, challenges: 7 }
  },
  {
    id: "springboot",
    name: "Spring Boot",
    description: "Java-based framework for creating stand-alone, production-grade applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "Backend",
    stats: { blogs: 5, questions: 22, challenges: 6 }
  },
  {
    id: "java",
    name: "Java",
    description: "Object-oriented, platform-independent programming language used in enterprise systems.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Backend",
    stats: { blogs: 10, questions: 50, challenges: 14 }
  },
  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    description: "NoSQL document database that stores data in flexible, JSON-like documents.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    stats: { blogs: 6, questions: 22, challenges: 5 }
  },
  {
    id: "sql",
    name: "SQL",
    description: "Structured Query Language for managing and manipulating relational databases.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
    stats: { blogs: 10, questions: 45, challenges: 12 }
  },
  {
    id: "firebase",
    name: "Firebase",
    description: "Google's platform for building mobile and web applications with real-time database.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Database",
    stats: { blogs: 5, questions: 18, challenges: 4 }
  },
  // DevOps
  {
    id: "docker",
    name: "Docker",
    description: "Containerization platform for developing, shipping, and running apps.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
    stats: { blogs: 6, questions: 25, challenges: 5 }
  },
  // Stacks
  {
    id: "mernstack",
    name: "MERN Stack",
    description: "Full-stack JavaScript: MongoDB, Express.js, React, and Node.js.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    category: "Stack",
    stats: { blogs: 8, questions: 30, challenges: 10 }
  },
  {
    id: "mean",
    name: "MEAN Stack",
    description: "Full-stack JavaScript: MongoDB, Express.js, Angular, and Node.js.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    category: "Stack",
    stats: { blogs: 4, questions: 15, challenges: 4 }
  },
  {
    id: "mevn",
    name: "MEVN Stack",
    description: "Full-stack JavaScript: MongoDB, Express.js, Vue.js, and Node.js.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: "Stack",
    stats: { blogs: 3, questions: 12, challenges: 3 }
  },
];

export interface InterviewQuestion {
  id: string;
  techId: string;
  question: string;
  answer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "r1",
    techId: "react",
    question: "What is React?",
    answer: "React is a JavaScript library used to build fast, interactive, and scalable user interfaces. It is mainly used for developing single-page applications where updating parts of the UI efficiently is critical.",
    level: "Beginner"
  },
  {
    id: "r2",
    techId: "react",
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) allows writing HTML-like syntax inside JavaScript, making it easier to define UI components.",
    level: "Beginner"
  },
  {
    id: "r3",
    techId: "react",
    question: "Difference between state and props?",
    answer: "Props are used to pass data from parent to child components (external), while State is used to store dynamic data within a component (internal).",
    level: "Beginner"
  },
  {
    id: "r4",
    techId: "react",
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the real DOM. React uses it to compare changes (diffing) and update only the necessary elements (reconciliation), which improves performance.",
    level: "Beginner"
  },
  {
    id: "r5",
    techId: "react",
    question: "What are hooks?",
    answer: "Hooks are functions that allow functional components to use state and other React features (like lifecycle methods). Common hooks include useState and useEffect.",
    level: "Beginner"
  },
  {
    id: "r6",
    techId: "react",
    question: "What is useEffect?",
    answer: "useEffect is a hook used for performing side effects in functional components, such as fetching data from an API, setting up subscriptions, or manually changing the DOM.",
    level: "Intermediate"
  },
  {
    id: "r7",
    techId: "react",
    question: "What is 'key' in React?",
    answer: "Keys help React identify which items have changed, been added, or removed in a list. They should be unique among siblings to ensure efficient rendering.",
    level: "Beginner"
  },
  {
    id: "r8",
    techId: "react",
    question: "Controlled vs uncontrolled components?",
    answer: "Controlled components have their state managed by React (via useState), while uncontrolled components maintain their own state (often using Refs).",
    level: "Intermediate"
  },
  {
    id: "r9",
    techId: "react",
    question: "What is reconciliation?",
    answer: "Reconciliation is the process React uses to update the UI. It compares the new Virtual DOM with the previous one and applies only the minimum necessary changes to the real DOM.",
    level: "Advanced"
  },
  {
    id: "r10",
    techId: "react",
    question: "What is Context API?",
    answer: "Context API is a way to manage global state in a React application without passing props through every level of the component tree (prop drilling).",
    level: "Intermediate"
  },
  {
    id: "n1",
    techId: "nodejs",
    question: "Explain the event loop in Node.js.",
    answer: "The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It offloads operations to the system kernel whenever possible.",
    level: "Advanced"
  },
  {
    id: "py1",
    techId: "python",
    question: "Difference between list and tuple in Python?",
    answer: "Lists are mutable, meaning they can be modified after creation. Tuples are immutable, meaning they cannot be changed. Tuples are generally faster and used for fixed data.",
    level: "Beginner"
  },
  {
    id: "py2",
    techId: "python",
    question: "What is a decorator in Python?",
    answer: "A decorator is a design pattern that allows you to modify the behavior of a function or class. It wraps another function to extend its behavior without explicitly modifying it.",
    level: "Intermediate"
  },
  {
    id: "n2",
    techId: "nodejs",
    question: "What is 'callback hell'?",
    answer: "Callback hell refers to heavily nested callbacks that make code difficult to read and maintain. It can be solved using Promises or Async/Await.",
    level: "Intermediate"
  }
];

// Learning Path steps for the home page
export interface PathStep {
  step: number;
  title: string;
  description: string;
  techs: string[];
  duration: string;
}

export const learningPath: PathStep[] = [
  {
    step: 1,
    title: "Programming Fundamentals",
    description: "Build a solid base with the language of the web. Learn variables, functions, loops, and problem-solving.",
    techs: ["JavaScript", "Python"],
    duration: "4–6 weeks"
  },
  {
    step: 2,
    title: "Frontend Development",
    description: "Create beautiful, responsive UIs. Learn how to build components and manage state in modern frameworks.",
    techs: ["HTML/CSS", "React", "TypeScript"],
    duration: "6–8 weeks"
  },
  {
    step: 3,
    title: "Backend & APIs",
    description: "Handle server logic, databases, and REST APIs. Power your applications with a robust backend layer.",
    techs: ["Node.js", "Express.js", "MongoDB"],
    duration: "6–8 weeks"
  },
  {
    step: 4,
    title: "Full-Stack Projects",
    description: "Combine frontend and backend skills. Build and deploy real-world apps to build your portfolio.",
    techs: ["MERN Stack", "Next.js", "Docker"],
    duration: "8–10 weeks"
  },
  {
    step: 5,
    title: "Interview Preparation",
    description: "Practise DSA, system design, and behavioural questions. Get job-ready and confident for top companies.",
    techs: ["DSA", "System Design", "Mock Interviews"],
    duration: "4–6 weeks"
  }
];
