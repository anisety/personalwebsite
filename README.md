# Personal Website

A modern personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your site

3. **Update the base URL** (if needed)
   - If your repository name is different from `Personal-Website`, update the `base` field in `vite.config.ts`
   - Replace `/Personal-Website/` with `/{your-repo-name}/`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Features

- ⚡ Fast development with Vite
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🚀 Automatic deployment to GitHub Pages
- 📄 Resume data from JSON
- 🎭 Smooth animations with Framer Motion

### Project Structure

```
src/
├── components/     # React components
├── data/          # JSON data files
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
```

Your site will be available at: `https://{your-username}.github.io/{your-repo-name}/`
