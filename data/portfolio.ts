// ============================================
// 📝 EDIT YOUR PORTFOLIO INFORMATION HERE
// ============================================

export const portfolioData = {
  // ──────────────────────────────────────────
  // Personal Information
  // ──────────────────────────────────────────
  personal: {
    name: "Bhone Myint San",
    title: "Data Science & Information Technology Student",
    // Words that cycle in the hero section typewriter
    roles: ["Data Analytics", "Web Development", "UI/UX Design", "System Development"],
    email: "bhonegood@gmail.com",
    location: "Samut Prakan, Thailand",
    bio: "Motivated final-year Data Science and Information Technology student at Assumption University of Thailand. Skilled in Python, JavaScript, SQL, Power BI, and data visualization. Experienced in web development, data analysis, and system design through hands-on projects. Eager to apply data-driven insights and front-end development skills.",
    avatar: "/profile.jpg", // Place your photo in the public folder
    resumeUrl: "/resume.pdf", // Place your resume in the public folder
  },

  // ──────────────────────────────────────────
  // Social Links
  // ──────────────────────────────────────────
  socials: {
    github: "https://github.com/BhoneMyintSan",
    linkedin: "https://linkedin.com/in/bhone-myint-san-b96024330",
    // Add or remove social links as needed
  },

  // ──────────────────────────────────────────
  // Skills - with optional emoji icons
  // ──────────────────────────────────────────
  skills: [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "SQL", icon: "🗃️" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Power BI", icon: "📊" },
    { name: "Looker Studio", icon: "📈" },
    { name: "Figma", icon: "🎯" },
    { name: "Excel", icon: "📗" },
    { name: "Oracle DB", icon: "🔶" },
    { name: "Git", icon: "📦" },
    { name: "Draw.io", icon: "✏️" },
  ],

  // ──────────────────────────────────────────
  // Projects - with featured flag for bento grid sizing
  // ──────────────────────────────────────────
  projects: [
    {
      title: "OnTime Moderator",
      description:
        "A comprehensive moderation dashboard for the OnTime service platform. Manage service listings, handle reports, resolve tickets, and monitor user activity with real-time updates.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://ontime-moderator.vercel.app",
      githubUrl: "https://github.com/BhoneMyintSan/ontime_moderator",
      image: "/projects/ontime-moderator.jpg",
      featured: true,
    },
    {
      title: "OnTime Frontend",
      description:
        "The customer-facing frontend for OnTime service platform. Users can browse services, make bookings, and manage their requests with a beautiful modern UI.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/TrisTheKitten/OnTime_Frontend",
      image: "/projects/ontime-frontend.jpg",
      featured: true,
    },
    {
      title: "PromptPay QR Generator",
      description:
        "A complete Next.js application for generating, parsing, and validating Thai PromptPay QR codes. Accept payments via bank account, phone number, or National ID.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "promptparse"],
      liveUrl: "",
      githubUrl: "https://github.com/BhoneMyintSan/promptpay_QR",
      image: "/projects/promptpay-qr.jpg",
      featured: false,
    },
    {
      title: "Feel ABAC Online Order",
      description:
        "An online ordering system for Feel ABAC. Full-stack application with admin dashboard for managing orders and menu items.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
      liveUrl: "https://feel-abac-online-order.vercel.app",
      githubUrl: "https://github.com/Reon1917/feel-abac-online-order",
      image: "/projects/feel-abac.jpg",
      featured: false,
    },
    {
      title: "Digital Menu System",
      description:
        "A desktop application for managing and viewing digital restaurant menus with multilingual support (Thai/English). Connects to Oracle database with intuitive GUI.",
      technologies: ["Python", "Tkinter", "Oracle DB", "cx_Oracle"],
      liveUrl: "",
      githubUrl: "https://github.com/BhoneMyintSan/Digital_Menu",
      image: "/projects/digital-menu.jpg",
      featured: false,
    },
    {
      title: "CV Super-Resolution",
      description:
        "A computer vision project for image super-resolution using deep learning. Enhances low-resolution images of Thai traditional outfits.",
      technologies: ["Python", "Jupyter Notebook", "Deep Learning", "OpenCV"],
      liveUrl: "",
      githubUrl: "https://github.com/BhoneMyintSan/CV_Super-resolution",
      image: "/projects/cv-super-resolution.jpg",
      featured: false,
    },
    {
      title: "Penguin Dive",
      description:
        "A 2D Java-based game with object-oriented design principles, implementing collision detection and scoring logic for dynamic gameplay experience.",
      technologies: ["Java", "OOP", "Game Development"],
      liveUrl: "",
      githubUrl: "https://github.com/BhoneMyintSan/penguin_dive",
      image: "/projects/penguin-dive.jpg",
      featured: false,
    },
    {
      title: "AU Digital Wallet",
      description:
        "Designed and implemented a digital wallet system that replaced paper coupons, reducing canteen wait times by 30% and improving user convenience through Figma-based UI/UX design.",
      technologies: ["Figma", "UI/UX Design", "System Design"],
      liveUrl: "",
      githubUrl: "",
      image: "/projects/au-wallet.jpg",
      featured: false,
    },
    {
      title: "Coffee Shops Data Analysis",
      description:
        "Collected and analyzed 5,000+ TripAdvisor reviews using Apify and Colab. Conducted EDA and visualizations to uncover correlations between ratings, keywords, and customer sentiment for Bangkok coffee shops.",
      technologies: ["Python", "Google Colab", "Apify", "Data Visualization"],
      liveUrl: "",
      githubUrl: "",
      image: "/projects/coffee-analysis.jpg",
      featured: false,
    },
  ],

  // ──────────────────────────────────────────
  // Experience & Education
  // ──────────────────────────────────────────
  experience: [
    {
      company: "Assumption University of Thailand",
      position: "Bachelor of Information Technology - Major in Data Science",
      duration: "2022 - 2026 (Expected)",
      description:
        "Final year undergraduate student focusing on data science, web development, and system design. Hands-on experience through multiple academic and personal projects.",
    },
    {
      company: "AU Myanmar Student Council",
      position: "Event Organizer & Participant Manager",
      duration: "2023 - 2024",
      description:
        "Organized and coordinated logistics for 3 university events, managing over 100 participants and ensuring smooth event execution with 100% on-time completion.",
    },
    {
      company: "Team Chronos Nexus",
      position: "Full Stack Developer - Senior Project",
      duration: "2024 - Present",
      description:
        "Developing OnTime, a community-based time exchange platform using Next.js, Tailwind CSS, Clerk, and NeonDB. Integrated Stripe payments, real-time notifications, and moderator dashboard.",
    },
  ],

  // ──────────────────────────────────────────
  // Education
  // ──────────────────────────────────────────
  education: [
    {
      institution: "Assumption University of Thailand (Suvarnabhumi)",
      degree: "Bachelor of Information Technology",
      major: "Data Science",
      duration: "2022 - 2026 (Expected)",
      status: "Final Year Undergraduate",
    },
  ],

  // ──────────────────────────────────────────
  // Languages
  // ──────────────────────────────────────────
  languages: [
    { name: "Myanmar", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional", proficiency: 85 },
  ],

  // ──────────────────────────────────────────
  // Soft Skills with proficiency level (0-100)
  // ──────────────────────────────────────────
  softSkills: [
    { name: "Problem Solving", proficiency: 90 },
    { name: "Team Collaboration", proficiency: 85 },
    { name: "Communication", proficiency: 80 },
    { name: "Time Management", proficiency: 85 },
    { name: "Adaptability", proficiency: 90 },
    { name: "Critical Thinking", proficiency: 85 },
  ],
};
