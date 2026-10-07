"use client";

import Link from "./SiteLink";

type Props = {
  href: string;
  icon: string;
  title: string;
  index: number;
};

export default function Gis3DChip({ href, icon, title, index }: Props) {
  return (
    <>
      <style>{`
        /* Container reserves the space the extruded box will need */
        .gis3d-item-container {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1400px;
          padding: 6px 8px;
          height: 130px;
          /* keep the box out of the neighbours' space */
          isolation: isolate;
        }

        /* The link is the front face */
        .gis3d-item {
          position: relative;
          width: 100%;
          height: 110px;
          background: linear-gradient(135deg, #0e3a55, #08263a);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 22px;
          color: #ffffff;
          transform-style: preserve-3d;
          transform: rotateY(18deg);
          transition: transform 0.9s cubic-bezier(.22,.61,.36,1),
                      background 0.9s ease;
          text-decoration: none;
          border: 1px solid #1c5c74;
          border-radius: 6px;
          box-shadow:
            0 12px 28px #00000055,
            inset 0 0 0 1px #ffffff08;
        }

        /* === Hover: full 380° flip, contrasting faces === */
        .gis3d-item-container:hover .gis3d-item {
          transform: rotateY(-380deg);
          background: linear-gradient(135deg, #2ee7b5, #14b98e);
          color: #04241c;
          border-color: #2ee7b5;
          box-shadow:
            0 18px 42px #00000066,
            0 0 32px #26d5a277;
        }
        .gis3d-item-container:hover .gis3d-icon,
        .gis3d-item-container:hover .gis3d-index { color: #04241c; }

        /* Faces: different lightness so the box reads as 3D */
        .gis3d-top,
        .gis3d-right,
        .gis3d-bottom,
        .gis3d-left {
          position: absolute;
          transform-style: preserve-3d;
        }

        .gis3d-top {
          width: 100%;
          height: 130px;
          top: -130px;
          background: linear-gradient(135deg, #16577a, #0c3a55);
          transform: rotateX(90deg);
          transform-origin: bottom;
        }
        .gis3d-right {
          width: 130px;
          height: 100%;
          right: -130px;
          background: linear-gradient(135deg, #0a2f44, #061f30);
          transform: rotateY(90deg);
          transform-origin: left;
        }
        .gis3d-bottom {
          width: 100%;
          height: 130px;
          bottom: -130px;
          background: #041a28;
          transform: rotateX(-90deg);
          transform-origin: top;
        }
        .gis3d-left {
          width: 130px;
          height: 100%;
          left: -130px;
          background: linear-gradient(135deg, #0a2f44, #061f30);
          transform: rotateY(-90deg);
          transform-origin: right;
        }

        /* Back face (nested in top so it rotates with it) */
        .gis3d-back {
          position: absolute;
          width: 100%;
          height: 130px;
          top: -130px;
          background: #0a2f44;
          transform: rotateX(90deg);
          transform-origin: bottom;
        }

        /* === Hover: face colors get brighter to match the green front === */
        .gis3d-item-container:hover .gis3d-top    { background: #0a805f; }
        .gis3d-item-container:hover .gis3d-right  { background: #075640; }
        .gis3d-item-container:hover .gis3d-bottom { background: #043a2b; }
        .gis3d-item-container:hover .gis3d-left   { background: #075640; }

        /* Content */
        .gis3d-body {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }
        .gis3d-icon {
          font-size: 22px;
          color: #26d5a2;
          font-style: normal;
          transition: color .3s ease;
        }
        .gis3d-title {
          font-size: 14px;
          font-weight: 700;
        }
        .gis3d-index {
          font-size: 11px;
          color: #7fa39a;
          font-weight: 700;
          transition: color .3s ease;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 760px) {
          .gis3d-item-container { height: 115px; }
          .gis3d-item { height: 95px; padding: 0 16px; }
          .gis3d-top, .gis3d-back { height: 115px; top: -115px; }
          .gis3d-bottom { height: 115px; bottom: -115px; }
          .gis3d-right, .gis3d-left { width: 115px; }
          .gis3d-right { right: -115px; }
          .gis3d-left  { left:  -115px; }
          .gis3d-title { font-size: 13px; }
          .gis3d-icon  { font-size: 20px; }
        }
      `}</style>

      <div className="gis3d-item-container">
        <Link href={href} className="gis3d-item">
          <div className="gis3d-top">
            <div className="gis3d-back"></div>
          </div>
          <div className="gis3d-right"></div>
          <div className="gis3d-bottom"></div>
          <div className="gis3d-left"></div>

          <span className="gis3d-body">
            <i className="gis3d-icon">{icon}</i>
            <span className="gis3d-title">{title}</span>
          </span>
          <span className="gis3d-index">0{index + 1}</span>
        </Link>
      </div>
    </>
  );
}