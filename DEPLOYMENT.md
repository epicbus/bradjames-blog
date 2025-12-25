# Deployment Guide - Getting Your Blog Live

## Step 1: Push to GitHub

### If you haven't created a GitHub repository yet:

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `bradjames-blog`
4. Keep it **Public** (required for free Giscus comments)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Connect your local repository to GitHub:

**Using GitHub Desktop (Easiest):**

1. Open GitHub Desktop
2. Click "File" → "Add Local Repository"
3. Navigate to `/Users/bradjames/AI Experiments/bradjames-blog`
4. Click "Add Repository"
5. Click "Publish repository" at the top
6. Uncheck "Keep this code private" (for free features)
7. Click "Publish Repository"

**Using Terminal (Alternative):**

```bash
cd "/Users/bradjames/AI Experiments/bradjames-blog"
git remote add origin https://github.com/YOUR_USERNAME/bradjames-blog.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### First-Time Deployment:

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Add New..." → "Project"
5. Find `bradjames-blog` and click "Import"
6. **Don't change any settings** - Vercel auto-detects Next.js
7. Click "Deploy"
8. Wait 2-3 minutes ⏱️
9. 🎉 Your blog is live at `your-project.vercel.app`

### Add Your Custom Domain:

1. In your Vercel project, go to "Settings" → "Domains"
2. Type: `bradjames.me`
3. Click "Add"
4. Vercel will show you DNS records to add
5. Go to your domain registrar (where you bought bradjames.me)
6. Add the DNS records Vercel provides:
   - Usually an A record pointing to Vercel's IP
   - Or a CNAME record pointing to your Vercel URL
7. Wait 24-48 hours for DNS to propagate (usually faster)
8. Your blog will be live at `https://bradjames.me`

## Step 3: Enable Comments (Optional but Recommended)

1. Go to your GitHub repository: `github.com/YOUR_USERNAME/bradjames-blog`
2. Click "Settings" tab
3. Scroll to "Features" section
4. Check ✅ "Discussions"
5. Go to "Discussions" tab
6. Click "Categories" → "New category"
7. Name: "Comments", Choose "Announcement" type
8. Go to [giscus.app](https://giscus.app)
9. Fill in:
   - Repository: `YOUR_USERNAME/bradjames-blog`
   - Enable discussions
   - Choose "Announcement" type
   - Choose mapping: "Discussion title contains page pathname"
10. Copy the configuration values from the generated code
11. Open `components/Comments.tsx` in VS Code
12. Replace the placeholder values:
    ```typescript
    data-repo="YOUR_USERNAME/bradjames-blog"
    data-repo-id="YOUR_REPO_ID_FROM_GISCUS"
    data-category-id="YOUR_CATEGORY_ID_FROM_GISCUS"
    ```
13. Save, commit, and push to deploy

## Step 4: Set Up Newsletter (Optional)

### Option A: ConvertKit (Free up to 1,000 subscribers)

1. Sign up at [convertkit.com](https://convertkit.com)
2. Create a new form
3. Go to Settings → Advanced → API
4. Copy your API Secret
5. Update `components/Newsletter.tsx` with the ConvertKit API integration

### Option B: Beehiiv (Free forever plan)

1. Sign up at [beehiiv.com](https://beehiiv.com)
2. Create a publication
3. Go to "Grow" → "Embeds"
4. Copy the embed code
5. Replace the Newsletter component with the Beehiiv embed

## Automatic Deployments

Now that everything is connected:

1. Write a new blog post in `content/blog/`
2. Commit and push using GitHub Desktop
3. Vercel automatically detects the change
4. Builds and deploys in ~2 minutes
5. Your changes are live at bradjames.me

## Vercel Dashboard

Check your deployments at: [vercel.com/dashboard](https://vercel.com/dashboard)

You can see:
- Deployment status
- Build logs (if something goes wrong)
- Analytics (page views, visitors, etc.)
- Performance metrics

## Troubleshooting

**Deployment failed?**
- Check the build logs in Vercel dashboard
- Usually it's a missing dependency or typo

**Domain not working?**
- DNS can take 24-48 hours
- Check your registrar's DNS settings
- Use Vercel's DNS checker

**Comments not showing?**
- Make sure repository is public
- Check GitHub Discussions are enabled
- Verify giscus configuration values

**Analytics not working?**
- It's enabled by default on Vercel
- Can take a few hours to start showing data

## Environment Variables (If Needed Later)

If you need to add API keys (for newsletter, etc.):

1. In Vercel dashboard, go to your project
2. Settings → Environment Variables
3. Add your variables
4. Redeploy (Production → ⋮ → Redeploy)

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Giscus Setup**: https://giscus.app

## Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain connected
- [ ] DNS configured
- [ ] Comments enabled (optional)
- [ ] Newsletter integrated (optional)
- [ ] First blog post published

You're all set! 🚀
