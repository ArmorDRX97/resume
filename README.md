# Timur Khairullin Portfolio

Static portfolio website for Timur Khairullin, positioned as a **UI/UX Designer & Product Developer**.

The site is built for GitHub Pages and designed as a premium product-style portfolio rather than a plain resume page.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- MDX content collections
- GSAP + ScrollTrigger
- Lenis
- Lucide icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pages

- `/` - homepage
- `/about/` - background and positioning
- `/cases/` - case study grid
- `/cases/[slug]/` - case detail pages
- `/works/` - visual works gallery
- `/freelance/` - freelance project grid
- `/resume/` - web resume
- `/contact/` - contacts
- `/404/` - custom not found page

## Where To Edit Data

- Contacts: `src/data/contact.ts`
- Navigation: `src/data/navigation.ts`
- Experience: `src/data/experience.ts`
- Skills/tools: `src/data/skills.ts`
- Works gallery: `src/data/works.ts`
- Freelance projects: `src/data/freelanceProjects.ts`

## Add Or Edit Cases

Case studies live in:

```txt
src/content/cases/
```

Each case is an MDX file with frontmatter:

```md
---
title: "Project title"
company: "Company"
period: "2024-2026"
role: "UI/UX Designer"
category: "Corporate System / UI/UX"
tags: ["UI/UX", "Figma"]
tools: ["Figma"]
featured: true
nda: true
summary: "Short description."
visual: "dashboard"
sortOrder: 1
---
```

Use `featured: true` for cases that should appear on the homepage.

## Add Images

Put images in:

```txt
public/images/
```

Recommended structure:

```txt
public/images/cases/
public/images/works/
public/images/mockups/
public/images/placeholders/
public/images/og/
```

Use lowercase names with hyphens. Prefer `.webp` or `.avif`.

## Add HTML Mockups

Put isolated HTML prototypes in:

```txt
public/embeds/project-name/index.html
```

Then pass that path to `EmbedFrame` in a case page or component:

```astro
<EmbedFrame src="/embeds/project-name/index.html" title="Interactive prototype" />
```

## Add PDF Resume

Place the final PDF here:

```txt
public/resume/Timur-Khairullin-CV.pdf
```

Then update the resume page CTA if a direct download button is needed.

## GitHub Pages

The project includes:

```txt
.github/workflows/deploy.yml
```

The Astro config automatically handles two GitHub Pages modes:

- `username.github.io` repository: base path `/`
- project repository: base path `/<repo>/`

In GitHub:

1. Push to `main`.
2. Open repository Settings.
3. Go to Pages.
4. Set Source to GitHub Actions.
5. Run the workflow or push again.

## Manual Items Still Needed

- Real GitHub profile link.
- Real HH.kz resume link.
- Final PDF resume.
- Real screenshots, videos, embeds and approved case materials.
- Optional custom Open Graph image.
