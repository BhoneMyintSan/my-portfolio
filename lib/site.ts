const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "https://bhonemyintsan-portfolio.vercel.app");

export const siteConfig = {
  name: "Bhone Myint San (Bruce)",
  title: "Bhone Myint San | Data Analyst Portfolio",
  description: "Junior data analyst portfolio featuring event reporting, business intelligence, Python, SQL, Power BI, Excel, and web development projects.",
  url: siteUrl,
};
