"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "epicbus/bradjames-blog");
    script.setAttribute("data-repo-id", "R_kgDOQuswQQ");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOQuswQc4C0Ozn");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    commentsRef.current.appendChild(script);
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <div ref={commentsRef} />
    </div>
  );
}
