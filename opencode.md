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

## File Structure

```
Frontend/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/
│   │   ├── Navbar.tsx    # Top navigation bar
│   │   └── ContactForm.tsx # Contact form component
│   ├── pages/
│   │   ├── Home.tsx      # Hero + project cards + contact
│   │   ├── About.tsx     # Bio + portrait
│   │   └── ProjectPage.tsx # Project detail view
│   ├── projects.json     # Project data
│   ├── App.tsx           # Router setup
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + Tailwind
├── package.json
└── index.html
```

## Pages

### Home (`/`)
- Hero section with full-width image and bouncing chevron
- Click chevron to scroll to projects
- Project grid: 2 columns, hover shows title + type subtitle
- Contact section with "Create With Me!" heading and form
- Left side: heading, subtitle, description text
- Right side: contact form with First Name, Last Name, Email, Message fields

### About (`/about`)
- Portrait image on left (2/5 width) - uses `/src/assets/LexieDownie.webp`
- Bio text on right (3/5 width)
- "About Me" title same size as body text, bold
- Text fills to match image height
- Text is black, left-aligned

### Project Page (`/project/:slug`)
- Back navigation arrow
- Project title + description header
- Listing image
- Bento-box grid of project images (first image larger 2x2, others fill around)

## Components

### Navbar
- Fixed top, full-width
- Left: "about" link to `/about`
- Center: "STUDIO LD" link to home
- Right: "in" link to `https://www.linkedin.com/in/lexie-downie-61468a257/`

### ContactForm
- Name: First Name + Last Name side by side
- Email field
- Message textarea (min 4 rows, resizable larger)
- Labels above each field (black text)
- Fields: light grey background (`bg-gray-100`), rounded corners
- Send button: black background, white text, rounded-xl corners

## Data Structure

### projects.json
```json
{
  "slug": "string",
  "title": "string",
  "type": "string",
  "listingimage": "string (path)",
  "images": ["string (path)", ...]
}
```

## Styling Conventions

- Side padding: `px-6` mobile, `lg:px-20` desktop
- Max content width: `xl:max-w-[1700px]`
- Top padding: `pt-[300px]` for page content below fixed navbar
- Bottom padding: `pb-32` on main content
- Text color: Black
- No Tailwind dark mode in use
- Hero image: `aspect-video`, max-width 4xl, centered

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
