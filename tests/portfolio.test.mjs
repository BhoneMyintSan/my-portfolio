import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { projects, getProjectBySlug } from "../data/projects.ts";
import { filterProjects, projectFilters } from "../lib/project-filters.ts";
import { createPersonStructuredData, getHighlightedExperience, serializeStructuredData } from "../lib/portfolio.ts";

test("project filters partition the catalog without losing or duplicating projects", () => {
  const filtered = projectFilters.slice(1).flatMap((filter) => filterProjects(projects, filter));
  assert.deepEqual(filtered.map(({ slug }) => slug).sort(), projects.map(({ slug }) => slug).sort());
  for (const category of ["Data & Analytics", "Web Development", "UI/UX Design"]) {
    assert.ok(filterProjects(projects, category).every((project) => project.category === category));
  }
});

test("Other includes desktop and game projects; All restores the original order", () => {
  const snapshot = structuredClone(projects);
  assert.deepEqual(filterProjects(projects, "Other").map(({ slug }) => slug), ["digital-menu-system", "penguin-dive"]);
  assert.deepEqual(filterProjects(projects, "All"), snapshot);
  assert.deepEqual(projects, snapshot);
  assert.deepEqual(filterProjects([], "Other"), []);
});

test("project slugs are unique, resolve to their case studies, and reject unknown slugs", () => {
  assert.equal(new Set(projects.map(({ slug }) => slug)).size, projects.length);
  for (const project of projects) {
    assert.equal(getProjectBySlug(project.slug), project);
  }
  assert.equal(getProjectBySlug("unknown-project"), undefined);
});

test("all project images and reports point to existing local assets", () => {
  for (const project of projects) {
    for (const asset of [project.image, project.pdfUrl].filter(Boolean)) {
      const file = new URL(`../public${decodeURIComponent(asset)}`, import.meta.url);
      assert.ok(existsSync(file), `${project.slug}: missing ${asset}`);
    }
  }
});

test("the highlighted role follows current status, even when an ended role comes first", () => {
  const ended = { company: "Previous company", isCurrent: false };
  const current = { company: "Current company", isCurrent: true };
  assert.equal(getHighlightedExperience([ended, current]), current);
  assert.equal(getHighlightedExperience([ended]), ended);
  assert.equal(getHighlightedExperience([]), undefined);
});

test("structured data uses the configured site, all education records, and unique skills", () => {
  const profile = {
    personal: {
      name: "Portfolio owner",
      title: "Data Analyst",
      avatar: "/profile.png",
      email: "owner@example.com",
      location: "Bangkok",
    },
    socials: { github: "https://github.com/example", linkedin: "https://linkedin.com/in/example" },
    education: [{ institution: "First university" }, { institution: "Second university" }],
    skillGroups: [{ skills: ["SQL", "Python"] }, { skills: ["SQL", "Excel"] }],
  };
  const data = createPersonStructuredData(profile, "https://portfolio.example/");
  assert.equal(data.url, "https://portfolio.example/");
  assert.equal(data.image, "https://portfolio.example/profile.png");
  assert.deepEqual(data.alumniOf.map(({ name }) => name), ["First university", "Second university"]);
  assert.deepEqual(data.knowsAbout, ["SQL", "Python", "Excel"]);
  assert.deepEqual(data.sameAs, Object.values(profile.socials));
  assert.deepEqual(createPersonStructuredData({ ...profile, education: [] }, data.url).alumniOf, []);
});

test("structured data preserves text without allowing a closing script tag", () => {
  const data = { name: "Text </script><script>alert('example')</script> & more" };
  const serialized = serializeStructuredData(data);
  assert.equal(serialized.includes("<"), false);
  assert.deepEqual(JSON.parse(serialized), data);
});
