"use client";

import { useEffect, useState } from "react";
import { Category, getWhatsAppUrl } from "../../lib/products";
import { SiteHeader } from "../layout/site-header";
import { SiteFooter } from "../layout/site-footer";
import { HeroSection } from "./hero-section";
import { ProductCatalog } from "./product-catalog";
import { SeoIntro } from "./seo-intro";

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Pijamas");
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  const buyProduct = (productName: string) => {
    window.open(getWhatsAppUrl(productName), "_blank");
  };

  return (
    <main>
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <HeroSection />
      <ProductCatalog
        activeCategory={activeCategory}
        isLoading={isLoading}
        onCategoryChange={setActiveCategory}
        onBuy={buyProduct}
      />
      <SeoIntro />
      <SiteFooter />
    </main>
  );
}
