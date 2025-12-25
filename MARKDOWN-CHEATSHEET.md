# Markdown Cheat Sheet for Your Blog Posts

## Basic Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`Inline code`
```

**Result:**
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`Inline code`

## Headings

```markdown
## Main Section (use this most often)
### Subsection
#### Smaller subsection
```

**Note:** Don't use `#` (single hash) - that's reserved for your post title

## Lists

**Unordered:**
```markdown
- First item
- Second item
  - Nested item (indent with 2 spaces)
  - Another nested item
- Third item
```

**Ordered:**
```markdown
1. First step
2. Second step
3. Third step
```

## Links

```markdown
[Link text](https://example.com)
[Brad's website](https://bradjames.me)
```

## Images

```markdown
![Alt text description](/images/photo.jpg)
```

**To add an image:**
1. Put image in `public/images/` folder
2. Reference it: `![My screenshot](/images/screenshot.png)`

## Code Blocks

**Inline code:**
```markdown
Use `backticks` for inline code
```

**Code blocks with syntax highlighting:**

````markdown
```python
def greet(name):
    return f"Hello, {name}!"
```
````

**Supported languages:**
- python
- javascript
- typescript
- bash
- html
- css
- json
- And many more...

## Quotes

```markdown
> This is a quote or callout
> It can span multiple lines
```

**Result:**
> This is a quote or callout
> It can span multiple lines

## Horizontal Rule

```markdown
---
```

Creates a dividing line

## Tables

```markdown
| Feature | Status |
|---------|--------|
| Speed | Fast |
| Cost | Free |
```

**Result:**
| Feature | Status |
|---------|--------|
| Speed | Fast |
| Cost | Free |

## Complete Blog Post Template

```markdown
---
title: "How I Built My First SEO Agent"
date: "2025-12-25"
description: "A beginner's guide to building AI agents for SEO, even without coding experience"
author: "Brad James"
authorImage: "/images/profile.svg"
tags: ["AI", "SEO", "tutorial", "automation"]
pinned: false
---

## Introduction

Start with a hook. Why is this topic interesting? What will the reader learn?

In this post, I'll share how I built my first SEO agent in just 3 days, despite having zero coding experience just 6 months ago.

## The Problem

Describe the problem you were trying to solve.

I was spending 10+ hours per week on manual SEO tasks:
- Keyword research
- Content optimization
- Competitor analysis

## The Solution

Explain your approach or solution.

### Step 1: Research

I started by researching existing SEO tools and identifying gaps...

### Step 2: Planning

Next, I outlined what my agent needed to do:
1. Analyze current content
2. Identify optimization opportunities
3. Generate actionable recommendations

### Step 3: Building

Here's a snippet of code I used:

```python
def analyze_content(url):
    # Fetch content
    content = fetch_url(url)
    # Analyze for SEO
    return seo_score(content)
```

## The Results

Share outcomes, metrics, or learnings.

After implementing the agent:
- **Time saved:** 8 hours/week
- **Content quality:** Up 35%
- **Organic traffic:** +22% in 30 days

## Key Takeaways

Summarize the main points.

- You don't need to be a developer to build AI agents
- Start small and iterate
- Focus on solving real problems

## What's Next?

Tease future content or next steps.

In my next post, I'll show you exactly how to set up your own SEO agent from scratch...

---

*Have questions? Leave a comment below!*
```

## Tips for Writing

1. **Keep paragraphs short** - 2-3 sentences max
2. **Use headings liberally** - Makes content scannable
3. **Add code examples** - Readers love practical examples
4. **Include images/screenshots** - Break up text, show results
5. **End with a CTA** - Ask for comments, shares, or next action

## Common Mistakes to Avoid

❌ **Don't forget the front matter** (the part between `---`)
❌ **Don't use `#` for headings** (start with `##`)
❌ **Don't forget blank lines** between sections
❌ **Don't forget to close code blocks** with three backticks

## New Features: Tags, Pinned Posts & Author

### Front Matter Options

Your blog now supports these optional fields:

```markdown
---
title: "Required - Your post title"
date: "Required - YYYY-MM-DD format"
description: "Required - Brief summary for SEO"
author: "Optional - Defaults to 'Brad James'"
authorImage: "Optional - Path to profile image, defaults to /images/profile.svg"
tags: ["Optional", "array", "of", "tags"]
pinned: false  # Optional - Set to true to feature on homepage
---
```

### Using Tags

Tags help readers find related content:

```markdown
tags: ["AI", "SEO", "tutorial"]
```

- Use lowercase for consistency
- Keep them short (1-2 words)
- Limit to 3-5 tags per post
- Readers can click tags to see all posts with that tag

### Pinning a Post

To feature a post prominently on the homepage:

```markdown
pinned: true
```

**Important:** Only pin ONE post at a time. If multiple posts are pinned, only the first one will display.

### Custom Author Info

If you have guest posts or want to customize the author:

```markdown
author: "Guest Author Name"
authorImage: "/images/guest-author.jpg"
```

Put the author's profile image in `public/images/` first.

## SEO Tips for Blog Posts

1. **Title:** Make it compelling and include your main keyword
2. **Description:** Write a clear 1-2 sentence summary (shows in Google)
3. **Tags:** Use relevant tags for better categorization
4. **First paragraph:** Include your main keyword naturally
5. **Headings:** Use keywords in section headings
6. **Length:** Aim for 800+ words for SEO value
7. **Links:** Link to your other posts (internal linking)

## Testing Your Post

Before publishing, check:
- [ ] Front matter is complete and formatted correctly
- [ ] All images load (check paths)
- [ ] Code blocks have syntax highlighting
- [ ] Links work
- [ ] No typos in headings (they become URLs)
- [ ] Preview looks good locally (`npm run dev`)

## Examples of Good Posts

Look at `content/blog/getting-started.md` for a real example following these patterns.

---

Happy writing! 🚀
