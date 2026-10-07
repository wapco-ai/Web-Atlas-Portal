2:I["646dcdb22489",[],"default",1]
3:I["8c0f216c4604",[],"Children",1]
4:I["0575a017aa89",[],"default",1]
5:I["01762c01f0ce",[],"default",1]
6:I["15c18cfaeeff",[],"LayoutSegmentProvider",1]
7:I["8c0f216c4604",[],"Slot",1]
8:I["593f344dc510",[],"RedirectBoundary",1]
:HL["/assets/index-5djo59ll.css","style"]
0:{"__route":"route:/contact/","__interceptionContext":null,"__layoutIds":["layout:/"],"__rootLayout":"/","page:/contact/":"$L1","layout:/":[[[["$","link","css:/assets/index-5djo59ll.css",{"rel":"stylesheet","precedence":"vite-rsc/importer-resources","href":"/assets/index-5djo59ll.css","data-rsc-css-href":"/assets/index-5djo59ll.css"}],"$undefined"],["$","html",null,{"lang":"fa","dir":"rtl","children":["$","body",null,{"children":[["$","$L2",null,{}],["$","main",null,{"className":"site-content","children":[["$","div",null,{"className":"page-transition","children":[" ",["$","$L3",null,{}]]}],["$","footer",null,{"className":"footer reveal","children":[["$","div",null,{"children":[["$","strong",null,{"children":"شرکت وب اطلس پویا"}],["$","p",null,{"children":"طراحی و توسعه راهکارهای مبتنی بر وب و GIS برای مدیریت هوشمند سازمان‌ها و خدمات شهری."}]]}],["$","div",null,{"children":[["$","b",null,{"children":"دسترسی سریع"}],["$","$L4",null,{"href":"/about","children":"معرفی شرکت"}],["$","$L4",null,{"href":"/customers","children":"مشتریان"}],["$","$L4",null,{"href":"/products","children":"محصولات"}]]}],["$","div",null,{"children":[["$","b",null,{"children":"راهکارها"}],["$","$L4",null,{"href":"/gis","children":"راهکارهای مکانی"}],["$","$L4",null,{"href":"/startups","children":"استارتاپ‌ها"}],["$","$L4",null,{"href":"/contact","children":"ثبت سفارش"}]]}],["$","div",null,{"children":[["$","b",null,{"children":"ارتباط"}],["$","a",null,{"href":"mailto:info@wapco.ir","children":"info@wapco.ir"}],["$","span",null,{"children":"ایران، مشهد"}]]}],["$","small",null,{"children":"© ۱۴۰۵ تمامی حقوق برای وب اطلس پویا محفوظ است."}]]}]]}],["$","$L5",null,{}]]}]}]],null],"route:/contact/":[[["$","meta",null,{"charSet":"utf-8"}],[["$","title","0",{"children":"وب اطلس پویا | راهکارهای هوشمند مدیریت شهری"}],["$","meta","1",{"name":"description","content":"راهکارهای نرم‌افزاری تخصصی وب اطلس پویا برای آتش‌نشانی، آرامستان، GIS و حمل‌ونقل شهری."}],["$","link","2",{"rel":"shortcut icon","href":"/favicon.svg"}],["$","link","3",{"rel":"icon","href":"/favicon.svg"}],["$","meta","4",{"name":"codex-preview","content":"development"}]],[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]],["$","$L6",null,{"segmentMap":{"children":["contact"]},"children":["$","$L7",null,{"id":"layout:/","parallelSlots":"$undefined","children":["$","$L8",null,{"children":["$","$L6",null,{"segmentMap":{"children":[]},"children":["$","$L7",null,{"id":"page:/contact/"}]}]}]}]}]],"__layoutFlags":{"layout:/":"s"},"__artifactCompatibility":{"schemaVersion":1,"graphVersion":"app-route-graph:dquwgoyryjrs","deploymentVersion":"c695dbfd-efe8-463f-92a4-3fc6713a7d43","appElementsSchemaVersion":1,"rscPayloadSchemaVersion":1,"rootBoundaryId":"/","renderEpoch":null}}
9:T1f27,
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
        1:[["$","style",null,{"children":"$9"}],"$La","$Lb"]
a:["$","header",null,{"className":"page-hero compact","children":[["$","span",null,{"className":"eyebrow","children":"ارتباط و ثبت سفارش"}],["$","h1",null,{"children":"راهکار مناسب را با گفت‌وگو شروع کنیم"}],["$","p",null,{"children":"برای معرفی محصولات، تحلیل نیازمندی یا سفارش سامانه با ما در ارتباط باشید."}]]}]
b:["$","section",null,{"className":"cform-wrap","children":[["$","div",null,{"className":"cform-left","children":[["$","div",null,{"className":"cform-cards reveal","children":[["$","a",null,{"href":"mailto:info@wapco.ir","children":[["$","small",null,{"children":"ایمیل شرکت"}],["$","strong",null,{"dir":"ltr","children":"info@wapco.ir"}]]}],["$","a",null,{"href":"tel:+989151886122","children":[["$","small",null,{"children":"تلفن تماس"}],["$","strong",null,{"dir":"ltr","children":"0915 188 6122"}]]}],["$","div",null,{"children":[["$","small",null,{"children":"نشانی"}],["$","strong",null,{"children":"مشهد، امام خمینی ۴۶، ساختمان پست مرکزی، پارک ارتباطات و فناوری، طبقه ۴، بلوک B4"}]]}],["$","div",null,{"children":[["$","small",null,{"children":"ساعات پاسخ‌گویی"}],["$","strong",null,{"children":"شنبه تا چهارشنبه"}]]}]]}],["$","div",null,{"className":"cmap reveal","children":[["$","iframe",null,{"title":"موقعیت دفتر وب اطلس پویا","src":"https://maps.google.com/maps?q=36.277764,59.595335&z=16&output=embed","loading":"lazy"}],["$","div",null,{"className":"cmap-badge","children":[["$","small",null,{"children":"دفتر مرکزی"}],["$","strong",null,{"children":"مشهد، امام خمینی ۴۶، ساختمان پست مرکزی، پارک ارتباطات و فناوری"}]]}]]}]]}],["$","form",null,{"className":"cform reveal","action":"mailto:info@wapco.ir","method":"post","encType":"text/plain","children":[["$","div",null,{"className":"cform-head","children":[["$","span",null,{"className":"kicker","children":"فرم درخواست"}],["$","h2",null,{"children":"موضوع گفت‌وگو چیست؟"}]]}],["$","div",null,{"className":"grid-2","children":[["$","label",null,{"children":["نام و نام خانوادگی",["$","input",null,{"name":"نام","required":true,"placeholder":"نام شما"}]]}],["$","label",null,{"children":["نام سازمان",["$","input",null,{"name":"سازمان","placeholder":"نام مجموعه"}]]}]]}],["$","div",null,{"className":"grid-2","children":[["$","label",null,{"children":["ایمیل یا تلفن",["$","input",null,{"name":"راه ارتباطی","required":true,"placeholder":"راه ارتباطی"}]]}],["$","label",null,{"children":["نوع درخواست",["$","select",null,{"name":"موضوع","children":[["$","option",null,{"children":"معرفی محصولات"}],["$","option",null,{"children":"راهکارهای مکانی / GIS"}],["$","option",null,{"children":"ثبت سفارش"}],["$","option",null,{"children":"همکاری"}]]}]]}]]}],["$","label",null,{"children":["توضیحات",["$","textarea",null,{"name":"پیام","rows":5,"placeholder":"کمی درباره نیاز خود بنویسید"}]]}],["$","div",null,{"className":"actions","children":["$","button",null,{"type":"submit","className":"contact-submit","children":"آماده‌سازی و ارسال ایمیل ←"}]}]]}]]}]
