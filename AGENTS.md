# AGENTS.md

This repository is a website for the xLLM project.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run check`           | Run Astro, ESLint, and Prettier checks           |
| `npm run fix`             | Run ESLint and Prettier auto-fixes               |
| `npm run fix:prettier`    | Format the project with Prettier                 |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Project Structure

| Path                      | Purpose                                                 |
| :------------------------ | :------------------------------------------------------ |
| `src/pages/`              | Astro routes and page-level content                     |
| `src/pages/index.astro`   | Main landing page for the xLLM website                  |
| `src/navigation.ts`       | Header/footer navigation configuration                  |
| `src/components/`         | Reusable Astro components, grouped by feature and layer |
| `src/components/widgets/` | Page sections such as hero, header, footer, and content |
| `src/components/ui/`      | Shared low-level UI building blocks                     |
| `src/layouts/`            | Page and markdown layout wrappers                       |
| `src/assets/styles/`      | Global Tailwind and site styles                         |
| `src/data/`               | Markdown data files used by pages                       |
| `src/utils/`              | Shared TypeScript utilities                             |
| `public/`                 | Static assets copied directly into the build output     |
| `public/decapcms/`        | Decap CMS static admin files and configuration          |
| `dist/`                   | Generated production build output; do not edit by hand  |
| `astro.config.ts`         | Astro integration and build configuration               |
| `tailwind.config.js`      | Tailwind theme and plugin configuration                 |

## Development Notes

- Most content updates should happen in `src/pages/index.astro` and `src/navigation.ts`
- Prefer reusing existing components instead of adding duplicated ones
- Run `npm run fix:prettier` after code edits that affect formatting
- Run at least one `npm run build` before submitting changes
- `npm run build` fetches the header GitHub star count in `src/utils/github-stars.ts`; without
  `GITHUB_TOKEN` the request may be rate limited (60 requests/hour per IP) and the count is hidden.
  The deploy workflow passes a token and rebuilds every 4 hours.
- For layout or visual changes, also verify in the local dev server
