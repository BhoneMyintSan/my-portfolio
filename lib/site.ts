import { portfolioData } from "@/data/portfolio";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "https://bhonemyintsan-portfolio.vercel.app")).replace(/\/+$/, "");

export const siteConfig = {
  name: portfolioData.personal.name,
  title: "Bhone Myint San | Data Analyst Portfolio",
  description: "Data analyst portfolio featuring healthcare data operations, event analytics, data quality, executive reporting, and dashboards built with Python, SQL, Power BI, and Advanced Excel.",
  url: siteUrl,
};
