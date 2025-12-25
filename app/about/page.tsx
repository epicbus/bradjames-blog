import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Brad James",
  description: "Learn about my journey building AI agents for marketing",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Hi, I'm Brad James. I'm not a developer by trade, but I'm on a mission
          to build an AI-powered marketing team that can scale my output and expertise.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Journey</h2>
        <p>
          This blog documents my journey learning to build AI agents, automation
          workflows, and tools that amplify what one person can accomplish. I'm
          sharing the wins, the failures, and everything I learn along the way.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What I'm Building</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>SEO-focused AI agents</li>
          <li>Content creation workflows</li>
          <li>Marketing automation systems</li>
          <li>Tools that help non-developers like me build with AI</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Share This?</h2>
        <p>
          I believe the future of work is about leveraging AI to do more, not about
          replacing humans. By sharing my journey as a non-developer, I hope to
          inspire others who want to build but think they can't because they don't
          have a technical background.
        </p>

        <p className="mt-6">
          Follow along as I learn, build, and experiment with AI in the marketing world.
        </p>
      </div>
    </div>
  );
}
