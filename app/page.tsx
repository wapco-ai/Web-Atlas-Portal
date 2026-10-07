/* eslint-disable @next/next/no-img-element */
import Link from "./components/SiteLink";
import ServiceGlobe from "./components/ServiceGlobe";
import Carousel from "./components/Carousel";
import Gis3DChip from "./components/Gis3DChip";
import ServiceCard3D from "./components/ServiceCard3D";
import { gisSolutions, products, services } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <style>{`
          .hero {
            /* animated multi-blob background (adapted from the CodePen) */
            background-color: #061724;
            background-image:
              radial-gradient(closest-side, rgba(38, 213, 162, 0.55), rgba(38, 213, 162, 0)),
              radial-gradient(closest-side, rgba(11, 41, 62, 0.95),  rgba(11, 41, 62, 0)),
              radial-gradient(closest-side, rgba(80, 200, 220, 0.35), rgba(80, 200, 220, 0)),
              radial-gradient(closest-side, rgba(16, 70, 90, 1),     rgba(16, 70, 90, 0)),
              radial-gradient(closest-side, rgba(38, 213, 162, 0.25), rgba(38, 213, 162, 0));
            background-size:
              130vmax 130vmax,
              80vmax 80vmax,
              90vmax 90vmax,
              110vmax 110vmax,
              90vmax 90vmax;
            background-position:
              -80vmax -80vmax,
              60vmax -30vmax,
              10vmax 10vmax,
              -30vmax -10vmax,
              50vmax 50vmax;
            background-repeat: no-repeat;
            animation: heroMovement 22s linear infinite;
          }

          /* soft blur overlay so the blobs blend smoothly */
          .hero::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            z-index: 1;
            mask-image: radial-gradient(ellipse at center, #000 40%, transparent 85%);
          }

          /* grid overlay stays above the blur but below the content */
          .hero::before { z-index: 2; }
          .hero > .hero-copy,
          .hero > .globe-panel { position: relative; z-index: 3; }

          @keyframes heroMovement {
            0%, 100% {
              background-size:
                130vmax 130vmax,
                80vmax 80vmax,
                90vmax 90vmax,
                110vmax 110vmax,
                90vmax 90vmax;
              background-position:
                -80vmax -80vmax,
                60vmax -30vmax,
                10vmax 10vmax,
                -30vmax -10vmax,
                50vmax 50vmax;
            }
            25% {
              background-size:
                100vmax 100vmax,
                90vmax 90vmax,
                100vmax 100vmax,
                90vmax 90vmax,
                60vmax 60vmax;
              background-position:
                -60vmax -90vmax,
                50vmax -40vmax,
                0vmax -20vmax,
                -40vmax -20vmax,
                40vmax 60vmax;
            }
            50% {
              background-size:
                80vmax 80vmax,
                110vmax 110vmax,
                80vmax 80vmax,
                60vmax 60vmax,
                80vmax 80vmax;
              background-position:
                -50vmax -70vmax,
                40vmax -30vmax,
                10vmax 0vmax,
                20vmax 10vmax,
                30vmax 70vmax;
            }
            75% {
              background-size:
                90vmax 90vmax,
                90vmax 90vmax,
                100vmax 100vmax,
                90vmax 90vmax,
                70vmax 70vmax;
              background-position:
                -50vmax -40vmax,
                50vmax -30vmax,
                20vmax 0vmax,
                -10vmax 10vmax,
                40vmax 60vmax;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero { animation: none; }
          }
        `}</style>

        <div className="hero-copy reveal">
          <span className="eyebrow">راهکارهای مبتنی بر وب و GIS</span>
          <h1>
            داده، فناوری و مکان؛
            <br />
            <em>برای مدیریت هوشمند</em>
          </h1>
          <p>
            شرکت وب اطلس پویا با تکیه بر تجربه تخصصی در تولید نرم‌افزارهای سازمانی،
            سامانه‌های اطلاعات مکانی و راهکارهای مدیریت شهری فعالیت می‌کند.
          </p>
          <div className="actions">
            <Link className="button primary" href="/products">
              مشاهده محصولات ←
            </Link>
            <Link className="button ghost" href="/about">
              معرفی شرکت
            </Link>
          </div>
          <div className="metrics">
            <div>
              <strong>۱۵+</strong>
              <span>سال تجربه</span>
            </div>
            <div>
              <strong>۴</strong>
              <span>محصول تخصصی</span>
            </div>
            <div>
              <strong>۷</strong>
              <span>حوزه GIS</span>
            </div>
          </div>
        </div>
        <ServiceGlobe />
      </section>

      <Carousel />

      <section className="section-shell intro-grid reveal">
        <div>
          <span className="kicker">شرکت وب اطلس پویا</span>
          <h2>
            تخصص نرم‌افزار،
            <br />
            <em>شناخت فرایند، قدرت مکان</em>
          </h2>
        </div>
        <div>
          <p>
            ماموریت ما ارائه سامانه‌هایی است که اطلاعات را منسجم، فرایندها را شفاف و
            تصمیم‌گیری را سریع‌تر می‌کنند. محصولات ما نتیجه شناخت نزدیک از نیازهای
            واقعی سازمان‌هاست.
          </p>
          <Link className="text-link" href="/about">
            داستان و ساختار شرکت ←
          </Link>
        </div>
        <div className="stat-card">
          <b>راهکار یکپارچه</b>
          <span>تحلیل · طراحی · توسعه · استقرار · پشتیبانی</span>
        </div>
      </section>

      <section className="section-shell dark-pattern">
        <div className="section-title">
          <div>
            <span className="kicker">محصولات تخصصی</span>
            <h2>ساخته‌شده برای فرایند واقعی</h2>
          </div>
          <Link href="/products" className="text-link">
            همه محصولات ←
          </Link>
        </div>
        <div className="product-mosaic">
          {products.map((p, i) => (
            <Link
              href={`/products/${p.slug}`}
              className={`product-tile reveal p${i + 1}`}
              key={p.slug}
            >
              <img src={p.image} alt="" />
              <div>
                <small>{p.subtitle}</small>
                <h3>{p.title}</h3>
                <span>مشاهده محصول ←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-title">
          <div>
            <span className="kicker">راهکارهای مکانی</span>
            <h2>GIS برای هر حوزه</h2>
          </div>
          <Link href="/gis" className="text-link">
            مشاهده همه ←
          </Link>
        </div>
        <div className="gis-wheel" style={{ gap: "26px", rowGap: "26px" }}>
          {gisSolutions.map((g, i) => (
            <Gis3DChip
              key={g.slug}
              href={`/gis/${g.slug}`}
              icon={g.icon}
              title={g.title}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="section-shell service-band">
        {services.map((s) => (
          <ServiceCard3D
            key={s.slug}
            icon={s.icon}
            short={s.short}
            title={s.title}
          />
        ))}
      </section>

      <section className="home-cta reveal">
        <span>برای معرفی محصول، مشاوره یا ثبت سفارش</span>
        <h2>مسئله شما، نقطه شروع راهکار بعدی ماست.</h2>
        <Link className="button primary" href="/contact">
          گفت‌وگو با ما ←
        </Link>
      </section>
    </>
  );
}