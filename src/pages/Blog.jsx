import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import Seo from "../seo/Seo";
import { PAGE_META } from "../seo/meta";

const N = "#0B1F4D", G = "#6EC026";

const B = {
  fr: {
    title: "Le Blog Tamini",
    sub: "Comprendre le Takaful, choisir la bonne assurance, protéger ce qui compte — nos guides pour Djibouti.",
    cats: ["Tous", "Comprendre le Takaful", "Guides produits", "Sinistres", "Entreprises", "Groupe & Actualités"],
    readMore: "Lire l'article",
    featuredLabel: "À la une",
    articles: [
      { cat: "Comprendre le Takaful", tag: "ÉDUCATION", date: "Juil. 2026", title: "Takaful vs assurance classique : 5 différences essentielles", excerpt: "Tout ce que vous devez savoir avant de choisir votre assurance à Djibouti.", featured: true },
      { cat: "Comprendre le Takaful", tag: "FAQ", date: "Juil. 2026", title: "L'assurance est-elle halal ou haram ? Réponse complète", excerpt: "Ce que disent les savants et comment le modèle Takaful répond à la question." },
      { cat: "Guides produits", tag: "GUIDE", date: "Août 2026", title: "Comment choisir son assurance auto à Djibouti en 2026", excerpt: "Comparatif des formules, prix moyens et pièges à éviter." },
      { cat: "Sinistres", tag: "PRATIQUE", date: "Août 2026", title: "Accident de voiture : que faire étape par étape", excerpt: "Le guide complet pour bien réagir et déclarer rapidement votre sinistre." },
      { cat: "Guides produits", tag: "GUIDE", date: "Sept. 2026", title: "Assurance voyage : guide complet de l'attestation visa", excerpt: "Documents nécessaires, délais et conseils pour votre prochain voyage." },
      { cat: "Entreprises", tag: "B2B", date: "Oct. 2026", title: "Assurance maritime : guide pour les transitaires du port", excerpt: "Ce que le port de Djibouti impose et comment bien vous couvrir." },
      { cat: "Comprendre le Takaful", tag: "ÉDUCATION", date: "Oct. 2026", title: "Le surplus Takaful expliqué simplement", excerpt: "Comment votre argent revient à la communauté des assurés." },
      { cat: "Entreprises", tag: "B2B", date: "Nov. 2026", title: "Multirisque vs RC Pro : quelle différence pour mon entreprise ?", excerpt: "Comprendre les deux garanties essentielles pour protéger votre activité." },
      { cat: "Groupe & Actualités", tag: "GROUPE", date: "Avr. 2027", title: "Tamini en Afrique de l'Est : Kenya, Ouganda, Somaliland", excerpt: "Notre expansion régionale et ce qu'elle signifie pour nos clients." },
    ],
  },
  en: {
    title: "The Tamini Blog",
    sub: "Understanding Takaful, choosing the right insurance, protecting what matters — our guides for Djibouti.",
    cats: ["All", "Understanding Takaful", "Product guides", "Claims", "Business", "Group & News"],
    readMore: "Read article",
    featuredLabel: "Featured",
    articles: [
      { cat: "Understanding Takaful", tag: "EDUCATION", date: "Jul. 2026", title: "Takaful vs conventional insurance: 5 key differences", excerpt: "Everything you need to know before choosing your insurance in Djibouti.", featured: true },
      { cat: "Understanding Takaful", tag: "FAQ", date: "Jul. 2026", title: "Is insurance halal or haram? Complete answer", excerpt: "What scholars say and how the Takaful model addresses the question." },
      { cat: "Product guides", tag: "GUIDE", date: "Aug. 2026", title: "How to choose car insurance in Djibouti in 2026", excerpt: "Comparing plans, average prices and pitfalls to avoid." },
      { cat: "Claims", tag: "PRACTICAL", date: "Aug. 2026", title: "Car accident: what to do step by step", excerpt: "The complete guide to reacting well and filing your claim quickly." },
      { cat: "Product guides", tag: "GUIDE", date: "Sep. 2026", title: "Travel insurance: complete visa attestation guide", excerpt: "Required documents, timelines and tips for your next trip." },
      { cat: "Business", tag: "B2B", date: "Oct. 2026", title: "Marine insurance: a guide for port freight forwarders", excerpt: "What Djibouti port requires and how to properly cover yourself." },
      { cat: "Understanding Takaful", tag: "EDUCATION", date: "Oct. 2026", title: "The Takaful surplus explained simply", excerpt: "How your money comes back to the community of policyholders." },
      { cat: "Business", tag: "B2B", date: "Nov. 2026", title: "Multi-risk vs Professional Liability: what's the difference?", excerpt: "Understanding the two essential guarantees to protect your business." },
      { cat: "Group & News", tag: "GROUP", date: "Apr. 2027", title: "Tamini in East Africa: Kenya, Uganda, Somaliland", excerpt: "Our regional expansion and what it means for our customers." },
    ],
  },
  ar: {
    title: "مدونة تأميني",
    sub: "فهم التكافل، اختيار التأمين المناسب، حماية ما يهم — أدلتنا لجيبوتي.",
    cats: ["الكل", "فهم التكافل", "أدلة المنتجات", "المطالبات", "الشركات", "المجموعة والأخبار"],
    readMore: "اقرأ المقال",
    featuredLabel: "مميز",
    articles: [
      { cat: "فهم التكافل", tag: "تعليم", date: "يوليو 2026", title: "التكافل مقابل التأمين التقليدي: 5 فروق أساسية", excerpt: "كل ما تحتاجون معرفته قبل اختيار تأمينكم في جيبوتي.", featured: true },
      { cat: "فهم التكافل", tag: "أسئلة", date: "يوليو 2026", title: "هل التأمين حلال أم حرام؟ إجابة كاملة", excerpt: "ما يقوله العلماء وكيف يجيب نموذج التكافل على السؤال." },
      { cat: "أدلة المنتجات", tag: "دليل", date: "أغسطس 2026", title: "كيف تختار تأمين سيارتك في جيبوتي 2026", excerpt: "مقارنة الصيغ ومتوسط الأسعار والأخطاء الواجب تجنبها." },
      { cat: "المطالبات", tag: "عملي", date: "أغسطس 2026", title: "حادث سيارة: ماذا تفعل خطوة بخطوة", excerpt: "الدليل الكامل للتصرف الصحيح والتصريح السريع بمطالبتكم." },
      { cat: "أدلة المنتجات", tag: "دليل", date: "سبتمبر 2026", title: "تأمين السفر: دليل شهادة التأشيرة الكامل", excerpt: "الوثائق المطلوبة والمهل والنصائح لرحلتكم القادمة." },
      { cat: "الشركات", tag: "أعمال", date: "أكتوبر 2026", title: "التأمين البحري: دليل لوكلاء الشحن بالميناء", excerpt: "ما يفرضه ميناء جيبوتي وكيف تؤمّنون أنفسكم جيداً." },
      { cat: "فهم التكافل", tag: "تعليم", date: "أكتوبر 2026", title: "فائض التكافل موضّح ببساطة", excerpt: "كيف تعود أموالكم إلى مجتمع المؤمَّن عليهم." },
      { cat: "الشركات", tag: "أعمال", date: "نوفمبر 2026", title: "متعدد المخاطر مقابل المسؤولية المهنية: ما الفرق؟", excerpt: "فهم الضمانين الأساسيين لحماية نشاطكم." },
      { cat: "المجموعة والأخبار", tag: "مجموعة", date: "أبريل 2027", title: "تأميني في شرق أفريقيا: كينيا، أوغندا، صوماليلاند", excerpt: "توسعنا الإقليمي وما يعنيه لعملائنا." },
    ],
  },
};

export default function Blog() {
  const { lang, rtl } = useLang();
  const [cat, setCat] = useState(0);
  const t = B[lang];
  const filtered = cat === 0 ? t.articles : t.articles.filter(a => a.cat === t.cats[cat]);
  const featured = t.articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);
  const seoMeta = PAGE_META.blog[lang];

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ fontFamily: rtl ? "'Cairo','Inter',sans-serif" : "'Inter',system-ui,sans-serif", color: "#1E293B", background: "#fff", minHeight: "80vh" }}>
      <Seo title={seoMeta.title} description={seoMeta.description} path="/blog" />
      <style>{`
        .art-card{transition:all .25s}
        .art-card:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(11,31,77,.1);border-color:#6EC026}
      `}</style>

      <div style={{ position: "relative", background: N, padding: "64px 24px 56px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/photo-team.webp)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,16,40,.93), rgba(11,31,77,.85))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>{t.title}</h1>
          <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.65)", lineHeight: 1.7 }}>{t.sub}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
          {t.cats.map((c, i) => (
            <button key={i} onClick={() => setCat(i)} style={{
              padding: "9px 18px", borderRadius: 50, border: "2px solid", cursor: "pointer", fontSize: 12.5, fontWeight: 700,
              background: cat === i ? N : "#fff", color: cat === i ? "#fff" : "#64748b", borderColor: cat === i ? N : "#e2e8f0",
            }}>{c}</button>
          ))}
        </div>

        {cat === 0 && featured && (
          <div className="art-card" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 0, borderRadius: 20, overflow: "hidden", border: "1px solid #e8ecf0", marginBottom: 40, cursor: "pointer" }}>
            <div style={{ background: N, padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>⭐ {t.featuredLabel} · {featured.tag}</span>
              <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 14 }}>{featured.title}</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.7, marginBottom: 20 }}>{featured.excerpt}</p>
              <span style={{ fontSize: 13, fontWeight: 700, color: G }}>{t.readMore} →</span>
            </div>
            <img src="/images/photo-woman-tablet.webp" alt={featured.title} loading="lazy" width="600" height="400" style={{ width: "100%", height: "100%", minHeight: 240, objectFit: "cover" }} />
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
          {rest.map((a, i) => (
            <div key={i} className="art-card" style={{ background: "#fff", borderRadius: 16, padding: "24px 22px", border: "1px solid #e8ecf0", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 1.5, background: "rgba(110,192,38,.08)", padding: "3px 10px", borderRadius: 4 }}>{a.tag}</span>
                <span style={{ fontSize: 11, color: "#94a3b8" }}>{a.date}</span>
              </div>
              <h3 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: N, lineHeight: 1.35, marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{a.excerpt}</p>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: G }}>{t.readMore} →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
