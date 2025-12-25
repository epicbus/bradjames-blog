# Editing Guide - Homepage & About Page

## Editing Homepage Content

The homepage intro text is in [app/page.tsx](app/page.tsx)

### Location: Lines 10-31

Open the file and find this section:

```typescript
<section className="mb-16">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Building an AI Marketing Team  {/* ← Edit this heading */}
  </h1>
  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
    Hi, I'm Brad. I'm a non-developer documenting my journey building AI agents
    to scale my marketing output and expertise.  {/* ← Edit this text */}
  </p>
```

### What You Can Change:

1. **Main heading** (`<h1>`): The big title at the top
2. **Intro paragraph** (`<p>`): Your introduction text
3. **Button text**: "Read the Blog" and "About Me" buttons

### Example Changes:

**Before:**
```typescript
<h1 className="text-4xl md:text-5xl font-bold mb-4">
  Building an AI Marketing Team
</h1>
```

**After:**
```typescript
<h1 className="text-4xl md:text-5xl font-bold mb-4">
  From Marketer to AI Builder
</h1>
```

**Important:** Don't change the parts like `className=` or the HTML tags (`<h1>`, `<p>`, etc.) - only change the text between the tags.

## Editing About Page

The about page content is in [app/about/page.tsx](app/about/page.tsx)

### Location: Lines 12-45

Open the file and find the content section:

```typescript
<h1 className="text-4xl font-bold mb-6">About Me</h1>
<div className="prose dark:prose-invert max-w-none">
  <p className="text-lg">
    Hi, I'm Brad James. I'm not a developer by trade...  {/* ← Edit this */}
  </p>

  <h2 className="text-2xl font-bold mt-8 mb-4">The Journey</h2>
  <p>
    This blog documents my journey...  {/* ← Edit this */}
  </p>
```

### What You Can Change:

1. **All paragraph text** (`<p>`)
2. **Section headings** (`<h2>`)
3. **List items** (`<li>`)

### Example Edit:

**Before:**
```typescript
<h2 className="text-2xl font-bold mt-8 mb-4">The Journey</h2>
<p>
  This blog documents my journey learning to build AI agents...
</p>
```

**After:**
```typescript
<h2 className="text-2xl font-bold mt-8 mb-4">My Story</h2>
<p>
  After 6 months teaching freediving in Greece, I returned to NZ determined
  to build location-independent income through AI and marketing...
</p>
```

## Tips for Editing

### DO:
- ✅ Change text between tags
- ✅ Add or remove paragraphs
- ✅ Update list items
- ✅ Save the file when done (Cmd+S)

### DON'T:
- ❌ Change `className="..."` attributes
- ❌ Remove or modify HTML tags (`<h1>`, `<p>`, `<div>`, etc.)
- ❌ Change the structure (the layout/spacing)
- ❌ Delete the `return` statement or curly braces

## After Editing

1. **Save the file** (Cmd+S)
2. **Check the preview** in your browser (should auto-refresh)
3. **If it looks good**, commit and push:
   - Open GitHub Desktop
   - You'll see the modified file
   - Add a commit message like "Update homepage intro"
   - Click "Commit to main"
   - Click "Push origin"

## Common Mistakes

### ❌ Wrong: Breaking the JSX
```typescript
<p>
  Hi I'm Brad
  This is my second line  {/* Missing proper structure */}
</p>
```

### ✅ Correct: Proper structure
```typescript
<p>
  Hi I'm Brad. This is my second line in the same paragraph.
</p>

<p>
  This is a new paragraph.
</p>
```

### ❌ Wrong: Removing required parts
```typescript
<h1>My Heading  {/* Missing closing tag */}
```

### ✅ Correct: Complete tags
```typescript
<h1 className="text-4xl font-bold mb-6">My Heading</h1>
```

## Need to Add Images?

If you want to add a profile photo or images to your about page:

1. Put the image in `public/images/`
2. Add it to your page:

```typescript
<img src="/images/your-photo.jpg" alt="Brad James" className="rounded-lg mb-6" />
```

For the circular profile photo used in blog posts, replace `public/images/profile.svg` with your own `profile.jpg` or `profile.png`.

## Getting Help

If something breaks:

1. **Undo your changes** (Cmd+Z)
2. **Check the browser console** (F12) for errors
3. **Restart the dev server**: Stop (Ctrl+C) and run `npm run dev` again
4. **Ask for help** - share the error message

## Quick Reference

| What to Edit | File | Lines |
|--------------|------|-------|
| Homepage heading | [app/page.tsx](app/page.tsx) | 11-13 |
| Homepage intro | [app/page.tsx](app/page.tsx) | 14-17 |
| About page | [app/about/page.tsx](app/about/page.tsx) | 12-45 |
| Blog posts | `content/blog/*.md` | All |

---

Remember: You can always look at the current files to see how things are structured, and you can always ask me for help!
