# Studio LD Portfolio

A multimedia designer portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Overview

This is Lexie Downie's portfolio website featuring:

> **User Context**: The primary user is non-technical. Assume they don't understand technical jargon unless they specifically indicate they do. Use plain language and explain technical terms when necessary.
- About page with bio and portrait
- Project gallery with hover effects
- Individual project detail pages
- Contact form for inquiries

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **Tailwind CSS 4** for styling
- **React Router 7** for navigation
- **Lucide React** for icons
- **js-yaml** for YAML parsing

## File Structure

```
.github/
└── workflows/
    └── deploy.yml        # GitHub Pages deployment workflow
Portfolio/
├── public/
│   └── assets/           # Project images & videos (placed here, referenced with /assets/)
├── src/
│   ├── assets/           # Legacy - use public/assets instead
│   ├── components/
│   │   ├── Navbar.tsx    # Top navigation bar
│   │   └── ContactForm.tsx # Contact form component
│   ├── pages/
│   │   ├── Home.tsx      # Hero + project cards + contact
│   │   ├── About.tsx     # Bio + portrait
│   │   └── ProjectPage.tsx # Project detail view
│   ├── projects.yaml     # Project data (YAML format)
│   ├── types/
│   │   └── yaml.d.ts     # Type declarations for YAML imports
│   ├── App.tsx           # Router setup
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + Tailwind
├── package.json
├── vite.config.ts
└── index.html
```

## Pages

### Home (`/`)
- Hero section with full-width video (desktop: HeroVideo.mp4, mobile: HeroVideoMobile.mp4)
- Click chevron to scroll to projects
- Project grid: 2 columns (1 on mobile), hover shows title + type subtitle
- Supports MP4 videos as listing cards (auto-plays, loops, muted)
- Contact section with "Create With Me!" heading and form
- Mobile: reduced top padding, no chevron, hover overlay always visible

### About (`/about`)
- Portrait image on left (2/5 width) - uses `/public/assets/LexieDownie.webp`
- Bio text on right (3/5 width)
- "About Me" title same size as body text, bold
- Text fills to match image height
- Text is black, left-aligned
- Contact form section below

### Project Page (`/project/:slug`)
- Back navigation arrow
- Project title + description header
- **Desktop**: Bento-box grid (10 columns) of project images with size options
- **Mobile**: Single column stacked images with natural heights
- Supports MP4 videos as images (auto-plays, loops, muted)
- Contact form section below

## Components

### Navbar
- Fixed top, full-width
- Left: "about" link to `/about`
- Center: "STUDIO LD" logo (absolute positioned, centered)
- Right: "in" link to LinkedIn

### ContactForm
- Name: First Name + Last Name side by side
- Email field
- Message textarea (min 4 rows, resizable larger)
- Labels above each field (black text)
- Fields: light grey background (`bg-gray-100`), rounded corners
- Send button: black background, white text, rounded-xl corners

## Data Structure

### projects.yaml
```yaml
- slug: your-project-name
  title: YOUR PROJECT TITLE
  description: "Describe your project here."
  type: BRANDING
  listingcardasset: /assets/listing-image.webp  # or .mp4 for video
  images:
    - src: /assets/project-image-1.webp
      size: large  # or normal, tall, thin, wide, extra_wide, half
    - src: /assets/project-video.mp4
      size: normal
```

### Image Size Options (10-column grid)
| Size | colSpan | rowSpan | Description |
|------|---------|---------|-------------|
| `large` | 8 | 4 | Large square |
| `normal` | 4 | 2 | Medium (default) |
| `tall` | 8 | 2 | Wide and short |
| `extra_tall` | 10 | 2 | Full width |
| `thin` | 2 | 2 | Narrow vertical |
| `wide` | 6 | 2 | Medium wide |
| `extra_wide` | 10 | 2 | Full width |
| `half` | 5 | 2 | Half width |

> Note: Images without a size specified default to `normal` (4×2).

## Styling Conventions

- Side padding: `px-6` mobile, `lg:px-20` desktop
- Max content width: `xl:max-w-[1700px]`
- Top padding: `pt-32` mobile, `lg:pt-[300px]` desktop
- Bottom padding: `pb-32` on main content
- Text color: Black
- No Tailwind dark mode in use
- Hero image: `aspect-video`, max-width 4xl, centered
- Mobile spacing: `mt-16` between sections
- Desktop spacing: `mt-48` between sections

## Animations

- Chevron: Custom bounce-once animation (defined in `index.css`)
- Project cards: Hover overlay transition
- Videos: Auto-play loops (muted for autoplay compatibility)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages manually.

**To deploy:**
1. Go to repository Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Site will be at `https://[username].github.io/Portfolio/`

**Setup required:**
- Repository Settings > Pages > Source: GitHub Actions

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
