"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function SiteEffects(){const path=usePathname();useEffect(()=>{const els=[...document.querySelectorAll<HTMLElement>(".reveal")];const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");io.unobserve(e.target)}}),{threshold:.09});els.forEach((el,i)=>{el.style.setProperty("--delay",`${Math.min(i%6,5)*70}ms`);io.observe(el)});return()=>io.disconnect()},[path]);return null}
