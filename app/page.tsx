import Link from "next/link";
import { getAllPosts, getPinnedPost } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();
  const pinnedPost = await getPinnedPost();

  // Filter out pinned post from latest posts
  const latestPosts = posts
    .filter((post) => !post.pinned)
    .slice(0, 3);

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

      {pinnedPost && (
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
              </svg>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase">
                Featured Post
              </span>
            </div>
            <Link href={`/blog/${pinnedPost.slug}`}>
              <h3 className="text-2xl font-bold mb-3 hover:underline">
                {pinnedPost.title}
              </h3>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {pinnedPost.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <time>{pinnedPost.date}</time>
              <span>•</span>
              <span>{pinnedPost.readingTime}</span>
            </div>
          </div>
        </section>
      )}

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
