import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

const F = {
  fr: {
    tagline: "Solidarité aujourd'hui, sérénité demain.",
    colP: "Particuliers", colE: "Entreprises", colR: "Ressources",
    p: [["Automobile", "/particuliers/auto"], ["Habitation", "/particuliers/habitation"], ["Voyage", "/particuliers/voyage"], ["Éducation", "/particuliers/education"], ["Accidents & Groupe", "/particuliers/accidents"]],
    e: [["Multirisque Pro", "/entreprises/multirisque"], ["Responsabilité Civile", "/entreprises/rc"], ["Maritime", "/entreprises/maritime"], ["Flotte", "/entreprises/flotte"], ["Chantier", "/entreprises/chantier"], ["Garantie Bonne Exécution", "/entreprises/bond"]],
    r: [["FAQ", "/faq"], ["Blog", "/blog"], ["Confidentialité", "/confidentialite"]],
    addr: "Place du 27 Juin, Djibouti, R.D.",
    contactTitle: "Contact",
    legal: "© 2026 Tamini Insurance SA · Première assurance Takaful djiboutienne · Agréée ARSD",
    followUs: "Suivez-nous",
  },
  en: {
    tagline: "Solidarity today, serenity tomorrow.",
    colP: "Individuals", colE: "Business", colR: "Resources",
    p: [["Motor", "/particuliers/auto"], ["Home", "/particuliers/habitation"], ["Travel", "/particuliers/voyage"], ["Education", "/particuliers/education"], ["Accidents & Group", "/particuliers/accidents"]],
    e: [["Business Multi-risk", "/entreprises/multirisque"], ["General Liability", "/entreprises/rc"], ["Marine", "/entreprises/maritime"], ["Fleet", "/entreprises/flotte"], ["Construction", "/entreprises/chantier"], ["Performance Bond", "/entreprises/bond"]],
    r: [["FAQ", "/faq"], ["Blog", "/blog"], ["Privacy", "/confidentialite"]],
    addr: "Place du 27 Juin, Djibouti",
    contactTitle: "Contact",
    legal: "© 2026 Tamini Insurance SA · Djibouti's first Takaful insurer · ARSD licensed",
    followUs: "Follow us",
  },
  ar: {
    tagline: "تضامن اليوم، طمأنينة الغد.",
    colP: "الأفراد", colE: "الشركات", colR: "الموارد",
    p: [["السيارات", "/particuliers/auto"], ["المسكن", "/particuliers/habitation"], ["السفر", "/particuliers/voyage"], ["التعليم", "/particuliers/education"], ["الحوادث والمجموعات", "/particuliers/accidents"]],
    e: [["متعدد المخاطر", "/entreprises/multirisque"], ["المسؤولية المدنية", "/entreprises/rc"], ["البحري", "/entreprises/maritime"], ["الأسطول", "/entreprises/flotte"], ["المقاولات", "/entreprises/chantier"], ["ضمان حسن التنفيذ", "/entreprises/bond"]],
    r: [["الأسئلة الشائعة", "/faq"], ["المدونة", "/blog"], ["الخصوصية", "/confidentialite"]],
    addr: "ساحة 27 يونيو، جيبوتي",
    contactTitle: "اتصل بنا",
    legal: "© 2026 Tamini Insurance SA · أول شركة تأمين تكافلي جيبوتية · مرخصة من ARSD",
    followUs: "تابعونا",
  },
};

const SOCIAL = {
  facebook: "https://www.facebook.com/Tamini.insurance",
  linkedin: "https://www.linkedin.com/company/70424040/",
};

export default function Footer() {
  const { lang, rtl } = useLang();
  const t = F[lang];

  return (
    <footer dir={rtl ? "rtl" : "ltr"} style={{ background: "#040b18", padding: "56px 20px 28px", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 36, marginBottom: 40 }}>
          {/* Brand + contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/images/logo.png" alt="Tamini Insurance SA — Assurance Takaful Djibouti" style={{ width: 34, height: 34, objectFit: "contain" }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 15, color: "#fff" }}>TAMINI</div>
                <div style={{ fontSize: 7.5, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 2 }}>INSURANCE SA</div>
              </div>
            </div>
            <p style={{ fontSize: 13, fontStyle: rtl ? "normal" : "italic", color: "rgba(255,255,255,0.3)", marginBottom: 14, lineHeight: 1.6 }}>{t.tagline}</p>
            <div style={{ fontSize: 12.5, lineHeight: 2 }}>
              <div>📍 {t.addr}</div>
              <div>📞 +253 21 35 04 03</div>
              <div>💬 +253 77 09 41 41</div>
              <div>✉️ info@tamini-insurance.com</div>
            </div>
            {/* Social */}
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{t.followUs}</div>
              <div style={{ display: "flex", gap: 10 }}>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
                </a>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 01-2.07-2.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <FooterCol title={t.colP} items={t.p} />
          <FooterCol title={t.colE} items={t.e} />
          <FooterCol title={t.colR} items={t.r} />
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20, fontSize: 11.5, textAlign: "center" }}>{t.legal}</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 style={{ fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>{title}</h4>
      {items.map(([label, to]) => (
        <Link key={to} to={to} style={{ display: "block", fontSize: 12.5, marginBottom: 9, color: "rgba(255,255,255,0.5)", textDecoration: "none", lineHeight: 1.5 }}>{label}</Link>
      ))}
    </div>
  );
}

const socialBtn = {
  width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.08)",
  display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)",
  textDecoration: "none", transition: "all 0.2s",
};
