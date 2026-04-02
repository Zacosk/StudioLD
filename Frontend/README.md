# Studio LD Portfolio

A multimedia designer portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Using Opencode AI Assistant

This project includes an `opencode.md` file that provides context about the project for the AI assistant. You can use Opencode (or any AI assistant that supports project context) to help you make changes.

### How to Open Opencode

1. Navigate to the project folder in your terminal
2. Run `npx opencode` or install Opencode globally first
3. Ask your question - the AI will read `opencode.md` automatically

### Using the @ Symbol for Context

You can use the `@` symbol to provide specific files or folders to the AI:

- `@Frontend/src/projects.json` - Reference the projects data file
- `@Frontend/src/pages/Home.tsx` - Reference the home page
- `@Frontend/README.md` - Reference this README

Example: "Add a new project using @Frontend/src/projects.json"

### What You Can Ask Opencode To Do

- Add, edit, or remove projects
- Change styling, colors, or layout
- Add new pages or components
- Update text content
- Fix issues or bugs
- Explain how parts of the site work

## Adding Projects

To add a new project, open the file `src/projects.json` in the `Frontend` folder.

### Project Structure

Each project follows this format:

```json
{
  "slug": "your-project-name",
  "title": "YOUR PROJECT TITLE",
  "description": "Describe your project here. This can be a longer paragraph.",
  "type": "BRANDING",
  "listingimage": "/assets/your-listing-image.png",
  "images": [
    "/assets/project-image-1.png",
    "/assets/project-image-2.png"
  ]
}
```

### Steps to Add a Project

1. Open `src/projects.json`
2. Copy an existing project entry (from `{` to `}`)
3. Paste it at the end of the list, before the final `]`
4. Replace the values with your project details:
   - `slug`: A unique URL-friendly name (use hyphens, no spaces)
   - `title`: Your project title in CAPITALS
   - `description`: Your project description
   - `type`: Category in CAPITALS (e.g., BRANDING, UX/UI & BRANDING, BRANDING & WEB DESIGN)
   - `listingimage`: Path to your main project image
   - `images`: Array of paths to additional project images

### Adding Images

1. Place your image files in the `Frontend/public/assets/` folder
2. Reference them with `/assets/your-image-name.png`

### Important Notes

- Use `/assets/` path (not `/src/assets/`) for images
- Keep titles and types in CAPITALS
- Each slug must be unique

## Available Scripts

```bash
npm install      # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```
