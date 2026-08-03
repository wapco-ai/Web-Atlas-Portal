"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const repositoryPath = "/Web-Atlas-Portal";

function getSiteHref(href: string) {
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "wapco-ai.github.io" &&
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !href.startsWith(`${repositoryPath}/`)
  ) {
    return `${repositoryPath}${href}`;
  }

  return href;
}

export default function SiteLink({
  href,
  children,
  onClick,
  ...props
}: SiteLinkProps) {
  const [resolvedHref, setResolvedHref] = useState(href);

  useEffect(() => {
    setResolvedHref(getSiteHref(href));
  }, [href]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) return;

    const destination = getSiteHref(href);

    if (destination !== href) {
      event.preventDefault();
      window.location.assign(destination);
    }
  }

  return (
    <a href={resolvedHref} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}