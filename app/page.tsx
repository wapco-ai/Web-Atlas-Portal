/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ServiceGlobe from "./components/ServiceGlobe";
import { services } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">۱۵ سال تجربه در فناوری شهری</span>
          <h1>فناوری برای<br /><em>زندگی بهتر شهرها</em></h1>
          <p>سامانه‌های تخصصی و داده‌محور برای سازمان‌هایی که هر تصمیم آن‌ها بر کیفیت زندگی شهروندان اثر می‌گذارد.</p>
          <div className="actions"><Link className="button primary" href="/services">مشاهده راهکارها ←</Link><Link className="button ghost" href="/about">داستان ما</Link></div>
          <div className="metrics"><div><strong>۱۵+</strong><span>سال تجربه</span></div><div><strong>۴</strong><span>حوزه تخصصی</span></div><div><strong>۲۰+</strong><span>پروژه سازمانی</span></div></div>
        </div>
        <ServiceGlobe />
      </section>

      <section className="home-intro section-shell">
        <div><span className="kicker">وب اطلس پویا در یک نگاه</span><h2>از مسئله واقعی<br /><em>تا راهکار قابل اتکا</em></h2></div>
        <div><p>ما دانش نرم‌افزار را با شناخت عمیق خدمات شهری ترکیب می‌کنیم تا فرآیندهای پیچیده، ساده‌تر و تصمیم‌ها دقیق‌تر شوند.</p><Link className="text-link" href="/about">بیشتر درباره ما ←</Link></div>
      </section>

      <section className="home-services section-shell">
        <div className="section-title"><div><span className="kicker">حوزه‌های تخصصی</span><h2>راهکارهای ما</h2></div><Link className="text-link" href="/services">همه خدمات ←</Link></div>
        <div className="mini-service-grid">{services.map((service) => <Link href={service.href} className="mini-service" key={service.slug}><img src={service.icon} alt="" /><span>{service.short}</span><h3>{service.title}</h3><b>←</b></Link>)}</div>
      </section>

      <section className="home-cta"><span>یک مسئله شهری برای حل‌کردن دارید؟</span><h2>بیایید راه‌حل مناسب را با هم بسازیم.</h2><Link className="button primary" href="/contact">شروع گفت‌وگو ←</Link></section>
    </>
  );
}
