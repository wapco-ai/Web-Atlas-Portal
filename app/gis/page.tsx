"use client";

import React, { useState } from "react";
import Link from "../components/SiteLink";
import { gisSolutions } from "../lib/content";

const MAX_VISIBILITY = 3;

function GisCarousel({
  children,
  active,
}: {
  children: React.ReactNode;
  active: number;
}) {
  return (
    <div className="gis3d-carousel">
      {React.Children.map(children, (child, i) => (
        <div
          className="gis3d-card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display:
                Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default function Gis() {
  const count = gisSolutions.length;
  const [active, setActive] = useState(Math.floor(count / 2));

  return (
    <>
      <style>{`
        /* ================= BASE (desktop) ================= */
        .gis3d-stage {
          --card-w: min(23rem, 60vw);
          --card-h: var(--card-w);
          --arrow-col: 90px;   /* reserved column width on each side */

          position: relative;
          padding: 90px var(--arrow-col) 110px;
          display: flex;
          justify-content: center;
          align-items: center;
          background:rgb(116, 136, 142);
          overflow: hidden;
        }

        .gis3d-carousel {
          position: relative;
          width: var(--card-w);
          height: var(--card-h);
          perspective: 500px;
          transform-style: preserve-3d;
        }

        .gis3d-card-container {
          position: absolute;
          width: 100%;
          height: 100%;
          transform:
            rotateY(calc(var(--offset) * 50deg))
            scaleY(calc(1 + var(--abs-offset) * -0.4))
            translateZ(calc(var(--abs-offset) * -30rem))
            translateX(calc(var(--direction) * -5rem));
          filter: blur(calc(var(--abs-offset) * 1rem));
          transition: all 0.3s ease-out;
        }

        .gis3d-card {
          width: 100%;
          height: 100%;
          padding: 30px;
          background: #ffffff;
          border: 1px solid #d8e2df;
          border-radius: 1rem;
          color: #6c7f86;
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: all 0.3s ease-out;
          text-decoration: none;
          box-shadow: 0 10px 30px #0b382318;
          overflow: hidden;
        }
        .gis3d-card:hover {
          border-color: #26d5a2;
          box-shadow: 0 0 30px #22d0a51c;
        }
        .gis3d-card i {
          font-size: 40px;
          color: #20a57f;
          font-style: normal;
          line-height: 1;
        }
        .gis3d-card small {
          position: absolute;
          left: 25px;
          top: 30px;
          color: #9aada6;
          font-size: 10px;
        }
        .gis3d-card h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 0.5em;
          color: #102635;
          text-align: center;
        }
        .gis3d-card p {
          font-size: 12px;
          line-height: 2;
          color: #6c7f86;
          text-align: justify;
          margin: 0;
        }
        .gis3d-card b {
          color: #179172;
          font-size: 11px;
          font-weight: 800;
          margin-top: 18px;
        }
        .gis3d-card p,
        .gis3d-card h2,
        .gis3d-card i,
        .gis3d-card b {
          opacity: var(--active);
          transition: all 0.3s ease-out;
        }

        /* ---- Arrows: positioned inside the reserved side columns ---- */
        .gis3d-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          background: #ffffff;
          color: #0b293e;
          border: 1px solid #d8e2df;
          box-shadow: 0 8px 24px #0b382322;
          padding: 0;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gis3d-nav:hover {
          background: #26d5a2;
          color: #062218;
          border-color: #26d5a2;
          box-shadow: 0 0 26px #22d0a555;
        }
        /* RTL: prev (قبلی) on the right, next (بعدی) on the left.
           Each arrow is centered inside its reserved column. */
        .gis3d-left {
          right: calc((var(--arrow-col) - 4px) / 2);
        }
        .gis3d-right {
          left: calc((var(--arrow-col) - 4px) / 2);
        }

        /* ================= Laptop ================= */
        @media (max-width: 1200px) {
          .gis3d-stage {
            --card-w: min(22rem, 58vw);
            --arrow-col: 80px;
          }
          .gis3d-nav { width: 52px; height: 52px; }
          .gis3d-left  { right: calc((var(--arrow-col) - 52px) / 2); }
          .gis3d-right { left:  calc((var(--arrow-col) - 52px) / 2); }
        }

        /* ================= iPad ================= */
        @media (max-width: 1024px) {
          .gis3d-stage {
            --card-w: min(20rem, 56vw);
            --arrow-col: 72px;
            padding-top: 70px;
            padding-bottom: 90px;
          }
          .gis3d-nav { width: 48px; height: 48px; }
          .gis3d-left  { right: calc((var(--arrow-col) - 48px) / 2); }
          .gis3d-right { left:  calc((var(--arrow-col) - 48px) / 2); }
          .gis3d-card { padding: 24px; }
          .gis3d-card h2 { font-size: 20px; }
          .gis3d-card p { font-size: 11.5px; line-height: 1.9; }
        }

        /* ================= Small tablets ================= */
        @media (max-width: 820px) {
          .gis3d-stage {
            --card-w: min(18rem, 60vw);
            --arrow-col: 64px;
            padding-top: 55px;
            padding-bottom: 75px;
          }
          .gis3d-nav { width: 44px; height: 44px; }
          .gis3d-left  { right: calc((var(--arrow-col) - 44px) / 2); }
          .gis3d-right { left:  calc((var(--arrow-col) - 44px) / 2); }
          .gis3d-card i { font-size: 34px; }
          .gis3d-card small { left: 18px; top: 20px; }
          .gis3d-card h2 { font-size: 18px; }
        }

        /* ================= Phones: portrait card ================= */
        @media (max-width: 640px) {
          .gis3d-stage {
            --card-w: min(17rem, 62vw);
            --card-h: calc(var(--card-w) * 1.25);
            --arrow-col: 56px;
            padding: 45px var(--arrow-col) 65px;
          }
          .gis3d-nav { width: 42px; height: 42px; }
          .gis3d-left  { right: calc((var(--arrow-col) - 42px) / 2); }
          .gis3d-right { left:  calc((var(--arrow-col) - 42px) / 2); }
          .gis3d-card { padding: 22px; }
          .gis3d-card i { font-size: 32px; }
          .gis3d-card small { left: 18px; top: 18px; font-size: 9px; }
          .gis3d-card h2 { font-size: 17px; margin-bottom: 0.45em; }
          .gis3d-card p { font-size: 11px; line-height: 1.9; text-align: right; }
          .gis3d-card b { font-size: 10px; margin-top: 14px; }
        }

        /* ================= Small phones ================= */
        @media (max-width: 480px) {
          .gis3d-stage {
            --card-w: min(15.5rem, 62vw);
            --card-h: calc(var(--card-w) * 1.3);
            --arrow-col: 50px;
            padding: 34px var(--arrow-col) 55px;
          }
          .gis3d-nav { width: 38px; height: 38px; }
          .gis3d-left  { right: calc((var(--arrow-col) - 38px) / 2); }
          .gis3d-right { left:  calc((var(--arrow-col) - 38px) / 2); }
          .gis3d-card { padding: 18px; }
          .gis3d-card i { font-size: 28px; }
          .gis3d-card h2 { font-size: 15.5px; }
          .gis3d-card p { font-size: 10.5px; line-height: 1.8; }
          .gis3d-card b { font-size: 10px; margin-top: 12px; }
        }
      `}</style>

      <header className="page-hero compact">
        <span className="eyebrow">راهکارهای مکانی / GIS</span>
        <h1>مکان، لایه مشترک همه تصمیم‌ها</h1>
        <p>
          راهکارهای مکانی وب اطلس پویا اطلاعات سازمان را روی نقشه به یک ابزار تحلیل و
          مدیریت تبدیل می‌کنند.
        </p>
      </header>

      <section className="gis3d-stage">
        {active < count + 1 && (
          <button
            className="gis3d-nav gis3d-left"
            aria-label="قبلی"
            onClick={() => setActive((i) => i - 1)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        <GisCarousel active={active}>
          {gisSolutions.map((g, i) => (
            <Link
              href={`/gis/${g.slug}`}
              className="gis3d-card"
              key={g.slug}
            >
              <i>{g.icon}</i>
              <small>0{i + 1}</small>
              <h2>{g.title}</h2>
              <p>{g.desc}</p>
              <b>مشاهده راهکار ←</b>
            </Link>
          ))}
        </GisCarousel>

        {active > 0 && (
          <button
            className="gis3d-nav gis3d-right"
            aria-label="بعدی"
            onClick={() => setActive((i) => i - 1)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
      </section>
    </>
  );
}