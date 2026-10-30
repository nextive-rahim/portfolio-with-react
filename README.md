<div align="center">

# Portfolio — Abdul Rahim

**Senior Flutter Developer & Team Lead**

A developer portfolio built with **React 19**, **TypeScript**, **Vite** and **Tailwind CSS**, featuring
a dark-mode toggle, scroll-reveal animations and a fully responsive layout.

[![Live site](https://img.shields.io/badge/Live-abdulrahim.dev-0F766E?style=for-the-badge&logo=google-chrome&logoColor=white)](https://abdulrahim.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdul-rahim-6b09292a0)
[![Email](https://img.shields.io/badge/Email-rahimsr983@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rahimsr983@gmail.com)

</div>

---

## Highlights

- **React 19 + TypeScript** — fully typed resume data model in `types.ts`, with all content
  separated into `data.ts` so copy can be edited without touching components.
- **Tailwind CSS** — utility-first styling with a custom `Plus Jakarta Sans` and `JetBrains Mono`
  font pairing, configured in `index.html`.
- **Dark mode** — class-based dark mode with a persisted toggle.
- **Scroll reveal** — an `IntersectionObserver`-based `RevealOnScroll` wrapper fades and lifts
  sections into view as they enter the viewport.
- **Fully responsive** — a collapsible mobile menu, fluid typography and adaptive grids from
  phones to desktops.
- **Iconography** — `lucide-react` provides a consistent, lightweight icon set throughout.
- **AI Studio integration** — optional Gemini API support via `@google/genai`.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS (CDN config) |
| Icons | `lucide-react` |
| AI | Gemini API (`@google/genai`) |
| Fonts | Plus Jakarta Sans, JetBrains Mono |

---

## Project Structure

```
src/
├── App.tsx      # Sections, navigation and the RevealOnScroll wrapper
├── data.ts      # All resume content — name, skills, experience, projects
├── types.ts     # TypeScript interfaces for the resume data model
├── index.tsx    # React entry point
└── index.css    # Global styles and Tailwind directives
```

`data.ts` is the single source of truth for the site's content. Updating a role, adding a project
or changing the contact links is a data edit — no component changes required.

---

## Getting Started

### Prerequisites

- Node.js `>= 18`

### Install and run

```bash
git clone https://github.com/developer-rahim/portfolio-with-react.git
cd portfolio-with-react
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Environment

Copy `.env.local.example` to `.env.local` and add your Gemini API key if you want the AI features:

```bash
GEMINI_API_KEY=your_api_key_here
```

### Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # locally preview the production build
```

The `dist/` directory is a static bundle — deploy it to Netlify, Vercel, GitHub Pages or any
static host.

---

## Customising

- **Content** — edit `data.ts`. The `ResumeData` interface in `types.ts` keeps it type-safe.
- **Colours** — adjust the Tailwind theme in the `tailwind.config` block inside `index.html`.
- **Sections** — each section is a self-contained component in `App.tsx`.

---

## License

Released under the MIT License.
