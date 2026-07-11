import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import X10LeadForm from "@/components/X10LeadForm";
import X10Reveal from "@/components/X10Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { coffeeMachines } from "@/data/products";

const X10 = coffeeMachines.find((m) => m.id === "jura-x10");

const X10_IMAGE =
  X10?.image ?? "https://www.jura.co.il/wp-content/uploads/2024/06/X10Main.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/lp" },
  title: { absolute: "קפה גינץ — בית קלייה בוטיק | הקפה שמתאים בדיוק לטעם שלך" },
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
  background:#0c0602; color:var(--cream); overflow-x:hidden;
}
.x10p *{box-sizing:border-box}
.x10p a{text-decoration:none;color:inherit}
.x10p .wrap{max-width:1120px;margin:0 auto;padding:0 22px}

/* ── HERO ── */
.x10p .hero{position:relative;
  background:radial-gradient(120% 90% at 72% 30%, #43290f 0%, #251403 48%, #0e0703 100%);overflow:hidden}
.x10p .hero-grid{position:relative;z-index:2;max-width:1120px;margin:0 auto;padding:clamp(40px,7vh,72px) 22px;
  display:grid;grid-template-columns:1.02fr .98fr;gap:40px;align-items:center}

.x10p .eyebrow{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:13px;letter-spacing:.08em;
  color:var(--gold-x);background:rgba(200,146,42,.12);border:1px solid rgba(200,146,42,.3);
  padding:7px 15px;border-radius:999px;margin-bottom:20px}
.x10p .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--gold-l);box-shadow:0 0 10px var(--gold-l)}

.x10p h1{font-weight:900;line-height:1.0;margin-bottom:16px}
.x10p .brand{display:block;font-size:clamp(48px,7vw,92px);letter-spacing:-.02em;
  background:linear-gradient(100deg,var(--gold),var(--gold-x) 45%,#fff7e6 55%,var(--gold));
  -webkit-background-clip:text;background-clip:text;color:transparent}
.x10p .sub{display:block;font-size:clamp(20px,2.8vw,32px);font-weight:800;color:var(--cream);margin-top:8px}
.x10p .lead{font-size:clamp(15px,1.5vw,18px);font-weight:300;line-height:1.65;color:rgba(245,240,232,.74);max-width:490px;margin-bottom:26px}
.x10p .lead b{color:var(--gold-l);font-weight:600}

.x10p .cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.x10p .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:800;font-size:16px;
  padding:15px 30px;border-radius:13px;cursor:pointer;border:none;font-family:inherit;
  transition:transform .2s,filter .2s}
.x10p .btn-gold{color:#2a1505;background:linear-gradient(180deg,var(--gold-l),var(--gold) 60%,#9c6e18);
  box-shadow:0 8px 26px -8px rgba(200,146,42,.6),inset 0 1px 0 rgba(255,255,255,.4)}
.x10p .btn-gold:hover{transform:translateY(-2px);filter:brightness(1.05)}
.x10p .phone{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:rgba(245,240,232,.6)}
.x10p .phone .ph{color:var(--gold-l);font-weight:800;font-size:18px;direction:ltr}

/* machine */
.x10p .machine-wrap{position:relative;display:flex;align-items:center;justify-content:center;min-height:380px}
.x10p .glow{position:absolute;width:440px;height:440px;max-width:90%;border-radius:50%;
  background:radial-gradient(circle,rgba(233,190,99,.5) 0%,rgba(200,146,42,.22) 38%,transparent 68%);
  filter:blur(8px);animation:x10p_breathe 6s ease-in-out infinite}
@keyframes x10p_breathe{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
.x10p .machine{position:relative;z-index:2;width:min(380px,80%);animation:x10p_float 6s ease-in-out infinite}
.x10p .machine-img{width:100%;height:auto;display:block;filter:drop-shadow(0 28px 46px rgba(0,0,0,.6))}
@keyframes x10p_float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.x10p .badge{position:absolute;z-index:5;display:flex;align-items:center;gap:7px;
  background:rgba(22,12,4,.74);backdrop-filter:blur(10px);border:1px solid rgba(233,190,99,.4);
  color:var(--cream);font-weight:600;font-size:14px;padding:9px 14px;border-radius:12px;
  box-shadow:0 10px 28px -10px rgba(0,0,0,.7);white-space:nowrap}
.x10p .badge.b1{top:16%;right:0}
.x10p .badge.b2{bottom:16%;left:0}

/* ── benefits ── */
.x10p .benefits{background:#100802;border-top:1px solid rgba(200,146,42,.14)}
.x10p .ben-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:44px 22px;max-width:1120px;margin:0 auto}
.x10p .ben{background:rgba(255,255,255,.03);border:1px solid rgba(245,240,232,.08);border-radius:18px;padding:24px;
  transition:transform .3s,border-color .3s}
.x10p .ben:hover{transform:translateY(-4px);border-color:rgba(233,190,99,.4)}
.x10p .ben .ic{font-size:30px;display:block;margin-bottom:12px}
.x10p .ben h3{font-size:18px;font-weight:800;margin-bottom:7px}
.x10p .ben p{font-size:14.5px;font-weight:300;line-height:1.6;color:rgba(245,240,232,.62)}

/* ── lead ── */
.x10p .lead-sec{position:relative;background:radial-gradient(100% 100% at 50% 0%,#2a1808,#120902 72%);overflow:hidden}
.x10p .lead-grid{position:relative;max-width:1120px;margin:0 auto;padding:56px 22px;
  display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center}
.x10p .lead-grid h2{font-size:clamp(26px,3.4vw,38px);font-weight:900;margin-bottom:14px}
.x10p .lead-grid h2 span{color:var(--gold-l)}
.x10p .lead-grid .p{color:rgba(245,240,232,.65);font-size:16px;font-weight:300;line-height:1.7;margin-bottom:22px}
.x10p .checks{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.x10p .checks li{display:flex;gap:10px;align-items:center;font-size:15px;color:rgba(245,240,232,.9)}
.x10p .checks .ck{color:var(--gold-l);font-weight:900;font-size:17px}

/* form card */
.x10p .form-card{background:rgba(255,255,255,.04);border:1px solid rgba(233,190,99,.22);border-radius:22px;
  padding:30px;backdrop-filter:blur(8px);box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.x10p .form-card h3{font-size:21px;font-weight:800;margin-bottom:18px}
.x10p .field{margin-bottom:13px}
.x10p .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:rgba(245,240,232,.8)}
.x10p .field input,.x10p .field select,.x10p .field textarea{width:100%;padding:12px 14px;border-radius:11px;
  border:1px solid rgba(245,240,232,.18);background:rgba(0,0,0,.28);color:var(--cream);font-family:inherit;font-size:15px}
.x10p .field textarea{resize:none}
.x10p .field input::placeholder,.x10p .field textarea::placeholder{color:rgba(245,240,232,.3)}
.x10p .field input:focus,.x10p .field select:focus,.x10p .field textarea:focus{outline:none;border-color:var(--gold-l);box-shadow:0 0 0 3px rgba(200,146,42,.22)}
.x10p .field select option{color:#160c04}
.x10p .submit{width:100%;margin-top:4px}
.x10p .ferr{color:#ff9c87;font-size:12.5px;margin-top:6px}
.x10p .ferr.center{text-align:center;margin-top:0;margin-bottom:8px}
.x10p .lead-success{text-align:center;padding:30px 8px}
.x10p .lead-success .ic{font-size:38px;display:inline-flex;align-items:center;justify-content:center;
  width:60px;height:60px;border-radius:50%;background:rgba(233,190,99,.15);border:1px solid rgba(233,190,99,.4);
  color:var(--gold-l);margin-bottom:13px}
.x10p .lead-success h3{font-size:23px;font-weight:800;margin-bottom:7px;color:var(--gold-l)}
.x10p .lead-success p{color:rgba(245,240,232,.75)}

/* reveal */
.x10p .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.x10p .reveal.in{opacity:1;transform:none}

@media(max-width:860px){
  .x10p .hero-grid{grid-template-columns:1fr;gap:30px;text-align:center}
  .x10p .lead{margin-inline:auto}
  .x10p .cta-row{justify-content:center}
  .x10p .machine-wrap{order:-1;min-height:300px}
  .x10p .ben-grid{grid-template-columns:1fr;gap:14px}
  .x10p .lead-grid{grid-template-columns:1fr;gap:28px}
  .x10p .form-card{text-align:right}
}
@media (prefers-reduced-motion: reduce){
  .x10p .machine,.x10p .glow{animation:none !important}
  .x10p .reveal{opacity:1 !important;transform:none !important}
}
`;

export default function LandingPage() {
  return (
    <div className="x10p">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <X10Reveal />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
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
              אנחנו קולים את הפולים בעצמנו ומתאימים את{" "}
              <b>החוזק, הארומה והפרופיל</b> לחך של כל לקוח — קפה בוטיק אמיתי,
              לעסק ולבית.
            </p>
            <div className="cta-row">
              <a href="#lead" className="btn btn-gold">
                קבלו הצעה אישית ←
              </a>
              <span className="phone">
                או חייגו: <span className="ph">03-9600550</span>
              </span>
            </div>
          </div>

          <div className="machine-wrap">
            <div className="glow" aria-hidden="true" />
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
            <div className="badge b1">🔥 קלייה טרייה</div>
            <div className="badge b2">🎯 התאמה אישית</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <div className="ben-grid">
          <div className="ben reveal">
            <span className="ic" aria-hidden="true">☕</span>
            <h3>קלייה בוטיק</h3>
            <p>קולים את הפולים בעצמנו במנות קטנות — קפה טרי, ארומטי ועשיר בכל כוס.</p>
          </div>
          <div className="ben reveal">
            <span className="ic" aria-hidden="true">🎯</span>
            <h3>התאמה אישית לטעם</h3>
            <p>מכווננים את החוזק, הארומה והפרופיל לחך שלכם — עד שזה בדיוק מה שאתם אוהבים.</p>
          </div>
          <div className="ben reveal">
            <span className="ic" aria-hidden="true">🔧</span>
            <h3>שירות בכל הארץ</h3>
            <p>התקנה, ליווי ותחזוקה — צוות שלנו דואג שהכול יעבוד חלק, מאז 2005.</p>
          </div>
        </div>
      </section>

      {/* LEAD */}
      <section className="lead-sec" id="lead">
        <div className="lead-grid">
          <div className="reveal">
            <h2>
              בואו נתאים לכם את <span>הקפה המושלם</span>
            </h2>
            <p className="p">
              השאירו פרטים ונחזור אליכם עם הצעה אישית — קפה בוטיק שמתאים בדיוק
              לטעם ולצרכים שלכם. ללא התחייבות.
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
          </div>
          <div className="form-card reveal">
            <X10LeadForm />
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
