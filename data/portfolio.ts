import { projects } from "@/data/projects";
import type { PortfolioData } from "@/types/portfolio";

export const portfolioData = {
  personal: {
    name: "Bhone Myint San (Bruce)",
    shortName: "Bruce San",
    title: "Data Analyst | BI & Operations Analytics",
    email: "bhonegood@gmail.com",
    phone: "062-924-8135",
    location: "Bang Na, Thailand",
    availability: "Open to full-time entry-level and junior data analyst opportunities",
    headline: "I turn complex data into clear insights and practical decisions.",
    bio: "Information Technology graduate specializing in Data Science, with experience in event analytics, business reporting, and healthcare data operations. I prepare and validate structured data, build executive dashboards, and turn findings into practical decisions using Advanced Excel, SQL, Python, Power BI, and Looker Studio.",
    avatar: "/profile.png",
    resumeUrl: "/pdf/BhoneMyintSan_DataAnalyst_Resume.pdf",
  },

  socials: {
    github: "https://github.com/BhoneMyintSan",
    linkedin: "https://linkedin.com/in/bhone-myint-san-b96024330",
  },

  metrics: {
    reviewsAnalyzed: "5,000+",
    eventParticipantsSupported: "100+",
  },

  skillGroups: [
    {
      id: "analysis",
      title: "Data Analysis",
      skills: ["Data Cleaning", "Data Validation", "EDA", "KPI Analysis", "Trend Analysis", "Reconciliation", "Business Reporting"],
    },
    {
      id: "visualization",
      title: "BI & Visualization",
      skills: ["Power BI", "Looker Studio", "Dashboard Development", "Data Visualization", "Data Storytelling"],
    },
    {
      id: "data",
      title: "Programming & Data",
      skills: ["Python", "SQL", "Pandas", "PostgreSQL", "Oracle Database", "NeonDB", "Google Colab", "Orange Data Mining"],
    },
    {
      id: "workflow",
      title: "Spreadsheets & Workflow",
      skills: ["Advanced Excel", "Google Sheets", "Pivot Tables", "Formulas", "Reporting Templates", "Git", "GitHub", "Draw.io"],
    },
    {
      id: "ai",
      title: "AI-Assisted Work",
      skills: ["ChatGPT", "Claude", "Gemini", "Analysis Support", "Code Debugging", "Research", "Documentation", "Output Validation"],
    },
    {
      id: "web",
      title: "Web & Design",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS", "Figma"],
    },
  ],

  projects,

  experience: [
    {
      company: "Veeva Systems",
      position: "Freelance Data Operations Specialist",
      duration: "August 2026–Present",
      isCurrent: true,
      description: "Research, verify, and maintain structured healthcare-related data in a remote freelance role, supporting accurate, complete, and consistent records.",
      highlights: [
        "Validate information against reliable online sources and resolve data inconsistencies.",
        "Follow data standards and operating guidelines across assigned records.",
        "Support data quality control through careful review and documentation.",
      ],
    },
    {
      company: "Expo Pass (EVENT THAI)",
      position: "Data Analyst Intern",
      duration: "April 2026–June 2026",
      isCurrent: false,
      description: "Supported reporting and operational decision-making for large-scale events by preparing registration, sales, attendance, and entrance-traffic datasets and communicating findings to clients and senior management.",
      highlights: [
        "Managed end-to-end data preparation across multiple events to support accurate, reliable business reporting.",
        "Delivered executive dashboards and performance reports that translated event data into actionable insights.",
        "Standardized Advanced Excel templates and recurring reporting workflows to improve efficiency, consistency, and data quality.",
        "Mentored and trained new interns on data validation, reporting standards, and Excel-based analytical processes.",
      ],
    },
    {
      company: "Team Chronos Nexus",
      position: "Full-Stack Developer — Senior Project",
      duration: "2024–2025",
      isCurrent: false,
      description: "Developed OnTime, a community-based time-exchange platform. Contributed to Next.js interfaces, data workflows, Stripe payments, real-time notifications, and the moderator dashboard.",
      highlights: [
        "Contributed to customer-facing and moderator workflows across the platform.",
        "Worked with payment, notification, and database-backed features in a team environment.",
      ],
    },
    {
      company: "Assumption University Myanmar Student Council",
      position: "Event Organizer & Participant Manager",
      duration: "November 2023–January 2024",
      isCurrent: false,
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
      gpa: "3.44",
      honors: "The President's Certificate of Honors, 2025",
    },
  ],

  languages: [
    { name: "Myanmar", level: "Native proficiency" },
    { name: "English", level: "Professional proficiency" },
    { name: "Thai", level: "Basic proficiency" },
    { name: "Japanese", level: "Basic proficiency" },
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
} satisfies PortfolioData;
