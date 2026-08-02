"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [["/", "خانه", "⌂"], ["/services", "خدمات", "◈"], ["/projects", "پروژه‌ها", "▦"], ["/startups", "محصولات", "✦"], ["/about", "درباره ما", "◉"], ["/contact", "تماس", "✉"]];

export default function Sidebar() {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  return <><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="نمایش منو">{open ? "×" : "☰"}</button><aside className={`sidebar ${open ? "open" : ""}`}>
    <Link className="side-brand" href="/" onClick={() => setOpen(false)}><img src="/assets/logo.png" alt="" /><span><strong>وب اطلس پویا</strong><small>راهکارهای هوشمند شهری</small></span></Link>
    <nav>{items.map(([href,label,icon]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}><i>{icon}</i><span>{label}</span></Link>)}</nav>
    <div className="side-bottom"><Link href="/contact">گفت‌وگو با ما <b>←</b></Link><small>© ۱۴۰۵ وب اطلس پویا</small></div>
  </aside><div className={`menu-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} /> </>;
}
