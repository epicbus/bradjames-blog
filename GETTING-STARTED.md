# Getting Started with Your Blog

Welcome! Your blog is ready to go. Here's everything you need to know.

## 📁 What You Have

Your blog is now set up at: `/Users/bradjames/AI Experiments/bradjames-blog/`

### Key Files & Folders

```
bradjames-blog/
├── content/blog/          ← YOUR BLOG POSTS GO HERE
│   └── getting-started.md (example post)
├── public/images/         ← YOUR IMAGES GO HERE
├── app/                   (website pages - don't touch)
├── components/            (reusable pieces - don't touch)
├── lib/                   (helper code - don't touch)
└── Documentation files ↓
    ├── README.md          (Main documentation)
    ├── QUICK-START.md     (Quick reference)
    ├── DEPLOYMENT.md      (How to deploy)
    └── MARKDOWN-CHEATSHEET.md (Writing help)
```

## 🚀 Next Steps (In Order)

### 1. Install Dependencies (One-Time Setup)

Open Terminal and run:

```bash
cd "/Users/bradjames/AI Experiments/bradjames-blog"
npm install
```

This downloads all the code libraries your blog needs. Takes about 2-3 minutes.

**Note:** You might need to fix npm permissions first. If the install fails, you may need to run some permission fixes.

### 2. Preview Your Blog Locally

```bash
cd "/Users/bradjames/AI Experiments/bradjames-blog"
npm run dev
```

Open your browser to: http://localhost:3000

You'll see your blog running on your laptop! Press `Ctrl+C` to stop.

### 3. Push to GitHub

**Option A: Using GitHub Desktop (Recommended)**

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. File → Add Local Repository
4. Navigate to the blog folder
5. Click "Publish repository"
6. Uncheck "Keep this code private"
7. Click "Publish Repository"

**Option B: Using Terminal**

```bash
# First, create a new repository on github.com
# Then run:
cd "/Users/bradjames/AI Experiments/bradjames-blog"
git remote add origin https://github.com/YOUR_USERNAME/bradjames-blog.git
git push -u origin main
```

### 4. Deploy to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Import `bradjames-blog`
5. Click "Deploy" (don't change any settings)
6. Wait 2-3 minutes
7. Your blog is live! 🎉

### 5. Connect Your Domain

In Vercel:
1. Go to your project → Settings → Domains
2. Add `bradjames.me`
3. Follow the DNS instructions for your domain registrar
4. Wait 24-48 hours for DNS to propagate

### 6. Enable Comments (Optional)

1. On GitHub, go to your repository
2. Settings → Features → Enable "Discussions"
3. Visit https://giscus.app
4. Follow the setup wizard
5. Update `components/Comments.tsx` with your config

### 7. Set Up Newsletter (Optional)

Choose one:
- **ConvertKit** (free up to 1000 subscribers): https://convertkit.com
- **Beehiiv** (free forever): https://beehiiv.com

Follow instructions in [README.md](README.md) to integrate.

## ✍️ Daily Workflow: Writing Posts

This is what you'll do regularly:

1. **Create new file** in `content/blog/` (e.g., `my-post.md`)
2. **Add front matter:**
   ```markdown
   ---
   title: "My Post Title"
   date: "2025-12-25"
   description: "Short description"
   ---
   ```
3. **Write your content** using Markdown
4. **Save the file**
5. **Commit & Push** via GitHub Desktop
6. **Wait 2 minutes** → Post is live!

## 📚 Documentation Quick Links

- **[README.md](README.md)** - Full documentation
- **[QUICK-START.md](QUICK-START.md)** - Quick reference
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide
- **[MARKDOWN-CHEATSHEET.md](MARKDOWN-CHEATSHEET.md)** - Writing help

## 🆘 Common Issues

### "npm: command not found"
You need to install Node.js: https://nodejs.org (download LTS version)

### "Permission denied" when running npm
You may need to fix npm permissions. Ask for help with this specific error.

### Local preview not working
Make sure you ran `npm install` first

### Changes not appearing on live site
- Did you commit and push?
- Check Vercel dashboard for deployment status
- Deployments take 1-2 minutes

### Blog post not showing up
- Check front matter format (needs `---` lines)
- File must be in `content/blog/`
- File must end in `.md` or `.mdx`

## 💰 Cost Summary

- **Hosting (Vercel)**: $0/month
- **Version Control (GitHub)**: $0/month
- **Analytics (Vercel)**: $0/month
- **Comments (Giscus)**: $0/month
- **Newsletter (ConvertKit/Beehiiv free tier)**: $0/month
- **Domain (bradjames.me)**: Already owned

**Total: $0/month** ✅

## 🎯 What Makes This Setup Great

- ✅ **Zero cost** - Completely free to run
- ✅ **Lightning fast** - Next.js optimization + Vercel CDN
- ✅ **SEO-optimized** - Sitemap, metadata, semantic HTML
- ✅ **Simple workflow** - Just write Markdown files
- ✅ **Auto-deploy** - Push to GitHub = automatic deployment
- ✅ **Scalable** - Can handle viral traffic without changes
- ✅ **Modern stack** - Built with latest tech
- ✅ **Future-proof** - Easy to add features later

## 🔮 Future Enhancements You Can Add

When you're ready:
- Search functionality
- Tags/categories for posts
- RSS feed
- Social share buttons
- Related posts
- Table of contents
- Reading progress bar
- Dark mode toggle (currently auto-detects)

## 💡 Tips for Success

1. **Write consistently** - Even short posts are valuable
2. **Focus on SEO** - Use keywords naturally in titles and headings
3. **Add images** - Visual content increases engagement
4. **Share your posts** - Use the blog as SEO test case
5. **Learn from analytics** - Check what content performs

## 🤝 Need Help?

You can always ask me to:
- Add new features
- Customize the design
- Fix issues
- Explain how something works
- Optimize for SEO

## ✨ You're All Set!

Your blog is production-ready. The only thing left to do is:
1. Run `npm install`
2. Preview it locally
3. Push to GitHub
4. Deploy to Vercel
5. Start writing!

Happy blogging! 🚀
