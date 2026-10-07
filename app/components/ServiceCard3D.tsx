"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

type Props = {
  icon: string;
  short: string;
  title: string;
};

function map(val: number, minA: number, maxA: number, minB: number, maxB: number) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

export default function ServiceCard3D({ icon, short, title }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = map(mouseX, 0, rect.width, -25, 25);
    const rotateX = map(mouseY, 0, rect.height, 25, -25);
    const brightness = map(mouseY, 0, rect.height, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  };

  const onLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.style.filter = "brightness(1)";
  };

  return (
    <>
      <style>{`
        .svc3d{
          position: relative;
          margin: 4px;
          padding: 22px 18px 20px;
          background: #ffffff;
          border: 1px solid #d8e2df;
          border-radius: 14px;
          transform: scale(1);
          perspective: 600px;
          z-index: 1;
          text-align: center;
          box-shadow:
            -6px -6px 18px rgba(255,255,255,.9),
            1px 1px 3px rgba(0,0,0,.04),
            10px 24px 38px -12px rgba(11,56,35,.10),
            1px 4px 10px rgba(0,0,0,.04);
          transition:
            transform 250ms ease-out,
            box-shadow 250ms ease-out,
            border-color 250ms ease-out,
            background 250ms ease-out;
          will-change: transform;
        }

        .svc3d:hover{
          z-index: 10;
          transform: scale(1.06);
          border-color: #26d5a2;
          background: #ffffff;
          box-shadow:
            -6px -6px 18px rgba(255,255,255,.9),
            1px 1px 3px rgba(38,213,162,.20),
            14px 34px 48px -14px rgba(38,213,162,.35),
            1px 4px 12px rgba(38,213,162,.15);
        }

        .svc3d img{
          display: block;
          margin: 0 auto;
          transition: all 250ms ease-out;
          transform-style: preserve-3d;
          will-change: transform, filter;
          filter: grayscale(.25);
        }
        .svc3d:hover img{
          filter: grayscale(0);
        }

        .svc3d-meta{
          display: grid;
          gap: 4px;
          margin-top: 14px;
          text-align: center;
        }
        .svc3d-meta small{
          display: block;
          color: #3baa8b;
          font-size: 9px;
          letter-spacing: .04em;
        }
        .svc3d-meta h3{
          font-size: 13px;
          font-weight: 700;
          color: #102635;
          margin: 0;
        }
      `}</style>

      <div
        ref={cardRef}
        className="svc3d"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <img ref={imgRef} src={icon} alt={title} width={180} />
        <div className="svc3d-meta">
          <small>{short}</small>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}