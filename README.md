<!--
	README generated/updated for public release.
	- Contains installation, development, build, and deployment instructions
	- Notes on assets / favicons and contribution guidelines
-->

# Portfolio Website

A responsive portfolio website built with React and Vite. This repository contains the source for a developer portfolio (projects, skills, testimonials, blog, contact) and uses TailwindCSS for styling and modern tooling for fast development.

Short summary:
- Framework: React (v19)
- Bundler / Dev server: Vite
- Styling: Tailwind CSS
- Animations: Framer Motion
- Email: emailjs-com for contact form

---

## Quick checklist (what this README covers)

- Project overview and tech stack — Done
- How to run locally (install, dev, build, preview) — Done
- Linting and tests (where applicable) — Done
- Deployment tips (Netlify / Vercel / static hosting) — Done
- Notes about assets and favicons — Done

---

## Demo

If you publish the site (Vercel/Netlify/GitHub Pages), paste the public URL here.

---

## Features

- Responsive layout for desktop and mobile
- Hero, About, Projects, Blog, Pricing, Testimonials, Contact pages/components
- Client-side routing using `react-router-dom`
- Animations with `framer-motion`
- Contact form integration using `emailjs-com`
- Easily editable content via `src/data.js`

---

## Tech stack

- React 19
- Vite (dev server, build)
- Tailwind CSS
- PostCSS + Autoprefixer
- ESLint
- Framer Motion
- Lucide React (icons)
- React Router DOM

Refer to `package.json` for exact dependency versions.

---

## Prerequisites

- Node.js (recommend >= 18) and npm (or yarn/pnpm)
- A modern browser for testing (Chrome, Edge, Firefox)

---

## Getting started (local development)

1. Clone the repository

```powershell
git clone https://github.com/Bilaltoor1/portifoliowebsite.git
cd portifoliowebsite
```

2. Install dependencies

```powershell
npm install
```

3. Start the dev server

```powershell
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

---

## Build and preview

Build the production bundle:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

---

## Linting

This project includes ESLint. Run:

```powershell
npm run lint
```

Configure or extend rules in the repository's ESLint configuration files if you want stricter checks.

---

## Project structure (important files)

- `index.html` — app entry HTML (head contains favicon links)
- `src/main.jsx` — React entry
- `src/App.jsx` / `src/App.css` — top-level app
- `src/components/` — all React components (Hero, Navbar, Projects, Contact, etc.)
- `src/data.js` — central place for project/skills/testimonials data
- `public/` — static assets served at site root (images, favicons)

Sample top-level layout:

```
public/
	assets/         # images and favicons served as /assets/*
src/
	components/    # React components
	assets/         # svg used inside React code
	main.jsx
	App.jsx
index.html
package.json
vite.config.js
tailwind.config.js
README.md
```

---

## Assets and favicons

Favicons and icons are stored under `public/assets` and are referenced from `index.html` using paths like `/assets/favicon-32x32.png`. When you publish the site, the files in `public/` are served from the site root so these paths work as-is.

If you replace those images, keep the same filenames or update the links in `index.html`.

---

## Deployment

This is a static single-page app and can be deployed to any static hosting provider.

Recommended providers:

- Vercel: Add the repo and Vercel will detect Vite and run `npm run build`. Set the output directory to `dist` (default).
- Netlify: Connect the repo and set the build command to `npm run build` and publish directory to `dist`.
- GitHub Pages: Build locally and push the `dist` contents to the `gh-pages` branch using a deploy script or action.

Common environment considerations:
- If you use client-side routes, configure the provider to fallback to `index.html` for unknown routes (Netlify _redirects, Vercel handles SPA routing automatically).

---

## Customization

- Edit project content in `src/data.js` to change displayed projects, skills, contact details, and testimonials.
- Replace images in `public/assets` and `src/assets` as needed.
- Styling is driven by Tailwind; edit `tailwind.config.js` and `src/index.css` / `src/App.css` for custom styles.

---

## Contribution

Contributions are welcome. If you plan to submit changes:

1. Fork the repo and create a feature branch
2. Keep changes small and focused
3. Run `npm run lint` and ensure the site builds
4. Open a pull request with a summary of changes

For larger changes (new pages, layout rewrites), please open an issue first to discuss the approach.

---

## License

This project does not include a license file by default. If you want to make it public with a permissive license, consider adding an `MIT` or `Apache-2.0` license file to the repository and update this section.

---

## Contact

If this is your portfolio, add your email, social links, or preferred contact methods here. You can also configure the contact form (EmailJS) credentials in the project where it's wired up.

---

## screenshots

- ![s1](/public/assets/images/projects/project-1/image-1.png)
- ![s2](/public/assets/images/projects/project-2/image-1.png)
- ![s3](/public/assets/images/projects/project-3/image-1.png)
- ![s4](/public/assets/images/projects/project-4/image-1.png)
- ![s5](/public/assets/images/projects/project-5/image-1.png)
- ![s6](/public/assets/images/projects/project-6/image-1.png)
- ![s7](/public/assets/images/projects/project-7/image-1.png)
- ![s8](/public/assets/images/projects/project-8/image-1.png)
- ![s9](/public/assets/images/projects/project-9/image-1.png)


---

If you want, I can:

- Add a LICENSE file (MIT) and commit it
- Add a short project screenshot to the README (I can create a placeholder and wire the path)
- Add deployment configs for Vercel / Netlify or a GitHub Action that deploys `dist` on push to `main`

Tell me which of these you'd like next and I'll do it.
