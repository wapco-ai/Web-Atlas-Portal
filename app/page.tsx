/* eslint-disable @next/next/no-img-element */
const services = [
  { title: "سامانه‌های آرامستان", text: "راهکارهای یکپارچه برای مدیریت فرآیندهای آرامستان، اطلاعات متوفیان و خدمات مرتبط", icon: "/assets/aramestan.png" },
  { title: "سامانه‌های آتش‌نشانی", text: "طراحی سامانه‌های تخصصی برای مدیریت عملیات، اطلاعات و فرآیندهای سازمانی", icon: "/assets/firefighter.png" },
  { title: "راهکارهای GIS", text: "سامانه‌های اطلاعات مکانی برای تصمیم‌گیری دقیق‌تر، تحلیل داده و مدیریت هوشمند شهری", icon: "/assets/gis.png" },
  { title: "حمل‌ونقل و ناوگان", text: "راهکارهای نرم‌افزاری برای پایش، برنامه‌ریزی و مدیریت داده‌محور ناوگان", icon: "/assets/Transportation.png" },
];

const projects = [
  ["سازمان آتش‌نشانی مشهد", "سامانه مهار", "ORACLE–JAVA"],
  ["سازمان آتش‌نشانی شیراز", "سامانه مهار", "LAMP"],
  ["سازمان آتش‌نشانی سمنان", "سامانه مهار", "LAMP"],
  ["سازمان بهشت رضا", "سامانه آرامستان معراج", "ORACLE–JAVA"],
  ["سازمان آرامستان‌های سمنان", "سامانه آرامستان معراج", "LAMP"],
  ["جهاد کشاورزی خراسان رضوی", "سامانه مدیریت فرآیند داده‌های مکانی", "LAMP"],
];

export default function Home() {
  return (
    <main dir="rtl">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="وب اطلس پویا - صفحه اصلی">
          <img src="/assets/logo.png" alt="نشان وب اطلس پویا" />
          <span><strong>وب اطلس پویا</strong><small>راهکارهای هوشمند، شهرهای بهتر</small></span>
        </a>
        <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-label="نمایش فهرست" />
        <label htmlFor="nav-toggle" className="nav-button"><span /><span /></label>
        <nav>
          <a href="#about">درباره ما</a><a href="#services">خدمات</a><a href="#projects">پروژه‌ها</a><a href="#startups">استارتاپ‌ها</a><a href="#contact">تماس با ما</a>
        </nav>
        <a className="header-cta" href="#contact">گفت‌وگو با ما <b>←</b></a>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><i /> بیش از یک دهه تجربه در فناوری شهری</div>
          <h1>فناوری برای<br /><em>زندگی بهتر شهرها</em></h1>
          <p>راهکارهای نرم‌افزاری تخصصی برای سازمان‌های آتش‌نشانی، آرامستان‌ها، مدیریت اطلاعات مکانی و خدمات شهری.</p>
          <div className="hero-actions"><a className="primary-button" href="#services">مشاهده راهکارها <b>←</b></a><a className="text-button" href="#about">داستان ما <span>↓</span></a></div>
        </div>
        <div className="orbit-stage reveal reveal-late" aria-label="حوزه‌های فعالیت وب اطلس پویا">
          <div className="orbit orbit-one"><span /></div><div className="orbit orbit-two"><span /></div>
          <div className="logo-core"><img src="/assets/logo.png" alt="" /><div className="core-glow" /></div>
          <div className="orbit-card card-fire"><img src="/assets/firefighter.png" alt="" /><span>آتش‌نشانی</span></div>
          <div className="orbit-card card-gis"><img src="/assets/gis.png" alt="" /><span>اطلاعات مکانی</span></div>
          <div className="orbit-card card-cemetery"><img src="/assets/aramestan.png" alt="" /><span>آرامستان</span></div>
          <div className="orbit-card card-transport"><img src="/assets/Transportation.png" alt="" /><span>حمل‌ونقل</span></div>
        </div>
        <div className="hero-stats"><div><strong>۱۵+</strong><span>سال تجربه</span></div><div><strong>۴</strong><span>حوزه تخصصی</span></div><div><strong>راهکار</strong><span>متناسب با نیاز سازمان</span></div></div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-kicker">درباره وب اطلس پویا</div>
        <div className="about-layout">
          <div><h2>از داده تا تصمیم؛<br /><em>کنار سازمان‌های شهری</em></h2></div>
          <div className="about-copy"><p>وب اطلس پویا یک شرکت فناوری اطلاعات در مشهد است که با تمرکز بر طراحی و توسعه سامانه‌های تخصصی، به سازمان‌ها کمک می‌کند فرآیندهای پیچیده را ساده‌تر، سریع‌تر و دقیق‌تر مدیریت کنند.</p><p>تجربه ما در حوزه‌های GIS، آتش‌نشانی، آرامستان و حمل‌ونقل شکل گرفته و امروز با نگاهی تازه، مسیر خلق محصولات دیجیتال آینده را ادامه می‌دهیم.</p><a href="#contact">آشنایی و همکاری با ما <span>←</span></a></div>
        </div>
        <div className="values"><article><b>۰۱</b><h3>شناخت مسئله</h3><p>راهکار را از دل نیاز واقعی سازمان و کاربران آن طراحی می‌کنیم.</p></article><article><b>۰۲</b><h3>تجربه تخصصی</h3><p>دانش نرم‌افزار را با شناخت عمیق حوزه‌های خدمات شهری ترکیب می‌کنیم.</p></article><article><b>۰۳</b><h3>همراهی مداوم</h3><p>رشد محصول برای ما یک مسیر مستمر است، نه پایان یک قرارداد.</p></article></div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading"><div><div className="section-kicker light">حوزه‌های تخصصی</div><h2>راهکارهایی برای<br /><em>مدیریت هوشمندتر</em></h2></div><p>سامانه‌هایی قابل اتکا برای سازمان‌هایی که هر تصمیم آن‌ها بر کیفیت زندگی شهروندان اثر می‌گذارد.</p></div>
        <div className="service-grid">{services.map((service, index) => <article key={service.title}><span className="number">{["۰۱", "۰۲", "۰۳", "۰۴"][index]}</span><img src={service.icon} alt="" /><h3>{service.title}</h3><p>{service.text}</p><span className="more">مشاهده جزئیات ←</span></article>)}</div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading dark"><div><div className="section-kicker">بخشی از تجربه ما</div><h2>پروژه‌هایی که<br /><em>به آن‌ها افتخار می‌کنیم</em></h2></div><p>همکاری با سازمان‌های شهری و عمومی در نقاط مختلف ایران، سرمایه‌ای است که مسیر امروز ما را ساخته است.</p></div>
        <div className="project-table"><div className="project-row project-head"><span>سازمان / شرکت</span><span>عنوان محصول</span><span>بستر اجرا</span></div>{projects.map((item, i) => <div className="project-row" key={item[0]}><span><i>{String(i + 1).padStart(2, "0")}</i>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></div>)}</div>
      </section>

      <section id="startups" className="section startups-section">
        <div className="section-kicker">محصولات تازه</div><div className="startup-heading"><h2>در حال ساخت<br /><em>فصل بعدی</em></h2><p>دو محصول تازه در خانواده وب اطلس پویا در حال شکل‌گیری هستند. معرفی کامل، قابلیت‌ها و مسیر توسعه آن‌ها پس از نهایی‌شدن تصمیمات تیم در این بخش منتشر می‌شود.</p></div>
        <div className="startup-grid"><article className="startup-card diar"><div className="soon">به‌زودی</div><img src="/assets/s2.png" alt="نشان دیار باقی" /><div><h3>دیار باقی</h3><p>معرفی محصول، امکانات و کاربردها پس از نهایی‌شدن اطلاعات توسط تیم تکمیل خواهد شد.</p><span>جزئیات بیشتر در آینده</span></div></article><article className="startup-card"><div className="soon">به‌زودی</div><img className="spetiala" src="/assets/spetiala.png" alt="نشان محصول جدید" /><div><h3>محصول جدید</h3><p>این فضا برای معرفی محصول، مخاطبان، قابلیت‌ها و مسیر توسعه آن آماده شده است.</p><span>جزئیات بیشتر در آینده</span></div></article></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy"><div className="section-kicker light">ارتباط با ما</div><h2>بیایید درباره<br /><em>مسئله شما گفت‌وگو کنیم</em></h2><p>برای آشنایی بیشتر با راهکارها و بررسی امکان همکاری، با دفتر مرکزی وب اطلس پویا در ارتباط باشید.</p><div className="contact-list"><a href="tel:+989151886122"><span>تلفن دفتر مرکزی</span><strong dir="ltr">0915 188 6122</strong></a><div><span>فکس مستقیم</span><strong dir="ltr">021 8977 3671</strong></div><div><span>پیام کوتاه</span><strong dir="ltr">30004015016060</strong></div><div><span>ایمیل</span><strong className="pending">به‌زودی اعلام می‌شود</strong></div></div></div>
        <div className="map-card"><iframe title="موقعیت دفتر وب اطلس پویا" src="https://maps.google.com/maps?q=36.277764,59.595335&z=16&output=embed" loading="lazy" /><div className="map-address"><span>نشانی دفتر مرکزی</span><strong>مشهد، خیابان امام خمینی، امام خمینی ۴۶، پارک علم و فناوری</strong><a href="https://maps.google.com/?q=36.277764,59.595335" target="_blank" rel="noreferrer">مسیریابی روی نقشه ↗</a></div></div>
      </section>

      <footer><div className="footer-brand"><img src="/assets/logo.png" alt="" /><div><strong>وب اطلس پویا</strong><p>راهکارهای هوشمند برای مدیریت شهری</p></div></div><div className="footer-nav"><a href="#about">درباره ما</a><a href="#services">خدمات</a><a href="#projects">پروژه‌ها</a><a href="#contact">تماس</a></div><div className="social-placeholder"><span>شبکه‌های اجتماعی</span><p>به‌زودی</p></div><small>© ۱۴۰۵ وب اطلس پویا — تمامی حقوق محفوظ است.</small></footer>
    </main>
  );
}
