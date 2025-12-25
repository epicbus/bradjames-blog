import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import Comments from "@/components/Comments";
import Newsletter from "@/components/Newsletter";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Brad James`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>

      <Newsletter />

      <div className="mt-12">
        <Comments />
      </div>
    </article>
  );
}
