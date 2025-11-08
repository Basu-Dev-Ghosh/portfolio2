import { Project, Skill, Experience, Service } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "course-juggad",
    title: "Course Juggad",
    description:
      "AI-powered web application for creating and publishing courses globally with intelligent course generation.",
    longDescription: `
      Built an innovative platform that democratizes course creation using AI technology.
      Students and educators can leverage AI to create comprehensive courses and publish them globally.

      Key features:
      - AI-powered course content generation using OpenAI and LangChain
      - User-friendly interface for course creation and management
      - Global course publishing platform
      - Student enrollment and progress tracking
      - Interactive learning modules

      The platform makes quality education accessible by automating the course creation process
      while maintaining educational standards and engagement.
    `,
    image: "/coursejuggad.png",
    tags: ["Featured", "AI/ML"],
    technologies: [
      "Next.js",
      "Python",
      "LangChain",
      "OpenAI API",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/Course-juggad",
    live: "https://course-juggad.site/",
    featured: true,
    year: "2024",
  },
  {
    id: "exam-juggad",
    title: "Exam Juggad",
    description:
      "AI-powered exam preparation tool that analyzes question papers and generates comprehensive answers and common questions.",
    longDescription: `
      Developed an intelligent exam preparation assistant that processes PDF question papers
      and generates AI-powered answers and frequently asked questions.

      Technical highlights:
      - PDF processing and text extraction
      - OpenAI integration for intelligent question analysis
      - LangChain-based answer generation
      - Pattern recognition for common question identification
      - User-friendly web interface

      Helps students prepare more effectively by identifying key questions and providing
      detailed, accurate answers based on the question paper content.
    `,
    image: "/examjuggad.png",
    tags: ["Featured", "AI/ML"],
    technologies: [
      "Next.js",
      "Python",
      "LangChain",
      "OpenAI API",
      "TypeScript",
      "PDF Processing",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/exam-juggad",
    live: "https://examjuggad.site/",
    featured: true,
    year: "2024",
  },
  {
    id: "kishankunj-mobile",
    title: "KishanKunj - Mobile App",
    description:
      "Expense tracking mobile app for college students to manage and split daily expenses among roommates with attendance-based calculations.",
    longDescription: `
      Created a practical solution for college students living together to manage shared expenses
      transparently and efficiently.

      Features:
      - Real-time expense tracking with attendance integration
      - Automatic expense splitting based on who's present
      - PDF invoice generation for records
      - Roommate management and notifications
      - Expense history and analytics
      - User-friendly mobile interface

      Solves the common problem of managing shared living expenses in hostels and shared accommodations,
      ensuring fairness and transparency in expense distribution.
    `,
    image: "/kishankunj.png",
    tags: ["Mobile", "Featured"],
    technologies: [
      "React Native",
      "Supabase",
      "TypeScript",
      "PDF Invoice Generation",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/kishan-kunj-mobile-app",
    live: "https://drive.google.com/file/d/1eHskr976p1M99gYZadi24xjMneNtIKO8/view?usp=sharing",
    featured: true,
    year: "2024",
  },
  {
    id: "trackzon",
    title: "Trackzon",
    description:
      "Free Amazon product price tracking web application using web scraping with automated email notifications.",
    longDescription: `
      Built a product tracking solution that helps users save money by monitoring Amazon prices
      and sending alerts when products drop to desired price points.

      Implementation:
      - Web scraping infrastructure for Amazon product data
      - Real-time price monitoring and tracking
      - Email notification system with Nodemailer
      - MongoDB database for product and user data
      - User dashboard for managing tracked products

      Empowers shoppers to make informed purchase decisions and never miss a good deal.
    `,
    image: "/trackzon.png",
    tags: ["Web Scraping"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Web Scraping",
      "MongoDB",
      "Nodemailer",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/trackzon",
    live: "https://trackzon-flax.vercel.app/",
    featured: false,
    year: "2023",
  },
  {
    id: "trello-clone",
    title: "Trello Clone",
    description:
      "Task management application with drag-and-drop functionality and cloud storage using Appwrite.",
    longDescription: `
      Developed a fully functional Trello-inspired task management application with modern
      features and smooth user experience.

      Features:
      - Drag and drop task management
      - Board and list organization
      - Appwrite cloud integration
      - Real-time updates
      - Responsive design

      Demonstrates proficiency in complex state management and interactive UI development.
    `,
    image: "/trello-clone.png",
    tags: ["Productivity"],
    technologies: [
      "Next.js",
      "TypeScript",
      "React DnD",
      "Appwrite",
      "Tailwind CSS",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/todo-app-drag-n-drop",
    live: "https://todo-app-drag-n-drop.vercel.app/",
    featured: false,
    year: "2023",
  },
  {
    id: "educonnect",
    title: "EduConnect",
    description:
      "Student collaboration platform connecting learners worldwide to share projects and collaborate on educational initiatives.",
    longDescription: `
      Created a social learning platform that brings students together to showcase projects,
      collaborate, and learn from each other's work.

      Platform features:
      - Project showcase and discovery
      - Student networking and collaboration
      - Google Cloud API integration
      - Project search and filtering
      - User profiles and portfolios

      Fosters a community of learners and creators, making education more collaborative and engaging.
    `,
    image: "/educonnect.png",
    tags: ["Education"],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Cloud API",
      "JavaScript",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/EduConnect",
    live: "https://edu-connect-jade.vercel.app/",
    featured: false,
    year: "2023",
  },
  {
    id: "resend-clone",
    title: "Resend Clone",
    description:
      "Frontend clone of Resend's homepage showcasing advanced animations and modern web design techniques.",
    longDescription: `
      Recreated the Resend homepage to demonstrate advanced frontend development skills
      and attention to detail in implementing complex animations.

      Technical implementation:
      - Smooth animations with Framer Motion
      - Responsive design with Tailwind CSS
      - Performance optimization
      - Pixel-perfect UI recreation

      Showcases ability to implement sophisticated UI/UX designs with modern web technologies.
    `,
    image: "/resend-clone.png",
    tags: ["Frontend"],
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/Resend-clone",
    live: "https://resend-clone.vercel.app/",
    featured: false,
    year: "2023",
  },
  {
    id: "littleshows",
    title: "Littleshows",
    description:
      "Platform for aspiring filmmakers to upload and showcase short films with real-time features and location-based discovery.",
    longDescription: `
      Built a community platform for short film creators to share their work and build their
      audience, featuring real-time interactions and location-based content discovery.

      Features:
      - Video upload and streaming
      - Google Location API integration
      - Real-time notifications with WebSocket
      - Supabase backend
      - Content discovery and recommendations

      Provides emerging filmmakers with a platform to launch their cinema careers.
    `,
    image: "/littleshows.png",
    tags: ["Media"],
    technologies: [
      "Next.js",
      "Supabase",
      "WebSocket",
      "Google Location API",
      "TypeScript",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/littleshows-web",
    live: "http://littleshows-web.vercel.app/",
    featured: false,
    year: "2023",
  },
  {
    id: "paymaster",
    title: "Paymaster",
    description:
      "Employee review platform for rating companies based on payment timeliness with PDF invoice generation capabilities.",
    longDescription: `
      Developed a transparency platform where employees can rate companies on payment practices
      and generate professional invoices.

      Platform capabilities:
      - Company rating and review system
      - PDF invoice generation
      - User authentication and profiles
      - Company search and filtering
      - Rating analytics and insights

      Promotes transparency in employer-employee relationships and helps professionals make
      informed career decisions.
    `,
    image: "/paymaster.png",
    tags: ["Enterprise"],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML2PDF",
      "JavaScript",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/Paymaster",
    live: "https://www.paymaster.co.in/",
    featured: false,
    year: "2022",
  },
  {
    id: "googla",
    title: "Googla",
    description:
      "Google search clone implementing Google's search API with a clean, familiar interface.",
    longDescription: `
      Recreated Google's search experience to understand search engine interfaces and API integration.

      Implementation:
      - Google Search API integration
      - Search results pagination
      - Responsive design
      - Fast, clean UI

      Demonstrates ability to work with external APIs and recreate familiar user experiences.
    `,
    image: "/googla.png",
    tags: ["Clone"],
    technologies: [
      "React",
      "Google APIs",
      "JavaScript",
    ],
    github: "https://github.com/Basu-Dev-Ghosh/Google_clone",
    live: "https://clone-5fd12.web.app/",
    featured: false,
    year: "2022",
  },
];

export const SKILLS: Skill[] = [
  {
    category: "AI & Chatbot Development",
    items: [
      "RAG Engine Development",
      "AI Chatbots (Multi-channel)",
      "OpenAI API (GPT-4, GPT-3.5)",
      "LangChain Framework",
      "Vector Databases (Milvus, ChromaDB, Pinecone)",
      "Embeddings & Semantic Search",
      "Prompt Engineering",
      "Natural Language Processing",
      "Conversational AI",
    ],
  },
  {
    category: "Python & Backend",
    items: [
      "Python (Expert Level)",
      "FastAPI",
      "Django",
      "Flask",
      "RESTful APIs",
      "WebSocket",
      "Async/Await",
      "Microservices Architecture",
      "API Design & Documentation",
    ],
  },
  {
    category: "Data Engineering & ETL",
    items: [
      "ETL/ELT Pipeline Development",
      "Prefect Workflows",
      "dbt Transformations",
      "Data Orchestration",
      "Data Warehousing",
      "Pandas/NumPy",
      "Apache Airflow",
      "Data Quality Validation",
      "Real-time Data Processing",
    ],
  },
  {
    category: "Amazon & E-commerce APIs",
    items: [
      "Amazon SP-API (Seller Partner)",
      "Amazon Advertising API",
      "Order Management",
      "Inventory Sync",
      "Product Catalog Management",
      "Analytics & Reporting",
      "Rate Limiting & Optimization",
    ],
  },
  {
    category: "Marketing Automation",
    items: [
      "Email Marketing Automation",
      "Campaign Management",
      "SMTP Integration",
      "Email Templates & Design",
      "A/B Testing",
      "Analytics & Tracking",
      "Marketing Workflow Automation",
    ],
  },
  {
    category: "Frontend Development",
    items: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "SQL Optimization",
      "Database Design",
      "Query Performance Tuning",
      "Data Modeling",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Azure Cloud",
      "CI/CD (GitHub Actions)",
      "Linux/Unix",
      "Web Scraping",
      "API Integration",
      "Performance Optimization",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Hilal Software Corp",
    position: "Software Developer",
    duration: "2023 - Present",
    location: "Remote, India",
    description: [
      "Led development of Amazon seller analytics platform processing 5M+ data points daily, reducing report generation time from hours to seconds",
      "Architected and implemented enterprise RBAC system with JWT authentication, Redis caching, and multi-tenant support, handling 10K+ auth requests/minute",
      "Built AI-powered chatbot system using RAG architecture with OpenAI integration, supporting multi-channel communication (WhatsApp, Facebook, Email)",
      "Migrated legacy data pipelines to Prefect orchestration, improving reliability from 85% to 99.9% uptime and reducing manual intervention by 90%",
      "Optimized database performance through query optimization and async patterns, reducing connection pool errors by 100% and improving response times by 60%",
      "Managed Kubernetes deployments on Azure AKS, implementing resource management strategies that eliminated pod evictions and improved stability",
      "Established code quality standards and review processes, mentoring junior developers on best practices and clean architecture principles",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "Azure",
      "Docker",
      "Prefect",
      "dbt",
    ],
  },
  {
    company: "The Madras Branding Company",
    position: "Full Stack Developer Intern",
    duration: "Nov 2022 - Dec 2023",
    location: "Remote, India",
    description: [
      "Designed and built modern web applications using React, Next.js, and TypeScript, focusing on creating responsive and intuitive user interfaces with 40% increase in user engagement",
      "Successfully integrated chat systems into multiple web applications using Supabase and Socket.io, enhancing user engagement and real-time communication capabilities",
      "Engineered secure authentication systems using JWT and bcrypt.js, prioritizing user data protection and privacy across 100% of projects",
      "Delivered 6+ full-stack projects using a tech stack including TypeScript, Next.js, Supabase, Node.js, Express.js, and MongoDB, showcasing versatility in end-to-end application development",
      "Collaborated with cross-functional teams to deliver client projects on time, maintaining high code quality standards and following best practices",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "Socket.io",
      "JWT",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end application development with modern tech stack, from database design to polished user interfaces.",
    icon: "code",
    features: [
      "FastAPI backend with async/await patterns",
      "Next.js/React frontend with TypeScript",
      "PostgreSQL database design & optimization",
      "RESTful API design & documentation",
      "Authentication & authorization (JWT/OAuth2)",
      "Real-time features with WebSocket",
    ],
  },
  {
    title: "Cloud Architecture & DevOps",
    description:
      "Scalable cloud infrastructure setup and management with modern DevOps practices.",
    icon: "cloud",
    features: [
      "Azure cloud infrastructure setup",
      "Kubernetes cluster management",
      "Docker containerization",
      "CI/CD pipeline implementation",
      "Monitoring & logging setup",
      "Performance optimization",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines and processing systems that turn raw data into actionable insights.",
    icon: "database",
    features: [
      "ETL/ELT pipeline development",
      "Workflow orchestration with Prefect",
      "Data transformation with dbt",
      "Real-time data processing",
      "Analytics & reporting systems",
      "Data quality validation",
    ],
  },
  {
    title: "API Integration & Automation",
    description:
      "Seamless third-party integrations and workflow automation to streamline business processes.",
    icon: "layers",
    features: [
      "Amazon SP-API & Ads API integration",
      "Payment gateway integration",
      "OAuth2 provider implementation",
      "Webhook handling & processing",
      "Event-driven architectures",
      "Business process automation",
    ],
  },
];
