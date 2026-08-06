import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { PRODUCTS, PARTICULIERS, ENTREPRISES } from "../i18n/products";
import Seo, { organizationSchema } from "../seo/Seo";
import { PAGE_META } from "../seo/meta";

const N = "#0B1F4D", G = "#6EC026";
const WA_BOT = "25377094141", WA_COM = "25377239292";
const wa = (num, msg) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

const SLIDE_SLUGS = ["auto", "maritime", "multirisque", "habitation", "voyage"];

const T = {
  fr: {
    heroCtaSub1: "Assistant disponible 24h/24 · Réponse immédiate",
    heroCtaSub2: "Conseiller entreprises",
    pillars: [
      { icon: "💰", t: "Surplus redistribué", d: "38M FDJ reversés à nos membres en 2025. L'excédent vous appartient." },
      { icon: "🌍", t: "Croissance régionale", d: "Djibouti, Kenya, Somaliland, Ouganda. Le groupe Takaful de la Corne de l'Afrique." },
      { icon: "🚗", t: "Assistance routière en option", d: "Dépannage 24h/24 7j/7 disponible en option sur votre assurance auto." },
      { icon: "⚡", t: "Sinistres réglés rapidement", d: "Cadence de règlement de 65% — 3× supérieure au marché." },
    ],
    stats: [{ v: 2020, l: "Année de création" }, { v: 4, l: "Pays d'implantation" }, { v: 11, l: "Produits Takaful" }, { v: 38, l: "Millions FDJ redistribués", suffix: "M" }],
    productsTitle: "Votre protection, votre choix", productsSub: "Plus de 10 solutions Takaful, conformes à la Charia",
    tabI: "Particuliers", tabB: "Entreprises", discover: "Découvrir →",
    takaful: {
      eye: "Le modèle Takaful", title: "L'assurance qui fonctionne autrement",
      sub: "Vos cotisations sont mutualisées dans un fonds solidaire. Zéro Riba, zéro Maysir, zéro Gharar.",
      steps: [
        { n: "01", t: "Fonds solidaire", d: "Les cotisations sont mutualisées dans un fonds destiné à protéger les assurés." },
        { n: "02", t: "Gestion éthique", d: "Modèle Wakala transparent. Placements 100% conformes à la Charia." },
        { n: "03", t: "Surplus reversé", d: "Quand le fonds génère un excédent après sinistres, une partie est reversée aux membres éligibles." },
      ],
    },
    surplus: { eye: "Partager le surplus", t1: "Modèle coopératif & solidaire.", t2: "L'excédent vous revient.", growth: "+192% en 3 ans", unit: "M FDJ" },
    assistance: {
      eye: "Assistance routière — en option", title: "En panne à 3h du matin ? On arrive.",
      d: "L'assistance dépannage 24h/24 et 7j/7 est disponible en option sur votre assurance auto, partout à Djibouti. Un appel, et notre équipe est en route.",
      steps: ["Appelez le 21 35 04 03 ou WhatsApp", "Géolocalisation et diagnostic immédiat", "Dépannage ou remorquage pris en charge"],
      cta: "Découvrir l'assurance auto",
    },
    claims: {
      eye: "Gestion des sinistres", title: "Déclarez en 3 minutes. Réglé 3× plus vite.",
      d: "Cadence de règlement de 65% contre ~18% pour le marché. Notre promesse : une gestion rapide et efficace.",
      cta: "Déclarer un sinistre", msg: "Bonjour, je souhaite déclarer un sinistre",
    },
    group: {
      eye: "Tamini Group", title: "Le groupe Takaful de la Corne de l'Afrique",
      items: [{ f: "🇩🇯", c: "Djibouti", s: "Siège — opérationnel" }, { f: "🇸🇴", c: "Somaliland", s: "Tamini Insurance Co · Hargeisa" }, { f: "🇰🇪", c: "Kenya", s: "65% de Takaful Insurance of Africa" }, { f: "🇺🇬", c: "Ouganda", s: "1ère licence Takaful — Mars 2026" }],
    },
    chatbot: {
      eye: "En ligne depuis le 10 juillet", title: "Votre conseiller Takaful, disponible 24h/24 sur WhatsApp",
      d: "Devis instantané, questions sur vos garanties, déclaration de sinistre : notre assistant intelligent vous répond immédiatement.",
      cta: "Discuter avec l'assistant", msg: "Bonjour ! Je découvre le site Tamini et j'aimerais en savoir plus.",
    },
    cta: {
      t1: "Protégez ce qui compte.", t2: "Dès aujourd'hui.", sub: "Diagnostic gratuit de vos besoins en 3 minutes. Sans engagement.",
      b1: "Devis gratuit via WhatsApp", b2: "Parler à un conseiller",
      trust: "✓ Conforme Charia · ✓ Surplus redistribué · ✓ Sinistres réglés 3× plus vite",
      msgB2C: "Bonjour, je souhaite un diagnostic gratuit de mes besoins d'assurance",
      msgB2B: "Bonjour, je représente une entreprise et souhaite parler à un conseiller",
    },
  },
  en: {
    heroCtaSub1: "Assistant available 24/7 · Immediate response",
    heroCtaSub2: "Business advisor",
    pillars: [
      { icon: "💰", t: "Surplus shared", d: "38M DJF returned to members in 2025. The surplus belongs to you." },
      { icon: "🌍", t: "Regional growth", d: "Djibouti, Kenya, Somaliland, Uganda. The Horn of Africa's Takaful group." },
      { icon: "🚗", t: "Roadside assistance — optional", d: "24/7 breakdown service available as an option on your motor insurance." },
      { icon: "⚡", t: "Claims settled fast", d: "65% settlement rate — 3× above market." },
    ],
    stats: [{ v: 2020, l: "Founded" }, { v: 4, l: "Countries" }, { v: 11, l: "Takaful products" }, { v: 38, l: "Million DJF redistributed", suffix: "M" }],
    productsTitle: "Your protection, your choice", productsSub: "10+ Sharia-compliant Takaful solutions",
    tabI: "Individuals", tabB: "Business", discover: "Discover →",
    takaful: {
      eye: "The Takaful model", title: "Insurance that works differently",
      sub: "Your contributions are pooled in a solidarity fund. Zero Riba, zero Maysir, zero Gharar.",
      steps: [
        { n: "01", t: "Solidarity fund", d: "Contributions are pooled in a fund designed to protect the insured." },
        { n: "02", t: "Ethical management", d: "Transparent Wakala model. 100% Sharia-compliant investments." },
        { n: "03", t: "Surplus returned", d: "When the fund generates a surplus after claims, part is returned to eligible members." },
      ],
    },
    surplus: { eye: "Sharing the surplus", t1: "Cooperative & solidarity model.", t2: "The surplus comes back to you.", growth: "+192% in 3 years", unit: "M DJF" },
    assistance: {
      eye: "Roadside assistance — optional", title: "Broken down at 3am? We're coming.",
      d: "24/7 breakdown assistance is available as an option on your motor insurance, anywhere in Djibouti. One call, and our team is on the way.",
      steps: ["Call 21 35 04 03 or WhatsApp", "Immediate geolocation and diagnosis", "Repair or towing covered"],
      cta: "Discover motor insurance",
    },
    claims: {
      eye: "Claims management", title: "Declare in 3 minutes. Settled 3× faster.",
      d: "65% settlement rate versus ~18% market average. Our promise: fast, efficient processing.",
      cta: "File a claim", msg: "Hello, I would like to file a claim",
    },
    group: {
      eye: "Tamini Group", title: "The Horn of Africa's Takaful group",
      items: [{ f: "🇩🇯", c: "Djibouti", s: "Headquarters — operational" }, { f: "🇸🇴", c: "Somaliland", s: "Tamini Insurance Co · Hargeisa" }, { f: "🇰🇪", c: "Kenya", s: "65% of Takaful Insurance of Africa" }, { f: "🇺🇬", c: "Uganda", s: "First Takaful license — March 2026" }],
    },
    chatbot: {
      eye: "Live since July 10", title: "Your Takaful advisor, available 24/7 on WhatsApp",
      d: "Instant quotes, coverage questions, claims filing: our intelligent assistant responds immediately.",
      cta: "Chat with the assistant", msg: "Hello! I'm exploring the Tamini website and would like to know more.",
    },
    cta: {
      t1: "Protect what matters.", t2: "Starting today.", sub: "Free needs assessment in 3 minutes. No commitment.",
      b1: "Free quote via WhatsApp", b2: "Talk to an advisor",
      trust: "✓ Sharia-compliant · ✓ Surplus shared · ✓ Claims settled 3× faster",
      msgB2C: "Hello, I would like a free insurance needs assessment",
      msgB2B: "Hello, I represent a company and want to speak with an advisor",
    },
  },
  ar: {
    heroCtaSub1: "مساعد متاح 24/7 · رد فوري",
    heroCtaSub2: "مستشار الشركات",
    pillars: [
      { icon: "💰", t: "إعادة توزيع الفائض", d: "38 مليون فرنك أعيدت لأعضائنا في 2025. الفائض ملك لكم." },
      { icon: "🌍", t: "نمو إقليمي", d: "جيبوتي، كينيا، صوماليلاند، أوغندا. مجموعة التكافل في القرن الأفريقي." },
      { icon: "🚗", t: "مساعدة الطريق — كخيار", d: "خدمة الإغاثة 24/7 متاحة كخيار على تأمين سيارتك." },
      { icon: "⚡", t: "تسوية سريعة للمطالبات", d: "معدل تسوية 65% — ثلاثة أضعاف السوق." },
    ],
    stats: [{ v: 2020, l: "سنة التأسيس" }, { v: 4, l: "دول" }, { v: 11, l: "منتجات تكافلية" }, { v: 38, l: "مليون فرنك أعيد توزيعها", suffix: "M" }],
    productsTitle: "حمايتكم، اختياركم", productsSub: "أكثر من 10 حلول تكافلية متوافقة مع الشريعة",
    tabI: "الأفراد", tabB: "الشركات", discover: "اكتشف ←",
    takaful: {
      eye: "نموذج التكافل", title: "تأمين يعمل بطريقة مختلفة",
      sub: "اشتراكاتكم تُجمع في صندوق تضامني. صفر ربا، صفر ميسر، صفر غرر.",
      steps: [
        { n: "٠١", t: "صندوق تضامني", d: "تُجمع الاشتراكات في صندوق مخصص لحماية المؤمَّنين." },
        { n: "٠٢", t: "إدارة أخلاقية", d: "نموذج وكالة شفاف. استثمارات متوافقة 100% مع الشريعة." },
        { n: "٠٣", t: "إعادة الفائض", d: "عندما يحقق الصندوق فائضاً بعد المطالبات، يُعاد جزء منه للأعضاء المؤهلين." },
      ],
    },
    surplus: { eye: "مشاركة الفائض", t1: "نموذج تعاوني وتضامني.", t2: "الفائض يعود إليكم.", growth: "+192% في 3 سنوات", unit: "م فرنك" },
    assistance: {
      eye: "مساعدة الطريق — كخيار", title: "عطل في الثالثة فجراً؟ نحن قادمون.",
      d: "مساعدة الإغاثة 24/7 متاحة كخيار على تأمين سيارتك في كل أنحاء جيبوتي. اتصال واحد وفريقنا في الطريق.",
      steps: ["اتصلوا على 21 35 04 03 أو واتساب", "تحديد الموقع والتشخيص فوراً", "إصلاح أو سحب مغطى"],
      cta: "اكتشف تأمين السيارات",
    },
    claims: {
      eye: "إدارة المطالبات", title: "صرّح في 3 دقائق. تسوية أسرع 3 مرات.",
      d: "معدل تسوية 65% مقابل ~18% لمتوسط السوق. وعدنا: معالجة سريعة وفعالة.",
      cta: "تقديم مطالبة", msg: "مرحباً، أريد تقديم مطالبة",
    },
    group: {
      eye: "مجموعة تأميني", title: "مجموعة التكافل في القرن الأفريقي",
      items: [{ f: "🇩🇯", c: "جيبوتي", s: "المقر — عملياتي" }, { f: "🇸🇴", c: "صوماليلاند", s: "Tamini Insurance Co · هرجيسا" }, { f: "🇰🇪", c: "كينيا", s: "65% من Takaful Insurance of Africa" }, { f: "🇺🇬", c: "أوغندا", s: "أول رخصة تكافل — مارس 2026" }],
    },
    chatbot: {
      eye: "متاح منذ 10 يوليو", title: "مستشاركم التكافلي، متاح 24/7 على واتساب",
      d: "عروض أسعار فورية، أسئلة عن التغطيات، تقديم المطالبات: مساعدنا الذكي يجيبكم فوراً.",
      cta: "تحدث مع المساعد", msg: "مرحباً! أتصفح موقع تأميني وأود معرفة المزيد.",
    },
    cta: {
      t1: "احمِ ما يهمك.", t2: "ابتداءً من اليوم.", sub: "تقييم مجاني لاحتياجاتكم في 3 دقائق. بدون التزام.",
      b1: "عرض سعر مجاني عبر واتساب", b2: "تحدث مع مستشار",
      trust: "✓ متوافق مع الشريعة · ✓ فائض معاد توزيعه · ✓ تسوية أسرع 3 مرات",
      msgB2C: "مرحباً، أريد تقييماً مجانياً لاحتياجاتي التأمينية",
      msgB2B: "مرحباً، أمثل شركة وأريد التحدث مع مستشار",
    },
  },
};

function useInView(th = 0.2) {
  const r = React.useRef(null); const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: th });
    o.observe(el); return () => o.disconnect();
  }, [th]);
  return [r, v];
}
function useCount(end, dur = 1600, go = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return; let s = 0; const step = end / (dur / 16);
    const id = setInterval(() => { s += step; if (s >= end) { setV(end); clearInterval(id); } else setV(Math.floor(s)); }, 16);
    return () => clearInterval(id);
  }, [go, end, dur]);
  return v;
}
function WaIcon({ size = 18 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.54-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.312-.726-5.994-1.957l-.42-.31-2.791.905.928-2.723-.34-.44A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>);
}

export default function Home() {
  const { lang, rtl } = useLang();
  const [slide, setSlide] = useState(0);
  const [ak, setAk] = useState(0);
  const [tab, setTab] = useState("indiv");
  const t = T[lang];

  useEffect(() => {
    const id = setInterval(() => { setSlide(s => (s + 1) % SLIDE_SLUGS.length); setAk(k => k + 1); }, 5500);
    return () => clearInterval(id);
  }, []);

  const [statsRef, statsVis] = useInView(0.4);
  const [surpRef, surpVis] = useInView(0.3);
  const s0 = useCount(2020, 1400, statsVis), s1 = useCount(4, 1600, statsVis), s2 = useCount(11, 1600, statsVis), s3 = useCount(38, 1800, statsVis);
  const statVals = [s0, s1, s2, s3];

  const curSlug = SLIDE_SLUGS[slide];
  const curProduct = PRODUCTS[curSlug];
  const S = curProduct[lang];
  const surplusData = [{ y: "2022", v: 13 }, { y: "2023", v: 22 }, { y: "2024", v: 27 }, { y: "2025", v: 38 }];

  const meta = PAGE_META.home[lang];

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{ fontFamily: rtl ? "'Cairo','Inter',sans-serif" : "'Inter',system-ui,sans-serif", color: "#1E293B", background: "#fff" }}>
      <Seo title={meta.title} description={meta.description} path="/" schema={organizationSchema} />
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes wordUp{from{opacity:0;transform:translateY(110%)}to{opacity:1;transform:translateY(0)}}
        @keyframes kenB{from{transform:scale(1.09)}to{transform:scale(1.0)}}
        @keyframes pulseDot{0%,100%{opacity:.4}50%{opacity:1}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
        .pcard{transition:all .35s cubic-bezier(.16,1,.3,1)}
        .pcard:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(11,31,77,.14)}
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 620, overflow: "hidden", background: "#0B1F4D" }}>
        {SLIDE_SLUGS.map((slug, i) => (
          <div key={slug} style={{ position: "absolute", inset: 0, opacity: i === slide ? 1 : 0, transition: "opacity 1.2s ease", zIndex: i === slide ? 1 : 0 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(/images/${PRODUCTS[slug].hero}.webp)`, backgroundSize: "cover", backgroundPosition: "center", animation: i === slide ? "kenB 8s ease-out both" : "none" }} />
            <div style={{ position: "absolute", inset: 0, background: rtl ? "linear-gradient(225deg, rgba(7,16,40,.92) 0%, rgba(11,31,77,.68) 55%, rgba(11,31,77,.3) 100%)" : "linear-gradient(135deg, rgba(7,16,40,.92) 0%, rgba(11,31,77,.68) 55%, rgba(11,31,77,.3) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(7,16,40,.75), transparent)" }} />
          </div>
        ))}
        <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", alignItems: "center", padding: "0 clamp(16px,5vw,80px)" }}>
          <div style={{ maxWidth: 700 }}>
            <div key={`tg-${ak}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(110,192,38,.45)", borderRadius: 50, marginBottom: 26, animation: "fadeDown .5s ease both" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: G, letterSpacing: 1 }}>{S.badge}</span>
            </div>
            <h1 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontWeight: 900, color: "#fff", lineHeight: 1.08, letterSpacing: rtl ? 0 : "-.02em", marginBottom: 18 }}>
              {[S.h1, S.h2].map((line, li) => (
                <div key={`${ak}-${li}`} style={{ overflow: "hidden" }}>
                  <div style={{ fontSize: li === 0 ? "clamp(38px,5.5vw,66px)" : "clamp(40px,6vw,70px)", color: li === 1 ? G : "#fff", animation: `wordUp .7s cubic-bezier(.16,1,.3,1) ${.1 + li * .15}s both` }}>{line}</div>
                </div>
              ))}
            </h1>
            <p key={`sb-${ak}`} style={{ fontSize: "clamp(13px,1.7vw,15px)", color: "rgba(255,255,255,.72)", lineHeight: 1.8, marginBottom: 34, animation: "fadeUp .7s ease .6s both", fontStyle: rtl ? "normal" : "italic" }}>« {S.hook} »</p>
            <div key={`ct-${ak}`} style={{ display: "flex", flexWrap: "wrap", gap: 14, animation: "fadeUp .7s ease .8s both" }}>
              <div>
                <a href={wa(curProduct.b2b ? WA_COM : WA_BOT, S.msg)} target="_blank" rel="noopener noreferrer" style={{ padding: "16px 32px", background: G, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none", boxShadow: "0 8px 32px rgba(110,192,38,.35)", display: "flex", alignItems: "center", gap: 10 }}>
                  <WaIcon />{S.ctaBtn}
                </a>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 5 }}>{curProduct.b2b ? t.heroCtaSub2 : t.heroCtaSub1}</div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 38, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.1)" }}>
              {t.pillars.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 13px", background: "rgba(255,255,255,.07)", borderRadius: 50, border: "1px solid rgba(255,255,255,.1)" }}>
                  <span style={{ fontSize: 13 }}>{p.icon}</span>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,.85)" }}>{p.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", gap: 8 }}>
          {SLIDE_SLUGS.map((_, i) => (
            <button key={i} onClick={() => { setSlide(i); setAk(k => k + 1); }} style={{ width: i === slide ? 30 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === slide ? G : "rgba(255,255,255,.3)", transition: "all .4s" }} />
          ))}
        </div>
      </section>

      {/* PILLARS BAND */}
      <section style={{ background: "#0B1F4D", padding: "0 20px", borderTop: "3px solid #6EC026" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1 }}>
          {t.pillars.map((p, i) => (
            <div key={i} style={{ padding: "28px 22px", borderInlineEnd: i < 3 ? "1px solid rgba(255,255,255,.07)" : "none" }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: G, marginBottom: 6 }}>{p.t}</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.55)", lineHeight: 1.6 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ background: "#fff", padding: "56px 20px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24, textAlign: "center" }}>
          {t.stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, fontWeight: 900, color: i === 3 ? G : N, lineHeight: 1 }}>{statVals[i]}{s.suffix || ""}{i === 2 ? "+" : ""}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b", marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ background: "#F8FAFF", padding: "76px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: N }}>{t.productsTitle}</h2>
            <p style={{ fontSize: 15, color: "#64748b", marginTop: 10 }}>{t.productsSub}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 38 }}>
            {[["indiv", t.tabI], ["biz", t.tabB]].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} style={{ padding: "12px 30px", borderRadius: 50, border: "2px solid", fontSize: 15, fontWeight: 700, cursor: "pointer", background: tab === k ? N : "#fff", color: tab === k ? "#fff" : "#64748b", borderColor: tab === k ? N : "#e2e8f0" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {(tab === "indiv" ? PARTICULIERS : ENTREPRISES).map((slug) => {
              const p = PRODUCTS[slug]; const pt = p[lang];
              const to = `/${p.segment}/${slug}`;
              return (
                <Link key={slug} to={to} className="pcard" style={{ textDecoration: "none", borderRadius: 18, overflow: "hidden", border: "1px solid #e8ecf0", background: "#fff", display: "block" }}>
                  <div style={{ height: 160, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(/images/${p.card}.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,31,77,.1) 20%, rgba(7,16,40,.82))" }} />
                    <div style={{ position: "absolute", bottom: 12, insetInlineStart: 16, insetInlineEnd: 16 }}>
                      <h3 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>{pt.badge}</h3>
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, marginBottom: 14, fontStyle: rtl ? "normal" : "italic" }}>« {pt.hook} »</p>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: G }}>{t.discover}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAKAFUL */}
      <section id="takaful" style={{ background: "#fff", padding: "76px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{t.takaful.eye}</span>
            <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(24px,3.8vw,38px)", fontWeight: 800, color: N, marginTop: 10 }}>{t.takaful.title}</h2>
            <p style={{ fontSize: 14.5, color: "#64748b", marginTop: 12, maxWidth: 560, margin: "12px auto 0", lineHeight: 1.7 }}>{t.takaful.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 22 }}>
            {t.takaful.steps.map((s, i) => (
              <div key={i} style={{ borderRadius: 20, padding: "34px 26px", border: "1px solid #e8ecf0", background: "#fafffe", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: 3, borderRadius: "20px 20px 0 0", background: i === 2 ? G : "linear-gradient(90deg,#0B1F4D,#6EC026)" }} />
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, fontWeight: 900, color: "rgba(11,31,77,.07)", lineHeight: 1 }}>{s.n}</span>
                <h3 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: N, marginTop: 8, marginBottom: 9 }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.75 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURPLUS */}
      <section ref={surpRef} style={{ background: "linear-gradient(160deg,#0B1F4D,#0d2a5e 60%,#0B1F4D)", padding: "76px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{t.surplus.eye}</span>
            <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(20px,3.4vw,32px)", fontWeight: 800, color: "#fff", marginTop: 10, lineHeight: 1.3 }}>
              {t.surplus.t1}<br /><span style={{ color: G }}>{t.surplus.t2}</span>
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "clamp(18px,5vw,52px)", height: 210 }}>
            {surplusData.map((d, i) => {
              const h = (d.v / 38) * 170;
              return (
                <div key={d.y} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: G }}>{d.v}{t.surplus.unit}</span>
                  <div style={{ width: "clamp(46px,8vw,70px)", height: h, borderRadius: "11px 11px 4px 4px", background: i === 3 ? "linear-gradient(180deg,#6EC026,rgba(110,192,38,.35))" : "linear-gradient(180deg,#8fd94e,rgba(110,192,38,.25))", transform: surpVis ? "scaleY(1)" : "scaleY(0)", transformOrigin: "bottom", transition: `transform .9s cubic-bezier(.16,1,.3,1) ${.1 + i * .12}s` }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.55)" }}>{d.y}</span>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", background: "rgba(110,192,38,.12)", borderRadius: 50, border: "1px solid rgba(110,192,38,.22)", fontSize: 14, fontWeight: 700, color: G }}>📈 {t.surplus.growth}</span>
          </div>
        </div>
      </section>

      {/* ASSISTANCE ROUTIÈRE — EN OPTION */}
      <section style={{ background: "#fff", padding: "76px 20px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 44, alignItems: "center" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(11,31,77,.12)", position: "relative" }}>
            <img src="/images/hero-auto.webp" alt="Véhicule sur une route côtière de Djibouti — assistance routière Tamini disponible en option 24h/24" style={{ width: "100%", display: "block", objectFit: "cover", height: 320 }} />
            <div style={{ position: "absolute", top: 14, insetInlineStart: 14, padding: "7px 16px", background: G, borderRadius: 50, fontSize: 12, fontWeight: 800, color: "#fff" }}>OPTION</div>
          </div>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{t.assistance.eye}</span>
            <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 800, color: N, marginTop: 10, marginBottom: 14, lineHeight: 1.2 }}>{t.assistance.title}</h2>
            <p style={{ fontSize: 14.5, color: "#64748b", lineHeight: 1.75, marginBottom: 22 }}>{t.assistance.d}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
              {t.assistance.steps.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(110,192,38,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: G, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontSize: 14, color: "#1E293B" }}>{s}</span>
                </div>
              ))}
            </div>
            <Link to="/particuliers/auto" style={{ padding: "14px 28px", background: N, color: "#fff", border: "none", borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              {t.assistance.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* CLAIMS */}
      <section id="claims" style={{ background: "#F8FAFF", padding: "76px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{t.claims.eye}</span>
          <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(24px,3.6vw,36px)", fontWeight: 800, color: N, marginTop: 10 }}>{t.claims.title}</h2>
          <p style={{ fontSize: 14.5, color: "#64748b", marginTop: 12, maxWidth: 600, margin: "12px auto 28px", lineHeight: 1.7 }}>{t.claims.d}</p>
          <a href={wa(WA_BOT, t.claims.msg)} target="_blank" rel="noopener noreferrer" style={{ padding: "15px 34px", background: G, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 8px 28px rgba(110,192,38,.3)" }}>
            <WaIcon />{t.claims.cta}
          </a>
        </div>
      </section>

      {/* TAMINI GROUP (aperçu) */}
      <section style={{ background: "#fff", padding: "76px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: "uppercase", letterSpacing: 2 }}>{t.group.eye}</span>
            <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(24px,3.8vw,38px)", fontWeight: 800, color: N, marginTop: 10 }}>{t.group.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {t.group.items.map((it, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px", background: "#F8FAFF", borderRadius: 14, border: "1px solid #e8ecf0" }}>
                <span style={{ fontSize: 28 }}>{it.f}</span>
                <div>
                  <div style={{ fontWeight: 700, color: N, fontSize: 15 }}>{it.c}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{it.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <section style={{ background: "linear-gradient(135deg,#071028,#0B1F4D)", padding: "72px 20px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(110,192,38,.14)", borderRadius: 50, fontSize: 11, fontWeight: 800, color: G, marginBottom: 18 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: G, animation: "pulseDot 1.6s infinite" }} />{t.chatbot.eye}
          </span>
          <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(22px,3.4vw,32px)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>{t.chatbot.title}</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.75, marginBottom: 24 }}>{t.chatbot.d}</p>
          <a href={wa(WA_BOT, t.chatbot.msg)} target="_blank" rel="noopener noreferrer" style={{ padding: "15px 32px", background: "#25D366", color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 8px 28px rgba(37,211,102,.35)" }}>
            <WaIcon />{t.chatbot.cta}
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#F8FAFF", padding: "80px 20px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
          <img src="/images/logo.png" alt="Logo Tamini Insurance SA" width="56" height="56" style={{ width: 56, marginBottom: 18 }} />
          <h2 style={{ fontFamily: rtl ? "'Cairo',sans-serif" : "'Playfair Display',serif", fontSize: "clamp(28px,4.4vw,42px)", fontWeight: 900, color: N, lineHeight: 1.2 }}>
            {t.cta.t1}<br /><span style={{ color: G }}>{t.cta.t2}</span>
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", marginTop: 14, marginBottom: 10 }}>{t.cta.sub}</p>
          <p style={{ fontSize: 12.5, color: G, fontWeight: 700, marginBottom: 32 }}>{t.cta.trust}</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <a href={wa(WA_BOT, t.cta.msgB2C)} target="_blank" rel="noopener noreferrer" style={{ padding: "17px 40px", background: G, color: "#fff", border: "none", borderRadius: 14, fontSize: 16, fontWeight: 800, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 10px 36px rgba(110,192,38,.3)" }}>
              <WaIcon />{t.cta.b1}
            </a>
            <a href={wa(WA_COM, t.cta.msgB2B)} target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", background: "transparent", color: N, border: "2px solid #0B1F4D", borderRadius: 14, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              {t.cta.b2}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
