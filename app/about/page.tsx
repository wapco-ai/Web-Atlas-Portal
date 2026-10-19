import Link from "../components/SiteLink";
import TeamMembers from "../components/TeamMembers";

export default function About() {
  return (
    <>
      <header className="page-hero compact">
        <span className="eyebrow">درباره وب اطلس پویا</span>
        <h1>معرفی شرکت</h1>
        <p>
          شرکت وب اطلس پویا، ارائه‌دهنده راهکارهای مبتنی بر وب و GIS و تولیدکننده
          سامانه‌های تخصصی مدیریت شهری.
        </p>
      </header>

      <section className="story section-shell reveal">
        <div>
          <span className="kicker">رویکرد ما</span>
          <h2>
            شناخت حوزه،
            <br />
            <em>پیش از توسعه سامانه</em>
          </h2>
        </div>
        <div>
          <p>
            وب اطلس پویا با هدف تولید راهکارهای کاربردی برای سازمان‌ها شکل گرفت. تجربه
            تخصصی ما در آتش‌نشانی، آرامستان‌ها، حمل‌ونقل، کشاورزی و اطلاعات مکانی، پایه
            طراحی محصولاتی است که با فرایند واقعی کاربران هماهنگ‌اند.
          </p>
          <p>
            از تحلیل نیاز و طراحی تا استقرار، آموزش و پشتیبانی در کنار مشتریان می‌مانیم.
          </p>
        </div>
      </section>

      <section className="values">
        <article className="reveal">
          <b>۰۱</b>
          <h3>تحلیل دقیق</h3>
          <p>شناخت مسئله و فرایند پیش از طراحی.</p>
        </article>
        <article className="reveal">
          <b>۰۲</b>
          <h3>تجربه تخصصی</h3>
          <p>ترکیب دانش نرم‌افزار و اطلاعات مکانی.</p>
        </article>
        <article className="reveal">
          <b>۰۳</b>
          <h3>همراهی مداوم</h3>
          <p>آموزش، استقرار و پشتیبانی مستمر.</p>
        </article>
      </section>

      {/* The new team section */}
      <section className="section-shell">
        <div className="section-title">
          <div>
            <span className="kicker">ساختار سازمانی</span>
            <h2>افرادی پشت هر راهکار</h2>
          </div>
        </div>
        <TeamMembers />
      </section>

      <section className="inner-cta">
        <h2>برای شناخت پروژه‌های ما آماده‌اید؟</h2>
        <Link className="button primary" href="/customers">
          مشاهده مشتریان ←
        </Link>
      </section>
    </>
  );
}