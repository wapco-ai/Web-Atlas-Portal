"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Gallery3D({
  images = [],
  title = "",
}: {
  images?: string[];
  title?: string;
}) {
  const [angle, setAngle] = useState(0);

  if (!Array.isArray(images) || images.length === 0) return null;

  // Angle between images on the ring
  const step = 360 / images.length;

  return (
    <div className="g3d-wrap">
      <div className="g3d-stage">
        <div
          className="g3d-spinner"
          style={{ transform: `translateZ(-500px) rotateY(${angle}deg)` }}
        >
          {images.map((im, i) => (
            <div
              key={im + i}
              className="g3d-item"
              style={{ transform: `rotateY(${i * step}deg) translateZ(500px)` }}
            >
              <img src={im} alt={`${title} - تصویر ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="g3d-controls">
        <button
          type="button"
          className="g3d-btn g3d-prev"
          aria-label="قبلی"
          onClick={() => setAngle((a) => a - step)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <button
          type="button"
          className="g3d-btn g3d-next"
          aria-label="بعدی"
          onClick={() => setAngle((a) => a + step)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      <style>{`
        .g3d-wrap {
          position: relative;
          margin-top: 30px;
        }
        .g3d-stage {
          position: relative;
          height: 520px;
          perspective: 1200px;
          background: radial-gradient(circle at 50% 45%,rgb(124, 140, 150), #061724 70%);
          border: 1px solid #2ac89d33;
          border-radius: 12px;
          overflow: hidden;
        }
        .g3d-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 425px;
          height: 300px;
          margin-left: -212.5px;
          margin-top: -150px;
          transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(.22,.61,.36,1);
        }
        .g3d-item {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        .g3d-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 20px 60px #00000088, 0 0 0 1px #ffffff14;
        }
        .g3d-controls {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          pointer-events: none;
          z-index: 5;
        }
        .g3d-btn {
          pointer-events: auto;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #ffffff;
          color: #0b293e;
          border: 1px solid #d8e2df;
          box-shadow: 0 8px 24px #00000055;
          transition: background .25s, color .25s, transform .25s;
        }
        .g3d-btn:hover {
          background: #26d5a2;
          color: #062218;
          border-color: #26d5a2;
          transform: scale(1.06);
        }
        @media (max-width: 1024px) {
          .g3d-stage { height: 440px; }
          .g3d-spinner { width: 360px; height: 260px; margin-left: -180px; margin-top: -130px; }
          .g3d-btn { width: 48px; height: 48px; }
        }
        @media (max-width: 640px) {
          .g3d-stage { height: 380px; perspective: 900px; }
          .g3d-spinner { width: 280px; height: 200px; margin-left: -140px; margin-top: -100px; }
          .g3d-btn { width: 42px; height: 42px; }
        }
        @media (max-width: 480px) {
          .g3d-stage { height: 320px; perspective: 800px; }
          .g3d-spinner { width: 220px; height: 160px; margin-left: -110px; margin-top: -80px; }
          .g3d-btn { width: 38px; height: 38px; }
        }
      `}</style>
    </div>
  );
}