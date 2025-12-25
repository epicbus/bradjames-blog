"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with your newsletter service (ConvertKit, Beehiiv, etc.)
    // For now, this is a placeholder
    console.log("Newsletter signup:", email);

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold mb-2">Subscribe to the Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Get notified when I publish new posts about AI, marketing, and building stuff.
      </p>

      {status === "success" ? (
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded">
          Thanks for subscribing! Check your email to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
