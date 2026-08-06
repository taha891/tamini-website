import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, PARTICULIERS, ENTREPRISES } from "../i18n/products";
import { useLang } from "../i18n/LanguageContext";
import Seo, { breadcrumbSchema } from "../seo/Seo";
import { PAGE_META } from "../seo/meta";

const N = "#0B1F4D", G = "#6EC026";

const UI = {
  fr: {
    particuliers: { title: "Assurances Particuliers", sub: "Protégez ce qui compte : votre famille, votre maison, vos déplacements." },
    entreprises: { title: "Assurances Entreprises", sub: "Des solutions Takaful complètes pour sécuriser votre activité et vos actifs." },
    discover: "Découvrir →",
  },
  en: {
    particuliers: { title: "Personal Insurance", sub: "Protect what matters: your family, your home, your travels." },
    entreprises: { title: "Business Insurance", sub: "Complete Takaful solutions to secure your activity and assets." },
    discover: "Discover →",
  },
  ar: {
    particuliers: { title: "تأمينات الأفراد", sub: "احمِ ما يهم: عائلتك، منزلك، تنقلاتك." },
    entreprises: { title: "تأمينات الشركات", sub: "حلول تكافلية شاملة لتأمين نشاطك وأصولك." },
    discover: "اكتشف ←",
  },
};

export default function Hub({ segment }) {
  const { lang, rtl } = useLang();
  const ui = UI[lang];
  const meta = ui[segment];
  const slugs = segment === "particuliers" ? PARTICULIERS : ENTREPRISES;
  const seoMeta = PAGE_META[segment][lang];

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ fontFamily: rtl ? "'Cairo','Inter',sans-serif" : "'Inter',system-ui,sans-serif", color: "#1E293B", background: "#fff", minHeight: "80vh" }}>
      <Seo
        title={seoMeta.title}
        description={seoMeta.description}
        path={`/${segment}`}
        schema={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: meta.title, path: `/${segment}` },
        ])}
      />

      {/* Header band */}
      <div style={{ background: `linear-gradient(135deg,${N},#0d2a5e)`, padding: "64px 24px 56px", textAlign: "center" }}>
        <h1 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>{meta.title}</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>{meta.sub}</p>
      </div>

      {/* Product cards */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 22 }}>
          {slugs.map((slug) => {
            const p = PRODUCTS[slug];
            const t = p[lang];
            const to = `/${segment}/${slug}`;
            return (
              <Link key={slug} to={to} style={{ textDecoration: "none", borderRadius: 18, overflow: "hidden", border: "1px solid #e8ecf0", background: "#fff", display: "block", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 48px rgba(11,31,77,.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ height: 170, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: `url(/images/${p.card}.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,31,77,.15) 30%, rgba(7,16,40,.82))" }} />
                  <div style={{ position: "absolute", bottom: 14, insetInlineStart: 18, insetInlineEnd: 18 }}>
                    <h3 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>{t.badge}</h3>
                  </div>
                </div>
                <div style={{ padding: "16px 20px 20px" }}>
                  <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, marginBottom: 14, fontStyle: rtl ? "normal" : "italic" }}>« {t.hook} »</p>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: G }}>{ui.discover}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
