import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags?: string[];
  pinned?: boolean;
  author?: string;
  authorImage?: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const now = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const filePath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        description: data.description || "",
        content,
        readingTime: stats.text,
        tags: data.tags || [],
        pinned: data.pinned || false,
        author: data.author || "Brad James",
        authorImage: data.authorImage || "/images/profile.svg",
      };
    })
    .filter((post) => post.date <= now) // Filter out future-dated posts
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const mdxPath = path.join(contentDirectory, `${slug}.mdx`);
    const mdPath = path.join(contentDirectory, `${slug}.md`);

    let filePath: string;
    if (fs.existsSync(mdxPath)) {
      filePath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      filePath = mdPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    const post = {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      description: data.description || "",
      content,
      readingTime: stats.text,
      tags: data.tags || [],
      pinned: data.pinned || false,
      author: data.author || "Brad James",
      authorImage: data.authorImage || "/images/profile.jpg",
    };

    // Don't return future-dated posts
    const now = new Date().toISOString().split("T")[0];
    if (post.date > now) {
      return null;
    }

    return post;
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getPinnedPost(): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  const pinnedPosts = posts.filter((post) => post.pinned);

  // Return the most recent pinned post (posts are already sorted by date)
  return pinnedPosts.length > 0 ? pinnedPosts[0] : null;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}
