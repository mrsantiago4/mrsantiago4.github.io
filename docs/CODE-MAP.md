# How the code fits together

```text
app/
  portfolio-content.ts  ← Start here: editable profile and project data
  page.tsx              ← Page sections and interactive motion
  globals.css           ← Colors, typography, layout, mobile rules
  layout.tsx            ← Document wrapper, title, description
public/
  favicon.svg           ← Small browser-tab icon
.github/workflows/
  deploy.yml            ← Automated checks and GitHub Pages deployment
next.config.ts          ← Export as static HTML
vite.config.ts          ← Compile React and CSS using Vinext/Vite
package.json            ← Commands and library versions
pnpm-lock.yaml          ← Exact dependency versions; commit this file
.openai/hosting.json     ← Identity and output directory for the private Sites copy
```

`components/ui`, `hooks`, and `lib` come from the supplied UI starter. They are optional building blocks for future features. You can understand and edit the current page entirely within `app`.

## From content to page

`portfolio-content.ts` exports plain JavaScript objects. `page.tsx` imports them. `{profile.name}` inserts your name into JSX (HTML-like markup used by React). `projects.map(...)` turns each project object into a project card. A `className` connects markup to a CSS style.

The page has a header, introduction, projects, about section, contact section, and footer. Links beginning with `#` scroll to an element's matching `id`. The GitHub links open the actual profile at `https://github.com/mrsantiago4`.

## Motion, explained

The `'use client'` line permits browser interactions. `useState` stores whether motion is playing. `useRef` points to the page element. `useEffect` starts motion after the page appears and cleans it up later.

1. The first effect checks `prefers-reduced-motion`. People who ask their device for less movement get a static page by default.
2. The second effect creates an Anime.js scope attached to the page.
3. `.hero-line` elements fade and slide into place.
4. `.motion-bar` elements change vertical scale. `stagger(65, { from: 'center' })` offsets their starts by 65 milliseconds from the middle outward.
5. `.orbit` elements rotate slowly around the bars.
6. The cleanup calls `scope.revert()` so pausing or leaving the page removes animations.

Values are milliseconds: `duration: 2800` means 2.8 seconds. `loop: true` repeats an effect. `ease: 'inOutSine'` gently accelerates and decelerates. For a slower waveform, try `duration: 4200`.

The pause button is a real button with an accessible label. Enabling motion manually also replays the introduction. The operating-system reduced-motion setting remains the initial default.

Reference: https://animejs.com/documentation/

## Styling

CSS variables at the top of `globals.css` define the theme. The middle describes desktop layout. The final `@media` rules adapt the layout to tablets and phones. Start with one value and preview it before changing another.

## Why static output?

GitHub Pages serves files; it cannot run a Node server or store form submissions. `output: 'export'` prerenders this portfolio into `dist/client`. Future features such as a database, account login, or private API need a separate backend. Do not place secrets in this frontend: visitors can read shipped JavaScript.
