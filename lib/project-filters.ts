import type { Project } from "@/types/portfolio";

export const projectFilters = ["All", "Data & Analytics", "Web Development", "UI/UX Design", "Other"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

const categoryFilters = {
  "Data & Analytics": "Data & Analytics",
  "Web Development": "Web Development",
  "UI/UX Design": "UI/UX Design",
  "Desktop App": "Other",
  "Game Development": "Other",
} satisfies Record<Project["category"], Exclude<ProjectFilter, "All">>;

export function filterProjects(projects: readonly Project[], filter: ProjectFilter): readonly Project[] {
  return filter === "All"
    ? projects
    : projects.filter((project) => categoryFilters[project.category] === filter);
}
