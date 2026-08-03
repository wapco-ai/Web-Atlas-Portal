"use client";

import { useEffect } from "react";

const repositoryPath = "/Web-Atlas-Portal";

export default function GitHubPagesNavigation() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      if (
        !href ||
        !href.startsWith("/") ||
        href.startsWith("//") ||
        href.startsWith(`${repositoryPath}/`) ||
        window.location.hostname !== "wapco-ai.github.io"
      ) {
        return;
      }

      event.preventDefault();
      window.location.href = `${repositoryPath}${href}`;
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}