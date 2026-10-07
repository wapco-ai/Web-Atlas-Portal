/* eslint-disable @next/next/no-img-element */
export default function Contact() {
    return (
      <>
        <style>{`
          /* ============ Contact page — modern form ============ */
          .cform-wrap {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 40px;
            padding: 72px clamp(28px, 6vw, 90px);
          }
  
          .cform-left {
            display: grid;
            gap: 26px;
            align-content: start;
          }
  
          .cform-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .cform-cards a,
          .cform-cards > div {
            display: grid;
            gap: 6px;
            background: #ffffff;
            border: 1px solid #d8e2df;
            border-radius: 14px;
            padding: 22px 20px;
            text-decoration: none;
            color: inherit;
            box-shadow:
              -4px -4px 14px rgba(255,255,255,.9),
              1px 1px 3px rgba(0,0,0,.03),
              8px 20px 34px -14px rgba(11,56,35,.10);
            transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
          }
          .cform-cards a:hover,
          .cform-cards > div:hover {
            transform: translateY(-4px);
            border-color: #26d5a2;
            box-shadow:
              -4px -4px 14px rgba(255,255,255,.9),
              1px 1px 3px rgba(38,213,162,.20),
              12px 28px 42px -16px rgba(38,213,162,.32);
          }
          .cform-cards small {
            font-size: 10px;
            letter-spacing: .05em;
            color: #3baa8b;
          }
          .cform-cards strong {
            font-size: 14px;
            font-weight: 700;
            color: #102635;
            line-height: 1.7;
          }
  
          /* ---- map ---- */
          .cmap {
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid #d8e2df;
            min-height: 320px;
            box-shadow:
              1px 1px 3px rgba(0,0,0,.03),
              10px 24px 38px -14px rgba(11,56,35,.10);
          }
          .cmap iframe {
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
            filter: saturate(.45) contrast(.95);
          }
          .cmap-badge {
            position: absolute;
            right: 16px;
            bottom: 16px;
            left: 16px;
            background: linear-gradient(135deg, #10485c 0%, #0b293e 55%, #071c2d 100%);
            color: #fff;
            padding: 14px 16px;
            border-radius: 10px;
            display: grid;
            gap: 4px;
            backdrop-filter: blur(8px);
            border: 1px solid #2ac89d33;
          }
          .cmap-badge small { color: #6ee5bf; font-size: 9px; letter-spacing: .05em; }
          .cmap-badge strong { font-size: 11px; line-height: 1.8; font-weight: 600; color: #e6f1f4; }
  
          /* ---- form card ---- */
          .cform {
            background: #ffffff;
            border: 1px solid #d8e2df;
            border-radius: 18px;
            padding: 38px clamp(24px, 3vw, 42px);
            display: grid;
            gap: 20px;
            align-content: start;
            box-shadow:
              -6px -6px 20px rgba(255,255,255,.9),
              1px 1px 4px rgba(0,0,0,.03),
              16px 34px 50px -20px rgba(11,56,35,.14);
          }
  
          .cform .cform-head {
            display: grid;
            gap: 8px;
            padding-bottom: 14px;
            border-bottom: 1px solid #eef3f1;
            margin-bottom: 4px;
          }
          .cform .cform-head .kicker {
            font-size: 10px;
            font-weight: 700;
            color: #4e9f8c;
            letter-spacing: .06em;
          }
          .cform .cform-head .kicker::before { margin-left: 6px; }
          .cform .cform-head h2 {
            font-size: clamp(22px, 2.4vw, 30px);
            margin: 0;
            line-height: 1.4;
            color: #102635;
          }
  
          .cform .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
  
          .cform label {
            display: grid;
            gap: 8px;
            font-size: 11px;
            color: #4a6360;
            font-weight: 600;
          }
  
          .cform input,
          .cform select,
          .cform textarea {
            width: 100%;
            border: 1px solid #dfe8e4;
            background: #f7fbf9;
            padding: 14px 16px;
            border-radius: 10px;
            font: inherit;
            font-size: 13px;
            color: #102635;
            outline: none;
            transition: border-color .25s ease, background .25s ease, box-shadow .25s ease;
          }
          .cform input::placeholder,
          .cform textarea::placeholder { color: #a6b6b1; }
  
          .cform input:hover,
          .cform select:hover,
          .cform textarea:hover {
            border-color: #c9d9d4;
          }
          .cform input:focus,
          .cform select:focus,
          .cform textarea:focus {
            border-color: #26d5a2;
            background: #ffffff;
            box-shadow: 0 0 0 4px #26d5a222;
          }
  
          .cform textarea {
            resize: vertical;
            min-height: 120px;
            line-height: 1.9;
          }
  
          .cform select {
            appearance: none;
            -webkit-appearance: none;
            background-image:
              linear-gradient(45deg, transparent 50%, #4a6360 50%),
              linear-gradient(135deg, #4a6360 50%, transparent 50%);
            background-position:
              calc(14px) calc(50% + 2px),
              calc(20px) calc(50% + 2px);
            background-size: 6px 6px, 6px 6px;
            background-repeat: no-repeat;
            padding-left: 38px;
          }
  
          .cform .actions {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 14px;
            margin-top: 6px;
          }

  
          /* ---- submit button: gradient like the header, compact ---- */
          .cform .contact-submit {
            border: 1px solid #2ac89d33;
            cursor: pointer;
            padding: 10px 20px;                            /* smaller */
            border-radius: 9px;                            /* slightly tighter */
            background: linear-gradient(135deg, #0b293e 0%, #0b293e 55%, #071c2d 100%);
            color: #e6f1f4;
            font-weight: 800;
            font-size: 12px;                                /* smaller text */
            letter-spacing: .02em;
            margin-top: 0;
            box-shadow:
              0 6px 18px -6px rgba(8,32,53,.55),
              inset 0 1px 0 rgba(255,255,255,.10);
            transition: transform .25s ease, box-shadow .25s ease, filter .25s ease, border-color .25s ease;
          }
          .cform .contact-submit:hover {
            transform: translateY(-2px);
            filter: brightness(1.15);
            box-shadow:
              0 10px 26px -8px rgba(8,32,53,.7),
              0 0 0 3px #26d5a21f,
              inset 0 1px 0 rgba(255,255,255,.16);
          }
          .cform .contact-submit:active { transform: translateY(0); }
  
          /* ---- responsive ---- */
          @media (max-width: 1050px) {
            .cform-wrap { grid-template-columns: 1fr; padding: 56px 24px; }
            .cmap { min-height: 280px; }
          }
          @media (max-width: 620px) {
            .cform-wrap { padding: 44px 18px; gap: 26px; }
            .cform-cards { grid-template-columns: 1fr; }
            .cform .grid-2 { grid-template-columns: 1fr; }
            .cform { padding: 26px 20px; border-radius: 14px; }
            .cform .actions { justify-content: stretch; flex-direction: column-reverse; }
            .cform .contact-submit { width: 100%; padding: 11px 18px; }
          }
        `}</style>
  
        <header className="page-hero compact">
          <span className="eyebrow">ارتباط و ثبت سفارش</span>
          <h1>راهکار مناسب را با گفت‌وگو شروع کنیم</h1>
          <p>
            برای معرفی محصولات، تحلیل نیازمندی یا سفارش سامانه با ما در ارتباط باشید.
          </p>
        </header>
  
        <section className="cform-wrap">
          {/* LEFT: contact cards + map */}
          <div className="cform-left">
            <div className="cform-cards reveal">
              <a href="mailto:info@wapco.ir">
                <small>ایمیل شرکت</small>
                <strong dir="ltr">info@wapco.ir</strong>
              </a>
              <a href="tel:+989151886122">
                <small>تلفن تماس</small>
                <strong dir="ltr">0915 188 6122</strong>
              </a>
              <div>
                <small>نشانی</small>
                <strong>
                  مشهد، امام خمینی ۴۶، ساختمان پست مرکزی،
                  پارک ارتباطات و فناوری، طبقه ۴، بلوک B4
                </strong>
              </div>
              <div>
                <small>ساعات پاسخ‌گویی</small>
                <strong>شنبه تا چهارشنبه</strong>
              </div>
            </div>
  
            <div className="cmap reveal">
              <iframe
                title="موقعیت دفتر وب اطلس پویا"
                src="https://maps.google.com/maps?q=36.277764,59.595335&z=16&output=embed"
                loading="lazy"
              />
              <div className="cmap-badge">
                <small>دفتر مرکزی</small>
                <strong>
                  مشهد، امام خمینی ۴۶، ساختمان پست مرکزی، پارک ارتباطات و فناوری
                </strong>
              </div>
            </div>
          </div>
  
          {/* RIGHT: form */}
          <form
            className="cform reveal"
            action="mailto:info@wapco.ir"
            method="post"
            encType="text/plain"
          >
            <div className="cform-head">
              <span className="kicker">فرم درخواست</span>
              <h2>موضوع گفت‌وگو چیست؟</h2>
            </div>
  
            <div className="grid-2">
              <label>
                نام و نام خانوادگی
                <input name="نام" required placeholder="نام شما" />
              </label>
  
              <label>
                نام سازمان
                <input name="سازمان" placeholder="نام مجموعه" />
              </label>
            </div>
  
            <div className="grid-2">
              <label>
                ایمیل یا تلفن
                <input name="راه ارتباطی" required placeholder="راه ارتباطی" />
              </label>
  
              <label>
                نوع درخواست
                <select name="موضوع">
                  <option>معرفی محصولات</option>
                  <option>راهکارهای مکانی / GIS</option>
                  <option>ثبت سفارش</option>
                  <option>همکاری</option>
                </select>
              </label>
            </div>
  
            <label>
              توضیحات
              <textarea
                name="پیام"
                rows={5}
                placeholder="کمی درباره نیاز خود بنویسید"
              />
            </label>
  
            <div className="actions">
              <button type="submit" className="contact-submit">
                آماده‌سازی و ارسال ایمیل ←
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }