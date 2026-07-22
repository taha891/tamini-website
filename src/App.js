import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Hub from "./pages/Hub";
import ProductPage from "./pages/ProductPage";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Hubs */}
            <Route path="/particuliers" element={<Hub segment="particuliers" />} />
            <Route path="/entreprises" element={<Hub segment="entreprises" />} />

            {/* Product pages — data-driven, one component serves all 11 products */}
            <Route path="/particuliers/:slug" element={<ProductPage />} />
            <Route path="/entreprises/:slug" element={<ProductPage />} />

            {/* Standalone pages */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/confidentialite" element={<Privacy />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
