"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "./SiteLink";
import { useEffect, useRef, useState } from "react";
import { services } from "../lib/content";

export default function ServiceGlobe() {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const start = useRef(0);
  const base = useRef(0);

  useEffect(() => {
    if (dragging) return;
    const timer = window.setInterval(() => setAngle((a) => a + 0.18), 30);
    return () => window.clearInterval(timer);
  }, [dragging]);

  const down = (x: number) => {
    setDragging(true);
    start.current = x;
    base.current = angle;
  };

  const move = (x: number) => {
    if (dragging) setAngle(base.current + (x - start.current) * 0.35);
  };

  return <div className="globe-panel">
    <div className="globe-head"><span> خدمات ما</span></div>
    <div className={`globe-scene ${dragging ? "dragging" : ""}`} onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); down(e.clientX) }} onPointerMove={e => move(e.clientX)} onPointerUp={() => setDragging(false)} onPointerCancel={() => setDragging(false)}>
      <div className="globe-halo" /><div className="globe" style={{ transform: `rotateY(${angle}deg) rotateX(-8deg)` }}>
        <div className="sphere-line equator" /><div className="sphere-line longitude one" /><div className="sphere-line longitude two" /><div className="sphere-line latitude top" /><div className="sphere-line latitude bottom" />
        {services.map((s, i) => {
          const a = i * 90;
          const isInFront = Math.cos(((a + angle) * Math.PI) / 180) > 0;
          return <Link href={s.href} className="globe-service" key={s.slug} style={{ transform: `rotateY(${a}deg) translateZ(170px) rotateY(${-a - angle}deg)`, borderColor: s.color, zIndex: isInFront ? 3 : 1 }} onPointerDown={e => e.stopPropagation()}><img src={s.icon} alt="" /><span>{s.title}</span></Link>
        })}
        <div className="globe-core"><img className="globe-core-logo-static" style={{ transform: `rotateX(8deg) rotateY(${-angle}deg)` }} src="/assets/logo.png" alt="نشان وب اطلس پویا" /></div>
      </div>
    </div>
    <div className="globe-dots">{services.map((s, i) => <button key={s.slug} aria-label={s.title} onClick={() => setAngle(-i * 90)} style={{ background: s.color }} />)}</div>
  </div>;
}
