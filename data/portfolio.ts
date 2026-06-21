export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "Data & Analytics" | "Web Development" | "UI/UX Design" | "Desktop App" | "Game Development";
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  pdfUrl?: string;
  featured: boolean;
  challenge: string;
  approach: string[];
  outcome: string;
}

export const portfolioData = {
  personal: {
    name: "Bhone Myint San (Bruce)",
    shortName: "Bruce San",
    title: "Junior Data Analyst",
    email: "bhonegood@gmail.com",
    phone: "062-924-8135",
    location: "Bang Na, Thailand",
    availability: "Open to full-time entry-level and junior data analyst opportunities",
    headline: "I turn complex data into clear insights and practical decisions.",
    bio: "Recent Information Technology graduate specializing in Data Science, with hands-on experience in data cleaning, exploratory data analysis, business intelligence, and dashboard reporting. I use Python, SQL, Excel, and BI tools to turn real-world datasets into useful evidence for business and operational decisions, supported by additional experience in web development.",
    avatar: "/profile.jpg",
    resumeUrl: "/pdf/BhoneMyintSan_Resume.pdf",
  },

  socials: {
    github: "https://github.com/BhoneMyintSan",
    linkedin: "https://linkedin.com/in/bhone-myint-san-b96024330",
  },

  skillGroups: [
    {
      title: "Data & Business Intelligence",
      skills: ["Python", "SQL", "Power BI", "Looker Studio", "Advanced Excel", "Google Sheets", "Pandas", "EDA", "Data Visualization"],
    },
    {
      title: "Programming & Web",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Oracle Database", "NeonDB"],
    },
    {
      title: "Design & Workflow",
      skills: ["Figma", "Git", "Draw.io", "Google Colab", "Orange Data Mining"],
    },
  ],

  projects: [
    {
      slug: "mobile-phone-sales-analysis",
      title: "Mobile Phone Sales Performance Analysis",
      summary: "Transformed Amazon mobile-phone listing data into an interactive business intelligence report covering revenue, pricing tiers, sales trends, and brand performance.",
      technologies: ["Power BI", "Looker Studio", "Excel", "Data Analysis", "Business Intelligence"],
      category: "Data & Analytics",
      pdfUrl: "/pdf/Phone_Sales_performance_Analysis.pdf",
      image: "/projects/phone_sales_performance.png",
      featured: true,
      challenge: "Raw marketplace listing data was difficult to interpret and did not provide a clear view of commercial performance across brands and price segments.",
      approach: [
        "Cleaned and transformed the source data into analysis-ready fields.",
        "Defined key performance indicators for revenue, pricing, and brand performance.",
        "Built interactive Power BI and Looker Studio views for comparison and exploration.",
      ],
      outcome: "Delivered a decision-oriented dashboard that makes sales patterns, pricing tiers, revenue distribution, and top-performing brands easier to evaluate.",
    },
    {
      slug: "coffee-shops-analysis",
      title: "Bangkok Coffee Shops Review Analysis",
      summary: "Analyzed more than 5,000 TripAdvisor reviews to explore how ratings, recurring keywords, and customer sentiment relate across Bangkok coffee shops.",
      technologies: ["Python", "Pandas", "Google Colab", "Apify", "Data Visualization"],
      category: "Data & Analytics",
      pdfUrl: "/pdf/Coffee%20shops%20data%20analysis.pdf",
      image: "/projects/coffeeshop_data_analysis.png",
      featured: true,
      challenge: "Thousands of unstructured reviews made it difficult to see the themes associated with customer satisfaction and coffee-shop ratings.",
      approach: [
        "Collected more than 5,000 TripAdvisor reviews with Apify.",
        "Prepared and explored the dataset in Google Colab using Python.",
        "Visualized relationships between ratings, keywords, and customer sentiment.",
      ],
      outcome: "Produced a structured analysis that surfaces recurring customer themes and their relationship with review ratings.",
    },
    {
      slug: "coffee-sales-data-mining",
      title: "Coffee Sales Data Mining Analysis",
      summary: "Applied classification, regression, clustering, and time-series techniques to café sales data to investigate purchasing patterns and revenue drivers.",
      technologies: ["Python", "Orange Data Mining", "Pandas", "Matplotlib", "Time Series"],
      category: "Data & Analytics",
      pdfUrl: "/pdf/Data%20Mining%20Project%20Gp1.pdf",
      image: "/projects/data_mining.png",
      featured: true,
      challenge: "The sales dataset contained patterns that could not be understood through summary totals alone.",
      approach: [
        "Cleaned and prepared café sales records for analysis.",
        "Compared classification, regression, clustering, and time-series approaches.",
        "Visualized customer behavior, sales drivers, and revenue movement.",
      ],
      outcome: "Created an end-to-end data-mining report that compares multiple analytical methods and communicates the resulting business insights.",
    },
    {
      slug: "ontime-moderator",
      title: "OnTime Moderator Dashboard",
      summary: "Built a moderation workspace for managing service listings, reports, support tickets, and user activity across the OnTime platform.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: "Web Development",
      liveUrl: "https://ontime-moderator.vercel.app",
      githubUrl: "https://github.com/BhoneMyintSan/ontime_moderator",
      image: "/projects/Ontime_moderator.png",
      featured: true,
      challenge: "Platform moderators needed one clear interface for reviewing service activity, resolving reports, and handling support workflows.",
      approach: [
        "Designed focused views for listings, reports, tickets, and user activity.",
        "Implemented the interface with Next.js, TypeScript, Prisma, and PostgreSQL.",
        "Added responsive states and real-time workflow feedback for moderation tasks.",
      ],
      outcome: "Delivered a centralized moderation dashboard that consolidates the platform's primary operational workflows.",
    },
    {
      slug: "ontime-frontend",
      title: "OnTime Customer Platform",
      summary: "Developed the customer-facing experience for browsing services, making bookings, and managing requests.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      liveUrl: "https://ontime-sp1.vercel.app/",
      githubUrl: "https://github.com/TrisTheKitten/OnTime_Frontend",
      image: "/projects/Ontime.png",
      featured: false,
      challenge: "Customers needed a straightforward way to discover services and manage the complete booking lifecycle.",
      approach: ["Built responsive service discovery and booking interfaces.", "Created request-management views and reusable UI components.", "Collaborated within the senior-project development team."],
      outcome: "Produced a responsive customer experience covering service browsing, booking, and request management.",
    },
    {
      slug: "feel-abac-online-order",
      title: "Feel ABAC Online Ordering",
      summary: "Analyzed order and vendor data, designed ER models, and created a full-stack campus ordering experience with administrative workflows for orders and menu items.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      liveUrl: "https://feel-abac-online-order.vercel.app",
      githubUrl: "https://github.com/Reon1917/feel-abac-online-order",
      image: "/projects/feel-abac.png",
      featured: false,
      challenge: "The restaurant needed a digital ordering flow and a manageable way to maintain orders and menu content.",
      approach: ["Analyzed order and vendor data to explore ordering patterns and peak hours.", "Designed ER models for the platform's operational data.", "Built customer ordering and administrative workflows with Next.js, TypeScript, and Tailwind CSS."],
      outcome: "Delivered a unified ordering and administration application while supporting operational decisions with structured data analysis.",
    },
    {
      slug: "promptpay-qr-generator",
      title: "PromptPay QR Generator",
      summary: "Built a Next.js tool for generating, parsing, and validating Thai PromptPay QR codes for multiple identifier types.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "promptparse"],
      category: "Web Development",
      githubUrl: "https://github.com/BhoneMyintSan/promptpay_QR",
      featured: false,
      challenge: "PromptPay users needed a clear interface for creating and validating payment payloads across supported identifier formats.",
      approach: ["Implemented QR generation for phone, bank-account, and National ID inputs.", "Added parsing and validation workflows.", "Designed the application for clear error feedback and mobile use."],
      outcome: "Created a complete PromptPay utility that combines generation, parsing, and validation in one interface.",
    },
    {
      slug: "cv-super-resolution",
      title: "Computer Vision Super-Resolution",
      summary: "Explored deep-learning super-resolution techniques for enhancing low-resolution images of Thai traditional outfits.",
      technologies: ["Python", "Jupyter Notebook", "Deep Learning", "OpenCV"],
      category: "Data & Analytics",
      githubUrl: "https://github.com/BhoneMyintSan/CV_Super-resolution",
      featured: false,
      challenge: "Low-resolution source images lose visual details that matter when documenting traditional clothing.",
      approach: ["Prepared an image-processing workflow in Python.", "Applied deep-learning super-resolution techniques.", "Compared enhanced outputs through a reproducible notebook workflow."],
      outcome: "Produced an experimental computer-vision pipeline for improving the visual detail of low-resolution outfit imagery.",
    },
    {
      slug: "digital-menu-system",
      title: "Digital Menu System",
      summary: "Developed a bilingual desktop menu-management application backed by an Oracle database.",
      technologies: ["Python", "Tkinter", "Oracle Database", "cx_Oracle"],
      category: "Desktop App",
      githubUrl: "https://github.com/BhoneMyintSan/Digital_Menu",
      pdfUrl: "/pdf/Digital%20food%20Menu.pdf",
      image: "/projects/digital_menu.png",
      featured: false,
      challenge: "Restaurant staff needed a desktop interface for maintaining and presenting menu information in Thai and English.",
      approach: ["Designed a Tkinter desktop interface.", "Connected menu records to Oracle Database.", "Implemented bilingual menu viewing and management workflows."],
      outcome: "Delivered a database-backed desktop application for maintaining multilingual restaurant menus.",
    },
    {
      slug: "au-digital-wallet",
      title: "AU Digital Wallet",
      summary: "Designed a digital-wallet concept to replace paper coupons and make university canteen payments more convenient.",
      technologies: ["Figma", "UI/UX Design", "System Design"],
      category: "UI/UX Design",
      pdfUrl: "/pdf/AU%20digital%20wallet.pdf",
      image: "/projects/AU%20digital%20wallet.png",
      featured: false,
      challenge: "Paper coupon payments introduced friction and queues in the university canteen experience.",
      approach: ["Mapped the coupon and payment workflow.", "Designed the digital-wallet experience in Figma.", "Documented the supporting system and user flows."],
      outcome: "Proposed a digital replacement for paper coupons designed to reduce payment friction and improve convenience.",
    },
    {
      slug: "penguin-dive",
      title: "Penguin Dive",
      summary: "Created a 2D Java game using object-oriented design, collision detection, and scoring logic.",
      technologies: ["Java", "Object-Oriented Programming", "Game Development"],
      category: "Game Development",
      githubUrl: "https://github.com/BhoneMyintSan/penguin_dive",
      featured: false,
      challenge: "The project required a complete interactive game loop with maintainable object-oriented structure.",
      approach: ["Modeled game entities with object-oriented Java classes.", "Implemented collision detection and scoring.", "Built the core gameplay loop and state transitions."],
      outcome: "Completed a playable 2D game that demonstrates Java fundamentals and object-oriented design.",
    },
  ] satisfies Project[],

  experience: [
    {
      company: "Expo Pass (EVENT THAI)",
      position: "Data Analyst Intern",
      duration: "April 2026–Present",
      description: "Support event reporting and operational decision-making by maintaining reliable datasets, analyzing performance, and communicating findings to senior stakeholders and clients.",
      highlights: [
        "Collect, cleanse, and manage structured data from multiple event channels to maintain data integrity.",
        "Analyze event data and build visual reports around key performance metrics.",
        "Prepare executive reports with actionable insights for senior stakeholders and clients.",
        "Design standardized Advanced Excel reporting templates to improve data workflows.",
      ],
    },
    {
      company: "Team Chronos Nexus",
      position: "Full-Stack Developer — Senior Project",
      duration: "2024–2025",
      description: "Developed OnTime, a community-based time-exchange platform. Contributed to Next.js interfaces, data workflows, Stripe payments, real-time notifications, and the moderator dashboard.",
      highlights: [
        "Contributed to customer-facing and moderator workflows across the platform.",
        "Worked with payment, notification, and database-backed features in a team environment.",
      ],
    },
    {
      company: "AU Myanmar Student Council",
      position: "Event Organizer & Participant Manager",
      duration: "November 2023–January 2024",
      description: "Coordinated event logistics and participant data for university activities with more than 100 attendees.",
      highlights: [
        "Managed participant information and supported cross-team event coordination.",
        "Strengthened communication, teamwork, and organization through hands-on delivery.",
      ],
    },
  ],

  education: [
    {
      institution: "Assumption University of Thailand — Suvarnabhumi Campus",
      degree: "Bachelor of Information Technology",
      major: "Data Science",
      duration: "July 2022–March 2026",
      status: "Recent Graduate",
    },
  ],

  languages: [
    { name: "Myanmar", level: "Native proficiency" },
    { name: "English", level: "Intermediate proficiency" },
  ],

  strengths: [
    "Problem solving",
    "Attention to detail",
    "Team collaboration",
    "Communication",
    "Time management",
    "Adaptability",
    "Critical thinking",
  ],
};
