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

- `@Frontend/src/projects.yaml` - Reference the projects data file
- `@Frontend/src/pages/Home.tsx` - Reference the home page
- `@Frontend/README.md` - Reference this README

Example: "Add a new project using @Frontend/src/projects.yaml"

### What You Can Ask Opencode To Do

- Add, edit, or remove projects
- Change styling, colors, or layout
- Add new pages or components
- Update text content
- Fix issues or bugs
- Explain how parts of the site work

## Adding Projects

To add a new project, open the file `src/projects.yaml` in the `Frontend` folder.

### Project Structure

Each project follows this format:

```yaml
- slug: your-project-name
  title: YOUR PROJECT TITLE
  description: "Describe your project here. This can be a longer paragraph."
  type: BRANDING
  listingcardasset: /assets/your-listing-image.webp  # or .mp4 for video
  images:
    - src: /assets/project-image-1.webp
      size: normal
    - src: /assets/project-video.mp4
      size: normal
```

### Image Size Options (10-column grid)

When adding images, you can specify how much space they take up in the grid:

| Size | Grid Space | Best For |
|------|------------|----------|
| `large` | 8×4 | Featured hero image |
| `normal` | 4×2 | Standard image (default) |
| `tall` | 8×2 | Wide images |
| `extra_tall` | 10×2 | Extra tall images |
| `thin` | 2×2 | Narrow vertical images |
| `wide` | 6×2 | Medium wide images |
| `extra_wide` | 10×2 | Full-width images |
| `half` | 5×2 | Half-width images |

If you don't specify a size, it defaults to `normal` (4×2).

### Video Support

Both listing cards and project images support MP4 videos:
- Videos auto-play, loop, and are muted (required for autoplay)
- Use `.mp4` extension for video files

### Hero Video

The homepage hero uses two video files:
- Desktop: `Frontend/public/assets/Home/HeroVideo.mp4`
- Mobile: `Frontend/public/assets/Home/HeroVideoMobile.mp4`

Replace these files to update the hero video.

### Steps to Add a Project

1. Open `src/projects.yaml`
2. Copy an existing project entry (from `- slug:` to the next `- slug:` or end)
3. Paste it at the end of the list
4. Replace the values with your project details:
   - `slug`: A unique URL-friendly name (use hyphens, no spaces)
   - `title`: Your project title in CAPITALS
   - `description`: Your project description
   - `type`: Category in CAPITALS (e.g., BRANDING, UX/UI & BRANDING, BRANDING & WEB DESIGN)
   - `listingcardasset`: Path to your main project image or video
   - `images`: Array of image/video objects with `src` and optional `size`

### Adding Images & Videos

1. Place your files in the `Frontend/public/assets/` folder
2. Reference them with `/assets/your-image-name.png` or `/assets/your-video.mp4`

### Important Notes

- Use `/assets/` path (not `/src/assets/`) for images/videos
- Keep titles and types in CAPITALS
- Each slug must be unique
- The grid works on desktop - on mobile, images/videos stack vertically automatically

## Available Scripts

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

This project uses GitHub Actions for deployment to GitHub Pages. The workflow file is located at `.github/workflows/deploy.yml` in the repository root.

**To deploy:**
1. Go to repository Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

**Note:** Repository Settings > Pages > Source must be set to "GitHub Actions"
