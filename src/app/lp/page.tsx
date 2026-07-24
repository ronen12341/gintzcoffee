import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Flame, Heart, ShieldCheck, Target } from "lucide-react";
import X10LeadForm from "@/components/X10LeadForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  alternates: { canonical: "/lp" },
  title: { absolute: "פתרונות קפה לעסקים | קפה גינץ" },
  description: "מכונה מקצועית, פולים טריים ושירות מלא לעסק. הצעה מותאמת לגודל ולצרכים שלכם." ,
  robots: { index: false, follow: false },
};

const CLIENT_LOGOS = [
  { src: "/lp/logos/electra.png", alt: "Electra" },
  { src: "/lp/logos/electra-group.png", alt: "Electra Group" },
  { src: "/lp/logos/electra-fm.svg", alt: "Electra FM" },
  { src: "/lp/logos/electra-construction.png", alt: "Electra Construction" },
  { src: "/lp/logos/electra-me.png", alt: "Electra M&E" },
  { src: "/lp/logos/electra-power.png", alt: "Electra Power" },
];

const FEATURE_CSS = `
.business-lp{--gold:#cc984c;--gold-light:#e5bb74;--ink:#0a0a09;--soft:#f5f3ef;background:#fff;color:var(--ink);font-family:var(--font-heebo),'Heebo',sans-serif;overflow-x:hidden}
.business-lp *{box-sizing:border-box}.business-lp a{text-decoration:none;color:inherit}
.business-lp .hero{min-height:720px;background:linear-gradient(90deg,rgba(0,0,0,.14),rgba(0,0,0,.14)),url('/lp/hero.png') center/cover no-repeat;color:#fff;display:flex;align-items:center;padding:52px 6vw}
.business-lp .hero-inner{width:min(1180px,100%);margin:auto;display:grid;grid-template-columns:1.1fr .78fr;gap:7vw;align-items:center;direction:ltr}
.business-lp .hero-copy,.business-lp .lead-card{direction:rtl}.business-lp .wordmark{display:inline-block;color:var(--gold-light);font-family:var(--font-montserrat),Arial,sans-serif;font-size:34px;font-weight:800;letter-spacing:3px;line-height:1;margin-bottom:45px;direction:ltr}
.business-lp .wordmark small{display:block;font-size:9px;letter-spacing:4px;margin-top:10px}
.business-lp h1{font-size:clamp(38px,4vw,64px);line-height:1.2;margin:0 0 24px;font-weight:900;letter-spacing:0}.business-lp h1 strong{color:var(--gold-light)}
.business-lp .hero-description{font-size:19px;color:#e9e9e9;margin:0 0 16px;max-width:560px;line-height:1.65}
.business-lp .machine-offer{display:inline-block;margin:0 0 28px;padding:10px 16px;border-right:3px solid var(--gold);background:rgba(0,0,0,.46);font-size:18px;font-weight:700}
.business-lp .quick-benefits{display:grid;grid-template-columns:repeat(4,1fr);max-width:620px}.business-lp .quick-benefit{padding:2px 13px;text-align:center;border-left:1px solid rgba(255,255,255,.24);font-size:14px}.business-lp .quick-benefit:last-child{border:0}.business-lp .quick-benefit svg{display:block;margin:0 auto 8px;color:var(--gold-light);width:28px;height:28px;stroke-width:1.8}
.business-lp .lead-card{background:#fff;color:var(--ink);padding:34px;border-radius:8px;box-shadow:0 18px 60px rgba(0,0,0,.28);max-width:430px;width:100%}.business-lp .lead-card h2{text-align:center;font-size:31px;line-height:1.2;margin:0 0 4px}.business-lp .form-intro{text-align:center;color:#666;margin:0 0 24px}
.business-lp .field{margin-bottom:12px}.business-lp .field label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.business-lp .field input,.business-lp .field select{width:100%;height:51px;border:1px solid #dedbd4;border-radius:3px;padding:0 15px;background:#fff;color:#222;outline:none}.business-lp .field input:focus,.business-lp .field select:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(204,152,76,.16)}.business-lp .field-error,.business-lp .server-error{color:#b42318;font-size:12px;margin:5px 2px 0}.business-lp .server-error{text-align:center;margin-bottom:8px}
.business-lp .submit-button{border:0;background:var(--gold);color:#111;font-weight:800;width:100%;height:55px;border-radius:3px;cursor:pointer;font-size:18px;transition:.2s}.business-lp .submit-button:hover{background:var(--gold-light);transform:translateY(-1px)}.business-lp .submit-button:disabled{cursor:wait;opacity:.7}.business-lp .privacy{text-align:center;font-size:11px;color:#888;margin:10px 0 0}.business-lp .lead-success{text-align:center;padding:55px 8px}.business-lp .success-icon{display:inline-flex;align-items:center;justify-content:center;width:58px;height:58px;border-radius:50%;background:#f4e6d1;color:#8a5a18;font-size:30px}.business-lp .lead-success h3{font-size:28px;margin:12px 0 6px}.business-lp .lead-success p{color:#555;margin:0}
.business-lp .clients{padding:44px 20px 52px;text-align:center}.business-lp .section-title{font-size:23px;margin:0;font-weight:800}.business-lp .dash{width:38px;height:2px;background:var(--gold);margin:14px auto 28px}.business-lp .logo-row{display:flex;align-items:center;justify-content:center;direction:ltr}.business-lp .logo-item{height:72px;min-width:150px;padding:12px 26px;border-right:1px solid #d3d3d3;display:flex;align-items:center;justify-content:center}.business-lp .logo-item:first-child{border:0}.business-lp .logo-item img{max-width:136px;max-height:46px;width:auto;height:auto;object-fit:contain}.business-lp .logo-row.secondary{gap:28px;margin-top:18px}.business-lp .logo-row.secondary .logo-item{min-width:205px;height:75px}.business-lp .logo-row.secondary img{max-width:160px;max-height:56px}.business-lp .logo-row.secondary .meitar{max-width:185px}
.business-lp .story{display:grid;grid-template-columns:1fr 1fr;background:var(--soft);min-height:460px}.business-lp .story-copy{display:flex;flex-direction:column;justify-content:center;padding:65px max(7vw,35px)}.business-lp .eyebrow{color:var(--gold);font-size:18px;margin:0 0 8px}.business-lp .story h2{font-size:42px;margin:0 0 22px;line-height:1.2}.business-lp .story-text{font-size:18px;color:#484848;max-width:520px;margin:0;line-height:1.7}.business-lp .promise{margin-top:28px;background:#111;color:#fff;padding:14px 22px;width:max-content;max-width:100%;border-right:4px solid var(--gold);font-weight:700}.business-lp .story-photo{position:relative;min-height:390px}.business-lp .story-photo img{object-fit:cover}
.business-lp .service-benefits{display:grid;grid-template-columns:repeat(3,1fr);max-width:1050px;margin:auto;padding:34px 20px}.business-lp .service-benefit{display:flex;align-items:center;justify-content:center;gap:18px;padding:0 30px;border-left:1px solid #ddd}.business-lp .service-benefit:last-child{border:0}.business-lp .service-benefit svg{color:var(--gold);width:38px;height:38px;stroke-width:1.6;flex:0 0 auto}.business-lp .service-benefit b{display:block;font-size:17px}.business-lp .service-benefit span{font-size:14px;color:#666}
.business-lp .closing{background:var(--ink);color:#fff;padding:24px max(7vw,24px)}.business-lp .closing-inner{max-width:1050px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}.business-lp .closing h2{font-size:22px;margin:0 0 2px;font-weight:800}.business-lp .closing p{color:#ccc;font-size:14px;margin:0}.business-lp .closing a{display:inline-flex;align-items:center;justify-content:center;background:var(--gold);color:#111;font-weight:800;padding:0 28px;height:48px;border-radius:3px;white-space:nowrap;flex-shrink:0}.business-lp footer{background:#050505;color:#777;text-align:center;padding:18px;font-size:12px}
@media(max-width:860px){.business-lp .hero{padding:35px 20px 48px;background-position:36% center}.business-lp .hero-inner{grid-template-columns:1fr;gap:34px}.business-lp .hero-copy{text-align:center}.business-lp .wordmark{margin-bottom:30px}.business-lp .hero-description{margin-left:auto;margin-right:auto}.business-lp .quick-benefits{margin:auto}.business-lp .lead-card{margin:auto}.business-lp .story{grid-template-columns:1fr}.business-lp .story-photo{grid-row:1}.business-lp .story-copy{text-align:center;padding:45px 24px}.business-lp .story-text{margin:auto}.business-lp .promise{margin-left:auto;margin-right:auto}.business-lp .service-benefits{grid-template-columns:1fr}.business-lp .service-benefit{border-left:0;border-bottom:1px solid #ddd;justify-content:flex-start;padding:20px 30px}.business-lp .service-benefit:last-child{border-bottom:0}.business-lp .closing-inner{flex-direction:column;text-align:center}.business-lp .closing a{width:100%}}
@media(max-width:560px){.business-lp .hero{min-height:0;padding:26px 16px 38px;background-position:27% center}.business-lp .wordmark{font-size:24px;letter-spacing:2px;margin-bottom:24px}.business-lp .wordmark small{font-size:8px}.business-lp h1{font-size:38px}.business-lp .hero-description{font-size:16px}.business-lp .machine-offer{font-size:16px}.business-lp .quick-benefits{grid-template-columns:repeat(2,1fr);gap:20px 0}.business-lp .quick-benefit:nth-child(2){border:0}.business-lp .lead-card{padding:25px 18px}.business-lp .lead-card h2{font-size:27px}.business-lp .clients{padding:35px 8px}.business-lp .logo-row{display:grid;grid-template-columns:repeat(2,1fr)}.business-lp .logo-item,.business-lp .logo-row.secondary .logo-item{min-width:0;height:70px;padding:12px 16px;border:0}.business-lp .logo-item img{max-width:125px;max-height:42px}.business-lp .logo-row.secondary{display:grid;grid-template-columns:repeat(2,1fr);gap:4px;margin-top:10px}.business-lp .logo-row.secondary .logo-item:last-child{grid-column:1/-1}.business-lp .story h2{font-size:33px}.business-lp .story-photo{min-height:280px}.business-lp .closing h2{font-size:19px}.business-lp .closing p{font-size:13px}}
`;

export default function LandingPage() {
  return (
    <div className="business-lp">
      <style dangerouslySetInnerHTML={{ __html: FEATURE_CSS }} />

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="wordmark">GINTZ COFFEE<small>COFFEE ROASTERS</small></div>
            <h1>קפה שנקלה <strong>במיוחד לעסק שלכם.</strong><br />מותאם לטעם העובדים שלכם.</h1>
            <p className="hero-description">מכונה מקצועית, פולים טריים ושירות מלא במקום אחד. פתרון אישי שמתאים בדיוק לגודל העסק שלכם.</p>
            <p className="machine-offer">אתם לא משלמים על המכונה — רק על הקפה ועל דמי טיפול ואחזקה.</p>
            <div className="quick-benefits" aria-label="יתרונות מרכזיים">
              <div className="quick-benefit"><Heart aria-hidden="true" />עובדים מרוצים</div>
              <div className="quick-benefit"><Coffee aria-hidden="true" />קפה טרי תמיד</div>
              <div className="quick-benefit"><Target aria-hidden="true" />התאמה אישית</div>
              <div className="quick-benefit"><Flame aria-hidden="true" />בית קלייה</div>
            </div>
          </div>
          <div className="lead-card"><X10LeadForm /></div>
        </div>
      </section>

      <section className="clients" aria-labelledby="clients-heading">
        <h2 className="section-title" id="clients-heading">חברות מובילות שבחרו בקפה גינץ</h2>
        <div className="dash" />
        <div className="logo-row">
          {CLIENT_LOGOS.map((logo) => (
            <div className="logo-item" key={logo.src}><Image src={logo.src} alt={logo.alt} width={170} height={60} /></div>
          ))}
        </div>
        <div className="logo-row secondary">
          <div className="logo-item"><Image src="/lp/logos/amazon.svg" alt="Amazon" width={180} height={60} /></div>
          <div className="logo-item"><Image src="/lp/logos/aws.svg" alt="AWS" width={160} height={60} /></div>
          <div className="logo-item"><Image className="meitar" src="/lp/logos/meitar.png" alt="Meitar Law Offices" width={200} height={65} /></div>
        </div>
      </section>

      <section className="story">
        <div className="story-copy">
          <p className="eyebrow">אנחנו בית קלייה</p>
          <h2>קולים. מתאימים. מספקים.</h2>
          <p className="story-text">אנחנו קולים את הפולים בעצמנו ומתאימים את התערובת המושלמת לטעם של העובדים שלכם.</p>
          <p className="promise">קפה טרי. טעם מושלם. כל יום.</p>
        </div>
        <div className="story-photo"><Image src="/lp/roaster.png" alt="פולי קפה טריים בבית הקלייה" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
      </section>

      <section className="service-benefits" aria-label="השירות שלנו">
        <div className="service-benefit"><ShieldCheck aria-hidden="true" /><div><b>שירות מלא</b><span>מכונה, תחזוקה ואספקה שוטפת</span></div></div>
        <div className="service-benefit"><Coffee aria-hidden="true" /><div><b>קפה טרי</b><span>קלוי ומסופק בכל חודש</span></div></div>
        <div className="service-benefit"><Target aria-hidden="true" /><div><b>התאמה אישית</b><span>תערובת ייחודית לטעם העובדים</span></div></div>
      </section>

      <section className="closing">
        <div className="closing-inner">
          <div>
            <h2>מוכנים לשדרג את חוויית הקפה במשרד?</h2>
            <p>השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית.</p>
          </div>
          <a href="#top">קבלו הצעת מחיר ←</a>
        </div>
      </section>
      <footer>© GINTZ COFFEE ROASTERS. כל הזכויות שמורות.</footer>
      <WhatsAppButton />
    </div>
  );
}
