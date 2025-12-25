import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Brad James",
  description: "Articles about building AI agents and marketing automation",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No posts yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-3 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {post.description}
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <time>{post.date}</time>
                <span>{post.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
