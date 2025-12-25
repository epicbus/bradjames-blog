# Quick Start Guide - Brad James Blog

## Your Simplified Workflow

### Writing a New Blog Post

1. **Open the project in VS Code**
   - Navigate to `content/blog/`

2. **Create a new file**
   - Click "New File" button
   - Name it: `your-post-title.md` (use hyphens, not spaces)

3. **Copy this template:**

```markdown
---
title: "Your Amazing Post Title"
date: "2025-12-25"
description: "A one-sentence description of what this post is about"
---

## Introduction

Your first paragraph here...

## Main Point

More content here...

### Sub-section

Even more detail...

## Conclusion

Wrap it up here.
```

4. **Write your content** using Markdown
   - `##` for headings
   - `-` for bullet points
   - Blank line between paragraphs

5. **Save the file** (Cmd+S)

### Publishing Your Post

**Using GitHub Desktop (Easiest):**

1. Open GitHub Desktop
2. You'll see your new file listed on the left
3. In the bottom left:
   - Summary: "Add new blog post"
   - Description: (optional)
4. Click "Commit to main"
5. Click "Push origin" at the top
6. Done! Your site updates automatically in ~2 minutes

**First Time Only:** If you don't have GitHub Desktop:
- Download from: https://desktop.github.com
- Sign in with GitHub
- Clone your repository

### Checking Your Work

**Before publishing:**
```bash
cd "/Users/bradjames/AI Experiments/bradjames-blog"
npm run dev
```
Open: http://localhost:3000

**After publishing:**
Wait 2-3 minutes, then visit: https://bradjames.me

## Common Markdown Syntax

```markdown
# Big Heading (don't use - reserved for title)
## Section Heading
### Subsection

**bold text**
*italic text*

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://url.com)

![Image alt text](/images/photo.jpg)

`inline code`

```python
# Code block
def function():
    return "code"
```
```

## Troubleshooting

**Q: My post isn't showing up**
- Check the front matter format (needs the --- lines)
- Make sure the file is in `content/blog/`
- Check the date isn't in the future

**Q: The site looks broken locally**
- Run `npm install` first
- Make sure you're in the right folder

**Q: I pushed but the site didn't update**
- Wait 2-3 minutes
- Check Vercel dashboard for deployment status

**Q: I want to delete a post**
- Just delete the `.md` file
- Commit and push the change

## That's It!

You now know everything you need to:
1. Write posts
2. Publish them
3. Grow your blog

The more you do it, the faster it gets. You'll be publishing in under 5 minutes soon.
