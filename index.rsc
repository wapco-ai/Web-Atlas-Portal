2:I["646dcdb22489",[],"default",1]
3:I["8c0f216c4604",[],"Children",1]
4:I["0575a017aa89",[],"default",1]
5:I["01762c01f0ce",[],"default",1]
6:I["15c18cfaeeff",[],"LayoutSegmentProvider",1]
7:I["8c0f216c4604",[],"Slot",1]
8:I["593f344dc510",[],"RedirectBoundary",1]
:HL["/assets/index-5djo59ll.css","style"]
0:{"__route":"route:/","__interceptionContext":null,"__layoutIds":["layout:/"],"__rootLayout":"/","page:/":"$L1","layout:/":[[[["$","link","css:/assets/index-5djo59ll.css",{"rel":"stylesheet","precedence":"vite-rsc/importer-resources","href":"/assets/index-5djo59ll.css","data-rsc-css-href":"/assets/index-5djo59ll.css"}],"$undefined"],["$","html",null,{"lang":"fa","dir":"rtl","children":["$","body",null,{"children":[["$","$L2",null,{}],["$","main",null,{"className":"site-content","children":[["$","div",null,{"className":"page-transition","children":[" ",["$","$L3",null,{}]]}],["$","footer",null,{"className":"footer reveal","children":[["$","div",null,{"children":[["$","strong",null,{"children":"شرکت وب اطلس پویا"}],["$","p",null,{"children":"طراحی و توسعه راهکارهای مبتنی بر وب و GIS برای مدیریت هوشمند سازمان‌ها و خدمات شهری."}]]}],["$","div",null,{"children":[["$","b",null,{"children":"دسترسی سریع"}],["$","$L4",null,{"href":"/about","children":"معرفی شرکت"}],["$","$L4",null,{"href":"/customers","children":"مشتریان"}],["$","$L4",null,{"href":"/products","children":"محصولات"}]]}],["$","div",null,{"children":[["$","b",null,{"children":"راهکارها"}],["$","$L4",null,{"href":"/gis","children":"راهکارهای مکانی"}],["$","$L4",null,{"href":"/startups","children":"استارتاپ‌ها"}],["$","$L4",null,{"href":"/contact","children":"ثبت سفارش"}]]}],["$","div",null,{"children":[["$","b",null,{"children":"ارتباط"}],["$","a",null,{"href":"mailto:info@wapco.ir","children":"info@wapco.ir"}],["$","span",null,{"children":"ایران، مشهد"}]]}],["$","small",null,{"children":"© ۱۴۰۵ تمامی حقوق برای وب اطلس پویا محفوظ است."}]]}]]}],["$","$L5",null,{}]]}]}]],null],"route:/":[[["$","meta",null,{"charSet":"utf-8"}],[["$","title","0",{"children":"وب اطلس پویا | راهکارهای هوشمند مدیریت شهری"}],["$","meta","1",{"name":"description","content":"راهکارهای نرم‌افزاری تخصصی وب اطلس پویا برای آتش‌نشانی، آرامستان، GIS و حمل‌ونقل شهری."}],["$","link","2",{"rel":"shortcut icon","href":"/favicon.svg"}],["$","link","3",{"rel":"icon","href":"/favicon.svg"}],["$","meta","4",{"name":"codex-preview","content":"development"}]],[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]],["$","$L6",null,{"segmentMap":{"children":[]},"children":["$","$L7",null,{"id":"layout:/","parallelSlots":"$undefined","children":["$","$L8",null,{"children":["$","$L6",null,{"segmentMap":{"children":[]},"children":["$","$L7",null,{"id":"page:/"}]}]}]}]}]],"__layoutFlags":{"layout:/":"s"},"__artifactCompatibility":{"schemaVersion":1,"graphVersion":"app-route-graph:4uhn5s1wvoptc","deploymentVersion":"c695dbfd-efe8-463f-92a4-3fc6713a7d43","appElementsSchemaVersion":1,"rscPayloadSchemaVersion":1,"rootBoundaryId":"/","renderEpoch":null}}
9:Tddd,
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
        1:[["$","section",null,{"className":"hero","children":[["$","style",null,{"children":"$9"}],"$La","$Lb"]}],"$Lc","$Ld","$Le","$Lf","$L10","$L11"]
12:I["73664f302a95",[],"default",1]
13:I["5fa4ea99918e",[],"default",1]
14:I["58a89e69ec23",[],"default",1]
15:I["e0ee715b1ecf",[],"default",1]
:HL["/assets/wapco-mahar.jpg","image"]
:HL["/assets/wapco-meraj.jpg","image"]
:HL["/assets/wapco-hami.jpg","image"]
:HL["/assets/s7.png","image"]
a:["$","div",null,{"className":"hero-copy reveal","children":[["$","span",null,{"className":"eyebrow","children":"راهکارهای مبتنی بر وب و GIS"}],["$","h1",null,{"children":["داده، فناوری و مکان؛",["$","br",null,{}],["$","em",null,{"children":"برای مدیریت هوشمند"}]]}],["$","p",null,{"children":"شرکت وب اطلس پویا با تکیه بر تجربه تخصصی در تولید نرم‌افزارهای سازمانی، سامانه‌های اطلاعات مکانی و راهکارهای مدیریت شهری فعالیت می‌کند."}],["$","div",null,{"className":"actions","children":[["$","$L4",null,{"className":"button primary","href":"/products","children":"مشاهده محصولات ←"}],["$","$L4",null,{"className":"button ghost","href":"/about","children":"معرفی شرکت"}]]}],["$","div",null,{"className":"metrics","children":[["$","div",null,{"children":[["$","strong",null,{"children":"۱۵+"}],["$","span",null,{"children":"سال تجربه"}]]}],["$","div",null,{"children":[["$","strong",null,{"children":"۴"}],["$","span",null,{"children":"محصول تخصصی"}]]}],["$","div",null,{"children":[["$","strong",null,{"children":"۷"}],["$","span",null,{"children":"حوزه GIS"}]]}]]}]]}]
b:["$","$L12",null,{}]
c:["$","$L13",null,{}]
d:["$","section",null,{"className":"section-shell intro-grid reveal","children":[["$","div",null,{"children":[["$","span",null,{"className":"kicker","children":"شرکت وب اطلس پویا"}],["$","h2",null,{"children":["تخصص نرم‌افزار،",["$","br",null,{}],["$","em",null,{"children":"شناخت فرایند، قدرت مکان"}]]}]]}],["$","div",null,{"children":[["$","p",null,{"children":"ماموریت ما ارائه سامانه‌هایی است که اطلاعات را منسجم، فرایندها را شفاف و تصمیم‌گیری را سریع‌تر می‌کنند. محصولات ما نتیجه شناخت نزدیک از نیازهای واقعی سازمان‌هاست."}],["$","$L4",null,{"className":"text-link","href":"/about","children":"داستان و ساختار شرکت ←"}]]}],["$","div",null,{"className":"stat-card","children":[["$","b",null,{"children":"راهکار یکپارچه"}],["$","span",null,{"children":"تحلیل · طراحی · توسعه · استقرار · پشتیبانی"}]]}]]}]
e:["$","section",null,{"className":"section-shell dark-pattern","children":[["$","div",null,{"className":"section-title","children":[["$","div",null,{"children":[["$","span",null,{"className":"kicker","children":"محصولات تخصصی"}],["$","h2",null,{"children":"ساخته‌شده برای فرایند واقعی"}]]}],["$","$L4",null,{"href":"/products","className":"text-link","children":"همه محصولات ←"}]]}],["$","div",null,{"className":"product-mosaic","children":[["$","$L4","mahar",{"href":"/products/mahar","className":"product-tile reveal p1","children":[["$","img",null,{"src":"/assets/wapco-mahar.jpg","alt":""}],["$","div",null,{"children":[["$","small",null,{"children":"آتش‌نشانی"}],["$","h3",null,{"children":"سامانه مدیریت عملیات مهار"}],["$","span",null,{"children":"مشاهده محصول ←"}]]}]]}],["$","$L4","meraj",{"href":"/products/meraj","className":"product-tile reveal p2","children":[["$","img",null,{"src":"/assets/wapco-meraj.jpg","alt":""}],["$","div",null,{"children":[["$","small",null,{"children":"آرامستان‌ها"}],["$","h3",null,{"children":"سامانه مدیریت رضوان"}],["$","span",null,{"children":"مشاهده محصول ←"}]]}]]}],["$","$L4","hami",{"href":"/products/hami","className":"product-tile reveal p3","children":[["$","img",null,{"src":"/assets/wapco-hami.jpg","alt":""}],["$","div",null,{"children":[["$","small",null,{"children":"حمل‌ونقل"}],["$","h3",null,{"children":"سامانه مدیریت حامی"}],["$","span",null,{"children":"مشاهده محصول ←"}]]}]]}],["$","$L4","royesh",{"href":"/products/royesh","className":"product-tile reveal p4","children":[["$","img",null,{"src":"/assets/s7.png","alt":""}],["$","div",null,{"children":[["$","small",null,{"children":"کشاورزی"}],["$","h3",null,{"children":"سامانه مدیریت رویش"}],["$","span",null,{"children":"مشاهده محصول ←"}]]}]]}]]}]]}]
f:["$","section",null,{"className":"section-shell","children":[["$","div",null,{"className":"section-title","children":[["$","div",null,{"children":[["$","span",null,{"className":"kicker","children":"راهکارهای مکانی"}],["$","h2",null,{"children":"GIS برای هر حوزه"}]]}],["$","$L4",null,{"href":"/gis","className":"text-link","children":"مشاهده همه ←"}]]}],["$","div",null,{"className":"gis-wheel","style":{"gap":"26px","rowGap":"26px"},"children":[["$","$L14","crisis",{"href":"/gis/crisis","icon":"✹","title":"مدیریت بحران","index":0}],["$","$L14","realestate",{"href":"/gis/realestate","icon":"▧","title":"مدیریت املاک و اراضی","index":1}],["$","$L14","city-services",{"href":"/gis/city-services","icon":"◫","title":"مدیریت خدمات شهری","index":2}],["$","$L14","transportation",{"href":"/gis/transportation","icon":"↝","title":"حمل‌ونقل و ترافیک","index":3}],["$","$L14","agriculture",{"href":"/gis/agriculture","icon":"⌁","title":"منابع طبیعی و کشاورزی","index":4}],["$","$L14","geo-marketing",{"href":"/gis/geo-marketing","icon":"◎","title":"ژئومارکتینگ","index":5}],["$","$L14","health",{"href":"/gis/health","icon":"✚","title":"سلامت و بهداشت","index":6}]]}]]}]
10:["$","section",null,{"className":"section-shell service-band","children":[["$","$L15","fire",{"icon":"/assets/firefighter.png","short":"سامانه مدیریت عملیات مهار","title":"آتش‌نشانی و ایمنی"}],["$","$L15","cemetery",{"icon":"/assets/aramestan.png","short":"سامانه مدیریت رضوان","title":"مدیریت آرامستان‌ها"}],["$","$L15","gis",{"icon":"/assets/gis.png","short":"راهکارهای مکانی / GIS","title":"سامانه‌های اطلاعات مکانی"}],["$","$L15","transport",{"icon":"/assets/Transportation.png","short":"سامانه مدیریت حامی","title":"حمل‌ونقل و ناوگان"}]]}]
11:["$","section",null,{"className":"home-cta reveal","children":[["$","span",null,{"children":"برای معرفی محصول، مشاوره یا ثبت سفارش"}],["$","h2",null,{"children":"مسئله شما، نقطه شروع راهکار بعدی ماست."}],["$","$L4",null,{"className":"button primary","href":"/contact","children":"گفت‌وگو با ما ←"}]]}]
