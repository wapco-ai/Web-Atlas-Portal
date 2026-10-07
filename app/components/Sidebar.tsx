"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "./SiteLink";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const groups = [
  { href: "/", label: "خانه", icon: "⌂" },
  {
    href: "/about",
    label: "درباره ما",
    icon: "◉",
    children: [
      ["/about", "معرفی"],
      ["/customers", "مشتریان"],
    ],
  },
  {
    href: "/products",
    label: "محصولات",
    icon: "▦",
    children: [
      ["/products/mahar", "سامانه مهار"],
      ["/products/meraj", "سامانه رضوان"],
      ["/products/hami", "سامانه حامی"],
      ["/products/royesh", "سامانه رویش"],
    ],
  },
  { href: "/gis", label: "راهکارهای مکانی", icon: "◎" },
  { href: "/startups", label: "استارتاپ‌ها", icon: "✦" },
  { href: "/projects", label: "پروژه‌ها", icon: "◇" },
  { href: "/contact", label: "تماس و سفارش", icon: "✉" },
];

const SCROLL_KEY = "wapco-sidebar-scroll";
const EXPANDED_KEY = "wapco-sidebar-expanded";

function norm(p: string) {
  return p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p;
}

export default function Sidebar() {
  const rawPath = usePathname();
  const path = norm(rawPath);
  const [open, setOpen] = useState(false);

  const [expanded, setExpanded] = useState<string[]>(() => {
    if (typeof window === "undefined") return ["/about", "/products"];
    try {
      const raw = sessionStorage.getItem(EXPANDED_KEY);
      return raw ? JSON.parse(raw) : ["/about", "/products"];
    } catch {
      return ["/about", "/products"];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(EXPANDED_KEY, JSON.stringify(expanded));
    } catch {}
  }, [expanded]);

  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const saved = Number(sessionStorage.getItem(SCROLL_KEY) || "0");
    if (!Number.isNaN(saved) && saved > 0) el.scrollTop = saved;
  }, []);

  const onNavScroll = () => {
    const el = navRef.current;
    if (!el) return;
    try {
      sessionStorage.setItem(SCROLL_KEY, String(el.scrollTop));
    } catch {}
  };

  const toggle = (h: string) =>
    setExpanded((v) => (v.includes(h) ? v.filter((x) => x !== h) : [...v, h]));

  const isLinkActive = (href: string) => {
    if (href === "/") return path === "/";
    return path === href || path.startsWith(href + "/");
  };

  const isGroupActive = (g: (typeof groups)[number]) => {
    if (isLinkActive(g.href)) return true;
    if (g.children) return g.children.some(([h]) => isLinkActive(h));
    return false;
  };

  return (
    <>
      <button
        className="mobile-menu"
        onClick={() => setOpen(true)}
        aria-label="نمایش منو"
      >
        ☰
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <Link className="side-brand" href="/" onClick={() => setOpen(false)}>
          <img src="/assets/logo.png" alt="" />
          <span>
            <strong>وب اطلس پویا</strong>
            <small>راهکارهای مبتنی بر وب و GIS</small>
          </span>
        </Link>

        <nav
          className="side-scroll"
          ref={navRef as React.RefObject<HTMLElement>}
          onScroll={onNavScroll}
        >
          {groups.map((g) => {
            const active = isGroupActive(g);
            const isOpen = expanded.includes(g.href);

            return (
              <div className="nav-group" key={g.href}>
                <div className={`nav-main ${active ? "active" : ""}`}>
                  <Link href={g.href} onClick={() => setOpen(false)}>
                    <i>{g.icon}</i>
                    <span>{g.label}</span>
                  </Link>

                  {g.children && (
                    <button
                      type="button"
                      className={`nav-toggle ${isOpen ? "open" : ""}`}
                      aria-label={isOpen ? "بستن زیرمنو" : "باز کردن زیرمنو"}
                      aria-expanded={isOpen}
                      onClick={() => toggle(g.href)}
                    >
                      ⌄
                    </button>
                  )}
                </div>

                {g.children && (
                  <div className={`subnav ${isOpen ? "expanded" : ""}`}>
                    <div className="subnav-inner">
                      {g.children.map(([h, l]) => (
                        <Link
                          href={h}
                          key={h}
                          onClick={() => setOpen(false)}
                          className={isLinkActive(h) ? "active" : ""}
                        >
                          {l}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="side-bottom">
          <Link href="/contact">
            شروع همکاری <b>←</b>
          </Link>
          <small>info@wapco.ir</small>
        </div>
      </aside>

      <div
        className={`menu-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}