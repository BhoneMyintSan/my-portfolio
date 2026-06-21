import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bhone Myint San — Data Analyst Portfolio",
    short_name: "Bruce San",
    description: "Data analytics, business intelligence, and web development portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#17131f",
    theme_color: "#8b5cf6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
