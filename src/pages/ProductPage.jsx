import React, { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { PRODUCTS } from "../i18n/products";
import { useLang } from "../i18n/LanguageContext";

const N = "#0B1F4D", G = "#6EC026";
const WA_BOT = "25377094141", WA_COM = "25377239292";

const UI = {
  fr: { target: "Pour qui ?", problem: "Le problème", solution: "La solution Tamini", guarantees: "Vos garanties", option: "Option incluse en tout temps", ctaSub: "Gratuit · Sans engagement · Conforme Charia", back: "← Tous les produits", trust: "✓ Conforme Charia · ✓ Surplus redistribué · ✓ Règlement 3× plus rapide" },
  en: { target: "Who it's for", problem: "The problem", solution: "The Tamini solution", guarantees: "Your coverage", option: "Available option", ctaSub: "Free · No commitment · Sharia-compliant", back: "← All products", trust: "✓ Sharia-compliant · ✓ Surplus shared · ✓ Claims settled 3× faster" },
  ar: { target: "لمن هذا المنتج؟", problem: "المشكلة", solution: "حل تأميني", guarantees: "تغطياتك", option: "خيار متاح", ctaSub: "مجاني · بدون التزام · متوافق مع الشريعة", back: "→ كل المنتجات", trust: "✓ متوافق مع الشريعة · ✓ فائض معاد توزيعه · ✓ تسوية أسرع 3 مرات" },
};

function WaIcon({ size = 18 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.54-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.312-.726-5.994-1.957l-.42-.31-2.791.905.928-2.723-.34-.44A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>);
}

export default function ProductPage() {
  const { slug } = useParams();
  const { lang, rtl } = useLang();
  const [openG, setOpenG] = useState(0);

  const product = PRODUCTS[slug];
  if (!product) return <Navigate to="/" replace />;

  const t = product[lang];
  const ui = UI[lang];
  const waNum = product.b2b ? WA_COM : WA_BOT;
  const wa = (msg) => `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;
  const heroImg = `/images/${product.hero}.webp`;
  const backLink = product.segment === "particuliers" ? "/particuliers" : "/entreprises";

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ fontFamily: rtl ? "'Cairo','Inter',sans-serif" : "'Inter',system-ui,sans-serif", color: "#1E293B", background: "#fff" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700;800&family=Cairo:wght@400;600;700;800&display=swap');`}</style>

      {/* 1. HERO */}
      <section style={{ position: "relative", minHeight: 480, display: "flex", alignItems: "center", overflow: "hidden", background: N }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.85 }} />
        <div style={{ position: "absolute", inset: 0, background: rtl ? "linear-gradient(270deg, rgba(7,16,40,.94) 10%, rgba(11,31,77,.7) 55%, rgba(11,31,77,.3) 100%)" : "linear-gradient(90deg, rgba(7,16,40,.94) 10%, rgba(11,31,77,.7) 55%, rgba(11,31,77,.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "80px 24px 56px", width: "100%" }}>
          <div style={{ maxWidth: 580 }}>
            <Link to={backLink} style={{ fontSize: 13, color: G, fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: 18 }}>{ui.back}</Link>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(110,192,38,.4)", borderRadius: 50, marginBottom: 22 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: G }}>{t.badge}</span>
            </div>
            <h1 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(30px,5vw,50px)", fontWeight: 800, color: "#fff", lineHeight: 1.12, marginBottom: 18 }}>
              {t.h1}<br /><span style={{ color: G }}>{t.h2}</span>
            </h1>
            <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "rgba(255,255,255,.85)", lineHeight: 1.6, marginBottom: 30, fontStyle: rtl ? "normal" : "italic" }}>« {t.hook} »</p>
            <a href={wa(t.msg)} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", background: G, color: "#fff", borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none", boxShadow: "0 8px 32px rgba(110,192,38,.35)" }}>
              <WaIcon />{t.ctaBtn}
            </a>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)", marginTop: 8 }}>{ui.ctaSub}</div>
          </div>
        </div>
      </section>

      {/* 2. TARGET AUDIENCE + 3. PROBLEM */}
      <section style={{ padding: "56px 24px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 22px", background: "#fff", borderRadius: 14, border: "1px solid #e8ecf0", marginBottom: 32 }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>👥</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>{ui.target}</div>
              <p style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.65 }}>{product.target[lang]}</p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{ui.problem}</span>
            <p style={{ fontSize: "clamp(16px,2.2vw,20px)", color: "#334155", lineHeight: 1.75, marginTop: 16, fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif" }}>{t.problem}</p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{ui.solution}</span>
          <p style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.8, marginTop: 16 }}>{t.solution}</p>
        </div>
      </section>

      {/* 4. GUARANTEES (accordion) */}
      <section style={{ padding: "20px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(22px,3vw,28px)", fontWeight: 800, color: N, textAlign: "center", marginBottom: 28 }}>{ui.guarantees}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.guarantees.map(([title, desc], i) => (
              <div key={i} style={{ background: "#F8FAFF", borderRadius: 14, border: "1px solid #e8ecf0", overflow: "hidden" }}>
                <button onClick={() => setOpenG(openG === i ? -1 : i)} style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: rtl ? "right" : "left", gap: 12 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: G, fontWeight: 800, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 14.5, fontWeight: 700, color: N }}>{title}</span>
                  </span>
                  <span style={{ fontSize: 18, color: G, transform: openG === i ? "rotate(45deg)" : "none", transition: "transform .2s", flexShrink: 0 }}>+</span>
                </button>
                {openG === i && <div style={{ padding: rtl ? "0 46px 18px 20px" : "0 20px 18px 46px" }}><p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.7 }}>{desc}</p></div>}
              </div>
            ))}
          </div>
          {t.option && (
            <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(110,192,38,.08)", borderRadius: 12, border: "1px solid rgba(110,192,38,.2)", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20 }}>🛟</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{ui.option}</div>
                <p style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.6 }}>{t.option}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section style={{ padding: "64px 24px", background: `linear-gradient(135deg,${N},#0d2a5e)`, textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(22px,3.4vw,32px)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>{t.cta}</h2>
          <p style={{ fontSize: 12.5, color: G, fontWeight: 700, marginBottom: 26 }}>{ui.trust}</p>
          <a href={wa(t.msg)} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: G, color: "#fff", borderRadius: 12, fontSize: 16, fontWeight: 800, textDecoration: "none", boxShadow: "0 10px 32px rgba(110,192,38,.3)" }}>
            <WaIcon />{t.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
