import React, { createContext, useContext, useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
// Contexte de langue global — s'applique à TOUTES les pages.
// Toute nouvelle page n'a qu'à appeler useLang() pour être
// automatiquement multilingue et cohérente (FR / EN / AR + RTL).
// ─────────────────────────────────────────────────────────────

const LanguageContext = createContext();

export const LANGS = { fr: "FR", en: "EN", ar: "ع" };
export const RTL_LANGS = ["ar"];

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tamini_lang") || "fr";
    }
    return "fr";
  });

  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("tamini_lang", l);
    }
  };

  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
    }
  }, [dir, lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, rtl: dir === "rtl" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback si un composant est utilisé hors Provider (sécurité)
    return { lang: "fr", setLang: () => {}, dir: "ltr", rtl: false };
  }
  return ctx;
}
