# Brad James Blog

A fast, SEO-optimized personal blog built with Next.js to document my journey building AI agents for marketing.

## Features

- **Fast & SEO-Optimized** - Built with Next.js for excellent performance
- **Markdown/MDX Blog Posts** - Write posts in simple Markdown format
- **Syntax Highlighting** - Code blocks are automatically highlighted
- **Comments** - Integrated with Giscus (GitHub Discussions)
- **Newsletter** - Email signup form (ready to integrate with ConvertKit/Beehiiv)
- **Analytics** - Vercel Analytics built-in
- **Responsive Design** - Works perfectly on all devices
- **Dark Mode Support** - Automatically respects system preferences

## Project Structure

```
bradjames-blog/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Individual blog post pages
│   │   └── page.tsx       # Blog listing page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout (header, footer)
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Comments.tsx       # Giscus comments
│   └── Newsletter.tsx     # Email signup form
├── content/               # Your blog content
│   └── blog/              # Blog posts go here
│       └── *.md           # Markdown files
├── lib/                   # Utility functions
│   └── blog.ts            # Blog post utilities
└── public/                # Static files (images, etc.)
```

## How to Add a New Blog Post

This is the main thing you'll be doing regularly. It's simple:

### Step 1: Create a New File

1. Go to the `content/blog/` folder
2. Create a new file with a `.md` extension
3. Name it something descriptive (e.g., `my-first-seo-agent.md`)

### Step 2: Add Front Matter

At the top of your file, add this metadata:

```markdown
---
title: "Your Post Title Here"
date: "2025-12-25"
description: "A brief description for SEO and previews"
---

Your blog post content starts here...
```

### Step 3: Write Your Content

Write your post using Markdown. Here are some examples:

```markdown
## Headings

Use ## for main sections, ### for subsections

## Lists

- Bullet point one
- Bullet point two

1. Numbered item
2. Another item

## Code Blocks

```python
def hello_world():
    print("Hello, World!")
```

## Links

[Link text](https://example.com)

## Images

![Alt text](/images/my-image.png)
```

### Step 4: Save and Publish

That's it! Save the file and your post will appear on the blog.

## Publishing Your Changes

You'll use **GitHub Desktop** for this (no terminal needed):

1. Open GitHub Desktop
2. You'll see your new blog post file listed
3. Add a commit message (e.g., "Add new blog post about SEO agents")
4. Click "Commit to main"
5. Click "Push origin"
6. Your site will automatically deploy in ~2 minutes

## Local Development

To preview your blog locally before publishing:

### First Time Setup

1. Open Terminal (don't worry, just copy/paste these commands)
2. Navigate to your blog folder:
   ```bash
   cd "/Users/bradjames/AI Experiments/bradjames-blog"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Every time you want to preview:

```bash
cd "/Users/bradjames/AI Experiments/bradjames-blog"
npm run dev
```

Then open your browser to: http://localhost:3000

Press `Ctrl+C` in the terminal to stop the preview.

## Deployment to Vercel

### One-Time Setup

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your `bradjames-blog` repository
4. Click "Deploy" (Vercel will auto-detect Next.js settings)
5. Once deployed, add your custom domain `bradjames.me` in Project Settings → Domains

### After Setup

Every time you push to GitHub (using GitHub Desktop), Vercel automatically:
- Builds your site
- Deploys it to bradjames.me
- Usually takes 1-2 minutes

## Customization Guide

### Enable Comments

1. Go to your blog's GitHub repository
2. Go to Settings → Features → Check "Discussions"
3. Go to Discussions and create a new category called "Comments"
4. Visit [giscus.app](https://giscus.app)
5. Follow the setup and copy your configuration
6. Update `components/Comments.tsx` with your repo details

### Enable Newsletter

Option 1: **ConvertKit** (Free for up to 1000 subscribers)
1. Sign up at convertkit.com
2. Create a form
3. Get your API key and Form ID
4. Update `components/Newsletter.tsx` with integration code

Option 2: **Beehiiv** (Free forever)
1. Sign up at beehiiv.com
2. Create an embed form
3. Replace the Newsletter component with their embed code

### Adding Images

1. Put images in the `public/images/` folder
2. Reference them in your posts:
   ```markdown
   ![Description](/images/my-photo.jpg)
   ```

### Changing Colors/Design

Edit `app/globals.css` or the Tailwind classes in component files.

## Common Tasks Cheat Sheet

| Task | What to Do |
|------|------------|
| Write new post | Create file in `content/blog/` |
| Add images | Put in `public/images/` |
| Preview locally | `npm run dev` |
| Publish changes | Commit + Push in GitHub Desktop |
| Check if live | Wait 2 min, visit bradjames.me |

## Getting Help

- **Next.js Docs**: https://nextjs.org/docs
- **Markdown Guide**: https://www.markdownguide.org/
- **GitHub Desktop Guide**: https://docs.github.com/en/desktop

## Cost Breakdown

- **Domain (bradjames.me)**: Already owned
- **Hosting (Vercel)**: $0/month
- **Analytics (Vercel)**: $0/month
- **Comments (Giscus)**: $0/month
- **Newsletter (ConvertKit free tier)**: $0/month (up to 1000 subscribers)

**Total: $0/month** 🎉

## Need to Make Changes?

If you want to modify the design, add new features, or customize anything, just ask! The codebase is simple and well-organized.
