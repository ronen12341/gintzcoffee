import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import X10LeadForm from "@/components/X10LeadForm";
import X10Reveal from "@/components/X10Reveal";
import { coffeeMachines } from "@/data/products";

const X10 = coffeeMachines.find((m) => m.id === "jura-x10");

const X10_IMAGE =
  X10?.image ?? "https://www.jura.co.il/wp-content/uploads/2024/06/X10Main.webp";

export const metadata: Metadata = {
  title: "קפה גינץ — בית קלייה בוטיק | הקפה שמתאים בדיוק לטעם שלך",
  description:
    "קפה גינץ — בית קלייה בוטיק מאז 2005. קפה בהתאמה אישית לכל לקוח, התקנה ושירות בכל הארץ. השאירו פרטים וקבלו הצעה אישית.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "קפה גינץ — בית קלייה בוטיק",
    description:
      "קפה בוטיק בהתאמה אישית, התקנה ושירות בכל הארץ. הצעת מחיר מהירה.",
    images: [X10_IMAGE],
  },
};

const PAGE_CSS = `
.x10p{
  --gold:#C8922A; --gold-l:#E9BE63; --gold-x:#f7dca0;
  --cream:#F5F0E8; --espresso:#160c04; --ink:#0c0602;
  font-family:var(--font-heebo),'Heebo',sans-serif;
  background:var(--ink); color:var(--cream); overflow-x:hidden;
}
.x10p *{box-sizing:border-box}
.x10p a{text-decoration:none;color:inherit}
.x10p .wrap{max-width:1200px;margin:0 auto;padding:0 24px}

/* HERO */
.x10p .hero{position:relative;min-height:88vh;display:flex;flex-direction:column;justify-content:center;
  background:radial-gradient(120% 90% at 72% 38%, #43290f 0%, #251403 45%, #100802 72%, #0a0502 100%);overflow:hidden}
.x10p .hero::after{content:"";position:absolute;inset:0;
  background:radial-gradient(120% 100% at 50% 120%, transparent 60%, rgba(0,0,0,.6) 100%);pointer-events:none}
.x10p .ring{position:absolute;border:1px solid rgba(200,146,42,.12);border-radius:50%;animation:x10p_spin 50s linear infinite}
.x10p .ring.a{width:640px;height:640px;top:-180px;right:-160px}
.x10p .ring.b{width:520px;height:520px;bottom:-220px;left:-160px;animation-direction:reverse}
@keyframes x10p_spin{to{transform:rotate(360deg)}}

.x10p .hero-grid{position:relative;z-index:3;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;
  width:100%;max-width:1200px;margin:0 auto;padding:60px 24px 40px}

.x10p .eyebrow{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:13px;letter-spacing:.12em;
  color:var(--gold-x);background:rgba(200,146,42,.12);border:1px solid rgba(200,146,42,.32);
  padding:8px 16px;border-radius:999px;margin-bottom:22px}
.x10p .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--gold-l);box-shadow:0 0 10px var(--gold-l);
  animation:x10p_pulse 1.8s ease-in-out infinite}
@keyframes x10p_pulse{0%,100%{opacity:.4;transform:scale(.8)}50%{opacity:1;transform:scale(1.3)}}

.x10p h1{font-weight:900;line-height:.95;margin-bottom:18px}
.x10p .h1-brand{font-size:clamp(54px,8vw,118px);letter-spacing:-.03em;
  background:linear-gradient(100deg,var(--gold) 0%,var(--gold-x) 35%,#fff7e6 50%,var(--gold-x) 65%,var(--gold) 100%);
  background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
  animation:x10p_shimmer 5s linear infinite}
@keyframes x10p_shimmer{to{background-position:-250% 0}}
.x10p .h1-sub{display:block;font-size:clamp(22px,3.2vw,38px);font-weight:800;color:var(--cream);margin-top:6px;
  letter-spacing:-.01em}
.x10p .lead{font-size:clamp(16px,1.6vw,20px);font-weight:300;line-height:1.7;color:rgba(245,240,232,.74);
  max-width:540px;margin-bottom:34px}
.x10p .lead b{color:var(--gold-l);font-weight:600}

.x10p .cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.x10p .btn{display:inline-flex;align-items:center;gap:9px;font-weight:800;font-size:16px;padding:16px 32px;
  border-radius:14px;cursor:pointer;border:none;transition:transform .2s,box-shadow .2s,filter .2s;font-family:inherit}
.x10p .btn-gold{color:#2a1505;background:linear-gradient(180deg,var(--gold-l),var(--gold) 60%,#9c6e18);
  box-shadow:0 8px 30px -6px rgba(200,146,42,.6),inset 0 1px 0 rgba(255,255,255,.4)}
.x10p .btn-gold:hover{transform:translateY(-3px);box-shadow:0 14px 40px -6px rgba(200,146,42,.8),inset 0 1px 0 rgba(255,255,255,.5);filter:brightness(1.05)}
.x10p .btn-ghost{color:var(--cream);background:transparent;border:1.5px solid rgba(245,240,232,.35)}
.x10p .btn-ghost:hover{transform:translateY(-3px);background:rgba(245,240,232,.08);border-color:var(--gold-l)}

.x10p .trust{display:flex;align-items:center;gap:18px;margin-top:26px;font-size:14px;color:rgba(245,240,232,.55)}
.x10p .trust .ph{color:var(--gold-l);font-weight:800;font-size:18px;direction:ltr}

.x10p .machine-wrap{position:relative;display:flex;align-items:center;justify-content:center;min-height:480px}
.x10p .glow{position:absolute;width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle,rgba(233,190,99,.55) 0%,rgba(200,146,42,.25) 35%,transparent 68%);
  filter:blur(8px);animation:x10p_breathe 6s ease-in-out infinite}
@keyframes x10p_breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
.x10p .pedestal{position:absolute;bottom:60px;width:360px;height:90px;border-radius:50%;
  background:radial-gradient(circle,rgba(233,190,99,.4),transparent 70%);filter:blur(14px)}
.x10p .machine{position:relative;z-index:2;width:min(440px,82%);
  -webkit-mask-image:radial-gradient(circle at 50% 45%,#000 56%,transparent 74%);
  mask-image:radial-gradient(circle at 50% 45%,#000 56%,transparent 74%);
  filter:drop-shadow(0 30px 50px rgba(0,0,0,.6));animation:x10p_float 6s ease-in-out infinite}
.x10p .machine-img{width:100%;height:auto;display:block}
@keyframes x10p_float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}

.x10p .steam{position:absolute;top:60px;left:50%;z-index:2;width:14px;height:120px;border-radius:50%;
  background:linear-gradient(180deg,rgba(255,255,255,.5),transparent);filter:blur(7px);opacity:0;
  animation:x10p_steam 4.5s ease-in infinite}
.x10p .steam.s2{left:46%;animation-delay:1.4s;height:150px}
.x10p .steam.s3{left:54%;animation-delay:2.6s;height:100px}
@keyframes x10p_steam{0%{opacity:0;transform:translateY(40px) scaleX(1)}
  35%{opacity:.7}100%{opacity:0;transform:translateY(-90px) scaleX(2.4)}}

.x10p .fbadge{position:absolute;z-index:5;display:flex;align-items:center;gap:8px;
  background:rgba(22,12,4,.72);backdrop-filter:blur(10px);border:1px solid rgba(233,190,99,.4);
  color:var(--cream);font-weight:600;font-size:15px;padding:11px 16px;border-radius:14px;
  box-shadow:0 10px 30px -8px rgba(0,0,0,.7);white-space:nowrap;animation:x10p_floatb 5s ease-in-out infinite}
.x10p .fbadge .ic{font-size:18px}
.x10p .fbadge.b1{top:14%;right:2%;animation-delay:.2s}
.x10p .fbadge.b2{top:46%;left:-2%;animation-delay:1.2s}
.x10p .fbadge.b3{bottom:16%;right:6%;animation-delay:2s}
@keyframes x10p_floatb{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

.x10p .scrolldown{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);z-index:4;
  color:rgba(245,240,232,.5);font-size:13px;display:flex;flex-direction:column;align-items:center;gap:6px;animation:x10p_floatb 2.4s ease-in-out infinite}
.x10p .scrolldown .arrow{width:22px;height:22px;border-right:2px solid var(--gold-l);border-bottom:2px solid var(--gold-l);transform:rotate(45deg)}

/* PILLARS */
.x10p .pillars{background:#100802;border-top:1px solid rgba(200,146,42,.15);border-bottom:1px solid rgba(200,146,42,.15)}
.x10p .pillars .wrap{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:26px 24px}
.x10p .pillar{display:flex;align-items:center;gap:16px;justify-content:center}
.x10p .pillar .ic{font-size:34px}
.x10p .pillar .tx b{display:block;font-size:19px;font-weight:800}
.x10p .pillar .tx span{font-size:14px;color:rgba(245,240,232,.6)}

/* SECTION / FEATURES */
.x10p .section{padding:56px 0}
.x10p .section-head{text-align:center;max-width:680px;margin:0 auto 34px}
.x10p .section-head h2{font-size:clamp(32px,4.5vw,48px);font-weight:900;margin-bottom:16px}
.x10p .section-head h2 span{color:var(--gold-l)}
.x10p .section-head p{color:rgba(245,240,232,.65);font-size:18px;font-weight:300;line-height:1.75}
.x10p .section-head p b{font-weight:600}
.x10p .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.x10p .feat{position:relative;background:rgba(255,255,255,.03);border:1px solid rgba(245,240,232,.08);
  border-radius:20px;padding:30px;transition:transform .3s,border-color .3s,box-shadow .3s,background .3s}
.x10p .feat:hover{transform:translateY(-6px);background:rgba(200,146,42,.06);border-color:rgba(233,190,99,.45);
  box-shadow:0 20px 50px -16px rgba(200,146,42,.35)}
.x10p .feat .ic{width:54px;height:54px;border-radius:15px;display:flex;align-items:center;justify-content:center;
  font-size:26px;background:rgba(200,146,42,.14);border:1px solid rgba(200,146,42,.3);margin-bottom:18px}
.x10p .feat h3{font-size:20px;font-weight:800;margin-bottom:9px}
.x10p .feat p{color:rgba(245,240,232,.62);font-size:15px;font-weight:300;line-height:1.65}

/* TASTE HIGHLIGHT */
.x10p .taste{position:relative;background:radial-gradient(110% 120% at 50% 0%,#3a2410,#190d04 65%,#100802);overflow:hidden;text-align:center;padding:60px 0}
.x10p .taste::before{content:"";position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:520px;height:360px;border-radius:50%;
  background:radial-gradient(circle,rgba(233,190,99,.3),transparent 70%);filter:blur(24px)}
.x10p .taste .ic{font-size:46px;margin-bottom:14px;display:block}
.x10p .taste h2{font-size:clamp(32px,4.5vw,50px);font-weight:900;margin-bottom:16px;position:relative}
.x10p .taste h2 span{color:var(--gold-l)}
.x10p .taste p{position:relative;color:rgba(245,240,232,.78);font-size:18px;font-weight:300;line-height:1.75;max-width:640px;margin:0 auto 32px}

/* AUDIENCE */
.x10p .aud{padding:52px 0;background:#100802}
.x10p .aud-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:26px}
.x10p .aud-card{background:rgba(255,255,255,.03);border:1px solid rgba(245,240,232,.08);border-radius:18px;
  padding:30px 16px;text-align:center;transition:transform .3s,border-color .3s}
.x10p .aud-card:hover{transform:translateY(-5px);border-color:rgba(233,190,99,.4)}
.x10p .aud-card .ic{font-size:34px;margin-bottom:12px;display:block}
.x10p .aud-card span{font-weight:600;font-size:15px}

/* LEAD */
.x10p .lead-sec{position:relative;background:radial-gradient(100% 100% at 50% 0%,#2a1808,#140a03 70%);padding:60px 0;overflow:hidden}
.x10p .lead-sec .glowL{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:600px;height:300px;
  background:radial-gradient(circle,rgba(200,146,42,.3),transparent 70%);filter:blur(30px)}
.x10p .lead-grid{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.x10p .lead-grid h2{font-size:clamp(30px,4vw,44px);font-weight:900;margin-bottom:16px}
.x10p .lead-grid .p{color:rgba(245,240,232,.65);font-size:17px;font-weight:300;line-height:1.7;margin-bottom:26px}
.x10p .checks{list-style:none;display:flex;flex-direction:column;gap:14px}
.x10p .checks li{display:flex;gap:11px;align-items:flex-start;font-size:15.5px;color:rgba(245,240,232,.88)}
.x10p .checks .ck{color:var(--gold-l);font-weight:900;font-size:18px}
.x10p .form-card{background:rgba(255,255,255,.04);border:1px solid rgba(233,190,99,.25);border-radius:24px;
  padding:34px;backdrop-filter:blur(8px);box-shadow:0 30px 70px -20px rgba(0,0,0,.7)}
.x10p .form-card h3{font-size:22px;font-weight:800;margin-bottom:20px}
.x10p .field{margin-bottom:15px}
.x10p .field label{display:block;font-size:13.5px;font-weight:600;margin-bottom:6px;color:rgba(245,240,232,.8)}
.x10p .field input,.x10p .field select,.x10p .field textarea{width:100%;padding:13px 15px;border-radius:11px;
  border:1px solid rgba(245,240,232,.18);background:rgba(0,0,0,.25);color:var(--cream);font-family:inherit;font-size:15px}
.x10p .field textarea{resize:none}
.x10p .field input::placeholder,.x10p .field textarea::placeholder{color:rgba(245,240,232,.3)}
.x10p .field input:focus,.x10p .field select:focus,.x10p .field textarea:focus{outline:none;border-color:var(--gold-l);box-shadow:0 0 0 3px rgba(200,146,42,.25)}
.x10p .field select option{color:#160c04}
.x10p .submit{width:100%;justify-content:center;margin-top:6px}
.x10p .ferr{color:#ff9c87;font-size:12.5px;margin-top:6px}
.x10p .ferr.center{text-align:center;margin-top:0;margin-bottom:8px}
.x10p .lead-success{text-align:center;padding:34px 10px}
.x10p .lead-success .ic{font-size:42px;display:inline-flex;align-items:center;justify-content:center;
  width:64px;height:64px;border-radius:50%;background:rgba(233,190,99,.15);border:1px solid rgba(233,190,99,.4);
  color:var(--gold-l);margin-bottom:14px}
.x10p .lead-success h3{font-size:24px;font-weight:800;margin-bottom:8px;color:var(--gold-l)}
.x10p .lead-success p{color:rgba(245,240,232,.75)}

/* reveal */
.x10p .reveal{opacity:0;transform:translateY(34px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
.x10p .reveal.in{opacity:1;transform:none}

/* responsive */
@media(max-width:880px){
  .x10p .hero-grid{grid-template-columns:1fr;text-align:center;padding-top:48px}
  .x10p .lead{margin-inline:auto}
  .x10p .cta-row{justify-content:center}
  .x10p .trust{justify-content:center}
  .x10p .machine-wrap{min-height:360px;order:-1}
  .x10p .fbadge.b2{left:2%}
  .x10p .fbadge.b1{right:0}
  .x10p .pillars .wrap{grid-template-columns:1fr;gap:22px}
  .x10p .feat-grid{grid-template-columns:1fr}
  .x10p .aud-grid{grid-template-columns:repeat(2,1fr)}
  .x10p .lead-grid{grid-template-columns:1fr;gap:30px}
}
@media (prefers-reduced-motion: reduce){
  .x10p .ring,.x10p .machine,.x10p .glow,.x10p .steam,.x10p .fbadge,
  .x10p .scrolldown,.x10p .mtrack,.x10p .h1-brand,.x10p .eyebrow .dot{animation:none !important}
  .x10p .reveal{opacity:1 !important;transform:none !important}
}
`;

export default function LandingPage() {
  return (
    <div className="x10p">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <X10Reveal />

      {/* HERO */}
      <section className="hero" aria-label="קפה גינץ — בית קלייה בוטיק">
        <div className="ring a" aria-hidden="true" />
        <div className="ring b" aria-hidden="true" />
        <div className="hero-grid">
          <div className="copy">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              בית קלייה בוטיק · משנת 2005
            </span>
            <h1>
              <span className="h1-brand">קפה גינץ</span>
              <span className="h1-sub">הקפה שמתאים בדיוק לטעם שלך</span>
            </h1>
            <p className="lead">
              בקפה גינץ אנחנו קולים את הפולים בעצמנו ומתאימים את טעם הקפה —{" "}
              <b>החוזק, הארומה והפרופיל</b> — בדיוק לחך של כל לקוח. קפה בוטיק
              אמיתי, לעסק ולבית.
            </p>
            <div className="cta-row">
              <a href="#lead" className="btn btn-gold">
                קבלו הצעה אישית ←
              </a>
              <a href="#about" className="btn btn-ghost">
                קצת עלינו
              </a>
            </div>
            <div className="trust">
              <span>
                <span className="ph">03-9600550</span>
              </span>
              <span>· התקנה ושירות בכל הארץ</span>
            </div>
          </div>

          <div className="machine-wrap">
            <div className="glow" aria-hidden="true" />
            <div className="pedestal" aria-hidden="true" />
            <div className="steam s1" aria-hidden="true" />
            <div className="steam s2" aria-hidden="true" />
            <div className="steam s3" aria-hidden="true" />
            <div className="machine">
              <SmartImage
                src={X10_IMAGE}
                alt="מכונת קפה JURA X10"
                width={460}
                height={520}
                priority
                className="machine-img"
              />
            </div>
            <div className="fbadge b1">
              <span className="ic" aria-hidden="true">🔥</span> קלייה טרייה
            </div>
            <div className="fbadge b2">
              <span className="ic" aria-hidden="true">🎯</span> התאמה אישית
            </div>
            <div className="fbadge b3">
              <span className="ic" aria-hidden="true">📅</span> משנת 2005
            </div>
          </div>
        </div>
        <a href="#about" className="scrolldown">
          <span>גלו עוד</span>
          <span className="arrow" aria-hidden="true" />
        </a>
      </section>

      {/* PILLARS */}
      <section className="pillars">
        <div className="wrap">
          <div className="pillar reveal">
            <span className="ic" aria-hidden="true">☕</span>
            <span className="tx">
              <b>קלייה בוטיק</b>
              <span>פולים נקלים אצלנו</span>
            </span>
          </div>
          <div className="pillar reveal">
            <span className="ic" aria-hidden="true">🎯</span>
            <span className="tx">
              <b>התאמה אישית</b>
              <span>טעם לפי כל לקוח</span>
            </span>
          </div>
          <div className="pillar reveal">
            <span className="ic" aria-hidden="true">🔧</span>
            <span className="tx">
              <b>שירות בכל הארץ</b>
              <span>התקנה ותחזוקה</span>
            </span>
          </div>
        </div>
      </section>

      {/* WHY GINTZ */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>
              למה <span>קפה גינץ</span>?
            </h2>
            <p>
              אנחנו <b style={{ color: "var(--gold-l)" }}>בית קלייה בוטיק</b> —
              קולים את הפולים אצלנו ומתאימים את טעם הקפה בדיוק לחך של כל לקוח. לא
              קפה גנרי, אלא הקפה <b style={{ color: "var(--gold-l)" }}>שלכם</b>.
            </p>
          </div>
          <div className="feat-grid">
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">☕</div>
              <h3>בית קלייה בוטיק</h3>
              <p>קולים את הפולים בעצמנו במנות קטנות — קפה טרי, ארומטי ועשיר בכל כוס.</p>
            </div>
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">🎯</div>
              <h3>התאמה אישית לטעם</h3>
              <p>מתאימים את החוזק, הארומה והפרופיל לחך שלכם — עד שמוצאים בדיוק את מה שאתם אוהבים.</p>
            </div>
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">🌍</div>
              <h3>פולים נבחרים</h3>
              <p>מקורות איכותיים מרחבי העולם, נבחרים בקפידה לטעם נקי ומאוזן.</p>
            </div>
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">🤝</div>
              <h3>ליווי מקצועי</h3>
              <p>נכיר את הצרכים שלכם ונבנה יחד את פתרון הקפה שמתאים בדיוק לעסק.</p>
            </div>
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">🔧</div>
              <h3>שירות ותחזוקה</h3>
              <p>צוות שלנו דואג שהכול יעבוד חלק — התקנה, תמיכה ותחזוקה בכל הארץ.</p>
            </div>
            <div className="feat reveal">
              <div className="ic" aria-hidden="true">📅</div>
              <h3>ניסיון משנת 2005</h3>
              <p>שנים של אהבה למקצוע ושל לקוחות מרוצים — עסקים ובתים ברחבי הארץ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TASTE HIGHLIGHT */}
      <section className="taste">
        <div className="wrap reveal">
          <span className="ic" aria-hidden="true">🎯</span>
          <h2>
            כל לקוח <span>והקפה שלו</span>
          </h2>
          <p>
            אין טעם אחד שמתאים לכולם. אנחנו טועמים, מכווננים ומדייקים יחד אתכם —
            את החוזק, רמת הקלייה והארומה — עד שהקפה מרגיש בדיוק כמו שאתם אוהבים.
          </p>
          <a href="#lead" className="btn btn-gold">
            בואו נתאים לכם קפה ←
          </a>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="aud">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <h2>
              קפה גינץ <span>לכל עסק</span>
            </h2>
          </div>
          <div className="aud-grid">
            <div className="aud-card reveal">
              <span className="ic" aria-hidden="true">🏢</span>
              <span>משרדים</span>
            </div>
            <div className="aud-card reveal">
              <span className="ic" aria-hidden="true">🍽️</span>
              <span>מסעדות ובתי קפה</span>
            </div>
            <div className="aud-card reveal">
              <span className="ic" aria-hidden="true">🏨</span>
              <span>מלונות</span>
            </div>
            <div className="aud-card reveal">
              <span className="ic" aria-hidden="true">🛍️</span>
              <span>חנויות וקייטרינג</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD */}
      <section className="lead-sec" id="lead">
        <div className="glowL" aria-hidden="true" />
        <div className="wrap lead-grid">
          <div className="reveal">
            <h2>בואו נתאים לכם את הקפה המושלם</h2>
            <p className="p">
              השאירו פרטים ונחזור אליכם עם הצעה אישית — קפה בוטיק שמתאים בדיוק
              לטעם ולצרכים של העסק שלכם. ללא התחייבות.
            </p>
            <ul className="checks">
              <li>
                <span className="ck" aria-hidden="true">✓</span> קלייה בוטיק טרייה במקום
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span> התאמת טעם אישית לכל לקוח
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span> פולים נבחרים מרחבי העולם
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span> ליווי, התקנה ושירות בכל הארץ
              </li>
              <li>
                <span className="ck" aria-hidden="true">✓</span> ניסיון ואמינות משנת 2005
              </li>
            </ul>
          </div>
          <div className="form-card reveal">
            <X10LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
