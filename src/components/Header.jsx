import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang, LANGS } from "../i18n/LanguageContext";

const NAV = {
  fr: {
    particuliers: "Particuliers",
    entreprises: "Entreprises",
    takaful: "Le Takaful",
    group: "Le Groupe",
    faq: "FAQ",
    blog: "Blog",
    quote: "Devis gratuit",
    // sous-menus
    subP: [
      ["Assurance Automobile", "/particuliers/auto"],
      ["Assurance Habitation", "/particuliers/habitation"],
      ["Assurance Voyage", "/particuliers/voyage"],
      ["Takaful Éducation", "/particuliers/education"],
      ["Accidents & Groupe", "/particuliers/accidents"],
    ],
    subE: [
      ["Multirisque Professionnelle", "/entreprises/multirisque"],
      ["Responsabilité Civile", "/entreprises/rc"],
      ["Assurance Maritime", "/entreprises/maritime"],
      ["Flotte Automobile", "/entreprises/flotte"],
      ["Assurance Chantier", "/entreprises/chantier"],
      ["Garantie Bonne Exécution", "/entreprises/bond"],
    ],
  },
  en: {
    particuliers: "Individuals",
    entreprises: "Business",
    takaful: "Takaful",
    group: "The Group",
    faq: "FAQ",
    blog: "Blog",
    quote: "Free quote",
    subP: [
      ["Motor Insurance", "/particuliers/auto"],
      ["Home Insurance", "/particuliers/habitation"],
      ["Travel Insurance", "/particuliers/voyage"],
      ["Education Takaful", "/particuliers/education"],
      ["Accidents & Group", "/particuliers/accidents"],
    ],
    subE: [
      ["Business Multi-risk", "/entreprises/multirisque"],
      ["General Liability", "/entreprises/rc"],
      ["Marine Insurance", "/entreprises/maritime"],
      ["Motor Fleet", "/entreprises/flotte"],
      ["Construction Insurance", "/entreprises/chantier"],
      ["Performance Bond", "/entreprises/bond"],
    ],
  },
  ar: {
    particuliers: "الأفراد",
    entreprises: "الشركات",
    takaful: "التكافل",
    group: "المجموعة",
    faq: "الأسئلة",
    blog: "المدونة",
    quote: "عرض سعر مجاني",
    subP: [
      ["تأمين السيارات", "/particuliers/auto"],
      ["تأمين المسكن", "/particuliers/habitation"],
      ["تأمين السفر", "/particuliers/voyage"],
      ["تكافل التعليم", "/particuliers/education"],
      ["الحوادث والمجموعات", "/particuliers/accidents"],
    ],
    subE: [
      ["متعدد المخاطر", "/entreprises/multirisque"],
      ["المسؤولية المدنية", "/entreprises/rc"],
      ["التأمين البحري", "/entreprises/maritime"],
      ["أسطول المركبات", "/entreprises/flotte"],
      ["تأمين المقاولات", "/entreprises/chantier"],
      ["ضمان حسن التنفيذ", "/entreprises/bond"],
    ],
  },
};

const WA_BOT = "25377094141";

export default function Header() {
  const { lang, setLang, rtl } = useLang();
  const t = NAV[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdown(null);
  }, [location]);

  const onDark = location.pathname === "/" && !scrolled;

  return (
    <header
      dir={rtl ? "rtl" : "ltr"}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: scrolled || location.pathname !== "/" ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled || location.pathname !== "/" ? "1px solid rgba(11,31,77,0.07)" : "none",
        transition: "all 0.35s",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66, padding: "0 20px" }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/images/logo.png" alt="Tamini Insurance" style={{ width: 40, height: 40, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: onDark ? "#fff" : "#0B1F4D", lineHeight: 1, letterSpacing: 1 }}>TAMINI</div>
            <div style={{ fontSize: 8, fontWeight: 700, color: onDark ? "rgba(255,255,255,0.7)" : "#6EC026", letterSpacing: 2 }}>INSURANCE SA</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="tamini-desktop-nav">
          {/* Particuliers dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setDropdown("p")} onMouseLeave={() => setDropdown(null)}>
            <button style={navBtn(onDark)}>{t.particuliers} ▾</button>
            {dropdown === "p" && <DropMenu items={t.subP} rtl={rtl} />}
          </div>
          {/* Entreprises dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setDropdown("e")} onMouseLeave={() => setDropdown(null)}>
            <button style={navBtn(onDark)}>{t.entreprises} ▾</button>
            {dropdown === "e" && <DropMenu items={t.subE} rtl={rtl} />}
          </div>
          <Link to="/faq" style={navBtn(onDark)}>{t.faq}</Link>
          <Link to="/blog" style={navBtn(onDark)}>{t.blog}</Link>
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Language switch */}
          <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: `1px solid ${onDark ? "rgba(255,255,255,0.25)" : "rgba(11,31,77,0.12)"}` }}>
            {Object.entries(LANGS).map(([l, label]) => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "5px 12px", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer",
                background: lang === l ? "#0B1F4D" : "transparent",
                color: lang === l ? "#fff" : onDark ? "rgba(255,255,255,0.75)" : "#64748b",
                transition: "all 0.2s",
              }}>{label}</button>
            ))}
          </div>
          <a href={`https://wa.me/${WA_BOT}`} target="_blank" rel="noopener noreferrer" style={{
            padding: "9px 18px", background: "#6EC026", color: "#fff", borderRadius: 9,
            fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
          }} className="tamini-desktop-nav">{t.quote}</a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: onDark ? "#fff" : "#0B1F4D", padding: 4 }} className="tamini-mobile-toggle">{menuOpen ? "✕" : "☰"}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #f1f5f9", padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
          <MobileGroup title={t.particuliers} items={t.subP} />
          <MobileGroup title={t.entreprises} items={t.subE} />
          <Link to="/faq" style={mobileLink}>{t.faq}</Link>
          <Link to="/blog" style={mobileLink}>{t.blog}</Link>
          <a href={`https://wa.me/${WA_BOT}`} target="_blank" rel="noopener noreferrer" style={{ marginTop: 10, padding: "14px 24px", background: "#6EC026", color: "#fff", borderRadius: 10, fontSize: 15, fontWeight: 700, textAlign: "center", textDecoration: "none" }}>{t.quote}</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .tamini-desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .tamini-mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function navBtn(onDark) {
  return {
    background: "none", border: "none", cursor: "pointer",
    color: onDark ? "rgba(255,255,255,0.9)" : "#1E293B",
    fontSize: 14, fontWeight: 500, padding: "8px 12px", borderRadius: 8,
    textDecoration: "none", fontFamily: "inherit",
  };
}

function DropMenu({ items, rtl }) {
  return (
    <div style={{
      position: "absolute", top: "100%", [rtl ? "right" : "left"]: 0,
      background: "#fff", borderRadius: 12, boxShadow: "0 12px 32px rgba(11,31,77,0.12)",
      border: "1px solid #eef1f5", padding: 8, minWidth: 230, zIndex: 100,
    }}>
      {items.map(([label, to]) => (
        <Link key={to} to={to} style={{
          display: "block", padding: "10px 14px", borderRadius: 8, fontSize: 13.5,
          color: "#1E293B", textDecoration: "none", fontWeight: 500,
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#f0f4ff"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >{label}</Link>
      ))}
    </div>
  );
}

function MobileGroup({ title, items }) {
  return (
    <div style={{ borderBottom: "1px solid #f8fafc", paddingBottom: 8, marginBottom: 4 }}>
      <div style={{ padding: "10px 8px 4px", fontSize: 12, fontWeight: 800, color: "#0B1F4D", textTransform: "uppercase", letterSpacing: 1 }}>{title}</div>
      {items.map(([label, to]) => (
        <Link key={to} to={to} style={{ display: "block", padding: "9px 16px", fontSize: 14, color: "#475569", textDecoration: "none" }}>{label}</Link>
      ))}
    </div>
  );
}

const mobileLink = { padding: "12px 8px", borderBottom: "1px solid #f8fafc", fontSize: 15, fontWeight: 600, color: "#1E293B", textDecoration: "none" };
