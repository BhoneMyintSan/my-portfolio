# Bhone Myint San — Portfolio

A junior data analyst portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

Use Node.js 22.18 or newer (Node.js 24 is used for local validation). The tests use Node's built-in TypeScript support.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Configuration

Set the production URL so canonical links, structured data, the sitemap, and social metadata use the deployed domain:

```bash
NEXT_PUBLIC_SITE_URL=https://bhonemyintsan-portfolio.vercel.app
```

## Project structure

- `app/` defines the homepage, project routes, and site metadata.
- `components/portfolio/` contains the homepage sections, shared project cards and links, and project filters.
- `components/ui/` contains reusable interface elements and backgrounds.
- `data/portfolio.ts` stores personal details, experience, education, skills, and evidence metrics.
- `data/projects.ts` stores case studies and project lookup logic.
- `types/portfolio.ts` defines the shared content types.
- `lib/` contains site configuration, filtering, and structured-data helpers.
- `public/` contains images and PDF reports.

Update content in the data files. Keep experience ordered newest first and use `isCurrent` to identify active roles. Skill icons follow each group's stable `id`, and the project count is derived from the catalog. The résumé download filename follows `personal.resumeUrl`.

`lib/site.ts` resolves the shared site URL from `NEXT_PUBLIC_SITE_URL`, then Vercel's production URL, then the portfolio's default domain. Metadata, structured data, robots, and the sitemap use this configuration.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

The tests cover project filtering and lookup, asset paths, current-role selection, and structured-data output. Production builds need network access to download the Geist fonts from Google Fonts.
