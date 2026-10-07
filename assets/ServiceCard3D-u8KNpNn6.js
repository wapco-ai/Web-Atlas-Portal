import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-B8WyT5R3.js";var r=e(t(),1),i=n();function a(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function o({icon:e,short:t,title:n}){let o=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`style`,{children:`
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
      `}),(0,i.jsxs)(`div`,{ref:o,className:`svc3d`,onMouseMove:e=>{let t=o.current,n=s.current;if(!t||!n)return;let r=t.getBoundingClientRect(),i=e.clientX-r.left,c=e.clientY-r.top,l=a(i,0,r.width,-25,25),u=a(c,0,r.height,25,-25),d=a(c,0,r.height,1.5,.5);n.style.transform=`rotateX(${u}deg) rotateY(${l}deg)`,n.style.filter=`brightness(${d})`},onMouseLeave:()=>{let e=s.current;e&&(e.style.transform=`rotateX(0deg) rotateY(0deg)`,e.style.filter=`brightness(1)`)},children:[(0,i.jsx)(`img`,{ref:s,src:e,alt:n,width:180}),(0,i.jsxs)(`div`,{className:`svc3d-meta`,children:[(0,i.jsx)(`small`,{children:t}),(0,i.jsx)(`h3`,{children:n})]})]})]})}export{o as default};