# Setup Guide

Your new personal website has been created! Here's everything you need to know.

## What's Been Built

✅ **Modern Next.js Website** with TypeScript and Tailwind CSS
✅ **Dark Mode** with automatic theme detection and persistence
✅ **Home Page** with hero section, about, featured projects, and contact
✅ **Projects Page** showcasing all 22 projects with filtering
✅ **Experience Page** with interactive timeline of your career
✅ **Fully Responsive** design that works on all devices
✅ **Static Export** configured for Netlify deployment
✅ **SEO Optimized** with proper meta tags

## Project Structure

```
website-new/
├── app/                    # Next.js app directory
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects showcase
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation with theme toggle
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Home page hero section
│   ├── About.tsx          # About section
│   ├── FeaturedProjects.tsx
│   ├── Contact.tsx
│   └── ThemeProvider.tsx  # Dark mode context
├── lib/                   # Data and utilities
│   ├── projects.ts        # All 22 projects data
│   └── experience.ts      # Work history data
├── public/                # Static assets
│   ├── profile.jpg         # Your profile photo
│   └── projects/          # Project images
└── netlify.toml          # Netlify configuration
```

## Local Development

### First Time Setup

```bash
cd website-new
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Customization Guide

### Update Your Information

#### 1. Personal Information ([app/layout.tsx](app/layout.tsx))
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ...
};
```

#### 2. Projects ([lib/projects.ts](lib/projects.ts))
Add, edit, or remove projects in the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Project description",
  tags: ["Tag1", "Tag2"],
  date: "2024-01",
  link: "https://...",
  github: "https://github.com/...",
  featured: true,
}
```

#### 3. Experience ([lib/experience.ts](lib/experience.ts))
Update your work history in the `experiences` array:
```typescript
{
  title: "Your Title",
  company: "Company Name",
  companyUrl: "https://...",
  dateStart: "2022-01",
  dateEnd: "2024-01", // omit for current position
  current: false, // set to true for current position
}
```

#### 4. Social Links

Update links in:
- [components/Footer.tsx](components/Footer.tsx) - Footer social icons
- [components/Contact.tsx](components/Contact.tsx) - Contact section buttons
- [components/Hero.tsx](components/Hero.tsx) - Hero section buttons

### Add Project Images

Place project images in `public/projects/` and reference them in your project cards.

## Deployment to Netlify

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub:
   ```bash
   cd website-new
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Netlify will auto-detect settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy"

### Option 2: Manual Deploy

```bash
npm run build
# Drag and drop the 'out' folder to Netlify
```

### Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to update DNS records
4. Enable HTTPS (automatic with Netlify)

## Environment Variables

If you need environment variables:
1. Create `.env.local` file (already in `.gitignore`)
2. Add variables with `NEXT_PUBLIC_` prefix for client-side access
3. Add them in Netlify dashboard under "Site settings" → "Environment variables"

## Google Analytics

The site is already configured for Google Analytics with ID `G-788E6BRYX5`.

To update:
1. Get your Google Analytics measurement ID
2. Add it to [app/layout.tsx](app/layout.tsx) or use a package like `@next/third-parties`

## Performance Tips

- Next.js automatically optimizes images, code splitting, and more
- The site uses static generation for best performance
- Dark mode is CSS-based (no JavaScript flicker)
- All pages are pre-rendered at build time

## Migrating from Old Site

Your old Hugo site is in the `backup` folder. Data has been migrated:
- ✅ Projects information
- ✅ Work experience
- ✅ Profile information
- ✅ Images (avatar and project images)
- ✅ Social links

Once you're happy with the new site, you can:
1. Update your Netlify site to point to the `website-new` directory
2. Or replace the root directory contents with `website-new`

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

## What's Next?

1. **Customize** the content with your latest information
2. **Test** locally with `npm run dev`
3. **Build** with `npm run build` to check for errors
4. **Deploy** to Netlify
5. **Update regularly** with new projects and experience

Your website is production-ready and can be deployed right now!
