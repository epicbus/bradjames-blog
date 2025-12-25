import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByTag, getAllTags } from "@/lib/blog";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}" - Brad James`,
    description: `All blog posts about ${tag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-600 dark:text-gray-400 hover:underline mb-4 inline-block"
        >
          ← Back to all posts
        </Link>
        <h1 className="text-4xl font-bold mb-2">
          Posts tagged <span className="text-blue-600 dark:text-blue-400">#{tag}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </div>

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
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
              {post.tags && post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/blog/tag/${t}`}
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          t === tag
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        #{t}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
