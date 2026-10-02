import { Briefcase, FolderOpen, Mail, User } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { portfolioData } from "@/data/portfolio";

const navigationItems = [
  { title: "Work", icon: <FolderOpen className="h-4 w-4" aria-hidden="true" />, href: "#selected-work" },
  { title: "About", icon: <User className="h-4 w-4" aria-hidden="true" />, href: "#about" },
  { title: "Projects", icon: <FolderOpen className="h-4 w-4" aria-hidden="true" />, href: "#projects" },
  { title: "Experience", icon: <Briefcase className="h-4 w-4" aria-hidden="true" />, href: "#experience" },
  { title: "Contact", icon: <Mail className="h-4 w-4" aria-hidden="true" />, href: "#contact" },
];

export function PortfolioNavigation() {
  return <FloatingDock items={navigationItems} name={portfolioData.personal.shortName} />;
}
