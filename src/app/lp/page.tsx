import type { Metadata } from "next";
import X10LeadForm from "@/components/X10LeadForm";
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
    description: "קפה בוטיק בהתאמה אישית, התקנה ושירות בכל הארץ.",
    images: [X10_IMAGE],
  },
};

const PAGE_CSS = `
.x10p{
  --gold:#C8922A; --gold-l:#E9BE63; --gold-x:#f7dca0;
  --cream:#F5F0E8; --ink:#0c0602;
  font-family:var(--font-heebo),'Heebo',sans-serif;
  background:radial-gradient(120% 90% at 70% 25%, #3a2410 0%, #1d1004 48%, #0c0602 100%);
  color:var(--cream); overflow-x:hidden; min-height:100vh;
}
.x10p *{box-sizing:border-box}

/* ── main split: pitch + form ── */
.x10p .stage{max-width:1120px;margin:0 auto;padding:clamp(28px,6vh,64px) 22px;
  display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;min-height:100vh}

.x10p .eyebrow{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:13px;letter-spacing:.08em;
  color:var(--gold-x);background:rgba(200,146,42,.12);border:1px solid rgba(200,146,42,.3);
  padding:7px 15px;border-radius:999px;margin-bottom:20px}
.x10p .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--gold-l);box-shadow:0 0 10px var(--gold-l)}

.x10p h1{font-weight:900;line-height:1.0;margin-bottom:16px}
.x10p .brand{display:block;font-size:clamp(46px,7vw,84px);letter-spacing:-.02em;
  background:linear-gradient(100deg,var(--gold),var(--gold-x) 45%,#fff7e6 55%,var(--gold));
  -webkit-background-clip:text;background-clip:text;color:transparent}
.x10p .sub{display:block;font-size:clamp(20px,2.6vw,30px);font-weight:800;color:var(--cream);margin-top:8px}
.x10p .lead{font-size:clamp(15px,1.5vw,18px);font-weight:300;line-height:1.65;color:rgba(245,240,232,.72);max-width:480px;margin-bottom:24px}
.x10p .lead b{color:var(--gold-l);font-weight:600}

.x10p .checks{list-style:none;margin:0 0 26px;padding:0;display:flex;flex-direction:column;gap:11px}
.x10p .checks li{display:flex;gap:10px;align-items:center;font-size:15px;color:rgba(245,240,232,.9)}
.x10p .checks .ck{color:var(--gold-l);font-weight:900;font-size:17px}

.x10p .phone{display:inline-flex;align-items:center;gap:8px;font-size:15px;color:rgba(245,240,232,.6)}
.x10p .phone .ph{color:var(--gold-l);font-weight:800;font-size:19px;direction:ltr}

/* ── form card ── */
.x10p .form-card{position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(233,190,99,.22);
  border-radius:22px;padding:30px;backdrop-filter:blur(8px);box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.x10p .form-card::before{content:"";position:absolute;inset:-1px;border-radius:22px;pointer-events:none;
  background:radial-gradient(120% 80% at 50% -10%, rgba(233,190,99,.18), transparent 60%)}
.x10p .form-card h3{font-size:21px;font-weight:800;margin-bottom:6px;position:relative}
.x10p .form-card .ftag{font-size:13.5px;color:rgba(245,240,232,.6);margin-bottom:18px;position:relative}
.x10p .field{margin-bottom:13px;position:relative}
.x10p .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:rgba(245,240,232,.8)}
.x10p .field input,.x10p .field select,.x10p .field textarea{width:100%;padding:12px 14px;border-radius:11px;
  border:1px solid rgba(245,240,232,.18);background:rgba(0,0,0,.28);color:var(--cream);font-family:inherit;font-size:15px}
.x10p .field textarea{resize:none}
.x10p .field input::placeholder,.x10p .field textarea::placeholder{color:rgba(245,240,232,.3)}
.x10p .field input:focus,.x10p .field select:focus,.x10p .field textarea:focus{outline:none;border-color:var(--gold-l);box-shadow:0 0 0 3px rgba(200,146,42,.22)}
.x10p .field select option{color:#160c04}

.x10p .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:800;font-size:16px;
  padding:15px 28px;border-radius:13px;cursor:pointer;border:none;font-family:inherit;
  transition:transform .2s,box-shadow .2s,filter .2s}
.x10p .btn-gold{color:#2a1505;background:linear-gradient(180deg,var(--gold-l),var(--gold) 60%,#9c6e18);
  box-shadow:0 8px 26px -8px rgba(200,146,42,.6),inset 0 1px 0 rgba(255,255,255,.4)}
.x10p .btn-gold:hover{transform:translateY(-2px);filter:brightness(1.05)}
.x10p .submit{width:100%;margin-top:4px}
.x10p .ferr{color:#ff9c87;font-size:12.5px;margin-top:6px}
.x10p .ferr.center{text-align:center;margin-top:0;margin-bottom:8px}
.x10p .lead-success{text-align:center;padding:30px 8px}
.x10p .lead-success .ic{font-size:38px;display:inline-flex;align-items:center;justify-content:center;
  width:60px;height:60px;border-radius:50%;background:rgba(233,190,99,.15);border:1px solid rgba(233,190,99,.4);
  color:var(--gold-l);margin-bottom:13px}
.x10p .lead-success h3{font-size:23px;font-weight:800;margin-bottom:7px;color:var(--gold-l)}
.x10p .lead-success p{color:rgba(245,240,232,.75)}

/* ── slim trust bar ── */
.x10p .bar{border-top:1px solid rgba(200,146,42,.14);background:rgba(0,0,0,.25)}
.x10p .bar-in{max-width:1120px;margin:0 auto;padding:18px 22px;display:flex;flex-wrap:wrap;gap:14px 30px;
  align-items:center;justify-content:center;font-size:14px;color:rgba(245,240,232,.6)}
.x10p .bar-in .it{display:inline-flex;align-items:center;gap:8px}
.x10p .bar-in .it b{color:var(--cream);font-weight:600}

@media(max-width:860px){
  .x10p .stage{grid-template-columns:1fr;gap:28px;min-height:auto;text-align:center}
  .x10p .lead{margin-inline:auto}
  .x10p .checks{align-items:center}
  .x10p .checks li{justify-content:center}
  .x10p .form-card{text-align:right}
}
`;

export default function LandingPage() {
  return (
    <div className="x10p">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <section className="stage">
        <div className="pitch">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            בית קלייה בוטיק · משנת 2005
          </span>
          <h1>
            <span className="brand">קפה גינץ</span>
            <span className="sub">הקפה שמתאים בדיוק לטעם שלך</span>
          </h1>
          <p className="lead">
            אנחנו קולים את הפולים בעצמנו ומתאימים את <b>החוזק, הארומה והפרופיל</b>{" "}
            לחך של כל לקוח. השאירו פרטים — ונחזור אליכם עם הצעה אישית, ללא
            התחייבות.
          </p>
          <ul className="checks">
            <li>
              <span className="ck" aria-hidden="true">✓</span> קלייה בוטיק טרייה בהתאמה אישית
            </li>
            <li>
              <span className="ck" aria-hidden="true">✓</span> פולים נבחרים מרחבי העולם
            </li>
            <li>
              <span className="ck" aria-hidden="true">✓</span> התקנה, ליווי ושירות בכל הארץ
            </li>
          </ul>
          <span className="phone">
            לשיחה ישירה: <span className="ph">03-9600550</span>
          </span>
        </div>

        <div className="form-card">
          <X10LeadForm />
        </div>
      </section>

      <div className="bar">
        <div className="bar-in">
          <span className="it">☕ <b>קלייה במקום</b></span>
          <span className="it">🎯 <b>התאמה אישית</b></span>
          <span className="it">🔧 <b>שירות בכל הארץ</b></span>
          <span className="it">📅 <b>מאז 2005</b></span>
        </div>
      </div>
    </div>
  );
}
