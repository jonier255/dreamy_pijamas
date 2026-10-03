"use client";

import { useEffect, useMemo, useState } from "react";
import { Category, getWhatsAppUrl, products } from "@/lib/products";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FeaturedCarousel } from "./featured-carousel";
import { HeroSection } from "./hero-section";
import { ProductCatalog } from "./product-catalog";
import { SeoIntro } from "./seo-intro";

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Pijamas");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredProducts = useMemo(() => products.slice(0, 3), []);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const slideTimer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % featuredProducts.length),
      5200,
    );
    return () => window.clearInterval(slideTimer);
  }, [featuredProducts.length]);

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
      <FeaturedCarousel
        activeSlide={activeSlide}
        onSlideChange={setActiveSlide}
        onBuy={buyProduct}
      />
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
