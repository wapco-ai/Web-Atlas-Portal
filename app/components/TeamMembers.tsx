"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import Link from "./SiteLink";

type Member = {
  name: string;
  role: string;
  phone: string;
  img?: string; // Add your image path here later
};

const team: Member[] = [
  { name: "نام مدیرعامل", role: "مدیرعامل", phone: "۰۹۱۵ ۱۲۳ ۴۵۶۷" },
  { name: "نام همکار", role: "مدیر فنی", phone: "۰۹۱۵ ۲۳۴ ۵۶۷۸" },
  { name: "نام همکار", role: "مدیر محصول", phone: "۰۹۱۵ ۳۴۵ ۶۷۸۹" },
  { name: "عضو تیم", role: "توسعه نرم‌افزار", phone: "۰۹۱۵ ۴۵۶ ۷۸۹۰" },
  { name: "عضو تیم", role: "GIS و داده", phone: "۰۹۱۵ ۵۶۷ ۸۹۰۱" },
  { name: "عضو تیم", role: "پشتیبانی", phone: "۰۹۱۵ ۶۷۸ ۹۰۱۲" },
];

export default function TeamMembers() {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the tapped card if the user clicks anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setTappedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCardClick = (index: number) => {
    // Toggle: if it's already tapped, close it. Otherwise, open it.
    setTappedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        .tm-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: center;
          padding: 60px 0;
        }

        /* --- Left Side Text --- */
        .tm-overview {
          max-width: 420px;
        }
        .tm-overview h2 {
          font-size: clamp(28px, 3vw, 42px);
          color: #102635;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .tm-overview > a {
          display: inline-block;
          margin-bottom: 28px;
          color: #26d5a2;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: opacity .3s;
        }
        .tm-overview > a:hover { opacity: 0.7; }
        .tm-overview > a::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 2px;
          background-color: #26d5a2;
          vertical-align: middle;
          margin-left: 8px;
        }
        .tm-overview p {
          color: #6c7f86;
          line-height: 2.2;
          font-size: 14px;
        }

        /* --- Right Side Grid --- */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .tm-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #d8e2df;
          border-radius: 16px;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 28px rgba(11,56,35,0.04);
          transition: all .4s cubic-bezier(.22,.61,.36,1);
          cursor: pointer;
          overflow: hidden;
        }

        .tm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(11,56,35,0.10);
          border-color: #10485c;
        }

        /* Avatar Circle */
        .tm-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #f0f5f3;
          border: 2px dashed #b5cec5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 16px;
          transition: all .4s ease;
          overflow: hidden;
        }
        
        .tm-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tm-avatar svg {
          width: 40px;
          height: 40px;
          color: #9cbfb4;
        }

        /* Default Static Text */
        .tm-info-static h3 {
          font-size: 15px;
          color: #102635;
          margin: 0 0 4px;
          font-weight: 700;
        }
        .tm-info-static p {
          font-size: 12px;
          color: #7c8d88;
          margin: 0;
        }

        /* Hover / Tap Overlay - Slides up to the middle */
        .tm-info-hover {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 55%; /* Stops exactly at the middle */
          background: linear-gradient(135deg, #10485c, #0b293e);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 16px;
          transform: translateY(100%);
          transition: transform .4s cubic-bezier(.22,.61,.36,1);
          z-index: 2;
        }

        .tm-info-hover h3 {
          color: #fff;
          font-size: 16px;
          margin: 0 0 4px;
          font-weight: 700;
        }
        .tm-info-hover p {
          color: #26d5a2;
          font-size: 12px;
          margin: 0 0 10px;
          font-weight: 600;
        }
        .tm-info-hover .phone {
          color: #e6f1f4;
          font-size: 12px;
          font-weight: 500;
          background: rgba(255,255,255,0.1);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
          direction: ltr;
        }

        /* Hover States */
        .tm-card:hover .tm-info-hover,
        .tm-card.tapped .tm-info-hover {
          transform: translateY(0);
        }

        .tm-card:hover .tm-avatar,
        .tm-card.tapped .tm-avatar {
          transform: translateY(-10px);
          opacity: 0.5;
        }

        /* --- Responsive --- */
        @media (max-width: 992px) {
          .tm-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 0;
          }
          .tm-overview {
            text-align: center;
            margin: 0 auto;
          }
          .tm-overview > a::before { display: none; }
        }

        @media (max-width: 640px) {
          .tm-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .tm-card { height: 200px; }
          .tm-avatar { width: 70px; height: 70px; margin-top: 24px; }
          .tm-info-hover h3 { font-size: 14px; }
          .tm-info-hover p { font-size: 11px; }
          .tm-info-hover .phone { font-size: 10px; padding: 4px 10px; }
        }

        @media (max-width: 400px) {
          .tm-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="tm-container" ref={containerRef}>
        {/* LEFT: Text */}
        <div className="tm-overview">
          <h2>تیم ما چه کسانی هستند؟</h2>
          <p>
            تیم وب اطلس پویا متشکل از متخصصانی است که با عشق به فناوری و طراحی، در کنار
            یکدیگر راهکارهای هوشمندانه‌ای برای چالش‌های سازمانی خلق می‌کنند. ما با تکیه
            بر تجربه و دانش خود، سامانه‌هایی می‌سازیم که مدیریت را آسان‌تر و تصمیم‌گیری
            را دقیق‌تر می‌کند.
          </p>
        </div>

        {/* RIGHT: Grid */}
        <div className="tm-grid">
          {team.map((m, i) => {
            const isTapped = tappedIndex === i;
            return (
              <div
                key={i}
                className={`tm-card ${isTapped ? "tapped" : ""}`}
                onClick={() => handleCardClick(i)}
              >
                {/* Empty Uniform Avatar */}
                <div className="tm-avatar">
                  {m.img ? (
                    <img src={m.img} alt={m.name} />
                  ) : (
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>

                {/* Static Text */}
                <div className="tm-info-static">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>

                {/* Hover Overlay */}
                <div className="tm-info-hover">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                  <div className="phone">{m.phone}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}