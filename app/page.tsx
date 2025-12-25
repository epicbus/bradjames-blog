import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building an AI Marketing Team
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Hi, I'm Brad. I'm a non-developer documenting my journey building AI agents
          to scale my marketing output and expertise.
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="border border-black dark:border-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <article key={post.slug} className="border-b pb-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {post.description}
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <time>{post.date}</time>
                  <span>{post.readingTime}</span>
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all posts →
          </Link>
        </section>
      )}
    </div>
  );
}
