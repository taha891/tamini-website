import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ProductAuto from "./pages/ProductAuto";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";

// Barre de démonstration — permet de naviguer entre les pages pendant la revue.
// À retirer (ou remplacer par un vrai header) une fois la navigation finale intégrée.
function DemoBar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/produit-auto", label: "Produit — Auto" },
    { to: "/faq", label: "FAQ" },
    { to: "/blog", label: "Blog" },
    { to: "/confidentialite", label: "Confidentialité" },
  ];
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 2000, display: "flex", flexWrap: "wrap",
      gap: 8, alignItems: "center", padding: "10px 16px",
      background: "#1E293B", borderBottom: "2px solid #6EC026",
      fontFamily: "system-ui, sans-serif",
    }}>
      <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, marginRight: 8 }}>
        🔧 MENU DE REVUE :
      </span>
      {links.map(l => (
        <Link key={l.to} to={l.to} style={{
          padding: "6px 12px", borderRadius: 6, fontSize: 13, fontWeight: 600,
          textDecoration: "none",
          background: location.pathname === l.to ? "#6EC026" : "rgba(255,255,255,0.08)",
          color: "#fff",
        }}>{l.label}</Link>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DemoBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit-auto" element={<ProductAuto />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/confidentialite" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
