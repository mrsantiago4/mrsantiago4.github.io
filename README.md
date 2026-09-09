# Reign Santiago — portfolio

A personal portfolio for **mrsantiago4**, built to grow one small improvement at a time. React + TypeScript, Vinext (Vite), CSS, and Anime.js. The website is exported as static HTML for GitHub Pages.

## Start here

1. **[Beginner guide](docs/BEGINNER-GUIDE.md)** — install the tools, run the site, edit your first line.
2. **[Code map](docs/CODE-MAP.md)** — what each important file does and how the animations work.
3. **[Deployment guide](docs/DEPLOYMENT.md)** — understand the pipeline, publish changes, and recover from mistakes.
4. **[Roadmap](ROADMAP.md)** — small next steps for this ongoing project.

## Quick start

Install Node.js 22.13 or newer and pnpm 11.19.0. In a terminal opened in this folder:

```sh
pnpm install
pnpm dev
```

Open the local address printed in the terminal. Keep that terminal running while editing.

```sh
pnpm check  # check TypeScript, lint your app, and build the finished website
```

Edit **app/portfolio-content.ts** first. It contains your name, GitHub link, biography introduction, and projects. Comments in the code explain the important decisions. The Santiago Electric Company entry describes work in development, not a completed client project.

## Website and source

- Intended public address after Pages deployment: https://mrsantiago4.github.io/
- Repository: https://github.com/mrsantiago4/mrsantiago4.github.io
- Private Sites copy is published separately; GitHub Actions updates GitHub Pages only.

## Design and accessibility

Dark background, lime accent, oversized type, a staggered animated waveform, and orbit motion. The actual [Anime.js library](https://animejs.com/documentation/) powers the effects; this is an original portfolio, not a copy of their website. Motion respects the visitor's reduced-motion preference and can be paused. Content is rendered before JavaScript runs. The page includes semantic sections, keyboard focus indicators, mobile layouts, and a skip link.

No contact form is included because no email address or form service was supplied. The contact section goes to the confirmed GitHub profile.

## Useful commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Local editing preview |
| `pnpm typecheck` | Check TypeScript for mistakes |
| `pnpm lint` | Check app code for likely problems |
| `pnpm build` | Generate deployable files in `dist/client` |
| `pnpm check` | Run all three checks |
| `pnpm preview` | Serve the compiled site locally |

The scaffold includes optional UI components under `components/ui`; the portfolio itself uses semantic HTML and does not require you to edit those components. Dependencies are pinned in `pnpm-lock.yaml` so local and pipeline installs match.
